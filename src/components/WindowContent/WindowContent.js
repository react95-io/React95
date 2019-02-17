import React from "react";
import "./WindowContent.css";
import PropTypes from "prop-types";

import cx from "classnames";

const WindowContent = ({ className, children, style, ...otherProps }) => {
  const baseClass = "WindowContent";
  const rootClass = cx(baseClass, className);

  return (
    <div className={rootClass} style={style}>
      {children}
    </div>
  );
};

WindowContent.defaultProps = {
  border: false
};

WindowContent.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default WindowContent;
