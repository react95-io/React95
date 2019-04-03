import React from "react";
import propTypes from "prop-types";

import { StyledCutout } from "../common";

// add padding prop ?

const Cutout = ({ className, style, children, shadow, ...otherProps }) => {
  return (
    <StyledCutout
      shadow={shadow}
      className={className}
      style={style}
      {...otherProps}
    >
      {children}
    </StyledCutout>
  );
};

Cutout.defaultProps = {
  shadow: true
};

Cutout.propTypes = {
  className: propTypes.string,
  shadow: propTypes.bool,
  children: propTypes.node,
  style: propTypes.object
};

export default Cutout;
