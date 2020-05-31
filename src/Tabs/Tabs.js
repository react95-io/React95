import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

const StyledTabs = styled.div`
  position: relative;
  left: 8px;
  text-align: left;
`;

const Tabs = React.forwardRef(function Tabs(props, ref) {
  const { value, onChange, children, ...otherProps } = props;
  const childrenWithProps = React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const tabProps = {
      selected: child.props.value === value,
      onClick: onChange
    };
    return React.cloneElement(child, tabProps);
  });
  return (
    <StyledTabs {...otherProps} role='tablist' ref={ref}>
      {childrenWithProps}
    </StyledTabs>
  );
});

Tabs.defaultProps = {
  onChange: () => {},
  children: null
};

Tabs.propTypes = {
  // eslint-disable-next-line react/require-default-props, react/forbid-prop-types
  value: propTypes.any,
  onChange: propTypes.func,
  children: propTypes.node
};
export default Tabs;
