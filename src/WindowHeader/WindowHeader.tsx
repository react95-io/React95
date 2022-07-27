import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/Button';
import { CommonStyledProps } from '../types';

type WindowHeaderProps = {
  children?: React.ReactNode;
  active?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const StyledWindowHeader = styled.div<Pick<WindowHeaderProps, 'active'>>`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({ theme }) => theme.material};
  ${({ active }) =>
    active === false
      ? css`
          background: ${({ theme }) => theme.headerNotActiveBackground};
          color: ${({ theme }) => theme.headerNotActiveText};
        `
      : css`
          background: ${({ theme }) => theme.headerBackground};
          color: ${({ theme }) => theme.headerText};
        `}

  ${StyledButton} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`;

// TODO - should we add some aria label indicating if window is currently active?
const WindowHeader = forwardRef<HTMLDivElement, WindowHeaderProps>(
  function WindowHeader({ active = true, children, ...otherProps }, ref) {
    return (
      <StyledWindowHeader active={active} ref={ref} {...otherProps}>
        {children}
      </StyledWindowHeader>
    );
  }
);

export { WindowHeader, WindowHeaderProps };
