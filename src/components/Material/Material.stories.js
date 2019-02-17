import React from "react";
import { storiesOf } from "@storybook/react";

import Material from "./Material";

storiesOf("Material", module)
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
    <Material>
      <ul>
        <li>something here</li>
        <li>something here</li>
        <li>something here</li>
        <li>something here</li>
      </ul>
    </Material>
  ))
  .add("hollow", () => (
    <Material hollow>
      <ul>
        <li>something here</li>
        <li>something here</li>
        <li>something here</li>
        <li>something here</li>
      </ul>
    </Material>
  ));
