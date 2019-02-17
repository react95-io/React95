import React from "react";
import propTypes from "prop-types";
import cx from "classnames";

import hourGlass from "../../img/hourGlass.gif";
import "./Loader.css";

const Loader = ({ className, style, ...otherProps }) => {
  const baseClass = "Loader";
  const rootClass = cx(baseClass, className);
  return (
    <span className={rootClass} style={style} {...otherProps}>
      <img
        className={`${baseClass}__img`}
        src={hourGlass}
        alt={`hourglass icon`}
      />
    </span>
  );
};

Loader.propTypes = {
  className: propTypes.string,
  style: propTypes.object
};

export default Loader;
