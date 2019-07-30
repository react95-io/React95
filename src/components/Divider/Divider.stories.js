import React from 'react';
import { storiesOf } from '@storybook/react';

import Divider from './Divider';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';

storiesOf('Divider', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: 'teal',
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => (
    <List>
      <ListItem>Item 1</ListItem>
      <Divider />
      <ListItem>Item 2</ListItem>
      <Divider />
      <ListItem>Item 3</ListItem>
    </List>
  ))
  .add('vertical', () => (
    <List inline>
      <ListItem>Item 1</ListItem>
      <Divider vertical size="lg" />
      <ListItem>Item 2</ListItem>
      <Divider vertical size="lg" />
      <ListItem>Item 3</ListItem>
    </List>
  ));
