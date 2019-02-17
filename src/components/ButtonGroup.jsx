import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ButtonGroup = ({ size, responsive, className, style, children }) => {
    const baseClass = 'gds-button-group';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: size,
        [`${baseClass}--responsive`]: responsive
    });

    return (
        <div className={rootClass} style={style}>
            {children}
        </div>
    );
};

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.defaultProps = {
    responsive: false,
    size: 'm',
    style: {}
};

ButtonGroup.propTypes = {
    /** xs, sm, lg */
    size: PropTypes.oneOf(['s', 'm', 'l']),
    responsive: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default ButtonGroup;
