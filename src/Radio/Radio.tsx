import React, { forwardRef } from 'react';
import styled, { css, CSSProperties } from 'styled-components';

import { createFlatBoxStyles, styledDimension } from '../common';
import {
  LabelText,
  size,
  StyledInput,
  StyledLabel
} from '../common/SwitchBase';
import { StyledMenuListItem } from '../MenuList/MenuList';
import { StyledScrollView } from '../ScrollView/ScrollView';
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
  width: ${styledDimension(size)};
  height: ${styledDimension(size)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`;

type StyledCheckboxProps = {
  $disabled: boolean;
};

const StyledCheckbox = styled(StyledScrollView)<StyledCheckboxProps>`
  ${sharedCheckboxStyles}
  background: ${({ $disabled, theme }) =>
    $disabled ? theme.material : theme.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - ${styledDimension(2)});
    height: calc(100% - ${styledDimension(2)});
    border-radius: 50%;
    box-shadow: none;
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
    width: calc(100% - ${styledDimension(2)});
    height: calc(100% - ${styledDimension(2)});
    border: ${styledDimension(1)} solid ${({ theme }) => theme.flatDark};
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
  width: ${styledDimension(3)};
  height: ${styledDimension(3)};
  transform: translate(-50%, -50%);
  border-radius: 50%;
  ${({ $disabled, theme, variant }) =>
    variant === 'menu'
      ? css`
          background: ${$disabled
            ? theme.materialTextDisabled
            : theme.materialText};
          filter: drop-shadow(
            ${styledDimension(0.5)} ${styledDimension(0.5)} 0px
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
