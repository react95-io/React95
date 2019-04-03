import React from "react";
import { storiesOf } from "@storybook/react";

import Bar from "./Bar";
import AppBar from "../AppBar/AppBar";
import Toolbar from "../Toolbar/Toolbar";
import Button from "../Button/Button";

storiesOf("Bar", module)
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
      <Toolbar>
        <Bar />
        <Button flat accent>
          Edit
        </Button>
        <Button flat accent disabled>
          Save
        </Button>
        <Bar />
      </Toolbar>
    </AppBar>
  ));
