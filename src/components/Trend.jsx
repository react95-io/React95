import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Trend = ({ context, className, style, value, unit }) => {
    const baseClass = 'gds-card__trend';
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${context}`]: context
    });

    return (
        <div className={rootClass} style={style}>
            {value}
            {unit}
        </div>
    );
};

Trend.displayName = 'Trend';

Trend.defaultProps = {
    context: 'up',
    unit: '%'
};

Trend.propTypes = {
    /** up, same, down */
    context: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    unit: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Trend;
