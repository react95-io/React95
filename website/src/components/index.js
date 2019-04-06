'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactIs = _interopDefault(require('react-is'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}(
/*#__PURE__*/
_wrapNativeSuper(Error));

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formular from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = hue % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */

};

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */

function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(darken);

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(lighten);

var themes = {};
themes.default = {
  canvas: "#ffffff",
  material: "#ced0cf",
  borderDarkest: "#050608",
  borderLightest: "#ffffff",
  borderDark: "#888c8f",
  borderLight: "#dfe0e3",
  headerMaterialDark: "#000080",
  headerMaterialLight: "#1034a6",
  headerText: "#ffffff",
  text: "#050608",
  textInvert: "#ffffff",
  textDisabled: "#888c8f",
  textDisabledShadow: "#ffffff",
  inputText: "#050608",
  inputTextInvert: "#ffffff",
  inputTextDisabled: "#888c8f",
  inputTextDisabledShadow: "#ffffff",
  tooltip: "#fefbcc",
  anchor: "#1034a6",
  anchorVisited: "#440381",
  hoverBackground: "#000080",
  checkmark: "#050608",
  progress: "#000080"
};
themes.water = {
  canvas: "#ffffff",
  material: "#ced0cf",
  borderDarkest: "#050608",
  borderLightest: "#ffffff",
  borderDark: "#888c8f",
  borderLight: "#dfe0e3",
  headerMaterialDark: "#72b3b4",
  headerMaterialLight: "#72b3b4",
  headerText: "#ffffff",
  text: "#050608",
  textInvert: "#ffffff",
  textDisabled: "#888c8f",
  textDisabledShadow: "#ffffff",
  inputText: "#050608",
  inputTextInvert: "#ffffff",
  inputTextDisabled: "#888c8f",
  inputTextDisabledShadow: "#ffffff",
  tooltip: "#fefbcc",
  anchor: "#72b3b4",
  anchorVisited: "#440381",
  hoverBackground: "#72b3b4",
  checkmark: "#050608",
  progress: "#72b3b4"
};
themes.coldGray = {
  canvas: "#c7c7df",
  material: "#a1a3ca",
  borderDarkest: "#010601",
  borderLightest: "#c7c7df",
  borderDark: "#5b57a1",
  borderLight: "#a4a7c8",
  headerMaterialDark: curriedDarken(0.2, "#a1a3ca"),
  headerMaterialLight: "#8d88c2",
  headerText: "#010601",
  text: "#010601",
  textInvert: "#c7c7df",
  textDisabled: "#5b57a1",
  textDisabledShadow: "#c7c7df",
  inputText: "#050608",
  inputTextInvert: "#ffffff",
  inputTextDisabled: "#888c8f",
  inputTextDisabledShadow: "#ffffff",
  tooltip: "#fefbcc",
  anchor: "#8d88c2",
  anchorVisited: "#440381",
  hoverBackground: "#8d88c2",
  checkmark: "#010601",
  progress: "#8d88c2"
};
themes.lilacRoseDark = {
  canvas: "#dab1c7",
  material: "#b26496",
  borderDarkest: curriedDarken(0.7, "#b26496"),
  borderLightest: curriedLighten(0.2, "#b26496"),
  borderDark: curriedDarken(0.15, "#b26496"),
  borderLight: curriedLighten(0.05, "#b26496"),
  headerMaterialDark: "#a65387",
  headerMaterialLight: "#8d88c2",
  headerText: "#010601",
  text: "#000000",
  textInvert: "#ecbfe3",
  textDisabled: "#82416d",
  textDisabledShadow: "#ecbfe3",
  inputText: "#000000",
  inputTextInvert: "#ecbfe3",
  inputTextDisabled: "#000000",
  inputTextDisabledShadow: "#000000",
  tooltip: "#fefbcc",
  anchor: "#a65387",
  anchorVisited: "#440381",
  hoverBackground: "#713259",
  checkmark: "#010601",
  progress: "#713259"
};
themes.violetDark = {
  canvas: "#c47bcc",
  material: "#652a6d",
  borderDarkest: "#18051a",
  borderLightest: "#c47bcc",
  borderDark: "#3c1f3e",
  borderLight: "#945b9b",
  headerMaterialDark: "#1034a6",
  headerMaterialLight: "#512155",
  text: "#c57ece",
  textInvert: "#c47bcc",
  textDisabled: "#3c1f3e",
  textDisabledShadow: "#c47bcc",
  inputText: "#18051a",
  inputTextInvert: "#c57ece",
  inputTextDisabled: "#000000",
  inputTextDisabledShadow: "#000000",
  tooltip: "#fefbcc",
  anchor: "#1034a6",
  anchorVisited: "#440381",
  hoverBackground: "#512155",
  checkmark: "#000000",
  progress: "#000080"
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

{
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
}
});

var fontSizes = {
  sm: "15px",
  md: "16px",
  lg: "17px"
};
var blockSizes = {
  sm: "27px",
  md: "35px",
  lg: "43px"
};
var padding = {
  sm: "0.5rem",
  md: "1rem",
  lg: "1.25rem"
};
var fontFamily = "sans-serif";

var StyledAnchor = styled__default.a.withConfig({
  displayName: "Anchor__StyledAnchor",
  componentId: "vm2byl-0"
})(["color:", ";font-size:", ";text-decoration:underline;&:visited{color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.anchor;
}, function (_ref2) {
  var size = _ref2.size;
  return size ? fontSizes[size] : "inherit";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.anchorVisited;
});

var Anchor = function Anchor(_ref4) {
  var className = _ref4.className,
      style = _ref4.style,
      href = _ref4.href,
      children = _ref4.children,
      otherProps = _objectWithoutProperties(_ref4, ["className", "style", "href", "children"]);

  return React__default.createElement(StyledAnchor, _extends$1({
    href: href,
    className: className,
    style: style
  }, otherProps), children);
};

Anchor.defaultProps = {};
Anchor.propTypes = {
  className: propTypes.string,
  href: propTypes.string.isRequired,
  style: propTypes.object,
  children: propTypes.node.isRequired
};

var shadow = "4px 4px 10px 0 rgba(0, 0, 0, 0.35)";
var insetShadow = "inset 3px 3px 10px rgba(0, 0, 0, 0.3)";
var StyledMaterial = styled__default.div.withConfig({
  displayName: "common__StyledMaterial",
  componentId: "pzov9k-0"
})(["box-sizing:border-box;display:inline-block;color:", ";background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.material;
});
var createDisabledTextStyles = function createDisabledTextStyles() {
  return styled.css(["color:", ";text-shadow:1px 1px ", ";"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.textDisabled;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.textDisabledShadow;
  });
};
var createBoxStyles = function createBoxStyles() {
  return styled.css(["box-sizing:border-box;display:inline-block;background-color:", ";color:", ";"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.material;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.text;
  });
};
var createBorderStyles = function createBorderStyles() {
  var invert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return invert ? styled.css(["border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";box-shadow:", " inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref7) {
    var theme = _ref7.theme;
    return theme.borderDarkest;
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.borderDarkest;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.borderLightest;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.borderLightest;
  }, function (props) {
    return props.shadow && shadow + ", ";
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.borderDark;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.borderLight;
  }) : styled.css(["border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";box-shadow:", " inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref13) {
    var theme = _ref13.theme;
    return theme.borderLightest;
  }, function (_ref14) {
    var theme = _ref14.theme;
    return theme.borderLightest;
  }, function (_ref15) {
    var theme = _ref15.theme;
    return theme.borderDarkest;
  }, function (_ref16) {
    var theme = _ref16.theme;
    return theme.borderDarkest;
  }, function (props) {
    return props.shadow && shadow + ", ";
  }, function (_ref17) {
    var theme = _ref17.theme;
    return theme.borderLight;
  }, function (_ref18) {
    var theme = _ref18.theme;
    return theme.borderDark;
  });
};
var StyledCutout = styled__default.div.withConfig({
  displayName: "common__StyledCutout",
  componentId: "pzov9k-1"
})(["position:relative;box-sizing:border-box;padding:2px;border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";&:before{position:absolute;left:0;top:0;z-index:1;content:\"\";width:calc(100% - 4px);height:calc(100% - 4px);border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";pointer-events:none;", "}"], function (_ref19) {
  var theme = _ref19.theme;
  return theme.borderDark;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.borderDark;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.borderLightest;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.borderLightest;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.borderDarkest;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.borderDarkest;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.borderLight;
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.borderLight;
}, function (props) {
  return props.shadow && "box-shadow:" + insetShadow + ";";
});
var StyledTextInput = styled__default.input.withConfig({
  displayName: "common__StyledTextInput",
  componentId: "pzov9k-2"
})(["width:100%;height:100%;padding:0 ", ";outline:none;border:none;background:none;font-size:", ";font-family:", ";color:", ";text-shadow:", ";"], padding.sm, fontSizes.md, fontFamily, function (_ref27) {
  var theme = _ref27.theme,
      disabled = _ref27.disabled;
  return disabled ? theme.inputTextDisabled : theme.inputText;
}, function (_ref28) {
  var theme = _ref28.theme,
      disabled = _ref28.disabled;
  return disabled ? "1px 1px " + theme.inputTextDisabledShadow : "none";
});

var StyledAppBar = styled__default.header.withConfig({
  displayName: "AppBar__StyledAppBar",
  componentId: "sc-1w4lbfy-0"
})(["", ";", ";position:", ";top:0;right:0;left:auto;display:flex;flex-direction:column;width:100%;"], createBorderStyles(), createBoxStyles(), function (props) {
  return props.fixed ? "fixed" : "absolute";
});

var AppBar = function AppBar(_ref) {
  var fixed = _ref.fixed,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      shadow = _ref.shadow,
      otherProps = _objectWithoutProperties(_ref, ["fixed", "children", "className", "style", "shadow"]);

  return React__default.createElement(StyledAppBar, _extends$1({
    fixed: fixed,
    style: style,
    className: className,
    shadow: shadow
  }, otherProps), children);
};

AppBar.defaultProps = {
  shadow: true,
  fixed: true
};
AppBar.propTypes = {
  style: propTypes.object,
  shadow: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  fixed: propTypes.bool
};

var StyledBar = styled__default.div.withConfig({
  displayName: "Bar__StyledBar",
  componentId: "sc-1m14zj1-0"
})(["display:inline-block;height:", ";width:5px;border-top:2px solid ", ";border-left:2px solid ", ";border-bottom:2px solid ", ";border-right:2px solid ", ";background:", ";"], function (props) {
  return blockSizes[props.size];
}, function (_ref) {
  var theme = _ref.theme;
  return theme.borderLightest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderLightest;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderDark;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderDark;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.material;
});

var Bar = function Bar(_ref6) {
  var size = _ref6.size,
      className = _ref6.className,
      style = _ref6.style,
      otherProps = _objectWithoutProperties(_ref6, ["size", "className", "style"]);

  return React__default.createElement(StyledBar, _extends$1({
    size: size,
    className: className,
    style: style
  }, otherProps));
};

Bar.defaultProps = {
  size: "md"
};
Bar.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  size: propTypes.oneOf(["sm", "md", "lg"])
};

var StyledButton = styled__default.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "aeh8v3-0"
})(["", ";position:relative;display:inline-flex;align-items:center;justify-content:center;", " height:", ";width:", ";padding:", ";font-size:", ";", " &:active{", " padding-top:", ";}padding-top:", ";", ""], createBoxStyles(), function (props) {
  return props.flat ? null : props.active ? createBorderStyles(true) : createBorderStyles(false);
}, function (props) {
  return blockSizes[props.size];
}, function (props) {
  return props.fullWidth ? "100%" : props.square ? blockSizes[props.size] : "auto";
}, function (props) {
  return props.square ? 0 : "0 " + padding.sm;
}, fontSizes.md, function (props) {
  return props.isDisabled && createDisabledTextStyles();
}, function (props) {
  return !props.isDisabled && !props.flat && createBorderStyles(true);
}, function (props) {
  return !props.isDisabled && "2px";
}, function (props) {
  return props.active && !props.isDisabled && "2px";
}, function (props) {
  return props.flat && "border: none;";
});

var Button = function Button(_ref) {
  var type = _ref.type,
      onClick = _ref.onClick,
      style = _ref.style,
      disabled = _ref.disabled,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      square = _ref.square,
      active = _ref.active,
      flat = _ref.flat,
      className = _ref.className,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["type", "onClick", "style", "disabled", "fullWidth", "size", "square", "active", "flat", "className", "children"]);

  return React__default.createElement(StyledButton, _extends$1(_defineProperty({
    type: type,
    onClick: disabled ? undefined : onClick,
    style: style,
    isDisabled: disabled,
    fullWidth: fullWidth,
    size: size,
    square: square,
    active: active,
    flat: flat,
    className: className
  }, "style", style), otherProps), children);
};

Button.defaultProps = {
  type: "button",
  onClick: null,
  style: {},
  disabled: false,
  fullWidth: false,
  size: "md",
  square: false,
  active: false,
  flat: false
};
Button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
  style: propTypes.object,
  disabled: propTypes.bool,
  fullWidth: propTypes.bool,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  square: propTypes.bool,
  active: propTypes.bool,
  flat: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired
};

var StyledLabel = styled__default.label.withConfig({
  displayName: "Checkbox__StyledLabel",
  componentId: "oa7up1-0"
})(["display:block;position:relative;padding-left:calc(20px + ", ");margin:", " 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:", ";", ""], padding.sm, padding.md, fontSizes.md, function (props) {
  return props.isDisabled && createDisabledTextStyles();
});
var StyledInput = styled__default.input.withConfig({
  displayName: "Checkbox__StyledInput",
  componentId: "oa7up1-1"
})(["position:absolute;opacity:0;"]);

var createCheckmarkSymbol = function createCheckmarkSymbol(_ref) {
  var checked = _ref.checked;
  return checked && styled.css(["&:after{content:\"\";display:block;position:absolute;left:50%;top:calc(50% - 1px);width:3px;height:7px;border:solid ", ";border-width:0 3px 3px 0;transform:translate(-50%,-50%) rotate(45deg);}"], function (_ref2) {
    var theme = _ref2.theme;
    return theme.checkmark;
  });
};

var StyledCheckmark = styled__default(StyledCutout).withConfig({
  displayName: "Checkbox__StyledCheckmark",
  componentId: "oa7up1-2"
})(["position:absolute;top:50%;left:0;transform:translateY(-50%);width:20px;height:20px;background:", ";", ";box-shadow:", ";&:before{box-shadow:none;}"], function (_ref3) {
  var theme = _ref3.theme,
      isDisabled = _ref3.isDisabled;
  return isDisabled ? theme.material : theme.canvas;
}, function (props) {
  return createCheckmarkSymbol(props);
}, function (_ref4) {
  var shadow = _ref4.shadow;
  return shadow ? insetShadow : "none";
});

var Checkbox = function Checkbox(_ref5) {
  var onChange = _ref5.onChange,
      label = _ref5.label,
      disabled = _ref5.disabled,
      value = _ref5.value,
      checked = _ref5.checked,
      name = _ref5.name,
      className = _ref5.className,
      style = _ref5.style,
      shadow = _ref5.shadow,
      otherProps = _objectWithoutProperties(_ref5, ["onChange", "label", "disabled", "value", "checked", "name", "className", "style", "shadow"]);

  var _useState = React.useState(checked),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(e) {
    var newState = e.target.checked;
    setState(newState);
    onChange && onChange(e);
  };

  return React__default.createElement(StyledLabel, {
    isDisabled: disabled,
    className: className,
    style: style
  }, label, React__default.createElement(StyledInput, _extends$1({
    onChange: disabled ? undefined : handleChange,
    readOnly: disabled,
    type: "checkbox",
    value: value,
    checked: state,
    name: name
  }, otherProps)), React__default.createElement(StyledCheckmark, {
    checked: state,
    isDisabled: disabled,
    shadow: shadow
  }));
};

Checkbox.defaultProps = {
  checked: false,
  name: "",
  value: null,
  label: "",
  disabled: false,
  shadow: true
};
Checkbox.propTypes = {
  onChange: propTypes.func,
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]).isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.number]),
  checked: propTypes.bool,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  style: propTypes.object
};

var Cutout = function Cutout(_ref) {
  var className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      shadow = _ref.shadow,
      otherProps = _objectWithoutProperties(_ref, ["className", "style", "children", "shadow"]);

  return React__default.createElement(StyledCutout, _extends$1({
    shadow: shadow,
    className: className,
    style: style
  }, otherProps), children);
};

Cutout.defaultProps = {
  shadow: true
};
Cutout.propTypes = {
  className: propTypes.string,
  shadow: propTypes.bool,
  children: propTypes.node,
  style: propTypes.object
};

var StyledDivider = styled__default.hr.withConfig({
  displayName: "Divider__StyledDivider",
  componentId: "ihk56-0"
})(["width:100%;border-bottom:2px solid ", ";border-top:2px solid ", ";margin:0;"], function (_ref) {
  var theme = _ref.theme;
  return theme.borderLightest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderDark;
});

var Divider = function Divider(_ref3) {
  var className = _ref3.className,
      style = _ref3.style,
      otherProps = _objectWithoutProperties(_ref3, ["className", "style"]);

  return React__default.createElement(StyledDivider, _extends$1({
    className: className,
    style: style
  }, otherProps));
};

Divider.defaultProps = {};
Divider.propTypes = {
  className: propTypes.string,
  style: propTypes.object
};

var StyledFieldset = styled__default.fieldset.withConfig({
  displayName: "Fieldset__StyledFieldset",
  componentId: "sc-1js25js-0"
})(["position:relative;border:2px solid ", ";box-shadow:-1px -1px 0 1px ", ",inset -1px -1px 0 1px ", ";padding:", ";font-size:", ";color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.borderLightest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderDark;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderDark;
}, padding.md, fontSizes.md, function (_ref4) {
  var theme = _ref4.theme;
  return theme.text;
});
var StyledLegend = styled__default.legend.withConfig({
  displayName: "Fieldset__StyledLegend",
  componentId: "sc-1js25js-1"
})(["position:absolute;top:0;left:", ";transform:translateY(calc(-50% - 2px));padding:0 ", ";font-size:", ";background:", ";"], padding.sm, padding.sm, fontSizes.md, function (_ref5) {
  var theme = _ref5.theme;
  return theme.material;
});
var StyledFieldsetContent = styled__default.div.withConfig({
  displayName: "Fieldset__StyledFieldsetContent",
  componentId: "sc-1js25js-2"
})(["", ""], function (props) {
  return props.isDisabled && createDisabledTextStyles();
});

var Fieldset = function Fieldset(_ref6) {
  var label = _ref6.label,
      disabled = _ref6.disabled,
      children = _ref6.children,
      className = _ref6.className,
      style = _ref6.style,
      otherProps = _objectWithoutProperties(_ref6, ["label", "disabled", "children", "className", "style"]);

  return React__default.createElement(StyledFieldset, _extends$1({
    isDisabled: disabled,
    style: style,
    className: className
  }, otherProps), label && React__default.createElement(StyledLegend, null, label), React__default.createElement(StyledFieldsetContent, {
    isDisabled: disabled
  }, children));
};

Fieldset.defaultProps = {
  disabled: false
};
Fieldset.propTypes = {
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.node]),
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
  disabled: propTypes.bool
};

var createListPositionStyles = function createListPositionStyles(_ref) {
  var _ref$verticalAlign = _ref.verticalAlign,
      verticalAlign = _ref$verticalAlign === void 0 ? "bottom" : _ref$verticalAlign,
      _ref$horizontalAlign = _ref.horizontalAlign,
      horizontalAlign = _ref$horizontalAlign === void 0 ? "left" : _ref$horizontalAlign;
  return "\n    position: absolute;\n    ".concat(verticalAlign === "bottom" ? "bottom: 0;" : "top: 0;", "\n    ").concat(horizontalAlign === "left" ? "left: 0;" : "right: 0;", "\n\n    transform: translate(0, ").concat(verticalAlign === "top" ? "-100%" : "100%", ")\n  ");
};

var StyledList = styled__default.ul.withConfig({
  displayName: "List__StyledList",
  componentId: "sc-1gc3eq-0"
})(["width:", ";padding:2px 4px 4px 2px;", " ", " ", " list-style:none;position:relative;", ""], function (props) {
  return props.fullWidth ? "100%" : "auto";
}, createBorderStyles(), createBoxStyles(), function (props) {
  return props.inline && "\n    align-items: center;\n    display: inline-flex;\n  ";
}, function (props) {
  return (props.horizontalAlign || props.verticalAlign) && createListPositionStyles;
});

var List = function List(_ref2) {
  var inline = _ref2.inline,
      shadow = _ref2.shadow,
      className = _ref2.className,
      style = _ref2.style,
      children = _ref2.children,
      fullWidth = _ref2.fullWidth,
      verticalAlign = _ref2.verticalAlign,
      horizontalAlign = _ref2.horizontalAlign,
      otherProps = _objectWithoutProperties(_ref2, ["inline", "shadow", "className", "style", "children", "fullWidth", "verticalAlign", "horizontalAlign"]);

  return React__default.createElement(StyledList, _extends$1({
    inline: inline,
    verticalAlign: verticalAlign,
    horizontalAlign: horizontalAlign,
    shadow: shadow,
    fullWidth: fullWidth,
    className: className,
    style: style
  }, otherProps), children);
};

List.defaultProps = {
  style: {},
  fullWidth: false,
  shadow: true,
  inline: false
};
List.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  fullWidth: propTypes.bool,
  inline: propTypes.bool,
  shadow: propTypes.bool,
  children: propTypes.node,
  verticalAlign: propTypes.oneOf(["top", "bottom"]),
  horizontalAlign: propTypes.oneOf(["left", "right"])
};

var StyledListItem = styled__default.li.withConfig({
  displayName: "ListItem__StyledListItem",
  componentId: "sc-754ppf-0"
})(["display:block;position:relative;height:", ";width:", ";padding:0 ", ";white-space:nowrap;text-align:", ";line-height:", ";color:", ";&:hover{", " cursor:default;}", ""], function (props) {
  return blockSizes[props.size];
}, function (props) {
  return props.square ? blockSizes[props.size] : "auto";
}, padding.sm, function (props) {
  return props.square ? "center" : "left";
}, function (props) {
  return blockSizes[props.size];
}, function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (_ref2) {
  var theme = _ref2.theme,
      isDisabled = _ref2.isDisabled;
  return !isDisabled && "\n        color: ".concat(theme.textInvert, ";\n        background: ").concat(theme.hoverBackground, ";\n      ");
}, function (props) {
  return props.isDisabled && createDisabledTextStyles();
});

var ListItem = function ListItem(_ref3) {
  var size = _ref3.size,
      disabled = _ref3.disabled,
      square = _ref3.square,
      className = _ref3.className,
      style = _ref3.style,
      children = _ref3.children,
      onClick = _ref3.onClick,
      otherProps = _objectWithoutProperties(_ref3, ["size", "disabled", "square", "className", "style", "children", "onClick"]);

  return React__default.createElement(StyledListItem, _extends$1({
    size: size,
    isDisabled: disabled,
    square: square,
    className: className,
    style: style,
    onClick: disabled ? undefined : onClick
  }, otherProps), children);
};

ListItem.defaultProps = {
  style: {},
  disabled: false,
  size: "lg",
  square: false,
  onClick: null
};
ListItem.propTypes = {
  className: propTypes.string,
  href: propTypes.string,
  style: propTypes.object,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  disabled: propTypes.bool,
  fullWidth: propTypes.bool,
  square: propTypes.bool,
  children: propTypes.node,
  onClick: propTypes.func
};

var StyledInputWrapper = styled__default(StyledCutout).withConfig({
  displayName: "InputBase__StyledInputWrapper",
  componentId: "sc-1komot1-0"
})(["height:", ";padding:2px;background:", ";"], blockSizes.md, function (_ref) {
  var theme = _ref.theme,
      isDisabled = _ref.isDisabled;
  return isDisabled ? theme.material : theme.canvas;
});

var InputBase = function InputBase(_ref2) {
  var onChange = _ref2.onChange,
      value = _ref2.value,
      disabled = _ref2.disabled,
      name = _ref2.name,
      type = _ref2.type,
      style = _ref2.style,
      shadow = _ref2.shadow,
      width = _ref2.width,
      otherProps = _objectWithoutProperties(_ref2, ["onChange", "value", "disabled", "name", "type", "style", "shadow", "width"]);

  return React__default.createElement(StyledInputWrapper, {
    width: width,
    shadow: shadow,
    isDisabled: disabled,
    style: _objectSpread({}, style, {
      width: width ? width : "auto"
    })
  }, React__default.createElement(StyledTextInput, _extends$1({
    onChange: disabled ? undefined : onChange,
    readOnly: disabled,
    disabled: disabled,
    value: value,
    name: name,
    type: type
  }, otherProps)));
};

InputBase.defaultProps = {
  value: "",
  disabled: false,
  shadow: true,
  onChange: undefined
};
InputBase.propTypes = {
  name: propTypes.string,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  type: propTypes.oneOf(["text", "number", "tel"])
};

var StyledNumberFieldWrapper = styled__default.div.withConfig({
  displayName: "NumberField__StyledNumberFieldWrapper",
  componentId: "sc-4z4nbn-0"
})(["display:inline-flex;align-items:center;"]);
var StyledButtonWrapper = styled__default.div.withConfig({
  displayName: "NumberField__StyledButtonWrapper",
  componentId: "sc-4z4nbn-1"
})(["height:", ";display:flex;flex-direction:column;flex-wrap:nowrap;margin-left:2px;margin-top:-2px;"], blockSizes.md);
var StyledButton$1 = styled__default(Button).withConfig({
  displayName: "NumberField__StyledButton",
  componentId: "sc-4z4nbn-2"
})(["height:50%;width:30px;padding:0;flex-shrink:0;border-left-color:", ";border-top-color:", ";box-shadow:inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.borderLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderLight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderLightest;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderDark;
});
var StyledButtonIcon = styled__default.span.withConfig({
  displayName: "NumberField__StyledButtonIcon",
  componentId: "sc-4z4nbn-3"
})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) ", ";width:0px;height:0px;border-left:4px solid transparent;border-right:4px solid transparent;display:inline-block;border-top:4px solid ", ";", ":active &{margin-top:2px;}"], function (props) {
  return props.invert && "rotateZ(180deg)";
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.text;
}, StyledButton$1);

var NumberField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumberField, _React$Component);

  function NumberField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NumberField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(NumberField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized$1(_this), "state", {
      value: parseInt(_this.props.value) || 0
    });

    _defineProperty(_assertThisInitialized$1(_this), "add", function (value) {
      var newValue = _this.normalize(_this.state.value + value);

      _this.props.onChange(newValue);

      _this.setState({
        value: newValue
      });
    });

    _defineProperty(_assertThisInitialized$1(_this), "handleChange", function (e) {
      var newValue = e.target.value === "-" ? "-" : _this.normalize(e.target.value);
      newValue = newValue ? newValue : newValue === 0 ? 0 : "";

      if (e.target.validity.valid) {
        _this.setState({
          value: newValue
        });

        _this.props.onChange(newValue);
      }
    });

    _defineProperty(_assertThisInitialized$1(_this), "normalize", function (value) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;
      if (min !== undefined && value < min) return min;
      if (max !== undefined && value > max) return max;
      return parseInt(value);
    });

    return _this;
  }

  _createClass(NumberField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          disableKeyboardInput = _this$props2.disableKeyboardInput,
          className = _this$props2.className,
          width = _this$props2.width,
          style = _this$props2.style,
          shadow = _this$props2.shadow;
      var value = this.state.value;
      return React__default.createElement(StyledNumberFieldWrapper, {
        className: className,
        style: _objectSpread({}, style, {
          width: width ? width : "auto"
        })
      }, React__default.createElement(InputBase, {
        value: value,
        onChange: disabled || disableKeyboardInput ? undefined : this.handleChange,
        readOnly: disabled || disableKeyboardInput,
        disabled: disabled,
        shadow: shadow,
        type: "tel",
        pattern: "^-?[0-9]\\d*\\.?\\d*$",
        width: "100%"
      }), React__default.createElement(StyledButtonWrapper, null, React__default.createElement(StyledButton$1, {
        disabled: disabled,
        onClick: function onClick() {
          return _this2.add(1);
        }
      }, React__default.createElement(StyledButtonIcon, {
        invert: true
      })), React__default.createElement(StyledButton$1, {
        disabled: disabled,
        onClick: function onClick() {
          return _this2.add(-1);
        }
      }, React__default.createElement(StyledButtonIcon, null))));
    }
  }]);

  return NumberField;
}(React__default.Component);

_defineProperty(NumberField, "defaultProps", {
  value: 0,
  disabled: false
});

_defineProperty(NumberField, "propTypes", {
  onChange: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
  min: propTypes.number,
  max: propTypes.number,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  disabled: propTypes.bool,
  disableKeyboardInput: propTypes.bool,
  fullWidth: propTypes.bool,
  shadow: propTypes.bool,
  className: propTypes.string
});

var Wrapper = styled__default(StyledCutout).withConfig({
  displayName: "Progress__Wrapper",
  componentId: "sc-1ewq2xm-0"
})(["display:inline-block;width:", "px;height:", ";position:relative;text-align:center;padding:0;overflow:hidden;"], function (props) {
  return props.width;
}, blockSizes.md);
var WhiteBar = styled__default.div.withConfig({
  displayName: "Progress__WhiteBar",
  componentId: "sc-1ewq2xm-1"
})(["width:calc(100% - 4px);line-height:", ";background:", ";color:#000;margin-left:2px;margin-top:-2px;color:", ";"], blockSizes.md, function (_ref) {
  var theme = _ref.theme;
  return theme.canvas;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
});
var BlueBarContainer = styled__default.div.withConfig({
  displayName: "Progress__BlueBarContainer",
  componentId: "sc-1ewq2xm-2"
})(["width:", "%;position:absolute;top:0;left:0;margin-left:2px;margin-top:-2px;overflow:hidden;background:", ";"], function (props) {
  return props.percent;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.progress;
});
var BlueBar = styled__default.div.withConfig({
  displayName: "Progress__BlueBar",
  componentId: "sc-1ewq2xm-3"
})(["width:", "px;height:100%;line-height:", ";color:", ";"], function (props) {
  return props.width - 8;
}, blockSizes.md, function (_ref4) {
  var theme = _ref4.theme;
  return theme.textInvert;
});

var ProgressBar = function ProgressBar(_ref5) {
  var width = _ref5.width,
      percent = _ref5.percent,
      shadow = _ref5.shadow;
  return React__default.createElement(Wrapper, {
    width: width,
    shadow: shadow
  }, React__default.createElement(WhiteBar, {
    width: width
  }, percent, "%"), React__default.createElement(BlueBarContainer, {
    percent: percent
  }, React__default.createElement(BlueBar, {
    width: width
  }, percent, "%")));
};

ProgressBar.defaultProps = {
  width: 250,
  percent: 0,
  shadow: true
};
ProgressBar.propTypes = {
  width: propTypes.number,
  percent: propTypes.number,
  shadow: propTypes.bool
};

var StyledLabel$1 = styled__default.label.withConfig({
  displayName: "Radio__StyledLabel",
  componentId: "sc-12bsm0-0"
})(["display:block;position:relative;padding-left:calc(20px + ", ");margin:", " 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:", ";", ""], padding.sm, padding.md, fontSizes.md, function (props) {
  return props.isDisabled && createDisabledTextStyles();
});
var StyledInput$1 = styled__default.input.withConfig({
  displayName: "Radio__StyledInput",
  componentId: "sc-12bsm0-1"
})(["position:absolute;opacity:0;"]);

var createCheckmarkSymbol$1 = function createCheckmarkSymbol(_ref) {
  var checked = _ref.checked;
  return checked && styled.css(["&:after{position:absolute;content:\"\";display:inline-block;top:50%;left:50%;width:6px;height:6px;transform:translate(-50%,-50%);border-radius:50%;background:", ";}"], function (_ref2) {
    var theme = _ref2.theme;
    return theme.checkmark;
  });
}; // had to overwrite box-shadow for StyledCheckmark since the default made checkbox too dark


var StyledCheckmark$1 = styled__default(StyledCutout).withConfig({
  displayName: "Radio__StyledCheckmark",
  componentId: "sc-12bsm0-2"
})(["position:absolute;top:50%;left:0;transform:translateY(-50%);width:20px;height:20px;border-radius:50%;background:", ";box-shadow:", ";&:before{content:\"\";position:absolute;left:0px;top:0px;width:calc(100% - 4px);height:calc(100% - 4px);border-radius:50%;box-shadow:none;}", ""], function (_ref3) {
  var theme = _ref3.theme,
      isDisabled = _ref3.isDisabled;
  return isDisabled ? theme.material : theme.canvas;
}, function (_ref4) {
  var shadow = _ref4.shadow;
  return shadow ? "inset 3px 3px 10px rgba(0,0,0,0.2)" : "none";
}, function (props) {
  return createCheckmarkSymbol$1(props);
});

var Radio = function Radio(_ref5) {
  var onChange = _ref5.onChange,
      label = _ref5.label,
      disabled = _ref5.disabled,
      value = _ref5.value,
      checked = _ref5.checked,
      name = _ref5.name,
      className = _ref5.className,
      style = _ref5.style,
      shadow = _ref5.shadow,
      otherProps = _objectWithoutProperties(_ref5, ["onChange", "label", "disabled", "value", "checked", "name", "className", "style", "shadow"]);

  return React__default.createElement(StyledLabel$1, {
    isDisabled: disabled,
    className: className,
    style: style
  }, label, React__default.createElement(StyledInput$1, _extends$1({
    onChange: disabled ? undefined : onChange,
    readOnly: disabled,
    type: "radio",
    value: value,
    checked: checked,
    name: name
  }, otherProps)), React__default.createElement(StyledCheckmark$1, {
    checked: checked,
    isDisabled: disabled,
    shadow: shadow
  }));
};

Radio.defaultProps = {
  checked: false,
  name: "",
  value: null,
  label: "",
  disabled: false,
  shadow: true
};
Radio.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]).isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.number]),
  checked: propTypes.bool,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  style: propTypes.object
};

var StyledSelectWrapper = styled__default(StyledCutout).withConfig({
  displayName: "Select__StyledSelectWrapper",
  componentId: "x1tonx-0"
})(["height:", ";display:flex;align-items:center;justify-content:space-between;background:", ";color:", ";font-size:", ";"], blockSizes.md, function (_ref) {
  var theme = _ref.theme;
  return theme.canvas;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.inputText;
}, fontSizes.md);
var StyledSelectContent = styled__default.div.withConfig({
  displayName: "Select__StyledSelectContent",
  componentId: "x1tonx-1"
})(["width:100%;padding-left:", ";overflow:hidden;"], padding.sm);
var StyledDropdownButton = styled__default(Button).withConfig({
  displayName: "Select__StyledDropdownButton",
  componentId: "x1tonx-2"
})(["height:100%;width:30px;padding:0;z-index:1;flex-shrink:0;border-left-color:", ";border-top-color:", ";box-shadow:inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderLight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderLight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderLightest;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderDark;
});
var StyledDropdownIcon = styled__default.span.withConfig({
  displayName: "Select__StyledDropdownIcon",
  componentId: "x1tonx-3"
})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:0px;height:0px;border-left:6px solid transparent;border-right:6px solid transparent;display:inline-block;border-top:6px solid ", ";", ":active &{margin-top:2px;}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.text;
}, StyledDropdownButton);
var StyledDropdownList = styled__default.ul.withConfig({
  displayName: "Select__StyledDropdownList",
  componentId: "x1tonx-4"
})(["font-size:", ";position:absolute;bottom:-2px;width:calc(100% - 2px);transform:translateY(100%);left:0px;background:", ";border:2px solid ", ";border-top:none;box-shadow:", ";cursor:default;z-index:99;"], fontSizes.md, function (_ref8) {
  var theme = _ref8.theme;
  return theme.canvas;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.borderDarkest;
}, function (props) {
  return props.shadow ? shadow : "none";
});
var StyledDropdownListItem = styled__default.li.withConfig({
  displayName: "Select__StyledDropdownListItem",
  componentId: "x1tonx-5"
})(["height:calc(", " - 8px);width:100%;padding-left:", ";line-height:calc(", " - 8px);font-size:", ";white-space:nowrap;color:", ";&:hover{background:", ";color:", ";}"], blockSizes.md, padding.sm, blockSizes.md, fontSizes.md, function (_ref10) {
  var theme = _ref10.theme;
  return theme.inputText;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.hoverBackground;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.inputTextInvert;
});

var Select = function Select(_ref13) {
  var items = _ref13.items,
      selectedIndex = _ref13.selectedIndex,
      shadow = _ref13.shadow,
      width = _ref13.width,
      height = _ref13.height,
      otherProps = _ref13.otherProps,
      className = _ref13.className,
      onChange = _ref13.onChange,
      style = _ref13.style;

  var _useState = React.useState(selectedIndex),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var handleSelect = function handleSelect(i) {
    if (onChange) onChange(items[i].value);
    setIndex(i);
  };

  return React__default.createElement(StyledSelectWrapper, _extends$1({
    className: className,
    onClick: function onClick() {
      return setOpen(!open);
    },
    style: _objectSpread({}, style, {
      width: width
    }),
    shadow: shadow
  }, otherProps), React__default.createElement(StyledSelectContent, null, items.length ? items[index].title : ""), React__default.createElement(StyledDropdownButton, null, React__default.createElement(StyledDropdownIcon, null)), open && React__default.createElement(StyledDropdownList, {
    shadow: shadow,
    style: height && {
      overflowY: "scroll",
      height: height
    }
  }, items.map(function (item, i) {
    return React__default.createElement(StyledDropdownListItem, {
      key: i,
      onClick: function onClick(e) {
        handleSelect(i);
      }
    }, item.title);
  })));
};

Select.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  className: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  selectedIndex: propTypes.number,
  shadow: propTypes.bool,
  style: propTypes.object,
  onChange: propTypes.func.isRequired
};
Select.defaultProps = {
  style: {},
  shadow: true,
  selectedIndex: 0
};

var StyledTab = styled__default.div.withConfig({
  displayName: "Tab__StyledTab",
  componentId: "l07vtw-0"
})(["", " ", " position:relative;height:", ";line-height:", ";padding:0 ", ";border-bottom:none;border-top-left-radius:5px;border-top-right-radius:5px;margin-bottom:-2px;cursor:default;color:", ";", " &:after{content:\"\";position:absolute;width:calc(100% - 4px);height:4px;background:", ";bottom:-2px;left:2px;}"], createBoxStyles(), createBorderStyles(), blockSizes.md, blockSizes.md, padding.sm, function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (props) {
  return props.active && "\n    z-index: 1;\n    height: calc(".concat(blockSizes.md, " + 4px);\n    top: -4px;\n    margin-bottom: -6px;\n    padding: 0 calc(").concat(padding.sm, " + 8px);\n    margin-left: -8px;\n    margin-right: -8px;\n  ");
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.material;
});

var Tab = function Tab(_ref3) {
  var value = _ref3.value,
      _onClick = _ref3.onClick,
      active = _ref3.active,
      children = _ref3.children,
      className = _ref3.className,
      style = _ref3.style,
      otherProps = _objectWithoutProperties(_ref3, ["value", "onClick", "active", "children", "className", "style"]);

  return React__default.createElement(StyledTab, _extends$1({
    className: className,
    active: active,
    style: style
  }, otherProps, {
    onClick: function onClick() {
      return _onClick(value);
    }
  }), children);
};

Tab.defaultProps = {};
Tab.propTypes = {
  value: propTypes.number,
  onClick: propTypes.func,
  active: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

var StyledTabs = styled__default.nav.withConfig({
  displayName: "Tabs__StyledTabs",
  componentId: "sc-11btqu5-0"
})(["position:relative;left:8px;"]);

var Tabs = function Tabs(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["value", "onChange", "children", "className", "style"]);

  var childrenWithProps = React__default.Children.map(children, function (child) {
    var tabProps = {
      active: child.props.value === value,
      onClick: onChange
    };
    return React__default.cloneElement(child, tabProps);
  });
  return React__default.createElement(StyledTabs, _extends$1({
    className: className,
    style: style
  }, otherProps), childrenWithProps);
};

Tabs.defaultProps = {
  value: 0
};
Tabs.propTypes = {
  value: propTypes.number,
  onChange: propTypes.func,
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

var StyledTabBody = styled__default.div.withConfig({
  displayName: "TabBody__StyledTabBody",
  componentId: "sc-1nj9ylo-0"
})(["", " ", " position:relative;display:block;height:100%;padding:", ";padding-top:calc(1.5 * ", ");"], createBoxStyles(), createBorderStyles(), padding.md, padding.md);

var TabBody = function TabBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "style"]);

  return React__default.createElement(StyledTabBody, _extends$1({
    className: className,
    style: style
  }, otherProps), children);
};

TabBody.defaultProps = {};
TabBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

var StyledTable = styled__default.table.withConfig({
  displayName: "Table__StyledTable",
  componentId: "sc-4crw6k-0"
})(["display:table;width:100%;border-collapse:collapse;border-spacing:0;"]);

var Table = function Table(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["className", "children", "style"]);

  return React__default.createElement(StyledCutout, null, React__default.createElement(StyledTable, _extends$1({
    className: className,
    style: style
  }, otherProps), children));
};

Table.defaultProps = {};
Table.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

var StyledTableBody = styled__default.tbody.withConfig({
  displayName: "TableBody__StyledTableBody",
  componentId: "n44fge-0"
})(["background:", ";display:table-row-group;box-shadow:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.canvas;
}, insetShadow);

var TableBody = function TableBody(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      style = _ref2.style,
      otherProps = _objectWithoutProperties(_ref2, ["className", "children", "style"]);

  return React__default.createElement(StyledTableBody, _extends$1({
    className: className,
    style: style
  }, otherProps), children);
};

TableBody.defaultProps = {};
TableBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

var StyledTd = styled__default.td.withConfig({
  displayName: "TableDataCell__StyledTd",
  componentId: "sc-1h0hlh4-0"
})(["padding:0 ", ";"], padding.sm);

var TableDataCell = function TableDataCell(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["className", "children", "style"]);

  return React__default.createElement(StyledTd, _extends$1({
    className: className,
    style: style
  }, otherProps), children);
};

TableDataCell.defaultProps = {};
TableDataCell.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

var StyledTableHead = styled__default.thead.withConfig({
  displayName: "TableHead__StyledTableHead",
  componentId: "sc-1y8qzyj-0"
})(["display:table-header-group;"]);

var TableHead = function TableHead(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["className", "children", "style"]);

  return React__default.createElement(StyledTableHead, _extends$1({
    className: className,
    style: style
  }, otherProps), children);
};

TableHead.defaultProps = {};
TableHead.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

var StyledHeadCell = styled__default.th.withConfig({
  displayName: "TableHeadCell__StyledHeadCell",
  componentId: "stcil-0"
})(["", " padding:0 ", ";display:table-cell;vertical-align:inherit;background:", ";&:active{", " border-left:none;border-top:none;}border-left:none;border-top:none;cursor:default;"], createBorderStyles(), padding.sm, function (_ref) {
  var theme = _ref.theme;
  return theme.material;
}, createBorderStyles(true));

var TableHeadCell = function TableHeadCell(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      style = _ref2.style,
      otherProps = _objectWithoutProperties(_ref2, ["className", "children", "style"]);

  return React__default.createElement(StyledHeadCell, _extends$1({
    className: className,
    style: style
  }, otherProps), children);
};

TableHeadCell.defaultProps = {
  onClick: null
};
TableHeadCell.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

var StyledTr = styled__default.tr.withConfig({
  displayName: "TableRow__StyledTr",
  componentId: "sc-1pmkict-0"
})(["color:inherit;display:table-row;height:calc(", " - 2px);line-height:calc(", " - 2px);vertical-align:middle;outline:none;color:", ";", ""], blockSizes.md, blockSizes.md, function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (_ref2) {
  var theme = _ref2.theme,
      head = _ref2.head;
  return !head && "&:hover {\n      background: ".concat(theme.hoverBackground, ";\n      color: ").concat(theme.textInvert, "\n    }");
});

var TableRow = function TableRow(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      style = _ref3.style,
      head = _ref3.head,
      otherProps = _objectWithoutProperties(_ref3, ["className", "children", "style", "head"]);

  return React__default.createElement(StyledTr, _extends$1({
    head: head,
    className: className,
    style: style
  }, otherProps), children);
};

TableRow.defaultProps = {
  head: false
};
TableRow.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object,
  head: propTypes.bool
};

var StyledTextAreaWrapper = styled__default(StyledCutout).withConfig({
  displayName: "TextArea__StyledTextAreaWrapper",
  componentId: "hged13-0"
})(["display:inline-block;min-height:", ";padding:0;background:", ";"], blockSizes.md, function (_ref) {
  var theme = _ref.theme,
      isDisabled = _ref.isDisabled;
  return isDisabled ? theme.material : theme.canvas;
});
var StyledTextArea = styled__default.textarea.withConfig({
  displayName: "TextArea__StyledTextArea",
  componentId: "hged13-1"
})(["width:100%;height:100%;padding:", ";outline:none;border:none;background:none;resize:none;font-size:", ";font-family:", ";color:", ";", " ", ""], padding.sm, fontSizes.md, fontFamily, function (_ref2) {
  var theme = _ref2.theme,
      disabled = _ref2.disabled;
  return disabled ? theme.inputTextDisabled : theme.inputText;
}, function (props) {
  return props.disabled && createDisabledTextStyles();
}, function (props) {
  return props.shadow && "box-shadow: " + insetShadow + ";";
});

var TextArea = function TextArea(_ref3) {
  var children = _ref3.children,
      rows = _ref3.rows,
      cols = _ref3.cols,
      onChange = _ref3.onChange,
      value = _ref3.value,
      disabled = _ref3.disabled,
      name = _ref3.name,
      width = _ref3.width,
      height = _ref3.height,
      className = _ref3.className,
      style = _ref3.style,
      shadow = _ref3.shadow,
      placeholder = _ref3.placeholder,
      otherProps = _objectWithoutProperties(_ref3, ["children", "rows", "cols", "onChange", "value", "disabled", "name", "width", "height", "className", "style", "shadow", "placeholder"]);

  return React__default.createElement(StyledTextAreaWrapper, {
    style: _objectSpread({}, style, {
      width: width ? width : "100%",
      height: height ? height : "auto"
    }),
    isDisabled: disabled
  }, React__default.createElement(StyledTextArea, _extends$1({
    className: className,
    name: name,
    width: width,
    height: height,
    readOnly: disabled,
    onChange: disabled && onChange ? onChange : undefined,
    shadow: shadow,
    disabled: disabled,
    placeholder: placeholder
  }, otherProps), children));
};

TextArea.defaultProps = {
  children: null,
  shadow: true,
  placeholder: ""
};
TextArea.propTypes = {
  rows: propTypes.number,
  cols: propTypes.number,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  name: propTypes.string,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  placeholder: propTypes.string
};

var TextField = function TextField(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      disabled = _ref.disabled,
      name = _ref.name,
      width = _ref.width,
      className = _ref.className,
      type = _ref.type,
      style = _ref.style,
      shadow = _ref.shadow,
      placeholder = _ref.placeholder,
      otherProps = _objectWithoutProperties(_ref, ["onChange", "value", "disabled", "name", "width", "className", "type", "style", "shadow", "placeholder"]);

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var onValueChange = function onValueChange(e) {
    var newValue = e.target.value;
    setInputValue(newValue);
    onChange && onChange(e);
  };

  return React__default.createElement(InputBase, _extends$1({
    shadow: shadow,
    width: width,
    onChange: disabled ? undefined : onValueChange,
    disabled: disabled,
    value: inputValue,
    placeholder: placeholder,
    name: name,
    className: className,
    style: style
  }, otherProps, {
    type: "text"
  }));
};

TextField.defaultProps = {
  value: "",
  placeholder: "",
  disabled: false,
  shadow: true,
  onChange: undefined
};
TextField.propTypes = {
  className: propTypes.string,
  placeholder: propTypes.string,
  name: propTypes.string,
  onChange: propTypes.func,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  width: propTypes.oneOfType([propTypes.string, propTypes.number])
};

var StyledToolbar = styled__default.div.withConfig({
  displayName: "Toolbar__StyledToolbar",
  componentId: "sy5udo-0"
})(["position:relative;display:flex;align-items:center;padding:", ";"], function (props) {
  return props.noPadding ? "0px" : "4px";
});

var Toolbar = function Toolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      noPadding = _ref.noPadding,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "style", "noPadding"]);

  return React__default.createElement(StyledToolbar, _extends$1({
    noPadding: noPadding,
    className: className,
    style: style
  }, otherProps), children);
};

Toolbar.defaultProps = {
  noPadding: false
};
Toolbar.propTypes = {
  style: propTypes.object,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  noPadding: propTypes.bool
};

var Tip = styled__default.div.withConfig({
  displayName: "Tooltip__Tip",
  componentId: "crqm6i-0"
})(["position:absolute;bottom:-4px;left:50%;z-index:10;transform:translate(-50%,100%);display:", ";padding:4px;border:1px solid ", ";background:", ";box-shadow:", ";text-align:center;"], function (props) {
  return props.show ? "block" : "none";
}, function (_ref) {
  var theme = _ref.theme;
  return theme.borderDarkest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.tooltip;
}, shadow);
var Wrapper$1 = styled__default.div.withConfig({
  displayName: "Tooltip__Wrapper",
  componentId: "crqm6i-1"
})(["position:relative;display:inline-block;white-space:nowrap;"]);

var Tooltip = function Tooltip(_ref3) {
  var children = _ref3.children,
      text = _ref3.text,
      delay = _ref3.delay,
      className = _ref3.className,
      style = _ref3.style,
      otherProps = _objectWithoutProperties(_ref3, ["children", "text", "delay", "className", "style"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      delayTimer = _useState4[0],
      setDelayTimer = _useState4[1];

  var handleEnter = function handleEnter() {
    var timer = setTimeout(function () {
      setShow(true);
    }, delay);
    setDelayTimer(timer);
  };

  var handleLeave = function handleLeave() {
    clearTimeout(delayTimer);
    setShow(false);
  };

  return React__default.createElement(Wrapper$1, {
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave
  }, React__default.createElement(Tip, _extends$1({
    show: show,
    className: className,
    style: style
  }, otherProps), text), children);
};

Tooltip.propTypes = {
  children: propTypes.node.isRequired,
  text: propTypes.string.isRequired,
  className: propTypes.string,
  style: propTypes.object,
  delay: propTypes.number
};
Tooltip.defaultProps = {
  delay: 1000
};

var StyledWindow = styled__default.div.withConfig({
  displayName: "Window__StyledWindow",
  componentId: "sc-183z2c8-0"
})(["position:relative;padding:2px;", " ", ""], createBorderStyles(), createBoxStyles());

var Window = function Window(_ref) {
  var shadow = _ref.shadow,
      className = _ref.className,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["shadow", "className", "children"]);

  return React__default.createElement(StyledWindow, _extends$1({
    shadow: shadow,
    className: className
  }, otherProps, {
    swag: true
  }), children);
};

Window.defaultProps = {
  shadow: true
};
Window.propTypes = {
  shadow: propTypes.bool,
  className: propTypes.bool,
  children: propTypes.node
};

var StyledWindowContent = styled__default.div.withConfig({
  displayName: "WindowContent__StyledWindowContent",
  componentId: "xyx3xs-0"
})(["padding:", ";"], padding.md);

var WindowContent = function WindowContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["className", "children", "style"]);

  return React__default.createElement(StyledWindowContent, _extends$1({
    className: className,
    style: style
  }, otherProps), children);
};

WindowContent.defaultProps = {};
WindowContent.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node
};

var SlyledWindowHeader = styled__default.div.withConfig({
  displayName: "WindowHeader__SlyledWindowHeader",
  componentId: "fk6jm7-0"
})(["height:", ";padding:0 ", ";margin-right:2px;line-height:", ";font-weight:bold;color:", ";background:linear-gradient( to right,", ",", " );"], blockSizes.md, padding.md, blockSizes.md, function (_ref) {
  var theme = _ref.theme;
  return theme.textInvert;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.headerMaterialDark;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.headerMaterialLight;
});

var WindowHeader = function WindowHeader(_ref4) {
  var className = _ref4.className,
      style = _ref4.style,
      children = _ref4.children,
      otherProps = _objectWithoutProperties(_ref4, ["className", "style", "children"]);

  return React__default.createElement(SlyledWindowHeader, _extends$1({
    className: className,
    style: style
  }, otherProps), children);
};

WindowHeader.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node
};

exports.Anchor = Anchor;
exports.AppBar = AppBar;
exports.Bar = Bar;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Cutout = Cutout;
exports.Divider = Divider;
exports.Fieldset = Fieldset;
exports.List = List;
exports.ListItem = ListItem;
exports.NumberField = NumberField;
exports.Progress = ProgressBar;
exports.Radio = Radio;
exports.Select = Select;
exports.Tab = Tab;
exports.TabBody = TabBody;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableDataCell = TableDataCell;
exports.TableHead = TableHead;
exports.TableHeadCell = TableHeadCell;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TextArea = TextArea;
exports.TextField = TextField;
exports.Toolbar = Toolbar;
exports.Tooltip = Tooltip;
exports.Window = Window;
exports.WindowContent = WindowContent;
exports.WindowHeader = WindowHeader;
exports.themes = themes;
