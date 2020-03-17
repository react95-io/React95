import styled from 'styled-components';
import { createDisabledTextStyles, focusOutline } from '../common';

import { padding, fontSizes } from '../common/system';
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
  margin: ${padding.sm} 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: ${fontSizes.md};
  ${props => props.isDisabled && createDisabledTextStyles()}

  ${StyledListItem} & {
    margin: 0;
    height: 100%;
  }
`;

// TODO how to handle focus styles in 'menu' variant of Checkbox/Radio?
export const LabelText = styled.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${StyledInput}:focus + & {
    ${focusOutline}
  }
`;
