import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import Cutout from '../Cutout/Cutout';

const StyledTable = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const StyledCutout = styled(Cutout)`
  &:before {
    box-shadow: none;
  }
`;

const Table = ({ children, ...otherProps }) => (
  <StyledCutout>
    <StyledTable {...otherProps}>{children}</StyledTable>
  </StyledCutout>
);

Table.defaultProps = {
  children: null
};

Table.propTypes = {
  children: propTypes.node
};

export default Table;
