import React from 'react';
import { storiesOf } from '@storybook/react';

import Window from './Window';
import WindowContent from '../WindowContent/WindowContent';
import WindowHeader from '../WindowHeader/WindowHeader';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

storiesOf('Window', module)
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
    <>
      <Window style={{ width: 400 }}>
        <WindowHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span>react95.exe</span>
          <Button>
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
              X
            </span>
          </Button>
        </WindowHeader>
        <Toolbar>
          <Button variant='menu' size='sm'>
            File
          </Button>
          <Button variant='menu' size='sm'>
            Edit
          </Button>
          <Button variant='menu' size='sm' disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <ul>
            <li>something here</li>
            <li>something here</li>
            <li>something here</li>
            <li>something here</li>
          </ul>
        </WindowContent>
      </Window>

      <Window style={{ margin: '2rem' }}>
        <WindowHeader active={false}>react95.exe</WindowHeader>
        <WindowContent>I am not active</WindowContent>
      </Window>
    </>
  ))
  .add('resizable', () => (
    <Window resizable>
      <WindowHeader>react95.exe</WindowHeader>
      <WindowContent>
        Resizable Window displays resize handle in bottom right corner
      </WindowContent>
    </Window>
  ));
