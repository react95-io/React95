import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AppBar from "./AppBar";
import Toolbar from "../Toolbar/Toolbar";
import Menu from "../Menu/Menu";
import TextField from "../TextField/TextField";

export const actions = { onClick: action("onClick") };

storiesOf("AppBar", module).add("default", () => (
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
