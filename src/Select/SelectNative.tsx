import React, { forwardRef, useCallback } from 'react';

import { noOp } from '../common/utils';

import { StyledInner, StyledNativeSelect } from './Select.styles';
import { SelectCommonProps } from './Select.types';
import { useSelectCommon } from './useSelectCommon';

type SelectNativeProps = SelectCommonProps<string> &
  Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'defaultValue' | 'name' | 'onChange' | 'style' | 'value'
  >;

const SelectNative = forwardRef<HTMLSelectElement, SelectNativeProps>(
  (
    {
      className,
      defaultValue,
      disabled,
      onChange,
      options: optionsProp,
      readOnly,
      style,
      value: valueProp,
      variant,
      width,
      ...otherProps
    },
    ref
  ) => {
    const { isEnabled, options, setValue, value, DropdownButton, Wrapper } =
      useSelectCommon<string>({
        defaultValue,
        disabled,
        native: true,
        onChange,
        options: optionsProp,
        readOnly,
        value: valueProp,
        variant
      });

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = options.find(
          option => option.value === event.target.value
        );

        if (!selectedOption) {
          return;
        }

        setValue(selectedOption.value);
        onChange?.(selectedOption, { fromEvent: event });
      },
      [onChange, options, setValue]
    );

    return (
      <Wrapper className={className} style={{ ...style, width }}>
        <StyledInner>
          <StyledNativeSelect
            {...otherProps}
            disabled={disabled}
            onChange={isEnabled ? handleChange : noOp}
            ref={ref}
            value={value}
          >
            {options.map((option, index) => (
              <option key={`${option.value}-${index}`} value={option.value}>
                {option.label ?? option.value}
              </option>
            ))}
          </StyledNativeSelect>
          {DropdownButton}
        </StyledInner>
      </Wrapper>
    );
  }
);

SelectNative.displayName = 'SelectNative';

export { SelectNative, SelectNativeProps };
