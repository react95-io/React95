import React, { forwardRef } from 'react';

import styled from 'styled-components';

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.anchor};
  font-size: inherit;
  text-decoration: underline;
  &:visited {
    color: ${({ theme }) => theme.anchorVisited};
  }
`;

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

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
