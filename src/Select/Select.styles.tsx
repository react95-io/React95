import styled, { css } from 'styled-components';

import { StyledButton as Button } from '../Button/Button';
import {
  createDisabledTextStyles,
  createFlatBoxStyles,
  createScrollbars,
  shadow as commonShadow
} from '../common';
import { blockSizes } from '../common/system';
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
  padding-left: 4px;
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
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${StyledInner}:focus & {
    ${sharedHoverStyles}
    border: 2px dotted ${({ theme }) => theme.focusSecondary};
  }
`;
const sharedWrapperStyles = css<CommonSelectStyleProps>`
  height: ${blockSizes.md};
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
  padding-right: 30px;
  ${sharedInputContentStyles}
  cursor: pointer;
  &:disabled {
    ${createDisabledTextStyles()};
    background: ${({ theme }) => theme.material};
    cursor: default;
  }
`;

export const StyledDropdownButton = styled(Button)<CommonSelectStyleProps>`
  width: 30px;
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
            box-shadow: inset 1px 1px 0px 1px
                ${({ theme }) => theme.borderLightest},
              inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
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
      : `
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
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
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({ $disabled = false, theme }) =>
      $disabled ? theme.materialTextDisabled : theme.materialText};
  ${({ $disabled = false, theme }) =>
    $disabled &&
    `
    filter: drop-shadow(1px 1px 0px ${theme.materialTextDisabledShadow});
    border-top-color: ${theme.materialTextDisabled};
    `}
  ${StyledDropdownButton}:active & {
    margin-top: 2px;
  }
`;

export const StyledDropdownMenu = styled.ul<CommonSelectStyleProps>`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({ theme }) => theme.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${commonShadow};
  ${({ variant = 'default' }) =>
    variant === 'flat'
      ? css`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({ theme }) => theme.flatDark};
        `
      : css`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({ theme }) => theme.borderDarkest};
        `}
  ${({ variant = 'default' }) => createScrollbars(variant)}
`;

export const StyledDropdownMenuItem = styled.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${blockSizes.md} - 4px);
  line-height: calc(${blockSizes.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.canvasText};
  &:hover,
  &:focus {
    ${sharedHoverStyles}
    outline: 0;
  }
  user-select: none;
`;

export const StyledNativeOption = styled.option``;
