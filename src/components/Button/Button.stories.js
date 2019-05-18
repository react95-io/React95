import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import styled from "styled-components";

import { Button, Window, WindowContent, Cutout, Toolbar } from "../";
export const actions = { onClick: action("onClick") };

storiesOf("Button", module)
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
  .add("default", () => <Button {...actions}>default</Button>)
  .add("disabled", () => (
    <Button disabled {...actions}>
      Disabled
    </Button>
  ))
  .add("active", () => (
    <Button active {...actions}>
      Active
    </Button>
  ))
  .add("fullWidth", () => (
    <Button fullWidth {...actions}>
      Full width
    </Button>
  ))
  .add("square", () => (
    <Button {...actions} square>
      🎂
    </Button>
  ))
  .add("size large", () => (
    <Button {...actions} size={"lg"} square>
      💖
    </Button>
  ))
  .add("srat", () => (
    <Button {...actions} srat size="sm" accent>
      File
    </Button>
  ))
  .add("flat", () => (
    <Window>
      <WindowContent>
        <Cutout
          style={{ padding: "1rem", background: "white", width: "300px" }}
        >
          <p style={{ lineHeight: 1.3 }}>
            When you want to use Buttons on a light background (like scrollable
            content), just use the flat variant:
          </p>
          <div
            style={{
              marginTop: "1.5rem"
            }}
          >
            <Toolbar>
              <Button {...actions} flat fullWidth accent>
                OK
              </Button>
              <Button {...actions} flat disabled fullWidth accent>
                Cancel
              </Button>
            </Toolbar>
          </div>
        </Cutout>
      </WindowContent>
    </Window>
  ));
