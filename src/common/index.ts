import { css } from 'styled-components';
import { CommonThemeProps, Theme } from '../types';
import { SCALE } from './constants';
import { Color, ThemeColors } from './themes/types';

export const styledDimension =
  (ratio = 1, { delta = 0, unit = 'px' } = {}) =>
  ({ theme }: { theme: Theme | undefined }) =>
    `${(theme?.scale ?? SCALE) * ratio + delta}${unit}`;

export const createDisabledTextStyles = () => css`
  -webkit-text-fill-color: ${({ theme }) => theme.materialTextDisabled};
  color: ${({ theme }) => theme.materialTextDisabled};
  text-shadow: ${styledDimension(0.5)} ${styledDimension(0.5)}
    ${({ theme }) => theme.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`;

export const createBoxStyles = ({
  background = 'material',
  color = 'materialText'
}: {
  background?: keyof ThemeColors;
  color?: keyof ThemeColors;
} = {}) => css`
  box-sizing: border-box;
  display: inline-block;
  background: ${({ theme }) => theme[background]};
  color: ${({ theme }) => theme[color]};
`;

// TODO for flat box styles add checkered background when disabled (not solid color)
export const createHatchedBackground = ({
  mainColor = 'black',
  secondaryColor = 'transparent',
  pixelSize
}: {
  mainColor?: Color;
  secondaryColor?: Color;
  pixelSize?: number;
}) => {
  const size = styledDimension(pixelSize !== undefined ? pixelSize / 2 : 1);
  const doubleSize = styledDimension(pixelSize !== undefined ? pixelSize : 2);
  return css`
    background-image: linear-gradient(
        45deg,
        ${mainColor} 25%,
        transparent 25%,
        transparent 75%,
        ${mainColor} 75%
      ),
      linear-gradient(
        45deg,
        ${mainColor} 25%,
        transparent 25%,
        transparent 75%,
        ${mainColor} 75%
      );
    background-color: ${secondaryColor};
    background-size: ${doubleSize} ${doubleSize};
    background-position: 0 0, ${size} ${size};
  `;
};

export const createFlatBoxStyles = () => css<CommonThemeProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({ theme }) => theme.materialText};
  background: ${({ $disabled, theme }) =>
    $disabled ? theme.flatLight : theme.canvas};
  border: ${styledDimension(1)} solid ${({ theme }) => theme.canvas};
  outline: ${styledDimension(1)} solid ${({ theme }) => theme.flatDark};
  outline-offset: -${styledDimension(2)};
`;

export type BorderStyles =
  | 'button'
  | 'buttonPressed'
  | 'buttonThin'
  | 'buttonThinPressed'
  | 'field'
  | 'grouping'
  | 'status'
  | 'window';

type BorderStyle = {
  topLeftOuter: keyof ThemeColors;
  topLeftInner: keyof ThemeColors | undefined;
  bottomRightInner: keyof ThemeColors | undefined;
  bottomRightOuter: keyof ThemeColors;
};

const borderStyles: Record<BorderStyles, BorderStyle> = {
  button: {
    topLeftOuter: 'borderLightest',
    topLeftInner: 'borderLight',
    bottomRightInner: 'borderDark',
    bottomRightOuter: 'borderDarkest'
  },
  buttonPressed: {
    topLeftOuter: 'borderDarkest',
    topLeftInner: 'borderDark',
    bottomRightInner: 'borderLight',
    bottomRightOuter: 'borderLightest'
  },
  buttonThin: {
    topLeftOuter: 'borderLightest',
    topLeftInner: undefined,
    bottomRightInner: undefined,
    bottomRightOuter: 'borderDark'
  },
  buttonThinPressed: {
    topLeftOuter: 'borderDark',
    topLeftInner: undefined,
    bottomRightInner: undefined,
    bottomRightOuter: 'borderLightest'
  },
  field: {
    topLeftOuter: 'borderDark',
    topLeftInner: 'borderDarkest',
    bottomRightInner: 'borderLight',
    bottomRightOuter: 'borderLightest'
  },
  grouping: {
    topLeftOuter: 'borderDark',
    topLeftInner: 'borderLightest',
    bottomRightInner: 'borderDark',
    bottomRightOuter: 'borderLightest'
  },
  status: {
    topLeftOuter: 'borderDark',
    topLeftInner: undefined,
    bottomRightInner: undefined,
    bottomRightOuter: 'borderLightest'
  },
  window: {
    topLeftOuter: 'borderLight',
    topLeftInner: 'borderLightest',
    bottomRightInner: 'borderDark',
    bottomRightOuter: 'borderDarkest'
  }
};

export const createInnerBorderWithShadow = ({
  theme,
  topLeftInner,
  bottomRightInner,
  hasShadow = false,
  hasInsetShadow = false
}: {
  theme: Theme;
  topLeftInner?: keyof ThemeColors;
  bottomRightInner?: keyof ThemeColors;
  hasShadow?: boolean;
  hasInsetShadow?: boolean;
}) => {
  const scale = Number(styledDimension(1, { unit: '' })({ theme }));
  return [
    hasShadow
      ? `${scale * 2}px ${scale * 2}px ${scale * 5}px 0 rgba(0, 0, 0, 0.35)`
      : false,
    hasInsetShadow
      ? `inset ${scale * 1}px ${scale * 1}px ${
          scale * 1.5
        }px rgba(0, 0, 0, 0.2)`
      : false,
    topLeftInner !== undefined
      ? `inset ${scale / 2}px ${scale / 2}px 0px ${scale / 2}px ${
          theme[topLeftInner]
        }`
      : false,
    bottomRightInner !== undefined
      ? `inset -${scale / 2}px -${scale / 2}px 0 ${scale / 2}px ${
          theme[bottomRightInner]
        }`
      : false
  ]
    .filter(Boolean)
    .join(', ');
};

export const createBorderStyles = ({
  invert = false,
  style = 'button'
}: { invert?: boolean; style?: BorderStyles } = {}) => {
  const borders = {
    topLeftOuter: invert ? 'bottomRightOuter' : 'topLeftOuter',
    topLeftInner: invert ? 'bottomRightInner' : 'topLeftInner',
    bottomRightInner: invert ? 'topLeftInner' : 'bottomRightInner',
    bottomRightOuter: invert ? 'topLeftOuter' : 'bottomRightOuter'
  } as const;
  return css<CommonThemeProps>`
    border-style: solid;
    border-width: ${styledDimension(1)};
    border-left-color: ${({ theme }) =>
      theme[borderStyles[style][borders.topLeftOuter]]};
    border-top-color: ${({ theme }) =>
      theme[borderStyles[style][borders.topLeftOuter]]};
    border-right-color: ${({ theme }) =>
      theme[borderStyles[style][borders.bottomRightOuter]]};
    border-bottom-color: ${({ theme }) =>
      theme[borderStyles[style][borders.bottomRightOuter]]};
    box-shadow: ${({ defaultShadow, theme, shadow: hasShadow }) =>
      createInnerBorderWithShadow({
        theme,
        topLeftInner: borderStyles[style][borders.topLeftInner],
        bottomRightInner: borderStyles[style][borders.bottomRightInner],
        hasShadow: (defaultShadow && theme.shadow) || hasShadow
      })};
  `;
};

/** @deprecated Use `createBorderStyles` instead */
export const createWellBorderStyles = (invert = false) =>
  createBorderStyles({
    invert: !invert,
    style: 'status'
  });

export const focusOutline = () => css`
  outline: ${styledDimension(1)} dotted ${({ theme }) => theme.materialText};
`;

const nodeBtoa = (string: string) => Buffer.from(string).toString('base64');
const base64encode = typeof btoa !== 'undefined' ? btoa : nodeBtoa;

const createTriangleSVG = (theme: Theme, angle = 0) => {
  const scale = Number(styledDimension(1, { unit: '' })({ theme }));
  const svg = `<svg height="${scale * 13}" width="${scale * 13}" viewBox="0 0 ${
    scale * 13
  } ${
    scale * 13
  }" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${angle} ${scale * 6.5} ${scale * 6.5})">
      <polygon fill="${theme.materialText}" points="${scale * 3},${scale * 5} ${
    scale * 10
  },${scale * 5} ${scale * 6.5},${scale * 8.5}"/>
    </g>
  </svg>`;
  const encoded = base64encode(svg);
  return `url(data:image/svg+xml;base64,${encoded})`;
};

export const createScrollbars = (variant = 'default') => css`
  ::-webkit-scrollbar {
    width: ${styledDimension(13)};
    height: ${styledDimension(13)};
  }
  ::-webkit-scrollbar-track {
    ${({ theme }) =>
      createHatchedBackground({
        mainColor: variant === 'flat' ? theme.flatLight : theme.material,
        secondaryColor: variant === 'flat' ? theme.canvas : theme.borderLightest
      })}
  }
  ::-webkit-scrollbar-thumb {
    ${createBoxStyles()}
    ${variant === 'flat'
      ? createFlatBoxStyles()
      : createBorderStyles({ style: 'window' })}
      outline-offset: -${styledDimension(1)};
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({ theme }) => theme.material};
  }
  ::-webkit-scrollbar-button {
    ${createBoxStyles()}
    ${variant === 'flat'
      ? createFlatBoxStyles()
      : createBorderStyles({ style: 'window' })}
      display: block;
    outline-offset: -${styledDimension(1)};
    height: ${styledDimension(13)};
    width: ${styledDimension(13)};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${variant === 'default'
      ? createBorderStyles({ style: 'window', invert: true })
      : ''}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({ theme }) => createTriangleSVG(theme, 90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({ theme }) => createTriangleSVG(theme, 270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({ theme }) => createTriangleSVG(theme, 180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({ theme }) => createTriangleSVG(theme, 0)};
  }
`;
