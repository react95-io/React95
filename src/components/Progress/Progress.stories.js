import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { Progress } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf('Progress', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <Progress value={52} />)
  .add('indeterminate', () => <Progress variant='indeterminate' />)

  .add('no shadow', () => <Progress value={52} shadow={false} />);
