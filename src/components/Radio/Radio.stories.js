import React from "react";
import { storiesOf } from "@storybook/react";

import Radio from "./Radio";

storiesOf("Radio", module)
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
  .add("default", () => <RadioGroup />);

class RadioGroup extends React.Component {
  state = {
    checkedValue: null
  };

  handleChange = e => this.setState({ checkedValue: e.target.value });

  render() {
    const { checkedValue } = this.state;
    return (
      <>
        <Radio
          checked={checkedValue === "Pear"}
          onChange={this.handleChange}
          value="Pear"
          label="Pear"
          name="cars"
        />
        <Radio
          checked={checkedValue === "Orange"}
          onChange={this.handleChange}
          value="Orange"
          label="Orange"
          name="cars"
        />
        <Radio
          checked={checkedValue === "Grape"}
          onChange={this.handleChange}
          value="Grape"
          label="Grape"
          name="cars"
          disabled
        />
      </>
    );
  }
}
