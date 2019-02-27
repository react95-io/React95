import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { blockSizes, padding } from "../common/theme.variables";

const SlyledWindowHeader = styled.div`
  height: ${blockSizes.md};
  padding: 0 ${padding.md};
  margin-right: 2px;

  line-height: ${blockSizes.md};
  font-weight: bold;
  color: ${({ theme }) => theme.textInvert};

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.headerMaterialDark},
    ${({ theme }) => theme.headerMaterialLight}
  );
`;

const WindowHeader = ({ className, style, children, ...otherProps }) => {
  return (
    <SlyledWindowHeader className={className} style={style} {...otherProps}>
      {children}
    </SlyledWindowHeader>
  );
};

WindowHeader.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node
};

export default WindowHeader;
