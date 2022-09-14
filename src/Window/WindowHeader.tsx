import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/Button';
import { styledDimension } from '../common';
import { CommonStyledProps } from '../types';

type WindowHeaderProps = {
  children?: React.ReactNode;
  active?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const StyledWindowHeader = styled.div<Pick<WindowHeaderProps, 'active'>>`
  height: ${styledDimension(16.5)};
  line-height: ${styledDimension(16.5)};
  padding-left: 0.25rem;
  padding-right: ${styledDimension(1.5)};
  font-weight: bold;
  border: ${styledDimension(1)} solid ${({ theme }) => theme.material};
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
    height: ${styledDimension(13.5)};
    width: ${styledDimension(15.5)};
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

WindowHeader.displayName = 'WindowHeader';

export { WindowHeader, WindowHeaderProps };
