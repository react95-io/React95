import React from "react";
import PropTypes from "prop-types";
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
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default TableBody;
