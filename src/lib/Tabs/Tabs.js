import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";

const StyledTabs = styled.nav`
  position: relative;
  left: 8px;
`;

const Tabs = ({
  value,
  onChange,
  children,
  className,
  style,
  ...otherProps
}) => {
  const childrenWithProps = React.Children.map(children, child => {
    const tabProps = {
      active: child.props.value === value,
      onClick: onChange
    };
    return React.cloneElement(child, tabProps);
  });
  return (
    <StyledTabs className={className} style={style} {...otherProps}>
      {childrenWithProps}
    </StyledTabs>
  );
};

Tabs.defaultProps = {
  value: 0
};

Tabs.propTypes = {
  value: propTypes.number,
  onChange: propTypes.func,
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};
export default Tabs;
