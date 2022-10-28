import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Hourglass } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Other/Hourglass',
  component: Hourglass,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Hourglass>;

export function Default() {
  return <Hourglass size={32} style={{ margin: 20 }} />;
}

Default.story = {
  name: 'default'
};
