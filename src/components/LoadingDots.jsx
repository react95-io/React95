import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const LoadingDots = ({ whiteDots, size, className, style }) => {
    const baseClass = 'gds-loading__dot';
    const dotClasses = cx(baseClass, {
        [`${baseClass}--${size}`]: size,
        [`${baseClass}--white`]: whiteDots
    });

    return (
        <div style={style} className={className}>
            <div className="gds-loading">
                <div className={dotClasses} />
            </div>
        </div>
    );
};

LoadingDots.displayName = 'LoadingDots';

LoadingDots.defaultProps = {
    whiteDots: false
};

LoadingDots.propTypes = {
    whiteDots: PropTypes.bool,
    /** sm, lg */
    style: PropTypes.object,
    size: PropTypes.oneOf(['sm', 'lg']),
    className: PropTypes.string
};

export default LoadingDots;
