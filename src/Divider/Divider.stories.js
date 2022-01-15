import React from 'react';
import styled from 'styled-components';

import { Divider, List, ListItem } from 'react95';

export default {
  title: 'Divider',
  component: Divider,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

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
