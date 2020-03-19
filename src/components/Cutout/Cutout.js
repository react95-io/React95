import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

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
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({ theme }) => theme.borderDarkest};
    border-top-color: ${({ theme }) => theme.borderDarkest};
    border-right-color: ${({ theme }) => theme.borderLight};
    border-bottom-color: ${({ theme }) => theme.borderLight};

    pointer-events: none;
    ${({ shadow, theme }) =>
      console.log(theme) || (shadow && `box-shadow:${theme.insetShadow};`)}
  }
`;
// add padding prop ?

const Cutout = ({ className, style, children, shadow, ...otherProps }) => (
  <StyledCutout
    shadow={shadow}
    className={className}
    style={style}
    {...otherProps}
  >
    {children}
  </StyledCutout>
);

Cutout.defaultProps = {
  shadow: true,
  className: '',
  children: null,
  style: {}
};

Cutout.propTypes = {
  className: propTypes.string,
  shadow: propTypes.bool,
  children: propTypes.node,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default Cutout;
