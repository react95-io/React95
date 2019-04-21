import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { padding } from "../common/system";

const StyledWindowContent = styled.div`
  padding: ${padding.md};
  margin-right: 2px;
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
