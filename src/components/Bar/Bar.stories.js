import React from 'react';
import { storiesOf } from '@storybook/react';

import { Bar, AppBar, Toolbar, Button } from 'react95';

storiesOf('Bar', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: 'teal'
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => (
    <AppBar>
      <Toolbar>
        <Bar />
        <Button variant='menu'>Edit</Button>
        <Button variant='menu' disabled>
          Save
        </Button>
        <Bar />
      </Toolbar>
    </AppBar>
  ));
