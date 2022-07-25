import styled from 'styled-components';

import { Hourglass } from 'react95';
import { ComponentMeta } from '@storybook/react';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Hourglass',
  component: Hourglass,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Hourglass>;

export function Default() {
  return <Hourglass size={32} />;
}

Default.story = {
  name: 'default'
};
