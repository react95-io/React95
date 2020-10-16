import React from 'react';

import { Desktop } from 'react95';

export default {
  title: 'Desktop',
  component: Desktop,
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
  <Desktop backgroundStyles={{ background: 'blue' }} />
);

Default.story = {
  name: 'default'
};
