import React, { forwardRef, useRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

import Cutout from '../Cutout/Cutout';
import { blockSizes } from '../common/system';

const Wrapper = styled.div`
  display: inline-block;
  height: ${blockSizes.md};
  width: 100%;
`;
const ProgressCutout = styled(Cutout)`
  width: 100%;
  height: 100%;
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

const TilesWrapper = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`;
const tileWidth = 17;
const Tile = styled.span`
  display: inline-block;
  width: ${tileWidth}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({ theme }) => theme.progress};
  border-color: ${({ theme }) => theme.material};
  border-width: 0px 1px;
  border-style: solid;
`;

const Progress = forwardRef(function Progress(props, ref) {
  const { value, variant, shadow, hideValue, ...otherProps } = props;
  const displayValue = hideValue ? null : `${value}%`;

  const progressProps = {};
  if (value !== undefined) {
    progressProps['aria-valuenow'] = Math.round(value);
  }

  const tilesWrapperRef = useRef();
  const savedCallback = useRef();
  const [tilesNumber, setTilesNumber] = useState(0);

  // TODO debounce this function
  function updateTilesNumber() {
    if (tilesWrapperRef.current) {
      const progressWidth = tilesWrapperRef.current.getBoundingClientRect()
        .width;
      const newTilesNumber = Math.round(
        ((value / 100) * progressWidth) / tileWidth
      );
      setTilesNumber(newTilesNumber);
    }
  }
  useEffect(() => {
    savedCallback.current = updateTilesNumber;
  });
  useEffect(() => {
    function update() {
      savedCallback.current();
    }
    // run function immediately to calculate number of tiles
    update();
    // then listen on window resize to recalculate that number
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <Wrapper
      // TODO what to do with ref from forwardRef ?
      ref={ref}
      role='progressbar'
      shadow={shadow}
      {...progressProps}
      {...otherProps}
    >
      <ProgressCutout>
        {variant === 'default' ? (
          <>
            <WhiteBar data-testid='defaultProgress1'>{displayValue}</WhiteBar>
            <BlueBar data-testid='defaultProgress2' value={value}>
              {displayValue}
            </BlueBar>
          </>
        ) : (
          <TilesWrapper ref={tilesWrapperRef} data-testid='tileProgress'>
            {Array(tilesNumber)
              .fill(null)
              .map((_, index) => (
                <Tile key={index} />
              ))}
          </TilesWrapper>
        )}
      </ProgressCutout>
    </Wrapper>
  );
});

Progress.defaultProps = {
  value: 0,
  shadow: true,
  variant: 'default',
  hideValue: false
};

Progress.propTypes = {
  value: propTypes.number,
  shadow: propTypes.bool,
  variant: propTypes.oneOf(['default', 'tile']),
  hideValue: propTypes.bool
};

export default Progress;
