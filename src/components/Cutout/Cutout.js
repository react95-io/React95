import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { insetShadow } from "../common";

const StyledCutout = styled.div`
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
// add padding prop ?

const Cutout = ({ className, style, children, shadow, ...otherProps }) => {
  return (
    <StyledCutout
      shadow={shadow}
      className={className}
      style={style}
      {...otherProps}
    >
      {children}
    </StyledCutout>
  );
};

Cutout.defaultProps = {
  shadow: true
};

Cutout.propTypes = {
  className: propTypes.string,
  shadow: propTypes.bool,
  children: propTypes.node,
  style: propTypes.object
};

export default Cutout;
