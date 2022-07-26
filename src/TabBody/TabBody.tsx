import React, { forwardRef } from 'react';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';
import { CommonStyledProps } from '../types';

type TabBodyProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const StyledTabBody = styled.div`
  ${createBoxStyles()}
  ${createBorderStyles()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`;
const TabBody = forwardRef<HTMLDivElement, TabBodyProps>(function TabBody(
  { children, ...otherProps },
  ref
) {
  return (
    <StyledTabBody ref={ref} {...otherProps}>
      {children}
    </StyledTabBody>
  );
});

export { TabBody, TabBodyProps };
