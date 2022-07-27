import React, { forwardRef } from 'react';

import styled from 'styled-components';
import { createDisabledTextStyles } from '../common';
import { blockSizes } from '../common/system';
import { CommonStyledProps, Sizes } from '../types';

type ListItemProps = {
  disabled?: boolean;
  square?: boolean;
  primary?: boolean;
  size?: Sizes;
} & React.HTMLAttributes<HTMLLIElement> &
  CommonStyledProps;

export const StyledListItem = styled.li<{
  $disabled?: boolean;
  square?: boolean;
  primary?: boolean;
  size: Sizes;
}>`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${props => blockSizes[props.size]};
  width: ${props => (props.square ? blockSizes[props.size] : 'auto')};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${props =>
    props.square ? 'space-around' : 'space-between'};
  text-align: center;
  line-height: ${props => blockSizes[props.size]};
  color: ${({ theme }) => theme.materialText};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  font-weight: ${({ primary }) => (primary ? 'bold' : 'normal')};
  &:hover {
    ${({ theme, $disabled }) =>
      !$disabled &&
      `
        color: ${theme.materialTextInvert};
        background: ${theme.hoverBackground};
      `}

    cursor: default;
  }
  ${props => props.$disabled && createDisabledTextStyles()}
`;

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(function ListItem(
  {
    size = 'lg',
    disabled,
    // tabIndex: tabIndexProp,
    square,
    children,
    onClick,
    primary,
    ...otherProps
  },
  ref
) {
  // let tabIndex;
  // if (!disabled) {
  //   tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  // }

  return (
    <StyledListItem
      $disabled={disabled}
      size={size}
      square={square}
      onClick={disabled ? undefined : onClick}
      primary={primary}
      // tabIndex={tabIndex}
      role='menuitem'
      ref={ref}
      aria-disabled={disabled}
      {...otherProps}
    >
      {children}
    </StyledListItem>
  );
});

export { ListItem, ListItemProps };
