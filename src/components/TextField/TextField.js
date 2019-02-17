import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./TextField.css";

import Cutout from "../Cutout/Cutout";

const TextField = ({
  onChange,
  value,
  disabled,
  name,
  width,
  className,
  type,
  multiline,
  rows
}) => {
  const baseClass = "TextField";
  const rootClass = cx(baseClass, {
    [`${baseClass}--disabled`]: disabled
  });
  return (
    <Cutout
      className={cx(`${baseClass}-wrapper`, className)}
      style={{ width: width ? width : "auto" }}
    >
      {multiline ? (
        <textarea
          onChange={disabled ? undefined : onChange}
          readOnly={disabled}
          value={value}
          name={name}
          className={rootClass}
          rows={rows || 1}
        />
      ) : (
        <input
          onChange={disabled ? undefined : onChange}
          readOnly={disabled}
          value={value}
          name={name}
          className={rootClass}
          type={type}
        />
      )}
    </Cutout>
  );
};

TextField.defaultProps = {
  value: "",
  disabled: false
};
TextField.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(["text", "number"])
};
export default TextField;
