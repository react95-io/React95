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

import Center from "../components/Center";

const Wrapper = styled.div`
  height: 100%;
`;
const StyledCenter = styled(Center)`
  box-sizing: content-box;
  padding: 0 1em;
  max-width: 400px;
`;
const StyledWindow = styled(Window)`
  width: 100%;
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
      <StyledCenter>
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
      </StyledCenter>
    </Wrapper>
  );
}
