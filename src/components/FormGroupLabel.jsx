import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FormGroupLabel = ({ text, className, ...otherProps }) => (
    <label className={cx('gds-form-group__label', className)} {...otherProps}>
        {text}
    </label>
);

FormGroupLabel.displayName = 'FormGroupLabel';

FormGroupLabel.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default FormGroupLabel;
