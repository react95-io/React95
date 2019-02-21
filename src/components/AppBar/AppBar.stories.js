import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AppBar from "./AppBar";
import Toolbar from "../Toolbar/Toolbar";
import Menu from "../Menu/Menu";

export const actions = { onClick: action("onClick") };

storiesOf("AppBar", module).add("default", () => (
  <AppBar>
    <Toolbar>
      <Menu />
    </Toolbar>
  </AppBar>
));
