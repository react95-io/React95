import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { createDisabledTextStyles } from "../common";
import { fontSizes, padding, colors } from "../common/theme.variables";

const StyledFieldset = styled.fieldset`
  position: relative;
  border: 2px solid ${colors.light};
  box-shadow: -1px -1px 0 1px ${colors.darkGray},
    inset -1px -1px 0 1px ${colors.darkGray};
  padding: ${padding.md};

  font-size: ${fontSizes.md};

  ${props => props.isDisabled && createDisabledTextStyles()}
`;
const StyledLegend = styled.legend`
  position: absolute;
  top: 0;
  left: ${padding.sm};
  transform: translateY(calc(-50% - 2px));
  padding: 0 ${padding.sm};

  font-size: ${fontSizes.md};
  background: ${colors.bg};
`;

const Fieldset = ({
  title,
  disabled,
  children,
  className,
  style,
  ...otherProps
}) => {
  return (
    <StyledFieldset
      isDisabled={disabled}
      style={style}
      className={className}
      {...otherProps}
    >
      {title && <StyledLegend>{title}</StyledLegend>}
      {children}
    </StyledFieldset>
  );
};

Fieldset.defaultProps = {
  disabled: false
};

Fieldset.propTypes = {
  title: propTypes.string,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
  disabled: propTypes.bool
};

export default Fieldset;
