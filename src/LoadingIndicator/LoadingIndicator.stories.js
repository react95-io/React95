import React from 'react';

import styled from 'styled-components';

import { LoadingIndicator } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;

export default {
  title: 'LoadingIndicator',
  component: LoadingIndicator,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export const Default = () => (
  <>
    <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Loading...</p>
    <LoadingIndicator isLoading />
  </>
);

Default.story = {
  name: 'default'
};
