import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const StyledTableHead = styled.thead`
  display: table-header-group;
`;
const TableHead = ({ className, children, style, ...otherProps }) => {
  return (
    <StyledTableHead className={className} style={style} {...otherProps}>
      {children}
    </StyledTableHead>
  );
};

TableHead.defaultProps = {};

TableHead.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

export default TableHead;
