import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { StyledCutout } from '../Cutout/Cutout';

const StyledTable = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`;

const Wrapper = styled(StyledCutout)`
  &:before {
    box-shadow: none;
  }
`;

const Table = React.forwardRef(function Table(props, ref) {
  const { children, ...otherProps } = props;

  return (
    <Wrapper>
      <StyledTable ref={ref} {...otherProps}>
        {children}
      </StyledTable>
    </Wrapper>
  );
});

Table.defaultProps = {
  children: null
};

Table.propTypes = {
  children: propTypes.node
};

export default Table;
