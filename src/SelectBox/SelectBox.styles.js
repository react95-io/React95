import styled from 'styled-components';

import { createScrollbars } from '../common';
import { blockSizes } from '../common/system';

export const StyledOptionsList = styled.ul`
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({ theme }) => theme.borderDark};
  border-top-color: ${({ theme }) => theme.borderDark};
  border-right-color: ${({ theme }) => theme.borderLightest};
  border-bottom-color: ${({ theme }) => theme.borderLightest};
  line-height: 1.5;
  overflow-y: auto;
  ${({ variant }) => createScrollbars(variant)}
`;

export const StyledOptionsListItem = styled.li`
  margin: 0;
  padding: 0;
  height: ${blockSizes.md};
`;

export const StyledOptionsListItemInnerButton = styled.button`
  outline: 0;
  border: none;
  width: 100%;
  height: 100%;
  text-align: left;
  font-size: 1rem;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.hoverBackground : 'none'};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.canvasTextInvert : '#000'};
  outline: 0;
`;
