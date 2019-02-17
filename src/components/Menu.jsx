import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Menu.css';

const Menu = ({
    open,
    verticalAlign,
    horizontalAlign,
    className,
    style,
    children,
    ...otherProps
}) => {
    const baseClass = 'Menu';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${verticalAlign}`]: verticalAlign,
        [`${baseClass}--${horizontalAlign}`]: horizontalAlign
    });

    return (
        open && (
            <div className={rootClass} style={style} {...otherProps}>
                {children}
            </div>
        )
    );
};

Menu.displayName = 'Menu';

Menu.defaultProps = {
    style: {},
    open: false,
    verticalAlign: 'bottom',
    horizontalAlign: 'left'
};

Menu.propTypes = {
    verticalAlign: PropTypes.oneOf(['top', 'bottom']),
    horizontalAlign: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
    style: PropTypes.object,
    open: PropTypes.bool,
    children: PropTypes.node
};

export default Menu;
