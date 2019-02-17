import React from "react";
import PropTypes from "prop-types";
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
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default TableRow;
