export function clamp(value, min, max) {
  if (min !== null && value > max) {
    return max;
  }
  if (max !== null && value < min) {
    return min;
  }
  return value;
}

export function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

// helper functions below are from Material UI (https://github.com/mui-org/material-ui)
export function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (
      (matissaDecimalPart ? matissaDecimalPart.length : 0) +
      parseInt(parts[1], 10)
    );
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

export function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

export function areEqualValues(a, b) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
