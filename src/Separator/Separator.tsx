import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { getSize } from '../common/utils';
import { Orientation } from '../types';

type SeparatorProps = {
  size?: string | number;
  orientation?: Orientation;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledSeparator = styled.div<{
  $orientation?: Orientation;
  $size?: string | number;
}>`
  ${({ $orientation, theme, $size = '100%' }) =>
    $orientation === 'vertical'
      ? `
    height: ${getSize($size)};
    border-left: 2px solid ${theme.borderDark};
    border-right: 2px solid ${theme.borderLightest};
    margin: 0;
    `
      : `
    width: ${getSize($size)};
    border-bottom: 2px solid ${theme.borderLightest};
    border-top: 2px solid ${theme.borderDark};
    margin: 0;
    `}
`;

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ size = '100%', orientation, ...otherProps }, ref) => {
    return (
      <StyledSeparator
        $size={size}
        $orientation={orientation}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

Separator.displayName = 'Separator';

export { Separator, SeparatorProps };
