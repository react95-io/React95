import React from "react";
import { storiesOf } from "@storybook/react";

import { Radio, Cutout, Fieldset, Window, WindowContent } from "../";
storiesOf("Radio", module)
  .addDecorator(story => (
    <div
      style={{
        padding: "5rem",
        background: "teal"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => <RadioGroup />)
  .add("flat", () => <FlatRadioGroup />);

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
          <Fieldset label="Fruits">
            <Radio
              checked={checkedValue === "Pear"}
              onChange={this.handleChange}
              value="Pear"
              label="🍐 Pear"
              name="fruits"
            />
            <br />
            <Radio
              checked={checkedValue === "Orange"}
              onChange={this.handleChange}
              value="Orange"
              label="🍊 Orange"
              name="fruits"
            />
            <br />
            <Radio
              checked={checkedValue === "Kiwi"}
              onChange={this.handleChange}
              value="Kiwi"
              label="🥝 Kiwi"
              name="fruits"
            />
            <br />
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

class FlatRadioGroup extends React.Component {
  state = {
    checkedValue: "Pear"
  };

  handleChange = e => this.setState({ checkedValue: e.target.value });

  render() {
    const { checkedValue } = this.state;
    return (
      <Window>
        <WindowContent>
          <Cutout
            style={{ padding: "2rem", background: "white", width: "300px" }}
          >
            <p style={{ lineHeight: 1.3 }}>
              When you want to use radio buttons on a light background (like
              scrollable content), just use the flat variant:
            </p>
            <div
              style={{
                marginTop: "1rem"
              }}
            >
              <Radio
                flat
                checked={checkedValue === "Pear"}
                onChange={this.handleChange}
                value="Pear"
                label="🍐 Pear"
                name="fruits"
              />
              <br />
              <Radio
                flat
                checked={checkedValue === "Orange"}
                onChange={this.handleChange}
                value="Orange"
                label="🍊 Orange"
                name="fruits"
              />
              <br />
              <Radio
                flat
                checked={checkedValue === "Kiwi"}
                onChange={this.handleChange}
                value="Kiwi"
                label="🥝 Kiwi"
                name="fruits"
              />
              <br />
              <Radio
                flat
                checked={checkedValue === "Grape"}
                onChange={this.handleChange}
                value="Grape"
                label="🍇 Grape"
                name="fruits"
                disabled
              />
            </div>
          </Cutout>
        </WindowContent>
      </Window>
    );
  }
}
