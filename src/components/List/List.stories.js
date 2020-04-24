import React from 'react';
import styled from 'styled-components';

import { List, ListItem, Bar, Divider } from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: teal;
  display: flex;
  align-items: center;
  & > * {
    margin-right: 1rem;
  }
`;

export default {
  title: 'List',
  component: List,
  subcomponents: { ListItem },
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export const Default = () => (
  <>
    <List>
      <ListItem>Photos</ListItem>
      <ListItem as='a' href='https://expensive.toys' target='_blank'>
        Link
      </ListItem>
      <ListItem disabled>Other</ListItem>
    </List>
    <List inline>
      <ListItem square disabled>
        <span role='img' aria-label='🌿'>
          🌿
        </span>
      </ListItem>
      <Bar size={38} />
      <ListItem>Tackle</ListItem>
      <ListItem>Growl</ListItem>
      <ListItem disabled>Razor Leaf</ListItem>
    </List>
    <List>
      <ListItem size='sm'>View</ListItem>
      <Divider />
      <ListItem size='sm'>Paste</ListItem>
      <ListItem size='sm'>Paste Shortcut</ListItem>
      <ListItem size='sm'>Undo Copy</ListItem>
      <Divider />
      <ListItem size='sm'>Properties</ListItem>
    </List>
    <List>
      <ListItem square>
        <span role='img' aria-label='😎'>
          😎
        </span>
      </ListItem>
      <ListItem square>
        <span role='img' aria-label='🤖'>
          🤖
        </span>
      </ListItem>
      <ListItem square>
        <span role='img' aria-label='🎁'>
          🎁
        </span>
      </ListItem>
    </List>
  </>
);

Default.story = {
  name: 'default'
};
