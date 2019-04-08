import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { createBorderStyles, createBoxStyles } from "../common";
import { padding } from "../common/system";

const StyledTabBody = styled.div`
  ${createBoxStyles()}
  ${createBorderStyles()}
  position: relative;
  display: block;
  height: 100%;
  padding: ${padding.md};
  padding-top: calc(1.5 * ${padding.md});
`;
const TabBody = ({ children, className, style, ...otherProps }) => {
  return (
    <StyledTabBody className={className} style={style} {...otherProps}>
      {children}
    </StyledTabBody>
  );
};

TabBody.defaultProps = {};

TabBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};
export default TabBody;
