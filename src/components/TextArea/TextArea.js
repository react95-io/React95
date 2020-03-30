import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createDisabledTextStyles, createFlatBoxStyles } from '../common';
import { blockSizes, fontFamily } from '../common/system';
import Cutout from '../Cutout/Cutout';

const StyledTextAreaWrapper = styled(Cutout)`
  display: inline-block;
  min-height: ${blockSizes.md};
  padding: 0;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
`;
const StyledFlatTextAreaWrapper = styled.div`
  position: relative;
  min-height: ${blockSizes.md};
  ${createFlatBoxStyles()}
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
  outline: none;
  border: none;
  background: none;
  resize: none;
  font-size: 1rem;
  font-family: ${fontFamily};

  ${({ disabled, variant }) =>
    variant !== 'flat' && disabled && createDisabledTextStyles()}
`;

const TextArea = React.forwardRef(function TextArea(props, ref) {
  const {
    onChange,
    disabled,
    variant,
    width,
    height,
    style,
    className,
    shadow,
    ...otherProps
  } = props;

  const Wrapper =
    variant === 'flat' ? StyledFlatTextAreaWrapper : StyledTextAreaWrapper;
  return (
    <Wrapper
      style={{
        ...style,
        width: width || '100%',
        height: height || 'auto'
      }}
      className={className}
      isDisabled={disabled}
      shadow={shadow}
    >
      <StyledTextArea
        width={width}
        height={height}
        readOnly={disabled}
        onChange={disabled ? undefined : onChange}
        disabled={disabled}
        variant={variant}
        ref={ref}
        {...otherProps}
      />
    </Wrapper>
  );
});

TextArea.defaultProps = {
  shadow: true,
  variant: 'default',
  style: {},
  width: null,
  height: null,
  onChange: () => {},
  disabled: false,
  className: ''
};

TextArea.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  disabled: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat']),
  className: propTypes.string,
  shadow: propTypes.bool,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default TextArea;
