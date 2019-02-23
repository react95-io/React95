import React from "react";
import propTypes from "prop-types";
import cx from "classnames";

import "./TableBody.css";

const TableBody = ({ className, children, style, ...otherProps }) => {
  const baseClass = "TableBody";
  const rootClass = cx(baseClass, className);
  return (
    <tbody className={rootClass} style={style} {...otherProps}>
      {children}
    </tbody>
  );
};

TableBody.defaultProps = {};

TableBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

export default TableBody;
