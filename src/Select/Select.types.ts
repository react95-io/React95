import React from 'react';

export type SelectChangeEvent =
  | (React.MouseEvent & {
      target: {
        value: { value: unknown; name: string | undefined };
      };
    })
  | React.ChangeEvent<HTMLSelectElement>;

export type SelectOption<T = unknown> = {
  label: string;
  value: T;
};

export type SelectRef = Pick<HTMLInputElement, 'value' | 'focus'> & {
  node: HTMLInputElement | null;
};

export type SelectVariants = 'default' | 'flat';

export type SelectFormatDisplayCallback = (option: SelectOption) => string;
