import React, { useState } from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import Button from '../Button/Button';

import { shadow as commonShadow, createFlatBoxStyles } from '../common';
import { blockSizes } from '../common/system';
import Cutout from '../Cutout/Cutout';

const sharedWrapperStyles = css`
  height: ${blockSizes.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.canvas};
  color: ${({ theme }) => theme.inputText};
  font-size: 1rem;
`;
const StyledSelectWrapper = styled(Cutout)`
  ${sharedWrapperStyles}
`;
const StyledFlatSelectWrapper = styled.div`
  ${createFlatBoxStyles()}
  ${sharedWrapperStyles}
`;
const StyledSelectContent = styled.div`
  width: 100%;
  padding-left: 8px;
  overflow: hidden;
  white-space: nowrap;
`;
const StyledDropdownButton = styled(Button)`
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
          &:before {
            border-left-color: ${({ theme }) => theme.borderLight};
            border-top-color: ${({ theme }) => theme.borderLight};
            box-shadow: inset 1px 1px 0px 1px
                ${({ theme }) => theme.borderLightest},
              inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
          }
        `}
`;
const StyledDropdownIcon = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid ${({ theme }) => theme.text};
  ${StyledDropdownButton}:active & {
    margin-top: 2px;
  }
`;

const StyledDropdownList = styled.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0px;
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
const StyledDropdownListItem = styled.li`
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
  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
    color: ${({ theme }) => theme.inputTextInvert};
  }
`;
const Select = ({
  items,
  selectedIndex,
  shadow,
  variant,
  width,
  height,
  className,
  onChange,
  style,
  ...otherProps
}) => {
  const [index, setIndex] = useState(selectedIndex);
  const [open, setOpen] = useState(false);

  const handleSelect = i => {
    if (onChange) onChange(items[i].value);
    setIndex(i);
  };

  const Wrapper =
    variant === 'flat' ? StyledFlatSelectWrapper : StyledSelectWrapper;
  return (
    <Wrapper
      className={className}
      onClick={() => setOpen(!open)}
      style={{ ...style, width: width || 'auto' }}
      shadow={shadow}
      {...otherProps}
    >
      <StyledSelectContent>
        {items.length ? items[index].label : ''}
      </StyledSelectContent>
      <StyledDropdownButton variant={variant}>
        <StyledDropdownIcon />
      </StyledDropdownButton>
      {open && (
        <StyledDropdownList
          shadow={shadow}
          variant={variant}
          style={height && { overflowY: 'scroll', height }}
        >
          {items.map((item, i) => (
            <StyledDropdownListItem
              // eslint-disable-next-line
              key={i}
              onClick={() => handleSelect(i)}
            >
              {item.label}
            </StyledDropdownListItem>
          ))}
        </StyledDropdownList>
      )}
    </Wrapper>
  );
};

Select.defaultProps = {
  style: {},
  shadow: true,
  variant: 'default',
  selectedIndex: 0,
  className: '',
  width: null,
  height: null,
  onChange: null
};

Select.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  className: propTypes.string,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.number,
  selectedIndex: propTypes.number,
  shadow: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat']),
  style: propTypes.shape([propTypes.string, propTypes.number]),
  onChange: propTypes.func
};

export default Select;
