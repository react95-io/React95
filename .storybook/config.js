import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import "../src/components/index.css";
import themes from "../src/components/common/themes";

const demoThemes = [
  themes.lilacRoseDark,
  themes.default,
  themes.water,
  themes.coldGray,
  themes.violetDark
];
addDecorator(withThemesProvider(demoThemes));

addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: true,
    maxPropsIntoLine: 1,
    styles: stylesheet => ({
      // Setting the style with a function
      ...stylesheet,
      table: {
        background: "red"
      }
    })
  })
);

const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
