import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./List.css";

import styled from "styled-components";
import { createBorderStyles, createBoxStyles } from "../common";

const StyledList = styled.ul`
  padding: 2px 4px 4px 2px;
  ${createBorderStyles()}
  ${createBoxStyles()}
  
  display: inline-block;
  list-style: none;
  position: ${props =>
    props.verticalAlign && props.horizontalAlign ? "absolute" : "relative"};
`;

const List = ({
  shadow,
  className,
  style,
  children,
  fullWidth,
  verticalAlign,
  horizontalAlign,
  ...otherProps
}) => {
  const baseClass = "List";

  const rootClass = cx(baseClass, className, {
    [`${baseClass}--${verticalAlign}`]: verticalAlign || false,

    [`${baseClass}--${horizontalAlign}`]: horizontalAlign || false,
    [`${baseClass}--fullWidth`]: fullWidth,
    [`${baseClass}--noShadow`]: shadow
  });

  return (
    <StyledList
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
      shadow={shadow}
      fullWidth={fullWidth}
      className={className}
      style={style}
      {...otherProps}
    >
      {children}
    </StyledList>
  );
};

List.defaultProps = {
  style: {},
  fullWidth: false,
  shadow: true
};

List.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fullWidth: PropTypes.bool,
  shadow: PropTypes.bool,
  children: PropTypes.node,
  verticalAlign: PropTypes.oneOf(["top", "bottom"]),
  horizontalAlign: PropTypes.oneOf(["left", "right"])
};

export default List;
