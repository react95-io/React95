import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Fieldset from "./Fieldset";
import Window from "../Window/Window";
import WindowContent from "../WindowContent/WindowContent";

const props = {
  title: "Title here",
  disabled: false
};

storiesOf("Fieldset", module)
  .addDecorator(story => (
    <div
      style={{
        padding: "5rem"
        // background: "teal"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => (
    <Window>
      <WindowContent>
        <Fieldset>Some content here 😍</Fieldset>
      </WindowContent>
    </Window>
  ))
  .add("withTitle", () => (
    <Window>
      <WindowContent>
        <Fieldset title="Title here">Some content here 😍</Fieldset>
      </WindowContent>
    </Window>
  ))
  .add("disabled", () => (
    <Window>
      <WindowContent>
        <Fieldset title="Disabled" disabled>
          Some content here 😍
        </Fieldset>
      </WindowContent>
    </Window>
  ));
