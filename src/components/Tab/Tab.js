import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles, focusOutline } from '../common';
import { blockSizes } from '../common/system';

const StyledTab = styled.button`
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
  color: ${({ theme }) => theme.text};
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
    top: -3px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    margin-right: -8px;
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;

    background: ${({ theme }) => theme.material};
    bottom: -3px;
    left: 2px;
  }
`;

const Tab = React.forwardRef(function Tab(props, ref) {
  const { value, onClick, selected, children, ...otherProps } = props;

  return (
    <StyledTab
      selected={selected}
      aria-selected={selected}
      onClick={() => onClick(value)}
      role='tab'
      ref={ref}
      {...otherProps}
    >
      {children}
    </StyledTab>
  );
});

Tab.defaultProps = {
  onClick: () => {},
  selected: false,
  children: null
};

Tab.propTypes = {
  // eslint-disable-next-line react/require-default-props, react/forbid-prop-types
  value: propTypes.any,
  onClick: propTypes.func,
  selected: propTypes.bool,
  children: propTypes.node
};
export default Tab;
