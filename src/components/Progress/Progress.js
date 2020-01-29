import React, { forwardRef } from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

import Cutout from '../Cutout/Cutout';
import { blockSizes } from '../common/system';

const Wrapper = styled(Cutout)`
  display: inline-block;
  height: ${blockSizes.md};
  width: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
`;

const WhiteBar = styled.div`
  width: calc(100% - 4px);
  height: ${blockSizes.md};
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
  height: ${blockSizes.md};

  line-height: ${blockSizes.md};

  color: ${({ theme }) => theme.textInvert};
  background: ${({ theme }) => theme.progress};
  clip-path: polygon(
    0 0,
    ${({ value }) => value}% 0,
    ${({ value }) => value}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`;

const Progress = forwardRef(function Progress(props, ref) {
  const { value, shadow, hideValue, ...otherProps } = props;
  const displayValue = hideValue ? null : `${value}%`;

  const progressProps = {};
  if (value !== undefined) {
    progressProps['aria-valuenow'] = Math.round(value);
  }
  return (
    <Wrapper
      ref={ref}
      role='progressbar'
      shadow={shadow}
      {...progressProps}
      {...otherProps}
    >
      <WhiteBar data-testid='defaultProgress1'>{displayValue}</WhiteBar>
      <BlueBar data-testid='defaultProgress2' value={value}>
        {displayValue}
      </BlueBar>
    </Wrapper>
  );
});

Progress.defaultProps = {
  value: 0,
  shadow: true,
  hideValue: false
};

Progress.propTypes = {
  value: propTypes.number,
  shadow: propTypes.bool,
  hideValue: propTypes.bool
};

export default Progress;
