import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { createHatchedBackground } from '../common';

import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import { StyledCutout } from '../Cutout/Cutout';
import { StyledListItem } from '../ListItem/ListItem';
import {
  size,
  StyledInput,
  StyledLabel,
  LabelText
} from '../SwitchBase/SwitchBase';

const sharedCheckboxStyles = css`
  width: ${size}px;
  height: ${size}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`;
const StyledCheckbox = styled(StyledCutout)`
  ${sharedCheckboxStyles}
  width: ${size}px;
  height: ${size}px;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
  &:before {
    box-shadow: none;
  }
`;
const StyledFlatCheckbox = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.flatLight : theme.canvas};
  ${sharedCheckboxStyles}
  width: ${size - 4}px;
  height: ${size - 4}px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.flatDark};
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.flatLight : theme.canvas};
`;

const StyledMenuCheckbox = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.flatLight : theme.canvas};
  ${sharedCheckboxStyles}
  width: ${size - 4}px;
  height: ${size - 4}px;
  background: none;
  border: none;
  outline: none;
`;

const CheckmarkIcon = styled.span.attrs(() => ({
  'data-testid': 'checkmarkIcon'
}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({ theme, isDisabled }) =>
        isDisabled ? theme.checkmarkDisabled : theme.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    ${({ variant, theme, isDisabled }) =>
      variant === 'menu'
        ? css`
            border-color: ${isDisabled
              ? theme.materialTextDisabled
              : theme.materialText};
            filter: drop-shadow(
              1px 1px 0px
                ${isDisabled ? theme.materialTextDisabledShadow : 'transparent'}
            );
          `
        : css`
            border-color: ${isDisabled
              ? theme.checkmarkDisabled
              : theme.checkmark};
          `}
  ${StyledListItem}:hover & {
    ${({ theme, isDisabled, variant }) =>
      !isDisabled &&
      variant === 'menu' &&
      css`
        border-color: ${theme.materialTextInvert};
      `};
  }
`;
const IndeterminateIcon = styled.span.attrs(() => ({
  'data-testid': 'indeterminateIcon'
}))`
  display: inline-block;
  position: relative;

  ${({ variant }) =>
    variant === 'menu'
      ? css`
          height: calc(100% - 4px);
          width: calc(100% - 4px);
        `
      : css`
          width: 100%;
          height: 100%;
        `}
  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({ theme, isDisabled }) =>
      createHatchedBackground({
        mainColor: isDisabled ? theme.checkmarkDisabled : theme.checkmark
      })}
    background-position: 0px 0px, 2px 2px;

    ${({ variant, isDisabled, theme }) =>
      variant === 'menu' &&
      css`
        ${StyledListItem}:hover & {
          ${createHatchedBackground({
            mainColor: theme.materialTextInvert
          })}
        }
        filter: drop-shadow(
          1px 1px 0px
            ${isDisabled ? theme.materialTextDisabledShadow : 'transparent'}
        );
      `};
  }
`;

const CheckboxComponents = {
  flat: StyledFlatCheckbox,
  default: StyledCheckbox,
  menu: StyledMenuCheckbox
};

const Checkbox = React.forwardRef(function Checkbox(props, ref) {
  const {
    onChange,
    label,
    disabled,
    variant,
    value,
    checked,
    defaultChecked,
    indeterminate,
    name,
    className,
    style,
    ...otherProps
  } = props;
  const [state, setState] = useControlledOrUncontrolled({
    value: checked,
    defaultValue: defaultChecked
  });
  const handleChange = e => {
    const newState = e.target.checked;
    setState(newState);
    if (onChange) onChange(e);
  };

  const CheckboxComponent = CheckboxComponents[variant];

  let Icon = null;
  if (indeterminate) {
    Icon = IndeterminateIcon;
  } else if (state) {
    Icon = CheckmarkIcon;
  }
  return (
    <StyledLabel isDisabled={disabled} className={className} style={style}>
      <StyledInput
        disabled={disabled}
        onChange={disabled ? undefined : handleChange}
        readOnly={disabled}
        type='checkbox'
        value={value}
        checked={state}
        name={name}
        data-indeterminate={indeterminate}
        ref={ref}
        {...otherProps}
      />
      <CheckboxComponent
        checked={state}
        indeterminate={indeterminate}
        isDisabled={disabled}
        role='presentation'
      >
        {Icon && <Icon isDisabled={disabled} variant={variant} />}
      </CheckboxComponent>
      {label && <LabelText>{label}</LabelText>}
    </StyledLabel>
  );
});

Checkbox.defaultProps = {
  label: '',
  disabled: false,
  variant: 'default',
  onChange: () => {},
  checked: undefined,
  style: {},
  defaultChecked: false,
  className: '',
  indeterminate: false,
  value: undefined,
  name: null
};

Checkbox.propTypes = {
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
  style: propTypes.object,
  defaultChecked: propTypes.bool,
  indeterminate: propTypes.bool,
  className: propTypes.string
};

export default Checkbox;
