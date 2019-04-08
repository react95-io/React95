import styled, { css } from "styled-components";
import { colors, fontSizes, padding, fontFamily } from "./theme.variables";

export const shadow = `4px 4px 10px 0 rgba(0, 0, 0, 0.35)`;
export const insetShadow = `inset 3px 3px 10px rgba(0, 0, 0, 0.2)`;

export const StyledMaterial = styled.div`
  box-sizing: border-box;
  display: inline-block;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.material};
`;
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

export const StyledCutout = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;

  border-style: solid;
  border-width: 2px;
  border-left-color: ${({ theme }) => theme.borderDark};
  border-top-color: ${({ theme }) => theme.borderDark};
  border-right-color: ${({ theme }) => theme.borderLightest};
  border-bottom-color: ${({ theme }) => theme.borderLightest};

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    content: "";
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({ theme }) => theme.borderDarkest};
    border-top-color: ${({ theme }) => theme.borderDarkest};
    border-right-color: ${({ theme }) => theme.borderLight};
    border-bottom-color: ${({ theme }) => theme.borderLight};

    pointer-events: none;
    ${props => props.shadow && "box-shadow:" + insetShadow + ";"}
  }
`;

export const StyledTextInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 ${padding.sm};
  outline: none;
  border: none;
  background: none;
  font-size: ${fontSizes.md};
  font-family: ${fontFamily};
  color: ${({ theme, disabled }) =>
    disabled ? theme.inputTextDisabled : theme.inputText};
  text-shadow: ${({ theme, disabled }) =>
    disabled ? "1px 1px " + theme.inputTextDisabledShadow : "none"};
  /* filter: ${props => (props.disabled ? "grayscale(100%)" : "none")}; */
`;
