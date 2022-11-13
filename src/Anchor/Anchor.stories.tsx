import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Anchor } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};
`;

export default {
  title: 'Typography/Anchor',
  component: Anchor,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Anchor>;

export function Default() {
  return (
    <h1>
      Everybody likes{' '}
      <Anchor href='https://expensive.toys' target='_blank'>
        https://expensive.toys
      </Anchor>
    </h1>
  );
}

Default.story = {
  name: 'default'
};
