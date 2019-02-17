import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Table.css";
import Cutout from "../Cutout/Cutout";

const Table = ({ className, children, style, ...otherProps }) => {
  const baseClass = "Table";
  const rootClass = cx(baseClass, className);
  return (
    <Cutout className={`${baseClass}-wrapper`}>
      <table className={rootClass} style={style} {...otherProps}>
        {children}
      </table>
    </Cutout>
  );
};

Table.defaultProps = {};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Table;
