import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { createScrollbars, createBorderStyles } from '../common';
import { CommonStyledProps } from '../types';

type ScrollViewProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

export const StyledScrollView = styled.div`
  position: relative;
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.5;

  padding: 4px;
  ${createBorderStyles({ style: 'field' })};
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${createScrollbars()}
`;

const ScrollView = forwardRef<HTMLDivElement, ScrollViewProps>(
  ({ children, ...otherProps }, ref) => {
    return (
      <StyledScrollView ref={ref} {...otherProps}>
        <Content>{children}</Content>
      </StyledScrollView>
    );
  }
);

ScrollView.displayName = 'ScrollView';

export { ScrollView, ScrollViewProps };
