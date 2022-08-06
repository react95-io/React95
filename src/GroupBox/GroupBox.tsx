import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { createDisabledTextStyles, styledDimension } from '../common';
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
  border: ${styledDimension(1)} solid
    ${({ theme, variant }) =>
      variant === 'flat' ? theme.flatDark : theme.borderLightest};
  padding: ${styledDimension(8)};
  margin-top: ${styledDimension(4)};
  font-size: 1rem;
  color: ${({ theme }) => theme.materialText};
  ${({ variant }) =>
    variant !== 'flat' &&
    css`
      box-shadow: -${styledDimension(0.5)} -${styledDimension(0.5)} 0
          ${styledDimension(0.5)} ${({ theme }) => theme.borderDark},
        inset -${styledDimension(0.5)} -${styledDimension(0.5)} 0
          ${styledDimension(0.5)} ${({ theme }) => theme.borderDark};
    `}
  ${props => props.$disabled && createDisabledTextStyles()}
`;

const StyledLegend = styled.legend<Pick<GroupBoxProps, 'variant'>>`
  display: flex;
  position: absolute;
  top: 0;
  left: ${styledDimension(4)};
  transform: translateY(calc(-50% - ${styledDimension(1)}));
  padding: 0 ${styledDimension(4)};

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
