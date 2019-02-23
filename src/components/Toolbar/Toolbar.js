import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const StyledToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => (props.disablePadding ? "0px" : "4px")};
`;

const Toolbar = ({
  children,
  className,
  style,
  disablePadding,
  ...otherProps
}) => {
  return (
    <StyledToolbar className={className} style={style} {...otherProps}>
      {children}
    </StyledToolbar>
  );
};
Toolbar.defaultProps = {
  disablePadding: false
};

Toolbar.propTypes = {
  style: propTypes.object,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  disablePadding: propTypes.bool
};

export default Toolbar;
