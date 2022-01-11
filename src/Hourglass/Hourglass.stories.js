import React from 'react';
import styled from 'styled-components';

import { Hourglass } from 'react95';

export default {
  title: 'Hourglass',
  component: Hourglass,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export const Default = () => <Hourglass size={32} />;

Default.story = {
  name: 'default'
};
