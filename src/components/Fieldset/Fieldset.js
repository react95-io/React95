import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { createDisabledTextStyles } from '../common';
import { fontSizes, padding } from '../common/system';

const StyledFieldset = styled.fieldset`
  position: relative;
  border: 2px solid
    ${({ theme, variant }) =>
      variant === 'flat' ? theme.flatDark : theme.borderLightest};
  padding: ${padding.md};
  margin-top: ${padding.sm};
  font-size: ${fontSizes.md};
  color: ${({ theme }) => theme.text};
  ${({ variant }) =>
    variant !== 'flat' &&
    css`
      box-shadow: -1px -1px 0 1px ${({ theme }) => theme.borderDark},
        inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
    `}
  ${props => props.isDisabled && createDisabledTextStyles()}
`;
const StyledLegend = styled.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: ${padding.sm};
  transform: translateY(calc(-50% - 2px));
  padding: 0 ${padding.sm};

  font-size: ${fontSizes.md};
  background: ${({ theme, variant }) =>
    variant === 'flat' ? theme.canvas : theme.material};
`;

const Fieldset = ({ label, disabled, variant, children, ...otherProps }) => (
  <StyledFieldset isDisabled={disabled} variant={variant} {...otherProps}>
    {label && <StyledLegend variant={variant}>{label}</StyledLegend>}
    {children}
  </StyledFieldset>
);

Fieldset.defaultProps = {
  disabled: false,
  variant: 'default',
  label: null,
  children: null
};

Fieldset.propTypes = {
  label: propTypes.node,
  children: propTypes.node,
  disabled: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat'])
};

export default Fieldset;
