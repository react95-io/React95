import React, { forwardRef } from 'react';
import styled from 'styled-components';
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

const StyledAvatarImg = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
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
) {
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
});

export { Avatar, AvatarProps };
