import React from 'react';
import styled from 'styled-components';

import { Tooltip, Button } from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export function Default() {
  return (
    <Tooltip text='I see you! 🤷‍' enterDelay={100} leaveDelay={500}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}

Default.story = {
  name: 'default'
};
