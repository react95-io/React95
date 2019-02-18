import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Frame from "./Frame";
import Window from "../Window/Window";
import WindowContent from "../WindowContent/WindowContent";

const props = {
  title: "Title here",
  disabled: false
};

storiesOf("Frame", module)
  .addDecorator(story => (
    <div
      style={{
        padding: "5rem"
        // background: "teal"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => (
    <Window>
      <WindowContent>
        <Frame>Some content here 😍</Frame>
      </WindowContent>
    </Window>
  ))
  .add("withTitle", () => (
    <Window>
      <WindowContent>
        <Frame title="Title here">Some content here 😍</Frame>
      </WindowContent>
    </Window>
  ))
  .add("disabled", () => (
    <Window>
      <WindowContent>
        <Frame title="Disabled" disabled>
          Some content here 😍
        </Frame>
      </WindowContent>
    </Window>
  ));
