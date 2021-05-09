export const noOp = () => {};

export function clamp(value, min, max) {
  if (max !== null && value > max) {
    return max;
  }
  if (min !== null && value < min) {
    return min;
  }
  return value;
}

function linearGradient(left, right) {
  return `linear-gradient(to right, ${left}, ${right})`;
}

export function mapFromWindowsTheme(name, windowsTheme, useGradients) {
  /* eslint-disable no-unused-vars */
  const {
    ButtonAlternateFace,
    ButtonDkShadow,
    ButtonFace,
    ButtonHilight,
    ButtonLight,
    ButtonShadow,
    ButtonText,
    ActiveBorder,
    AppWorkspace,
    Background,
    InactiveBorder,
    Scrollbar,
    Window,
    WindowFrame,
    WindowText,
    ActiveTitle,
    GradientActiveTitle,
    GradientInactiveTitle,
    InactiveTitle,
    InactiveTitleText,
    TitleText,
    Menu,
    MenuBar,
    MenuHilight,
    MenuText,
    GrayText,
    Hilight,
    HilightText,
    HotTrackingColor,
    InfoText,
    InfoWindow
  } = windowsTheme;
  /* eslint-enable no-unused-vars */

  return {
    name,

    anchor: HotTrackingColor,
    anchorVisited: HotTrackingColor,
    borderDark: ButtonShadow,
    borderDarkest: ButtonDkShadow,
    borderLight: ButtonLight,
    borderLightest: ButtonHilight,
    canvas: Window,
    canvasText: WindowText,
    canvasTextDisabled: ButtonShadow,
    canvasTextDisabledShadow: ButtonHilight,
    canvasTextInvert: HilightText,
    checkmark: WindowText,
    checkmarkDisabled: GrayText,
    desktopBackground: Background,
    flatDark: ButtonShadow,
    flatLight: ButtonLight,
    focusSecondary: ButtonHilight, // should be Hilight inverted
    headerBackground: useGradients
      ? linearGradient(ActiveTitle, GradientActiveTitle)
      : ActiveTitle,
    headerNotActiveBackground: useGradients
      ? linearGradient(InactiveTitle, GradientInactiveTitle)
      : InactiveTitle,
    headerNotActiveText: InactiveTitleText,
    headerText: TitleText,
    hoverBackground: Hilight,
    material: ButtonFace,
    materialDark: InactiveTitle,
    materialText: ButtonText,
    materialTextDisabled: ButtonShadow,
    materialTextDisabledShadow: ButtonHilight,
    materialTextInvert: HilightText,
    progress: Hilight,
    tooltip: InfoWindow
  };
}

// helper functions below are from Material UI (https://github.com/mui-org/material-ui)
export function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (
      (matissaDecimalPart ? matissaDecimalPart.length : 0) +
      parseInt(parts[1], 10)
    );
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

export function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
