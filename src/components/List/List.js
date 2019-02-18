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
  verticalAlign,
  horizontalAlign,
  ...otherProps
}) => {
  const baseClass = "List";

  const rootClass = cx(baseClass, className, {
    [`${baseClass}--${verticalAlign}`]: verticalAlign || false,

    [`${baseClass}--${horizontalAlign}`]: horizontalAlign || false,
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
  children: PropTypes.node,
  verticalAlign: PropTypes.oneOf(["top", "bottom"]),
  horizontalAlign: PropTypes.oneOf(["left", "right"])
};

export default List;
