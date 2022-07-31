import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  createBorderStyles,
  createBoxStyles,
  createDisabledTextStyles,
  createFlatBoxStyles,
  createHatchedBackground,
  createWellBorderStyles,
  focusOutline
} from '../common';
import { blockSizes } from '../common/system';
import { noOp } from '../common/utils';
import { CommonStyledProps, Sizes } from '../types';

type ButtonProps = {
  active?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  onTouchStart?: React.ButtonHTMLAttributes<HTMLButtonElement>['onTouchStart'];
  primary?: boolean;
  size?: Sizes;
  square?: boolean;
  type?: string;
} & (
  | {
      variant?: 'default' | 'flat' | 'thin';
    }
  | {
      /** @deprecated Use `thin` */
      variant?: 'menu';
    }
) &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'disabled' | 'onClick' | 'onTouchStart' | 'type'
  > &
  CommonStyledProps;

type StyledButtonProps = Pick<
  ButtonProps,
  | 'active'
  | 'disabled'
  | 'fullWidth'
  | 'primary'
  | 'size'
  | 'square'
  | 'variant'
>;

const commonButtonStyles = css<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size = 'md' }) => blockSizes[size]};
  width: ${({ fullWidth, size = 'md', square }) =>
    fullWidth ? '100%' : square ? blockSizes[size] : 'auto'};
  padding: ${({ square }) => (square ? 0 : `0 10px`)};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({ disabled }) => !disabled && '2px'};
  }
  padding-top: ${({ active, disabled }) => active && !disabled && '2px'};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ active, disabled, primary, theme, variant }) =>
    variant === 'flat'
      ? css`
          ${createFlatBoxStyles()}
          ${primary
            ? `
          border: 2px solid ${theme.checkmark};
            outline: 2px solid ${theme.flatDark};
            outline-offset: -4px;
          `
            : `
          border: 2px solid ${theme.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!active && !disabled && focusOutline}
            outline-offset: -4px;
          }
        `
      : variant === 'menu' || variant === 'thin'
      ? css`
          ${createBoxStyles()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!disabled && !active && createWellBorderStyles(false)}
          }
          &:active {
            ${!disabled && createWellBorderStyles(true)}
          }
          ${active && createWellBorderStyles(true)}
          ${disabled && createDisabledTextStyles()}
        `
      : css`
          ${createBoxStyles()};
          border: none;
          ${disabled && createDisabledTextStyles()}
          ${active
            ? createHatchedBackground({
                mainColor: theme.material,
                secondaryColor: theme.borderLightest
              })
            : ''}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${primary
              ? css`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${theme.borderDarkest};
                `
              : css`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${active
              ? createBorderStyles({ invert: true })
              : createBorderStyles({ invert: false })}
          }
          &:active:before {
            ${!disabled && createBorderStyles({ invert: true })}
          }
          &:focus:after,
          &:active:after {
            ${!active && !disabled && focusOutline}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${active ? '0' : '1px'};
          }
        `}
  ${commonButtonStyles}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      disabled = false,
      children,
      type = 'button',
      fullWidth = false,
      size = 'md',
      square = false,
      active = false,
      onTouchStart = noOp,
      primary = false,
      variant = 'default',
      ...otherProps
    },
    ref
  ) => {
    return (
      <StyledButton
        active={active}
        disabled={disabled}
        $disabled={disabled}
        fullWidth={fullWidth}
        onClick={disabled ? undefined : onClick}
        onTouchStart={onTouchStart}
        primary={primary}
        ref={ref}
        size={size}
        square={square}
        type={type}
        variant={variant}
        {...otherProps}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export { Button, ButtonProps };
