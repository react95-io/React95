import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { NumberField, Cutout } from "../";

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;

storiesOf("NumberField", module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add("default", () => (
    <NumberField value={1991} onChange={value => console.log(value)} />
  ))
  .add("fixed width", () => (
    <NumberField
      value={1991}
      width={94}
      onChange={value => console.log(value)}
    />
  ))
  .add("disabled", () => (
    <NumberField disabled value={1991} onChange={value => console.log(value)} />
  ))
  .add("disabled keyboard input", () => (
    <NumberField
      disableKeyboardInput
      value={1991}
      onChange={value => console.log(value)}
    />
  ))
  .add("no shadow", () => (
    <NumberField
      shadow={false}
      value={1991}
      onChange={value => console.log(value)}
    />
  ))
  .add("flat", () => (
    <StyledCutout style={{ padding: "2rem", width: "300px" }}>
      <p style={{ lineHeight: 1.3, marginBottom: "1rem" }}>
        When you want to use NumberField on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <NumberField
        variant="flat"
        shadow={false}
        value={1991}
        onChange={value => console.log(value)}
      />
    </StyledCutout>
  ));
