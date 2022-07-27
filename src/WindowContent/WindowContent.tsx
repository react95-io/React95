import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CommonStyledProps } from '../types';

type WindowContentProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const StyledWindowContent = styled.div`
  padding: 16px;
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

export { WindowContent, WindowContentProps };
