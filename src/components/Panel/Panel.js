import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  createBorderStyles,
  createBoxStyles,
  createWellBorderStyles
} from '../common';

const createPanelStyles = (variant = 'default') => {
  switch (variant) {
    case 'well':
      return css`
        ${createWellBorderStyles(true)}
      `;
    case 'outside':
      return css`
        ${createBorderStyles({ windowBorders: true })}
      `;
    default:
      return css`
        ${createBorderStyles()}
      `;
  }
};

const StyledPanel = styled.div`
  position: relative;
  font-size: 1rem;
  ${({ variant }) => createPanelStyles(variant)}
  ${createBoxStyles()}
`;

const Panel = React.forwardRef(function Panel(props, ref) {
  const { children, variant, ...otherProps } = props;
  return (
    <StyledPanel ref={ref} variant={variant} {...otherProps}>
      {children}
    </StyledPanel>
  );
});

Panel.defaultProps = {
  children: null,
  shadow: false,
  variant: 'outside'
};

Panel.propTypes = {
  variant: propTypes.oneOf(['outside', 'inside', 'well']),
  children: propTypes.node,
  shadow: propTypes.bool
};

export default Panel;
