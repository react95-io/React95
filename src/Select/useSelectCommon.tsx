import React, { useMemo } from 'react';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import {
  StyledDropdownButton,
  StyledDropdownIcon,
  StyledFlatSelectWrapper,
  StyledSelectWrapper
} from './Select.styles';

import { SelectCommonProps, SelectOption } from './Select.types';

const emptyArray: [] = [];

export const useSelectCommon = <T,>({
  className,
  defaultValue,
  disabled,
  native,
  onChange,
  options: optionsProp = emptyArray,
  readOnly,
  style,
  value: valueProp,
  variant,
  width
}: { native: boolean } & SelectCommonProps<T>) => {
  const options = useMemo(
    () => optionsProp.filter(Boolean) as SelectOption<T>[],
    [optionsProp]
  );

  const [value, setValue] = useControlledOrUncontrolled({
    defaultValue: defaultValue ?? options?.[0]?.value,
    onChange,
    readOnly,
    value: valueProp
  });

  const isEnabled = !(disabled || readOnly);

  const wrapperProps: React.HTMLAttributes<HTMLDivElement> = useMemo(
    () => ({
      className,
      style: { ...style, width }
    }),
    [className, style, width]
  );

  const DropdownButton = useMemo(
    () => (
      <StyledDropdownButton
        as='div'
        data-testid='select-button'
        $disabled={disabled}
        native={native}
        tabIndex={-1}
        variant={variant}
      >
        <StyledDropdownIcon data-testid='select-icon' $disabled={disabled} />
      </StyledDropdownButton>
    ),
    [disabled, native, variant]
  );

  const Wrapper = useMemo(
    () => (variant === 'flat' ? StyledFlatSelectWrapper : StyledSelectWrapper),
    [variant]
  );

  return useMemo(
    () => ({
      isEnabled,
      options,
      value,
      setValue,
      wrapperProps,
      DropdownButton,
      Wrapper
    }),
    [DropdownButton, Wrapper, isEnabled, options, setValue, value, wrapperProps]
  );
};
