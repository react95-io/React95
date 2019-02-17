import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./WindowHeader.css";

const WindowHeader = ({ className, style, children }) => {
  const baseClass = "WindowHeader";

  const rootClass = cx(baseClass, className);
  return <header className={rootClass}>{children}</header>;
};

WindowHeader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default WindowHeader;
