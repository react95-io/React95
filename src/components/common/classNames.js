/**
 * Given a string, number, object, or array, extract
 * the class names configuration from it, and return
 * as a single class string.
 * @param {*} [value]
 * @return {string}
 */
export const getClassesForValue = value => {
  if (value) {
    if (typeof value === 'string') {
      return value.toString();
    }

    if (Array.isArray(value)) {
      return value.map(getClassesForValue).join(' ');
    }

    if (typeof value === 'object' && !Array.isArray(value)) {
      return Object.keys(value)
        .filter(key => Boolean(value[key]))
        .map(getClassesForValue)
        .join(' ');
    }
  }

  return '';
};

/**
 * Given any number of arguments of type string, number,
 * object, or a multidimensional array, extract a class names
 * configuration from it, and return as a single classes string.
 * For object values, uses keys as classes, but only if their
 * associated values are truthy.
 * @example
 * const result = classNames('alpaca', ['bear', 'cat']);
 * --> 'alpaca bear cat'
 * const result = classNames('alpaca', { bear: null, cat: true });
 * --> 'alpaca cat' // 'bear' is null, so is not included
 * const result = classNames(['alpaca', { bear: true }, ['cat']]);
 * --> 'alpaca bear cat' // multi-dim array is flattened
 * @param {...*} args
 * @return {string}
 */
const classNames = (...args) => {
  return args
    .reduce((classesString, arg) => {
      const classesForArg = getClassesForValue(arg);

      // leading whitespace is okay as the final string is trimmed
      return `${classesString} ${classesForArg}`;
    }, '')
    .trim();
};

export default classNames;
