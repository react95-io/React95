import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import styled, { css } from 'styled-components';
import { styledDimension } from '../common';

import { blockSizes } from '../common/system';
import { StyledScrollView } from '../ScrollView/ScrollView';
import { CommonStyledProps } from '../types';

type ProgressBarProps = {
  hideValue?: boolean;
  /** @deprecated Change `shadow` property on theme */
  shadow?: boolean;
  value?: number;
  variant?: 'default' | 'tile';
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const Wrapper = styled.div<Required<Pick<ProgressBarProps, 'variant'>>>`
  display: inline-block;
  height: ${blockSizes.md};
  width: 100%;
`;

const ProgressCutout = styled(StyledScrollView)<
  Required<Pick<ProgressBarProps, 'variant'>>
>`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`;
const commonBarStyles = css`
  width: calc(100% - ${styledDimension(2)});
  height: calc(100% - ${styledDimension(2)});

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const WhiteBar = styled.div`
  position: relative;
  top: ${styledDimension(2)};
  ${commonBarStyles}
  background: ${({ theme }) => theme.canvas};
  color: #000;
  margin-left: ${styledDimension(1)};
  margin-top: ${styledDimension(-1)};
  color: ${({ theme }) => theme.materialText};
`;

const BlueBar = styled.div<Pick<ProgressBarProps, 'value'>>`
  position: absolute;
  top: ${styledDimension(1)};
  left: ${styledDimension(1)};
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
  width: calc(100% - ${styledDimension(3)});
  height: calc(100% - ${styledDimension(4)});
  position: absolute;
  left: ${styledDimension(1.5)};
  top: ${styledDimension(2)};
  box-sizing: border-box;
  display: inline-flex;
`;
const tileWidth = 8.5;
const Tile = styled.span`
  display: inline-block;
  width: ${styledDimension(tileWidth)};
  box-sizing: border-box;
  height: 100%;
  background: ${({ theme }) => theme.progress};
  border-color: ${({ theme }) => theme.material};
  border-width: 0px ${styledDimension(0.5)};
  border-style: solid;
`;

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    { hideValue = false, shadow, value, variant = 'default', ...otherProps },
    ref
  ) => {
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
      <Wrapper
        aria-valuenow={value !== undefined ? Math.round(value) : undefined}
        ref={ref}
        role='progressbar'
        variant={variant}
        {...otherProps}
      >
        <ProgressCutout shadow={shadow} variant={variant}>
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
      </Wrapper>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

export { ProgressBar, ProgressBarProps };
