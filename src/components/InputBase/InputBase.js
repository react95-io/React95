import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { StyledTextInput, StyledCutout } from "../common";
import { Cutout } from "../";
import { blockSizes } from "../common/theme.variables";

const StyledInputWrapper = styled(Cutout)`
  height: ${blockSizes.md};
  padding: 2px;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
`;

const InputBase = ({
  onChange,
  value,
  disabled,
  name,
  type,
  style,
  shadow,
  width,
  ...otherProps
}) => (
  <StyledInputWrapper
    width={width}
    shadow={shadow}
    isDisabled={disabled}
    style={{ ...style, width: width ? width : "auto" }}
  >
    <StyledTextInput
      onChange={disabled ? undefined : onChange}
      readOnly={disabled}
      disabled={disabled}
      value={value}
      name={name}
      type={type}
      {...otherProps}
    />
  </StyledInputWrapper>
);

InputBase.defaultProps = {
  value: "",
  disabled: false,
  shadow: true,
  onChange: undefined
};
InputBase.propTypes = {
  name: propTypes.string,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  type: propTypes.oneOf(["text", "number", "tel"])
};
export default InputBase;
