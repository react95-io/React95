import React from "react";
import propTypes from "prop-types";

import { StyledMaterial } from "../common";

const Material = ({ hollow, className, children, style, ...otherProps }) => {
  return <StyledMaterial>{children}</StyledMaterial>;
};

Material.defaultProps = {
  hollow: false
};

Material.propTypes = {
  hollow: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

export default Material;
