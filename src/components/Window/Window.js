import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { createBorderStyles, createBoxStyles } from "../common";

const StyledWindow = styled.div`
  position: relative;
  padding: 2px;
  ${createBorderStyles()}
  ${createBoxStyles()}
`;

const Window = ({ shadow, className, children, ...otherProps }) => {
  return (
    <StyledWindow shadow={shadow} className={className} {...otherProps} swag>
      {children}
    </StyledWindow>
  );
};

Window.defaultProps = {
  shadow: true
};

Window.propTypes = {
  shadow: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node
};

export default Window;
