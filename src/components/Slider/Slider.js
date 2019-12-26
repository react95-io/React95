import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createBoxStyles, createBorderStyles } from '../common';

import Cutout from '../Cutout/Cutout';

const Wrapper = styled.div`
  position: relative;
`;

const SliderR = styled(Cutout)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 8px;
  width: 100%;
`;

const Thumb = styled.span`
  height: 32px;
  width: 16px;
  position: relative;
  z-index: 1;
  ${createBoxStyles()}
  ${createBorderStyles()}
`;
const Slider = ({ value, step, min, max, width }) => {
  const test = step + min + max;
  return (
    <Wrapper style={{ width }}>
      <input type='hidden' value={value} />
      <SliderR />
      <Thumb />
      {0 === 1 && test}
    </Wrapper>
  );
};

// defaultValue
// useDebugValue
// disabled
// marks
// max
// min
// onChange
// onChangeCommited
// orientation
// step

Slider.defaultProps = {
  value: 0,
  step: 1,
  min: 0,
  max: 1,
  width: '100%'
};

Slider.propTypes = {
  value: propTypes.number,
  step: propTypes.number,
  min: propTypes.number,
  max: propTypes.number,
  width: propTypes.oneOfType([propTypes.string, propTypes.number])
};
export default Slider;
