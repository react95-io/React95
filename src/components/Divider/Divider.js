import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledDivider = styled.hr`
  ${({ vertical, theme, size }) =>
    vertical
      ? `
    height: ${size};
    border-left: 2px solid ${theme.borderDark};
    border-right: 2px solid ${theme.borderLightest};
    margin: 0;
    `
      : `
    width: ${size};
    border-bottom: 2px solid ${theme.borderLightest};
    border-top: 2px solid ${theme.borderDark};
    margin: 0;
    `}
`;

const Divider = ({ vertical, size, ...otherProps }) => (
  <StyledDivider vertical={vertical} size={size} {...otherProps} />
);

Divider.defaultProps = {
  size: '100%',
  vertical: false
};

Divider.propTypes = {
  vertical: propTypes.bool,
  size: propTypes.string
};

export default Divider;
