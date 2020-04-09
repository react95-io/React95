import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { ColorInput, Cutout } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
  & > span {
    margin-left: 1rem;
    margin-right: 0.5rem;
  }
`;
const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
  display: inline-block;
  padding: 1rem;
  & > span {
    margin-left: 1rem;
    margin-right: 0.5rem;
  }
`;
storiesOf('ColorInput', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () =>
    React.createElement(() => (
      <>
        <span>enabled: </span>
        <ColorInput defaultValue='#00f' />
        <span>disabled: </span>
        <ColorInput disabled defaultValue='#00f' />
      </>
    ))
  )
  .add('flat', () =>
    React.createElement(() => (
      <StyledCutout>
        <span>enabled: </span>
        <ColorInput variant='flat' defaultValue='#00f' />
        <span>disabled: </span>
        <ColorInput variant='flat' disabled defaultValue='#00f' />
      </StyledCutout>
    ))
  );
