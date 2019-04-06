import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import styled from "styled-components";

import Button from "./Button";
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
  .add("default", () => <Button {...actions}>default</Button>)
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
