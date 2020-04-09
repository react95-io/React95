import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Avatar from './Avatar';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};
  & > div > * {
    margin-right: 1rem;
  }
`;

storiesOf('Avatar', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => (
    <div style={{ display: 'inline-flex' }}>
      <Avatar
        size={50}
        src='https://sphoto.nasza-klasa.pl/33278012/1/square/2658174fbd.jpeg?v=1'
      />
      <Avatar
        noBorder
        size={50}
        src='https://sphoto.nasza-klasa.pl/33278012/1/square/2658174fbd.jpeg?v=1'
      />
      <Avatar size={50} style={{ background: 'palevioletred' }}>
        AK
      </Avatar>
      <Avatar square size={50}>
        <span role='img' aria-label='🚀'>
          🚀
        </span>
      </Avatar>
    </div>
  ));
