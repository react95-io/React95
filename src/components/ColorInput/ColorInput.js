import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { focusOutline } from '../common';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import Button from '../Button/Button';
import Bar from '../Bar/Bar';

const StyledBar = styled(Bar)`
  height: 23px;
  position: relative;
  top: 0;
`;

export const StyledColorInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
`;

// TODO replace with SVG icon
const ColorPreview = styled.div`
  box-sizing: border-box;
  height: 21px;
  display: inline-block;
  width: 35px;
  margin-right: 7px;

  background: ${({ color }) => color};

  ${({ isDisabled }) =>
    isDisabled
      ? css`
          border: 2px solid ${({ theme }) => theme.textDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({ theme }) => theme.textDisabledShadow}
          );
        `
      : css`
          border: 2px solid ${({ theme }) => theme.text};
        `}
`;

const ChevronIcon = styled.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({ isDisabled }) =>
    isDisabled
      ? css`
          border-top: 6px solid ${({ theme }) => theme.textDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({ theme }) => theme.textDisabledShadow}
          );
        `
      : css`
          border-top: 6px solid ${({ theme }) => theme.text};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({ variant }) => (variant === 'flat' ? '6px' : '8px')};
    right: 8px;
    width: 16px;
    height: 19px;
  }
  ${StyledColorInput}:focus + &:after {
    ${focusOutline}
  }
`;

// TODO make sure all aria and role attributes are in place
const ColorInput = React.forwardRef(function ColorInput(props, ref) {
  const {
    value,
    defaultValue,
    onChange,
    disabled,
    variant,
    ...otherProps
  } = props;

  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    value,
    defaultValue
  });

  const handleChange = e => {
    const color = e.target.value;
    setValueState(color);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    // we only need button styles, so we display it as a div and reset type attribute
    <Button isDisabled={disabled} as='div' type={null} variant={variant}>
      <ColorPreview
        color={valueDerived}
        isDisabled={disabled}
        role='presentation'
      />
      {variant === 'default' && <StyledBar />}
      <StyledColorInput
        onChange={handleChange}
        readOnly={disabled}
        disabled={disabled}
        value={valueDerived || '#008080'}
        type='color'
        ref={ref}
        {...otherProps}
      />
      <ChevronIcon isDisabled={disabled} variant={variant} />
    </Button>
  );
});

ColorInput.defaultProps = {
  value: undefined,
  defaultValue: undefined,
  disabled: false,
  variant: 'default',
  onChange: () => {}
};

ColorInput.propTypes = {
  value: propTypes.string,
  defaultValue: propTypes.string,
  onChange: propTypes.func,
  disabled: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat'])
};
export default ColorInput;
