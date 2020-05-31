import React from 'react';

import { Hourglass } from 'react95';

export default {
  title: 'Hourglass',
  component: Hourglass,
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

export const Default = () => <Hourglass size={32} />;

Default.story = {
  name: 'default'
};
