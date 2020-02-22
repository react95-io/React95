export const getTestId = (testIdPrefix, appendText = '') =>
  testIdPrefix ? `${testIdPrefix}${appendText}`.trim() : undefined;

export const isEventType = (evt, eventType) => evt && evt.type === eventType;

export const isNumber = val => typeof val === 'number';

export const isObject = val => typeof val === 'object' && !Array.isArray(val);

export const isString = val => typeof val === 'string';

export const isStringOrNumber = val => isString(val) || isNumber(val);
