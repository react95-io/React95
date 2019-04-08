import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AppBar from "./AppBar";
import Toolbar from "../Toolbar/Toolbar";
import Menu from "../Menu/Menu";
import TextField from "../TextField/TextField";

export const actions = { onClick: action("onClick") };

storiesOf("AppBar", module)
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
  .add("default", () => (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Menu />
        <TextField
          placeholder="Search..."
          width={150}
          style={{ marginLeft: 4 }}
        />
      </Toolbar>
    </AppBar>
  ));
