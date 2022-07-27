import React from 'react';

export type SelectChangeEvent<T> =
  | (React.MouseEvent & {
      target: {
        value: { value: T; name: string | undefined };
      };
    })
  | React.ChangeEvent<HTMLSelectElement>;

export type SelectOption<T> = {
  label: string;
  value: T;
};

export type SelectRef = Pick<HTMLInputElement, 'value' | 'focus'> & {
  node: HTMLInputElement | null;
};

export type SelectVariants = 'default' | 'flat';

export type SelectFormatDisplayCallback<T> = (
  option: SelectOption<T>
) => string;
