import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import {
  Anchor,
  Checkbox,
  GroupBox,
  NumberInput,
  Tab,
  TabBody,
  Tabs,
  Window,
  WindowContent,
  WindowHeader
} from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'Controls/Tabs',
  component: Tabs,
  subcomponents: { Tab, TabBody },
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Tabs>;

export function Default() {
  const [state, setState] = useState({
    activeTab: 0
  });

  const handleChange = (
    _: React.MouseEvent<HTMLButtonElement>,
    value: number
  ) => setState({ activeTab: value });

  const { activeTab } = state;
  return (
    <Window style={{ width: 350 }}>
      <WindowHeader>store.exe</WindowHeader>
      <WindowContent>
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab value={0}>Shoes</Tab>
          <Tab value={1}>Accesories</Tab>
          <Tab value={2}>Clothing</Tab>
        </Tabs>
        <TabBody style={{ height: 300 }}>
          {activeTab === 0 && (
            <div>
              <GroupBox label='Order:'>
                <div style={{ padding: '0.5em 0 0.5em 0' }}>Amount:</div>
                <NumberInput width='100%' min={0} defaultValue={0} />
                <br />
                <Checkbox
                  name='shipping'
                  value='fast'
                  label='Fast shipping'
                  onChange={() => null}
                  defaultChecked
                />
              </GroupBox>
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
}

Default.story = {
  name: 'default'
};

export function MultiRow() {
  const [state, setState] = useState({
    activeTab: 'Shoes'
  });

  const handleChange = (
    _: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) => setState({ activeTab: value });

  const { activeTab } = state;
  return (
    <Window style={{ width: 450 }}>
      <WindowHeader>store.exe</WindowHeader>
      <WindowContent>
        <Tabs rows={2} value={activeTab} onChange={handleChange}>
          <Tab value='Shoes'>Shoes</Tab>
          <Tab value='Accesories'>Accesories</Tab>
          <Tab value='Clothing'>Clothing</Tab>
          <Tab value='Cars'>Cars</Tab>
          <Tab value='Electronics'>Electronics</Tab>
          <Tab value='Art'>Art</Tab>
          <Tab value='Perfumes'>Perfumes</Tab>
          <Tab value='Games'>Games</Tab>
          <Tab value='Food'>Food</Tab>
        </Tabs>
        <TabBody style={{ height: 300 }}>
          <p>
            Currently active tab: <mark>{activeTab}</mark>
          </p>
          <br />
          <p>
            Keep in mind that multi row tabs are{' '}
            <Anchor href='http://hallofshame.gp.co.at/tabs.htm' target='_blank'>
              REALLY bad UX
            </Anchor>
            . We&apos;ve added them just because it was a thing back in the day,
            but there are better ways to handle navigation with many options.
          </p>
        </TabBody>
      </WindowContent>
    </Window>
  );
}

MultiRow.story = {
  name: 'multi row'
};
