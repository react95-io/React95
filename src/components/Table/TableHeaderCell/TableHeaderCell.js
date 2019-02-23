import React from "react";
import propTypes from "prop-types";
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
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func
};

export default TableHeaderCell;
