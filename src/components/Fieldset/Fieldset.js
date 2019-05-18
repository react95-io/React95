import React from "react";
import propTypes from "prop-types";

import styled, { css } from "styled-components";
import { createDisabledTextStyles } from "../common";
import { fontSizes, padding } from "../common/system";

const StyledFieldset = styled.fieldset`
  position: relative;
  border: 2px solid
    ${({ theme, flat }) => (flat ? theme.flatDark : theme.borderLightest)};
  padding: ${padding.md};
  font-size: ${fontSizes.md};
  color: ${({ theme }) => theme.text};
  ${({ flat }) =>
    !flat &&
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
  background: ${({ theme, flat }) => (flat ? theme.canvas : theme.material)};
`;

const StyledFieldsetContent = styled.div`
  ${props => props.isDisabled && createDisabledTextStyles()}
`;

const Fieldset = ({
  label,
  disabled,
  flat,
  children,
  className,
  style,
  ...otherProps
}) => {
  return (
    <StyledFieldset
      isDisabled={disabled}
      flat={flat}
      style={style}
      className={className}
      {...otherProps}
    >
      {label && <StyledLegend flat={flat}>{label}</StyledLegend>}
      <StyledFieldsetContent isDisabled={disabled}>
        {children}
      </StyledFieldsetContent>
    </StyledFieldset>
  );
};

Fieldset.defaultProps = {
  disabled: false,
  flat: false
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
  flat: propTypes.bool
};

export default Fieldset;
