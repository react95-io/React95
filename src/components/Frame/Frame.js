import React from "react";
import propTypes from "prop-types";
import cx from "classnames";

import "./Frame.css";

const Frame = ({
  title,
  disabled,
  children,
  className,
  style,
  ...otherProps
}) => {
  const baseClass = "Frame";
  const rootClass = cx(baseClass, className, {
    [`${baseClass}--disabled`]: disabled
  });
  return (
    <div className={rootClass} style={style} {...otherProps}>
      {title && (
        <h5 className={`${baseClass}__title`}>
          <span className={`${baseClass}__title-accent`}>
            {title.charAt(0)}
          </span>
          {title.substr(1)}
        </h5>
      )}
      {children}
    </div>
  );
};

Frame.defaultProps = {
  disabled: false
};

Frame.propTypes = {
  title: propTypes.string,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
  disabled: propTypes.bool
};

export default Frame;
