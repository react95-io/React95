import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  createScrollbars,
  createInnerBorderWithShadow,
  styledDimension
} from '../common';
import { defaultTrue } from '../common/utils';
import { CommonStyledProps } from '../types';

type ScrollViewProps = {
  children?: React.ReactNode;
  /** @deprecated Change `shadow` property on theme */
  shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

export const StyledScrollView = styled.div<Pick<ScrollViewProps, 'shadow'>>`
  position: relative;
  box-sizing: border-box;
  padding: ${styledDimension(1)};
  font-size: 1rem;
  border-style: solid;
  border-width: ${styledDimension(1)};
  border-left-color: ${({ theme }) => theme.borderDark};
  border-top-color: ${({ theme }) => theme.borderDark};
  border-right-color: ${({ theme }) => theme.borderLightest};
  border-bottom-color: ${({ theme }) => theme.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - ${styledDimension(2)});
    height: calc(100% - ${styledDimension(2)});

    border-style: solid;
    border-width: ${styledDimension(1)};
    border-left-color: ${({ theme }) => theme.borderDarkest};
    border-top-color: ${({ theme }) => theme.borderDarkest};
    border-right-color: ${({ theme }) => theme.borderLight};
    border-bottom-color: ${({ theme }) => theme.borderLight};

    pointer-events: none;
    ${props =>
      defaultTrue(props.shadow ?? props.theme.shadow) &&
      `box-shadow: ${createInnerBorderWithShadow({
        theme: props.theme,
        hasInsetShadow: true
      })};`}
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: ${styledDimension(2)};
  overflow: auto;
  ${createScrollbars()}
`;

const ScrollView = forwardRef<HTMLDivElement, ScrollViewProps>(
  ({ children, shadow, ...otherProps }, ref) => {
    return (
      <StyledScrollView ref={ref} shadow={shadow} {...otherProps}>
        <Content>{children}</Content>
      </StyledScrollView>
    );
  }
);

ScrollView.displayName = 'ScrollView';

export { ScrollView, ScrollViewProps };
