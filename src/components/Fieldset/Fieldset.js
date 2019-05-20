import React from "react";
import propTypes from "prop-types";

import styled, { css } from "styled-components";
import { createDisabledTextStyles } from "../common";
import { fontSizes, padding } from "../common/system";

const StyledFieldset = styled.fieldset`
  position: relative;
  border: 2px solid
    ${({ theme, variant }) =>
      variant === "flat" ? theme.flatDark : theme.borderLightest};
  padding: ${padding.md};
  font-size: ${fontSizes.md};
  color: ${({ theme }) => theme.text};
  ${({ variant }) =>
    variant !== "flat" &&
    css`
      box-shadow: -1px -1px 0 1px ${({ theme }) => theme.borderDark},
        inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
    `}
`;
const StyledLegend = styled.legend`
  position: absolute;
  top: 0;
  left: ${padding.sm};
  transform: translateY(calc(-50% - 2px));
  padding: 0 ${padding.sm};

  font-size: ${fontSizes.md};
  background: ${({ theme, variant }) =>
    variant === "flat" ? theme.canvas : theme.material};
`;

const StyledFieldsetContent = styled.div`
  ${props => props.isDisabled && createDisabledTextStyles()}
`;

const Fieldset = ({
  label,
  disabled,
  variant,
  children,
  className,
  style,
  ...otherProps
}) => {
  return (
    <StyledFieldset
      isDisabled={disabled}
      variant={variant}
      style={style}
      className={className}
      {...otherProps}
    >
      {label && <StyledLegend variant={variant}>{label}</StyledLegend>}
      <StyledFieldsetContent isDisabled={disabled}>
        {children}
      </StyledFieldsetContent>
    </StyledFieldset>
  );
};

Fieldset.defaultProps = {
  disabled: false,
  variant: "default"
};

Fieldset.propTypes = {
  label: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.node
  ]),
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
  disabled: propTypes.bool,
  variant: propTypes.oneOf(["default", "flat"])
};

export default Fieldset;
