import React from 'react';
import { storiesOf } from '@storybook/react';

import DatePicker from './DatePicker';

storiesOf('DatePicker', module)
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
  .add('default', () => <DatePicker onAccept={date => console.log(date)} />);
