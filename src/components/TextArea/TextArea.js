import React, { useState } from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { createDisabledTextStyles } from "../common";
import { blockSizes, fontSizes, padding, fontFamily } from "../common/system";
import Cutout from "../Cutout/Cutout";

const StyledTextAreaWrapper = styled(Cutout)`
  display: inline-block;
  min-height: ${blockSizes.md};
  padding: 0;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${padding.sm};
  outline: none;
  border: none;
  background: none;
  resize: none;
  font-size: ${fontSizes.md};
  font-family: ${fontFamily};
  color: ${({ theme, disabled }) =>
    disabled ? theme.inputTextDisabled : theme.inputText};
  ${props => props.disabled && createDisabledTextStyles()}
`;

const TextArea = ({
  onChange,
  disabled,
  width,
  height,
  style,
  shadow,
  ...otherProps
}) => (
  <StyledTextAreaWrapper
    style={{
      ...style,
      width: width ? width : "100%",
      height: height ? height : "auto"
    }}
    isDisabled={disabled}
    shadow={shadow}
  >
    <StyledTextArea
      width={width}
      height={height}
      readOnly={disabled}
      onChange={disabled ? undefined : onChange}
      disabled={disabled}
      {...otherProps}
    />
  </StyledTextAreaWrapper>
);

TextArea.defaultProps = {
  shadow: true
};
TextArea.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  disabled: propTypes.bool,
  shadow: propTypes.bool
};

export default TextArea;
