import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Anchor from './Anchor';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};
`;

storiesOf('Anchor', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => (
    <h1>
      Everybody likes
      {/* eslint-disable-next-line prettier/prettier */}{' '}
      <Anchor href='https://expensive.toys' target='_blank'>
        Expensive Toys
      </Anchor>
    </h1>
  ));
