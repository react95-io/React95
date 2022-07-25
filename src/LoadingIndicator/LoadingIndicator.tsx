import React, { forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { StyledCutout } from '../Cutout/Cutout';
import { CommonStyledProps } from '../types';

type LoadingIndicatorProps = {
  isLoading?: boolean;
  shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const Wrapper = styled.div`
  display: inline-block;
  height: 15px;
  width: 100%;
`;
const ProgressCutout = styled(StyledCutout)`
  width: 100%;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 0;
  overflow: hidden;
`;

// animations taken from https://material.io/develop/web/ Linear Progress
const primaryTranslate = keyframes`
  0% {
     transform: translateX(0);
  }
  20% {
     animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
     transform: translateX(0);
  }
  59.15% {
     animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
     transform: translateX(83.67142%);
  }
  100% {
     transform: translateX(200.611057%);
  }
`;
const primaryScale = keyframes`
0% {
     transform: scaleX(0.08);
  }
  36.65% {
     animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
     transform: scaleX(0.08);
  }
  69.15% {
     animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
     transform: scaleX(0.661479);
  }
  100% {
     transform: scaleX(0.08);
  }
`;
const secondaryTranslate = keyframes`
 0% {
   animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
   transform: translateX(0);
  }
  25% {
   animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
   transform: translateX(37.651913%);
  }
  48.35% {
   animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
   transform: translateX(84.386165%);
  }
  100% {
   transform: translateX(160.277782%);
  }
`;
const secondaryScale = keyframes`
   0% {
   animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
   transform: scaleX(0.08);
  }
  19.15% {
   animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
   transform: scaleX(0.457104);
  }
  44.15% {
   animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
   transform: scaleX(0.72796);
  }
  100% {
   transform: scaleX(0.08);
  }
`;
const sharedIndeterminateStyles = css`
  height: 100%;
  width: 100%;
  position: absolute;
  transform-origin: top left;
  transform: scaleX(0);
`;
const sharedIndeterminateInnerStyles = css`
  height: 100%;
  width: 100%;
  display: inline-block;
  background: ${({ theme }) => theme.progress};
  position: absolute;
`;
const IndeterminateWrapper = styled.div`
  position: relative;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  overflow: hidden;
`;
const IndeterminatePrimary = styled.div`
  ${sharedIndeterminateStyles}
  left: -145.166611%;
  animation: ${primaryTranslate} 2s infinite linear;
`;
const IndeterminatePrimaryInner = styled.span`
  ${sharedIndeterminateInnerStyles}
  animation: ${primaryScale} 2s infinite linear;
`;
const IndeterminateSecondary = styled.div`
  ${sharedIndeterminateStyles}
  left: -54.888891%;
  animation: ${secondaryTranslate} 2s infinite linear;
`;
const IndeterminateSecondaryInner = styled.span`
  ${sharedIndeterminateInnerStyles}
  animation: ${secondaryScale} 2s infinite linear;
`;

const LoadingIndicator = forwardRef<HTMLDivElement, LoadingIndicatorProps>(
  function LoadingIndicator(
    { isLoading = true, shadow = false, ...otherProps },
    ref
  ) {
    return (
      <Wrapper ref={ref} role='progressbar' {...otherProps}>
        <ProgressCutout shadow={shadow}>
          {isLoading && (
            <IndeterminateWrapper data-testid='loading-wrapper'>
              <IndeterminatePrimary>
                <IndeterminatePrimaryInner />
              </IndeterminatePrimary>
              <IndeterminateSecondary>
                <IndeterminateSecondaryInner />
              </IndeterminateSecondary>
            </IndeterminateWrapper>
          )}
        </ProgressCutout>
      </Wrapper>
    );
  }
);

export { LoadingIndicator, LoadingIndicatorProps };
