// Straight out copied from https://github.com/mui-org/material-ui 😂
import * as React from 'react';

function setRef<T>(
  ref: React.RefCallback<T> | React.MutableRefObject<T> | null,
  value: T
) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  }
}

export default function useForkRef<T>(
  refA: React.RefCallback<T> | React.MutableRefObject<T> | null,
  refB: React.RefCallback<T> | React.MutableRefObject<T> | null
): React.RefCallback<T> | null {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return React.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}
