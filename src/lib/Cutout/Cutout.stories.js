import React from "react";
import { storiesOf } from "@storybook/react";

import Cutout from "./Cutout";

storiesOf("Cutout", module)
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
    <Cutout>
      <h1>swag </h1>
    </Cutout>
  ));
