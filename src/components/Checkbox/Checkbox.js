import React, { useState } from "react";
import propTypes from "prop-types";

import styled, { css } from "styled-components";
import { createDisabledTextStyles } from "../common";
import { padding, fontSizes } from "../common/system";
import Cutout from "../Cutout/Cutout";

const StyledLabel = styled.label`
  display: inline-block;
  position: relative;
  padding-left: calc(20px + ${padding.sm});
  margin: ${padding.sm} 0;
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
  z-index: -99;
`;

const createCheckmarkSymbol = ({ checked }) =>
  checked &&
  css`
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: calc(50% - 1px);
      width: 3px;
      height: 7px;

      border: solid ${({ theme }) => theme.checkmark};
      border-width: 0 3px 3px 0;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  `;
const StyledCheckmark = styled(Cutout)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
  ${props => createCheckmarkSymbol(props)};
  box-shadow: ${({ shadow }) =>
    shadow ? `inset 3px 3px 10px rgba(0, 0, 0, 0.1)` : "none"};
  &:before {
    box-shadow: none;
  }
`;

const Checkbox = ({
  onChange,
  label,
  disabled,
  value,
  checked,
  defaultChecked,
  name,
  className,
  style,
  shadow,
  flat,
  ...otherProps
}) => {
  let Input, isChecked;

  if (defaultChecked || checked === undefined) {
    const [state, setState] = useState(defaultChecked || false);

    const handleChange = e => {
      const newState = e.target.checked;
      setState(newState);
      onChange && onChange(e);
    };
    Input = (
      <>
        <StyledInput
          onChange={disabled ? undefined : handleChange}
          readOnly={disabled}
          type="checkbox"
          value={value}
          checked={state}
          name={name}
          {...otherProps}
        />
        <StyledCheckmark
          flat={flat}
          checked={state}
          isDisabled={disabled}
          shadow={shadow}
        />
      </>
    );
  } else {
    Input = (
      <>
        <StyledInput
          onChange={disabled ? undefined : onChange}
          readOnly={disabled}
          type="checkbox"
          value={value}
          checked={checked}
          name={name}
          {...otherProps}
        />
        <StyledCheckmark
          flat={flat}
          checked={checked}
          isDisabled={disabled}
          shadow={shadow}
        />
      </>
    );
  }
  return (
    <StyledLabel isDisabled={disabled} className={className} style={style}>
      {label}
      {Input}
    </StyledLabel>
  );
};

Checkbox.defaultProps = {
  name: "",
  value: null,
  label: "",
  disabled: false,
  shadow: true,
  flat: false,
};

Checkbox.propTypes = {
  onChange: propTypes.func,
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.bool
  ]).isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.number]),
  checked: propTypes.bool,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  style: propTypes.object,
  flat: propTypes.bool
};

export default Checkbox;
