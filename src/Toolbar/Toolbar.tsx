import React, { forwardRef } from 'react';
import styled from 'styled-components';

type ToolbarProps = {
  children?: React.ReactNode;
  noPadding?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledToolbar = styled.div<ToolbarProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => (props.noPadding ? '0' : '4px')};
`;

const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(function Toolbar(
  { children, noPadding = false, ...otherProps },
  ref
) {
  return (
    <StyledToolbar noPadding={noPadding} ref={ref} {...otherProps}>
      {children}
    </StyledToolbar>
  );
});

Toolbar.displayName = 'Toolbar';

export { Toolbar };
