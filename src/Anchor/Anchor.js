import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.anchor};
  font-size: inherit;
  text-decoration: underline;
  &:visited {
    color: ${({ theme }) => theme.anchorVisited};
  }
`;

const Anchor = React.forwardRef(function Anchor(props, ref) {
  const { children, ...otherProps } = props;

  return (
    <StyledAnchor ref={ref} {...otherProps}>
      {children}
    </StyledAnchor>
  );
});

Anchor.defaultProps = {};

Anchor.propTypes = {
  children: propTypes.node.isRequired
};

export default Anchor;
