/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Select, Window, WindowContent, Cutout } from '..';

const options = [
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

const onChange = (evt, nextSelection) => console.log(nextSelection);

storiesOf('Select', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('shadow (default)', () => (
    <Select
      onChange={onChange}
      options={options}
      onOpen={() => console.log('open')}
    />
  ))
  .add('no shadow', () => (
    <Select onChange={onChange} options={options} shadow={false} />
  ))
  .add('fixed width', () => (
    <Select onChange={onChange} options={options} width={150} />
  ))
  .add('with menuMaxHeight', () => (
    <React.Fragment>
      <Select menuMaxHeight={100} onChange={onChange} options={options} />
      <br />
      <Select
        menuMaxHeight={100}
        onChange={onChange}
        options={options.slice(0, 2)}
      />
    </React.Fragment>
  ))
  .add('flat', () => (
    <Window>
      <WindowContent>
        <Cutout
          style={{
            background: 'white',
            padding: '1rem',
            paddingBottom: '3rem',
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
              menuMaxHeight={100}
              onChange={onChange}
              options={options}
              variant='flat'
            />
            <p
              style={{
                marginTop: '1rem',
                marginBottom: '1rem',
                lineHeight: 1.3
              }}
            >
              When disabled:
            </p>
            <Select
              disabled
              menuMaxHeight={100}
              onChange={onChange}
              options={options}
              variant='flat'
            />
          </div>
        </Cutout>
      </WindowContent>
    </Window>
  ))
  .add('controlled', () => (
    <Select
      onChange={onChange}
      options={[{ value: 0, label: '🚫 I will not change' }, ...options]}
      value={0}
    />
  ))
  .add('custom formatLabel', () => (
    <Select
      formatLabel={opt => `${opt.label.toUpperCase()} 👍 👍`}
      onChange={onChange}
      options={options}
    />
  ))
  .add('disabled', () => (
    <Select disabled onChange={onChange} options={options} />
  ))
  .add('native select', () => (
    <Select onChange={onChange} native options={options} />
  ));
