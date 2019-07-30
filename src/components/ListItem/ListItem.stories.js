import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ListItem, List, Divider } from '..';

const actions = { onClick: action('onClick') };

storiesOf('ListItem', module)
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
      <ListItem {...actions}>Item 1</ListItem>
      <ListItem {...actions}>Item 2</ListItem>
      <ListItem {...actions}>Item 3</ListItem>
    </List>
  ))
  .add('disabled', () => (
    <List>
      <ListItem {...actions} disabled>
        disabled
      </ListItem>
      <ListItem {...actions} disabled>
        disabled
      </ListItem>
      <ListItem {...actions} disabled>
        disabled
      </ListItem>
    </List>
  ))
  .add('square', () => (
    <List>
      <ListItem {...actions} square>
        <span role="img" aria-label="😎">😎</span>
      </ListItem>
      <ListItem {...actions} square>
        <span role="img" aria-label="🤖">🤖</span>
      </ListItem>
      <ListItem {...actions} square>
        <span role="img" aria-label="🎁">🎁</span>
      </ListItem>
    </List>
  ))
  .add('size small', () => (
    <List>
      <ListItem size="sm">View</ListItem>
      <Divider />
      <ListItem size="sm">Paste</ListItem>
      <ListItem size="sm">Paste Shortcut</ListItem>
      <ListItem size="sm">Undo Copy</ListItem>
      <Divider />
      <ListItem size="sm">Properties</ListItem>
    </List>
  ))
  .add('render as link', () => (
    <List>
      <ListItem {...actions}>Normal item</ListItem>
      <ListItem
        {...actions}
        as="a"
        href="https://expensive.toys"
        target="_blank"
      >
        <span role="img" aria-label="🔗">🔗</span>
        Link!
      </ListItem>
    </List>
  ));
