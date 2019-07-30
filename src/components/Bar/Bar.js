import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { blockSizes } from '../common/system';

const StyledBar = styled.div`
  display: inline-block;
  box-sizing: border-box;
  height: ${props => blockSizes[props.size]};
  width: 5px;
  border-top: 2px solid ${({ theme }) => theme.borderLightest};
  border-left: 2px solid ${({ theme }) => theme.borderLightest};
  border-bottom: 2px solid ${({ theme }) => theme.borderDark};
  border-right: 2px solid ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.material};
`;

const Bar = ({
  size, className, style, ...otherProps
}) => (
  <StyledBar
    size={size}
    className={className}
    style={style}
    {...otherProps}
  />
);

Bar.defaultProps = {
  size: 'md',
  className: '',
  style: {},
};
Bar.propTypes = {
  className: propTypes.string,
  style: propTypes.shape([
    propTypes.string,
    propTypes.number,
  ]),
  size: propTypes.oneOf(['sm', 'md', 'lg']),
};
export default Bar;
