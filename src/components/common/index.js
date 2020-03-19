import { css } from 'styled-components';

export const createDisabledTextStyles = () => css`
  color: ${({ theme }) => theme.textDisabled};
  text-shadow: 1px 1px ${({ theme }) => theme.textDisabledShadow};
  /* filter: grayscale(100%); */
  -webkit-text-fill-color: ${({ theme }) => theme.inputTextDisabled};
`;
export const createBoxStyles = () => css`
  box-sizing: border-box;
  display: inline-block;
  background-color: ${({ theme }) => theme.material};
  color: ${({ theme }) => theme.text};
`;
// TODO for flat box styles add checkered background when disabled (not solid color)
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
export const createBorderStyles = (invert = false) =>
  invert
    ? css`
        border-style: solid;
        border-width: 2px;
        border-left-color: ${({ theme }) => theme.borderDarkest};
        border-top-color: ${({ theme }) => theme.borderDarkest};
        border-right-color: ${({ theme }) => theme.borderLightest};
        border-bottom-color: ${({ theme }) => theme.borderLightest};
        box-shadow: ${({ shadow, theme }) => shadow && `${theme.shadow}, `}
            inset 1px 1px 0px 1px ${({ theme }) => theme.borderDark},
          inset -1px -1px 0 1px ${({ theme }) => theme.borderLight};
      `
    : css`
        border-style: solid;
        border-width: 2px;
        border-left-color: ${({ theme }) => theme.borderLightest};
        border-top-color: ${({ theme }) => theme.borderLightest};
        border-right-color: ${({ theme }) => theme.borderDarkest};
        border-bottom-color: ${({ theme }) => theme.borderDarkest};
        box-shadow: ${({ shadow, theme }) => shadow && `${theme.shadow}, `}
            inset 1px 1px 0px 1px ${({ theme }) => theme.borderLight},
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
