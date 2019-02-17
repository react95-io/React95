import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TextArea = ({ className, resize, size, placeholder, style, ...otherProps }) => {
    const baseClass = 'gds-form-group__text-area-input';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${resize}`]: resize,
        [`${baseClass}--${size}`]: size
    });

    return (
        <textarea placeholder={placeholder} style={style} className={rootClass} {...otherProps} />
    );
};

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
    /** resize-h, resize-v, no-resize */
    resize: PropTypes.oneOf(['resize-h', 'resize-v', 'no-resize']),
    /** xs, sm, lg */
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    placeholder: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default TextArea;
