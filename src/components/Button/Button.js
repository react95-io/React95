import React from "react";
import propTypes from "prop-types";

import styled, { css } from "styled-components";
import {
  createBorderStyles,
  createBoxStyles,
  createFlatBoxStyles,
  createDisabledTextStyles
} from "../common";
import { blockSizes, fontSizes, padding } from "../common/system";

const commonButtonStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => blockSizes[size]};
  width: ${({ fullWidth, square, size }) =>
    fullWidth ? "100%" : square ? blockSizes[size] : "auto"};
  padding: ${({ square }) => (square ? 0 : "0 " + padding.sm)};
  font-size: ${fontSizes.md};
  &:active {
    padding-top: ${({ isDisabled }) => !isDisabled && "2px"};
  }
  padding-top: ${({ active, isDisabled }) => active && !isDisabled && "2px"};
`;

const StyledButton = styled.button`
  ${({ variant }) =>
    variant === "flat"
      ? css`
          ${createFlatBoxStyles()} /* background: none; */
        `
      : css`
          ${createBoxStyles()};
          ${({ variant, active }) =>
            variant === "menu"
              ? null
              : active
              ? createBorderStyles(true)
              : createBorderStyles(false)}
          ${({ isDisabled }) =>
            isDisabled && createDisabledTextStyles()}
      &:active {
            ${({ isDisabled, variant }) =>
              !isDisabled && variant !== "menu" && createBorderStyles(true)}
          }
          ${({ variant }) => variant === "menu" && "border: none;"}
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
  variant,
  className,
  children,
  ...otherProps
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      onClick={disabled ? undefined : onClick}
      style={style}
      isDisabled={disabled}
      fullWidth={fullWidth}
      size={size}
      square={square}
      active={active}
      className={className}
      style={style}
      // onTouchStart below to enable button :active style on iOS
      onTouchStart={() => ""}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  onClick: null,
  style: {},
  disabled: false,
  fullWidth: false,
  size: "md",
  square: false,
  active: false,
  variant: "default"
};

Button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
  style: propTypes.object,
  disabled: propTypes.bool,
  fullWidth: propTypes.bool,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  square: propTypes.bool,
  active: propTypes.bool,
  variant: propTypes.oneOf(["default", "menu", "flat"]),
  className: propTypes.string,
  children: propTypes.node.isRequired
};

export default Button;
