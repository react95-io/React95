import React, { useState } from "react";
import propTypes from "prop-types";

import Button from "../Button/Button";

import styled, { css } from "styled-components";
import { shadow, createFlatBoxStyles } from "../common";
import { blockSizes, fontSizes, padding } from "../common/system";
import Cutout from "../Cutout/Cutout";

const sharedWrapperStyles = css`
  height: ${blockSizes.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.canvas};
  color: ${({ theme }) => theme.inputText};
  font-size: ${fontSizes.md};
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
  padding-left: ${padding.sm};
  overflow: hidden;
  white-space: nowrap;
`;
const StyledDropdownButton = styled(Button)`
  width: 30px;
  padding: 0;
  z-index: 1;
  flex-shrink: 0;
  ${({ variant }) =>
    variant === "flat"
      ? css`
          height: calc(100% - 4px);
          margin-right: 2px;
        `
      : css`
          height: 100%;
          border-left-color: ${({ theme }) => theme.borderLight};
          border-top-color: ${({ theme }) => theme.borderLight};
          box-shadow: inset 1px 1px 0px 1px
              ${({ theme }) => theme.borderLightest},
            inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
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

  font-size: ${fontSizes.md};
  position: absolute;
  transform: translateY(100%);
  left: 0px;
  background: ${({ theme }) => theme.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 99;

  ${({ variant }) =>
    variant === "flat"
      ? css`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({ theme }) => theme.flatDark};
        `
      : css`
          box-shadow: ${props => (props.shadow ? shadow : "none")};
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({ theme }) => theme.borderDarkest};
        `}
`;
const StyledDropdownListItem = styled.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: ${padding.sm};

  height: calc(${blockSizes.md} - 4px);
  line-height: calc(${blockSizes.md} - 4px);
  font-size: ${fontSizes.md};
  white-space: nowrap;
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
  otherProps,
  className,
  onChange,
  style
}) => {
  const [index, setIndex] = useState(selectedIndex);
  const [open, setOpen] = useState(false);

  const handleSelect = i => {
    if (onChange) onChange(items[i].value);
    setIndex(i);
  };

  const Wrapper =
    variant === "flat" ? StyledFlatSelectWrapper : StyledSelectWrapper;
  return (
    <Wrapper
      className={className}
      onClick={() => setOpen(!open)}
      style={{ ...style, width }}
      shadow={shadow}
      {...otherProps}
    >
      <StyledSelectContent>
        {items.length ? items[index].label : ""}
      </StyledSelectContent>
      <StyledDropdownButton variant={variant}>
        <StyledDropdownIcon />
      </StyledDropdownButton>
      {open && (
        <StyledDropdownList
          shadow={shadow}
          variant={variant}
          style={height && { overflowY: "scroll", height }}
        >
          {items.map((item, i) => (
            <StyledDropdownListItem
              key={i}
              onClick={e => {
                handleSelect(i);
              }}
            >
              {item.label}
            </StyledDropdownListItem>
          ))}
        </StyledDropdownList>
      )}
    </Wrapper>
  );
};

Select.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  className: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  selectedIndex: propTypes.number,
  shadow: propTypes.bool,
  variant: propTypes.oneOf(["default", "flat"]),
  style: propTypes.object,
  onChange: propTypes.func
};
Select.defaultProps = {
  style: {},
  shadow: true,
  variant: "default",
  selectedIndex: 0
};
export default Select;
