import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { AppBar, Button, Handle, Toolbar } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Controls/Handle',
  component: Handle,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Handle>;

export function Default() {
  return (
    <AppBar>
      <Toolbar>
        <Handle size={32} />
        <Button variant='menu'>Edit</Button>
        <Button variant='menu' disabled>
          Save
        </Button>
        <Handle size={32} />
      </Toolbar>
    </AppBar>
  );
}

Default.story = {
  name: 'default'
};
