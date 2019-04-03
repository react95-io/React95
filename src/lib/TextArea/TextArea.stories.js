import React from "react";
import { storiesOf } from "@storybook/react";

import TextArea from "./TextArea";

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
  .add("default", () => <TextArea placeholder="Type in here.." />)
  .add("disabled", () => <TextArea disabled placeholder="Typing disabled " />)

  .add("fixed size", () => (
    <TextArea width={200} height={200} placeholder="Type in here.." />
  ))
  .add("no shadow", () => (
    <TextArea shadow={false} placeholder="Type in here.." />
  ));
