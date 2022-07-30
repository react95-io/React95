import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { CommonStyledProps } from '../types';

type AnchorProps = {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonStyledProps;

const StyledAnchor = styled.a<{ underline: boolean }>`
  color: ${({ theme }) => theme.anchor};
  font-size: inherit;
  text-decoration: underline;
  &:visited {
    color: ${({ theme }) => theme.anchorVisited};
  }
`;

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, ...otherProps }: AnchorProps, ref) => {
    return (
      <StyledAnchor ref={ref} {...otherProps}>
        {children}
      </StyledAnchor>
    );
  }
);

Anchor.displayName = 'Anchor';

export { Anchor, AnchorProps };
