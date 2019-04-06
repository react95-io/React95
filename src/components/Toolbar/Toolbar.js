import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const StyledToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => (props.noPadding ? "0px" : "4px")};
`;

const Toolbar = ({ children, className, style, noPadding, ...otherProps }) => {
  return (
    <StyledToolbar
      noPadding={noPadding}
      className={className}
      style={style}
      {...otherProps}
    >
      {children}
    </StyledToolbar>
  );
};
Toolbar.defaultProps = {
  noPadding: false
};

Toolbar.propTypes = {
  style: propTypes.object,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  noPadding: propTypes.bool
};

export default Toolbar;
