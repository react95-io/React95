import React from "react";
import { storiesOf } from "@storybook/react";

import TextField from "./TextField";

import { Button, Toolbar } from "../";

const onChange = e => console.log(e.target.value);

storiesOf("TextField", module)
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
  .add("default", () => <TextField defaultValue="" onChange={onChange} />)
  .add("controlled", () => <ControlledTextFieldExample />)
  .add("no shadow", () => (
    <TextField defaultValue="No shadow" shadow={false} onChange={onChange} />
  ))
  .add("disabled", () => (
    <TextField defaultValue="Can't type 😥" disabled onChange={onChange} />
  ))
  .add("custom width", () => (
    <TextField defaultValue="Custom width" width={150} onChange={onChange} />
  ));

class ControlledTextFieldExample extends React.Component {
  state = {
    value: "default value"
  };
  handleChange = e => this.setState({ value: e.target.value });
  reset = () => this.setState({ value: "" });
  render() {
    return (
      <Toolbar>
        <TextField value={this.state.value} onChange={this.handleChange} />
        <Button onClick={this.reset}>Reset</Button>
      </Toolbar>
    );
  }
}
