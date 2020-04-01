import styled, { css } from 'styled-components';
import Button from '../Button/Button';

import {
  shadow as commonShadow,
  createDisabledTextStyles,
  createFlatBoxStyles,
  focusOutline
} from '../common';
import { blockSizes } from '../common/system';
import Cutout from '../Cutout/Cutout';

const sharedInputContentStyles = css`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`;
export const StyledSelectContent = styled.div`
  ${sharedInputContentStyles}
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
`;

const sharedHoverStyles = css`
  background: ${({ theme }) => theme.hoverBackground};
  color: ${({ theme }) => theme.inputTextInvert};
`;

const sharedWrapperStyles = css`
  height: ${blockSizes.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme, isDisabled }) =>
    isDisabled ? createDisabledTextStyles() : theme.inputText};
  font-size: 1rem;

  &:focus ${StyledSelectContent} {
    ${sharedHoverStyles}
    ${focusOutline}
    border: 2px solid ${({ theme }) => theme.focusSecondary};
    outline-offset: -2px;
  }
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
`;

export const StyledSelectWrapper = styled(Cutout)`
  ${sharedWrapperStyles}
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
  &:focus {
    outline: 0;
  }
`;

export const StyledFlatSelectWrapper = styled.div`
  ${createFlatBoxStyles()}
  ${sharedWrapperStyles}
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.flatLight : theme.canvas};
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
  ${sharedInputContentStyles}
  cursor: pointer;
  &:disabled {
    ${createDisabledTextStyles()};
    background: ${({ theme }) => theme.material};
    cursor: default;
  }
`;

export const StyledDropdownButton = styled(Button)`
  width: 30px;
  padding: 0;
  z-index: 1;
  flex-shrink: 0;
  ${({ variant }) =>
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
  ${({ native, variant }) =>
    native &&
    (variant === 'flat'
      ? `
      position: absolute;
      right: 0;
      height: 100%;
      pointer-events: none;
      `
      : `
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    pointer-events: none;
    `)}
`;

export const StyledDropdownIcon = styled.span`
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
    ${({ theme, isDisabled }) => (isDisabled ? theme.textDisabled : theme.text)};
  ${StyledDropdownButton}:active & {
    margin-top: 2px;
  }
  ${StyledDropdownButton}:disabled & {
    filter: drop-shadow(1px 1px 0px ${({ theme }) => theme.textDisabledShadow});
    border-top-color: ${({ theme }) => theme.textDisabled};
  }
`;

export const StyledDropdownMenu = styled.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({ theme }) => theme.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 99;
  cursor: pointer;
  ${({ variant }) =>
    variant === 'flat'
      ? css`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({ theme }) => theme.flatDark};
        `
      : css`
          box-shadow: ${props => (props.shadow ? commonShadow : 'none')};
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({ theme }) => theme.borderDarkest};
        `}
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
  color: ${({ theme }) => theme.inputText};
  &:hover,
  &:focus {
    ${sharedHoverStyles}
    outline: 0;
  }
  user-select: none;
`;

export const StyledNativeOption = styled.option``;
