import styled from 'styled-components';

import { Desktop } from 'react95';
import { ComponentMeta } from '@storybook/react';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Desktop',
  component: Desktop,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Desktop>;

export function Default() {
  return <Desktop backgroundStyles={{ background: 'blue' }} />;
}

Default.story = {
  name: 'default'
};
