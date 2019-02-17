import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Button.css";

const Button = ({
  type,
  size,
  onClick,
  className,
  style,
  disabled,
  active,
  children,
  fullWidth,
  square,
  flat,
  accent,
  ...otherProps
}) => {
  const baseClass = "Button";

  const rootClass = cx(baseClass, className, {
    [`${baseClass}--${size}`]: size,
    [`${baseClass}--disabled`]: disabled,
    [`${baseClass}--active`]: active,
    [`${baseClass}--fullWidth`]: fullWidth && !square,
    [`${baseClass}--square`]: square,
    [`${baseClass}--flat`]: flat
  });

  let content = children;
  if (typeof content === "string" && accent) {
    content = (
      <span>
        <span className={`${baseClass}__accent`}>{content.charAt(0)}</span>
        {content.slice(1)}
      </span>
    );
  }
  return (
    <button
      className={rootClass}
      type={type}
      style={style}
      onClick={disabled ? null : onClick}
      {...otherProps}
    >
      <span className={`${baseClass}__content`}>{content}</span>
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  onClick: null,
  style: {},
  disabled: false,
  fullWidth: false,
  size: "m",
  square: false,
  active: false,
  flat: false,
  accent: false
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(["s", "m", "l", "xl"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  fullWidth: PropTypes.bool,
  square: PropTypes.bool,
  flat: PropTypes.bool,
  accent: PropTypes.bool,
  children: PropTypes.node
};

export default Button;
