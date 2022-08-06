import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/Button';
import { focusOutline, styledDimension } from '../common';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import { noOp } from '../common/utils';
import { Separator } from '../Separator/Separator';
import { CommonStyledProps } from '../types';

type ColorInputProps = {
  defaultValue?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  variant?: 'default' | 'flat';
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'defaultValue' | 'disabled' | 'onChange' | 'value'
> &
  CommonStyledProps;

const Trigger = styled(StyledButton)`
  padding-left: ${styledDimension(4)};
`;

const StyledSeparator = styled(Separator)`
  height: ${styledDimension(10.5)};
  position: relative;
  top: 0;
`;

export const StyledColorInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;

// TODO replace with SVG icon
const ColorPreview = styled.div<{
  color: string;
  $disabled: boolean;
}>`
  box-sizing: border-box;
  height: ${styledDimension(9.5)};
  display: inline-block;
  width: ${styledDimension(17.5)};
  margin-right: ${styledDimension(2.5)};

  background: ${({ color }) => color};

  ${({ $disabled }) =>
    $disabled
      ? css`
          border: ${styledDimension(1)} solid
            ${({ theme }) => theme.materialTextDisabled};
          filter: drop-shadow(
            ${styledDimension(0.5)} ${styledDimension(0.5)} 0px
              ${({ theme }) => theme.materialTextDisabledShadow}
          );
        `
      : css`
          border: ${styledDimension(1)} solid
            ${({ theme }) => theme.materialText};
        `}
  ${StyledColorInput}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${focusOutline}
    outline-offset: -${styledDimension(4)};
  }
`;

const ChevronIcon = styled.span<
  Required<Pick<ColorInputProps, 'variant'>> & {
    $disabled: boolean;
  }
>`
  width: 0px;
  height: 0px;
  border-left: ${styledDimension(3)} solid transparent;
  border-right: ${styledDimension(3)} solid transparent;
  display: inline-block;
  margin-left: ${styledDimension(3)};

  ${({ $disabled }) =>
    $disabled
      ? css`
          border-top: ${styledDimension(3)} solid
            ${({ theme }) => theme.materialTextDisabled};
          filter: drop-shadow(
            ${styledDimension(0.5)} ${styledDimension(0.5)} 0px
              ${({ theme }) => theme.materialTextDisabledShadow}
          );
        `
      : css`
          border-top: ${styledDimension(3)} solid
            ${({ theme }) => theme.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({ variant }) =>
      variant === 'flat' ? styledDimension(3) : styledDimension(4)};
    right: ${styledDimension(4)};
    width: ${styledDimension(8)};
    height: ${styledDimension(9.5)};
  }
`;

// TODO make sure all aria and role attributes are in place
const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  (
    {
      value,
      defaultValue,
      onChange = noOp,
      disabled = false,
      variant = 'default',
      ...otherProps
    },
    ref
  ) => {
    const [valueDerived, setValueState] = useControlledOrUncontrolled({
      defaultValue,
      onChange,
      readOnly: otherProps.readOnly ?? disabled,
      value
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const color = e.target.value;
      setValueState(color);
      onChange(e);
    };

    return (
      //  we only need button styles, so we display
      // it as a div and reset type attribute
      <Trigger disabled={disabled} as='div' variant={variant} size='md'>
        <StyledColorInput
          onChange={handleChange}
          readOnly={disabled}
          disabled={disabled}
          value={valueDerived ?? '#008080'}
          type='color'
          ref={ref}
          {...otherProps}
        />
        <ColorPreview
          $disabled={disabled}
          color={valueDerived ?? '#008080'}
          role='presentation'
        />
        {variant === 'default' && <StyledSeparator orientation='vertical' />}
        <ChevronIcon $disabled={disabled} variant={variant} />
      </Trigger>
    );
  }
);

ColorInput.displayName = 'ColorInput';

export { ColorInput, ColorInputProps };
