import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Monitor } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Other/Monitor',
  component: Monitor,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Monitor>;

export function Default() {
  return <Monitor backgroundStyles={{ background: 'blue' }} />;
}

Default.story = {
  name: 'default'
};
