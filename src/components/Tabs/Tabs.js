import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

const StyledTabs = styled.div`
  position: relative;
  left: 8px;
  text-align: left;
`;

const Tabs = ({ value, onChange, children, ...otherProps }) => {
  const childrenWithProps = React.Children.map(children, child => {
    const tabProps = {
      active: child.props.value === value,
      onClick: onChange
    };
    return React.cloneElement(child, tabProps);
  });
  return (
    <StyledTabs {...otherProps} role='tablist'>
      {childrenWithProps}
    </StyledTabs>
  );
};

Tabs.defaultProps = {
  value: 0,
  onChange: () => {},
  children: null
};

Tabs.propTypes = {
  value: propTypes.number,
  onChange: propTypes.func,
  children: propTypes.node
};
export default Tabs;
