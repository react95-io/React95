import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { createDisabledTextStyles, createFlatBoxStyles } from '../common';
import { padding, fontSizes } from '../common/system';
import Cutout from '../Cutout/Cutout';
import { StyledListItem } from '../ListItem/ListItem';

const radioSize = '20px';
const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: ${padding.sm} 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: ${fontSizes.md};
  ${props => props.isDisabled && createDisabledTextStyles()}

  ${StyledListItem}:hover & {
    margin: 0;
    height: 100%;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${radioSize};
  height: ${radioSize};
  opacity: 0;
  z-index: -99;
`;

const sharedCheckboxStyles = css`
  width: ${radioSize};
  height: ${radioSize};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`;
// had to overwrite box-shadow for StyledCheckbox since the default made checkbox too dark
const StyledCheckbox = styled(Cutout)`
${sharedCheckboxStyles}
background: ${({ theme, isDisabled }) =>
  isDisabled ? theme.material : theme.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`;
const StyledFlatCheckbox = styled.div`
  ${createFlatBoxStyles()}
  ${sharedCheckboxStyles}
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
const StyledMenuCheckbox = styled.div`
  ${sharedCheckboxStyles}
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: none;
`;
const Icon = styled.span.attrs(() => ({
  'data-testid': 'checkmarkIcon'
}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  ${({ variant, theme, isDisabled }) =>
    variant === 'menu'
      ? css`
          background: ${isDisabled ? theme.textDisabled : theme.text};
          filter: drop-shadow(
            1px 1px 0px ${isDisabled ? theme.textDisabledShadow : 'transparent'}
          );
        `
      : css`
          background: ${isDisabled ? theme.checkmarkDisabled : theme.checkmark};
        `}
  ${StyledListItem}:hover & {
    ${({ theme, isDisabled, variant }) =>
      !isDisabled &&
      variant === 'menu' &&
      css`
        background: ${theme.textInvert};
      `};
  }
`;
const LabelText = styled.span`
  display: inline-block;
  line-height: 1;
`;

const Radio = React.forwardRef(function Radio(props, ref) {
  const {
    onChange,
    label,
    disabled,
    variant,
    value,
    checked,
    name,
    className,
    style,
    ...otherProps
  } = props;

  const CheckboxComponent = {
    flat: StyledFlatCheckbox,
    default: StyledCheckbox,
    menu: StyledMenuCheckbox
  }[variant];

  return (
    <StyledLabel isDisabled={disabled} className={className} style={style}>
      <CheckboxComponent
        checked={checked}
        isDisabled={disabled}
        role='presentation'
      >
        {checked && <Icon isDisabled={disabled} variant={variant} />}
      </CheckboxComponent>
      {label && <LabelText>{label}</LabelText>}
      <StyledInput
        disabled={disabled}
        onChange={disabled ? undefined : onChange}
        readOnly={disabled}
        type='radio'
        value={value}
        checked={checked}
        name={name}
        ref={ref}
        {...otherProps}
      />
    </StyledLabel>
  );
});

Radio.defaultProps = {
  onChange: undefined,
  name: null,
  value: undefined,
  checked: false,
  label: '',
  disabled: false,
  variant: 'default',
  className: '',
  style: {}
};

Radio.propTypes = {
  onChange: propTypes.func,
  name: propTypes.string,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.bool
  ]),
  label: propTypes.oneOfType([propTypes.string, propTypes.number]),
  checked: propTypes.bool,
  disabled: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat', 'menu']),
  style: propTypes.shape([propTypes.string, propTypes.number]),
  className: propTypes.string
};

export default Radio;
