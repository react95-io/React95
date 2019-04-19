import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";

import { blockSizes, fontSizes, padding } from "../common/system";
import { shadow } from "../common";

import Paperclip from "../../images/paperclip.svg";

const fabSizes = {
  sm: 54,
  md: 60,
  lg: 66
};

const ClippyIcon = styled.span`
  position: relative;
  display: inline-block;
  width: 50px;
  &:after {
    background: red;
    content: "";
    display: block;
    width: 100%;
    padding-top: 100%;
  }
`;
const StyledFab = styled.button`
  display: inline-block;
  box-sizing: border-box;
  border-radius: ${({ extended, size }) =>
    extended ? `${Math.floor(fabSizes[size] / 2)}px` : "50%"};
  line-height: ${({ size }) => fabSizes[size] - 10}px;
  height: ${({ size }) => fabSizes[size]}px;
  width: ${({ size, extended }) => (extended ? "auto" : fabSizes[size])}px;
  position: relative;

  background: url(${Paperclip}) #bb6ac9;
  background-size: 80% 80%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: none;
  border-width: 4px;
  border-style: solid;
  border-right-color: #6d2ebf;
  border-bottom-color: #6d2ebf;
  border-left-color: #ef7ffc;
  border-top-color: #ef7ffc;

  padding-left: ${({ extended }) => (extended ? "1rem" : 0)};
  padding-right: ${({ extended }) => (extended ? "1rem" : 0)};
  &:active {
    padding-top: ${props => !props.isDisabled && "2px"};
  }
  padding-top: ${props => props.active && !props.isDisabled && "2px"};

  box-shadow: ${shadow};
`;

const Button = ({
  type,
  onClick,
  style,
  disabled,
  size,
  square,
  active,
  className,
  children,
  ...otherProps
}) => {
  return (
    <StyledFab
      type={type}
      onClick={disabled ? undefined : onClick}
      style={style}
      isDisabled={disabled}
      size={size}
      square={square}
      active={active}
      className={className}
      style={style}
      // onTouchStart below to enable button :active style on iOS
      onTouchStart={() => ""}
      {...otherProps}
    >
      <ClippyIcon />
      {children}
    </StyledFab>
  );
};

Button.defaultProps = {
  type: "button",
  onClick: null,
  style: {},
  disabled: false,
  extended: false,
  size: "md",
  square: false,
  active: false
};

Button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
  style: propTypes.object,
  disabled: propTypes.bool,
  extended: propTypes.bool,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  square: propTypes.bool,
  active: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired
};

export default Button;
