import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import {
  Button,
  List,
  ListItem,
  ScrollView,
  Separator,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader
} from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};
  #default-buttons button {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  #cutout {
    background: ${({ theme }) => theme.canvas};
    padding: 1rem;
    width: 300px;
  }
`;

export default {
  title: 'Controls/Button',
  component: Button,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Button>;

export function Default() {
  return (
    <div id='default-buttons'>
      <Button>Default</Button>
      <br />
      <Button primary>Primary</Button>
      <br />
      <Button disabled>Disabled</Button>
      <br />
      <Button active>Active</Button>
      <br />
      <Button square>
        <span role='img' aria-label='recycle'>
          ♻︎
        </span>
      </Button>
      <br />
      <Button fullWidth>Full width</Button>
      <br />
      <Button size='sm'>Size small</Button>
      <Button size='lg'>Size large</Button>
    </div>
  );
}

Default.story = {
  name: 'default'
};

export function Flat() {
  return (
    <Window>
      <WindowContent>
        <ScrollView id='cutout'>
          <p style={{ lineHeight: 1.3 }}>
            When you want to use Buttons on a light background (like scrollable
            content), just use the flat variant:
          </p>
          <div
            style={{
              marginTop: '1.5rem'
            }}
          >
            <Toolbar>
              <Button variant='flat' primary style={{ marginRight: '0.5rem' }}>
                Primary
              </Button>
              <Button variant='flat' style={{ marginRight: '0.5rem' }}>
                Regular
              </Button>
              <Button variant='flat' disabled>
                Disabled
              </Button>
            </Toolbar>
          </div>
        </ScrollView>
      </WindowContent>
    </Window>
  );
}

Flat.story = {
  name: 'flat'
};

const imageSrc =
  'https://image.freepik.com/foto-gratuito/la-frutta-fresca-del-kiwi-tagliata-a-meta-con-la-decorazione-completa-del-pezzo-e-bella-sulla-tavola-di-legno_47436-1.jpg';
export function Thin() {
  const [open, setOpen] = useState(false);

  return (
    <Window style={{ maxWidth: '250px' }}>
      <WindowHeader>
        <span role='img' aria-label='Kiwi'>
          🥝
        </span>
        Kiwi.app
      </WindowHeader>
      <Toolbar noPadding>
        <Button variant='thin' disabled>
          Upload
        </Button>
        <Button variant='thin' disabled>
          Save
        </Button>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            alignSelf: 'left'
          }}
        >
          <Button
            variant='thin'
            onClick={() => setOpen(!open)}
            size='sm'
            active={open}
          >
            Share
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                right: '0',
                top: '100%',
                zIndex: '9999'
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem size='sm'>Copy link</ListItem>
              <Separator />
              <ListItem size='sm'>Facebook</ListItem>
              <ListItem size='sm'>Twitter</ListItem>
              <ListItem size='sm'>Instagram</ListItem>
              <Separator />
              <ListItem size='sm' disabled>
                MySpace
              </ListItem>
            </List>
          )}
        </div>
      </Toolbar>
      <WindowContent style={{ padding: '0.25rem' }}>
        <ScrollView>
          <img
            style={{ width: '100%', height: '1uto', display: 'block' }}
            src={imageSrc}
            alt='kiwi'
          />
        </ScrollView>
      </WindowContent>
    </Window>
  );
}

Thin.story = {
  name: 'thin'
};
