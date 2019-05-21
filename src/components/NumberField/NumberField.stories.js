import React from "react";
import { storiesOf } from "@storybook/react";

import { NumberField, Cutout } from "../";

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
  ))
  .add("flat", () => (
    <Cutout style={{ padding: "2rem", background: "white", width: "300px" }}>
      <p style={{ lineHeight: 1.3, marginBottom: "1rem" }}>
        When you want to use NumberField on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <NumberField
        variant="flat"
        shadow={false}
        value={1991}
        onChange={value => console.log(value)}
      />
    </Cutout>
  ));
