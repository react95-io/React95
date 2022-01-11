import React from 'react';
import styled from 'styled-components';

import { Bar, AppBar, Toolbar, Button } from 'react95';

export default {
  title: 'Bar',
  component: Bar,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export const Default = () => (
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

Default.story = {
  name: 'default'
};
