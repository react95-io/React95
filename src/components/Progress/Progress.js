import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Progress.css";
import Cutout from "../Cutout/Cutout";

const Progress = ({ start, end, value, className, disabled }) => {
  const baseClass = "Progress";
  const rootClass = cx(baseClass, className, {
    [`${baseClass}--disabled`]: disabled
  });

  const normalizedValue = ((value - start) / (end - start)) * 100 || 0;
  return (
    <Cutout className={rootClass}>
      <div
        className={`${baseClass}__bar`}
        style={{ width: `${normalizedValue}%` }}
      />
      <span className={`${baseClass}__value`}>{`${normalizedValue}%`}</span>
    </Cutout>
  );
};

Progress.defaultProps = {
  start: 0,
  end: 0,
  value: 0,
  disabled: false
};

Progress.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  className: PropTypes.string
};
export default Progress;
