import React, { useState } from 'react';
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
  .add('uncontrolled', () => <ColorInput defaultValue='#00f' />)
  .add('controlled', () => <ControlledColorInput />)

  .add('disabled', () => <ColorInput disabled defaultValue='#00f' />)
  .add('flat', () => (
    <StyledCutout>
      <ColorInput variant='flat' defaultValue='#00f' />
    </StyledCutout>
  ))
  .add('flat disabled', () => (
    <StyledCutout>
      <ColorInput variant='flat' disabled defaultValue='#00f' />
    </StyledCutout>
  ));

const ControlledColorInput = () => {
  const [color, setColor] = useState('#008080');
  const handleChange = e => setColor(e.target.value);
  return <ColorInput value={color} onChange={handleChange} />;
};
