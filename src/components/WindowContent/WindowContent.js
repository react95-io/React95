import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { padding } from '../common/system';

const StyledWindowContent = styled.div`
  padding: ${padding.md};
  margin-right: 2px;
`;

const WindowContent = ({ children, ...otherProps }) => (
  <StyledWindowContent {...otherProps}>{children}</StyledWindowContent>
);

WindowContent.defaultProps = {
  children: null
};

WindowContent.propTypes = {
  children: propTypes.node
};

export default WindowContent;
