import React from "react";
import propTypes from "prop-types";
import cx from "classnames";

import "./Chip.css";

const Chip = ({ className, disabled, children }) => {
  const baseClass = "Chip";
  const rootClass = cx(baseClass, className, {
    [`${baseClass}--disabled`]: disabled
  });

  return (
    <div className={rootClass} role="button">
      {children}
    </div>
  );
};

Chip.defaultProps = {};

Chip.propTypes = {
  className: propTypes.string
};
export default Chip;
