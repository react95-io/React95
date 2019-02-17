import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Fab from "./Fab";

const props = {
  type: "button",
  onClick: null,
  style: {}
};

export const actions = { onClick: action("onClick") };

storiesOf("Fab", module)
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
  .add("default", () => <Fab {...actions}>+</Fab>);
