// helper functions and event handling basically copied from Material UI (https://github.com/mui-org/material-ui) Slider component
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import styled, { css } from 'styled-components';

import {
  createBorderStyles,
  createBoxStyles,
  createDisabledTextStyles,
  createFlatBoxStyles,
  createHatchedBackground,
  styledDimension
} from '../common';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import useForkRef from '../common/hooks/useForkRef';
import { useIsFocusVisible } from '../common/hooks/useIsFocusVisible';
import { clamp, getSize, roundValueToStep } from '../common/utils';
import { StyledScrollView } from '../ScrollView/ScrollView';
import { CommonStyledProps } from '../types';

type SliderProps = {
  defaultValue?: number;
  disabled?: boolean;
  marks?: boolean | { label?: string; value: number }[];
  max?: number;
  min?: number;
  name?: string;
  onChange?: (
    event:
      | MouseEvent
      | React.KeyboardEvent<HTMLSpanElement>
      | React.MouseEvent<HTMLDivElement>
      | TouchEvent,
    value: number
  ) => void;
  onChangeCommitted?: (
    event: MouseEvent | React.KeyboardEvent<HTMLSpanElement> | TouchEvent,
    value: number
  ) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement>) => void;
  orientation?: 'horizontal' | 'vertical';
  size?: string | number;
  step?: number | null;
  value?: number;
  variant?: 'default' | 'flat';
} & Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'defaultValue' | 'onChange' | 'onMouseDown'
> &
  CommonStyledProps;

function percentToValue(percent: number, min: number, max: number) {
  return (max - min) * percent + min;
}

function trackFinger(
  event: MouseEvent | React.MouseEvent<HTMLDivElement> | TouchEvent,
  touchId: number | undefined
) {
  if (touchId !== undefined && 'changedTouches' in event) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === touchId) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }

    return false;
  }

  if ('clientX' in event) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  return false;
}

function ownerDocument(node?: Element) {
  return (node && node.ownerDocument) || document;
}

function findClosest(values: number[], currentValue: number) {
  const { index: closestIndex } =
    values.reduce<{
      distance: number;
      index: number;
    } | null>((acc, value, index) => {
      const distance = Math.abs(currentValue - value);

      if (
        acc === null ||
        distance < acc.distance ||
        distance === acc.distance
      ) {
        return {
          distance,
          index
        };
      }

      return acc;
    }, null) ?? {};

  return closestIndex ?? -1;
}

type StyledSliderProps = Pick<
  SliderProps,
  'orientation' | 'size' | 'variant'
> & {
  $disabled?: boolean;
  hasMarks?: boolean;
  isFocused?: boolean;
};

const Wrapper = styled.div<StyledSliderProps>`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: ${styledDimension(-1)};
    left: ${styledDimension(-7.5)};
    width: calc(100% + ${styledDimension(15)});
    height: ${({ hasMarks }) =>
      hasMarks ? styledDimension(20.5) : styledDimension(19.5)};
    ${({ isFocused, theme }) =>
      isFocused &&
      css`
        outline: ${styledDimension(1)} dotted ${theme.materialText};
      `}
  }

  ${({ orientation, size }) =>
    orientation === 'vertical'
      ? css<StyledSliderProps>`
          height: ${size};
          margin-right: 1.5rem;
          &:before {
            left: ${styledDimension(-1)};
            top: ${styledDimension(-7.5)};
            height: calc(100% + ${styledDimension(15)});
            width: ${({ hasMarks }) =>
              hasMarks ? styledDimension(20.5) : styledDimension(19.5)};
          }
        `
      : css<StyledSliderProps>`
          width: ${size};
          margin-bottom: 1.5rem;
          &:before {
            top: ${styledDimension(-1)};
            left: ${styledDimension(-7.5)};
            width: calc(100% + ${styledDimension(15)});
            height: ${({ hasMarks }) =>
              hasMarks ? styledDimension(20.5) : styledDimension(19.5)};
          }
        `}

  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`;
const sharedGrooveStyles = () => css<StyledSliderProps>`
  position: absolute;
  ${({ orientation }) =>
    orientation === 'vertical'
      ? css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: ${styledDimension(4)};
        `
      : css`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: ${styledDimension(4)};
          width: 100%;
        `}
`;
const StyledGroove = styled(StyledScrollView)<StyledSliderProps>`
  ${sharedGrooveStyles()}
`;
const StyledFlatGroove = styled(StyledScrollView)<StyledSliderProps>`
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
const Thumb = styled.span<StyledSliderProps>`
  position: relative;
  ${({ orientation }) =>
    orientation === 'vertical'
      ? css`
          width: ${styledDimension(16)};
          height: ${styledDimension(9)};
          right: ${styledDimension(1)};
          transform: translateY(-50%);
        `
      : css`
          height: ${styledDimension(16)};
          width: ${styledDimension(9)};
          top: ${styledDimension(1)};
          transform: translateX(-50%);
        `}
  ${({ variant }) =>
    variant === 'flat'
      ? css`
          ${createFlatBoxStyles()}
          outline: ${styledDimension(1)} solid ${({ theme }) => theme.flatDark};
          background: ${({ theme }) => theme.flatLight};
        `
      : css`
          ${createBoxStyles()}
          ${createBorderStyles()}
          &:focus {
            outline: none;
          }
        `}
    ${({ $disabled, theme }) =>
    $disabled &&
    createHatchedBackground({
      mainColor: theme.material,
      secondaryColor: theme.borderLightest
    })}
`;

const tickHeight = 3;
const Tick = styled.span<StyledSliderProps>`
  display: inline-block;
  position: absolute;

  ${({ orientation }) =>
    orientation === 'vertical'
      ? css`
          right: ${styledDimension(-tickHeight - 1)};
          bottom: 0px;
          transform: translateY(${styledDimension(0.5)});
          width: ${styledDimension(tickHeight)};
          border-bottom: ${styledDimension(1)} solid
            ${({ theme }) => theme.materialText};
        `
      : css`
          bottom: ${styledDimension(-tickHeight)};
          height: ${styledDimension(tickHeight)};
          transform: translateX(${styledDimension(-0.5)});
          border-left: ${styledDimension(0.5)} solid
            ${({ theme }) => theme.materialText};
          border-right: ${styledDimension(0.5)} solid
            ${({ theme }) => theme.materialText};
        `}

  color:  ${({ theme }) => theme.materialText};
  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      ${createDisabledTextStyles()}
      box-shadow: ${styledDimension(0.5)} ${styledDimension(
        0.5
      )} 0px ${theme.materialTextDisabledShadow};
      border-color: ${theme.materialTextDisabled};
    `}
`;
const Mark = styled.div<StyledSliderProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({ orientation }) =>
    orientation === 'vertical'
      ? css`
          transform: translate(
            ${styledDimension(tickHeight + 1)},
            ${styledDimension(tickHeight + 0.5)}
          );
        `
      : css`
          transform: translate(-0.5ch, calc(100% + ${styledDimension(1)}));
        `}
`;

const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      defaultValue,
      disabled = false,
      marks: marksProp = false,
      max = 100,
      min = 0,
      name,
      onChange,
      onChangeCommitted,
      onMouseDown,
      orientation = 'horizontal',
      size = '100%',
      step = 1,
      value,
      variant = 'default',
      ...otherProps
    },
    ref
  ) => {
    const Groove = variant === 'flat' ? StyledFlatGroove : StyledGroove;
    const vertical = orientation === 'vertical';
    const [valueDerived = min, setValueState] = useControlledOrUncontrolled({
      defaultValue,
      onChange: onChange ?? onChangeCommitted,
      value
    });

    const {
      isFocusVisible,
      onBlurVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible<HTMLDivElement>();
    const [focusVisible, setFocusVisible] = useState(false);
    const sliderRef = useRef<HTMLDivElement>();
    const thumbRef = useRef<HTMLSpanElement | null>(null);
    const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
    const handleRef = useForkRef(ref, handleFocusRef);

    const handleFocus = useCallback(
      (event: React.FocusEvent<HTMLSpanElement>) => {
        if (isFocusVisible(event)) {
          setFocusVisible(true);
        }
      },
      [isFocusVisible]
    );

    const handleBlur = useCallback(() => {
      if (focusVisible !== false) {
        setFocusVisible(false);
        onBlurVisible();
      }
    }, [focusVisible, onBlurVisible]);

    const touchId = useRef<number>();

    const marks = useMemo(
      () =>
        marksProp === true && Number.isFinite(step)
          ? [...Array(Math.round((max - min) / (step as number)) + 1)].map(
              (_, index) => ({
                label: undefined,
                value: min + (step as number) * index
              })
            )
          : Array.isArray(marksProp)
          ? marksProp
          : [],
      [marksProp, max, min, step]
    );

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLSpanElement>) => {
        const tenPercents = (max - min) / 10;
        const marksValues = marks.map(mark => mark.value);
        const marksIndex = marksValues.indexOf(valueDerived);
        let newValue = 0;

        switch (event.key) {
          case 'Home':
            newValue = min;
            break;
          case 'End':
            newValue = max;
            break;
          case 'PageUp':
            if (step) {
              newValue = valueDerived + tenPercents;
            }
            break;
          case 'PageDown':
            if (step) {
              newValue = valueDerived - tenPercents;
            }
            break;
          case 'ArrowRight':
          case 'ArrowUp':
            if (step) {
              newValue = valueDerived + step;
            } else {
              newValue =
                marksValues[marksIndex + 1] ||
                marksValues[marksValues.length - 1];
            }
            break;
          case 'ArrowLeft':
          case 'ArrowDown':
            if (step) {
              newValue = valueDerived - step;
            } else {
              newValue = marksValues[marksIndex - 1] || marksValues[0];
            }
            break;
          default:
            return;
        }

        // Prevent scroll of the page
        event.preventDefault();
        if (step) {
          newValue = roundValueToStep(newValue, step, min);
        }

        newValue = clamp(newValue, min, max);

        setValueState(newValue);
        setFocusVisible(true);

        onChange?.(event, newValue);
        onChangeCommitted?.(event, newValue);
      },
      [
        marks,
        max,
        min,
        onChange,
        onChangeCommitted,
        setValueState,
        step,
        valueDerived
      ]
    );

    const getNewValue = useCallback(
      (finger: { x: number; y: number }) => {
        if (!sliderRef.current) {
          return 0;
        }
        const rect = sliderRef.current.getBoundingClientRect();

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
      [marks, max, min, step, vertical]
    );

    const handleTouchMove = useCallback(
      (event: MouseEvent | TouchEvent) => {
        const finger = trackFinger(event, touchId.current);

        if (!finger) {
          return;
        }
        const newValue = getNewValue(finger);

        thumbRef.current?.focus();
        setValueState(newValue);
        setFocusVisible(true);

        onChange?.(event, newValue);
      },
      [getNewValue, onChange, setValueState]
    );

    const handleTouchEnd = useCallback(
      (event: MouseEvent | TouchEvent) => {
        const finger = trackFinger(event, touchId.current);

        if (!finger) {
          return;
        }

        const newValue = getNewValue(finger);

        onChangeCommitted?.(event, newValue);

        touchId.current = undefined;

        const doc = ownerDocument(sliderRef.current);
        doc.removeEventListener('mousemove', handleTouchMove);
        doc.removeEventListener('mouseup', handleTouchEnd);
        doc.removeEventListener('touchmove', handleTouchMove);
        doc.removeEventListener('touchend', handleTouchEnd);
      },
      [getNewValue, handleTouchMove, onChangeCommitted]
    );

    const handleMouseDown = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        // TODO should we also pass event together with new value to callbacks? (same thing with other input components)
        onMouseDown?.(event);

        event.preventDefault();
        thumbRef.current?.focus();
        setFocusVisible(true);

        const finger = trackFinger(event, touchId.current);
        if (finger) {
          const newValue = getNewValue(finger);
          setValueState(newValue);
          onChange?.(event, newValue);
        }

        const doc = ownerDocument(sliderRef.current);
        doc.addEventListener('mousemove', handleTouchMove);
        doc.addEventListener('mouseup', handleTouchEnd);
      },
      [
        getNewValue,
        handleTouchEnd,
        handleTouchMove,
        onChange,
        onMouseDown,
        setValueState
      ]
    );

    const handleTouchStart = useCallback(
      (event: TouchEvent) => {
        // Workaround as Safari has partial support for touchAction: 'none'.
        event.preventDefault();
        const touch = event.changedTouches[0];
        if (touch != null) {
          // A number that uniquely identifies the current finger in the touch session.
          touchId.current = touch.identifier;
        }

        thumbRef.current?.focus();
        setFocusVisible(true);

        const finger = trackFinger(event, touchId.current);
        if (finger) {
          const newValue = getNewValue(finger);
          setValueState(newValue);
          onChange?.(event, newValue);
        }

        const doc = ownerDocument(sliderRef.current);
        doc.addEventListener('touchmove', handleTouchMove);
        doc.addEventListener('touchend', handleTouchEnd);
      },
      [getNewValue, handleTouchEnd, handleTouchMove, onChange, setValueState]
    );

    useEffect(() => {
      const { current: slider } = sliderRef;
      slider?.addEventListener('touchstart', handleTouchStart);
      const doc = ownerDocument(slider);

      return () => {
        slider?.removeEventListener('touchstart', handleTouchStart);
        doc.removeEventListener('mousemove', handleTouchMove);
        doc.removeEventListener('mouseup', handleTouchEnd);
        doc.removeEventListener('touchmove', handleTouchMove);
        doc.removeEventListener('touchend', handleTouchEnd);
      };
    }, [handleTouchEnd, handleTouchMove, handleTouchStart]);

    return (
      <Wrapper
        $disabled={disabled}
        hasMarks={Boolean(marks.length)}
        isFocused={focusVisible}
        onMouseDown={handleMouseDown}
        orientation={orientation}
        ref={handleRef}
        size={getSize(size)}
        {...otherProps}
      >
        {/* should we keep the hidden input ? */}
        <input
          disabled={disabled}
          name={name}
          type='hidden'
          value={valueDerived ?? 0}
        />
        {marks &&
          marks.map(m => (
            <Tick
              $disabled={disabled}
              data-testid='tick'
              key={(m.value / (max - min)) * 100}
              orientation={orientation}
              style={{
                [vertical ? 'bottom' : 'left']: `${
                  ((m.value - min) / (max - min)) * 100
                }%`
              }}
            >
              {m.label && (
                <Mark aria-hidden data-testid='mark' orientation={orientation}>
                  {m.label}
                </Mark>
              )}
            </Tick>
          ))}
        <Groove orientation={orientation} variant={variant} />
        <Thumb
          $disabled={disabled}
          aria-disabled={disabled ? true : undefined}
          aria-orientation={orientation}
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={valueDerived}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          orientation={orientation}
          ref={thumbRef}
          role='slider'
          style={{
            [vertical ? 'bottom' : 'left']: `${
              (vertical ? -100 : 0) + (100 * (valueDerived - min)) / (max - min)
            }%`
          }}
          tabIndex={disabled ? undefined : 0}
          variant={variant}
        />
      </Wrapper>
    );
  }
);

Slider.displayName = 'Slider';

export { Slider, SliderProps };
