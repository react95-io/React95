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
      <ListItem>Photos</ListItem>
      <ListItem>Videos</ListItem>
      <ListItem>Other</ListItem>
    </List>
  ))
  .add("inline", () => (
    <List inline={true}>
      <ListItem square disabled>
        🌿
      </ListItem>
      <Bar />
      <ListItem>Tackle</ListItem>
      <ListItem>Growl</ListItem>
      <ListItem disabled>Razor Leaf</ListItem>
    </List>
  ))
  .add("no shadow", () => (
    <List shadow={false}>
      <ListItem>Photos</ListItem>
      <ListItem>Videos</ListItem>
      <ListItem>Other</ListItem>
    </List>
  ))
  .add("fullWidth", () => (
    <List fullWidth>
      <ListItem>Photos</ListItem>
      <ListItem>Videos</ListItem>
      <ListItem>Other</ListItem>
    </List>
  ));
