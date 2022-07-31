import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { createBorderStyles, createBoxStyles, focusOutline } from '../common';
import { blockSizes } from '../common/system';
import { CommonStyledProps } from '../types';

type TabProps = {
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, value: any) => void;
  selected?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'value'> &
  CommonStyledProps;

const StyledTab = styled.button<TabProps>`
  ${createBoxStyles()}
  ${createBorderStyles()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${blockSizes.md};
  line-height: ${blockSizes.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({ theme }) => theme.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${focusOutline}
    outline-offset: -6px;
  }
  ${props =>
    props.selected &&
    `
    z-index: 1;
    height: calc(${blockSizes.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({ theme }) => theme.material};
    bottom: -4px;
    left: 2px;
  }
`;

const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ value, onClick, selected = false, children, ...otherProps }, ref) => {
    return (
      <StyledTab
        aria-selected={selected}
        selected={selected}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          onClick?.(e, value)
        }
        ref={ref}
        role='tab'
        {...otherProps}
      >
        {children}
      </StyledTab>
    );
  }
);

Tab.displayName = 'Tab';

export { Tab, TabProps };
