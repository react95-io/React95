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
  fieldset,
  fieldset {
    margin-bottom: 2rem;
  }
  legend + * {
    margin-bottom: 1rem;
  }
`;

const onChange = (evt, nextSelection) => console.log(evt, nextSelection);

storiesOf('Select', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => {
    const ref = React.useRef();
    React.useEffect(() => {
      if (ref.current) {
        console.log('CURRENT', ref.current);
        ref.current.focus();
      }
    });
    return (
      <div style={{ width: 180 }}>
        <Fieldset label='default'>
          <Select
            defaultValue={2}
            options={options}
            menuMaxHeight={160}
            width={160}
            onChange={onChange}
            onOpen={e => console.log('open', e)}
            onClose={e => console.log('close', e)}
            onBlur={e => console.log('blur', e)}
            onFocus={e => console.log('focus', e)}
          />
          <Select
            disabled
            onChange={onChange}
            defaultValue={2}
            options={options}
            width={160}
            menuMaxHeight={160}
          />
        </Fieldset>
        <Fieldset label='default native'>
          <Select
            native
            onChange={onChange}
            defaultValue={2}
            options={options}
            width={160}
            menuMaxHeight={160}
            ref={ref}
            onClose={() => console.log('native close')}
            onBlur={() => console.log('native blur')}
            onFocus={() => console.log('native focus')}
          />
          <Select
            native
            disabled
            onChange={onChange}
            width={160}
            defaultValue={2}
            options={options}
            menuMaxHeight={160}
          />
        </Fieldset>
      </div>
    );
  })
  .add('flat', () => {
    const ref = React.useRef();
    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
    return (
      <Window>
        <WindowContent>
          <Cutout
            style={{
              background: 'white',
              padding: '1rem',
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
                  ref={ref}
                  variant='flat'
                  onChange={onChange}
                  options={options}
                  width='100%'
                />
                <Select
                  variant='flat'
                  disabled
                  onChange={onChange}
                  options={options}
                  width='100%'
                />
              </Fieldset>
              <Fieldset label='flat native' variant='flat'>
                <Select
                  variant='flat'
                  native
                  onChange={onChange}
                  options={options}
                  width='100%'
                />
                <Select
                  variant='flat'
                  native
                  disabled
                  onChange={onChange}
                  width='100%'
                  options={options}
                />
              </Fieldset>
            </div>
          </Cutout>
        </WindowContent>
      </Window>
    );
  })
  .add('custom formatDisplay', () => (
    <Select
      formatDisplay={opt => `${opt.label.toUpperCase()} 👍 👍`}
      width={300}
      onChange={onChange}
      options={options}
    />
  ));
