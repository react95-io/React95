/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Select, Window, WindowContent, Cutout, Fieldset } from '..';

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
  .add('default', () => (
    <div style={{ width: 300 }}>
      <Fieldset label='default'>
        <Select
          onChange={onChange}
          options={options}
          menuMaxHeight={160}
          onOpen={() => console.log('open')}
        />
        <br />
        <Select
          disabled
          onChange={onChange}
          options={options}
          menuMaxHeight={160}
        />
      </Fieldset>
      <br />
      <br />
      <Fieldset label='default native'>
        <Select
          native
          onChange={onChange}
          options={options}
          menuMaxHeight={160}
          onOpen={() => console.log('open')}
        />
        <br />
        <Select
          native
          disabled
          onChange={onChange}
          options={options}
          menuMaxHeight={160}
        />
      </Fieldset>
    </div>
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
            <Fieldset label='flat' variant='flat'>
              <Select
                variant='flat'
                onChange={onChange}
                options={options}
                onOpen={() => console.log('open')}
              />
              <br />
              <Select
                variant='flat'
                disabled
                onChange={onChange}
                options={options}
              />
            </Fieldset>
            <br />
            <br />
            <Fieldset label='flat native' variant='flat'>
              <Select
                variant='flat'
                native
                onChange={onChange}
                options={options}
                onOpen={() => console.log('open')}
              />
              <br />
              <Select
                variant='flat'
                native
                disabled
                onChange={onChange}
                options={options}
              />
            </Fieldset>
          </div>
        </Cutout>
      </WindowContent>
    </Window>
  ))
  .add('custom formatLabel', () => (
    <Select
      formatLabel={opt => `${opt.label.toUpperCase()} 👍 👍`}
      width={300}
      onChange={onChange}
      options={options}
    />
  ));
