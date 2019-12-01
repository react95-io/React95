import React, { forwardRef } from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { createDisabledTextStyles, createFlatBoxStyles } from '../common';
import { padding, fontSizes } from '../common/system';
import Cutout from '../Cutout/Cutout';

const radioSize = '20px';
const StyledLabel = styled.label`
  display: inline-block;

  position: relative;
  padding-left: calc(${radioSize} + ${padding.sm});
  margin: ${padding.sm} 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-size: ${fontSizes.md};
  ${props => props.isDisabled && createDisabledTextStyles()}
`;

const RadioInput = forwardRef(({ ...props }, ref) => {
  return <input {...props} ref={ref} />;
});

const StyledRadioInput = styled(RadioInput)`
  position: absolute;
  opacity: 0;
`;

const createCheckmarkSymbol = ({ checked }) =>
  checked &&
  css`
    &:after {
      position: absolute;
      content: '';
      display: inline-block;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: ${({ theme }) => theme.checkmark};
    }
  `;

const sharedCheckmarkStyles = css`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: ${radioSize};
  height: ${radioSize};
  border-radius: 50%;
  ${props => createCheckmarkSymbol(props)}
`;
// had to overwrite box-shadow for StyledCheckmark since the default made checkbox too dark
const StyledCheckmark = styled(Cutout)`

  ${sharedCheckmarkStyles}
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};

  box-shadow: ${({ shadow }) =>
    shadow ? 'inset 3px 3px 10px rgba(0, 0, 0, 0.1)' : 'none'};

  &:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }

`;
const StyledFlatCheckmark = styled.div`
  ${createFlatBoxStyles()}
  ${sharedCheckmarkStyles}
  outline: none;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.flatLight : theme.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({ theme }) => theme.flatDark};
    border-radius: 50%;
  }
`;
const Radio = forwardRef(
  (
    {
      onChange,
      label,
      disabled,
      variant,
      value,
      checked,
      name,
      className,
      style,
      shadow,
      ...otherProps
    },
    ref
  ) => {
    const Checkmark =
      variant === 'flat' ? StyledFlatCheckmark : StyledCheckmark;
    return (
      <StyledLabel isDisabled={disabled} className={className} style={style}>
        {label}
        <StyledRadioInput
          onChange={disabled ? undefined : onChange}
          readOnly={disabled}
          type='radio'
          value={value}
          checked={checked}
          name={name}
          ref={ref}
          {...otherProps}
        />
        <Checkmark checked={checked} isDisabled={disabled} shadow={shadow} />
      </StyledLabel>
    );
  }
);

Radio.defaultProps = {
  checked: false,
  label: '',
  disabled: false,
  variant: 'default',
  shadow: true,
  className: '',
  style: {}
};

Radio.propTypes = {
  onChange: propTypes.func.isRequired,
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
  variant: propTypes.oneOf(['default', 'flat']),
  style: propTypes.shape([propTypes.string, propTypes.number]),
  className: propTypes.string
};

export default Radio;
