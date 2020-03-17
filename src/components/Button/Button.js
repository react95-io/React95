/* eslint-disable no-nested-ternary */

import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import {
  createBorderStyles,
  createWellBorderStyles,
  createBoxStyles,
  createFlatBoxStyles,
  createDisabledTextStyles,
  createHatchedBackground
} from '../common';
import { blockSizes, fontSizes, padding } from '../common/system';

const commonButtonStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => blockSizes[size]};
  width: ${({ fullWidth, square, size }) =>
    fullWidth ? '100%' : square ? blockSizes[size] : 'auto'};
  padding: ${({ square }) => (square ? 0 : `0 calc(${padding.sm} + 2px)`)};
  font-size: ${fontSizes.md};
  &:active {
    padding-top: ${({ isDisabled }) => !isDisabled && '2px'};
  }
  padding-top: ${({ active, isDisabled }) => active && !isDisabled && '2px'};
`;

export const StyledButton = styled.button`
  ${({ variant, theme, active, isDisabled, primary }) =>
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
        `
      : variant === 'menu'
      ? css`
          ${createBoxStyles()};
          border: 2px solid transparent;
          &:hover {
            ${!isDisabled && !active && createWellBorderStyles(false)}
          }
          &:active {
            ${!isDisabled && createWellBorderStyles(true)}
          }
          ${active && createWellBorderStyles(true)}
          ${isDisabled && createDisabledTextStyles()}
        `
      : css`
          ${createBoxStyles()};
          border: none;
          ${isDisabled && createDisabledTextStyles()}
          ${active &&
            createHatchedBackground({
              mainColor: theme.material,
              secondaryColor: theme.borderLightest
            })}
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
            ${!isDisabled && createBorderStyles({ invert: true })}
          }
        `}
  ${commonButtonStyles}
`;

const Button = ({
  type,
  onClick,
  style,
  disabled,
  fullWidth,
  size,
  square,
  active,
  primary,
  variant,
  className,
  children,
  ...otherProps
}) => (
  <StyledButton
    type={type}
    variant={variant}
    primary={primary}
    onClick={disabled ? undefined : onClick}
    style={style}
    disabled={disabled}
    isDisabled={disabled}
    fullWidth={fullWidth}
    size={size}
    square={square}
    active={active}
    className={className}
    // onTouchStart below to enable button :active style on iOS
    onTouchStart={() => ''}
    {...otherProps}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  type: 'button',
  onClick: null,
  style: {},
  disabled: false,
  fullWidth: false,
  size: 'md',
  square: false,
  active: false,
  primary: false,
  variant: 'default',
  className: ''
};

Button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  disabled: propTypes.bool,
  fullWidth: propTypes.bool,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  square: propTypes.bool,
  active: propTypes.bool,
  primary: propTypes.bool,

  variant: propTypes.oneOf(['default', 'menu', 'flat']),
  className: propTypes.string,
  children: propTypes.node.isRequired
};

export default Button;
