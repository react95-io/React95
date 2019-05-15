import React, { useState } from "react";
import propTypes from "prop-types";

import Button from "../Button/Button";

import styled, { css } from "styled-components";
import { shadow } from "../common";
import { blockSizes, fontSizes, padding } from "../common/system";
import Cutout from "../Cutout/Cutout";

import bgImgHash from "./hatch.jpg";

const StyledSelectWrapper = styled(Cutout)`
  height: ${blockSizes.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.canvas};
  color: ${({ theme }) => theme.inputText};
  font-size: ${fontSizes.md};

  ${({ hatched }) => hatched && css`
    background-image: url(${bgImgHash});
    background-size: contain;
    box-shadow: inset 1px 1px 1px 1px #fff, inset -1px -1px 1px 1px #fff
  `}
`;
const StyledSelectContent = styled.div`
  width: 100%;
  padding-left: ${padding.sm};
  overflow: hidden;
  white-space: nowrap;
`;
const StyledDropdownButton = styled(Button)`
  height: 100%;
  width: 30px;
  padding: 0;
  z-index: 1;
  flex-shrink: 0;
  background-color: ${({ flat }) => flat && "inherit"};
  border: ${({ theme, flat }) => flat && `2px solid ${theme.borderDark}`};

  ${({ flat }) => flat
    ? css`
      box-shadow: ${({ hatched }) => hatched && '-1px -1px 1px 1px #fff'};
    `
    : css`
    border-left-color: ${({ theme }) => theme.borderLight};
    border-top-color: ${({ theme }) => theme.borderLight};
    box-shadow: inset 1px 1px 0px 1px ${({ theme }) => theme.borderLightest},
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
  bottom: -2px;
  width: calc(100% - 2px);
  transform: translateY(100%);
  left: 0px;
  background: ${({ theme }) => theme.canvas};
  border: 2px solid ${({ theme }) => theme.borderDarkest};
  border-top: none;
  box-shadow: ${props => (props.shadow ? shadow : "none")};
  cursor: default;
  z-index: 99;
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
  width,
  height,
  flat,
  hatched,
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
  return (
    <StyledSelectWrapper
      className={className}
      onClick={() => setOpen(!open)}
      style={{ ...style, width }}
      shadow={shadow}
      flat={flat}
      hatched={hatched}
      {...otherProps}
    >
      <StyledSelectContent>
        {items.length ? items[index].label : ""}
      </StyledSelectContent>
      <StyledDropdownButton flat={flat} hatched={hatched}>
        <StyledDropdownIcon />
      </StyledDropdownButton>
      {open && (
        <StyledDropdownList
          shadow={shadow}
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
    </StyledSelectWrapper>
  );
};

Select.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  className: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  selectedIndex: propTypes.number,
  shadow: propTypes.bool,
  flat: propTypes.bool,
  hatched: propTypes.bool,
  style: propTypes.object,
  onChange: propTypes.func
};
Select.defaultProps = {
  style: {},
  shadow: true,
  selectedIndex: 0,
  flat: false,
  hatched: false,
};
export default Select;
