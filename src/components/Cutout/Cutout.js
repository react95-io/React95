import React from "react";
import PropTypes from "prop-types";

import { StyledCutout } from "../common";

// add padding prop ?

const Cutout = ({ className, style, children, shadow, ...otherProps }) => {
  return (
    <StyledCutout className={className} style={style} {...otherProps}>
      {children}
    </StyledCutout>
  );
};

Cutout.defaultProps = {
  shadow: true
};

Cutout.propTypes = {
  className: PropTypes.string,
  shadow: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object
};

export default Cutout;
