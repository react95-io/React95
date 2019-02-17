import React from "react";
import { storiesOf } from "@storybook/react";

import NumberField from "./NumberField";

storiesOf("NumberField", module)
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
    <NumberField
      width={200}
      value={1991}
      onChange={value => console.log(value)}
    />
  ));
