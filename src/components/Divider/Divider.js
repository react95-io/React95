import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Divider.css";

const Divider = ({ className, style, ...otherProps }) => {
  const baseClass = "Divider";
  const rootClass = cx(baseClass, className);
  return <hr className={rootClass} style={style} {...otherProps} />;
};

Divider.defaultProps = {};
Divider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default Divider;
