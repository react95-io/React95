import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// import "./Button.css";

import styled, { css } from "styled-components";
import {
  createBorderStyles,
  createBoxStyles,
  createDisabledTextStyles
} from "../common";
import {
  blockSizes,
  fontSizes,
  padding,
  colors
} from "../common/theme.variables";

const StyledButton = styled.button`
  ${createBoxStyles()};
  ${props =>
    props.flat
      ? null
      : props.active
      ? createBorderStyles(true)
      : createBorderStyles(false)}
  height: ${props => blockSizes[props.size]};
  width: ${props =>
    props.fullWidth ? "100%" : props.square ? blockSizes[props.size] : "auto"};
  padding: ${props => (props.square ? 0 : "0 " + padding.md)};
  font-size: ${fontSizes.md};

  ${props => props.isDisabled && createDisabledTextStyles()}
  &:active {
    ${props => !props.isDisabled && !props.flat && createBorderStyles(true)}
    outline: 1px dotted ${colors.dark};
    outline-offset: -10px;
    outline-width: 2px;
  }
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
  accent,
  className,
  children,
  ...otherProps
}) => {
  const baseClass = "Button";

  let content = children;
  if (typeof content === "string" && accent) {
    content = (
      <span>
        <span className={`${baseClass}__accent`}>{content.charAt(0)}</span>
        {content.slice(1)}
      </span>
    );
  }
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
      {...otherProps}
    >
      <span className={`${baseClass}__content`}>{content}</span>
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
  flat: false,
  accent: false
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  square: PropTypes.bool,
  active: PropTypes.bool,
  flat: PropTypes.bool,
  accent: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;
