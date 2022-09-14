import { WindowsTheme } from '../../types';
import { SCALE } from '../constants';

export const noOp = () => {};

export function clamp(value: number, min: number | null, max: number | null) {
  if (max !== null && value > max) {
    return max;
  }
  if (min !== null && value < min) {
    return min;
  }
  return value;
}

export function defaultTrue(value: boolean | null | undefined) {
  return value === undefined || value === null ? true : value;
}

function linearGradient(left: string, right: string) {
  return `linear-gradient(to right, ${left}, ${right})`;
}

export function mapFromWindowsTheme(
  name: string,
  windowsTheme: WindowsTheme,
  {
    useGradients = false,
    useShadow = true,
    scale = SCALE
  }: { useGradients?: boolean; useShadow?: boolean; scale?: number } = {}
) {
  const {
    ButtonDkShadow,
    ButtonFace,
    ButtonHilight,
    ButtonLight,
    ButtonShadow,
    ButtonText,
    Background,
    Window,
    WindowText,
    ActiveTitle,
    GradientActiveTitle,
    GradientInactiveTitle,
    InactiveTitle,
    InactiveTitleText,
    TitleText,
    GrayText,
    Hilight,
    HilightText,
    HotTrackingColor,
    InfoWindow
  } = windowsTheme;

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
    scale,
    shadow: useShadow,
    tooltip: InfoWindow
  };
}

// helper functions below are from Material UI (https://github.com/mui-org/material-ui)
export function getDecimalPrecision(num: number) {
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

export function roundValueToStep(value: number, step: number, min: number) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

export function getSize(value: string | number) {
  return typeof value === 'number' ? `${value}px` : value;
}
