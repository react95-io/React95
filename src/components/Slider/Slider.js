import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBoxStyles, createBorderStyles } from '../common';

import Cutout from '../Cutout/Cutout';

const Wrapper = styled.div`
  position: relative;
  touch-action: none;
`;

const Groove = styled(Cutout)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 8px;
  width: 100%;
`;

const Thumb = styled.span`
  height: 32px;
  width: 16px;
  position: relative;
  transform: translateX(-50%);
  z-index: 1;
  ${createBoxStyles()}
  ${createBorderStyles()}
`;

const tickHeight = 6;
const Tick = styled.span`
  display: inline-block;
  position: absolute;
  bottom: ${-tickHeight}px;
  height: ${tickHeight}px;
  border-left: 1px solid ${({ theme }) => theme.text};
  border-right: 1px solid ${({ theme }) => theme.text};
`;
const Mark = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-0.5ch, calc(100% + 2px));
  font-size: 0.875rem;
`;
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

function clamp(value, min, max) {
  return Math.min(Math.max(min, value), max);
}
// function valueToPercent(value, min, max) {
//   return ((value - min) * 100) / (max - min);
// }

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
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
const Slider = ({
  //   value,
  defaultValue,
  step,
  min,
  max,
  width,
  ticks,
  onChange,
  name
}) => {
  const [val, setVal] = useState(defaultValue);

  const ref = useRef();
  const touchId = React.useRef();

  const ticksNumber = Math.floor((max - min) / step);
  const test = step + min + max;

  const getFingerNewValue = React.useCallback(
    finger => {
      const { current: slider } = ref;
      const rect = slider.getBoundingClientRect();
      const percent = (finger.x - rect.left) / rect.width;
      let newValue;
      newValue = percentToValue(percent, min, max);
      newValue = roundValueToStep(newValue, step, min);

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
    const newValue = getFingerNewValue(finger);

    setVal(newValue);

    if (onChange) {
      onChange(event, newValue);
    }
  });
  const handleTouchEnd = useEventCallback(event => {
    const finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    // const newValue = getFingerNewValue(finger);
    // if (onChangeCommitted) {
    //   onChangeCommitted(event, newValue);
    // }

    touchId.current = undefined;

    const doc = ownerDocument(ref.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  });
  const handleMouseDown = useEventCallback(event => {
    // if (onMouseDown) {
    //   onMouseDown(event);
    // }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    const newValue = getFingerNewValue(finger);

    setVal(newValue);
    if (onChange) {
      onChange(newValue);
    }
    const doc = ownerDocument(ref.current);
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
    const newValue = getFingerNewValue(finger);
    setVal(newValue);

    if (onChange) {
      onChange(event, newValue);
    }

    const doc = ownerDocument(ref.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  React.useEffect(() => {
    const { current: slider } = ref;
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
    <Wrapper style={{ width }} onMouseDown={handleMouseDown} ref={ref}>
      {/* put onChange callback to the input?  */}
      <input type='hidden' value={val || 0} name={name} />
      {step &&
        ticks &&
        Array(ticksNumber + 1)
          .fill(0)
          .map((_, i) => (
            <Tick
              style={{ left: `${(step / (max - min)) * 100 * i}%` }}
              // key={(step / (max - min)) * 100 * i}
            >
              <Mark>{i * step}</Mark>
            </Tick>
          ))}
      <Groove />
      <Thumb style={{ left: `${(100 * val) / (max - min)}%` }} />
      {0 === 1 && test}
    </Wrapper>
  );
};

// defaultValue
// useDebugValue
// disabled
// ticks
// max
// min
// onChange
// onChangeCommited
// orientation
// step

Slider.defaultProps = {
  //   value: 0,
  defaultValue: null,
  step: null,
  min: 0,
  max: 1,
  width: '100%',
  ticks: false,
  onChange: null,
  name: null
};

Slider.propTypes = {
  //   value: propTypes.number,
  defaultValue: propTypes.number,

  step: propTypes.number,
  min: propTypes.number,
  max: propTypes.number,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  ticks: propTypes.bool,

  onChange: propTypes.func,
  name: propTypes.string
};
export default Slider;
