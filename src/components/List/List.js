import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./List.css";

const List = ({
  noShadow,
  className,
  style,
  children,
  fullWidth,
  ...otherProps
}) => {
  const baseClass = "List";

  const rootClass = cx(baseClass, className, {
    [`${baseClass}--fullWidth`]: fullWidth,
    [`${baseClass}--noShadow`]: noShadow
  });

  return (
    <ul className={rootClass} style={style} {...otherProps}>
      {children}
    </ul>
  );
};

List.defaultProps = {
  style: {},
  fullWidth: false,
  noShadow: false
};

List.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fullWidth: PropTypes.bool,
  noShadow: PropTypes.bool,
  children: PropTypes.node
};

export default List;
