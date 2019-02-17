import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TextInput = ({ className, type, size, ...otherProps }) => {
    const baseClass = 'gds-form-group__text-input';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: size
    });

    return <input className={rootClass} type={type} {...otherProps} />;
};

TextInput.displayName = 'TextInput';

TextInput.defaultProps = {
    type: 'text',
    size: 'md'
};

TextInput.propTypes = {
    // This prevents people forcing this component out of its intended use
    /** text, password */
    type: PropTypes.oneOf(['text', 'password']),
    /** sm, md, lg */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,
    value: PropTypes.string
};

export default TextInput;
