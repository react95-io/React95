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

const Hourglass = React.forwardRef(function HourGlass(props, ref) {
  const { size, style, ...otherProps } = props;
  return (
    <StyledContainer
      style={{
        ...style,
        width: size || '30px',
        height: size || '30px'
      }}
      ref={ref}
      {...otherProps}
    >
      <StyledHourglass />
    </StyledContainer>
  );
});

Hourglass.defaultProps = {
  size: '30px',
  style: {}
};

Hourglass.propTypes = {
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  // eslint-disable-next-line react/forbid-prop-types
  style: propTypes.object
};
export default Hourglass;
