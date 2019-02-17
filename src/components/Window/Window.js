import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Window.css";

const Window = ({ noShadow, className, children, ...otherProps }) => {
  const baseClass = "Window";
  const rootClass = cx(baseClass, className, {
    [`${baseClass}--noShadow`]: noShadow
  });
  return (
    <section className={rootClass} {...otherProps}>
      {children}
    </section>
  );
};

Window.defaultProps = {
  noShadow: false
};

Window.propTypes = {
  noShadow: PropTypes.bool,
  children: PropTypes.node
};

export default Window;
