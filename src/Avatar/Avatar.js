import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({ size }) =>
    `
    height: ${size};
    width: ${size};
    `}
  border-radius: ${({ square }) => (square ? 0 : '50%')};
  overflow: hidden;
  ${({ noBorder, theme }) =>
    !noBorder &&
    `
    border-top: 2px solid ${theme.borderDark};
    border-left: 2px solid ${theme.borderDark};
    border-bottom: 2px solid ${theme.borderLightest};
    border-right: 2px solid ${theme.borderLightest};
    background: ${theme.material};
  `}
  ${({ src }) =>
    !src &&
    `
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`;

const SlyledAvatarIMG = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Avatar = React.forwardRef(function Avatar(props, ref) {
  const {
    alt,
    children,
    noBorder,
    size: sizeProp,
    square,
    src,
    ...otherProps
  } = props;

  const size = typeof sizeProp === 'number' ? `${sizeProp}px` : sizeProp;
  return (
    <StyledAvatar
      noBorder={noBorder}
      ref={ref}
      size={size}
      square={square}
      {...otherProps}
    >
      {src ? <SlyledAvatarIMG src={src} alt={alt} /> : children}
    </StyledAvatar>
  );
});

Avatar.defaultProps = {
  alt: '',
  children: null,
  noBorder: false,
  size: 35,
  square: false,
  src: undefined
};

Avatar.propTypes = {
  alt: propTypes.string,
  children: propTypes.node,
  noBorder: propTypes.bool,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  square: propTypes.bool,
  src: propTypes.string
};

export default Avatar;
