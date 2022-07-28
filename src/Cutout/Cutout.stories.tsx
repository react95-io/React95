import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Cutout, Window, WindowContent } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Cutout',
  component: Cutout,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Cutout>;

export function Default() {
  return (
    <Window>
      <WindowContent>
        <Cutout style={{ width: '300px', height: '200px' }}>
          <div>
            <p style={{ width: 400 }}>
              React95 is the best UI library ever created
            </p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
          </div>
        </Cutout>
      </WindowContent>
    </Window>
  );
}

Default.story = {
  name: 'default'
};
