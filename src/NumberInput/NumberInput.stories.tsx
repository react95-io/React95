import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { ScrollView, NumberInput } from 'react95';
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
  title: 'Controls/NumberInput',
  component: NumberInput,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof NumberInput>;

export function Default() {
  return (
    <>
      <NumberInput defaultValue={3} step={1.5} min={1.5} max={9} width={130} />
      <br />
      <NumberInput defaultValue={1995} width={130} />
      <br />
      <NumberInput disabled defaultValue={2020} width={130} />
    </>
  );
}

Default.story = {
  name: 'default'
};

export function Flat() {
  return (
    <ScrollView id='cutout'>
      <p>
        When you want to use NumberInput on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <NumberInput
        variant='flat'
        defaultValue={1.5}
        min={0}
        max={9}
        width='130px'
      />
      <br />
      <NumberInput variant='flat' defaultValue={1995} width='130px' />
      <br />
      <NumberInput variant='flat' disabled defaultValue={2020} width='130px' />
    </ScrollView>
  );
}

Flat.story = {
  name: 'flat'
};
