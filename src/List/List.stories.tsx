import { ComponentMeta } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { Handle, List, ListItem, Separator } from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
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
} as ComponentMeta<typeof List>;

export function Default() {
  return (
    <>
      <List>
        <ListItem primary>Photos</ListItem>
        <ListItem
          as='a'
          // TODO: Come up with a more elegant way to allow props when `as` is used
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          href='https://expensive.toys'
          target='_blank'
        >
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
        <Handle size={38} />
        <ListItem>Tackle</ListItem>
        <ListItem>Growl</ListItem>
        <ListItem disabled>Razor Leaf</ListItem>
      </List>
      <List>
        <ListItem primary size='sm'>
          View
        </ListItem>
        <Separator />
        <ListItem size='sm'>Paste</ListItem>
        <ListItem size='sm'>Paste Shortcut</ListItem>
        <ListItem size='sm'>Undo Copy</ListItem>
        <Separator />
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
}

Default.story = {
  name: 'default'
};
