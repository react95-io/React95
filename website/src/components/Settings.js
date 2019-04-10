import React, { useState } from "react";
import styled from "styled-components";
import {
  Window,
  WindowContent,
  WindowHeader,
  Tabs,
  Tab,
  TabBody,
  Button,
  Checkbox,
  Fieldset,
  NumberField,
  DatePicker,
  Radio,
  Select
} from "../lib";

const Wrapper = styled.div`
  box-sizing: content-box;
  display: inline-block;
  width: 100%;
  max-width: 400px;
`;
const StyledWindow = styled(Window)`
  box-sizing: content-box;
  width: calc(100% - 3rem);
  text-align: left;
`;
const P = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;
export default function Settings() {
  const [tab, setTab] = useState(0);
  return (
    <Wrapper>
      {/* <DatePicker /> */}
      <StyledWindow>
        <WindowHeader>⚛ React95.exe</WindowHeader>
        <WindowContent>
          <Tabs value={tab} onChange={setTab}>
            <Tab value={0}>Appearance</Tab>
            <Tab value={1}>Fonts</Tab>
            <Tab value={2}>Other</Tab>
          </Tabs>
          <div style={{ height: 300 }}>
            {tab === 0 && (
              <TabBody>
                <P>
                  You can choose from variety of different color schemes! 🔥
                </P>
                <Fieldset label="Themes:">
                  <Radio value="1" label="🕹 Default" checked />
                  <Radio value="1" label="🍇 Grape" />
                  <Radio value="1" label="💊 Custom" disabled />
                </Fieldset>
                <Checkbox
                  name="shipping"
                  value={true}
                  label="Enable vintage font"
                  onChange={() => null}
                  checked={true}
                />
              </TabBody>
            )}
            {tab === 1 && <TabBody>Accesories stuff here</TabBody>}
            {tab === 2 && <TabBody>Clothing stuff here</TabBody>}
          </div>
        </WindowContent>
      </StyledWindow>
    </Wrapper>
  );
}
