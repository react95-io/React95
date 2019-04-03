import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { blockSizes } from "../common/theme.variables";

const StyledBar = styled.div`
  display: inline-block;
  height: ${props => blockSizes[props.size]};
  width: 5px;
  border-top: 2px solid ${({ theme }) => theme.borderLightest};
  border-left: 2px solid ${({ theme }) => theme.borderLightest};
  border-bottom: 2px solid ${({ theme }) => theme.borderDark};
  border-right: 2px solid ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.material};
`;
const Bar = ({ size, className, style, ...otherProps }) => {
  return (
    <StyledBar
      size={size}
      className={className}
      style={style}
      {...otherProps}
    />
  );
};

Bar.defaultProps = {
  size: "md"
};
Bar.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  size: propTypes.oneOf(["sm", "md", "lg"])
};
export default Bar;
