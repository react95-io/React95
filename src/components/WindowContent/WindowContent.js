import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { padding } from "../common/theme.variables";

const StyledWindowContent = styled.div`
  padding: ${padding.md};
`;

const WindowContent = ({ className, children, style, ...otherProps }) => {
  return (
    <StyledWindowContent className={className} style={style} {...otherProps}>
      {children}
    </StyledWindowContent>
  );
};

WindowContent.defaultProps = {};

WindowContent.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node
};

export default WindowContent;
