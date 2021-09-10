import React from 'react';
import styled from 'styled-components';
import Chip from './Chip';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};

  > div {
    margin: 2rem 0;
  }
`;

export const Default = () => {
  return (
    <>
      <div className='App'>
        <Chip label='Default Size' /> {/* Default : Small */}
        <Chip label='Medium Size with onClick' size='md' onClick={() => {}} />
        <Chip label='Large Size' size='lg' />
        <Chip
          label='Medium Sized full Width'
          size='md'
          fullWidth
          onClick={() => {}}
        />
      </div>
      <div className='App'>
        <Chip
          label='Small Sized with Background color'
          size='sm'
          backgroundColor='#d4d1ca'
        />
        <Chip
          label='Medium Sized with Background color and onClick'
          size='md'
          backgroundColor='#d4d1ca'
          onClick={() => {}}
        />
        <Chip
          label='Medium Sized with text color and onClick'
          size='lg'
          color='#1ea7fd'
          onClick={() => {}}
        />
      </div>
    </>
  );
};

Default.story = {
  name: 'default'
};

export default {
  title: 'Chip',
  component: Chip,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
