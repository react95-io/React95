import React from "react";
import { storiesOf } from "@storybook/react";

import Table from "./Table";
import TableBody from "./TableBody/TableBody";
import TableHead from "./TableHead/TableHead";
import TableRow from "./TableRow/TableRow";
import TableHeaderCell from "./TableHeaderCell/TableHeaderCell";
import TableDataCell from "./TableDataCell/TableDataCell";

import Window from "../Window/Window";
import WindowHeader from "../WindowHeader/WindowHeader";
import WindowContent from "../WindowContent/WindowContent";
import Button from "../Button/Button";
class SimpleTable extends React.Component {
  render() {
    return (
      <Window style={{ width: 400 }}>
        <WindowHeader>Table.exe</WindowHeader>
        <WindowContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Age</TableHeaderCell>
                <TableHeaderCell>Swag</TableHeaderCell>
                <TableHeaderCell>Money</TableHeaderCell>
                <TableHeaderCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableDataCell>Artur</TableDataCell>
                <TableDataCell>28</TableDataCell>
                <TableDataCell>always</TableDataCell>
                <TableDataCell>1991</TableDataCell>
                <TableDataCell>
                  <Button fullWidth>+</Button>
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell>Ola</TableDataCell>
                <TableDataCell>30</TableDataCell>
                <TableDataCell>always</TableDataCell>
                <TableDataCell>1988</TableDataCell>
                <TableDataCell>
                  <Button fullWidth>+</Button>
                </TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell>Adaś</TableDataCell>
                <TableDataCell>25</TableDataCell>
                <TableDataCell>always</TableDataCell>
                <TableDataCell>1994</TableDataCell>
                <TableDataCell>
                  <Button fullWidth>+</Button>
                </TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </WindowContent>
      </Window>
    );
  }
}

storiesOf("Table", module)
  .addDecorator(story => (
    <div
      style={{
        padding: "5rem",
        background: "teal"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => <SimpleTable />);
