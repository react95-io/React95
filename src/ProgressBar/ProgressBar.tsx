import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import styled, { css } from 'styled-components';

import { blockSizes } from '../common/system';
import { StyledScrollView } from '../ScrollView/ScrollView';
import { CommonStyledProps } from '../types';

type ProgressBarProps = {
  hideValue?: boolean;
  shadow?: boolean;
  value?: number;
  variant?: 'default' | 'tile';
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const ProgressCutout = styled(StyledScrollView)<
  Required<Pick<ProgressBarProps, 'variant'>>
>`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  overflow: hidden;
  display: inline-block;
  height: ${blockSizes.md};
  width: 100%;
`;
const commonBarStyles = css`
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const WhiteBar = styled.div`
  ${commonBarStyles}
  background: ${({ theme }) => theme.canvas};
  color: #000;
  color: ${({ theme }) => theme.materialText};
`;

const BlueBar = styled.div<Pick<ProgressBarProps, 'value'>>`
  ${commonBarStyles}
  color: ${({ theme }) => theme.materialTextInvert};
  background: ${({ theme }) => theme.progress};
  clip-path: polygon(
    0 0,
    ${({ value = 0 }) => value}% 0,
    ${({ value = 0 }) => value}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`;

const TilesWrapper = styled.div`
  position: absolute;
  left: 6px;
  top: 6px;
  right: 6px;
  bottom: 6px;
  /* -1px horizontal margin to make up for the Tile border */
  margin: 0 -1px;
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
  background-clip: padding-box;
  border-color: ${({ theme }) => theme.material};
  border-width: 0px 1px;
  border-style: solid;
`;

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ hideValue = false, value, variant = 'default', ...otherProps }, ref) => {
    const displayValue = hideValue ? null : `${value}%`;

    const tilesWrapperRef = useRef<HTMLDivElement | null>(null);
    const [tiles, setTiles] = useState([]);

    // TODO debounce this function
    const updateTilesNumber = useCallback(() => {
      if (!tilesWrapperRef.current || value === undefined) {
        return;
      }
      const progressWidth =
        tilesWrapperRef.current.getBoundingClientRect().width;
      const newTilesNumber = Math.round(
        ((value / 100) * progressWidth) / tileWidth
      );
      setTiles(Array.from({ length: newTilesNumber }));
    }, [value]);

    useEffect(() => {
      updateTilesNumber();

      window.addEventListener('resize', updateTilesNumber);
      return () => window.removeEventListener('resize', updateTilesNumber);
    }, [updateTilesNumber]);

    return (
      <ProgressCutout
        aria-valuenow={value !== undefined ? Math.round(value) : undefined}
        ref={ref}
        role='progressbar'
        variant={variant}
        {...otherProps}
      >
        {variant === 'default' ? (
          <>
            <WhiteBar data-testid='defaultProgress1'>{displayValue}</WhiteBar>
            <BlueBar data-testid='defaultProgress2' value={value}>
              {displayValue}
            </BlueBar>
          </>
        ) : (
          <TilesWrapper ref={tilesWrapperRef} data-testid='tileProgress'>
            {tiles.map((_, index) => (
              <Tile key={index} />
            ))}
          </TilesWrapper>
        )}
      </ProgressCutout>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

export { ProgressBar, ProgressBarProps };
