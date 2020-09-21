import React from 'react';
import styled from 'styled-components';

import { Panel } from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};
  #default-buttons button {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  #cutout {
    background: ${({ theme }) => theme.canvas};
    padding: 1rem;
    width: 300px;
  }
`;

export default {
  title: 'Panel',
  component: Panel,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export const Default = () => (
  <Panel
    variant='outside'
    shadow
    style={{ padding: '0.5rem', lineHeight: '1.5', width: 600 }}
  >
    <p style={{ padding: '0.5rem' }}>
      Notice the subtle difference in borders. The lightest border is not on the
      edge of this panel.
    </p>
    <Panel variant='inside' style={{ margin: '1rem', padding: '1rem' }}>
      This panel on the other hand has the lightest border on the edge. Use this
      panel inside &apos;outside&apos; panels.
      <br />
      <Panel
        variant='well'
        style={{ marginTop: '1rem', padding: '1rem', height: 200, width: 100 }}
      >
        Put some content here
      </Panel>
    </Panel>
    <Panel
      variant='well'
      style={{ marginTop: '1rem', padding: '0.1rem 0.25rem', width: '100%' }}
    >
      The &apos;well&apos; variant of a panel is often used as a window footer.
    </Panel>
  </Panel>
);

Default.story = {
  name: 'default'
};
