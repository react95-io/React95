import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { styledDimension } from '../common';
import { CommonStyledProps } from '../types';

type WindowContentProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const StyledWindowContent = styled.div`
  padding: ${styledDimension(8)};
`;

const WindowContent = forwardRef<HTMLDivElement, WindowContentProps>(
  function WindowContent({ children, ...otherProps }, ref) {
    return (
      <StyledWindowContent ref={ref} {...otherProps}>
        {children}
      </StyledWindowContent>
    );
  }
);

WindowContent.displayName = 'WindowContent';

export { WindowContent, WindowContentProps };
