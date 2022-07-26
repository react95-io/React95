import React from 'react';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';
import { CommonStyledProps } from '../types';

type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  fullWidth?: boolean;
  shadow?: boolean;
  inline?: boolean;
} & CommonStyledProps;

// TODO keyboard controls
const List = styled.ul.attrs(() => ({
  role: 'menu'
}))<ListProps>`
  box-sizing: border-box;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 4px;
  ${createBorderStyles({ windowBorders: true })}
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

export { List, ListProps };