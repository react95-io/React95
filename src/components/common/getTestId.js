const getTestId = (testIdPrefix, appendText = '') =>
  testIdPrefix ? `${testIdPrefix}${appendText}`.trim() : undefined;

export default getTestId;
