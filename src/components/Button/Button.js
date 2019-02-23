import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
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
  position: relative;
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
    
  ${props =>
    props.isDisabled &&
    !props.flat &&
    "background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gYKCAsDA0vcJAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAbSURBVAjXYzhw4MD///8xSQasogcOHGAYlDoAfxenobm/8JkAAAAASUVORK5CYII=);"}
  ${props => props.isDisabled && createDisabledTextStyles()}
  &:active {
    ${props => !props.isDisabled && !props.flat && createBorderStyles(true)}
    ${props =>
      !props.isDisabled &&
      !props.flat &&
      !props.active &&
      `outline: 1px dotted` +
        colors.dark +
        `;
    outline-offset: -10px;
    outline-width: 2px;
    `}
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
  const baseClass = "Button";

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
  type: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  square: PropTypes.bool,
  active: PropTypes.bool,
  flat: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;
