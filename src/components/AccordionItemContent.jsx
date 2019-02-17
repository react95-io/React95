import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class AccordionItemContent extends Component {
    handleClick = e => {
        e.stopPropagation();
    };

    render() {
        const { className, context, size, children, ...otherProps } = this.props;

        const rootClass = cx('gds-accordion__child-item', className, {
            [`gds-accordion__child-item--${context}`]: context
        });

        const titleClass = cx('gds-accordion__child-item-title', {
            [`gds-accordion__child-item-title--${size}`]: size
        });

        return (
            <li className={rootClass} onClick={this.handleClick} {...otherProps}>
                <h4 className={titleClass}>{children}</h4>
            </li>
        );
    }
}

AccordionItemContent.displayName = 'AccordionItemContent';

AccordionItemContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    context: PropTypes.string,
    size: PropTypes.string
};

export default AccordionItemContent;
