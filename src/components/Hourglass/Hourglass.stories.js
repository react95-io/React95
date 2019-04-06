import React from "react";
import { storiesOf } from "@storybook/react";

import Hourglass from "./Hourglass";

storiesOf("Hourglass", module)
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
  .add("default", () => <Hourglass size={32} />);
