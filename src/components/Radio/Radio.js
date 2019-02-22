import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { StyledCutout, createDisabledTextStyles } from "../common";
import { colors, padding, fontSizes } from "../common/theme.variables";

const StyledLabel = styled.label`
  display: block;

  position: relative;
  padding-left: calc(20px + ${padding.sm});
  margin: ${padding.md} 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-size: ${fontSizes.md};
  ${props => props.isDisabled && createDisabledTextStyles()}
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const createCheckmarkSymbol = ({ checked }) =>
  checked &&
  `
  &:after {
    position: absolute;
    content: "";
    display: inline-block;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: ${colors.dark};
  }
`;
const StyledCheckmark = styled(StyledCutout)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background: ${props => (props.isDisabled ? colors.bg : colors.light)};

  &:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
  }

  ${props => createCheckmarkSymbol(props)}
`;

const Radio = ({
  onChange,
  label,
  disabled,
  value,
  checked,
  name,
  className,
  style,
  ...otherProps
}) => {
  return (
    <StyledLabel isDisabled={disabled} className={className} style={style}>
      {label}
      <StyledInput
        onChange={disabled ? undefined : onChange}
        readOnly={disabled}
        type="radio"
        value={value}
        checked={checked}
        name={name}
        {...otherProps}
      />
      <StyledCheckmark checked={checked} isDisabled={disabled} />
    </StyledLabel>
  );
};

Radio.defaultProps = {
  checked: false,
  name: "",
  value: null,
  label: "",
  disabled: false
};

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object
};

export default Radio;
