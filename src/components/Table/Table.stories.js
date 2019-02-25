import React from "react";
import { storiesOf } from "@storybook/react";

import Table from "./Table";
import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import TableHeadCell from "../TableHeadCell/TableHeadCell";
import TableDataCell from "../TableDataCell/TableDataCell";

import Window from "../Window/Window";
import WindowHeader from "../WindowHeader/WindowHeader";
import WindowContent from "../WindowContent/WindowContent";

class SimpleTable extends React.Component {
  render() {
    return (
      <Window>
        <WindowHeader>Component libraries</WindowHeader>
        <WindowContent>
          <Table>
            <TableHead>
              <TableRow head>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Swag</TableHeadCell>
                <TableHeadCell>Ready</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableDataCell>Material design</TableDataCell>
                <TableDataCell>4%</TableDataCell>
                <TableDataCell>yes</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell>Bootstrap</TableDataCell>
                <TableDataCell>2%</TableDataCell>
                <TableDataCell>yes</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell>React95</TableDataCell>
                <TableDataCell>95%</TableDataCell>
                <TableDataCell>no</TableDataCell>
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
