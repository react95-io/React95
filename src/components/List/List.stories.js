import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import List from "./List";
import ListItem from "../ListItem/ListItem";
import Bar from "../Bar/Bar";

export const actions = { onClick: action("onClick") };

storiesOf("List", module)
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
  .add("default", () => (
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ))
  .add("inline", () => (
    <List inline={true}>
      <ListItem square>🌿</ListItem>
      <Bar />
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ))
  .add("no shadow", () => (
    <List shadow={false}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ))
  .add("fullWidth", () => (
    <List fullWidth>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ));
