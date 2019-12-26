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
  .add('fixed width', () => <Slider />);
