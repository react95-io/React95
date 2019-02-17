import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Select from "./Select";

export const actions = { onClick: action("onClick") };

const items = [
  { value: 1, title: 1 },
  { value: 2, title: 2 },
  { value: 3, title: 3 }
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
  .add("default", () => (
    <Select items={items} onSelect={onSelect} width={140} />
  ))
  .add("noShadow", () => <Select noShadow items={items} onSelect={onSelect} />);
