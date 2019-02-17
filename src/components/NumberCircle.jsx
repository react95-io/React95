import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const NumberCircle = ({ text, context, size, className, style }) => {
    const baseClass = 'gds-number-circle';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${context}`]: context,
        [`${baseClass}--${size}`]: size
    });

    return (
        <span className={rootClass} style={style}>
            {text}
        </span>
    );
};

NumberCircle.displayName = 'NumberCircle';

NumberCircle.propTypes = {
    text: PropTypes.string,
    /** secondary, success, warning, info, danger, white */
    context: PropTypes.string,
    /** xs, sm, lg, xl */
    size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']),
    className: PropTypes.string,
    style: PropTypes.object
};

export default NumberCircle;
