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
  Toolbar
} from '..';

const actions = { onClick: action('onClick') };

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
`;

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};
`;
const ButtonWrapper = styled.div`
  button {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;
storiesOf('Button', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => (
    <ButtonWrapper>
      <Button {...actions}>Default</Button>
      <br />
      <Button primary {...actions}>
        Primary
      </Button>
      <br />
      <Button disabled {...actions}>
        Disabled
      </Button>
      <br />
      <Button active {...actions}>
        Active
      </Button>
      <br />
      <Button {...actions} square>
        <span role='img' aria-label='🎂'>
          ♻︎
        </span>
      </Button>
      <br />
      <Button fullWidth {...actions}>
        Full width
      </Button>
      <br />
      <Button size='sm' {...actions}>
        Size small
      </Button>
      <Button size='lg' {...actions}>
        Size large
      </Button>
    </ButtonWrapper>
  ))
  .add('menu', () => <MenuButtonExample />)
  .add('flat', () => (
    <Window>
      <WindowContent>
        <StyledCutout style={{ padding: '1rem', width: '300px' }}>
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
              <Button
                variant='flat'
                primary
                fullWidth
                style={{ marginRight: '0.5rem' }}
                {...actions}
              >
                Primary
              </Button>
              <Button
                variant='flat'
                fullWidth
                style={{ marginRight: '0.5rem' }}
                {...actions}
              >
                Regular
              </Button>
              <Button variant='flat' disabled fullWidt {...actions}>
                Disabled
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
        <span role='img' aria-label='🥝'>
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
          {open && (
            <List
              style={{
                position: 'absolute',
                right: '0',
                top: '100%',
                zIndex: '9999'
              }}
              open={open}
              onClick={handleClose}
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
          <Button variant='menu' onClick={handleClick} size='sm' active={open}>
            Share
          </Button>
        </div>
      </Toolbar>
      <WindowContent style={{ padding: '0.25rem' }}>
        <Cutout>
          <img
            style={{ width: '100%', height: '1uto', display: 'block' }}
            src='https://image.freepik.com/foto-gratuito/la-frutta-fresca-del-kiwi-tagliata-a-meta-con-la-decorazione-completa-del-pezzo-e-bella-sulla-tavola-di-legno_47436-1.jpg'
            alt='kiwi'
          />
        </Cutout>
      </WindowContent>
    </Window>
  );
}
