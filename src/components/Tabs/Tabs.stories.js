import React from "react";
import { storiesOf } from "@storybook/react";

import Tabs from "./Tabs";
import Tab from "./Tab/Tab";
import TabBody from "./TabBody/TabBody";

import Window from "../Window/Window";
import WindowHeader from "../WindowHeader/WindowHeader";
import WindowContent from "../WindowContent/WindowContent";
import Fieldset from "../Fieldset/Fieldset";
import NumberField from "../NumberField/NumberField";
import Checkbox from "../Checkbox/Checkbox";

storiesOf("Tabs", module)
  .addDecorator(story => (
    <div
      style={{
        padding: "5rem",
        background: "#008080"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => <TabsDemo />);

class TabsDemo extends React.Component {
  state = {
    activeTab: 0
  };
  handleChange = value => this.setState({ activeTab: value });
  render() {
    const { activeTab } = this.state;
    return (
      <Window style={{ width: 400 }}>
        <WindowHeader>👗 store.exe</WindowHeader>
        <WindowContent>
          <Tabs value={activeTab} onChange={this.handleChange}>
            <Tab value={0}>Shoes</Tab>
            <Tab value={1}>Accesories</Tab>
            <Tab value={2}>Clothing</Tab>
          </Tabs>
          <div style={{ height: 300 }}>
            {activeTab === 0 && (
              <TabBody>
                <Fieldset title="Order">
                  <div style={{ padding: "0.5em 0 0.5em 0" }}>Ammount:</div>
                  <NumberField
                    width={"100%"}
                    min={0}
                    max={100}
                    value={0}
                    onChange={() => null}
                  />
                  <Checkbox
                    name="shipping"
                    value="fast"
                    label="Fast shipping"
                    onChange={() => null}
                    checked
                  />
                </Fieldset>
              </TabBody>
            )}
            {activeTab === 1 && <TabBody>Accesories stuff here</TabBody>}
            {activeTab === 2 && <TabBody>Clothing stuff here</TabBody>}
          </div>
        </WindowContent>
      </Window>
    );
  }
}
