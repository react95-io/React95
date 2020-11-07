import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

const StyledTabs = styled.div`
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

function splitToChunks(array, parts) {
  const result = [];
  for (let i = parts; i > 0; i -= 1) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

const Tabs = React.forwardRef(function Tabs(props, ref) {
  const { value, onChange, children, rows, ...otherProps } = props;

  const childrenWithProps = React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const tabProps = {
      selected: child.props.value === value,
      onClick: onChange
    };
    return React.cloneElement(child, tabProps);
  });

  // split tabs into equal rows and assign key to each row
  const tabRows = splitToChunks(childrenWithProps, rows).map((tabs, i) => ({
    key: i,
    tabs
  }));

  // move row containing currently selected tab to the bottom
  const currentlySelectedRowIndex = tabRows.findIndex(tabRow =>
    tabRow.tabs.some(tab => tab.props.selected)
  );
  tabRows.push(tabRows.splice(currentlySelectedRowIndex, 1)[0]);

  return (
    <StyledTabs {...otherProps} isMultiRow={rows > 1} role='tablist' ref={ref}>
      {tabRows.map(row => (
        <Row key={row.key}>{row.tabs}</Row>
      ))}
    </StyledTabs>
  );
});

Tabs.defaultProps = {
  onChange: () => {},
  children: null,
  rows: 1
};

Tabs.propTypes = {
  // eslint-disable-next-line react/require-default-props, react/forbid-prop-types
  value: propTypes.any,
  onChange: propTypes.func,
  children: propTypes.node,
  rows: propTypes.number
};
export default Tabs;
