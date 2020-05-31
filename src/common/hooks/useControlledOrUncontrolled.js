import { useState, useCallback } from 'react';

export default ({ value, defaultValue }) => {
  const isControlled = value !== undefined;
  const [controlledValue, setControlledValue] = useState(defaultValue);
  const handleChangeIfUncontrolled = useCallback(newValue => {
    if (!isControlled) {
      setControlledValue(newValue);
    }
  }, []);
  return [isControlled ? value : controlledValue, handleChangeIfUncontrolled];
};
