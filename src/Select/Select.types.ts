import React from 'react';

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
