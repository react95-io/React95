import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Select, Window, WindowContent, Cutout } from '..';

const items = [
  { value: 1, label: '⚡ Pikachu' },
  { value: 2, label: '🌿 Bulbasaur' },
  { value: 3, label: '💦 Squirtle' },
  { value: 4, label: '🔥 Charizard' },
  { value: 5, label: '🎤 Jigglypuff' },
  { value: 6, label: '🛌🏻 Snorlax' },
  { value: 7, label: '⛰ Geodude' }
];

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;

const onChange = value => console.log(value);

storiesOf('Select', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('fixed width', () => (
    <Select items={items} onChange={onChange} width={150} />
  ))
  .add('fixed height', () => (
    <Select items={items} onChange={onChange} height={100} width={150} />
  ))
  .add('no shadow', () => (
    <Select shadow={false} items={items} onChange={onChange} />
  ))
  .add('flat', () => (
    <Window>
      <WindowContent>
        <Cutout
          style={{
            padding: '1rem',
            paddingBottom: '3rem',
            background: 'white',
            width: '300px'
          }}
        >
          <p style={{ lineHeight: 1.3 }}>
            When you want to use Select on a light background (like scrollable
            content), just use the flat variant:
          </p>
          <div
            style={{
              marginTop: '1.5rem'
            }}
          >
            <Select
              variant='flat'
              items={items}
              onChange={onChange}
              height={100}
              width={150}
            />
          </div>
        </Cutout>
      </WindowContent>
    </Window>
  ));
