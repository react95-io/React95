import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";

import { StyledCutout } from "../common";
import { blockSizes, colors } from "../common/theme.variables";

const Wrapper = styled(StyledCutout)`
  display: inline-block;
  width: ${props => props.width}px;
  height: ${blockSizes.md};
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
`;

const WhiteBar = styled.div`
  width: calc(100% - 4px);
  line-height: ${blockSizes.md};
  background: ${colors.light};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${colors.dark};
`;

const BlueBarContainer = styled.div`
  width: ${props => props.percent}%;
  position: absolute;

  top: 0;
  left: 0;
  margin-left: 2px;
  margin-top: -2px;
  overflow: hidden;
  box-shadow: inset 0 0 20px ${colors.blue};
  background: ${colors.navy};
`;

const BlueBar = styled.div`
  width: ${props => props.width - 8}px;
  height: 100%;
  line-height: ${blockSizes.md};
  color: ${colors.light};
`;

const ProgressBar = ({ width, percent, shadow }) => (
  <Wrapper width={width} shadow={shadow}>
    <WhiteBar width={width}>{percent}%</WhiteBar>
    <BlueBarContainer percent={percent}>
      <BlueBar width={width}>{percent}%</BlueBar>
    </BlueBarContainer>
  </Wrapper>
);

ProgressBar.defaultProps = {
  width: 250,
  percent: 0,
  shadow: true
};
ProgressBar.propTypes = {
  width: propTypes.number,
  percent: propTypes.number,
  shadow: propTypes.bool
};

export default ProgressBar;
