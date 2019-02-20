import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { StyledCutout } from "../common";
import {
  blockSizes,
  fontSizes,
  padding,
  colors
} from "../common/theme.variables";

const StyledInputWrapper = styled(StyledCutout)`
  height: ${blockSizes.md};
  padding: 2px;
  background: ${props => (props.isDisabled ? colors.bg : colors.light)};
`;
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 ${padding.sm};
  outline: none;
  border: none;
  background: none;
  font-size: ${fontSizes.md};

  color: ${props => (props.disabled ? colors.darkGray : colors.dark)};
  text-shadow: ${props =>
    props.disabled ? "1px 1px " + colors.light : "none"};
  filter: ${props => (props.disabled ? "grayscale(100%)" : "none")};
  /* negative margin to compensate for wrapper borders */
`;

const TextField = ({
  onChange,
  value,
  disabled,
  name,
  width,
  className,
  type,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value);

  const onValueChange = e => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange && onChange(newValue);
  };
  return (
    <StyledInputWrapper
      shadow
      isDisabled={disabled}
      style={{ width: width ? width : "auto" }}
    >
      <StyledInput
        onChange={disabled ? undefined : onValueChange}
        readOnly={disabled}
        disabled={disabled}
        value={inputValue}
        name={name}
        className={className}
        type={type}
        {...otherProps}
      />
    </StyledInputWrapper>
  );
};

TextField.defaultProps = {
  value: "",
  disabled: false,
  onChange: undefined
};
TextField.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(["text", "number"])
};
export default TextField;
