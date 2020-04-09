import React from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from './Tabs';
import Tab from '../Tab/Tab';
import TabBody from '../TabBody/TabBody';

import Window from '../Window/Window';
import WindowHeader from '../WindowHeader/WindowHeader';
import WindowContent from '../WindowContent/WindowContent';
import Fieldset from '../Fieldset/Fieldset';
import NumberField from '../NumberField/NumberField';
import Checkbox from '../Checkbox/Checkbox';

storiesOf('Tabs', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: '#008080'
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => <TabsDemo />);

/* eslint-disable react/prop-types */

const TabPanel = ({ children, value, activeTab, ...other }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== activeTab}
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      {...other}
    >
      {value === activeTab && <div p={3}>{children}</div>}
    </div>
  );
};
function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  };
}
class TabsDemo extends React.Component {
  state = {
    activeTab: 0
  };

  handleChange = value => this.setState({ activeTab: value });

  render() {
    const { activeTab } = this.state;
    return (
      <Window style={{ width: 350 }}>
        <WindowHeader>
          <span role='img' aria-label='👗'>
            👗
          </span>
          store.exe
        </WindowHeader>
        <WindowContent>
          <Tabs value={activeTab} onChange={this.handleChange}>
            <Tab value={0} {...a11yProps(0)}>
              Shoes
            </Tab>
            <Tab value={1} {...a11yProps(1)}>
              Accesories
            </Tab>
            <Tab value={2} {...a11yProps(2)}>
              Clothing
            </Tab>
          </Tabs>
          <TabBody style={{ height: 300 }}>
            <TabPanel value={0} activeTab={activeTab}>
              <Fieldset label='Order:'>
                <div style={{ padding: '0.5em 0 0.5em 0' }}>Amount:</div>
                <NumberField width='100%' min={0} defaultValue={0} />
                <Checkbox
                  style={{ marginTop: '1rem' }}
                  name='shipping'
                  value='fast'
                  label='Fast shipping'
                  onChange={() => null}
                  defaultChecked
                />
              </Fieldset>
            </TabPanel>
            <TabPanel value={1} activeTab={activeTab}>
              <div>Accesories stuff here</div>
            </TabPanel>
            <TabPanel value={2} activeTab={activeTab}>
              <div>Clothing stuff here</div>
            </TabPanel>
          </TabBody>
        </WindowContent>
      </Window>
    );
  }
}
