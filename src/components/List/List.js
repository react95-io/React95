import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const createListPositionStyles = ({
  verticalAlign = 'bottom',
  horizontalAlign = 'left'
}) => `
    position: absolute;
    ${verticalAlign === 'bottom' ? 'bottom: 0;' : 'top: 0;'}
    ${horizontalAlign === 'left' ? 'left: 0;' : 'right: 0;'}

    transform: translate(0, ${verticalAlign === 'top' ? '-100%' : '100%'})
  `;

const StyledList = styled.ul`
  box-sizing: border-box;

  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 2px 4px 4px 2px;
  ${createBorderStyles()}
  ${createBoxStyles()}
  /* display: ${props => (props.inline ? 'inline-flex' : 'inline-block')}; */
  ${props =>
    props.inline &&
    `
    align-items: center;
    display: inline-flex;
  `}
  list-style: none;
  position: relative;

  ${props =>
    (props.horizontalAlign || props.verticalAlign) && createListPositionStyles}
`;

const List = ({
  inline,
  shadow,
  children,
  fullWidth,
  verticalAlign,
  horizontalAlign,
  ...otherProps
}) => (
  <StyledList
    inline={inline}
    verticalAlign={verticalAlign}
    horizontalAlign={horizontalAlign}
    shadow={shadow}
    fullWidth={fullWidth}
    {...otherProps}
  >
    {children}
  </StyledList>
);

List.defaultProps = {
  fullWidth: false,
  shadow: true,
  inline: false,
  children: null,
  verticalAlign: undefined,
  horizontalAlign: undefined
};

List.propTypes = {
  fullWidth: propTypes.bool,
  inline: propTypes.bool,
  shadow: propTypes.bool,
  children: propTypes.node,
  verticalAlign: propTypes.oneOf(['top', 'bottom']),
  horizontalAlign: propTypes.oneOf(['left', 'right'])
};

export default List;
