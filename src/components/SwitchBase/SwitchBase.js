import styled, { css } from 'styled-components';
import { createDisabledTextStyles, focusOutline } from '../common';

import { StyledListItem } from '../ListItem/ListItem';

export const size = 20;

export const StyledInput = styled.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${size}px;
  height: ${size}px;
  opacity: 0;
  z-index: -99;
`;

export const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  ${props => props.isDisabled && createDisabledTextStyles()}

  ${StyledListItem} & {
    margin: 0;
    height: 100%;
  }
  ${StyledListItem}:hover & {
    ${({ theme, isDisabled }) =>
      !isDisabled &&
      css`
        color: ${theme.textInvert};
      `};
  }
`;

// TODO how to handle focus styles in 'menu' variant of Checkbox/Radio?
export const LabelText = styled.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${StyledInput}:focus ~ & {
    ${focusOutline}
  }
  ${StyledInput}:not(:disabled) ~ &:active {
    ${focusOutline}
  }
`;
