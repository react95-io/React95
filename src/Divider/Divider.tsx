import styled from 'styled-components';
import { getSize } from '../common/utils';
import { Orientation } from '../types';

type DividerProps = {
  size?: string | number;
  orientation?: Orientation;
};
const Divider = styled.div<DividerProps>`
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

export { Divider, DividerProps };
