import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox, GroupBox, ScrollView, Window, WindowContent } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Controls/GroupBox',
  component: GroupBox,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof GroupBox>;

export function Default() {
  return (
    <Window>
      <WindowContent>
        <GroupBox label='Label here'>
          Some content here
          <span role='img' aria-label='😍'>
            😍
          </span>
        </GroupBox>
        <br />
        <GroupBox label='Disabled' disabled>
          Some content here
          <span role='img' aria-label='😍'>
            😍
          </span>
        </GroupBox>
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
        <ScrollView
          style={{ padding: '1rem', background: 'white', width: '300px' }}
        >
          <GroupBox variant='flat' label='Label here'>
            Some content here
            <span role='img' aria-label='😍'>
              😍
            </span>
          </GroupBox>
          <br />
          <GroupBox variant='flat' label='Disabled' disabled>
            Some content here
            <span role='img' aria-label='😍'>
              😍
            </span>
          </GroupBox>
        </ScrollView>
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
        <GroupBox
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
        </GroupBox>
      </WindowContent>
    </Window>
  );
}

ToggleExample.story = {
  name: 'toggle example'
};
