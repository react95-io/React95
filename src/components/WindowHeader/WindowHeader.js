import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { blockSizes, padding, colors } from "../common/theme.variables";

const SlyledWindowHeader = styled.div`
  height: ${blockSizes.md};
  padding: 0 ${padding.md};
  margin-right: 2px;

  line-height: ${blockSizes.md};
  font-weight: bold;
  color: ${colors.light};

  background: linear-gradient(to right, ${colors.navy}, ${colors.blue});
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
