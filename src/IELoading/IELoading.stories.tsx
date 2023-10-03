import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { IELoading } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;

export default {
  title: 'Controls/IELoading',
  component: IELoading,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof IELoading>;

export function Default() { 

  return <IELoading />;
}

Default.story = {
  name: 'default'
};

