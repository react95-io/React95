import styled from 'styled-components';

import { createScrollbars } from '../common';
import { blockSizes } from '../common/system';

export const StyledOptionsList = styled.ul`
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 1rem;
  line-height: 1.5;
  overflow-y: auto;
  ${({ variant }) => createScrollbars(variant)}
  outline: none;
`;

export const StyledOptionsListItem = styled.li`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 31px;
  line-height: calc(${blockSizes.md} - 4px);
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.hoverBackground : 'none'};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.canvasTextInvert : '#000'};
  width: 100%;
  padding-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
`;
