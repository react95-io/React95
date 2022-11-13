import React, { forwardRef, useMemo } from 'react';

import styled from 'styled-components';
import { noOp } from '../common/utils';
import { CommonStyledProps } from '../types';
import { TabProps } from './Tab';

type TabsProps = {
  value?: TabProps['value'];
  onChange?: TabProps['onClick'];
  children?: React.ReactNode;
  rows?: number;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value'> &
  CommonStyledProps;

const StyledTabs = styled.div<{ isMultiRow: boolean }>`
  position: relative;
  ${({ isMultiRow, theme }) =>
    isMultiRow &&
    `
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${theme.borderDark};
  }
  `}
`;

const Row = styled.div.attrs(() => ({
  'data-testid': 'tab-row'
}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.borderDarkest};
    border-left: 2px solid ${({ theme }) => theme.borderLightest};
  }
`;

function splitToChunks<T>(array: T[], parts: number) {
  const result = [];
  for (let i = parts; i > 0; i -= 1) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ value, onChange = noOp, children, rows = 1, ...otherProps }, ref) => {
    // split tabs into equal rows and assign key to each row
    const tabRowsToRender = useMemo(() => {
      const childrenWithProps =
        React.Children.map(children, child => {
          if (!React.isValidElement(child)) {
            return null;
          }
          const tabProps = {
            selected: child.props.value === value,
            onClick: onChange
          };
          return React.cloneElement(child, tabProps);
        }) ?? [];

      const tabRows = splitToChunks(childrenWithProps, rows).map((tabs, i) => ({
        key: i,
        tabs
      }));

      // move row containing currently selected tab to the bottom
      const currentlySelectedRowIndex = tabRows.findIndex(tabRow =>
        tabRow.tabs.some(tab => tab.props.selected)
      );
      tabRows.push(tabRows.splice(currentlySelectedRowIndex, 1)[0]);

      return tabRows;
    }, [children, onChange, rows, value]);

    return (
      <StyledTabs
        {...otherProps}
        isMultiRow={rows > 1}
        role='tablist'
        ref={ref}
      >
        {tabRowsToRender.map(row => (
          <Row key={row.key}>{row.tabs}</Row>
        ))}
      </StyledTabs>
    );
  }
);

Tabs.displayName = 'Tabs';

export * from './Tab';

export * from './TabBody';

export { Tabs, TabsProps };
