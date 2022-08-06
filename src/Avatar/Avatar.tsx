import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { styledDimension } from '../common';
import { getSize } from '../common/utils';
import { CommonStyledProps } from '../types';

type AvatarProps = {
  alt?: string;
  children?: React.ReactNode;
  noBorder?: boolean;
  size?: string | number;
  square?: boolean;
  src?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const StyledAvatar = styled.div<
  Pick<AvatarProps, 'noBorder' | 'square' | 'src'> & { size?: string }
>`
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
    css`
      border-top: ${styledDimension(1)} solid ${theme.borderDark};
      border-left: ${styledDimension(1)} solid ${theme.borderDark};
      border-bottom: ${styledDimension(1)} solid ${theme.borderLightest};
      border-right: ${styledDimension(1)} solid ${theme.borderLightest};
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

const StyledAvatarImg = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      alt = '',
      children,
      noBorder = false,
      size = 35,
      square = false,
      src,
      ...otherProps
    },
    ref
  ) => {
    return (
      <StyledAvatar
        noBorder={noBorder}
        ref={ref}
        size={getSize(size)}
        square={square}
        src={src}
        {...otherProps}
      >
        {src ? <StyledAvatarImg src={src} alt={alt} /> : children}
      </StyledAvatar>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar, AvatarProps };
