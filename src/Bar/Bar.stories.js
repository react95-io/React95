import React from 'react';

import { Bar, AppBar, Toolbar, Button } from 'react95';

export default {
  title: 'Bar',
  component: Bar,
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
