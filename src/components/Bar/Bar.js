import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledBar = styled.div`
  display: inline-block;
  box-sizing: border-box;
  height: ${({ size }) => size};
  width: 5px;
  border-top: 2px solid ${({ theme }) => theme.borderLightest};
  border-left: 2px solid ${({ theme }) => theme.borderLightest};
  border-bottom: 2px solid ${({ theme }) => theme.borderDark};
  border-right: 2px solid ${({ theme }) => theme.borderDark};
  background: ${({ theme }) => theme.material};
`;
// TODO: add horizontal variant
// TODO: allow user to specify number of bars (like 3 horizontal bars for drag handle)
const Bar = React.forwardRef(function Bar(props, ref) {
  const { size: sizeProp, ...otherProps } = props;
  const size = typeof sizeProp === 'number' ? `${sizeProp}px` : sizeProp;

  return <StyledBar size={size} ref={ref} {...otherProps} />;
});

Bar.defaultProps = {
  size: '100%'
};
Bar.propTypes = {
  size: propTypes.oneOf([propTypes.string, propTypes.number])
};

export default Bar;
