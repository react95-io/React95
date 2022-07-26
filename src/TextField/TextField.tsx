import React, { forwardRef, useMemo } from 'react';
import styled, { css } from 'styled-components';
import {
  createDisabledTextStyles,
  createFlatBoxStyles,
  createScrollbars
} from '../common';
import { blockSizes } from '../common/system';
import { noOp } from '../common/utils';
import { StyledCutout } from '../Cutout/Cutout';
import { CommonStyledProps, CommonThemeProps } from '../types';

type TextFieldInputProps = {
  multiline?: false | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** @default text */
  type?: React.HTMLInputTypeAttribute;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'className' | 'disabled' | 'style' | 'type'
>;

type TextFieldTextAreaProps = {
  multiline: true;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
} & Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'className' | 'disabled' | 'style' | 'type'
>;

type TextFieldProps = {
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  shadow?: boolean;
  style?: React.CSSProperties;
  variant?: 'default' | 'flat';
} & (TextFieldInputProps | TextFieldTextAreaProps) &
  CommonStyledProps;

type WrapperProps = Pick<TextFieldProps, 'fullWidth' | 'variant'> &
  CommonThemeProps;

const sharedWrapperStyles = css<WrapperProps>`
  display: flex;
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  min-height: ${blockSizes.md};
`;

const Wrapper = styled(StyledCutout).attrs({
  'data-testid': 'variant-default'
})<WrapperProps>`
  ${sharedWrapperStyles}
  background: ${({ $disabled, theme }) =>
    $disabled ? theme.material : theme.canvas};
`;

const FlatWrapper = styled.div.attrs({
  'data-testid': 'variant-flat'
})<WrapperProps>`
  ${createFlatBoxStyles()}
  ${sharedWrapperStyles}
  position: relative;
`;

type InputProps = Pick<TextFieldProps, 'disabled' | 'fullWidth' | 'variant'>;

const sharedInputStyles = css<InputProps>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({ theme }) => theme.canvasText};
  ${({ disabled, variant }) =>
    variant !== 'flat' && disabled && createDisabledTextStyles()}
`;

const StyledTextInput = styled.input<InputProps>`
  ${sharedInputStyles}
  padding: 0 8px;
`;

const StyledTextArea = styled.textarea<InputProps>`
  ${sharedInputStyles}
  padding: 8px;
  resize: none;
  ${({ variant }) => createScrollbars(variant)}
`;

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(function TextField(
  {
    className,
    disabled = false,
    fullWidth,
    onChange = noOp,
    shadow = true,
    style,
    variant = 'default',
    ...otherProps
  },
  ref
) {
  const WrapperComponent = variant === 'flat' ? FlatWrapper : Wrapper;

  const field = useMemo(
    () =>
      otherProps.multiline ? (
        <StyledTextArea
          disabled={disabled}
          onChange={disabled ? undefined : onChange}
          readOnly={disabled}
          ref={ref}
          variant={variant}
          {...otherProps}
        />
      ) : (
        <StyledTextInput
          disabled={disabled}
          onChange={disabled ? undefined : onChange}
          readOnly={disabled}
          ref={ref}
          type={otherProps.type ?? 'text'}
          variant={variant}
          {...otherProps}
        />
      ),
    [disabled, onChange, otherProps, ref, variant]
  );

  return (
    <WrapperComponent
      className={className}
      fullWidth={fullWidth}
      $disabled={disabled}
      shadow={shadow}
      style={style}
    >
      {field}
    </WrapperComponent>
  );
});

export { TextField, TextFieldProps };
