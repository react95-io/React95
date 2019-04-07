import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import {
  createBorderStyles,
  createBoxStyles,
  createDisabledTextStyles
} from "../common";
import { blockSizes, fontSizes, padding } from "../common/theme.variables";

const StyledButton = styled.button`
  ${createBoxStyles()};
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.flat
      ? null
      : props.active
      ? createBorderStyles(true)
      : createBorderStyles(false)}
  height: ${props => blockSizes[props.size]};
  width: ${props =>
    props.fullWidth ? "100%" : props.square ? blockSizes[props.size] : "auto"};
  padding: ${props => (props.square ? 0 : "0 " + padding.sm)};
  font-size: ${fontSizes.md};
    
  ${props => props.isDisabled && createDisabledTextStyles()}
  &:active {
    ${props => !props.isDisabled && !props.flat && createBorderStyles(true)}
   
    padding-top: ${props => !props.isDisabled && "2px"};
    
  }
  padding-top: ${props => props.active && !props.isDisabled && "2px"};
  ${props => props.flat && "border: none;"}
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
  flat,
  className,
  children,
  ...otherProps
}) => {
  return (
    <StyledButton
      type={type}
      onClick={disabled ? undefined : onClick}
      style={style}
      isDisabled={disabled}
      fullWidth={fullWidth}
      size={size}
      square={square}
      active={active}
      flat={flat}
      className={className}
      style={style}
      onTouchStart=""
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
  flat: false
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
  flat: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired
};

export default Button;
