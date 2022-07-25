import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CommonStyledProps } from '../types';

type BarProps = {
  size?: string | number;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const StyledBar = styled.div<BarProps & { size?: string }>`
  display: inline-block;
  box-sizing: border-box;
  height: ${({ size }) => size};
  width: 5px;
  border-top: 2px solid ${({ theme }) => theme.borderLightest};
  border-left: 2px solid ${({ theme }) => theme.borderLightest};
  border-bottom: 2px solid ${({ theme }) => theme.borderDark};
  border-right: 2px solid ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.material};
`;

// TODO: add horizontal variant
// TODO: allow user to specify number of bars (like 3 horizontal bars for drag handle)
const Bar = forwardRef<HTMLDivElement, BarProps>(function Bar(
  { size: sizeProp = '100%', ...otherProps },
  ref
) {
  const size = typeof sizeProp === 'number' ? `${sizeProp}px` : sizeProp;

  return <StyledBar size={size} ref={ref} {...otherProps} />;
});

export default Bar;
