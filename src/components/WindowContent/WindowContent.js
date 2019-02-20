import React from "react";
import PropTypes from "prop-types";

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
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default WindowContent;
