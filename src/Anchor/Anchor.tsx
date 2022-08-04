import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { CommonStyledProps } from '../types';

type AnchorProps = {
  children: React.ReactNode;
  underline?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonStyledProps;

const StyledAnchor = styled.a<{ underline: boolean }>`
  color: ${({ theme }) => theme.anchor};
  font-size: inherit;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  &:visited {
    color: ${({ theme }) => theme.anchorVisited};
  }
`;

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, underline = true, ...otherProps }: AnchorProps, ref) => {
    return (
      <StyledAnchor ref={ref} underline={underline} {...otherProps}>
        {children}
      </StyledAnchor>
    );
  }
);

Anchor.displayName = 'Anchor';

export { Anchor, AnchorProps };
