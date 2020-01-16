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
    <Slider width={250} min={0} max={5} step={1.5} defaultValue={0} />
  ))
  .add('with marks', () => (
    <Slider width={250} min={0} max={5} step={1.5} defaultValue={0} ticks />
  ))
  .add('no step', () => (
    <Slider width={250} min={0} max={5} defaultValue={0} ticks />
  ));
