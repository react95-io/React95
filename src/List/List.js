import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const StyledList = styled.ul`
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
// TODO keyboard controls
const List = React.forwardRef(function List(props, ref) {
  const { children, ...otherProps } = props;

  return (
    <StyledList role='menu' ref={ref} {...otherProps}>
      {children}
    </StyledList>
  );
});

List.defaultProps = {
  fullWidth: false,
  shadow: false,
  inline: false,
  children: null
};

List.propTypes = {
  fullWidth: propTypes.bool,
  inline: propTypes.bool,
  shadow: propTypes.bool,
  children: propTypes.node
};

export default List;
