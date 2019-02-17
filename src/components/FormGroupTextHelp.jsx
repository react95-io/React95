import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FormGroupTextHelp = ({ text, className, ...otherProps }) => (
    <small className={cx('gds-form-group__text-help', className)} {...otherProps}>
        {text}
    </small>
);

FormGroupTextHelp.displayName = 'FormGroupTextHelp';

FormGroupTextHelp.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default FormGroupTextHelp;
