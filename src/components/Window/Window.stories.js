import React from "react";
import { storiesOf } from "@storybook/react";

import Window from "./Window";
import WindowContent from "../WindowContent/WindowContent";
import WindowHeader from "../WindowHeader/WindowHeader";
import Button from "../Button/Button";
import Toolbar from "../Toolbar/Toolbar";

storiesOf("Window", module)
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
    <Window style={{ width: 400 }}>
      <WindowHeader>react95.exe</WindowHeader>
      <Toolbar>
        <Button variant="menu" size="sm">
          File
        </Button>
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm">
          Save
        </Button>
      </Toolbar>
      <WindowContent>
        <ul>
          <li>something here</li>
          <li>something here</li>
          <li>something here</li>
          <li>something here</li>
        </ul>
      </WindowContent>
    </Window>
  ))
  .add("no shadow", () => (
    <Window shadow={false}>
      <WindowHeader>react95.exe</WindowHeader>
      <WindowContent>
        <ul>
          <li>something here</li>
          <li>something here</li>
          <li>something here</li>
          <li>something here</li>
        </ul>
      </WindowContent>
    </Window>
  ));
