import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { StyledCutout, insetShadow } from "../common";
import {
  colors,
  blockSizes,
  fontSizes,
  padding,
  fontFamily
} from "../common/theme.variables";

const StyledTextAreaWrapper = styled(StyledCutout)`
  display: inline-block;
  min-height: ${blockSizes.md};
  padding: 0;
  background: ${props => (props.isDisabled ? colors.bg : colors.light)};
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: ${padding.sm};
  outline: none;
  border: none;
  background: none;
  resize: none;
  font-size: ${fontSizes.md};
  font-family: ${fontFamily};
  color: ${props => (props.disabled ? colors.darkGray : colors.dark)};
  text-shadow: ${props =>
    props.disabled ? "1px 1px " + colors.light : "none"};
  filter: ${props => (props.disabled ? "grayscale(100%)" : "none")};
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
