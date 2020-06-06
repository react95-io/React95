import { ReactNode, FunctionComponent } from 'react';

interface Theme {
  name: string;
  anchor: string;
  anchorVisited: string;
  borderDark: string;
  borderDarkest: string;
  borderLight: string;
  borderLightest: string;
  canvas: string;
  canvasText: string;
  canvasTextDisabled: string;
  canvasTextDisabledShadow: string;
  canvasTextInvert: string;
  checkmark: string;
  checkmarkDisabled: string;
  flatDark: string;
  flatLight: string;
  focusSecondary: string;
  headerBackground: string;
  headerNotActiveBackground: string;
  headerNotActiveText: string;
  headerText: string;
  hoverBackground: string;
  material: string;
  materialDark: string;
  materialText: string;
  materialTextDisabled: string;
  materialTextDisabledShadow: string;
  materialTextInvert: string;
  progress: string;
  tooltip: string;
}

//TODO: is there a way to generate Themes types at build time?
// this way we wouldn't have to update declaration file
// every time we add a new theme
interface Themes {
  azureOrange: Theme;
  bee: Theme;
  blackAndWhite: Theme;
  brick: Theme;
  candy: Theme;
  coldGray: Theme;
  eggplant: Theme;
  highContrast: Theme;
  lilac: Theme;
  lilacRoseDark: Theme;
  maple: Theme;
  marine: Theme;
  matrix: Theme;
  millenium: Theme;
  modernDark: Theme;
  molecule: Theme;
  ninjaTurtles: Theme;
  olive: Theme;
  original: Theme;
  pamelaAnderson: Theme;
  plum: Theme;
  rainyDay: Theme;
  rose: Theme;
  slate: Theme;
  spruce: Theme;
  theSixtiesUSA: Theme;
  tokyoDark: Theme;
  tooSexy: Theme;
  travel: Theme;
  vaporTeal: Theme;
  vermillion: Theme;
  violetDark: Theme;
  water: Theme;
}

/* common */
export const styleReset: string;

/* components */
export const Anchor: FunctionComponent<{
  children: ReactNode;
}>;

export const AppBar: FunctionComponent<{
  children?: ReactNode;
  fixed?: boolean;
}>;

export const Avatar: FunctionComponent<{
  alt?: string;
  children?: ReactNode;
  noBorder?: boolean;
  size?: string | number;
  square?: boolean;
  src?: string;
}>;

export const Bar: FunctionComponent<{
  size?: string | number;
}>;

export const Button: FunctionComponent<{
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  square?: boolean;
  active?: boolean;
  primary?: boolean;
  variant?: 'default' | 'menu' | 'flat';
  children?: ReactNode;
}>;

export const Checkbox: FunctionComponent<{
  onChange?: () => void;
  name?: string;
  value?: string | number | boolean;
  label?: string | number;
  checked?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'flat' | 'menu';
  style?: object;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  className?: string;
}>;
