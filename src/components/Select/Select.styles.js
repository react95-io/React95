import styled, { css } from 'styled-components';
import Button from '../Button/Button';

import {
  shadow as commonShadow,
  createDisabledTextStyles,
  createFlatBoxStyles
} from '../common';
import { blockSizes, fontSizes, padding } from '../common/system';
import Cutout from '../Cutout/Cutout';

const sharedWrapperStyles = css`
  height: ${blockSizes.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.material : theme.canvas};
  color: ${({ theme, isDisabled }) =>
    isDisabled ? createDisabledTextStyles() : theme.inputText};
  font-size: ${fontSizes.md};
`;

export const StyledSelectWrapper = styled(Cutout)`
  ${sharedWrapperStyles}
`;

export const StyledFlatSelectWrapper = styled.div`
  ${createFlatBoxStyles()}
  ${sharedWrapperStyles}
`;

export const StyledNativeSelect = styled.select`
  ${sharedWrapperStyles}
`;

export const StyledSelectContent = styled.div`
  width: 100%;
  padding-left: ${padding.sm};
  overflow: hidden;
  white-space: nowrap;
`;

export const StyledDropdownButton = styled(Button)`
  width: 30px;
  padding: 0;
  z-index: 1;
  flex-shrink: 0;
  ${({ variant }) =>
    variant === 'flat'
      ? css`
          height: calc(100% - 4px);
          margin-right: 2px;
        `
      : css`
          height: 100%;
          border-left-color: ${({ theme }) => theme.borderLight};
          border-top-color: ${({ theme }) => theme.borderLight};
          box-shadow: inset 1px 1px 0 1px ${({ theme }) => theme.borderLightest},
            inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
        `}
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
`;

export const StyledDropdownMenu = styled.ul`
  box-sizing: border-box;

  font-size: ${fontSizes.md};
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({ theme }) => theme.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 99;

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
  padding-left: ${padding.sm};

  height: calc(${blockSizes.md} - 4px);
  line-height: calc(${blockSizes.md} - 4px);
  font-size: ${fontSizes.md};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.inputText};
  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
    color: ${({ theme }) => theme.inputTextInvert};
  }
`;

export const StyledNativeOption = styled.option``;
