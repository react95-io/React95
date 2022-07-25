import { ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { LoadingIndicator } from 'react95';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;

export default {
  title: 'LoadingIndicator',
  component: LoadingIndicator,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof LoadingIndicator>;

export function Default() {
  return (
    <>
      <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Loading...</p>
      <LoadingIndicator isLoading />
    </>
  );
}

Default.story = {
  name: 'default'
};
