import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => (props.noPadding ? '0' : '4px')};
`;

const Toolbar = React.forwardRef(function Toolbar(props, ref) {
  const { children, noPadding, ...otherProps } = props;
  return (
    <StyledToolbar noPadding={noPadding} ref={ref} {...otherProps}>
      {children}
    </StyledToolbar>
  );
});

Toolbar.defaultProps = {
  children: null,
  noPadding: false
};

Toolbar.propTypes = {
  children: propTypes.node,
  noPadding: propTypes.bool
};

export default Toolbar;
