import React from 'react';

export type Color = string;

export type Sizes = 'sm' | 'md' | 'lg';

export type Orientation = 'horizontal' | 'vertical';

export type Direction = 'up' | 'down' | 'left' | 'right';

export type DimensionValue = undefined | number | string;

export type CommonStyledProps = {
  /**
   * "as" polymorphic prop allows to render a different HTML element or React component
   * @see {@link https://styled-components.com/docs/api#as-polymorphic-prop}
   */
  as?: string | React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type CommonThemeProps = {
  'data-testid'?: string;
  $disabled?: boolean;
  shadow?: boolean;
};

export type Theme = {
  name: string;
  anchor: Color;
  anchorVisited: Color;
  borderDark: Color;
  borderDarkest: Color;
  borderLight: Color;
  borderLightest: Color;
  canvas: Color;
  canvasText: Color;
  canvasTextDisabled: Color;
  canvasTextDisabledShadow: Color;
  canvasTextInvert: Color;
  checkmark: Color;
  checkmarkDisabled: Color;
  desktopBackground: Color;
  flatDark: Color;
  flatLight: Color;
  focusSecondary: Color;
  headerBackground: Color;
  headerNotActiveBackground: Color;
  headerNotActiveText: Color;
  headerText: Color;
  hoverBackground: Color;
  material: Color;
  materialDark: Color;
  materialText: Color;
  materialTextDisabled: Color;
  materialTextDisabledShadow: Color;
  materialTextInvert: Color;
  progress: Color;
  tooltip: Color;
};

export type WindowsTheme = {
  ActiveBorder: Color;
  ActiveTitle: Color;
  AppWorkspace: Color;
  Background: Color;
  ButtonAlternateFace: Color;
  ButtonDkShadow: Color;
  ButtonFace: Color;
  ButtonHilight: Color;
  ButtonLight: Color;
  ButtonShadow: Color;
  ButtonText: Color;
  GradientActiveTitle: Color;
  GradientInactiveTitle: Color;
  GrayText: Color;
  Hilight: Color;
  HilightText: Color;
  HotTrackingColor: Color;
  InactiveBorder: Color;
  InactiveTitle: Color;
  InactiveTitleText: Color;
  InfoText: Color;
  InfoWindow: Color;
  Menu: Color;
  MenuBar: Color;
  MenuHilight: Color;
  MenuText: Color;
  Scrollbar: Color;
  TitleText: Color;
  Window: Color;
  WindowFrame: Color;
  WindowText: Color;
};
