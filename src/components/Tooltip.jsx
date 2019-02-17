import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Tooltip = ({
    text,
    position,
    context,
    size,
    variations,
    className,
    children,
    ...otherProps
}) => {
    const baseClass = 'gds-tooltip';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: size,
        [`${baseClass}--${context}`]: context,
        [`${baseClass}--${variations}`]: variations,
        [`${baseClass}--${position}`]: position
    });

    return (
        <div className={rootClass} data-tooltip={text} {...otherProps}>
            {children}
        </div>
    );
};

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
    position: 'top'
};

Tooltip.propTypes = {
    text: PropTypes.string,
    /** top, top-right, right, bottom-right, bottom, bottom-left, left, top-left */
    position: PropTypes.oneOf([
        'top',
        'top-right',
        'right',
        'bottom-right',
        'bottom',
        'bottom-left',
        'left',
        'top-left'
    ]),
    /** success, warning, info, danger */
    context: PropTypes.string,
    /** lg */
    size: PropTypes.oneOf(['lg']),
    /** always, no-animate, bounce */
    variations: PropTypes.oneOf(['always', 'no-animate', 'bounce']),
    className: PropTypes.string,
    children: PropTypes.node
};

export default Tooltip;
