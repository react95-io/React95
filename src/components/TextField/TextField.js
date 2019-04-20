import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import Cutout from "../Cutout/Cutout";
import { blockSizes, fontSizes, padding, fontFamily } from "../common/system";

const StyledWrapper = styled(Cutout)`
  height: ${blockSizes.md};
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
`;

export const StyledTextInput = styled.input`
  box-sizing: border-box;
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
`;
const TextField = ({
  onChange,
  disabled,
  type,
  style,
  shadow,
  width,
  ...otherProps
}) => (
  <StyledWrapper
    width={width}
    shadow={shadow}
    isDisabled={disabled}
    style={{ ...style, width: width ? width : "auto" }}
  >
    <StyledTextInput
      onChange={disabled ? undefined : onChange}
      readOnly={disabled}
      disabled={disabled}
      type={type}
      {...otherProps}
    />
  </StyledWrapper>
);
TextField.defaultProps = {
  disabled: false,
  shadow: true,
  type: "text"
};
TextField.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  type: propTypes.string
};
export default TextField;
