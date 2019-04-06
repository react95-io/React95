import React, { useState } from "react";
import styled from "styled-components";
import {
  WindowContent,
  Tabs,
  Tab,
  TabBody,
  Fieldset,
  Toolbar,
  Button
} from "../../components";
import FullWindow from "../../appComponents/FullWindow";

export default function Settings() {
  const [state, setState] = useState(0);
  return (
    <FullWindow>
      <WindowContent>
        <Tabs value={state} onChange={value => setState(value)}>
          <Tab value={0}>appearance</Tab>
          <Tab value={1}>fonts</Tab>
        </Tabs>
        <TabBody>
          {state === 0 && <h1> Udalo sie</h1>}
          {state === 1 && <h1>🌿</h1>}
        </TabBody>
      </WindowContent>
    </FullWindow>
  );
}
