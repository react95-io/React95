import React from 'react';
import styled from 'styled-components';
import Window from './Window';
import WindowContent from '../WindowContent/WindowContent';
import WindowHeader from '../WindowHeader/WindowHeader';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

export default {
  title: 'Window',
  component: Window,
  subcomponents: { WindowHeader, WindowContent },
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
const Wrapper = styled.div`
  padding: 5rem;
  background: teal;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.text};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  p {
    line-height: 1.4;
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
`;
export const Default = () => (
  <>
    <Window resizable className='window'>
      <WindowHeader className='window-header'>
        <span>react95.exe</span>
        <Button>
          <span className='close-icon' />
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
        <p>
          When you set &quot;resizable&quot; prop, there will be drag handle in
          the bottom right corner (but resizing itself must be handled by you
          tho!)
        </p>
      </WindowContent>
    </Window>

    <Window className='window'>
      <WindowHeader active={false} className='window-header'>
        <span>not-active.exe</span>
        <Button>
          <span className='close-icon' />
        </Button>
      </WindowHeader>
      <WindowContent>I am not active</WindowContent>
    </Window>
  </>
);

Default.story = {
  name: 'default'
};

export const Resizable = () => (
  <Window resizable>
    <WindowHeader>react95.exe</WindowHeader>
    <WindowContent>
      Resizable Window displays resize handle in bottom right corner
    </WindowContent>
  </Window>
);

Resizable.story = {
  name: 'resizable'
};
