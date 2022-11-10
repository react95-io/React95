import React, { forwardRef, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { Button } from '../Button/Button';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import { blockSizes } from '../common/system';
import { clamp, getSize } from '../common/utils';
import { TextInput } from '../TextInput/TextInput';
import { CommonStyledProps } from '../types';

type NumberInputProps = {
  className?: string;
  defaultValue?: number;
  disabled?: boolean;
  max?: number;
  min?: number;
  readOnly?: boolean;
  step?: number;
  onChange?: (newValue: number) => void;
  style?: React.CSSProperties;
  value?: number;
  variant?: 'default' | 'flat';
  width?: string | number;
} & CommonStyledProps;

const StyledNumberInputWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({ variant }) =>
    variant === 'flat'
      ? css`
          height: calc(50% - 1px);
        `
      : css`
          height: 50%;
        `}
`;

const StyledButtonWrapper = styled.div<Pick<NumberInputProps, 'variant'>>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({ variant }) =>
    variant === 'flat'
      ? css`
          height: calc(${blockSizes.md} - 4px);
        `
      : css`
          height: ${blockSizes.md};
          margin-left: 2px;
        `}
`;

const StyledButtonIcon = styled.span<{ invert?: boolean }>`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({ invert }) =>
    invert
      ? css`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({ theme }) => theme.materialText};
        `
      : css`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({ theme }) => theme.materialText};
        `}
  ${StyledButton}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({ theme }) => theme.materialTextDisabledShadow}
    );
    ${({ invert }) =>
      invert
        ? css`
            border-bottom-color: ${({ theme }) => theme.materialTextDisabled};
          `
        : css`
            border-top-color: ${({ theme }) => theme.materialTextDisabled};
          `}
  }
`;
const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      defaultValue,
      disabled = false,
      max,
      min,
      onChange,
      readOnly,
      step = 1,
      style,
      value,
      variant = 'default',
      width,
      ...otherProps
    },
    ref
  ) => {
    const [valueDerived, setValueState] = useControlledOrUncontrolled({
      defaultValue,
      onChange,
      readOnly,
      value
    });

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        setValueState(newValue);
      },
      [setValueState]
    );

    const handleClick = useCallback(
      (delta: number) => {
        const newValue = clamp(
          parseFloat(((valueDerived ?? 0) + delta).toFixed(2)),
          min ?? null,
          max ?? null
        );

        setValueState(newValue);

        onChange?.(newValue);
      },
      [max, min, onChange, setValueState, valueDerived]
    );

    const onBlur = useCallback(() => {
      if (valueDerived !== undefined) {
        onChange?.(valueDerived);
      }
    }, [onChange, valueDerived]);

    const stepUp = useCallback(() => {
      handleClick(step);
    }, [handleClick, step]);

    const stepDown = useCallback(() => {
      handleClick(-step);
    }, [handleClick, step]);

    const buttonVariant = variant === 'flat' ? 'flat' : 'raised';
    return (
      <StyledNumberInputWrapper
        className={className}
        style={{
          ...style,
          width: width !== undefined ? getSize(width) : 'auto'
        }}
        {...otherProps}
      >
        <TextInput
          value={valueDerived}
          variant={variant}
          onChange={handleInputChange}
          disabled={disabled}
          type='number'
          readOnly={readOnly}
          ref={ref}
          fullWidth
          onBlur={onBlur}
        />
        <StyledButtonWrapper variant={variant}>
          <StyledButton
            data-testid='increment'
            variant={buttonVariant}
            disabled={disabled || readOnly}
            onClick={stepUp}
          >
            <StyledButtonIcon invert />
          </StyledButton>
          <StyledButton
            data-testid='decrement'
            variant={buttonVariant}
            disabled={disabled || readOnly}
            onClick={stepDown}
          >
            <StyledButtonIcon />
          </StyledButton>
        </StyledButtonWrapper>
      </StyledNumberInputWrapper>
    );
  }
);

NumberInput.displayName = 'NumberInput';

export { NumberInput, NumberInputProps };
