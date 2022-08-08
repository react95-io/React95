/* eslint-disable no-console */

import { ComponentMeta } from '@storybook/react';
import React from 'react';
import {
  GroupBox,
  ScrollView,
  Select,
  SelectNative,
  Window,
  WindowContent
} from 'react95';
import styled from 'styled-components';
import { PokemonOptions } from './Select.stories.data';
import { SelectOption } from './Select.types';

const options = PokemonOptions;

const nativeOptions = options.map(option => ({
  ...option,
  value: String(option.value)
}));

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
  #cutout > div {
    width: 250px;
    padding: 1rem;
    background: ${({ theme }) => theme.canvas};
    & > p {
      margin-bottom: 2rem;
    }
  }
`;

const onChange = <T,>(
  selectedOption: SelectOption<T>,
  changeOptions: { fromEvent: React.SyntheticEvent | Event }
) => console.log(selectedOption, changeOptions.fromEvent);

export default {
  title: 'Controls/Select',
  component: Select,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Select>;

export function Default() {
  return (
    <div id='default-selects'>
      <GroupBox label='default'>
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
      </GroupBox>
      <GroupBox label='default native'>
        <SelectNative
          onChange={onChange}
          defaultValue='2'
          options={nativeOptions}
          width={160}
          onBlur={() => console.log('native blur')}
          onFocus={() => console.log('native focus')}
        />
        <SelectNative
          disabled
          onChange={onChange}
          width={160}
          defaultValue='2'
          options={nativeOptions}
        />
      </GroupBox>
    </div>
  );
}

Default.story = {
  name: 'default'
};

export function Flat() {
  return (
    <Window>
      <WindowContent>
        <ScrollView id='cutout'>
          <p>
            When you want to use Select on a light background (like scrollable
            content), just use the flat variant:
          </p>
          <GroupBox label='flat' variant='flat'>
            <Select
              variant='flat'
              onChange={onChange}
              options={options}
              width='100%'
              menuMaxHeight={160}
            />
            <Select
              variant='flat'
              disabled
              onChange={onChange}
              options={options}
              width='100%'
            />
          </GroupBox>
          <GroupBox label='flat native' variant='flat'>
            <SelectNative
              variant='flat'
              onChange={onChange}
              options={nativeOptions}
              width='100%'
            />
            <SelectNative
              variant='flat'
              disabled
              onChange={onChange}
              width='100%'
              options={nativeOptions}
            />
          </GroupBox>
        </ScrollView>
      </WindowContent>
    </Window>
  );
}

Flat.story = {
  name: 'flat'
};

export function CustomDisplayFormatting() {
  return (
    <Select
      formatDisplay={opt => `${opt.label?.toUpperCase()} 👍 👍`}
      onChange={onChange}
      options={options}
      width={220}
    />
  );
}

CustomDisplayFormatting.story = {
  name: 'custom display formatting'
};
