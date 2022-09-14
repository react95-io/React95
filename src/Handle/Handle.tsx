import React from 'react';
import styled, { css } from 'styled-components';
import { styledDimension } from '../common';
import { getSize } from '../common/utils';
import { CommonStyledProps } from '../types';

type HandleProps = {
  size?: string | number;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

// TODO: add horizontal variant
// TODO: allow user to specify number of bars (like 3 horizontal bars for drag handle)
const Handle = styled.div<HandleProps>`
  ${({ theme, size = '100%' }) => css`
    display: inline-block;
    box-sizing: border-box;
    height: ${getSize(size)};
    width: ${styledDimension(2.5)};
    border-top: ${styledDimension(1)} solid ${theme.borderLightest};
    border-left: ${styledDimension(1)} solid ${theme.borderLightest};
    border-bottom: ${styledDimension(1)} solid ${theme.borderDark};
    border-right: ${styledDimension(1)} solid ${theme.borderDark};
    background: ${theme.material};
  `}
`;

Handle.displayName = 'Handle';

export { Handle, HandleProps };
