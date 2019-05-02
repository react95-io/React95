import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { blockSizes } from "../common/system";

const StyledAvatar = styled.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  height: ${props => blockSizes.md};
  width: ${props => blockSizes.md};
  border-radius: ${({ square }) => (square ? 0 : "50%")};

  ${({ noBorder, theme }) =>
    !noBorder &&
    `
    border-top: 2px solid ${theme.borderDark};
    border-left: 2px solid ${theme.borderDark};
    border-bottom: 2px solid ${theme.borderLightest};
    border-right: 2px solid ${theme.borderLightest};
    background: ${theme.material};
  `}
  ${({ src }) =>
    !src &&
    `
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`;
// src takes priority over children

const Avatar = ({ children, noBorder, square, src, ...otherProps }) => {
  return (
    <StyledAvatar
      noBorder={noBorder}
      src={src}
      as={src ? "img" : "div"}
      square={square}
      {...otherProps}
    >
      {!src && children ? children : null}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  square: false,
  noBorder: false,
  src: undefined
};
Avatar.propTypes = {
  square: propTypes.bool,
  noBorder: propTypes.bool,
  src: propTypes.string
};
export default Avatar;
