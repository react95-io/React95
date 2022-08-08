import { renderHook } from '@testing-library/react-hooks';
import { useId } from './useId';

describe(useId, () => {
  it('returns a random string of 10 digits', () => {
    const { result } = renderHook(() => useId());
    expect(result.current).toMatch(/^[0-9a-z]{10}$/i);
  });

  it('returns the passed ID', () => {
    const { result } = renderHook(() => useId('test'));
    expect(result.current).toEqual('test');
  });
});
