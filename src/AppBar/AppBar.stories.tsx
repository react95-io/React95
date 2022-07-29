import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Divider,
  List,
  ListItem,
  TextField,
  Toolbar
} from 'react95';
import styled from 'styled-components';
import logoIMG from '../assets/images/logo.png';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'AppBar',
  component: AppBar,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof AppBar>;

export function Default() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={logoIMG}
              alt='react95 logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                top: '100%'
              }}
              onClick={() => setOpen(false)}
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
        </div>

        <TextField placeholder='Search...' width={150} />
      </Toolbar>
    </AppBar>
  );
}

Default.story = {
  name: 'default'
};
