import React, { useRef } from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import {
  createBoxStyles,
  createBorderStyles,
  createFlatBoxStyles,
  createDisabledTextStyles
} from '../common';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import Cutout from '../Cutout/Cutout';

// helper functions and event handling basically copied from Material UI (https://github.com/mui-org/material-ui) Slider component
function trackFinger(event, touchId) {
  if (touchId.current !== undefined && event.changedTouches) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function useEventCallback(fn) {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React.useCallback((...args) => (0, ref.current)(...args), []);
}
function ownerDocument(node) {
  return (node && node.ownerDocument) || document;
}
function findClosest(values, currentValue) {
  const { index: closestIndex } = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }

    return acc;
  }, null);
  return closestIndex;
}
function clamp(value, min, max) {
  return Math.min(Math.max(min, value), max);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (
      (matissaDecimalPart ? matissaDecimalPart.length : 0) +
      parseInt(parts[1], 10)
    );
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  ${({ vertical, size }) =>
    vertical
      ? css`
          height: ${size};
          margin-right: 1.5rem;
        `
      : css`
          width: ${size};
          margin-bottom: 1.5rem;
        `}

  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
`;
const sharedGrooveStyles = () => css`
  position: absolute;
  ${({ vertical }) =>
    vertical
      ? css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `
      : css`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`;
const StyledGroove = styled(Cutout)`
  ${sharedGrooveStyles()}
`;
const StyledFlatGroove = styled(Cutout)`
  ${sharedGrooveStyles()}

  border-left-color: ${({ theme }) => theme.flatLight};
  border-top-color: ${({ theme }) => theme.flatLight};
  border-right-color: ${({ theme }) => theme.canvas};
  border-bottom-color: ${({ theme }) => theme.canvas};
  &:before {
    border-left-color: ${({ theme }) => theme.flatDark};
    border-top-color: ${({ theme }) => theme.flatDark};
    border-right-color: ${({ theme }) => theme.flatLight};
    border-bottom-color: ${({ theme }) => theme.flatLight};
  }
`;
const Thumb = styled.span`
  position: relative;

  z-index: 1;
  
  ${({ vertical }) =>
    vertical
      ? css`
          width: 32px;
          height: 18px;
          transform: translateY(-50%);
        `
      : css`
          height: 32px;
          width: 18px;
          transform: translateX(-50%);
        `}
  ${({ variant }) =>
    variant === 'flat'
      ? css`
          ${createFlatBoxStyles()}
          outline: 2px solid ${({ theme }) => theme.flatDark};
          background: ${({ theme }) => theme.flatLight};

        `
      : css`
          ${createBoxStyles()}
          ${createBorderStyles()}
        `}
    ${({ isDisabled, theme }) =>
      isDisabled &&
      css`
        background-image: ${theme.hatchedBackground};
      `}
`;

const tickHeight = 6;
const Tick = styled.span`
  display: inline-block;
  position: absolute;

  ${({ vertical }) =>
    vertical
      ? css`
          right: ${-tickHeight - 2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${tickHeight}px;
          border-bottom: 2px solid ${({ theme }) => theme.text};
        `
      : css`
          bottom: ${-tickHeight}px;
          height: ${tickHeight}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({ theme }) => theme.text};
          border-right: 1px solid ${({ theme }) => theme.text};
        `}

        color:  ${({ theme }) => theme.text};
  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      ${createDisabledTextStyles()}
      box-shadow: 1px 1px 1px ${theme.textDisabledShadow};
      border-color: ${theme.textDisabled};
    `}
`;
const Mark = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  font-size: 0.875rem;

  ${({ vertical }) =>
    vertical
      ? css`
          transform: translate(${tickHeight + 2}px, ${tickHeight + 1}px);
        `
      : css`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`;

const Slider = ({
  value,
  defaultValue,
  step,
  min,
  max,
  size,
  marks: marksProp,
  onChange,
  onChangeCommitted,
  name,
  vertical,
  variant,
  disabled,
  ...otherProps
}) => {
  const Groove = variant === 'flat' ? StyledFlatGroove : StyledGroove;
  const [val, setVal] = useControlledOrUncontrolled({ value, defaultValue });

  const sliderRef = useRef();
  const touchId = React.useRef();

  const marks =
    marksProp === true
      ? Array(1 + (max - min) / step)
          .fill({ label: null })
          .map((mark, i) => ({ ...mark, value: i * step }))
      : marksProp;

  const getNewValue = React.useCallback(
    finger => {
      const { current: slider } = sliderRef;
      const rect = slider.getBoundingClientRect();

      let percent;
      if (vertical) {
        percent = (rect.bottom - finger.y) / rect.height;
      } else {
        percent = (finger.x - rect.left) / rect.width;
      }
      let newValue;

      newValue = percentToValue(percent, min, max);
      if (step) {
        newValue = roundValueToStep(newValue, step, min);
      } else {
        const marksValues = marks.map(mark => mark.value);
        const closestIndex = findClosest(marksValues, newValue);
        newValue = marksValues[closestIndex];
      }
      newValue = clamp(newValue, min, max);
      return newValue;
    },
    [max, min, step]
  );

  const handleTouchMove = useEventCallback(event => {
    const finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }
    const newValue = getNewValue(finger);

    setVal(newValue);

    if (onChange) {
      onChange(newValue);
    }
  });
  const handleTouchEnd = useEventCallback(event => {
    const finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    const newValue = getNewValue(finger);
    if (onChangeCommitted) {
      onChangeCommitted(newValue);
    }

    touchId.current = undefined;

    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  });
  const handleMouseDown = useEventCallback(event => {
    // TODO should we also pass event together with new value to callbacks? (same thing with other input components)
    // if (onMouseDown) {
    //   onMouseDown(event);
    // }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    const newValue = getNewValue(finger);

    setVal(newValue);
    if (onChange) {
      onChange(newValue);
    }
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  });
  const handleTouchStart = useEventCallback(event => {
    // Workaround as Safari has partial support for touchAction: 'none'.
    event.preventDefault();
    const touch = event.changedTouches[0];
    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(event, touchId);
    const newValue = getNewValue(finger);
    setVal(newValue);

    if (onChange) {
      onChange(newValue);
    }

    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  React.useEffect(() => {
    const { current: slider } = sliderRef;
    slider.addEventListener('touchstart', handleTouchStart);
    const doc = ownerDocument(slider);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      doc.removeEventListener('mousemove', handleTouchMove);
      doc.removeEventListener('mouseup', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchEnd, handleTouchMove, handleTouchStart]);

  return (
    <Wrapper
      isDisabled={disabled}
      vertical={vertical}
      size={size}
      onMouseDown={handleMouseDown}
      ref={sliderRef}
      {...otherProps}
    >
      {/* should we keep the hidden input ? */}
      <input type='hidden' value={val || 0} name={name} disabled={disabled} />
      {marks &&
        marks.map(m => (
          <Tick
            isDisabled={disabled}
            vertical={vertical}
            style={{
              [vertical ? 'bottom' : 'left']: `${(m.value / (max - min)) *
                100}%`
            }}
            key={(m.value / (max - min)) * 100}
          >
            <Mark vertical={vertical}>{m.label}</Mark>
          </Tick>
        ))}
      <Groove vertical={vertical} variant={variant} />
      <Thumb
        style={{
          [vertical ? 'bottom' : 'left']: `${(vertical ? -100 : 0) +
            (100 * val) / (max - min)}%`
        }}
        vertical={vertical}
        variant={variant}
        isDisabled={disabled}
      />
    </Wrapper>
  );
};

Slider.defaultProps = {
  defaultValue: undefined,
  value: undefined,
  step: 1,
  min: 0,
  max: 100,
  size: '100%',
  onChange: null,
  onChangeCommitted: null,

  name: null,
  marks: false,
  vertical: false,
  variant: 'default',
  disabled: false
};

Slider.propTypes = {
  value: propTypes.number,
  defaultValue: propTypes.number,

  step: propTypes.number,
  min: propTypes.number,
  max: propTypes.number,
  size: propTypes.string,
  onChange: propTypes.func,
  onChangeCommitted: propTypes.func,

  name: propTypes.string,
  marks: propTypes.oneOfType([propTypes.bool, propTypes.array]),
  vertical: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat']),
  disabled: propTypes.bool
};
export default Slider;
