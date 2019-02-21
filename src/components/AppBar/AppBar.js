import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StyledMaterial } from "../common";

const StyledAppBar = styled(StyledMaterial)`
  position: ${props => (props.fixed ? "fixed" : "absolute")};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AppBar = ({
  fixed,
  children,
  className,
  style,
  shadow,
  ...otherProps
}) => {
  return (
    <StyledAppBar
      fixed={fixed}
      style={style}
      className={className}
      {...otherProps}
    >
      {children}
    </StyledAppBar>
  );
};

AppBar.defaultProps = {
  shadow: true,
  fixed: true
};

AppBar.propTypes = {
  style: PropTypes.object,
  shadow: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  fixed: PropTypes.bool
};

export default AppBar;
