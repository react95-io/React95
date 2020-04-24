import React from 'react';
import { storiesOf } from '@storybook/react';

import { Anchor } from 'react95';

storiesOf('Anchor', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: '#ced0cf'
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => (
    <Anchor href='https://expensive.toys' target='_blank'>
      Expensive Toys
    </Anchor>
  ))
  .add('within text', () => (
    <h1>
      Everybody needs
      <Anchor href='https://expensive.toys' target='_blank'>
        Expensive Toys
      </Anchor>
    </h1>
  ));
