import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Fab.css";

const Fab = ({
  type,
  size,
  onClick,
  className,
  style,
  disabled,
  active,
  children,
  square,
  ...otherProps
}) => {
  const baseClass = "Fab";

  const rootClass = cx(baseClass, className, {
    [`${baseClass}--${size}`]: size,
    [`${baseClass}--disabled`]: disabled,
    [`${baseClass}--active`]: active,
    [`${baseClass}--square`]: square
  });

  return (
    <button
      className={rootClass}
      type={type}
      style={style}
      onClick={!disabled && onClick}
      {...otherProps}
    >
      <span className={`${baseClass}__content`}>{children}</span>
    </button>
  );
};

Fab.defaultProps = {
  type: "button",
  onClick: null,
  style: {},
  disabled: false,
  size: "m",
  square: false,
  active: false
};

Fab.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(["s", "m", "l", "xl"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  square: PropTypes.bool,
  children: PropTypes.node
};

export default Fab;
