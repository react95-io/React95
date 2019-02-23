import React from "react";
import propTypes from "prop-types";
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
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

export default Table;
