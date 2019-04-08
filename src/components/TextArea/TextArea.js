import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { StyledCutout, insetShadow, createDisabledTextStyles } from "../common";
import {
  blockSizes,
  fontSizes,
  padding,
  fontFamily
} from "../common/theme.variables";

const StyledTextAreaWrapper = styled(StyledCutout)`
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
  /* filter: ${props => (props.disabled ? "grayscale(100%)" : "none")}; */
  ${props => props.shadow && "box-shadow: " + insetShadow + ";"}
`;

const TextArea = ({
  children,
  rows,
  cols,
  onChange,
  value,
  disabled,
  name,
  width,
  height,
  className,
  style,
  shadow,
  placeholder,
  ...otherProps
}) => (
  <StyledTextAreaWrapper
    style={{
      ...style,
      width: width ? width : "100%",
      height: height ? height : "auto"
    }}
    isDisabled={disabled}
  >
    <StyledTextArea
      className={className}
      name={name}
      width={width}
      height={height}
      readOnly={disabled}
      onChange={disabled && onChange ? onChange : undefined}
      shadow={shadow}
      disabled={disabled}
      placeholder={placeholder}
      {...otherProps}
    >
      {children}
    </StyledTextArea>
  </StyledTextAreaWrapper>
);
TextArea.defaultProps = {
  children: null,
  shadow: true,
  placeholder: ""
};
TextArea.propTypes = {
  rows: propTypes.number,
  cols: propTypes.number,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]),

  name: propTypes.string,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  placeholder: propTypes.string
};

export default TextArea;
