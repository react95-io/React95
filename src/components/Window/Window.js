import React from "react";
import PropTypes from "prop-types";

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
  shadow: PropTypes.bool,
  className: PropTypes.bool,
  children: PropTypes.node
};

export default Window;
