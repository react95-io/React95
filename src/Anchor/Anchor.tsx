import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { CommonStyledProps } from '../types';

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.anchor};
  font-size: inherit;
  text-decoration: underline;
  &:visited {
    color: ${({ theme }) => theme.anchorVisited};
  }
`;

type AnchorProps = {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonStyledProps;

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(function Anchor(
  { children, ...otherProps }: AnchorProps,
  ref
) {
  return (
    <StyledAnchor ref={ref} {...otherProps}>
      {children}
    </StyledAnchor>
  );
});

export { Anchor, AnchorProps };
