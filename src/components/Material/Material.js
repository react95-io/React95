import React from "react";
import PropTypes from "prop-types";

import { StyledMaterial } from "../common";

const Material = ({ hollow, className, children, style, ...otherProps }) => {
  return <StyledMaterial>{children}</StyledMaterial>;
};

Material.defaultProps = {
  hollow: false
};

Material.propTypes = {
  hollow: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Material;
