import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { styledDimension } from '../common';

import { StyledScrollView } from '../ScrollView/ScrollView';

type MonitorProps = {
  backgroundStyles?: React.CSSProperties;
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  padding-bottom: ${styledDimension(13)};
`;

const Inner = styled.div`
  position: relative;
`;

const MonitorBody = styled.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: ${styledDimension(97.5)};
  height: ${styledDimension(77.5)};
  padding: ${styledDimension(6)};
  background: ${({ theme }) => theme.material};
  border-top: ${styledDimension(2)} solid ${({ theme }) => theme.borderLightest};
  border-left: ${styledDimension(2)} solid
    ${({ theme }) => theme.borderLightest};
  border-bottom: ${styledDimension(2)} solid ${({ theme }) => theme.borderDark};
  border-right: ${styledDimension(2)} solid ${({ theme }) => theme.borderDark};

  outline: ${styledDimension(0.5)} dotted ${({ theme }) => theme.material};
  outline-offset: ${styledDimension(-1.5)};
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: ${styledDimension(0.5)} dotted ${({ theme }) => theme.material};
  }
  box-shadow: ${styledDimension(0.5)} ${styledDimension(0.5)} 0
    ${styledDimension(0.5)} ${({ theme }) => theme.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: ${styledDimension(2)};
    right: ${styledDimension(6)};
    width: ${styledDimension(5)};
    border-top: ${styledDimension(1)} solid #4d9046;
    border-bottom: ${styledDimension(1)} solid #07ff00;
  }
`;

const Background = styled(StyledScrollView).attrs(() => ({
  'data-testid': 'background'
}))`
  width: 100%;
  height: 100%;
`;

const Stand = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + ${styledDimension(1)});
  left: 50%;
  transform: translateX(-50%);
  height: ${styledDimension(5)};
  width: 50%;
  background: ${({ theme }) => theme.material};
  border-left: ${styledDimension(1)} solid
    ${({ theme }) => theme.borderLightest};
  border-bottom: ${styledDimension(1)} solid
    ${({ theme }) => theme.borderDarkest};
  border-right: ${styledDimension(1)} solid
    ${({ theme }) => theme.borderDarkest};
  box-shadow: inset 0px 0px 0px ${styledDimension(1)}
    ${({ theme }) => theme.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + ${styledDimension(1)});
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: ${styledDimension(4)};
    background: ${({ theme }) => theme.material};
    border-left: ${styledDimension(1)} solid
      ${({ theme }) => theme.borderLightest};
    border-right: ${styledDimension(1)} solid
      ${({ theme }) => theme.borderDarkest};
    box-shadow: inset 0px 0px 0px ${styledDimension(1)}
      ${({ theme }) => theme.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + ${styledDimension(4)});
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: ${styledDimension(2)};
    background: ${({ theme }) => theme.material};
    border: ${styledDimension(1)} solid ${({ theme }) => theme.borderDark};
    border-bottom: none;
    box-shadow: inset ${styledDimension(0.5)} ${styledDimension(0.5)} 0px
        ${styledDimension(0.5)} ${({ theme }) => theme.borderLightest},
      ${styledDimension(0.5)} ${styledDimension(0.5)} 0 ${styledDimension(0.5)}
        ${({ theme }) => theme.borderDarkest};
  }
`;

const Monitor = forwardRef<HTMLDivElement, MonitorProps>(
  ({ backgroundStyles, children, ...otherProps }, ref) => {
    return (
      <Wrapper ref={ref} {...otherProps}>
        <Inner>
          <MonitorBody>
            <Background style={backgroundStyles}>{children}</Background>
          </MonitorBody>
          <Stand />
        </Inner>
      </Wrapper>
    );
  }
);

Monitor.displayName = 'Monitor';

export { Monitor, MonitorProps };
