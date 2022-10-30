import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { ScrollView, Slider, SliderOnChangeHandler } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;

  .col {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .row {
    display: flex;
    & > *:first-child {
      margin-right: 5rem;
    }
  }
  #cutout {
    width: 400px;
  }
  #cutout > div {
    background: ${({ theme }) => theme.canvas};
    padding: 1rem;

    & > * {
      margin-bottom: 2rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default {
  title: 'Controls/Slider',
  component: Slider,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Slider>;

export function Default() {
  const [state, setState] = React.useState(0);

  const onChange: SliderOnChangeHandler = (_, newValue) => setState(newValue);

  return (
    <div className='row'>
      <div className='col'>
        <Slider size='300px' defaultValue={30} />
        <br />
        <Slider
          disabled
          size='300px'
          min={0}
          max={6}
          step={1.5}
          defaultValue={0}
          marks={[
            { value: 0, label: '0°C' },
            { value: 2, label: '2°C' },
            { value: 4, label: '4°C' },
            { value: 6, label: '6°C' }
          ]}
        />
        <br />
        <Slider
          size='300px'
          min={0}
          max={6}
          step={1}
          value={state}
          onChange={onChange}
          marks={[
            { value: 0, label: '0°C' },
            { value: 2, label: '2°C' },
            { value: 4, label: '4°C' },
            { value: 6, label: '6°C' }
          ]}
        />
        <br />
        <Slider
          size='300px'
          min={1.35}
          max={6}
          step={null}
          marks={[
            { value: 1.35, label: '1.35°C' },
            { value: 2.75, label: '2.75°C' },
            { value: 6, label: '6°C' }
          ]}
        />
        <br />
      </div>
      <div className='col'>
        <div>
          <Slider
            size='300px'
            min={0}
            max={6}
            step={1}
            defaultValue={0}
            marks={[
              { value: 0, label: '0°C' },
              { value: 2, label: '2°C' },
              { value: 4, label: '4°C' },
              { value: 6, label: '6°C' }
            ]}
            orientation='vertical'
          />
        </div>
      </div>
    </div>
  );
}

Default.story = {
  name: 'default'
};

export function Flat() {
  return (
    <ScrollView id='cutout'>
      <p>
        When you want to add input field on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <Slider
        variant='flat'
        size='300px'
        min={0}
        max={6}
        step={1}
        defaultValue={0}
        marks={[
          { value: 0, label: '0°C' },
          { value: 6, label: '6°C' }
        ]}
      />
      <Slider
        disabled
        variant='flat'
        size='300px'
        min={0}
        max={6}
        step={1}
        defaultValue={0}
        marks={[
          { value: 0, label: '0°C' },
          { value: 6, label: '6°C' }
        ]}
      />
    </ScrollView>
  );
}

Flat.story = {
  name: 'flat'
};
