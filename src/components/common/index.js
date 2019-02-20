import styled from "styled-components";
import { colors, fontSizes } from "./theme.variables";

const { bg, light, dark, lightGray, darkGray } = colors;

const shadow = `4px 4px 10px 0 rgba(0, 0, 0, 0.35)`;

export const StyledMaterial = styled.div`
  box-sizing: border-box;
  display: inline-block;

  background-color: ${colors.bg};
  border-style: solid;
  border-width: 2px;
  border-left-color: ${props => (props.hollow ? dark : light)};
  border-top-color: ${props => (props.hollow ? dark : light)};
  border-right-color: ${props => (props.hollow ? light : dark)};
  border-bottom-color: ${props => (props.hollow ? light : dark)};

  box-shadow: inset 1px 1px 0px 1px
      ${props => (props.hollow ? darkGray : lightGray)},
    inset -1px -1px 0 1px ${props => (props.hollow ? lightGray : darkGray)}
      ${props => (props.shadow && !props.hollow ? ", " + shadow : "")};
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
    box-shadow: inset 3px 3px 10px rgba(0, 0, 0, 0.3);
  }
`;
