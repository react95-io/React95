import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Slider, Cutout } from '..';

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf('Slider', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => (
    <Slider size='300px' min={0} max={6} step={1.5} defaultValue={0} />
  ))

  .add('with ticks', () => (
    <Slider size='300px' min={0} max={6} step={1.5} defaultValue={0} ticks />
  ))
  .add('vertical', () => (
    <Slider
      size='300px'
      min={0}
      max={6}
      step={1.5}
      defaultValue={0}
      ticks
      vertical
    />
  ))
  .add('with custom marks', () => (
    <Slider
      size='300px'
      min={0}
      max={6}
      step={1}
      defaultValue={0}
      marks={[
        { value: 0, label: '0°C' },
        { value: 2, label: '2°C' },
        { value: 6, label: '6°C' }
      ]}
    />
  ))
  .add('restricted values', () => (
    <Slider
      size='300px'
      min={0}
      max={6}
      step={null}
      defaultValue={0}
      marks={[
        { value: 0, label: '0°C' },
        { value: 1.35, label: '1.35°C' },
        { value: 6, label: '6°C' }
      ]}
      onChangeCommitted={val => console.log(val)}
    />
  ))
  .add('disabled', () => (
    <Slider
      disabled
      size='300px'
      min={0}
      max={6}
      step={1}
      defaultValue={0}
      marks={[
        { value: 0, label: '0°C' },
        { value: 2, label: '2°C' },
        { value: 6, label: '6°C' }
      ]}
    />
  ))
  .add('flat', () => (
    <StyledCutout style={{ padding: '1rem', width: '400px' }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add input field on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <Slider
          variant='flat'
          size='300px'
          min={0}
          max={6}
          step={1}
          defaultValue={0}
          marks={[
            { value: 0, label: '0°C' },
            { value: 2, label: '2°C' },
            { value: 6, label: '6°C' }
          ]}
        />
      </div>
    </StyledCutout>
  ))

  .add('flat disabled', () => (
    <StyledCutout style={{ padding: '1rem', width: '400px' }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add input field on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
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
            { value: 2, label: '2°C' },
            { value: 6, label: '6°C' }
          ]}
        />
      </div>
    </StyledCutout>
  ));
