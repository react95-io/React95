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

const Table = ({ className, children, style, ...otherProps }) => (
  <StyledCutout>
    <StyledTable className={className} style={style} {...otherProps}>
      {children}
    </StyledTable>
  </StyledCutout>
);

Table.defaultProps = {
  children: null,
  className: '',
  style: {}
};

Table.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default Table;
