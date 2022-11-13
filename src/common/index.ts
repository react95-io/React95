import { css } from 'styled-components';
import { Color, CommonThemeProps, Theme } from '../types';

export const shadow = '4px 4px 10px 0 rgba(0, 0, 0, 0.35)';
export const insetShadow = 'inset 2px 2px 3px rgba(0,0,0,0.2)';

export const createDisabledTextStyles = () => css`
  -webkit-text-fill-color: ${({ theme }) => theme.materialTextDisabled};
  color: ${({ theme }) => theme.materialTextDisabled};
  text-shadow: 1px 1px ${({ theme }) => theme.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`;

export const createBoxStyles = ({
  background = 'material',
  color = 'materialText'
}: {
  background?: keyof Theme;
  color?: keyof Theme;
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
  pixelSize = 2
}) => css`
  background-image: ${[
    `linear-gradient(
      45deg,
      ${mainColor} 25%,
      transparent 25%,
      transparent 75%,
      ${mainColor} 75%
    )`,
    `linear-gradient(
      45deg,
      ${mainColor} 25%,
      transparent 25%,
      transparent 75%,
      ${mainColor} 75%
    )`
  ].join(',')};
  background-color: ${secondaryColor};
  background-size: ${`${pixelSize * 2}px ${pixelSize * 2}px`};
  background-position: 0 0, ${`${pixelSize}px ${pixelSize}px`};
`;

export const createFlatBoxStyles = () => css<CommonThemeProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({ theme }) => theme.materialText};
  background: ${({ $disabled, theme }) =>
    $disabled ? theme.flatLight : theme.canvas};
  border: 2px solid ${({ theme }) => theme.canvas};
  outline: 2px solid ${({ theme }) => theme.flatDark};
  outline-offset: -4px;
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
  topLeftOuter: keyof Theme;
  topLeftInner: keyof Theme | null;
  bottomRightInner: keyof Theme | null;
  bottomRightOuter: keyof Theme;
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
    topLeftInner: null,
    bottomRightInner: null,
    bottomRightOuter: 'borderDark'
  },
  buttonThinPressed: {
    topLeftOuter: 'borderDark',
    topLeftInner: null,
    bottomRightInner: null,
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
    topLeftInner: null,
    bottomRightInner: null,
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
  topLeftInner: keyof Theme | null;
  bottomRightInner: keyof Theme | null;
  hasShadow?: boolean;
  hasInsetShadow?: boolean;
}) =>
  [
    hasShadow ? shadow : false,
    hasInsetShadow ? insetShadow : false,
    topLeftInner !== null
      ? `inset 1px 1px 0px 1px ${theme[topLeftInner]}`
      : false,
    bottomRightInner !== null
      ? `inset -1px -1px 0 1px ${theme[bottomRightInner]}`
      : false
  ]
    .filter(Boolean)
    .join(', ');

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
    border-width: 2px;
    border-left-color: ${({ theme }) =>
      theme[borderStyles[style][borders.topLeftOuter]]};
    border-top-color: ${({ theme }) =>
      theme[borderStyles[style][borders.topLeftOuter]]};
    border-right-color: ${({ theme }) =>
      theme[borderStyles[style][borders.bottomRightOuter]]};
    border-bottom-color: ${({ theme }) =>
      theme[borderStyles[style][borders.bottomRightOuter]]};
    box-shadow: ${({ theme, shadow: hasShadow }) =>
      createInnerBorderWithShadow({
        theme,
        topLeftInner: borderStyles[style][borders.topLeftInner],
        bottomRightInner: borderStyles[style][borders.bottomRightInner],
        hasShadow
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
  outline: 2px dotted ${({ theme }) => theme.materialText};
`;

const nodeBtoa = (string: string) => Buffer.from(string).toString('base64');
const base64encode = typeof btoa !== 'undefined' ? btoa : nodeBtoa;

const createTriangleSVG = (color: Color, angle = 0) => {
  const svg = `<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${angle} 13 13)">
      <polygon fill="${color}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;
  const encoded = base64encode(svg);
  return `url(data:image/svg+xml;base64,${encoded})`;
};

export const createScrollbars = (variant = 'default') => css`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
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
      outline-offset: -2px;
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
    outline-offset: -2px;
    height: 26px;
    width: 26px;
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
    background-image: ${({ theme }) =>
      createTriangleSVG(theme.materialText, 90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({ theme }) =>
      createTriangleSVG(theme.materialText, 270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({ theme }) =>
      createTriangleSVG(theme.materialText, 180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({ theme }) =>
      createTriangleSVG(theme.materialText, 0)};
  }
`;
