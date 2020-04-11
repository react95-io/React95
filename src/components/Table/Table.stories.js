import React from 'react';

import Table from './Table';
import TableBody from '../TableBody/TableBody';
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';
import TableHeadCell from '../TableHeadCell/TableHeadCell';
import TableDataCell from '../TableDataCell/TableDataCell';

import Window from '../Window/Window';
import WindowHeader from '../WindowHeader/WindowHeader';
import WindowContent from '../WindowContent/WindowContent';

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
  decorators: [
    story => (
      <div
        style={{
          padding: '5rem',
          background: 'teal'
        }}
      >
        {story()}
      </div>
    )
  ]
};

export const Default = () => (
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

Default.story = {
  name: 'default'
};
