import React from 'react';
import { HTMLDataAttributes } from '../types';

type SelectChangeEventTargetValue<T> = { value: T; name: string | undefined };

export type SelectChangeEvent<T> =
  | (Omit<React.ChangeEvent<HTMLSelectElement>, 'target'> & {
      target: Omit<
        React.ChangeEvent<HTMLSelectElement>['target'],
        'name' | 'value'
      > &
        SelectChangeEventTargetValue<T>;
    })
  | (Omit<React.MouseEvent, 'target'> & {
      target: Omit<React.MouseEvent['target'], 'name' | 'value'> &
        SelectChangeEventTargetValue<T>;
    });

export type SelectOption<T> = {
  label?: string;
  value: T;
};

export type SelectRef = Pick<HTMLInputElement, 'value' | 'focus'> & {
  node: HTMLInputElement | null;
};

export type SelectVariants = 'default' | 'flat';

export type SelectFormatDisplayCallback<T> = (
  option: SelectOption<T>
) => string;

export type SelectCommonProps<T> = {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  className?: string;
  defaultValue?: T;
  disabled?: boolean;
  name?: string;
  onChange?: (
    selectedOption: SelectOption<T>,
    options: {
      fromEvent: Event | React.SyntheticEvent;
    }
  ) => void;
  options?: (SelectOption<T> | null | undefined)[];
  readOnly?: boolean;
  /** @deprecated Change `shadow` property on theme */
  shadow?: boolean;
  style?: React.CSSProperties;
  value?: T;
  variant?: SelectVariants;
  width?: React.CSSProperties['width'];
};

export type SelectInnerProps<T> = {
  formatDisplay?: SelectFormatDisplayCallback<T>;
  inputProps?: React.HTMLAttributes<HTMLInputElement> & HTMLDataAttributes;
  /** @deprecated Use `aria-labelledby` instead */
  labelId?: string;
  menuMaxHeight?: string | number;
  onClose?: (options: { fromEvent: Event | React.SyntheticEvent }) => void;
  onOpen?: (options: { fromEvent: Event | React.SyntheticEvent }) => void;
  open?: boolean;
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'onBlur' | 'onFocus' | 'onKeyDown' | 'onMouseDown'
> &
  SelectCommonProps<T>;
