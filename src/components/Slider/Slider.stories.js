import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Slider } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;

storiesOf('Slider', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('fixed width', () => (
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
        { value: 3, label: '3°C' },
        { value: 6, label: '6°C' }
      ]}
    />
  ));
