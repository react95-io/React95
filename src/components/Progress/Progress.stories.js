import React from "react";
import { storiesOf } from "@storybook/react";

import Progress from "./Progress";

storiesOf("Progress", module)
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
  .add("default", () => <Progress percent={52} />)
  .add("no shadow", () => <Progress percent={52} shadow={false} />);
