import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { StyledMaterial } from "../common";

const StyledWindow = styled(StyledMaterial)`
  position: relative;
  padding: 2px;
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
