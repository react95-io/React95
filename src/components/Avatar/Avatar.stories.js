import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

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
};

const imageSrc =
  'https://sphoto.nasza-klasa.pl/33278012/1/square/2658174fbd.jpeg?v=1';

export const Default = () => (
  <div style={{ display: 'inline-flex' }}>
    <Avatar size={50} src={imageSrc} />
    <Avatar noBorder size={50} src={imageSrc} />
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

Default.story = {
  name: 'default'
};
