import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBar = styled.div`
  display: inline-block;
  height: 100%;
  width: 5px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #888c8f;
  border-right: 2px solid #888c8f;
  background: #ced0cf;
`;
const Bar = ({ className, style, ...otherProps }) => {
  return <StyledBar className={className} style={style} {...otherProps} />;
};

Bar.defaultProps = {};
Bar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
export default Bar;
