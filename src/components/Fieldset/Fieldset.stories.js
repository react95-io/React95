import React, { useState } from 'react';

import { Checkbox, Cutout, Fieldset, Window, WindowContent } from '..';

export default {
  title: 'Fieldset',
  component: Fieldset,
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
);

Default.story = {
  name: 'default'
};

export const Flat = () => (
  <Window>
    <WindowContent>
      <Cutout style={{ padding: '1rem', background: 'white', width: '300px' }}>
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
);

Flat.story = {
  name: 'flat'
};

export const ToggleExample = () => {
  const [state, setState] = useState(true);
  return (
    <Window>
      <WindowContent>
        <Fieldset
          disabled={state}
          label={
            <Checkbox
              style={{ margin: 0 }}
              label='Enable'
              checked={!state}
              value={!state}
              onChange={() => setState(!state)}
            />
          }
        >
          Some content here
          <span role='img' aria-label='emoji in love'>
            😍
          </span>
        </Fieldset>
      </WindowContent>
    </Window>
  );
};

ToggleExample.story = {
  name: 'toggle example'
};
