import React from 'react';
import propTypes from 'prop-types';
import logoIMG from '../assets/images/logo.png';

const LogoIcon = ({ style }) => {
  const baseClass = 'LogoIcon';
  return (
    <span
      className={baseClass}
      style={{ ...style, display: 'inline-block', height: '22px' }}
    >
      <img
        src={logoIMG}
        alt='react95 logo'
        style={{ height: '100%', width: 'auto' }}
      />
    </span>
  );
};

LogoIcon.defaultProps = {
  style: {}
};

LogoIcon.propTypes = {
  style: propTypes.shape([propTypes.string, propTypes.number])
};

export default LogoIcon;
