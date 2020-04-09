import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Checkbox, Cutout, Fieldset, Window, WindowContent } from '..';

storiesOf('Fieldset', module)
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
    <Window>
      <WindowContent>
        <Fieldset label='Label here'>
          Some content here
          <span role='img' aria-label='😍'>
            😍
          </span>
        </Fieldset>
        <br />
        <Fieldset label='Disabled' disabled>
          Some content here
          <span role='img' aria-label='😍'>
            😍
          </span>
        </Fieldset>
      </WindowContent>
    </Window>
  ))
  .add('flat', () => (
    <Window>
      <WindowContent>
        <Cutout
          style={{ padding: '1rem', background: 'white', width: '300px' }}
        >
          <Fieldset variant='flat' label='Label here'>
            Some content here
            <span role='img' aria-label='😍'>
              😍
            </span>
          </Fieldset>
          <br />
          <Fieldset variant='flat' label='Disabled' disabled>
            Some content here
            <span role='img' aria-label='😍'>
              😍
            </span>
          </Fieldset>
        </Cutout>
      </WindowContent>
    </Window>
  ))
  .add('toggle example', () => <FieldsetToggle />);

const FieldsetToggle = () => {
  const [state, setState] = useState(true);
  return (
    <Window>
      <WindowContent>
        <Fieldset
          label={
            <Checkbox
              style={{ margin: 0 }}
              label='Enable'
              checked={!state}
              value={!state}
              onChange={() => setState(!state)}
            />
          }
          disabled={state}
        >
          Some content here
          <span role='img' aria-label='😍'>
            😍
          </span>
        </Fieldset>
      </WindowContent>
    </Window>
  );
};
