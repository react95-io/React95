import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";
import LogoIcon from "../Icon/LogoIcon";
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
  .add("disabled", () => (
    <Button disabled {...actions}>
      Disabled
    </Button>
  ))
  .add("active", () => (
    <Button active {...actions}>
      Active
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
  .add("size large", () => (
    <Button {...actions} size={"lg"} square>
      💖
    </Button>
  ))
  .add("flat", () => (
    <Button {...actions} flat size="sm" accent>
      File
    </Button>
  ));
