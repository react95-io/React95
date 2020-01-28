import React from 'react';
import propTypes from 'prop-types';

import styled, { keyframes, css } from 'styled-components';

import Cutout from '../Cutout/Cutout';
import { blockSizes } from '../common/system';

const Wrapper = styled(Cutout)`
  display: inline-block;
  height: ${({ variant }) =>
    variant === 'indeterminate' ? '15px' : blockSizes.md};
  width: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
`;

const WhiteBar = styled.div`
  width: calc(100% - 4px);
  line-height: ${blockSizes.md};
  background: ${({ theme }) => theme.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({ theme }) => theme.text};
`;

const BlueBar = styled.div`
  position: absolute;

  top: -2px;
  left: 2px;
  width: calc(100% - 4px);
  line-height: ${blockSizes.md};

  color: ${({ theme }) => theme.textInvert};
  background: ${({ theme }) => theme.progress};
  clip-path: polygon(
    0 0,
    ${({ value }) => value}% 0,
    ${({ value }) => value}% 100%,
    0 100%
  );
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

const ProgressBar = ({ value, variant, shadow, ...otherProps }) => (
  <Wrapper variant={variant} shadow={shadow} {...otherProps}>
    {variant === 'default' ? (
      <>
        <WhiteBar>{value}%</WhiteBar>
        <BlueBar value={value}>{value}%</BlueBar>
      </>
    ) : (
      <>
        <IndeterminatePrimary>
          <IndeterminatePrimaryInner />
        </IndeterminatePrimary>
        <IndeterminateSecondary>
          <IndeterminateSecondaryInner />
        </IndeterminateSecondary>
      </>
    )}
  </Wrapper>
);

ProgressBar.defaultProps = {
  value: 0,
  shadow: true,
  style: {},
  variant: 'default'
};

ProgressBar.propTypes = {
  value: propTypes.number,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  variant: propTypes.oneOf(['default', 'indeterminate']),
  shadow: propTypes.bool
};

export default ProgressBar;
