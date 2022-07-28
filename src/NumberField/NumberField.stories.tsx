import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Cutout, NumberField } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
  & > * {
    margin-bottom: 1rem;
  }

  #cutout {
    background: ${({ theme }) => theme.canvas};
    padding: 2rem;
    width: 300px;
    & > div > * {
      margin-bottom: 1rem;
    }
  }
`;

export default {
  title: 'NumberField',
  component: NumberField,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof NumberField>;

export function Default() {
  return (
    <>
      <NumberField defaultValue={3} step={1.5} min={1.5} max={9} width={130} />
      <br />
      <NumberField defaultValue={1995} width={130} />
      <br />
      <NumberField disabled defaultValue={2020} width={130} />
    </>
  );
}

Default.story = {
  name: 'default'
};

export function Flat() {
  return (
    <Cutout id='cutout'>
      <p>
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
    </Cutout>
  );
}

Flat.story = {
  name: 'flat'
};
