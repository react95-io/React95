import React from 'react';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';
import { CommonStyledProps } from '../types';

type MenuListProps = React.HTMLAttributes<HTMLUListElement> & {
  fullWidth?: boolean;
  shadow?: boolean;
  inline?: boolean;
} & CommonStyledProps;

// TODO keyboard controls
const MenuList = styled.ul.attrs(() => ({
  role: 'menu'
}))<MenuListProps>`
  box-sizing: border-box;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 4px;
  ${createBorderStyles({ style: 'window' })}
  ${createBoxStyles()}
  ${props =>
    props.inline &&
    `
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;

MenuList.displayName = 'MenuList';

export * from './MenuListItem';

export { MenuList, MenuListProps };
