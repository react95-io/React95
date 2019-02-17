import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ModalBody = ({ className, style, children }) => (
    <div className={cx('gds-modal__body', className)} style={style}>
        {children}
    </div>
);

ModalBody.displayName = 'ModalBody';

ModalBody.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
};

export default ModalBody;
