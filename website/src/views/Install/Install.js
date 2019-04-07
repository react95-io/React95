import React from "react";
import styled from "styled-components";
import {
  WindowContent,
  WindowHeader,
  Fieldset,
  Select,
  Cutout,
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableDataCell,
  TableRow
} from "../../components";

import FullWindow from "../../appComponents/FullWindow";
const StyledFieldset = styled(Fieldset)`
  margin-top: 1.5rem;
`;
export default function Desktop() {
  return (
    <FullWindow shadow={false}>
      <WindowHeader>How to</WindowHeader>
      <WindowContent>
        <StyledFieldset label="Installation">
          <p>
            To add React95 to your project, simply run one of commands below in
            your terminal:
          </p>
          <br />
          <Select
            items={[
              { value: "npm", title: "npm install react95" },
              { value: "yarn", title: "yarn add react95" }
            ]}
          />
        </StyledFieldset>
        <StyledFieldset label="Available components">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Size</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableDataCell>Button.jsx</TableDataCell>
                <TableDataCell>23kB</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell>AppBar.jsx</TableDataCell>
                <TableDataCell>23kB</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell>DatePicker.jsx</TableDataCell>
                <TableDataCell>23kB</TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </StyledFieldset>
      </WindowContent>
    </FullWindow>
  );
}
