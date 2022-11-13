import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { createDisabledTextStyles } from '../common';
import { CommonStyledProps } from '../types';

type GroupBoxProps = {
  label?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: 'default' | 'flat';
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement> &
  CommonStyledProps;

const StyledFieldset = styled.fieldset<
  Pick<GroupBoxProps, 'variant'> & { $disabled: boolean }
>`
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
  ${props => props.$disabled && createDisabledTextStyles()}
`;

const StyledLegend = styled.legend<Pick<GroupBoxProps, 'variant'>>`
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

const GroupBox = forwardRef<HTMLFieldSetElement, GroupBoxProps>(
  (
    { label, disabled = false, variant = 'default', children, ...otherProps },
    ref
  ) => {
    return (
      <StyledFieldset
        aria-disabled={disabled}
        $disabled={disabled}
        variant={variant}
        ref={ref}
        {...otherProps}
      >
        {label && <StyledLegend variant={variant}>{label}</StyledLegend>}
        {children}
      </StyledFieldset>
    );
  }
);

GroupBox.displayName = 'GroupBox';

export { GroupBox, GroupBoxProps };
