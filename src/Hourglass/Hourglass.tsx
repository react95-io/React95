import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { getSize } from '../common/utils';
import base64hourglass from './base64hourglass';

type HourglassProps = {
  size?: string | number;
};

const StyledContainer = styled.span<Required<Pick<HourglassProps, 'size'>>>`
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
  function Hourglass({ size = 30, ...otherProps }, ref) {
    return (
      <StyledContainer size={size} ref={ref} {...otherProps}>
        <StyledHourglass />
      </StyledContainer>
    );
  }
);

export { Hourglass, HourglassProps };
