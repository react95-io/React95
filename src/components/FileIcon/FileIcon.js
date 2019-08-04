/* FileIcon will be rewritten soon */
/* eslint-disable */

import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import './FileIcon.css';

const FileIcon = ({
  imageURL, className, style, ...otherProps
}) => {
  const baseClass = 'FileIcon';
  const rootClass = cx(baseClass, className);

  return (
    <span className={rootClass} style={style} {...otherProps}>
      {imageURL && (
        <img className={`${baseClass}__img`} src={imageURL} alt="icon" />
      )}
    </span>
  );
};

FileIcon.defaultProps = {
  imageURL: null,
  className: '',
  style: {},
};

FileIcon.propTypes = {
  imageURL: propTypes.string,
  className: propTypes.string,
  style: propTypes.shape([
    propTypes.string,
    propTypes.number,
  ]),
};

export default FileIcon;
