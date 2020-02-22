import * as util from './util';

describe('common/util', () => {
  describe('getTestId', () => {
    it('returns undefined if no testIdPrefix is given', () => {
      expect(util.getTestId()).toEqual(undefined);
    });

    it('returns testIdPrefix if no appendText is given', () => {
      expect(util.getTestId('prefix')).toEqual('prefix');
    });

    it('returns testIdPrefix with concatenated appendText', () => {
      expect(util.getTestId('prefix', 'Appended')).toEqual('prefixAppended');
    });
  });

  describe('isNumber', () => {
    it('returns true for numeric values', () => {
      const testVals = [1, -1, 1.2, Infinity];
      testVals.forEach(val => {
        expect(util.isNumber(val)).toBeTruthy();
      });
    });

    it('returns false for non-numeric values', () => {
      const testVals = ['1', false, {}, () => {}];
      testVals.forEach(val => {
        expect(util.isNumber(val)).toBeFalsy();
      });
    });
  });

  describe('isObject', () => {
    it('returns true for (non-array) object values', () => {
      const testVals = [{}, null, Object.create({})];
      testVals.forEach(val => {
        expect(util.isObject(val)).toBeTruthy();
      });
    });

    it('returns false for array and non-object values', () => {
      const testVals = ['1', false, [], 1];
      testVals.forEach(val => {
        expect(util.isObject(val)).toBeFalsy();
      });
    });
  });

  describe('isString', () => {
    it('returns true for string values', () => {
      const testVals = ['hi', '', String(), (1).toString()];
      testVals.forEach(val => {
        expect(util.isString(val)).toBeTruthy();
      });
    });

    it('returns false for non-string values', () => {
      const testVals = [false, [], 1, {}];
      testVals.forEach(val => {
        expect(util.isString(val)).toBeFalsy();
      });
    });
  });

  describe('isStringOrNumber', () => {
    it('returns true if isString returns true', () => {
      expect(util.isStringOrNumber('')).toBeTruthy();
    });

    it('returns true if isNumber returns true', () => {
      expect(util.isStringOrNumber(1)).toBeTruthy();
    });

    it('returns false if both isString and isNumber return false', () => {
      expect(util.isStringOrNumber({})).toBeFalsy();
    });
  });
});
