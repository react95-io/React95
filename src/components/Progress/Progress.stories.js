import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { Progress } from 'react95';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf('Progress', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <Progress percent={52} />)
  .add('no shadow', () => <Progress percent={52} shadow={false} />);
