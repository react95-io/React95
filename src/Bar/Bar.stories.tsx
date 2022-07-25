import { ComponentMeta } from '@storybook/react';
import { AppBar, Bar, Button, Toolbar } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Bar',
  component: Bar,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Bar>;

export function Default() {
  return (
    <AppBar>
      <Toolbar>
        <Bar size={35} />
        <Button variant='menu'>Edit</Button>
        <Button variant='menu' disabled>
          Save
        </Button>
        <Bar size={35} />
      </Toolbar>
    </AppBar>
  );
}

Default.story = {
  name: 'default'
};
