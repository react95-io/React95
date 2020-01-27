import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const StyledList = styled.ul`
  box-sizing: border-box;

  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 2px 4px 4px 2px;
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
const List = ({ inline, shadow, children, fullWidth, ...otherProps }) => (
  <StyledList
    inline={inline}
    shadow={shadow}
    fullWidth={fullWidth}
    role='menu'
    {...otherProps}
  >
    {children}
  </StyledList>
);

List.defaultProps = {
  fullWidth: false,
  shadow: true,
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
