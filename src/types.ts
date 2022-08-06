import { ComponentType } from 'react';

import { Color, Theme, WindowsTheme } from './common/themes/types';

export type Sizes = 'sm' | 'md' | 'lg';

export type Orientation = 'horizontal' | 'vertical';

export type Direction = 'up' | 'down' | 'left' | 'right';

export type DimensionValue = undefined | number | string;

export type CommonStyledProps = {
  /**
   * "as" polymorphic prop allows to render a different HTML element or React component
   * @see {@link https://styled-components.com/docs/api#as-polymorphic-prop}
   */
  as?: string | ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HTMLDataAttributes = Record<`data-${string}`, any>;

export type CommonThemeProps = {
  'data-testid'?: string;
  $disabled?: boolean;
  defaultShadow?: boolean;
  shadow?: boolean;
};

export { Color, Theme, WindowsTheme };
