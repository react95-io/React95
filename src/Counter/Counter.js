import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { createWellBorderStyles } from '../common';
import Digit from './Digit';

const CounterWrapper = styled.div`
  ${createWellBorderStyles(true)}
  display: inline-flex;
  background: #000000;
`;

const pixelSizes = {
  sm: 1,
  md: 2,
  lg: 3
};

const Counter = React.forwardRef(function Counter(props, ref) {
  const { value, minLength, size, ...otherProps } = props;
  let stringValue = value.toString();
  if (minLength && minLength > stringValue.length) {
    stringValue =
      Array(minLength - stringValue.length)
        .fill('0')
        .join('') + stringValue;
  }
  return (
    <CounterWrapper ref={ref} {...otherProps}>
      {stringValue.split('').map((digit, i) => (
        <Digit digit={digit} pixelSize={pixelSizes[size]} key={i} />
      ))}
    </CounterWrapper>
  );
});

Counter.defaultProps = {
  minLength: 3,
  size: 'md',
  value: 0
};

Counter.propTypes = {
  minLength: propTypes.number,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  value: propTypes.number
};

export default Counter;
