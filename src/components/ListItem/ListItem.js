import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createDisabledTextStyles } from '../common';
import { padding, blockSizes } from '../common/system';

export const StyledListItem = styled.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${props => blockSizes[props.size]};
  width: ${props => (props.square ? blockSizes[props.size] : 'auto')};
  padding: 0 ${padding.sm};

  white-space: nowrap;
  justify-content: ${props =>
    props.square ? 'space-around' : 'space-between'};
  text-align: center;
  line-height: ${props => blockSizes[props.size]};
  color: ${({ theme }) => theme.text};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};

  &:hover {
    ${({ theme, isDisabled }) =>
      !isDisabled &&
      `
        color: ${theme.textInvert};
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

  children: null
  // tabIndex: undefined
};

ListItem.propTypes = {
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  disabled: propTypes.bool,
  square: propTypes.bool,
  children: propTypes.node,
  onClick: propTypes.func
  // tabIndex: propTypes.number
};

export default ListItem;
