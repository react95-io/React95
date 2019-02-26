import React from "react";
import { storiesOf } from "@storybook/react";

import Tooltip from "./Tooltip";
import Button from "../Button/Button";

storiesOf("Tooltip", module)
  .addDecorator(story => (
    <div
      style={{
        padding: "5rem",
        background: "#008080"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => (
    <Tooltip text="Nothing really 🤷‍">
      <Button>Whad do I do?</Button>
    </Tooltip>
  ));
