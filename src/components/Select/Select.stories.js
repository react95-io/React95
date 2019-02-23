import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Select from "./Select";

export const actions = { onClick: action("onClick") };

const items = [
  { value: 1, title: 1 },
  { value: 2, title: 2 },
  { value: 3, title: 3 },
  { value: 4, title: 4 },
  { value: 5, title: 5 },
  { value: 6, title: 6 },
  { value: 7, title: 7 }
];
const onSelect = value => console.log(value);
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
    <Select items={items} onSelect={onSelect} width={140} />
  ))
  .add("fixed height", () => (
    <Select items={items} onSelect={onSelect} height={100} width={140} />
  ))
  .add("no shadow", () => (
    <Select shadow={false} items={items} onSelect={onSelect} />
  ));
