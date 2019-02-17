import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Frame from "./Frame";

const props = {
  title: "Title here",
  disabled: false
};

storiesOf("Frame", module)
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
  .add("default", () => <Frame>Some text here</Frame>)
  .add("withTitle", () => <Frame title="Title here">Some text here</Frame>)
  .add("disabled", () => <Frame disabled>Some text here</Frame>);
