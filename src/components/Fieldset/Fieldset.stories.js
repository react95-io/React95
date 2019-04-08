import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Fieldset from "./Fieldset";
import Window from "../Window/Window";
import WindowContent from "../WindowContent/WindowContent";
import Checkbox from "../Checkbox/Checkbox";

storiesOf("Fieldset", module)
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
  .add("default", () => (
    <Window>
      <WindowContent>
        <Fieldset>Some content here 😍</Fieldset>
      </WindowContent>
    </Window>
  ))
  .add("with label", () => (
    <Window>
      <WindowContent>
        <Fieldset label="Label here">Some content here 😍</Fieldset>
      </WindowContent>
    </Window>
  ))
  .add("disabled", () => <DisabledFieldset />);

const DisabledFieldset = () => {
  const [state, setState] = useState(true);
  return (
    <Window>
      <WindowContent>
        <Fieldset
          label={
            <Checkbox
              style={{ margin: 0 }}
              label="Enable"
              checked={!state}
              value={!state}
              onChange={() => setState(!state)}
            />
          }
          disabled={state}
        >
          Some content here 😍
        </Fieldset>
      </WindowContent>
    </Window>
  );
};
