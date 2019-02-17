import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Bar.css";

const Bar = ({ className, style, ...otherProps }) => {
  const baseClass = "Bar";
  const rootClass = cx(baseClass, className);
  return <span className={rootClass} style={style} {...otherProps} />;
};

Bar.defaultProps = {};
Bar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
export default Bar;
