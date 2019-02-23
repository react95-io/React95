import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { createBorderStyles, createBoxStyles } from "../common";

const createListPositionStyles = ({
  verticalAlign = "bottom",
  horizontalAlign = "left"
}) =>
  `
    position: absolute;
    ${verticalAlign === "bottom" ? "bottom: 0;" : "top: 0;"}
    ${horizontalAlign === "left" ? "left: 0;" : "right: 0;"}

    transform: translate(0, ${verticalAlign === "top" ? "-100%" : "100%"})
  `;
const StyledList = styled.ul`
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  padding: 2px 4px 4px 2px;
  ${createBorderStyles()}
  ${createBoxStyles()}
  /* display: ${props => (props.inline ? "inline-flex" : "inline-block")}; */
  ${props =>
    props.inline &&
    `
    align-items: center;
    display: inline-flex;
  `}
  list-style: none;
  position: relative;

  ${props =>
    (props.horizontalAlign || props.verticalAlign) && createListPositionStyles}
`;

const List = ({
  inline,
  shadow,
  className,
  style,
  children,
  fullWidth,
  verticalAlign,
  horizontalAlign,
  ...otherProps
}) => {
  return (
    <StyledList
      inline={inline}
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
  shadow: true,
  inline: false
};

List.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fullWidth: PropTypes.bool,
  inline: PropTypes.bool,
  shadow: PropTypes.bool,
  children: PropTypes.node,
  verticalAlign: PropTypes.oneOf(["top", "bottom"]),
  horizontalAlign: PropTypes.oneOf(["left", "right"])
};

export default List;
