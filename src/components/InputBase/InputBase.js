import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import Cutout from "../Cutout/Cutout";
import { blockSizes, fontSizes, padding, fontFamily } from "../common/system";

const StyledInputWrapper = styled(Cutout)`
  height: ${blockSizes.md};
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
`;

export const StyledTextInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 ${padding.sm};
  outline: none;
  border: none;
  background: none;
  font-size: ${fontSizes.md};
  font-family: ${fontFamily};
  color: ${({ theme, disabled }) =>
    disabled ? theme.inputTextDisabled : theme.inputText};
  text-shadow: ${({ theme, disabled }) =>
    disabled ? "1px 1px " + theme.inputTextDisabledShadow : "none"};
  /* filter: ${props => (props.disabled ? "grayscale(100%)" : "none")}; */
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
