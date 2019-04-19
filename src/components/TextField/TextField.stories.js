import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import TextField from "./TextField";
const onChange = e => console.log(e.target.value);

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
  .add("default", () => <TextField value="" onChange={onChange} />)
  .add("no shadow", () => (
    <TextField value="No shadow" shadow={false} onChange={onChange} />
  ))
  .add("disabled", () => (
    <TextField value="Can't type 😥" disabled onChange={onChange} />
  ))
  .add("custom width", () => (
    <TextField value="Custom width" width={150} onChange={onChange} />
  ));
