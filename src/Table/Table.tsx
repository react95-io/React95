import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { StyledScrollView } from '../ScrollView/ScrollView';
import { CommonStyledProps } from '../types';

type TableProps = {
  children?: React.ReactNode;
} & React.TableHTMLAttributes<HTMLTableElement> &
  CommonStyledProps;

const StyledTable = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`;

const Wrapper = styled(StyledScrollView)`
  &:before {
    box-shadow: none;
  }
`;

const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  { children, ...otherProps },
  ref
) {
  return (
    <Wrapper>
      <StyledTable ref={ref} {...otherProps}>
        {children}
      </StyledTable>
    </Wrapper>
  );
});

export { Table, TableProps };
