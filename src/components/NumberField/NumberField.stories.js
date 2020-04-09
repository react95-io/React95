import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { NumberField, Cutout } from '..';

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
  & > * {
    margin-bottom: 1rem;
  }
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
  & > * {
    margin-bottom: 1rem;
  }
`;

storiesOf('NumberField', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => (
    <>
      <NumberField defaultValue={1.5} min={0} max={9} width={130} />
      <br />
      <NumberField defaultValue={1995} width={130} />
      <br />
      <NumberField disabled defaultValue={2020} width={130} />
    </>
  ))
  .add('flat', () => (
    <StyledCutout style={{ padding: '2rem', width: '300px' }}>
      <p style={{ lineHeight: 1.3, marginBottom: '1rem' }}>
        When you want to use NumberField on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <NumberField
        variant='flat'
        defaultValue={1.5}
        min={0}
        max={9}
        width='130px'
      />
      <br />
      <NumberField variant='flat' defaultValue={1995} width='130px' />
      <br />
      <NumberField variant='flat' disabled defaultValue={2020} width='130px' />
    </StyledCutout>
  ));
