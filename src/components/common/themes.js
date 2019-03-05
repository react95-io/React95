import { darken, lighten } from "polished";

const themes = {};

themes.default = {
  canvas: "#ffffff",
  material: "#ced0cf",

  borderDarkest: "#050608",
  borderLightest: "#ffffff",
  borderDark: "#888c8f",
  borderLight: "#dfe0e3",

  headerMaterialDark: "#000080",
  headerMaterialLight: "#1034a6",
  headerText: "#ffffff",

  text: "#050608",
  textInvert: "#ffffff",
  textDisabled: "#888c8f",
  textDisabledShadow: "#ffffff",

  inputText: "#050608",
  inputTextInvert: "#ffffff",
  inputTextDisabled: "#888c8f",
  inputTextDisabledShadow: "#ffffff",

  tooltip: "#fefbcc",

  anchor: "#1034a6",
  anchorVisited: "#440381",

  hoverBackground: "#000080",
  checkmark: "#050608",
  progress: "#000080"
};

themes.water = {
  canvas: "#ffffff",
  material: "#ced0cf",

  borderDarkest: "#050608",
  borderLightest: "#ffffff",
  borderDark: "#888c8f",
  borderLight: "#dfe0e3",

  headerMaterialDark: "#72b3b4",
  headerMaterialLight: "#72b3b4",
  headerText: "#ffffff",

  text: "#050608",
  textInvert: "#ffffff",
  textDisabled: "#888c8f",
  textDisabledShadow: "#ffffff",

  inputText: "#050608",
  inputTextInvert: "#ffffff",
  inputTextDisabled: "#888c8f",
  inputTextDisabledShadow: "#ffffff",

  tooltip: "#fefbcc",

  anchor: "#72b3b4",
  anchorVisited: "#440381",

  hoverBackground: "#72b3b4",
  checkmark: "#050608",
  progress: "#72b3b4"
};

themes.coldGray = {
  canvas: "#c7c7df",
  material: "#a1a3ca",

  borderDarkest: "#010601",
  borderLightest: "#c7c7df",
  borderDark: "#5b57a1",
  borderLight: "#a4a7c8",

  headerMaterialDark: darken(0.2, "#a1a3ca"),
  headerMaterialLight: "#8d88c2",
  headerText: "#010601",

  text: "#010601",
  textInvert: "#c7c7df",
  textDisabled: "#5b57a1",
  textDisabledShadow: "#c7c7df",

  inputText: "#050608",
  inputTextInvert: "#ffffff",
  inputTextDisabled: "#888c8f",
  inputTextDisabledShadow: "#ffffff",

  tooltip: "#fefbcc",

  anchor: "#8d88c2",
  anchorVisited: "#440381",

  hoverBackground: "#8d88c2",
  checkmark: "#010601",
  progress: "#8d88c2"
};

themes.lilacRoseDark = {
  canvas: "#dab1c7",
  material: "#b26496",

  borderDarkest: darken(0.7, "#b26496"),
  borderLightest: lighten(0.2, "#b26496"),
  borderDark: darken(0.15, "#b26496"),
  borderLight: lighten(0.05, "#b26496"),

  headerMaterialDark: "#a65387",
  headerMaterialLight: "#8d88c2",
  headerText: "#010601",

  text: "#000000",
  textInvert: "#ecbfe3",
  textDisabled: "#82416d",
  textDisabledShadow: "#ecbfe3",

  inputText: "#000000",
  inputTextInvert: "#ecbfe3",
  inputTextDisabled: "#000000",
  inputTextDisabledShadow: "#000000",

  tooltip: "#fefbcc",

  anchor: "#a65387",
  anchorVisited: "#440381",

  hoverBackground: "#713259",
  checkmark: "#010601",
  progress: "#713259"
};

themes.violetDark = {
  canvas: "#c47bcc",
  material: "#652a6d",

  borderDarkest: "#18051a",
  borderLightest: "#c47bcc",
  borderDark: "#3c1f3e",
  borderLight: "#945b9b",

  headerMaterialDark: "#1034a6",
  headerMaterialLight: "#512155",

  text: "#c57ece",
  textInvert: "#c47bcc",
  textDisabled: "#3c1f3e",
  textDisabledShadow: "#c47bcc",

  inputText: "#18051a",
  inputTextInvert: "#c57ece",
  inputTextDisabled: "#000000",
  inputTextDisabledShadow: "#000000",

  tooltip: "#fefbcc",

  anchor: "#1034a6",
  anchorVisited: "#440381",

  hoverBackground: "#512155",
  checkmark: "#000000",
  progress: "#000080"
};
export default themes;
