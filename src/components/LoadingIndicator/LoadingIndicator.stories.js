import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { LoadingIndicator } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf('LoadingIndicator', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => (
    <>
      <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Loading...</p>
      <LoadingIndicator isLoading />
    </>
  ));
