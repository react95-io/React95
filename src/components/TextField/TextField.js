import React, { useState } from "react";
import propTypes from "prop-types";

import InputBase from "../InputBase/InputBase";

const TextField = ({
  onChange,
  value,
  disabled,
  name,
  width,
  className,
  type,
  style,
  shadow,
  placeholder,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value);

  const onValueChange = e => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange && onChange(e);
  };
  return (
    <InputBase
      shadow={shadow}
      isDisabled={disabled}
      style={{ ...style, width: width ? width : "auto" }}
      onChange={disabled ? undefined : onValueChange}
      disabled={disabled}
      value={inputValue}
      placeholder={placeholder}
      name={name}
      className={className}
      {...otherProps}
      type="text"
    />
  );
};

TextField.defaultProps = {
  value: "",
  placeholder: "",
  disabled: false,
  shadow: true,
  onChange: undefined
};
TextField.propTypes = {
  className: propTypes.string,
  placeholder: propTypes.string,
  name: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  width: propTypes.oneOfType([propTypes.string, propTypes.number])
};
export default TextField;
