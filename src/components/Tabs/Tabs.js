import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Tabs.css";

const Tabs = ({
  value,
  onChange,
  children,
  className,
  style,
  ...otherProps
}) => {
  const baseClass = "Tabs";
  const rootClass = cx(baseClass, className);

  const tabsNumber = React.Children.count(children);
  const childrenWithProps = React.Children.map(children, (child, i) => {
    const tabProps = {
      first: i === 0,
      last: i === tabsNumber - 1,
      active: child.props.value === value,
      onClick: onChange
    };
    return React.cloneElement(child, tabProps);
  });
  return (
    <nav className={rootClass} style={style} {...otherProps}>
      {childrenWithProps}
    </nav>
  );
};

Tabs.defaultProps = {
  value: 0
};

Tabs.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.node
};
export default Tabs;
