import styled, { css } from "styled-components";
import { colors, fontSizes, padding, fontFamily } from "./theme.variables";

const { bg, light, dark, lightGray, darkGray } = colors;

export const shadow = `4px 4px 10px 0 rgba(0, 0, 0, 0.35)`;
export const insetShadow = `inset 3px 3px 10px rgba(0, 0, 0, 0.3)`;

export const StyledMaterial = styled.div`
  box-sizing: border-box;
  display: inline-block;

  background-color: ${bg};
`;
export const createDisabledTextStyles = () => `
  color: ${darkGray};
  text-shadow: 1px 1px ${light};
  filter: grayscale(100%);
`;
export const createBoxStyles = () =>
  `
    box-sizing: border-box;
    display: inline-block;
    background-color: ${bg};
  `;
export const createBorderStyles = (invert = false) =>
  invert
    ? css`
        border-style: solid;
        border-width: 2px;
        border-left-color: ${dark};
        border-top-color: ${dark};
        border-right-color: ${light};
        border-bottom-color: ${light};
        box-shadow: ${props => props.shadow && shadow + ", "} inset 1px 1px 0px
            1px ${darkGray},
          inset -1px -1px 0 1px ${lightGray};
      `
    : css`
        border-style: solid;
        border-width: 2px;
        border-left-color: ${light};
        border-top-color: ${light};
        border-right-color: ${dark};
        border-bottom-color: ${dark};
        box-shadow: ${props => props.shadow && shadow + ", "} inset 1px 1px 0px
            1px ${lightGray},
          inset -1px -1px 0 1px ${darkGray};
      `;

export const StyledCutout = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;

  border-style: solid;
  border-width: 2px;
  border-left-color: ${darkGray};
  border-top-color: ${darkGray};
  border-right-color: ${light};
  border-bottom-color: ${light};

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
    border-left-color: ${dark};
    border-top-color: ${dark};
    border-right-color: ${lightGray};
    border-bottom-color: ${lightGray};

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
  color: ${props => (props.disabled ? darkGray : dark)};
  text-shadow: ${props => (props.disabled ? "1px 1px " + light : "none")};
  filter: ${props => (props.disabled ? "grayscale(100%)" : "none")};
`;
