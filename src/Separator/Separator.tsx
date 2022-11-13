import styled from 'styled-components';
import { getSize } from '../common/utils';
import { Orientation } from '../types';

type SeparatorProps = {
  size?: string | number;
  orientation?: Orientation;
};

const Separator = styled.div<SeparatorProps>`
  ${({ orientation, theme, size = '100%' }) =>
    orientation === 'vertical'
      ? `
    height: ${getSize(size)};
    border-left: 2px solid ${theme.borderDark};
    border-right: 2px solid ${theme.borderLightest};
    margin: 0;
    `
      : `
    width: ${getSize(size)};
    border-bottom: 2px solid ${theme.borderLightest};
    border-top: 2px solid ${theme.borderDark};
    margin: 0;
    `}
`;

Separator.displayName = 'Separator';

export { Separator, SeparatorProps };
