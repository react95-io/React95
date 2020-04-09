import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledDivider = styled.hr`
  ${({ orientation, theme, size }) =>
    orientation === 'vertical'
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

const Divider = React.forwardRef(function Divider(props, ref) {
  const { size: sizeProp, ...otherProps } = props;
  const size = typeof sizeProp === 'number' ? `${sizeProp}px` : sizeProp;
  return <StyledDivider ref={ref} size={size} {...otherProps} />;
});

Divider.defaultProps = {
  size: '100%',
  orientation: 'horizontal'
};

Divider.propTypes = {
  size: propTypes.oneOf([propTypes.string, propTypes.number]),
  orientation: propTypes.oneOf(['horizontal, vertical'])
};

export default Divider;
