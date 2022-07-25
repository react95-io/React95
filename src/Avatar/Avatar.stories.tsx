import { ComponentMeta } from '@storybook/react';
import { Avatar } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};
  & > div > * {
    margin-right: 1rem;
  }
`;

export default {
  title: 'Avatar',
  component: Avatar,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Avatar>;

export function Default() {
  return (
    <div style={{ display: 'inline-flex' }}>
      <Avatar size={50} src='https://placekitten.com/100/100' />
      <Avatar noBorder size={50} src='https://placedog.net/100/100' />
      <Avatar size={50} style={{ background: 'palevioletred' }}>
        AK
      </Avatar>
      <Avatar square size={50}>
        <span role='img' aria-label='🚀'>
          🚀
        </span>
      </Avatar>
    </div>
  );
}

Default.story = {
  name: 'default'
};
