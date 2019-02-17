import React from "react";
import PropTypes from "prop-types";
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
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default TableHead;
