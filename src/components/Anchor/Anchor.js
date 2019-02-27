import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { colors, fontSizes } from "../common/theme.variables";

const StyledAnchor = styled.a`
  color: ${colors.blue};
  font-size: ${props => (props.size ? fontSizes[props.size] : "inherit")};
  text-decoration: underline;
  &:visited {
    color: ${colors.purple};
  }
`;

const Anchor = ({ className, style, href, children, ...otherProps }) => {
  return (
    <StyledAnchor
      href={href}
      className={className}
      style={style}
      {...otherProps}
    >
      {children}
    </StyledAnchor>
  );
};

Anchor.defaultProps = {};
Anchor.propTypes = {
  className: propTypes.string,
  href: propTypes.string.isRequired,
  style: propTypes.object,
  children: propTypes.node.isRequired
};

export default Anchor;
