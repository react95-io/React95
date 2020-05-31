import React from 'react';

import { Cutout, Window, WindowContent } from 'react95';

export default {
  title: 'Cutout',
  component: Cutout
};

export const Default = () => (
  <Window>
    <WindowContent>
      <Cutout style={{ width: '300px', height: '200px' }}>
        <h1
          style={{
            fontFamily: 'times new roman',
            textAlign: 'center',
            fontSize: '3rem',
            marginTop: '0.5rem'
          }}
        >
          React95
        </h1>
      </Cutout>
    </WindowContent>
  </Window>
);

Default.story = {
  name: 'default'
};
