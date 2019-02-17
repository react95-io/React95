import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Badge = ({ text, context, empty, className, style }) => {
    const baseClass = 'gds-badge';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${context}`]: context,
        [`${baseClass}--empty`]: empty
    });

    return (
        <span className={rootClass} style={style}>
            {!empty && text}
        </span>
    );
};

Badge.displayName = 'Badge';

Badge.defaultProps = {
    text: '',
    empty: false
};

Badge.propTypes = {
    text: PropTypes.string,
    /** inverse, success, success-inverse, info, info-inverse, warning, warning-inverse, danger, danger-inverse */
    context: PropTypes.string,
    empty: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Badge;
