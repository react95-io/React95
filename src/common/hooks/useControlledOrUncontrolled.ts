import React, { useState, useCallback } from 'react';

export default function useControlledOrUncontrolled<T>({
  defaultValue,
  onChange,
  onChangePropName = 'onChange',
  readOnly,
  value,
  valuePropName = 'value'
}: {
  defaultValue: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...args: any[]) => void;
  onChangePropName?: string;
  readOnly?: boolean;
  value: T | undefined;
  valuePropName?: string;
}): [T, (newValue: React.SetStateAction<T>) => void] {
  const isControlled = value !== undefined;
  const [controlledValue, setControlledValue] = useState(defaultValue);
  const handleChangeIfUncontrolled = useCallback(
    (newValue: React.SetStateAction<T>) => {
      if (!isControlled) {
        setControlledValue(newValue);
      }
    },
    [isControlled]
  );

  // Because we provide `onChange` even to uncontrolled components, React's
  // default uncontrolled warning must be reimplemented. This also deals with
  // props that are different from `value`.
  if (isControlled && typeof onChange !== 'function' && !readOnly) {
    const message = `Warning: You provided a \`${valuePropName}\` prop to a component without an \`${onChangePropName}\` handler.${
      valuePropName === 'value'
        ? `This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${onChangePropName}\` or \`readOnly\`.`
        : `This breaks the component state. You must provide an \`${onChangePropName}\` function that updates \`${valuePropName}\`.`
    }`;

    // eslint-disable-next-line no-console
    console.warn(message);
  }

  return [isControlled ? value : controlledValue, handleChangeIfUncontrolled];
}
