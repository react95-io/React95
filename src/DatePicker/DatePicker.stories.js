import React from 'react';

import { DatePicker } from 'react95';

export default {
  title: 'DatePicker',
  component: DatePicker,
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
  <DatePicker onAccept={date => console.log(date)} />
);

Default.story = {
  name: 'default'
};
