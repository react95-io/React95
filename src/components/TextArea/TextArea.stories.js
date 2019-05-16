import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TextArea from "./TextArea";
import { Button, Cutout } from "../";

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
      defaultValue="User ReactGirl was the first one to find 🐛 here."
      placeholder="Type in here.."
      onChange={onChange}
    />
  ))
  .add("controlled", () => <ControlledTextAreaExample />)
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
  ))
  .add("flat", () => (
    <Cutout style={{ padding: "2rem", background: "white", width: "300px" }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add text area on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
        <TextArea
          flat
          width={"100%"}
          height={200}
          placeholder="Type in here.."
          onChange={onChange}
        />
      </div>
    </Cutout>
  ))
  .add("flat disabled", () => (
    <Cutout style={{ padding: "2rem", background: "white", width: "300px" }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add text area on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
        <TextArea
          flat
          disabled
          width={"100%"}
          height={200}
          placeholder="Type in here.."
          onChange={onChange}
        />
      </div>
    </Cutout>
  ));
class ControlledTextAreaExample extends React.Component {
  state = {
    value: "default value"
  };
  handleChange = e => this.setState({ value: e.target.value });
  reset = () => this.setState({ value: "" });
  render() {
    return (
      <>
        <TextArea value={this.state.value} onChange={this.handleChange} />
        <br />
        <Button style={{ marginTop: "0.5em" }} onClick={this.reset}>
          Reset
        </Button>
      </>
    );
  }
}
