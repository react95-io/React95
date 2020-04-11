import React from 'react';

import Bar from './Bar';
import AppBar from '../AppBar/AppBar';
import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';

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
