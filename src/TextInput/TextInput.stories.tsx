import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { Button, ScrollView, TextInput } from 'react95';
import styled from 'styled-components';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin, ante vel porttitor posuere, tellus nisi interdum ipsum, non bibendum ante risus ut purus. Curabitur vel posuere odio. Vivamus rutrum, nunc et ullamcorper sagittis, tellus ligula maximus quam, id dapibus sapien metus lobortis diam. Proin luctus, dolor in finibus feugiat, lacus enim gravida sem, quis aliquet tellus leo nec enim. Morbi varius bibendum augue quis venenatis. Curabitur ut elit augue. Pellentesque posuere enim a mattis interdum. Donec sodales convallis turpis, a vulputate elit. Suspendisse potenti.`;
const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => console.log(e.target.value);

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
  #cutout {
    padding: 1rem;
    width: 400px;
    background: ${({ theme }) => theme.canvas};
  }
`;

export default {
  title: 'Controls/TextInput',
  component: TextInput,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof TextInput>;

export function Default() {
  const [state, setState] = useState({
    value: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({ value: e.target.value });
  const reset = () => setState({ value: '' });

  return (
    <div style={{ width: 400 }}>
      <div style={{ display: 'flex' }}>
        <TextInput
          value={state.value}
          placeholder='Type here...'
          onChange={handleChange}
          fullWidth
        />
        <Button onClick={reset} style={{ marginLeft: 4 }}>
          Reset
        </Button>
      </div>
      <br />
      <TextInput defaultValue='Disabled' disabled fullWidth />
      <br />
      <TextInput multiline rows={4} defaultValue={loremIpsum} fullWidth />
      <br />
      <TextInput
        multiline
        disabled
        rows={4}
        defaultValue={loremIpsum}
        fullWidth
      />
    </div>
  );
}

Default.story = {
  name: 'default'
};

export function Flat() {
  return (
    <ScrollView id='cutout'>
      <p>
        When you want to add input field on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <br />
      <TextInput
        variant='flat'
        placeholder='type here...'
        width={150}
        onChange={onChange}
        fullWidth
      />
      <br />
      <TextInput
        id='disabled'
        variant='flat'
        placeholder='Disabled'
        width={150}
        onChange={onChange}
        disabled
        fullWidth
      />
      <br />
      <TextInput
        multiline
        variant='flat'
        rows={4}
        defaultValue={loremIpsum}
        onChange={onChange}
        fullWidth
      />
      <br />
      <TextInput
        multiline
        variant='flat'
        disabled
        rows={4}
        defaultValue={loremIpsum}
        onChange={onChange}
        fullWidth
      />
    </ScrollView>
  );
}

Flat.story = {
  name: 'flat'
};
