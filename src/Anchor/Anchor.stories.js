import React from 'react';
import styled from 'styled-components';

import { Anchor } from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};
`;

export default {
  title: 'Anchor',
  component: Anchor,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export const Default = () => (
  <h1>
    Everybody likes
    <Anchor href='https://expensive.toys' target='_blank'>
      {' '}
      https://expensive.toys
    </Anchor>
  </h1>
);

Default.story = {
  name: 'default'
};
