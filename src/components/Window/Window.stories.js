import React from "react";
import { storiesOf } from "@storybook/react";

import Window from "./Window";
import WindowContent from "../WindowContent/WindowContent";
import WindowHeader from "../WindowHeader/WindowHeader";

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
    <Window>
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
