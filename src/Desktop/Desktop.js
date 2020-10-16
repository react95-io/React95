import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { StyledCutout } from '../Cutout/Cutout';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`;

const Inner = styled.div`
  position: relative;
`;

const Monitor = styled.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({ theme }) => theme.material};
  border-top: 4px solid ${({ theme }) => theme.borderLightest};
  border-left: 4px solid ${({ theme }) => theme.borderLightest};
  border-bottom: 4px solid ${({ theme }) => theme.borderDark};
  border-right: 4px solid ${({ theme }) => theme.borderDark};

  outline: 1px dotted ${({ theme }) => theme.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({ theme }) => theme.material};
  }
  box-shadow: 1px 1px 0 1px ${({ theme }) => theme.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 2px;
    right: 4px;
    width: 4px;
    height: 4px;
    border-top: 2px solid ${({ theme }) => theme.borderDarkest};
    border-left: 2px solid ${({ theme }) => theme.borderDarkest};
    border-bottom: 2px solid ${({ theme }) => theme.borderLightest};
    border-right: 2px solid ${({ theme }) => theme.borderLightest};
    background: rgb(7 255 0);
  }
`;

const Background = styled(StyledCutout).attrs(() => ({
  'data-testid': 'background'
}))`
  width: 100%;
  height: 100%;
`;

const Stand = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({ theme }) => theme.material};
  border-left: 2px solid ${({ theme }) => theme.borderLightest};
  border-bottom: 2px solid ${({ theme }) => theme.borderDarkest};
  border-right: 2px solid ${({ theme }) => theme.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({ theme }) => theme.material};
    border-left: 2px solid ${({ theme }) => theme.borderLightest};
    border-right: 2px solid ${({ theme }) => theme.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({ theme }) => theme.material};
    border: 2px solid ${({ theme }) => theme.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({ theme }) => theme.borderLightest},
      1px 1px 0 1px ${({ theme }) => theme.borderDarkest};
  }
`;

const Desktop = React.forwardRef(function Desktop(props, ref) {
  const { backgroundStyles, children, ...otherProps } = props;

  return (
    <Wrapper ref={ref} {...otherProps}>
      <Inner>
        <Monitor>
          <Background style={backgroundStyles}>{children}</Background>
        </Monitor>
        <Stand />
      </Inner>
    </Wrapper>
  );
});

Desktop.defaultProps = {
  backgroundStyles: null
};

Desktop.propTypes = {
  backgroundStyles: propTypes.object,
  // eslint-disable-next-line react/require-default-props
  children: propTypes.node
};

export default Desktop;
