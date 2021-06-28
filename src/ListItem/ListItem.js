import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createDisabledTextStyles } from '../common';
import { blockSizes } from '../common/system';

export const StyledListItem = styled.li`
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
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
  font-weight: ${({ primary }) => (primary ? 'bold' : 'normal')};
  &:hover {
    ${({ theme, isDisabled }) =>
      !isDisabled &&
      `
        color: ${theme.materialTextInvert};
        background: ${theme.hoverBackground};
      `}

    cursor: default;
  }
  ${props => props.isDisabled && createDisabledTextStyles()}
`;

const ListItem = React.forwardRef(function ListItem(props, ref) {
  const {
    size,
    disabled,
    // tabIndex: tabIndexProp,
    square,
    children,
    onClick,
    primary,
    ...otherProps
  } = props;
  // let tabIndex;
  // if (!disabled) {
  //   tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  // }

  return (
    <StyledListItem
      size={size}
      isDisabled={disabled}
      square={square}
      onClick={disabled ? undefined : onClick}
      primary={primary}
      // tabIndex={tabIndex}
      role='menuitem'
      ref={ref}
      aria-disabled={disabled.toString()}
      {...otherProps}
    >
      {children}
    </StyledListItem>
  );
});

ListItem.defaultProps = {
  disabled: false,
  size: 'lg',
  square: false,
  onClick: null,
  children: null,
  primary: false
  // tabIndex: undefined
};

ListItem.propTypes = {
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  disabled: propTypes.bool,
  square: propTypes.bool,
  children: propTypes.node,
  onClick: propTypes.func,
  primary: propTypes.bool
  // tabIndex: propTypes.number
};

export default ListItem;
