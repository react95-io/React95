import { ComponentMeta } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { Separator, List, ListItem } from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Layout/Separator',
  component: Separator,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Separator>;

export function Default() {
  return (
    <>
      <List>
        <ListItem>Item 1</ListItem>
        <Separator />
        <ListItem>Item 2</ListItem>
        <Separator />
        <ListItem>Item 3</ListItem>
      </List>
      <List inline style={{ margin: 30 }}>
        <ListItem>Item 1</ListItem>
        <Separator orientation='vertical' size='43px' />
        <ListItem>Item 2</ListItem>
        <Separator orientation='vertical' size='43px' />
        <ListItem>Item 3</ListItem>
      </List>
    </>
  );
}

Default.story = {
  name: 'default'
};
