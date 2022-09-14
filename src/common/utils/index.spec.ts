import {
  clamp,
  mapFromWindowsTheme,
  getDecimalPrecision,
  roundValueToStep,
  defaultTrue
} from './index';

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

describe(defaultTrue, () => {
  it.each([
    [null, true],
    [undefined, true],
    [true, true],
    [false, false]
  ])('when %s, returns %s', (value, expected) => {
    expect(defaultTrue(value)).toEqual(expected);
  });
});

describe('mapFromWindowsTheme', () => {
  const theme = {
    ButtonAlternateFace: '#000000',
    ButtonDkShadow: '#000001',
    ButtonFace: '#000002',
    ButtonHilight: '#000003',
    ButtonLight: '#000004',
    ButtonShadow: '#000005',
    ButtonText: '#000006',
    ActiveBorder: '#000007',
    AppWorkspace: '#000008',
    Background: '#000009',
    InactiveBorder: '#00000a',
    Scrollbar: '#00000b',
    Window: '#00000c',
    WindowFrame: '#00000d',
    WindowText: '#00000e',
    ActiveTitle: '#00000f',
    GradientActiveTitle: '#000010',
    GradientInactiveTitle: '#000011',
    InactiveTitle: '#000012',
    InactiveTitleText: '#000013',
    TitleText: '#000014',
    Menu: '#000015',
    MenuBar: '#000016',
    MenuHilight: '#000017',
    MenuText: '#000018',
    GrayText: '#000019',
    Hilight: '#00001a',
    HilightText: '#00001b',
    HotTrackingColor: '#00001c',
    InfoText: '#00001d',
    InfoWindow: '#00001e'
  };

  it('should map corresponding properties directly', () => {
    expect(mapFromWindowsTheme('theme', theme)).toMatchSnapshot();
  });

  it('should support gradients and shadows and scale', () => {
    expect(
      mapFromWindowsTheme('theme', theme, {
        useGradients: true,
        useShadow: false,
        scale: 1.5
      })
    ).toMatchSnapshot();
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
