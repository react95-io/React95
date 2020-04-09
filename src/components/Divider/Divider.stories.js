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
        background: 'teal'
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => (
    <>
      <List>
        <ListItem>Item 1</ListItem>
        <Divider />
        <ListItem>Item 2</ListItem>
        <Divider />
        <ListItem>Item 3</ListItem>
      </List>
      <List inline style={{ margin: 30 }}>
        <ListItem>Item 1</ListItem>
        <Divider orientation='vertical' size='43px' />
        <ListItem>Item 2</ListItem>
        <Divider orientation='vertical' size='43px' />
        <ListItem>Item 3</ListItem>
      </List>
    </>
  ));
