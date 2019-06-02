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
      <WindowHeader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <span>react95.exe</span>
        <Button
          style={{ marginRight: "-6px", marginTop: "1px" }}
          size={"sm"}
          square
        >
          <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
            x
          </span>
        </Button>
      </WindowHeader>
      <Toolbar>
        <Button variant="menu" size="sm">
          File
        </Button>
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm" disabled>
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
