import React from "react";
import propTypes from "prop-types";
import cx from "classnames";

import "./Tab.css";

const Tab = ({
  value,
  onClick,
  active,
  first,
  last,
  children,
  className,
  style,
  ...otherProps
}) => {
  const baseClass = "Tab";
  const rootClass = cx(baseClass, className, {
    [`${baseClass}--active`]: active,
    [`${baseClass}--first`]: first,
    [`${baseClass}--last`]: last
  });

  return (
    <div
      className={rootClass}
      style={style}
      {...otherProps}
      onClick={() => onClick(value)}
    >
      {children}
    </div>
  );
};

Tab.defaultProps = {};

Tab.propTypes = {
  value: propTypes.number,
  active: propTypes.bool,
  first: propTypes.bool,
  last: propTypes.bool,
  onClick: propTypes.func,
  children: propTypes.node
};
export default Tab;
