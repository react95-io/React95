import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  createBorderStyles,
  createBoxStyles,
  createWellBorderStyles
} from '../common';
import { CommonStyledProps } from '../types';

type PanelProps = {
  children?: React.ReactNode;
  shadow?: boolean;
  variant?: 'outside' | 'inside' | 'well';
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const createPanelStyles = (variant: PanelProps['variant']) => {
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

const StyledPanel = styled.div<Required<Pick<PanelProps, 'variant'>>>`
  position: relative;
  font-size: 1rem;
  ${({ variant }) => createPanelStyles(variant)}
  ${createBoxStyles()}
`;

const Panel = forwardRef<HTMLDivElement, PanelProps>(function Panel(
  { children, shadow = false, variant = 'outside', ...otherProps },
  ref
) {
  return (
    <StyledPanel ref={ref} shadow={shadow} variant={variant} {...otherProps}>
      {children}
    </StyledPanel>
  );
});

export { Panel, PanelProps };
