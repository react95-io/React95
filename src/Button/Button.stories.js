import React from 'react';
import styled from 'styled-components';

import {
  Button,
  Window,
  WindowHeader,
  WindowContent,
  List,
  ListItem,
  Divider,
  Cutout,
  Toolbar
} from 'react95';

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
  title: 'Button',
  component: Button,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export const Default = () => (
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

Default.story = {
  name: 'default'
};

const imageSrc =
  'https://image.freepik.com/foto-gratuito/la-frutta-fresca-del-kiwi-tagliata-a-meta-con-la-decorazione-completa-del-pezzo-e-bella-sulla-tavola-di-legno_47436-1.jpg';
export const Menu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Window style={{ maxWidth: '250px' }}>
      <WindowHeader>
        <span role='img' aria-label='Kiwi'>
          🥝
        </span>
        Kiwi.app
      </WindowHeader>
      <Toolbar noPadding>
        <Button variant='menu' disabled>
          Upload
        </Button>
        <Button variant='menu' disabled>
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
            variant='menu'
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
              open={open}
              onClick={() => setOpen(false)}
            >
              <ListItem size='sm'>Copy link</ListItem>
              <Divider />
              <ListItem size='sm'>Facebook</ListItem>
              <ListItem size='sm'>Twitter</ListItem>
              <ListItem size='sm'>Instagram</ListItem>
              <Divider />
              <ListItem size='sm' disabled>
                MySpace
              </ListItem>
            </List>
          )}
        </div>
      </Toolbar>
      <WindowContent style={{ padding: '0.25rem' }}>
        <Cutout>
          <img
            style={{ width: '100%', height: '1uto', display: 'block' }}
            src={imageSrc}
            alt='kiwi'
          />
        </Cutout>
      </WindowContent>
    </Window>
  );
};

Menu.story = {
  name: 'menu'
};

export const Flat = () => (
  <Window>
    <WindowContent>
      <Cutout id='cutout'>
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
      </Cutout>
    </WindowContent>
  </Window>
);

Flat.story = {
  name: 'flat'
};
