import React from 'react';

import styled from 'styled-components';

import { ColorInput, Cutout } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
  & > span {
    margin-left: 1rem;
    margin-right: 0.5rem;
  }
  #cutout {
    background: ${({ theme }) => theme.canvas};
    display: inline-block;
  }
  .content {
    padding: 1rem;
    & > div {
      margin: 1rem 0;
    }

    & > div > span {
      margin-right: 0.5rem;
    }
  }
`;

export default {
  title: 'ColorInput',
  component: ColorInput,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export const Default = () => (
  <>
    <span>enabled: </span>
    <ColorInput defaultValue='#00f' />
    <span>disabled: </span>
    <ColorInput disabled defaultValue='#00f' />
  </>
);

Default.story = {
  name: 'default'
};

export const Flat = () => (
  <Cutout id='cutout'>
    <div className='content'>
      <div>
        <span>enabled: </span>
        <ColorInput variant='flat' defaultValue='#00f' />
      </div>
      <div>
        <span>disabled: </span>
        <ColorInput variant='flat' disabled defaultValue='#00f' />
      </div>
    </div>
  </Cutout>
);

Flat.story = {
  name: 'flat'
};
