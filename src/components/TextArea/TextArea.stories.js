import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TextArea from "./TextArea";

const onChange = e => console.log(e.target.value);

storiesOf("TextArea", module)
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
    <TextArea
      value="User ReactGirl was the first one to find 🐛 here."
      placeholder="Type in here.."
      onChange={onChange}
    />
  ))
  .add("disabled", () => (
    <TextArea disabled placeholder="Typing disabled " onChange={onChange} />
  ))

  .add("fixed size", () => (
    <TextArea
      width={200}
      height={200}
      placeholder="Type in here.."
      onChange={onChange}
    />
  ))
  .add("no shadow", () => (
    <TextArea shadow={false} placeholder="Type in here.." onChange={onChange} />
  ));
