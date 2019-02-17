import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./SelectItem.css";

const SelectItem = ({ children, onClick }) => {
  const baseClass = "SelectItem";

  return (
    <li className={baseClass} onClick={onClick}>
      {children}
    </li>
  );
};

SelectItem.defaultProps = {
  onClick: null
};

SelectItem.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default SelectItem;
