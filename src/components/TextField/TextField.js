import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { createDisabledTextStyles, createFlatBoxStyles } from '../common';
import { blockSizes } from '../common/system';
import Cutout from '../Cutout/Cutout';

const sharedWrapperStyles = css`
  display: flex;
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  min-height: ${blockSizes.md};
`;

const Wrapper = styled(Cutout).attrs({
  'data-testid': 'variant-default'
})`
  ${sharedWrapperStyles}
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
`;

const FlatWrapper = styled.div.attrs({
  'data-testid': 'variant-flat'
})`
  ${createFlatBoxStyles()}
  ${sharedWrapperStyles}
  position: relative;
`;

const sharedInputStyles = css`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({ theme }) => theme.canvasText};
  ${({ disabled, variant }) =>
    variant !== 'flat' && disabled && createDisabledTextStyles()}
`;

export const StyledTextInput = styled.input`
  ${sharedInputStyles}
  padding: 0 8px;
`;

const StyledTextArea = styled.textarea`
  ${sharedInputStyles}
  padding: 8px;
  resize: none;
`;

const TextField = React.forwardRef(function TextField(props, ref) {
  const {
    className,
    disabled,
    fullWidth,
    multiline,
    onChange,
    shadow,
    style,
    type,
    variant,
    ...otherProps
  } = props;
  const WrapperComponent = variant === 'flat' ? FlatWrapper : Wrapper;
  const Input = multiline ? StyledTextArea : StyledTextInput;
  return (
    <WrapperComponent
      className={className}
      fullWidth={fullWidth}
      isDisabled={disabled}
      shadow={shadow}
      style={style}
    >
      <Input
        disabled={disabled}
        onChange={disabled ? undefined : onChange}
        readOnly={disabled}
        ref={ref}
        type={type}
        variant={variant}
        {...otherProps}
      />
    </WrapperComponent>
  );
});
TextField.defaultProps = {
  className: '',
  disabled: false,
  fullWidth: null,
  multiline: false,
  onChange: () => {},
  shadow: true,
  style: {},
  type: 'text',
  variant: 'default'
};

TextField.propTypes = {
  className: propTypes.string,
  disabled: propTypes.bool,
  fullWidth: propTypes.bool,
  multiline: propTypes.bool,
  onChange: propTypes.func,
  shadow: propTypes.bool,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  type: propTypes.string,
  variant: propTypes.oneOf(['default', 'flat'])
};
export default TextField;
