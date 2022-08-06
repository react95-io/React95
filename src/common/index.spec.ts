import { SCALE } from './constants';
import { styledDimension } from './index';
import original from './themes/original';

describe(styledDimension, () => {
  it('returns the default scale with no theme', () => {
    expect(styledDimension()({ theme: undefined })).toEqual(`${SCALE}px`);
  });

  it('returns the default scale with a theme that has no scale', () => {
    const themeWithoutScale = {
      ...original,
      scale: undefined
    };
    expect(styledDimension()({ theme: themeWithoutScale })).toEqual(
      `${SCALE}px`
    );
  });

  it('returns a proportional scale', () => {
    const themeScale1 = {
      ...original,
      scale: 1
    };
    const themeScale3 = {
      ...original,
      scale: 3
    };
    expect(styledDimension()({ theme: themeScale1 })).toEqual('1px');
    expect(styledDimension()({ theme: themeScale3 })).toEqual('3px');
    expect(styledDimension(5)({ theme: themeScale1 })).toEqual('5px');
    expect(styledDimension(5)({ theme: themeScale3 })).toEqual('15px');
  });
});
