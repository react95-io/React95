import React from "react";
import { storiesOf } from "@storybook/react";

import Chip from "./Chip";

storiesOf("Chip", module)
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
    <Chip>
      <h1>🌼</h1>
    </Chip>
  ));
