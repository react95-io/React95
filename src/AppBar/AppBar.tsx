import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CommonStyledProps } from '../types';
import { createBorderStyles, createBoxStyles } from '../common';

type AppBarProps = {
  children: React.ReactNode;
  fixed?: boolean;
} & React.HTMLAttributes<HTMLElement> &
  CommonStyledProps;

const StyledAppBar = styled.header<AppBarProps>`
  ${createBorderStyles()};
  ${createBoxStyles()};

  position: ${props => (props.fixed ? 'fixed' : 'absolute')};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AppBar = forwardRef<HTMLElement, AppBarProps>(function AppBar(
  { children, fixed = true, ...otherProps },
  ref
) {
  return (
    <StyledAppBar fixed={fixed} ref={ref} {...otherProps}>
      {children}
    </StyledAppBar>
  );
});

export { AppBar, AppBarProps };
