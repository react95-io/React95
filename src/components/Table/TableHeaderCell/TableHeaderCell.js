import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./TableHeaderCell.css";

const TableHeaderCell = ({
  className,
  children,
  style,
  onClick,
  ...otherProps
}) => {
  const baseClass = "TableHeaderCell";
  const rootClass = cx(baseClass, className);
  return (
    <th className={rootClass} style={style} {...otherProps} onClick={onClick}>
      <span className={`${rootClass}__content`}>{children}</span>
    </th>
  );
};

TableHeaderCell.defaultProps = {
  onClick: null
};

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

export default TableHeaderCell;
