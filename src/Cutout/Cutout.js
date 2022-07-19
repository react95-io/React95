import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { insetShadow, createScrollbars } from '../common';

export const StyledCutout = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({ theme }) => theme.borderDark};
  border-top-color: ${({ theme }) => theme.borderDark};
  border-right-color: ${({ theme }) => theme.borderLightest};
  border-bottom-color: ${({ theme }) => theme.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
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
    ${props =>
      props.theme.shadow && props.shadow && `box-shadow:${insetShadow};`}
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${createScrollbars()}
`;

const Cutout = React.forwardRef(function Cutout(props, ref) {
  const { children, ...otherProps } = props;
  return (
    <StyledCutout ref={ref} {...otherProps}>
      <Content>{children}</Content>
    </StyledCutout>
  );
});

Cutout.defaultProps = {
  children: null,
  shadow: true
};

Cutout.propTypes = {
  children: propTypes.node,
  shadow: propTypes.bool
};

export default Cutout;
