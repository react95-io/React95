import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import {
  createBorderStyles,
  createBoxStyles,
  focusOutline,
  styledDimension
} from '../common';
import { styledBlockSize } from '../common/system';
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
  height: ${styledBlockSize('md')};
  line-height: ${styledBlockSize('md')};
  padding: 0 ${styledDimension(4)};
  border-bottom: none;
  border-top-left-radius: ${styledDimension(2.5)};
  border-top-right-radius: ${styledDimension(2.5)};
  margin: 0 0 ${styledDimension(-1)} 0;
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
    outline-offset: ${styledDimension(-3)};
  }
  ${props =>
    props.selected &&
    css`
      z-index: 1;
      height: calc(${styledBlockSize('md')} + ${styledDimension(2)});
      top: ${styledDimension(-2)};
      margin-bottom: ${styledDimension(-3)};
      padding: 0 ${styledDimension(8)};
      margin-left: ${styledDimension(-4)};
      &:not(:last-child) {
        margin-right: ${styledDimension(-4)};
      }
    `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - ${styledDimension(2)});
    height: ${styledDimension(3)};
    background: ${({ theme }) => theme.material};
    bottom: ${styledDimension(-2)};
    left: ${styledDimension(1)};
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
