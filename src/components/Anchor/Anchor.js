import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { fontSizes } from '../common/system';

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.anchor};
  font-size: ${({ size }) => (size ? fontSizes[size] : 'inherit')};
  text-decoration: underline;
  &:visited {
    color: ${({ theme }) => theme.anchorVisited};
  }
`;

const Anchor = ({ className, style, href, children, ...otherProps }) => (
  <StyledAnchor href={href} className={className} style={style} {...otherProps}>
    {children}
  </StyledAnchor>
);

Anchor.defaultProps = {
  className: '',
  style: {}
};

Anchor.propTypes = {
  className: propTypes.string,
  href: propTypes.string.isRequired,
  style: propTypes.object,
  children: propTypes.node.isRequired
};

export default Anchor;
