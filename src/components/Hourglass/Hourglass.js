import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

import base64hourglass from './base64hourglass';

const StyledContainer = styled.span`
  display: inline-block;
`;

const StyledHourglass = styled.span`
  display: block;
  background: ${base64hourglass};
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const Hourglass = ({
  size, className, style, ...otherProps
}) => (
  <StyledContainer
    className={className}
    style={{
      ...style,
      width: size || '30px',
      height: size || '30px',
    }}
    {...otherProps}
  >
    <StyledHourglass />
  </StyledContainer>
);

Hourglass.defaultProps = {
  size: '30px',
  className: '',
  style: {},
};

Hourglass.propTypes = {
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  className: propTypes.string,
  style: propTypes.shape([
    propTypes.string,
    propTypes.number,
  ]),
};
export default Hourglass;
