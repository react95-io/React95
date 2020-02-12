import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { ColorInput, Cutout } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
  display: inline-block;
  padding: 4rem;
`;
storiesOf('ColorInput', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () =>
    React.createElement(() => <ColorInput defaultValue='#00f' />)
  )

  .add('disabled', () =>
    React.createElement(() => <ColorInput disabled defaultValue='#00f' />)
  )
  .add('flat', () =>
    React.createElement(() => (
      <StyledCutout>
        <ColorInput variant='flat' defaultValue='#00f' />
      </StyledCutout>
    ))
  );
