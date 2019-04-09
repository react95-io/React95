import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Select from "./Select";

export const actions = { onClick: action("onClick") };

const items = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 }
];
const onChange = value => console.log(value);
storiesOf("Select", module)
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
  .add("fixed width", () => (
    <Select items={items} onChange={onChange} width={140} />
  ))
  .add("fixed height", () => (
    <Select items={items} onChange={onChange} height={100} width={140} />
  ))
  .add("no shadow", () => (
    <Select shadow={false} items={items} onChange={onChange} />
  ));
