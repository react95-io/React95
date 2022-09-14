import styled, { css } from 'styled-components';

import { StyledButton as Button } from '../Button/Button';
import {
  createDisabledTextStyles,
  createFlatBoxStyles,
  createScrollbars,
  shadow as commonShadow,
  styledDimension
} from '../common';
import { blockSizes, styledBlockSize } from '../common/system';
import { StyledScrollView } from '../ScrollView/ScrollView';
import { CommonThemeProps } from '../types';

import { SelectVariants } from './Select.types';

type CommonSelectStyleProps = {
  $disabled?: boolean;
  native?: boolean;
  variant?: SelectVariants;
} & CommonThemeProps;

const sharedInputContentStyles = css`
  box-sizing: border-box;
  padding-left: ${styledDimension(2)};
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`;

const sharedHoverStyles = css`
  background: ${({ theme }) => theme.hoverBackground};
  color: ${({ theme }) => theme.canvasTextInvert};
`;
export const StyledInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const StyledSelectContent = styled.div`
  ${sharedInputContentStyles}
  padding-right: ${styledDimension(4)};
  align-items: center;
  display: flex;
  height: calc(100% - ${styledDimension(2)});
  width: calc(100% - ${styledDimension(2)});
  margin: 0 ${styledDimension(1)};
  border: ${styledDimension(1)} solid transparent;
  ${StyledInner}:focus & {
    ${sharedHoverStyles}
    border: ${styledDimension(1)} dotted ${({ theme }) => theme.focusSecondary};
  }
`;
const sharedWrapperStyles = css<CommonSelectStyleProps>`
  height: ${styledBlockSize('md')};
  display: inline-block;
  color: ${({ $disabled = false, theme }) =>
    $disabled ? createDisabledTextStyles() : theme.canvasText};
  font-size: 1rem;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
`;

export const StyledSelectWrapper = styled(
  StyledScrollView
)<CommonSelectStyleProps>`
  ${sharedWrapperStyles}
  background: ${({ $disabled = false, theme }) =>
    $disabled ? theme.material : theme.canvas};
  &:focus {
    outline: 0;
  }
`;

export const StyledFlatSelectWrapper = styled.div<CommonSelectStyleProps>`
  ${createFlatBoxStyles()}
  ${sharedWrapperStyles}
  background: ${({ $disabled = false, theme }) =>
    $disabled ? theme.flatLight : theme.canvas};
`;

export const StyledNativeSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: ${styledDimension(15)};
  ${sharedInputContentStyles}
  cursor: pointer;
  &:disabled {
    ${createDisabledTextStyles()};
    background: ${({ theme }) => theme.material};
    cursor: default;
  }
`;

export const StyledDropdownButton = styled(Button).attrs(() => ({
  'aria-hidden': 'true'
}))<CommonSelectStyleProps>`
  width: ${styledDimension(15)};
  padding: 0;
  flex-shrink: 0;
  ${({ variant = 'default' }) =>
    variant === 'flat'
      ? css`
          height: 100%;
          margin-right: 0;
        `
      : css`
          height: 100%;
          &:before {
            border-left-color: ${({ theme }) => theme.borderLight};
            border-top-color: ${({ theme }) => theme.borderLight};
            box-shadow: inset ${styledDimension(0.5)} ${styledDimension(0.5)}
                0px ${styledDimension(0.5)}
                ${({ theme }) => theme.borderLightest},
              inset -${styledDimension(0.5)} -${styledDimension(0.5)} 0
                ${styledDimension(0.5)} ${({ theme }) => theme.borderDark};
          }
        `}
  ${({ native = false, variant = 'default' }) =>
    native &&
    (variant === 'flat'
      ? `
      position: absolute;
      right: 0;
      height: 100%;
      `
      : css`
          position: absolute;
          top: ${styledDimension(1)};
          right: ${styledDimension(1)};
          height: calc(100% - ${styledDimension(2)});
        `)}
    pointer-events: ${({ $disabled = false, native = false }) =>
    $disabled || native ? 'none' : 'auto'}
`;

export const StyledDropdownIcon = styled.span<CommonSelectStyleProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: ${styledDimension(3)} solid transparent;
  border-right: ${styledDimension(3)} solid transparent;
  display: inline-block;
  border-top: ${styledDimension(3)} solid
    ${({ $disabled = false, theme }) =>
      $disabled ? theme.materialTextDisabled : theme.materialText};
  ${({ $disabled = false, theme }) =>
    $disabled &&
    css`
      filter: drop-shadow(
        ${styledDimension(0.5)} ${styledDimension(0.5)} 0px
          ${theme.materialTextDisabledShadow}
      );
      border-top-color: ${theme.materialTextDisabled};
    `}
  ${StyledDropdownButton}:active & {
    margin-top: ${styledDimension(1)};
  }
`;

export const StyledDropdownMenu = styled.ul<CommonSelectStyleProps>`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({ theme }) => theme.canvas};
  padding: ${styledDimension(1)};
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${commonShadow};
  ${({ variant = 'default' }) =>
    variant === 'flat'
      ? css`
          bottom: ${styledDimension(1)};
          width: 100%;
          border: ${styledDimension(1)} solid ${({ theme }) => theme.flatDark};
        `
      : css`
          bottom: -${styledDimension(1)};
          width: calc(100% - ${styledDimension(1)});
          border: ${styledDimension(1)} solid
            ${({ theme }) => theme.borderDarkest};
        `}
  ${({ variant = 'default' }) => createScrollbars(variant)}
`;

export const StyledDropdownMenuItem = styled.li<{ active: boolean }>`
  box-sizing: border-box;

  width: 100%;
  padding-left: ${styledDimension(4)};

  height: calc(${blockSizes.md} - ${styledDimension(2)});
  line-height: calc(${blockSizes.md} - ${styledDimension(2)});
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.canvasText};
  &:focus {
    outline: 0;
  }
  ${({ active }) => (active ? sharedHoverStyles : '')}
  user-select: none;
`;
