import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Material.css";

const Material = ({ hollow, className, children, style, ...otherProps }) => {
  const baseClass = "Material";
  const rootClass = cx(baseClass, className, {
    [`${baseClass}--hollow`]: hollow
  });
  return (
    <div className={rootClass} style={style} {...otherProps}>
      {children}
    </div>
  );
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
