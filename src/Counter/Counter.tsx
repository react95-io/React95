import React, { forwardRef, useMemo } from 'react';
import styled from 'styled-components';

import { createBorderStyles } from '../common';
import { CommonStyledProps, Sizes } from '../types';
import { Digit } from './Digit';

type CounterProps = {
  minLength?: number;
  size?: Sizes | 'xl';
  value?: number;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const CounterWrapper = styled.div`
  ${createBorderStyles({ style: 'status' })}
  display: inline-flex;
  background: #000000;
`;

const pixelSizes = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4
};

const Counter = forwardRef<HTMLDivElement, CounterProps>(
  ({ value = 0, minLength = 3, size = 'md', ...otherProps }, ref) => {
    const digits = useMemo(
      () => value.toString().padStart(minLength, '0').split(''),
      [minLength, value]
    );
    return (
      <CounterWrapper ref={ref} {...otherProps}>
        {digits.map((digit, i) => (
          <Digit digit={digit} pixelSize={pixelSizes[size]} key={i} />
        ))}
      </CounterWrapper>
    );
  }
);

Counter.displayName = 'Counter';

export { Counter, CounterProps };
