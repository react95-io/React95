import React, { useState } from 'react';
// import {
//   Title,
//   Subtitle,
//   Description,
//   Primary,
//   Props,
//   Stories
// } from '@storybook/addon-docs/blocks';

import Tabs from './Tabs';
import Tab from '../Tab/Tab';
import TabBody from '../TabBody/TabBody';

import Window from '../Window/Window';
import WindowHeader from '../WindowHeader/WindowHeader';
import WindowContent from '../WindowContent/WindowContent';
import Fieldset from '../Fieldset/Fieldset';
import NumberField from '../NumberField/NumberField';
import Checkbox from '../Checkbox/Checkbox';

export default {
  title: 'Tabs',
  component: Tabs,
  subcomponents: { Tab, TabBody },
  decorators: [
    story => (
      <div
        style={{
          padding: '5rem',
          background: '#008080'
        }}
      >
        {story()}
      </div>
    )
  ]
  // parameters: {
  //   docs: {
  //     page: () => (
  //       <>
  //         <Title />
  //         <Props />
  //       </>
  //     )
  //   }
  // }
};
export const Default = () => {
  const [state, setState] = useState({
    activeTab: 0
  });

  const handleChange = (e, value) => setState({ activeTab: value });

  const { activeTab } = state;
  return (
    <Window style={{ width: 350 }}>
      <WindowHeader>
        <span role='img' aria-label='dress'>
          👗
        </span>
        store.exe
      </WindowHeader>
      <WindowContent>
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab value={0}>Shoes</Tab>
          <Tab value={1}>Accesories</Tab>
          <Tab value={2}>Clothing</Tab>
        </Tabs>
        <TabBody style={{ height: 300 }}>
          {activeTab === 0 && (
            <div>
              <Fieldset label='Order:'>
                <div style={{ padding: '0.5em 0 0.5em 0' }}>Amount:</div>
                <NumberField width='100%' min={0} defaultValue={0} />
                <br />
                <Checkbox
                  name='shipping'
                  value='fast'
                  label='Fast shipping'
                  onChange={() => null}
                  defaultChecked
                />
              </Fieldset>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <div>Accesories stuff here</div>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <div>Clothing stuff here</div>
            </div>
          )}
        </TabBody>
      </WindowContent>
    </Window>
  );
};

Default.story = {
  name: 'default'
};
