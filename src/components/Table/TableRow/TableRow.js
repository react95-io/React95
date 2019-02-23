import React from "react";
import propTypes from "prop-types";
import cx from "classnames";

import "./TableRow.css";

const TableRow = ({ className, children, style, ...otherProps }) => {
  const baseClass = "TableRow";
  const rootClass = cx(baseClass, className);
  return (
    <tr className={rootClass} style={style} {...otherProps}>
      {children}
    </tr>
  );
};

TableRow.defaultProps = {};

TableRow.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

export default TableRow;
