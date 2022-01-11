import React from 'react';
import styled from 'styled-components';

import { Desktop } from 'react95';

export default {
  title: 'Desktop',
  component: Desktop,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export const Default = () => (
  <Desktop backgroundStyles={{ background: 'blue' }} />
);

Default.story = {
  name: 'default'
};
