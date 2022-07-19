import React from 'react';
import styled from 'styled-components';

import { Slider, Cutout } from '..';

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
  title: 'Slider',
  component: Slider,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export function Default() {
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
    <Cutout id='cutout'>
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
    </Cutout>
  );
}

Flat.story = {
  name: 'flat'
};
