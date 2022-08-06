import styled, { css } from 'styled-components';

import { createDisabledTextStyles, focusOutline, styledDimension } from '.';
import { StyledMenuListItem } from '../MenuList/MenuList';

export const size = 10;

export const StyledInput = styled.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${styledDimension(size)};
  height: ${styledDimension(size)};
  opacity: 0;
  z-index: -1;
`;

export const StyledLabel = styled.label<{ $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: ${styledDimension(4)} 0;
  cursor: ${({ $disabled }) => (!$disabled ? 'pointer' : 'auto')};
  user-select: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.materialText};
  ${props => props.$disabled && createDisabledTextStyles()}

  ${StyledMenuListItem} & {
    margin: 0;
    height: 100%;
  }
  ${StyledMenuListItem}:hover & {
    ${({ $disabled, theme }) =>
      !$disabled &&
      css`
        color: ${theme.materialTextInvert};
      `};
  }
`;

// TODO how to handle focus styles in 'menu' variant of Checkbox/Radio?
export const LabelText = styled.span`
  display: inline-block;
  line-height: 1;
  padding: ${styledDimension(1)};
  ${StyledInput}:focus ~& {
    ${focusOutline}
  }
  ${StyledInput}:not(:disabled) ~ &:active {
    ${focusOutline}
  }
`;
