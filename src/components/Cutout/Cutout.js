import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Cutout.css";

const Cutout = ({ className, style, children, noShadow, ...otherProps }) => {
  const baseClass = "Cutout";
  const rootClass = cx(baseClass, className, {
    [`${baseClass}--noShadow`]: noShadow
  });
  return (
    <div className={rootClass} style={style} {...otherProps}>
      {children}
    </div>
  );
};

Cutout.defaultProps = {
  noShadow: false
};

Cutout.propTypes = {
  className: PropTypes.string,
  noShadow: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object
};

export default Cutout;
