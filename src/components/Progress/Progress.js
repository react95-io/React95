import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

import Cutout from '../Cutout/Cutout';
import { blockSizes } from '../common/system';

const Wrapper = styled(Cutout)`
  display: inline-block;
  height: ${blockSizes.md};
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
    ${({ percent }) => percent}% 0,
    ${({ percent }) => percent}% 100%,
    0 100%
  );
`;

const ProgressBar = ({
  width, percent, shadow, style,
}) => (
  <Wrapper style={{ ...style, width }} shadow={shadow}>
    <WhiteBar>
      {percent}
      %
    </WhiteBar>
    <BlueBar percent={percent}>
      {percent}
      %
    </BlueBar>
  </Wrapper>
);

ProgressBar.defaultProps = {
  width: '100%',
  percent: 0,
  shadow: true,
  style: {},
};

ProgressBar.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  percent: propTypes.number,
  style: propTypes.shape([
    propTypes.string,
    propTypes.number,
  ]),
  shadow: propTypes.bool,
};

export default ProgressBar;
