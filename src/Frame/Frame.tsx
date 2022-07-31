import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';
import { CommonStyledProps } from '../types';

type FrameProps = {
  children?: React.ReactNode;
  shadow?: boolean;
  variant?: 'outside' | 'field' | 'inside' | 'well';
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const createFrameStyles = (variant: FrameProps['variant']) => {
  switch (variant) {
    case 'well':
      return css`
        ${createBorderStyles({ style: 'status' })}
      `;
    case 'outside':
      return css`
        ${createBorderStyles({ style: 'window' })}
      `;
    case 'field':
      return css`
        ${createBorderStyles({ style: 'field' })}
      `;
    default:
      return css`
        ${createBorderStyles()}
      `;
  }
};

const StyledFrame = styled.div<Required<Pick<FrameProps, 'variant'>>>`
  position: relative;
  font-size: 1rem;
  ${({ variant }) => createFrameStyles(variant)}
  ${({ variant }) =>
    createBoxStyles(
      variant === 'field'
        ? { background: 'canvas', color: 'canvasText' }
        : undefined
    )}
`;

const Frame = forwardRef<HTMLDivElement, FrameProps>(
  ({ children, shadow = false, variant = 'window', ...otherProps }, ref) => {
    return (
      <StyledFrame ref={ref} shadow={shadow} variant={variant} {...otherProps}>
        {children}
      </StyledFrame>
    );
  }
);

Frame.displayName = 'Frame';

export { Frame, FrameProps };
