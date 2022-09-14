import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  createBorderStyles,
  createBoxStyles,
  createDisabledTextStyles,
  createFlatBoxStyles,
  createHatchedBackground,
  focusOutline,
  styledDimension
} from '../common';
import { styledBlockSize } from '../common/system';
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
  height: ${({ size = 'md' }) => styledBlockSize(size)};
  width: ${({ fullWidth, size = 'md', square }) =>
    fullWidth ? '100%' : square ? styledBlockSize(size) : 'auto'};
  padding: ${({ square }) => (square ? 0 : css`0 ${styledDimension(5)}`)};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({ disabled }) => !disabled && styledDimension(1)};
  }
  padding-top: ${({ active, disabled }) =>
    active && !disabled && styledDimension(1)};
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
            ? css`
                border: ${styledDimension(1)} solid ${theme.checkmark};
                outline: ${styledDimension(1)} solid ${theme.flatDark};
                outline-offset: -${styledDimension(2)};
              `
            : css`
                border: ${styledDimension(1)} solid ${theme.flatDark};
                outline: ${styledDimension(1)} solid transparent;
                outline-offset: -${styledDimension(2)};
              `}
          &:focus:after, &:active:after {
            ${!active && !disabled && focusOutline}
            outline-offset: -${styledDimension(2)};
          }
        `
      : variant === 'menu' || variant === 'thin'
      ? css`
          ${createBoxStyles()};
          border: ${styledDimension(1)} solid transparent;
          &:hover,
          &:focus {
            ${!disabled &&
            !active &&
            createBorderStyles({ style: 'buttonThin' })}
          }
          &:active {
            ${!disabled && createBorderStyles({ style: 'buttonThinPressed' })}
          }
          ${active && createBorderStyles({ style: 'buttonThinPressed' })}
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
                  left: ${styledDimension(1)};
                  top: ${styledDimension(1)};
                  width: calc(100% - ${styledDimension(2)});
                  height: calc(100% - ${styledDimension(2)});
                  outline: ${styledDimension(1)} solid ${theme.borderDarkest};
                `
              : `
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
            outline-offset: ${styledDimension(-4)};
          }
          &:active:focus:after,
          &:active:after {
            top: ${active ? '0' : styledDimension(0.5)};
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
