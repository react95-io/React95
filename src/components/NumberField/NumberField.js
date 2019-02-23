import React from "react";
import propTypes from "prop-types";

import Button from "../Button/Button";

import styled from "styled-components";
import { colors, blockSizes } from "../common/theme.variables";
import InputBase from "../InputBase/InputBase";

// ⭕⭕⭕⭕⭕ fix functionality and use hooks

const StyledNumberFieldWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StyledButtonWrapper = styled.div`
  height: ${blockSizes.md};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-left: 2px;
  margin-top: -2px;
`;
const StyledButton = styled(Button)`
  height: 50%;
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  border-left-color: ${colors.lightGray};
  border-top-color: ${colors.lightGray};
  box-shadow: inset 1px 1px 0px 1px ${colors.light},
    inset -1px -1px 0 1px ${colors.darkGray};
`;
const StyledButtonIcon = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) ${props => props.invert && "rotateZ(180deg)"};
  width: 0px;
  height: 0px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  display: inline-block;
  border-top: 4px solid ${colors.dark};
`;

class NumberField extends React.Component {
  static defaultProps = {
    value: 0,
    disabled: false
  };
  static propTypes = {
    onChange: propTypes.func.isRequired,
    value: propTypes.number.isRequired,
    min: propTypes.number,
    max: propTypes.number,
    width: propTypes.oneOfType([propTypes.string, propTypes.number]),
    disabled: propTypes.bool,
    disableKeyboardInput: propTypes.bool,
    fullWidth: propTypes.bool,
    shadow: propTypes.bool,
    className: propTypes.string
  };
  state = {
    value: parseInt(this.props.value) || 0
  };

  add = value => {
    const newValue = this.normalize(this.state.value + value);
    this.props.onChange(newValue);
    this.setState({ value: newValue });
  };

  handleChange = e => {
    let newValue =
      e.target.value === "-" ? "-" : this.normalize(e.target.value);
    console.log(newValue);
    newValue = newValue ? newValue : newValue === 0 ? 0 : "";
    if (e.target.validity.valid) {
      this.setState({ value: newValue });
      this.props.onChange(newValue);
    }
  };
  normalize = value => {
    const { min, max } = this.props;
    if (min !== undefined && value < min) return min;
    if (max !== undefined && value > max) return max;
    return parseInt(value);
  };
  render() {
    const {
      disabled,
      disableKeyboardInput,
      className,
      width,
      style,
      shadow
    } = this.props;
    const { value } = this.state;
    return (
      <StyledNumberFieldWrapper
        className={className}
        style={{ ...style, width: width ? width : "auto" }}
      >
        <InputBase
          value={value}
          onChange={
            disabled || disableKeyboardInput ? undefined : this.handleChange
          }
          readOnly={disabled || disableKeyboardInput}
          disabled={disabled}
          shadow={shadow}
          type="tel"
          pattern="^-?[0-9]\d*\.?\d*$"
        />
        <StyledButtonWrapper>
          <StyledButton disabled={disabled} onClick={() => this.add(1)}>
            <StyledButtonIcon invert />
          </StyledButton>
          <StyledButton disabled={disabled} onClick={() => this.add(-1)}>
            <StyledButtonIcon />
          </StyledButton>
        </StyledButtonWrapper>
      </StyledNumberFieldWrapper>
    );
  }
}

export default NumberField;
