import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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
  Toolbar,
} from '..';

const actions = { onClick: action('onClick') };

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
`;

storiesOf('Button', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: 'teal',
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => <Button {...actions}>default</Button>)
  .add('disabled', () => (
    <Button disabled {...actions}>
      Disabled
    </Button>
  ))
  .add('active', () => (
    <Button active {...actions}>
      Active
    </Button>
  ))
  .add('fullWidth', () => (
    <Button fullWidth {...actions}>
      Full width
    </Button>
  ))
  .add('square', () => (
    <Button {...actions} square>
      <span role="img" aria-label="🎂">🎂</span>
    </Button>
  ))
  .add('sizes', () => (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        width: 200,
        justifyContent: 'space-between',
      }}
    >
      <Button {...actions} size="sm">
        small
      </Button>
      <Button {...actions} size="md">
        medium
      </Button>
      <Button {...actions} size="lg">
        large
      </Button>
    </div>
  ))
  .add('menu button', () => <MenuButtonExample />)
  .add('flat button', () => (
    <Window>
      <WindowContent>
        <StyledCutout style={{ padding: '1rem', width: '300px' }}>
          <p style={{ lineHeight: 1.3 }}>
            When you want to use Buttons on a light background (like scrollable
            content), just use the flat variant:
          </p>
          <div
            style={{
              marginTop: '1.5rem',
            }}
          >
            <Toolbar>
              <Button {...actions} variant="flat" fullWidth accent>
                OK
              </Button>
              <Button {...actions} variant="flat" disabled fullWidth accent>
                Cancel
              </Button>
            </Toolbar>
          </div>
        </StyledCutout>
      </WindowContent>
    </Window>
  ));

function MenuButtonExample() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Window style={{ maxWidth: '250px' }}>
      <WindowHeader>
        <span role="img" aria-label="🥝">🥝</span>
        Kiwi.app
      </WindowHeader>
      <Toolbar noPadding>
        <Button variant="menu" disabled>
          Upload
        </Button>
        <Button variant="menu" disabled>
          Save
        </Button>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            alignSelf: 'left',
          }}
        >
          {open && (
            <List
              style={{ zIndex: '9999' }}
              horizontalAlign="right"
              verticalAlign="bottom"
              open={open}
              onClick={handleClose}
            >
              <ListItem size="sm">Copy link</ListItem>
              <Divider />
              <ListItem size="sm">Facebook</ListItem>
              <ListItem size="sm">Twitter</ListItem>
              <ListItem size="sm">Instagram</ListItem>
              <Divider />
              <ListItem size="sm" disabled>
                MySpace
              </ListItem>
            </List>
          )}
          <Button variant="menu" onClick={handleClick} size="sm" active={open}>
            Share
          </Button>
        </div>
      </Toolbar>
      <WindowContent style={{ padding: '0.25rem' }}>
        <Cutout>
          <img
            style={{ width: '100%', height: '1uto', display: 'block' }}
            src="https://image.freepik.com/foto-gratuito/la-frutta-fresca-del-kiwi-tagliata-a-meta-con-la-decorazione-completa-del-pezzo-e-bella-sulla-tavola-di-legno_47436-1.jpg"
            alt="kiwi"
          />
        </Cutout>
      </WindowContent>
    </Window>
  );
}
