import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TextField from "./TextField";
const actions = { onChange: action("onChange") };

storiesOf("TextField", module)
  .addDecorator(story => (
    <div
      style={{
        padding: "5rem",
        background: "#ced0cf"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => (
    <TextField value={"If you read this it's already too late"} {...actions} />
  ))
  .add("disabled", () => (
    <TextField value="Can't type 😥" disabled {...actions} />
  ))
  .add("custom width", () => (
    <TextField value="Custom width" width={120} {...actions} />
  ));
