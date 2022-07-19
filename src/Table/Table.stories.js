import React from 'react';
import styled from 'styled-components';

import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeadCell,
  TableDataCell,
  Window,
  WindowHeader,
  WindowContent
} from 'react95';

export default {
  title: 'Table',
  component: Table,
  subcomponents: {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableHeadCell,
    TableDataCell
  },
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export function Default() {
  return (
    <Window style={{ width: 320 }}>
      <WindowHeader>Pokedex.exe</WindowHeader>
      <WindowContent>
        <Table>
          <TableHead>
            <TableRow head>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell disabled>Level</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableDataCell style={{ textAlign: 'center' }}>
                <span role='img' aria-label='LEAF'>
                  🌿
                </span>
              </TableDataCell>
              <TableDataCell>Bulbasaur</TableDataCell>
              <TableDataCell>64</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell style={{ textAlign: 'center' }}>
                <span role='img' aria-label='fire'>
                  🔥
                </span>
              </TableDataCell>
              <TableDataCell>Charizard</TableDataCell>
              <TableDataCell>209</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell style={{ textAlign: 'center' }}>
                <span role='img' aria-label='lightning'>
                  ⚡
                </span>
              </TableDataCell>
              <TableDataCell>Pikachu</TableDataCell>
              <TableDataCell>82</TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </WindowContent>
    </Window>
  );
}

Default.story = {
  name: 'default'
};
