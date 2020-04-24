import React from 'react';

import { Tooltip, Button } from 'react95';

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [
    story => (
      <div
        style={{
          padding: '5rem',
          background: '#008080'
        }}
      >
        {story()}
      </div>
    )
  ]
};

export const Default = () => (
  <Tooltip text='I see you! 🤷‍' enterDelay={100} leaveDelay={500}>
    <Button>Hover me</Button>
  </Tooltip>
);

Default.story = {
  name: 'default'
};
