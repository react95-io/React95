import React from "react";
import { storiesOf } from "@storybook/react";

import TextField from "./TextField";

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
  .add("default", () => <TextFieldControl />)
  .add("disabled", () => <TextFieldControl disabled />)
  .add("multiline", () => <TextFieldControl multiline rows={10} />);

class TextFieldControl extends React.Component {
  state = {
    value: "Some text"
  };

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    const { value } = this.state;
    const { disabled, multiline, rows } = this.props;
    return (
      <>
        <TextField
          disabled={disabled}
          value={value}
          onChange={this.handleChange}
          multiline={multiline}
          rows={rows}
        />
      </>
    );
  }
}
