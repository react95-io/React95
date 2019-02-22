import React, { useState } from "react";
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
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid ${colors.dark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
const StyledCheckmark = styled(StyledCutout)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: ${props => (props.isDisabled ? colors.bg : colors.light)};
  ${props => createCheckmarkSymbol(props)}
`;

const Checkbox = ({
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
  const [state, setState] = useState(checked);

  const handleChange = e => {
    const newState = e.target.checked;
    setState(newState);
    onChange && onChange(e);
  };
  return (
    <StyledLabel isDisabled={disabled} className={className} style={style}>
      {label}
      <StyledInput
        onChange={disabled ? undefined : handleChange}
        readOnly={disabled}
        type="checkbox"
        value={value}
        checked={state}
        name={name}
        {...otherProps}
      />
      <StyledCheckmark checked={state} isDisabled={disabled} />
    </StyledLabel>
  );
};

Checkbox.defaultProps = {
  checked: false,
  name: "",
  value: null,
  label: "",
  disabled: false
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
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

export default Checkbox;
