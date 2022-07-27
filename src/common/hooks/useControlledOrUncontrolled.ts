import { useState, useCallback } from 'react';

export default function useControlledOrUncontrolled<T>({
  value,
  defaultValue
}: {
  value: T | undefined;
  defaultValue: T;
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
  return [isControlled ? value : controlledValue, handleChangeIfUncontrolled];
}
