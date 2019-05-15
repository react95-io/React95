import React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from "./Checkbox";
import { Fieldset, Toolbar, Button } from "../";
storiesOf("Checkbox", module)
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
  .add("controlled group", () => <ControlledCheckboxGroupExample />)
  .add("uncontrolled", () => (
    <Checkbox
      defaultChecked={true}
      value="single"
      label="I'm single 😥 ...and no one's controlling me 😎"
    />
  ))
  .add("flat", () => (
    <Checkbox
      defaultChecked={true}
      value="single"
      label="I'm a flat checkbox"
      flat={true}
    />
  ));

class ControlledCheckboxGroupExample extends React.Component {
  state = {
    steak: true,
    tortilla: false,
    pizza: false
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState(prevState => ({
      [value]: !prevState[value]
    }));
  };
  reset = () =>
    this.setState({
      steak: false,
      tortilla: false,
      pizza: false
    });
  render() {
    const { steak, tortilla, pizza } = this.state;
    console.log(steak, tortilla, pizza);
    return (
      <div style={{ maxWidth: "250px" }}>
        <Fieldset label="Party food">
          <Checkbox
            checked={steak}
            onChange={this.handleChange}
            value="steak"
            label="Steak 🥩"
            name="food"
          />
          <br />
          <Checkbox
            checked={tortilla}
            onChange={this.handleChange}
            value="tortilla"
            label="Tortilla 🌯"
            name="food"
          />
          <br />
          <Checkbox
            checked={pizza}
            onChange={this.handleChange}
            value="pizza"
            label="Pizza 🍕"
            name="food"
            disabled
          />
        </Fieldset>
        <Button fullWidth style={{ marginTop: "1em" }} onClick={this.reset}>
          Diet mode
        </Button>
      </div>
    );
  }
}
