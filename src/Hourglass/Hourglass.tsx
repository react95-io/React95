import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { getSize } from '../common/utils';
import { CommonStyledProps } from '../types';
import base64hourglass from './base64hourglass';

type HourglassProps = {
  size?: string | number;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const StyledContainer = styled.div<Required<Pick<HourglassProps, 'size'>>>`
  display: inline-block;
  height: ${({ size }) => getSize(size)};
  width: ${({ size }) => getSize(size)};
`;

const StyledHourglass = styled.span`
  display: block;
  background: ${base64hourglass};
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Hourglass = forwardRef<HTMLSpanElement, HourglassProps>(
  ({ size = 30, ...otherProps }, ref) => {
    return (
      <StyledContainer size={size} ref={ref} {...otherProps}>
        <StyledHourglass />
      </StyledContainer>
    );
  }
);

Hourglass.displayName = 'Hourglass';

export { Hourglass, HourglassProps };
