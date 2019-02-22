import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { blockSizes, colors } from "../common/theme.variables";

const StyledBar = styled.div`
  display: inline-block;
  height: ${props => blockSizes[props.size]};
  width: 5px;
  border-top: 2px solid ${colors.light};
  border-left: 2px solid ${colors.light};
  border-bottom: 2px solid ${colors.darkGray};
  border-right: 2px solid ${colors.darkGray};
  background: ${colors.bg};
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
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["sm", "md", "lg"])
};
export default Bar;
