/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';

import { Select, Window, WindowContent, Cutout, Fieldset } from 'react95';

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
  #default-selects {
    width: 200px;
  }
  #cutout {
    width: 250px;
    padding: 1rem;
    background: ${({ theme }) => theme.canvas};
    & > p {
      margin-bottom: 2rem;
    }
  }
`;

const onChange = (evt, nextSelection) => console.log(evt, nextSelection);

export default {
  title: 'Select',
  component: Select,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export const Default = () => (
  <div id='default-selects'>
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

Default.story = {
  name: 'default'
};

export const Flat = () => (
  <Window>
    <WindowContent>
      <Cutout id='cutout'>
        <p>
          When you want to use Select on a light background (like scrollable
          content), just use the flat variant:
        </p>
        <Fieldset label='flat' variant='flat'>
          <Select
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
      </Cutout>
    </WindowContent>
  </Window>
);

Flat.story = {
  name: 'flat'
};

export const CustomDisplayFormatting = () => (
  <Select
    formatDisplay={opt => `${opt.label.toUpperCase()} 👍 👍`}
    onChange={onChange}
    options={options}
    width={220}
    menuMaxHeight={100}
  />
);

CustomDisplayFormatting.story = {
  name: 'custom display formatting'
};
