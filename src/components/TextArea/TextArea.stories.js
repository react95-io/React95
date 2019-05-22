import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import styled from "styled-components";

import { TextArea, Button, Cutout } from "../";

const onChange = e => console.log(e.target.value);
const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf("TextArea", module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
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
    <StyledCutout style={{ padding: "2rem", width: "300px" }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add text area on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
        <TextArea
          variant="flat"
          width={"100%"}
          height={200}
          placeholder="Type in here.."
          onChange={onChange}
        />
      </div>
    </StyledCutout>
  ))
  .add("flat disabled", () => (
    <StyledCutout style={{ padding: "2rem", width: "300px" }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add text area on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
        <TextArea
          variant="flat"
          disabled
          width={"100%"}
          height={200}
          placeholder="Type in here.."
          onChange={onChange}
        />
      </div>
    </StyledCutout>
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
