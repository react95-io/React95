import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { blockSizes, padding } from "../common/system";

const SlyledWindowHeader = styled.div`
  height: 33px;
  line-height: 33px;
  padding: 0 ${padding.sm};
  margin-right: 2px;

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
