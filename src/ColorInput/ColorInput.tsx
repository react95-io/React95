import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/Button';
import { focusOutline } from '../common';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import { noOp } from '../common/utils';
import { Divider } from '../Divider/Divider';
import { CommonStyledProps } from '../types';

type ColorInputProps = {
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  variant?: 'default' | 'flat';
} & React.InputHTMLAttributes<HTMLInputElement> &
  CommonStyledProps;

const Trigger = styled(StyledButton)`
  padding-left: 8px;
`;

const StyledDivider = styled(Divider)`
  height: 21px;
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
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({ color }) => color};

  ${({ $disabled }) =>
    $disabled
      ? css`
          border: 2px solid ${({ theme }) => theme.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({ theme }) => theme.materialTextDisabledShadow}
          );
        `
      : css`
          border: 2px solid ${({ theme }) => theme.materialText};
        `}
  ${StyledColorInput}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${focusOutline}
    outline-offset: -8px;
  }
`;

const ChevronIcon = styled.span<
  Required<Pick<ColorInputProps, 'variant'>> & {
    $disabled: boolean;
  }
>`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({ $disabled }) =>
    $disabled
      ? css`
          border-top: 6px solid ${({ theme }) => theme.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({ theme }) => theme.materialTextDisabledShadow}
          );
        `
      : css`
          border-top: 6px solid ${({ theme }) => theme.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({ variant }) => (variant === 'flat' ? '6px' : '8px')};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`;

// TODO make sure all aria and role attributes are in place
const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  function ColorInput(
    {
      value,
      defaultValue,
      onChange = noOp,
      disabled = false,
      variant = 'default',
      ...otherProps
    },
    ref
  ) {
    const [valueDerived, setValueState] = useControlledOrUncontrolled({
      value,
      defaultValue
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
          value={valueDerived || '#008080'}
          type='color'
          ref={ref}
          {...otherProps}
        />
        <ColorPreview
          $disabled={disabled}
          color={valueDerived}
          role='presentation'
        />
        {variant === 'default' && <StyledDivider orientation='vertical' />}
        <ChevronIcon $disabled={disabled} variant={variant} />
      </Trigger>
    );
  }
);

export { ColorInput, ColorInputProps };
