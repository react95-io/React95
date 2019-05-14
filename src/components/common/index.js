import { css } from "styled-components";

export const shadow = `4px 4px 10px 0 rgba(0,0,0,0.35)`;
export const insetShadow = `inset 3px 3px 10px rgba(0,0,0,0.2)`;

export const createDisabledTextStyles = () => css`
  color: ${({ theme }) => theme.textDisabled};
  text-shadow: 1px 1px ${({ theme }) => theme.textDisabledShadow};
  /* filter: grayscale(100%); */
`;
export const createBoxStyles = () =>
  css`
    box-sizing: border-box;
    display: inline-block;
    background-color: ${({ theme }) => theme.material};
    color: ${({ theme }) => theme.text};
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
        box-shadow: ${props => props.shadow && shadow + ", "} inset 1px 1px 0px
            1px ${({ theme }) => theme.borderDark},
          inset -1px -1px 0 1px ${({ theme }) => theme.borderLight};
      `
    : css`
        border-style: solid;
        border-width: 2px;
        border-left-color: ${({ theme }) => theme.borderLightest};
        border-top-color: ${({ theme }) => theme.borderLightest};
        border-right-color: ${({ theme }) => theme.borderDarkest};
        border-bottom-color: ${({ theme }) => theme.borderDarkest};
        box-shadow: ${props => props.shadow && shadow + ", "} inset 1px 1px 0px
            1px ${({ theme }) => theme.borderLight},
          inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
      `;
