import React from 'react';
import styled from 'styled-components';

import { Hourglass } from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Hourglass',
  component: Hourglass,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export function Default() {
  return <Hourglass size={32} />;
}

Default.story = {
  name: 'default'
};
