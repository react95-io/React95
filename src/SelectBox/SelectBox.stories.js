import React, { useState } from 'react';
import styled from 'styled-components';

import { Window, WindowContent, Cutout, Fieldset } from 'react95';
import SelectBox from './SelectBox';

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

export default {
  title: 'SelectBox',
  component: SelectBox,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

const options = [
  { value: 0, label: '[None]' },
  { value: 1, label: 'Pikachu' },
  { value: 2, label: 'Bulbasaur' },
  { value: 3, label: 'Squirtle' },
  { value: 4, label: 'Mega Charizard Y' },
  { value: 5, label: 'Jigglypuff' },
  { value: 6, label: 'Snorlax' },
  { value: 7, label: 'Geodude' }
];

export const Default = () => {
  const [selected, setSelected] = useState(0);
  const onSelect = value => {
    setSelected(value);
  };
  return (
    <div id='default-selects'>
      <Fieldset label='default'>
        <SelectBox options={options} value={selected} onSelect={onSelect} />
      </Fieldset>
    </div>
  );
};

Default.story = {
  name: 'default'
};

export const Flat = () => (
  <Window>
    <WindowContent>
      <Cutout id='cutout'>
        <p>
          When you want to use SelectBox on a light background (like scrollable
          content), just use the flat variant:
        </p>
        <Fieldset label='flat' variant='flat'>
          <SelectBox />
        </Fieldset>
      </Cutout>
    </WindowContent>
  </Window>
);

Flat.story = {
  name: 'flat'
};

export const CustomDisplayFormatting = () => <SelectBox />;

CustomDisplayFormatting.story = {
  name: 'custom display formatting'
};
