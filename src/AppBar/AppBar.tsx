import React, { forwardRef } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { createBorderStyles, createBoxStyles } from '../common';
import { CommonStyledProps } from '../types';

type AppBarProps = {
  children: React.ReactNode;
  /** @deprecated Use `position` instead */
  fixed?: boolean;
  position?: CSSProperties['position'];
} & React.HTMLAttributes<HTMLElement> &
  CommonStyledProps;

const StyledAppBar = styled.header<AppBarProps>`
  ${createBorderStyles()};
  ${createBoxStyles()};

  position: ${props => props.position ?? (props.fixed ? 'fixed' : 'absolute')};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AppBar = forwardRef<HTMLElement, AppBarProps>(
  ({ children, fixed = true, position = 'fixed', ...otherProps }, ref) => {
    return (
      <StyledAppBar
        fixed={fixed}
        position={fixed !== false ? position : undefined}
        ref={ref}
        {...otherProps}
      >
        {children}
      </StyledAppBar>
    );
  }
);

AppBar.displayName = 'AppBar';

export { AppBar, AppBarProps };
