import React from "react";
import { storiesOf } from "@storybook/react";

import DatePicker from "./DatePicker";

storiesOf("DatePicker", module)
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
    <DatePicker onCancel={() => null} onChange={date => console.log(date)} />
  ));
