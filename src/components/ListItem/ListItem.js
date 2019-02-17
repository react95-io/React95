import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./ListItem.css";

const ListItem = ({
  size,
  disabled,
  square,
  className,
  style,
  children,
  onClick,
  ...otherProps
}) => {
  const baseClass = "ListItem";

  const rootClass = cx(baseClass, className, {
    [`${baseClass}--${size}`]: size,
    [`${baseClass}--disabled`]: disabled,
    [`${baseClass}--square`]: square
  });

  return (
    <li
      className={rootClass}
      style={style}
      onClick={disabled ? undefined : onClick}
      {...otherProps}
    >
      {children}
    </li>
  );
};

ListItem.defaultProps = {
  style: {},
  disabled: false,
  size: "l",
  square: false,
  onClick: null
};

ListItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["s", "m", "l", "xl"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  square: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default ListItem;
