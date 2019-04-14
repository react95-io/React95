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
                <TableDataCell style={{ textAlign: "center" }}>
                  🌿
                </TableDataCell>
                <TableDataCell>Bulbasaur</TableDataCell>
                <TableDataCell>64</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell style={{ textAlign: "center" }}>
                  🔥
                </TableDataCell>
                <TableDataCell>Charizard</TableDataCell>
                <TableDataCell>209</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell style={{ textAlign: "center" }}>
                  ⚡
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
