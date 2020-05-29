import { ReactNode, FunctionComponent } from 'react';

interface Theme {
  name: string;
  canvas: string;
  material: string;
  materialDark: string;
  borderDarkest: string;
  borderLightest: string;
  borderDark: string;
  checkmarkDisabled: string;
  borderLight: string;
  headerBackground: string;
  headerText: string;
  headerNotActiveBackground: string;
  headerNotActiveText: string;
  materialText: string;
  materialTextInvert: string;
  materialTextDisabled: string;
  materialTextDisabledShadow: string;
  canvasText: string;
  canvasTextInvert: string;
  canvasTextDisabled: string;
  canvasTextDisabledShadow: string;
  tooltip: string;
  anchor: string;
  anchorVisited: string;
  hoverBackground: string;
  checkmark: string;
  progress: string;
  flatLight: string;
  flatDark: string;
  focusSecondary: string;
}

interface Themes {
  default: Theme;
  bee: Theme;
  pamelaAnderson: Theme;
  azureOrange: Theme;
  olive: Theme;
  vaporTeal: Theme;
  matrix: Theme;
  vermillion: Theme;
  tooSexy: Theme;
  ninjaTurtles: Theme;
  tokyoDark: Theme;
  molecule: Theme;
  travel: Theme;
  theSixtiesUSA: Theme;
  candy: Theme;
  modernDark: Theme;
  storm: Theme;
  default: Theme;
  millenium: Theme;
  spruce: Theme;
  slate: Theme;
  rose: Theme;
  rainyDay: Theme;
  plum: Theme;
  marine: Theme;
  maple: Theme;
  lilac: Theme;
  blackAndWhite: Theme;
  highContrast: Theme;
  eggplant: Theme;
  brick: Theme;
  water: Theme;
  coldGray: Theme;
  lilacRoseDark: Theme;
  violetDark: Theme;
}

/* common */
export const styleReset: string;
export const themes: Themes;

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
