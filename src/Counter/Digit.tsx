import React from 'react';
import styled, { css } from 'styled-components';

import { createHatchedBackground } from '../common';
import { CommonStyledProps } from '../types';

type DigitProps = {
  pixelSize?: number;
  digit?: number | string;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const DigitWrapper = styled.div<Required<Pick<DigitProps, 'pixelSize'>>>`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({ pixelSize }) => css`
    width: ${11 * pixelSize}px;
    height: ${21 * pixelSize}px;
    margin: ${pixelSize}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${createHatchedBackground({
        mainColor: 'var(--react95-digit-bg-color)',
        secondaryColor: 'var(--react95-digit-secondary-color)',
        pixelSize
      })}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${pixelSize}px;
      border-left: ${pixelSize}px solid var(--react95-digit-bg-color);
      border-right: ${pixelSize}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${pixelSize}px;
      border-left: ${pixelSize}px solid var(--react95-digit-primary-color);
      border-right: ${pixelSize}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${pixelSize}px;
      width: ${9 * pixelSize}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${pixelSize}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${pixelSize * 2}px);
      top: ${2 * pixelSize}px;
      left: ${pixelSize}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${pixelSize}px;
      border-left: ${pixelSize}px solid var(--react95-digit-bg-color);
      border-right: ${pixelSize}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${pixelSize}px solid var(--react95-digit-primary-color);
      border-right: ${pixelSize}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${pixelSize}px;
      width: ${9 * pixelSize}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${pixelSize}px;
    }
    span.center:after {
      bottom: ${pixelSize}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${pixelSize}px;
      border-top: ${pixelSize}px solid var(--react95-digit-bg-color);
      border-bottom: ${pixelSize}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11 * pixelSize}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${pixelSize}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${pixelSize * 2}px);
      top: ${pixelSize}px;
      left: ${pixelSize * 2}px;
    }
  `}
`;

const segments = [
  'horizontal top',
  'center',
  'horizontal bottom',
  'vertical top left',
  'vertical top right',
  'vertical bottom left',
  'vertical bottom right'
];

const digitActiveSegments = [
  [1, 0, 1, 1, 1, 1, 1], // 0
  [0, 0, 0, 0, 1, 0, 1], // 1
  [1, 1, 1, 0, 1, 1, 0], // 2
  [1, 1, 1, 0, 1, 0, 1], // 3
  [0, 1, 0, 1, 1, 0, 1], // 4
  [1, 1, 1, 1, 0, 0, 1], // 5
  [1, 1, 1, 1, 0, 1, 1], // 6
  [1, 0, 0, 0, 1, 0, 1], // 7
  [1, 1, 1, 1, 1, 1, 1], // 8
  [1, 1, 1, 1, 1, 0, 1] // 9
];

function Digit({ digit = 0, pixelSize = 2, ...otherProps }: DigitProps) {
  const segmentClasses = digitActiveSegments[Number(digit)].map((isActive, i) =>
    isActive ? `${segments[i]} active` : segments[i]
  );
  return (
    <DigitWrapper pixelSize={pixelSize} {...otherProps}>
      {segmentClasses.map((className, i) => (
        <span className={className} key={i} />
      ))}
    </DigitWrapper>
  );
}

export { Digit, DigitProps };
