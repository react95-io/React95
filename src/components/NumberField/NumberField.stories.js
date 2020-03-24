import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { NumberField, Cutout } from '..';

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;

storiesOf('NumberField', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <NumberField defaultValue={2} />)
  .add('decimal step', () => <NumberField defaultValue={2} step={0.01} />)
  .add('fixed width', () => (
    <NumberField defaultValue={1991} min={1990} max={2000} width={94} />
  ))
  .add('disabled', () => (
    <NumberField disabled defaultValue={1991} min={1990} max={2000} />
  ))
  .add('flat', () => (
    <StyledCutout style={{ padding: '2rem', width: '300px' }}>
      <p style={{ lineHeight: 1.3, marginBottom: '1rem' }}>
        When you want to use NumberField on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <NumberField variant='flat' defaultValue={1991} min={1990} max={2000} />
    </StyledCutout>
  ))
  .add('flat disabled', () => (
    <StyledCutout style={{ padding: '2rem', width: '300px' }}>
      <p style={{ lineHeight: 1.3, marginBottom: '1rem' }}>
        When you want to use NumberField on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <NumberField
        disabled
        variant='flat'
        defaultValue={1991}
        min={1990}
        max={2000}
      />
    </StyledCutout>
  ));
