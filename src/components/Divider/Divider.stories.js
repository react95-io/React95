import React from 'react';

import Divider from './Divider';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';

export default {
  title: 'Divider',
  component: Divider,
  decorators: [
    story => (
      <div
        style={{
          padding: '5rem',
          background: 'teal'
        }}
      >
        {story()}
      </div>
    )
  ]
};

export const Default = () => (
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
);

Default.story = {
  name: 'default'
};
