import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { createDisabledTextStyles } from "../common";
import { padding, blockSizes, colors } from "../common/theme.variables";

const StyledListItem = styled.li`
  display: block;
  position: relative;
  height: ${props => blockSizes[props.size]};
  width: ${props => (props.square ? blockSizes[props.size] : "auto")};
  padding: 0 ${padding.sm};

  white-space: nowrap;
  text-align: ${props => (props.square ? "center" : "left")};
  line-height: ${props => blockSizes[props.size]};
  color: ${colors.dark};

  &:hover {
    ${props => !props.isDisabled && "color:" + colors.light + ";"}
    background: ${props => (props.isDisabled ? "none" : colors.navy)};
    cursor: default;
  }
  ${props => props.isDisabled && createDisabledTextStyles()}
`;

const ListItem = ({
  size,
  disabled,
  square,
  className,
  style,
  children,
  onClick,
  ...otherProps
}) => {
  return (
    <StyledListItem
      size={size}
      isDisabled={disabled}
      square={square}
      className={className}
      style={style}
      onClick={disabled ? undefined : onClick}
      {...otherProps}
    >
      {children}
    </StyledListItem>
  );
};

ListItem.defaultProps = {
  style: {},
  disabled: false,
  size: "lg",
  square: false,
  onClick: null
};

ListItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  square: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default ListItem;
