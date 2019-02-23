import React from "react";
import propTypes from "prop-types";
import cx from "classnames";
import "./TabBody.css";

import Material from "../../Material/Material";
const TabBody = ({ children, className, style, ...otherProps }) => {
  const baseClass = "TabBody";
  const rootClass = cx(baseClass, className);

  return (
    <div className={rootClass} style={style} {...otherProps}>
      {children}
    </div>
  );
};

TabBody.defaultProps = {};

TabBody.propTypes = {
  children: propTypes.node
};
export default TabBody;
