import React, { forwardRef } from 'react';

import styled from 'styled-components';
import {
  createBorderStyles,
  createBoxStyles,
  styledDimension
} from '../common';
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
  padding: ${styledDimension(8)};
  font-size: 1rem;
`;
const TabBody = forwardRef<HTMLDivElement, TabBodyProps>(
  ({ children, ...otherProps }, ref) => {
    return (
      <StyledTabBody ref={ref} {...otherProps}>
        {children}
      </StyledTabBody>
    );
  }
);

TabBody.displayName = 'TabBody';

export { TabBody, TabBodyProps };
