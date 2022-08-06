// TODO - implement styled-system

import { styledDimension } from '.';
import { Sizes } from '../types';

export const blockSizes: Record<Sizes, number> = {
  sm: 14,
  md: 18,
  lg: 22
};

export const styledBlockSize = (size: Sizes) =>
  styledDimension(blockSizes[size]);
