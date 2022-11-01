import React, { forwardRef } from 'react';
import styled, { css, CSSProperties } from 'styled-components';

import { createFlatBoxStyles } from '../common';
import {
  LabelText,
  size,
  StyledInput,
  StyledLabel
} from '../common/SwitchBase';
import { StyledMenuListItem } from '../MenuList/MenuList';
import { CommonStyledProps } from '../types';

type RadioVariant = 'default' | 'flat' | 'menu';

type RadioProps = {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string | number;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
  value?: string | number | boolean;
  variant?: RadioVariant;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'className' | 'disabled' | 'name' | 'onChange' | 'style' | 'value'
> &
  CommonStyledProps;

const sharedCheckboxStyles = css`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`;

type StyledCheckboxProps = {
  $disabled: boolean;
};

// had to style borders here instead of using ScrollView or createBorderStyles
// due to round shape (box-shadow based borders only look good for rectangular elements)
const StyledCheckbox = styled.div<StyledCheckboxProps>`
  ${sharedCheckboxStyles}
  box-sizing: border-box;
  position: relative;
  background: ${props => props.theme.canvas};
  border-color: ${props => props.theme.borderDark}
    ${props => props.theme.borderLightest}
    ${props => props.theme.borderLightest} ${props => props.theme.borderDark};
  border-style: solid;
  border-width: 2px;
  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    border-color: ${props => props.theme.borderDarkest}
      ${props => props.theme.borderLight} ${props => props.theme.borderLight}
      ${props => props.theme.borderDarkest};
    border-style: solid;
    border-width: 2px;
  }
`;
const StyledFlatCheckbox = styled.div<StyledCheckboxProps>`
  ${createFlatBoxStyles()}
  ${sharedCheckboxStyles}
  outline: none;
  background: ${({ $disabled, theme }) =>
    $disabled ? theme.flatLight : theme.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({ theme }) => theme.flatDark};
    border-radius: 50%;
  }
`;
const StyledMenuCheckbox = styled.div`
  ${sharedCheckboxStyles}
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: none;
`;

type IconProps = {
  'data-testid': 'checkmarkIcon';
  $disabled: boolean;
  variant: RadioVariant;
};

const Icon = styled.span.attrs(() => ({
  'data-testid': 'checkmarkIcon'
}))<IconProps>`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  ${({ $disabled, theme, variant }) =>
    variant === 'menu'
      ? css`
          background: ${$disabled
            ? theme.materialTextDisabled
            : theme.materialText};
          filter: drop-shadow(
            1px 1px 0px
              ${$disabled ? theme.materialTextDisabledShadow : 'transparent'}
          );
        `
      : css`
          background: ${$disabled ? theme.checkmarkDisabled : theme.checkmark};
        `}
  ${StyledMenuListItem}:hover & {
    ${({ $disabled, theme, variant }) =>
      !$disabled &&
      variant === 'menu' &&
      css`
        background: ${theme.materialTextInvert};
      `};
  }
`;

const CheckboxComponents = {
  flat: StyledFlatCheckbox,
  default: StyledCheckbox,
  menu: StyledMenuCheckbox
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      checked,
      className = '',
      disabled = false,
      label = '',
      onChange,
      style = {},
      variant = 'default',
      ...otherProps
    },
    ref
  ) => {
    const CheckboxComponent = CheckboxComponents[variant];

    return (
      <StyledLabel $disabled={disabled} className={className} style={style}>
        <CheckboxComponent $disabled={disabled} role='presentation'>
          {checked && <Icon $disabled={disabled} variant={variant} />}
        </CheckboxComponent>
        <StyledInput
          disabled={disabled}
          onChange={disabled ? undefined : onChange}
          readOnly={disabled}
          type='radio'
          checked={checked}
          ref={ref}
          {...otherProps}
        />
        {label && <LabelText>{label}</LabelText>}
      </StyledLabel>
    );
  }
);

Radio.displayName = 'Radio';

export { Radio, RadioProps };
