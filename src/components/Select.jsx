import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Select = ({ context, size, customValue, customName, options, className, ...otherProps }) => {
    const baseClass = 'gds-form-group__select-input';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${context}`]: context,
        [`${baseClass}--${size}`]: size
    });

    return (
        <select className={rootClass} {...otherProps}>
            {options.map(o => (
                <option key={o[customValue]} value={o[customValue]}>
                    {o[customName]}
                </option>
            ))}
        </select>
    );
};

Select.displayName = 'Select';

Select.defaultProps = {
    options: [],
    customValue: 'value',
    customName: 'name'
};

Select.propTypes = {
    /** primary, no-border, dark */
    context: PropTypes.string,
    /** xs, sm, lg */
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    customValue: PropTypes.string,
    customName: PropTypes.string,
    options: PropTypes.array,
    className: PropTypes.string
};

export default Select;
