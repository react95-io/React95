import React from 'react';
import styled from 'styled-components';

import { Desktop } from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Desktop',
  component: Desktop,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export function Default() {
  return <Desktop backgroundStyles={{ background: 'blue' }} />;
}

Default.story = {
  name: 'default'
};
