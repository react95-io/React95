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
        <Fieldset>
          Some content here
          <span role='img' aria-label='😍'>
            😍
          </span>
        </Fieldset>
      </WindowContent>
    </Window>
  ))
  .add('with label', () => (
    <Window>
      <WindowContent>
        <Fieldset label='Label here'>
          Some content here
          <span role='img' aria-label='😍'>
            😍
          </span>
        </Fieldset>
      </WindowContent>
    </Window>
  ))
  .add('disabled', () => <DisabledFieldset />)
  .add('flat', () => <FlatFieldset />);

const FlatFieldset = () => {
  const [state, setState] = useState(true);
  return (
    <Window>
      <WindowContent>
        <Cutout
          style={{ padding: '1rem', background: 'white', width: '300px' }}
        >
          <p style={{ lineHeight: 1.3 }}>
            When you want to use Fieldset on a light background (like scrollable
            content), just use the flat variant:
          </p>
          <div
            style={{
              marginTop: '1.5rem'
            }}
          >
            <Fieldset
              variant='flat'
              label={
                <Checkbox
                  variant='flat'
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
          </div>
        </Cutout>
      </WindowContent>
    </Window>
  );
};
const DisabledFieldset = () => {
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
