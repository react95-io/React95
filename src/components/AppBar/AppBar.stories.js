import React from 'react';
import { storiesOf } from '@storybook/react';

import AppBar from './AppBar';
import Toolbar from '../Toolbar/Toolbar';
import TextField from '../TextField/TextField';

import Button from '../Button/Button';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import Divider from '../Divider/Divider';

import LogoIcon from '../Icon/LogoIcon';

storiesOf('AppBar', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: 'teal'
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Menu />
        <TextField
          placeholder='Search...'
          width={150}
          style={{ marginLeft: 4 }}
        />
      </Toolbar>
    </AppBar>
  ));

function Menu() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {open && (
        <List
          horizontalAlign='left'
          verticalAlign='bottom'
          onClick={handleClose}
        >
          <ListItem>
            <span role='img' aria-label='👨‍💻'>
              👨‍💻
            </span>
            Profile
          </ListItem>
          <ListItem>
            <span role='img' aria-label='📁'>
              📁
            </span>
            My account
          </ListItem>
          <Divider />
          <ListItem disabled>
            <span role='img' aria-label='🔙'>
              🔙
            </span>
            Logout
          </ListItem>
        </List>
      )}
      <Button
        onClick={handleClick}
        active={open}
        style={{ fontWeight: 'bold' }}
      >
        <LogoIcon style={{ marginLeft: -2, marginRight: 4 }} />
        Start
      </Button>
    </div>
  );
}
