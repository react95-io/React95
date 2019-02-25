import React from "react";
import { storiesOf } from "@storybook/react";

import NumberField from "./NumberField";

storiesOf("NumberField", module)
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
    <NumberField value={1991} onChange={value => console.log(value)} />
  ))
  .add("fixed width", () => (
    <NumberField
      value={1991}
      width={94}
      onChange={value => console.log(value)}
    />
  ))
  .add("disabled", () => (
    <NumberField disabled value={1991} onChange={value => console.log(value)} />
  ))
  .add("disabled keyboard input", () => (
    <NumberField
      disableKeyboardInput
      value={1991}
      onChange={value => console.log(value)}
    />
  ))
  .add("no shadow", () => (
    <NumberField
      shadow={false}
      value={1991}
      onChange={value => console.log(value)}
    />
  ));
