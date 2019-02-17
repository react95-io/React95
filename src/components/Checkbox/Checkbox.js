import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Checkbox.css";

import Cutout from "../Cutout/Cutout";

const Checkbox = ({
  onChange,
  label,
  disabled,
  value,
  checked,
  name,
  style,
  ...otherProps
}) => {
  const baseClass = "Checkbox";
  const rootClass = cx(baseClass, {
    [`${baseClass}--checked`]: checked,
    [`${baseClass}--disabled`]: disabled
  });
  return (
    <label className={`${rootClass}`} style={style}>
      {label}
      <input
        onChange={disabled ? undefined : onChange}
        className={`${baseClass}__input`}
        type="checkbox"
        value={value}
        checked={checked}
        name={name}
        {...otherProps}
      />
      <Cutout className={`${baseClass}__checkmark`} />
    </label>
  );
};

Checkbox.defaultProps = {
  checked: false,
  name: "",
  value: null,
  label: "",
  disabled: false
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object
};

export default Checkbox;
