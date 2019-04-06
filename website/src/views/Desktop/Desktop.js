import React from "react";
import styled from "styled-components";
import {
  WindowContent,
  Fieldset,
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableDataCell,
  TableRow
} from "../../components";

import FullWindow from "../../appComponents/FullWindow";

export default function Desktop() {
  return (
    <FullWindow>
      <WindowContent>
        <Fieldset label="Components">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Name.jsx</TableHeadCell>
                <TableHeadCell>Size</TableHeadCell>
                <TableHeadCell>Test</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableDataCell>Button.jsx</TableDataCell>
                <TableDataCell>23kB</TableDataCell>
                <TableDataCell>23kB</TableDataCell>
              </TableRow>

              <TableRow>
                <TableDataCell>AppBar.jsx</TableDataCell>
                <TableDataCell>23kB</TableDataCell>
                <TableDataCell>23kB</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell>DatePicker.jsx</TableDataCell>
                <TableDataCell>23kB</TableDataCell>
                <TableDataCell>23kB</TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </Fieldset>
      </WindowContent>
    </FullWindow>
  );
}
