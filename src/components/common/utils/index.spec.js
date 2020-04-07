import { clamp, getDecimalPrecision, roundValueToStep } from './index';

describe('clamp', () => {
  it('should return passed value if its between min and max', () => {
    expect(clamp(4, 3, 5)).toBe(4);
  });

  it('should return min if value is smaller than min', () => {
    expect(clamp(2, 3, 5)).toBe(3);
  });

  it('should return max if value is bigger than max', () => {
    expect(clamp(6, 3, 5)).toBe(5);
  });

  it('should accept null as min', () => {
    expect(clamp(6, null, 5)).toBe(5);
  });

  it('should accept null as max', () => {
    expect(clamp(1, 2, null)).toBe(2);
  });
});

describe('getDecimalPrecision', () => {
  it('should return 0 when passed a round number', () => {
    expect(getDecimalPrecision(4)).toBe(0);
  });

  it('should return correct decimal precision', () => {
    expect(getDecimalPrecision(1.233)).toBe(3);
  });
});

describe('roundValueToStep', () => {
  it('should be able to round down', () => {
    expect(roundValueToStep(4, 3, 0)).toBe(3);
  });

  it('should be able to round up', () => {
    expect(roundValueToStep(5, 3, 0)).toBe(6);
  });
});
