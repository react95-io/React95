import { css } from 'styled-components';

export const shadow = '4px 4px 10px 0 rgba(0, 0, 0, 0.35)';
export const insetShadow = 'inset 3px 3px 10px rgba(0, 0, 0, 0.2)';

export const createDisabledTextStyles = () => css`
  -webkit-text-fill-color: ${({ theme }) => theme.textDisabled};
  color: ${({ theme }) => theme.textDisabled};
  text-shadow: 1px 1px ${({ theme }) => theme.textDisabledShadow};
  /* filter: grayscale(100%); */
`;
export const createBoxStyles = () => css`
  box-sizing: border-box;
  display: inline-block;
  background: ${({ theme }) => theme.material};
  color: ${({ theme }) => theme.text};
`;
// TODO for flat box styles add checkered background when disabled (not solid color)
export const createHatchedBackground = ({
  mainColor = 'black',
  secondaryColor = 'transparent'
}) => css`
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
  background-size: 4px 4px;
  background-position: 0 0, 2px 2px;
`;
export const createFlatBoxStyles = () => css`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({ theme }) => theme.text};
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.flatLight : theme.canvas};
  border: 2px solid ${({ theme }) => theme.canvas};
  outline: 2px solid ${({ theme }) => theme.flatDark};
  outline-offset: -4px;
`;
export const createBorderStyles = ({
  invert = false,
  windowBorders = false
} = {}) =>
  invert
    ? css`
        border-style: solid;
        border-width: 2px;
        border-left-color: ${({ theme }) => theme.borderDarkest};
        border-top-color: ${({ theme }) => theme.borderDarkest};
        border-right-color: ${({ theme }) => theme.borderLightest};
        border-bottom-color: ${({ theme }) => theme.borderLightest};
        box-shadow: ${props => props.shadow && `${shadow}, `} inset 1px 1px 0px
            1px ${({ theme }) => theme.borderDark},
          inset -1px -1px 0 1px ${({ theme }) => theme.borderLight};
      `
    : css`
        border-style: solid;
        border-width: 2px;
        border-left-color: ${({ theme }) =>
          windowBorders ? theme.borderLight : theme.borderLightest};
        border-top-color: ${({ theme }) =>
          windowBorders ? theme.borderLight : theme.borderLightest};
        border-right-color: ${({ theme }) => theme.borderDarkest};
        border-bottom-color: ${({ theme }) => theme.borderDarkest};
        box-shadow: ${props => props.shadow && `${shadow}, `} inset 1px 1px 0px
            1px
            ${({ theme }) =>
              windowBorders ? theme.borderLightest : theme.borderLight},
          inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
      `;
export const createWellBorderStyles = (invert = false) =>
  invert
    ? css`
        border-style: solid;
        border-width: 2px;
        border-left-color: ${({ theme }) => theme.borderDark};
        border-top-color: ${({ theme }) => theme.borderDark};
        border-right-color: ${({ theme }) => theme.borderLightest};
        border-bottom-color: ${({ theme }) => theme.borderLightest};
      `
    : css`
        border-style: solid;
        border-width: 2px;
        border-left-color: ${({ theme }) => theme.borderLightest};
        border-top-color: ${({ theme }) => theme.borderLightest};
        border-right-color: ${({ theme }) => theme.borderDark};
        border-bottom-color: ${({ theme }) => theme.borderDark};
      `;

export const focusOutline = () => css`
  outline: 2px dotted ${({ theme }) => theme.text};
`;
