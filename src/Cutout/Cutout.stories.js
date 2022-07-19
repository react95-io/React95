import React from 'react';

import { Cutout, Window, WindowContent } from 'react95';

export default {
  title: 'Cutout',
  component: Cutout
};

export function Default() {
  return (
    <Window>
      <WindowContent>
        <Cutout style={{ width: '300px', height: '200px' }}>
          <div>
            <p style={{ width: 400 }}>
              React95 is the best UI library ever created
            </p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
          </div>
        </Cutout>
      </WindowContent>
    </Window>
  );
}

Default.story = {
  name: 'default'
};
