import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./TableDataCell.css";

const TableDataCell = ({ className, children, style, ...otherProps }) => {
  const baseClass = "TableDataCell";
  const rootClass = cx(baseClass, className);
  return (
    <td className={rootClass} style={style} {...otherProps}>
      {children}
    </td>
  );
};

TableDataCell.defaultProps = {};

TableDataCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default TableDataCell;
