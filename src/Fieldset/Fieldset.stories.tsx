import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Checkbox, Cutout, Fieldset, Window, WindowContent } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Fieldset',
  component: Fieldset,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Fieldset>;

export function Default() {
  return (
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
}

Default.story = {
  name: 'default'
};

export function Flat() {
  return (
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
  );
}

Flat.story = {
  name: 'flat'
};

export function ToggleExample() {
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
}

ToggleExample.story = {
  name: 'toggle example'
};
