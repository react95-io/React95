import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import styled from "styled-components";

import Fab from "./Fab";
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
  .add("default", () => <Fab {...actions} />)
  .add("extended", () => (
    <Fab extended {...actions}>
      Hi there
    </Fab>
  ))
  .add("disabled", () => (
    <Fab disabled {...actions}>
      🔥
    </Fab>
  ))
  .add("active", () => (
    <Fab active {...actions}>
      🔥
    </Fab>
  ))
  .add("square", () => (
    <Fab {...actions} square>
      🎂
    </Fab>
  ))
  .add("size large", () => (
    <Fab {...actions} size={"lg"} square>
      💖
    </Fab>
  ));
