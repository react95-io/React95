import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common';

const StyledTabBody = styled.div`
  ${createBoxStyles()}
  ${createBorderStyles()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`;
const TabBody = React.forwardRef(function TabBody(props, ref) {
  const { children, ...otherProps } = props;
  return (
    <StyledTabBody ref={ref} {...otherProps}>
      {children}
    </StyledTabBody>
  );
});

TabBody.defaultProps = {
  children: null
};

TabBody.propTypes = {
  children: propTypes.node
};
export default TabBody;
