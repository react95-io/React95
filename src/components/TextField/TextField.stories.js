import React from "react";
import { storiesOf } from "@storybook/react";

import styled from "styled-components";

import { TextField, Button, Toolbar, Cutout } from "../";

const onChange = e => console.log(e.target.value);

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf("TextField", module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
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
  ))
  .add("flat", () => (
    <StyledCutout style={{ padding: "2rem", width: "300px" }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add input field on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
        <label style={{ paddingRight: "0.5rem", fontSize: "1rem" }}>
          Name:
        </label>
        <TextField
          variant="flat"
          placeholder="type here..."
          width={150}
          onChange={onChange}
        />
      </div>
    </StyledCutout>
  ))
  .add("flat disabled", () => (
    <StyledCutout style={{ padding: "2rem", width: "300px" }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add input field on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
        <label style={{ paddingRight: "0.5rem", fontSize: "1rem" }}>
          Name:
        </label>
        <TextField
          variant="flat"
          disabled
          defaultValue="Can't type 😥"
          width={150}
          onChange={onChange}
        />
      </div>
    </StyledCutout>
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
        <Button onClick={this.reset} style={{ marginLeft: "2px" }}>
          Reset
        </Button>
      </Toolbar>
    );
  }
}
