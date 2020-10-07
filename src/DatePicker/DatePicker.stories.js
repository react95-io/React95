import React from 'react';
import DatePicker from './DatePicker';

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
  <DatePicker
    onAccept={date => alert(`selected day is: ${date}`)}
    onCancel={() => alert('Cancel')}
  />
);

Default.story = {
  name: 'default'
};
