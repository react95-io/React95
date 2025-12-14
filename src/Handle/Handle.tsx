import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CommonStyledProps } from '../types';
import { getSize } from '../common/utils';

type HandleProps = {
  size?: string | number;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

// TODO: add horizontal variant
// TODO: allow user to specify number of bars (like 3 horizontal bars for drag handle)
const StyledHandle = styled.div<{ $size?: string | number }>`
  ${({ theme, $size = '100%' }) => `
  display: inline-block;
  box-sizing: border-box;
  height: ${getSize($size)};
  width: 5px;
  border-top: 2px solid ${theme.borderLightest};
  border-left: 2px solid ${theme.borderLightest};
  border-bottom: 2px solid ${theme.borderDark};
  border-right: 2px solid ${theme.borderDark};
  background: ${theme.material};
`}
`;

const Handle = forwardRef<HTMLDivElement, HandleProps>(
  ({ size = '100%', ...otherProps }, ref) => {
    return <StyledHandle $size={size} ref={ref} {...otherProps} />;
  }
);

Handle.displayName = 'Handle';

export { Handle, HandleProps };
