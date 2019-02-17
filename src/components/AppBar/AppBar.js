import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./AppBar.css";

const AppBar = ({ children, className, style, noShadow, ...otherProps }) => {
  const baseClass = "AppBar";
  const rootClass = cx(baseClass, className, {
    [`${baseClass}--noShadow`]: noShadow
  });
  return (
    <header style={style} className={rootClass} {...otherProps}>
      {children}
    </header>
  );
};

AppBar.defaultProps = {
  noShadow: false
};

AppBar.propTypes = {
  style: PropTypes.object,
  noShadow: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

export default AppBar;
