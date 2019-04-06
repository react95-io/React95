import React from "react";
import { storiesOf } from "@storybook/react";

import Radio from "./Radio";
import Fieldset from "../Fieldset/Fieldset";
import Window from "../Window/Window";
import WindowContent from "../WindowContent/WindowContent";
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
    checkedValue: "Pear"
  };

  handleChange = e => this.setState({ checkedValue: e.target.value });

  render() {
    const { checkedValue } = this.state;
    return (
      <Window>
        <WindowContent>
          <Fieldset label="Friuts">
            <Radio
              checked={checkedValue === "Pear"}
              onChange={this.handleChange}
              value="Pear"
              label="🍐 Pear"
              name="fruits"
            />
            <Radio
              checked={checkedValue === "Orange"}
              onChange={this.handleChange}
              value="Orange"
              label="🍊 Orange"
              name="fruits"
            />
            <Radio
              checked={checkedValue === "Kiwi"}
              onChange={this.handleChange}
              value="Kiwi"
              label="🥝 Kiwi"
              name="fruits"
            />
            <Radio
              checked={checkedValue === "Grape"}
              onChange={this.handleChange}
              value="Grape"
              label="🍇 Grape"
              name="fruits"
              disabled
            />
          </Fieldset>
        </WindowContent>
      </Window>
    );
  }
}
