import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar, AppBar, Toolbar, Button } from 'react95';

storiesOf('Avatar', module)
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
      <Toolbar
        style={{ justifyContent: 'space-between', paddingRight: '1rem' }}
      >
        <Button flat accent>
          Menu
        </Button>
        <Avatar src='https://sphoto.nasza-klasa.pl/33278012/1/square/2658174fbd.jpeg?v=1' />
      </Toolbar>
    </AppBar>
  ))
  .add('noBorder', () => (
    <AppBar>
      <Toolbar
        style={{ justifyContent: 'space-between', paddingRight: '1rem' }}
      >
        <Button flat accent>
          Menu
        </Button>
        <Avatar
          src='https://sphoto.nasza-klasa.pl/33278012/1/square/2658174fbd.jpeg?v=1'
          noBorder
        />
      </Toolbar>
    </AppBar>
  ))
  .add('letter', () => (
    <AppBar>
      <Toolbar
        style={{ justifyContent: 'space-between', paddingRight: '1rem' }}
      >
        <Button flat accent>
          Menu
        </Button>
        <Avatar style={{ background: 'palevioletred' }}>AK</Avatar>
      </Toolbar>
    </AppBar>
  ))
  .add('square', () => (
    <AppBar>
      <Toolbar
        style={{ justifyContent: 'space-between', paddingRight: '1rem' }}
      >
        <Button flat accent>
          Menu
        </Button>
        <Avatar square>
          <span role='img' aria-label='🚀'>
            🚀
          </span>
        </Avatar>
      </Toolbar>
    </AppBar>
  ));
