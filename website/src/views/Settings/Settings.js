import React, { useState } from "react";
import styled from "styled-components";
import {
  WindowContent,
  WindowHeader,
  Tabs,
  Tab,
  TabBody,
  Fieldset,
  Toolbar,
  Button,
  Radio,
  Checkbox
} from "../../components";
import FullWindow from "../../appComponents/FullWindow";

const StyledFieldset = styled(Fieldset)`
  margin-top: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
export default function Settings() {
  const [state, setState] = useState(0);
  return (
    <FullWindow shadow={false}>
      <WindowHeader>Settings</WindowHeader>

      <WindowContent>
        <Tabs value={state} onChange={value => setState(value)}>
          <Tab value={0}>Appearance</Tab>
          <Tab value={1}>Fonts</Tab>
          <Tab value={2}>Other</Tab>
        </Tabs>
        <TabBody>
          {state === 0 && (
            <>
              <p>You can choose from variety of color themes! 🔥</p>
              <StyledFieldset label="Themes">
                <Radio
                  name="theme"
                  value="default"
                  label="💾 Default"
                  checked
                />
                <Radio name="theme" value="coldGray" label="🍇 Grape" />
                <Radio name="theme" value="kiwi" label="🥝 Kiwi" />
                <Radio name="theme" value="custom" label="🐛 Custom" disabled />
              </StyledFieldset>
            </>
          )}
          {state === 1 && (
            <>
              <p>
                You can use modern font (as far as sans-serif is modern 🤷🏻‍♂️), or
                you can use the vintage one!
              </p>
              <Checkbox name="font" checked label="Enable vintage font" />
              <Checkbox name="font" disabled label="Enable vintage font" />
            </>
          )}
          {state === 2 && <>asdasdasd</>}
        </TabBody>
      </WindowContent>
    </FullWindow>
  );
}
