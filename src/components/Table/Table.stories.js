import React from 'react';
import { storiesOf } from '@storybook/react';

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

const SimpleTable = () => (
  <Window>
    <WindowHeader>Pokedex.exe</WindowHeader>
    <WindowContent>
      <Table>
        <TableHead>
          <TableRow head>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Lvl.</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableDataCell style={{ textAlign: 'center' }}>
              <span role='img' aria-label='🌿'>
                🌿
              </span>
            </TableDataCell>
            <TableDataCell>Bulbasaur</TableDataCell>
            <TableDataCell>64</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell style={{ textAlign: 'center' }}>
              <span role='img' aria-label='🔥'>
                🔥
              </span>
            </TableDataCell>
            <TableDataCell>Charizard</TableDataCell>
            <TableDataCell>209</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell style={{ textAlign: 'center' }}>
              <span role='img' aria-label='⚡'>
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

storiesOf('Table', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: 'teal'
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => <SimpleTable />);
