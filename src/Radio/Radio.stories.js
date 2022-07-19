import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Radio,
  Cutout,
  Fieldset,
  Window,
  WindowContent,
  List,
  ListItem,
  Divider
} from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
  #cutout {
    background: ${({ theme }) => theme.canvas};
    color: ${({ theme }) => theme.materialText};
    padding: 1rem;
    width: 300px;
    & p {
      margin-bottom: 2rem;
    }
  }
`;
export default {
  title: 'Radio',
  component: Radio,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export function Default() {
  const [state, setState] = useState('Pear');
  const handleChange = e => setState(e.target.value);

  return (
    <Window>
      <WindowContent>
        <Fieldset label='Fruits'>
          <Radio
            checked={state === 'Pear'}
            onChange={handleChange}
            value='Pear'
            label='🍐 Pear'
            name='fruits'
          />
          <br />
          <Radio
            checked={state === 'Orange'}
            onChange={handleChange}
            value='Orange'
            label='🍊 Orange'
            name='fruits'
          />
          <br />
          <Radio
            checked={state === 'Kiwi'}
            onChange={handleChange}
            value='Kiwi'
            label='🥝 Kiwi'
            name='fruits'
          />
          <br />
          <Radio
            checked={state === 'Grape'}
            onChange={handleChange}
            value='Grape'
            label='🍇 Grape'
            name='fruits'
            disabled
          />
        </Fieldset>
      </WindowContent>
    </Window>
  );
}

Default.story = {
  name: 'default'
};

export function Flat() {
  const [state, setState] = useState('Pear');
  const handleChange = e => setState(e.target.value);

  return (
    <Window>
      <WindowContent>
        <Cutout id='cutout'>
          <p>
            When you want to use radio buttons on a light background (like
            scrollable content), just use the flat variant:
          </p>

          <Fieldset variant='flat' label='Fruits'>
            <Radio
              variant='flat'
              checked={state === 'Pear'}
              onChange={handleChange}
              value='Pear'
              label='🍐 Pear'
              name='fruits'
            />
            <br />
            <Radio
              variant='flat'
              checked={state === 'Orange'}
              onChange={handleChange}
              value='Orange'
              label='🍊 Orange'
              name='fruits'
            />
            <br />
            <Radio
              variant='flat'
              checked={state === 'Kiwi'}
              onChange={handleChange}
              value='Kiwi'
              label='🥝 Kiwi'
              name='fruits'
            />
            <br />
            <Radio
              variant='flat'
              checked={state === 'Grape'}
              onChange={handleChange}
              value='Grape'
              label='🍇 Grape'
              name='fruits'
              disabled
            />
          </Fieldset>
        </Cutout>
      </WindowContent>
    </Window>
  );
}

Flat.story = {
  name: 'flat'
};

export function Menu() {
  const [state, setState] = useState({
    tool: 'Brush',
    color: 'Black'
  });
  const handleToolChange = e => setState({ ...state, tool: e.target.value });
  const handleColorChange = e => setState({ ...state, color: e.target.value });

  const { tool, color } = state;

  return (
    <List>
      <ListItem size='sm'>
        <Radio
          variant='menu'
          checked={tool === 'Brush'}
          onChange={handleToolChange}
          value='Brush'
          label='Brush'
          name='tool'
        />
      </ListItem>
      <ListItem size='sm'>
        <Radio
          variant='menu'
          checked={tool === 'Pencil'}
          onChange={handleToolChange}
          value='Pencil'
          label='Pencil'
          name='tool'
        />
      </ListItem>
      <Divider />
      <ListItem size='sm' disabled>
        <Radio
          disabled
          variant='menu'
          checked={color === 'Black'}
          onChange={handleColorChange}
          value='Black'
          label='Black'
          name='color'
        />
      </ListItem>
      <ListItem size='sm' disabled>
        <Radio
          disabled
          variant='menu'
          checked={color === 'Red'}
          onChange={handleColorChange}
          value='Red'
          label='Red'
          name='color'
        />
      </ListItem>
    </List>
  );
}
Menu.story = {
  name: 'menu'
};
