import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDivider = styled.hr`
  width: 100%;
  border-bottom: 2px solid #fff;
  border-top: 2px solid #888c8f;
  margin: 0;
`;

const Divider = ({ className, style, ...otherProps }) => {
  return <StyledDivider className={className} style={style} {...otherProps} />;
};

Divider.defaultProps = {};
Divider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default Divider;
