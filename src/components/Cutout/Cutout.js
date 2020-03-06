import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { insetShadow } from '../common';

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
    ${props => props.shadow && `box-shadow:${insetShadow};`}
  }
`;

const Cutout = React.forwardRef(function Cutout(props, ref) {
  const { children, shadow, ...otherProps } = props;
  return (
    <StyledCutout shadow={shadow} ref={ref} {...otherProps}>
      {children}
    </StyledCutout>
  );
});

Cutout.defaultProps = {
  shadow: true,
  children: null
};

Cutout.propTypes = {
  shadow: propTypes.bool,
  children: propTypes.node
};

export default Cutout;
