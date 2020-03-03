import getTestId from './getTestId';

describe('getTestId', () => {
  it('returns undefined if no testIdPrefix is given', () => {
    expect(getTestId()).toEqual(undefined);
  });

  it('returns testIdPrefix if no appendText is given', () => {
    expect(getTestId('prefix')).toEqual('prefix');
  });

  it('returns testIdPrefix with concatenated appendText', () => {
    expect(getTestId('prefix', 'Appended')).toEqual('prefixAppended');
  });
});
