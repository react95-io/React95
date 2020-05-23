import React, { forwardRef, useRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';

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
const commonBarStyles = css`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const WhiteBar = styled.div`
  position: relative;
  top: 4px;
  ${commonBarStyles}
  background: ${({ theme }) => theme.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({ theme }) => theme.materialText};
`;

const BlueBar = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${commonBarStyles}
  color: ${({ theme }) => theme.materialTextInvert};
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

    // then listen on window resize to recalculate number of tiles
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // recalculate number of tiles when value changes
  useEffect(() => {
    savedCallback.current();
  }, [value]);
  return (
    <Wrapper
      // TODO what to do with ref from forwardRef ?
      ref={ref}
      role='progressbar'
      {...progressProps}
      {...otherProps}
    >
      <ProgressCutout shadow={shadow}>
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
