import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

const props = {
  type: "button",
  onClick: null,
  style: {},
  disabled: false,
  fullWidth: false,
  size: "m",
  square: false,
  active: false
};

export const actions = { onClick: action("onClick") };

storiesOf("Button", module)
  // .addDecorator(story => (
  //   <div
  //     style={{
  //       padding: "5rem",
  //       background: "teal"
  //     }}
  //   >
  //     {story()}
  //   </div>
  // ))
  .add("default", () => <Button {...actions}>Button</Button>)
  .add("accent", () => (
    <Button {...actions} accent>
      Button
    </Button>
  ))
  .add("disabled", () => (
    <Button disabled {...actions}>
      Disabled
    </Button>
  ))
  .add("fullWidth", () => (
    <Button fullWidth {...actions}>
      Full width
    </Button>
  ))
  .add("square", () => (
    <Button {...actions} square>
      🎂
    </Button>
  ))
  .add("size XL", () => (
    <Button {...actions} size={"xl"} square>
      💖
    </Button>
  ))
  .add("flat", () => (
    <Button {...actions} flat size="s" accent>
      File
    </Button>
  ));
