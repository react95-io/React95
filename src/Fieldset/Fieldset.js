import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { createDisabledTextStyles } from '../common';

const StyledFieldset = styled.fieldset`
  position: relative;
  border: 2px solid
    ${({ theme, variant }) =>
      variant === 'flat' ? theme.flatDark : theme.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.materialText};
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
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({ theme, variant }) =>
    variant === 'flat' ? theme.canvas : theme.material};
`;

const Fieldset = React.forwardRef(function Fieldset(props, ref) {
  const { label, disabled, variant, children, ...otherProps } = props;
  return (
    <StyledFieldset
      aria-disabled={disabled}
      isDisabled={disabled}
      variant={variant}
      ref={ref}
      {...otherProps}
    >
      {label && <StyledLegend variant={variant}>{label}</StyledLegend>}
      {children}
    </StyledFieldset>
  );
});

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
