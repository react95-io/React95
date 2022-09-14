import styled, { css } from 'styled-components';
import { styledDimension } from '../common';
import { getSize } from '../common/utils';
import { Orientation } from '../types';

type SeparatorProps = {
  size?: string | number;
  orientation?: Orientation;
};

const Separator = styled.div<SeparatorProps>`
  ${({ orientation, theme, size = '100%' }) =>
    orientation === 'vertical'
      ? css`
          height: ${getSize(size)};
          border-left: ${styledDimension(1)} solid ${theme.borderDark};
          border-right: ${styledDimension(1)} solid ${theme.borderLightest};
          margin: 0;
        `
      : css`
          width: ${getSize(size)};
          border-bottom: ${styledDimension(1)} solid ${theme.borderLightest};
          border-top: ${styledDimension(1)} solid ${theme.borderDark};
          margin: 0;
        `}
`;

Separator.displayName = 'Separator';

export { Separator, SeparatorProps };
