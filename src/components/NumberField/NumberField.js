import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';

import Button from '../Button/Button';
import { blockSizes } from '../common/system';
import TextField from '../TextField/TextField';

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
  margin-top: ${({ variant }) => (variant === 'default' ? '-2px' : '0')};
`;

const StyledButton = styled(Button)`
  height: 50%;
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({ isFlat }) =>
    !isFlat &&
    css`
      &:before {
        border-left-color: ${({ theme }) => theme.borderLight};
        border-top-color: ${({ theme }) => theme.borderLight};
        box-shadow: inset 1px 1px 0px 1px ${({ theme }) => theme.borderLightest},
          inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
      }
    `}
`;

const StyledButtonIcon = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) ${props => props.invert && 'rotateZ(180deg)'};
  width: 0px;
  height: 0px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  display: inline-block;
  border-top: 4px solid ${({ theme }) => theme.text};
  ${StyledButton}:active & {
    margin-top: 2px;
  }
`;

class NumberField extends React.Component {
  static propTypes = {
    variant: propTypes.oneOf(['default', 'flat']),
    onChange: propTypes.func.isRequired,
    value: propTypes.number.isRequired,
    min: propTypes.number,
    max: propTypes.number,
    width: propTypes.oneOfType([propTypes.string, propTypes.number]),
    disabled: propTypes.bool,
    disableKeyboardInput: propTypes.bool,
    className: propTypes.string,
    style: propTypes.object
  };

  static defaultProps = {
    variant: 'default',
    disabled: false,
    min: null,
    max: null,
    width: null,
    disableKeyboardInput: false,
    className: '',
    style: {}
  };

  state = {
    // eslint-disable-next-line
    value: parseInt(this.props.value, 10) || 0
  };

  add = addValue => {
    const { value } = this.state;
    const { onChange } = this.props;

    const newValue = this.normalize(value + addValue);
    onChange(newValue);
    this.setState({ value: newValue });
  };

  handleChange = e => {
    let newValue =
      e.target.value === '-' ? '-' : this.normalize(e.target.value);
    // eslint-disable-next-line
    newValue = newValue ? newValue : newValue === 0 ? 0 : '';

    if (e.target.validity.valid) {
      const { onChange } = this.props;
      this.setState({ value: newValue });
      onChange(newValue);
    }
  };

  normalize = value => {
    const { min, max } = this.props;

    if (min && value < min) return min;
    if (max && value > max) return max;

    return parseInt(value, 10);
  };

  render() {
    const {
      disabled,
      disableKeyboardInput,
      className,
      variant,
      width,
      style
    } = this.props;
    const { value } = this.state;
    return (
      <StyledNumberFieldWrapper
        className={className}
        style={{ ...style, width: width || 'auto' }}
      >
        <TextField
          value={value}
          variant={variant}
          onChange={
            disabled || disableKeyboardInput ? undefined : this.handleChange
          }
          readOnly={disabled || disableKeyboardInput}
          disabled={disabled}
          type='tel'
          pattern='^-?[0-9]\d*\.?\d*$'
          width='100%'
        />
        <StyledButtonWrapper>
          <StyledButton
            isFlat={variant === 'flat'}
            variant={variant}
            disabled={disabled}
            onClick={() => this.add(1)}
          >
            <StyledButtonIcon invert />
          </StyledButton>
          <StyledButton
            isFlat={variant === 'flat'}
            variant={variant}
            disabled={disabled}
            onClick={() => this.add(-1)}
          >
            <StyledButtonIcon />
          </StyledButton>
        </StyledButtonWrapper>
      </StyledNumberFieldWrapper>
    );
  }
}

export default NumberField;
