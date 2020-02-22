import classNames, { getClassesForValue } from './classNames';

const num = 32;
const obj = { bear: null, cat: true, duck: 'truthy', elephant: 0 };
const str = 'alpaca';
const arr1D = [str, num];
const arr2D = [arr1D];
const arrMixTypes = [str, obj];

describe('common/classNames', () => {
  describe('getClassesForValue', () => {
    it('returns empty string when no arg is given', () => {
      expect(getClassesForValue()).toEqual('');
    });

    it('returns string arg as is', () => {
      expect(getClassesForValue(str)).toEqual(str);
    });

    it('returns numeric arg as string', () => {
      expect(getClassesForValue(num)).toEqual(`${num}`);
    });

    it('returns array values as joined string', () => {
      expect(getClassesForValue(arr1D)).toEqual(`${str} ${num}`);
    });

    it('returns array values as joined string, flattening multiple arrays', () => {
      expect(getClassesForValue(arr2D)).toEqual(`${str} ${num}`);
    });

    it('returns object keys as joined string, excluding properties with falsy values', () => {
      expect(getClassesForValue(arrMixTypes)).toEqual(`${str} cat duck`);
    });
  });

  describe('default export', () => {
    it('returns the given class names configuration as a single string', () => {
      expect(classNames(str, [num], obj)).toEqual(`${str} ${num} cat duck`);
    });

    it('returns empty string if given only atomic, falsy arguments', () => {
      expect(classNames(false, null, undefined)).toEqual('');
      expect(classNames(false, [null, undefined])).toEqual('');
    });
  });
});
