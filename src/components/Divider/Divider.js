import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { blockSizes } from '../common/system';

const StyledDivider = styled.hr`
  ${({ vertical, theme, size }) =>
    vertical
      ? `
    height: ${blockSizes[size]};
    border-left: 2px solid ${theme.borderDark};
    border-right: 2px solid ${theme.borderLightest};
    margin: 0;
    `
      : `
    width: 100%;
    border-bottom: 2px solid ${theme.borderLightest};
    border-top: 2px solid ${theme.borderDark};
    margin: 0;
    `}
`;

const Divider = ({ vertical, className, style, ...otherProps }) => (
  <StyledDivider
    vertical={vertical}
    as={vertical ? 'div' : 'hr'}
    className={className}
    style={style}
    {...otherProps}
  />
);

Divider.defaultProps = {
  size: 'md',
  vertical: false,
  className: '',
  style: {}
};

Divider.propTypes = {
  vertical: propTypes.bool,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default Divider;
