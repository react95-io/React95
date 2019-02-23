import React from "react";
import propTypes from "prop-types";
import cx from "classnames";

import "./TableHead.css";

const TableHead = ({ className, children, style, ...otherProps }) => {
  const baseClass = "TableHead";
  const rootClass = cx(baseClass, className);
  return (
    <thead className={rootClass} style={style} {...otherProps}>
      {children}
    </thead>
  );
};

TableHead.defaultProps = {};

TableHead.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

export default TableHead;
