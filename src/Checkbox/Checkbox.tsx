import React, { forwardRef, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { createHatchedBackground, styledDimension } from '../common';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import {
  LabelText,
  size,
  StyledInput,
  StyledLabel
} from '../common/SwitchBase';
import { noOp } from '../common/utils';
import { StyledMenuListItem } from '../MenuList/MenuList';
import { StyledScrollView } from '../ScrollView/ScrollView';
import { CommonThemeProps } from '../types';

type CheckboxProps = {
  checked?: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: number | string;
  name?: string;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
  style?: React.CSSProperties;
  value?: number | string;
  variant?: 'default' | 'flat' | 'menu';
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'checked'
  | 'className'
  | 'defaultChecked'
  | 'disabled'
  | 'label'
  | 'name'
  | 'onChange'
  | 'style'
  | 'value'
>;

type CheckmarkProps = {
  $disabled: boolean;
  variant: 'default' | 'flat' | 'menu';
};

const sharedCheckboxStyles = css`
  width: ${styledDimension(size)};
  height: ${styledDimension(size)};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`;
const StyledCheckbox = styled(StyledScrollView)<CommonThemeProps>`
  ${sharedCheckboxStyles}
  width: ${styledDimension(size)};
  height: ${styledDimension(size)};
  background: ${({ $disabled, theme }) =>
    $disabled ? theme.material : theme.canvas};
  &:before {
    box-shadow: none;
  }
`;
const StyledFlatCheckbox = styled.div<CommonThemeProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({ $disabled, theme }) =>
    $disabled ? theme.flatLight : theme.canvas};
  ${sharedCheckboxStyles}
  width: ${styledDimension(size, { delta: -4 })};
  height: ${styledDimension(size, { delta: -4 })};
  outline: none;
  border: ${styledDimension(1)} solid ${({ theme }) => theme.flatDark};
  background: ${({ $disabled, theme }) =>
    $disabled ? theme.flatLight : theme.canvas};
`;

const StyledMenuCheckbox = styled.div<CommonThemeProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({ $disabled, theme }) =>
    $disabled ? theme.flatLight : theme.canvas};
  ${sharedCheckboxStyles}
  width: ${styledDimension(size, { delta: -4 })};
  height: ${styledDimension(size, { delta: -4 })};
  background: none;
  border: none;
  outline: none;
`;

const CheckmarkIcon = styled.span.attrs(() => ({
  'data-testid': 'checkmarkIcon'
}))<CheckmarkProps>`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - ${styledDimension(0.5)});
    width: ${styledDimension(1.5)};
    height: ${styledDimension(3.5)};

    border: solid
      ${({ $disabled, theme }) =>
        $disabled ? theme.checkmarkDisabled : theme.checkmark};
    border-width: 0 ${styledDimension(1.5)} ${styledDimension(1.5)} 0;
    transform: translate(-50%, -50%) rotate(45deg);

    ${({ $disabled, theme, variant }) =>
      variant === 'menu'
        ? css`
            border-color: ${$disabled
              ? theme.materialTextDisabled
              : theme.materialText};
            filter: drop-shadow(
              ${styledDimension(0.5)} ${styledDimension(0.5)} 0px
                ${$disabled ? theme.materialTextDisabledShadow : 'transparent'}
            );
          `
        : css`
            border-color: ${$disabled
              ? theme.checkmarkDisabled
              : theme.checkmark};
          `}
  ${StyledMenuListItem}:hover & {
    ${({ $disabled, theme, variant }) =>
      !$disabled &&
      variant === 'menu' &&
      css`
        border-color: ${theme.materialTextInvert};
      `};
  }
`;
const IndeterminateIcon = styled.span.attrs(() => ({
  'data-testid': 'indeterminateIcon'
}))<CheckmarkProps>`
  display: inline-block;
  position: relative;

  ${({ variant }) =>
    variant === 'menu'
      ? css`
          height: calc(100% - ${styledDimension(2)});
          width: calc(100% - ${styledDimension(2)});
        `
      : css`
          width: 100%;
          height: 100%;
        `}
  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({ $disabled, theme }) =>
      createHatchedBackground({
        mainColor: $disabled ? theme.checkmarkDisabled : theme.checkmark
      })}
    background-position: 0px 0px, ${styledDimension(1)} ${styledDimension(1)};

    ${({ $disabled, theme, variant }) =>
      variant === 'menu' &&
      css`
        ${StyledMenuListItem}:hover & {
          ${createHatchedBackground({
            mainColor: theme.materialTextInvert
          })}
        }
        filter: drop-shadow(
          ${styledDimension(0.5)} ${styledDimension(0.5)} 0px
            ${$disabled ? theme.materialTextDisabledShadow : 'transparent'}
        );
      `};
  }
`;

const CheckboxComponents = {
  flat: StyledFlatCheckbox,
  default: StyledCheckbox,
  menu: StyledMenuCheckbox
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      className = '',
      defaultChecked = false,
      disabled = false,
      indeterminate = false,
      label = '',
      onChange = noOp,
      style = {},
      value,
      variant = 'default',
      ...otherProps
    },
    ref
  ) => {
    const [state, setState] = useControlledOrUncontrolled({
      defaultValue: defaultChecked,
      onChange,
      readOnly: otherProps.readOnly ?? disabled,
      value: checked
    });

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = e.target.checked;
        setState(newState);
        onChange(e);
      },
      [onChange, setState]
    );

    const CheckboxComponent = CheckboxComponents[variant];

    let Icon = null;
    if (indeterminate) {
      Icon = IndeterminateIcon;
    } else if (state) {
      Icon = CheckmarkIcon;
    }

    return (
      <StyledLabel $disabled={disabled} className={className} style={style}>
        <StyledInput
          disabled={disabled}
          onChange={disabled ? undefined : handleChange}
          readOnly={disabled}
          type='checkbox'
          value={value}
          checked={state}
          data-indeterminate={indeterminate}
          ref={ref}
          {...otherProps}
        />
        <CheckboxComponent $disabled={disabled} role='presentation'>
          {Icon && <Icon $disabled={disabled} variant={variant} />}
        </CheckboxComponent>
        {label && <LabelText>{label}</LabelText>}
      </StyledLabel>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox, CheckboxProps };
