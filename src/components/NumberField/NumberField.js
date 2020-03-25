import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import { clamp } from '../common/utils';

import Button from '../Button/Button';
import { blockSizes } from '../common/system';
import TextField from '../TextField/TextField';

const StyledNumberFieldWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({ isFlat }) =>
    isFlat
      ? css`
          height: calc(50% - 1px);
        `
      : css`
          height: 50%;
          &:before {
            border-left-color: ${({ theme }) => theme.borderLight};
            border-top-color: ${({ theme }) => theme.borderLight};
            box-shadow: inset 1px 1px 0px 1px
                ${({ theme }) => theme.borderLightest},
              inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
          }
        `}
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({ isFlat }) =>
    isFlat
      ? css`
          height: calc(${blockSizes.md} - 4px);
        `
      : css`
          height: ${blockSizes.md};
          margin-left: 2px;
        `}
`;

const StyledButtonIcon = styled.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({ invert }) =>
    invert
      ? css`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({ theme }) => theme.text};
        `
      : css`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({ theme }) => theme.text};
        `}
  ${StyledButton}:disabled & {
    filter: drop-shadow(1px 1px 0px ${({ theme }) => theme.textDisabledShadow});
    ${({ invert }) =>
      invert
        ? css`
            border-bottom-color: ${({ theme }) => theme.textDisabled};
          `
        : css`
            border-top-color: ${({ theme }) => theme.textDisabled};
          `}
  }
`;

const NumberField = React.forwardRef(function NumberField(props, ref) {
  const {
    value,
    defaultValue,
    disabled,
    className,
    variant,
    step,
    width,
    min,
    max,
    onChange,
    style
  } = props;

  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    value,
    defaultValue
  });

  const handleInputChange = e => {
    const newValue = e.target.value;
    setValueState(newValue);
  };

  const handleClick = val => {
    const newValue = clamp(
      +parseFloat(valueDerived + val).toFixed(2),
      min,
      max
    );

    setValueState(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const onBlur = () => {
    if (onChange) {
      onChange(valueDerived);
    }
  };

  return (
    <StyledNumberFieldWrapper
      className={className}
      style={{ ...style, width: width || 'auto' }}
    >
      <TextField
        value={valueDerived}
        variant={variant}
        onChange={handleInputChange}
        disabled={disabled}
        type='number'
        ref={ref}
        width='100%'
        onBlur={onBlur}
      />
      <StyledButtonWrapper isFlat={variant === 'flat'}>
        <StyledButton
          data-testid='increment'
          isFlat={variant === 'flat'}
          variant={variant}
          disabled={disabled}
          onClick={() => handleClick(step)}
        >
          <StyledButtonIcon invert />
        </StyledButton>
        <StyledButton
          data-testid='decrement'
          isFlat={variant === 'flat'}
          variant={variant}
          disabled={disabled}
          onClick={() => handleClick(-step)}
        >
          <StyledButtonIcon />
        </StyledButton>
      </StyledButtonWrapper>
    </StyledNumberFieldWrapper>
  );
});

NumberField.defaultProps = {
  className: '',
  defaultValue: undefined,
  disabled: false,
  max: null,
  min: null,
  step: 1,
  onChange: null,
  style: {},
  value: undefined,
  variant: 'default',
  width: null
};

NumberField.propTypes = {
  className: propTypes.string,
  defaultValue: propTypes.number,
  disabled: propTypes.bool,
  max: propTypes.number,
  min: propTypes.number,
  step: propTypes.number,
  onChange: propTypes.func,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  value: propTypes.number,
  variant: propTypes.oneOf(['default', 'flat']),
  width: propTypes.oneOfType([propTypes.string, propTypes.number])
};

export default NumberField;
