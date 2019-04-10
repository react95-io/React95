'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

var themes = {};
themes["default"] = {
  canvas: "#ffffff",
  material: "#ced0cf",
  materialDark: "#9a9e9c",
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
  materialDark: "#9a9e9c",
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
  materialDark: "#6063a5",
  borderDarkest: "#010601",
  borderLightest: "#c7c7df",
  borderDark: "#5b57a1",
  borderLight: "#a4a7c8",
  headerMaterialDark: "#3B3D64",
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
  materialDark: "#763a60",
  borderDarkest: "#190000",
  borderLightest: "#FFCAFC",
  borderDark: "#7F3163",
  borderLight: "#E597C9",
  headerMaterialDark: "#4C0030",
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
  materialDark: "#210e23",
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

var reset = "\n  html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nul,\nli {\n  list-style-type: none;\n}\nbutton {\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  color: black;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\ninput[type=\"number\"]::-webkit-outer-spin-button,\ninput[type=\"number\"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n}\n\n";

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
  if (superClass) _setPrototypeOf(subClass, superClass);
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

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
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

// TODO - implement styled-system
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

  return React__default.createElement(StyledAnchor, _extends({
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
var insetShadow = "inset 3px 3px 10px rgba(0, 0, 0, 0.2)";
var createDisabledTextStyles = function createDisabledTextStyles() {
  return styled.css(["color:", ";text-shadow:1px 1px ", ";"], function (_ref) {
    var theme = _ref.theme;
    return theme.textDisabled;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.textDisabledShadow;
  });
};
var createBoxStyles = function createBoxStyles() {
  return styled.css(["box-sizing:border-box;display:inline-block;background-color:", ";color:", ";"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.material;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.text;
  });
};
var createBorderStyles = function createBorderStyles() {
  var invert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return invert ? styled.css(["border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";box-shadow:", " inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.borderDarkest;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.borderDarkest;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.borderLightest;
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.borderLightest;
  }, function (props) {
    return props.shadow && shadow + ", ";
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.borderDark;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.borderLight;
  }) : styled.css(["border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";box-shadow:", " inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref11) {
    var theme = _ref11.theme;
    return theme.borderLightest;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.borderLightest;
  }, function (_ref13) {
    var theme = _ref13.theme;
    return theme.borderDarkest;
  }, function (_ref14) {
    var theme = _ref14.theme;
    return theme.borderDarkest;
  }, function (props) {
    return props.shadow && shadow + ", ";
  }, function (_ref15) {
    var theme = _ref15.theme;
    return theme.borderLight;
  }, function (_ref16) {
    var theme = _ref16.theme;
    return theme.borderDark;
  });
};

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

  return React__default.createElement(StyledAppBar, _extends({
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
})(["display:inline-block;box-sizing:border-box;height:", ";width:5px;border-top:2px solid ", ";border-left:2px solid ", ";border-bottom:2px solid ", ";border-right:2px solid ", ";background:", ";"], function (props) {
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

  return React__default.createElement(StyledBar, _extends({
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
  var _extends2;

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

  return React__default.createElement(StyledButton, _extends((_extends2 = {
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
  }, _defineProperty(_extends2, "style", style), _defineProperty(_extends2, "onTouchStart", function onTouchStart() {
    return "";
  }), _extends2), otherProps), children);
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

var StyledCutout = styled__default.div.withConfig({
  displayName: "Cutout__StyledCutout",
  componentId: "sc-14364r1-0"
})(["position:relative;box-sizing:border-box;padding:2px;border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";&:before{position:absolute;left:0;top:0;z-index:1;content:\"\";width:calc(100% - 4px);height:calc(100% - 4px);border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";pointer-events:none;", "}"], function (_ref) {
  var theme = _ref.theme;
  return theme.borderDark;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderDark;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderLightest;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderLightest;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderDarkest;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderDarkest;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.borderLight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.borderLight;
}, function (props) {
  return props.shadow && "box-shadow:" + insetShadow + ";";
}); // add padding prop ?

var Cutout = function Cutout(_ref9) {
  var className = _ref9.className,
      style = _ref9.style,
      children = _ref9.children,
      shadow = _ref9.shadow,
      otherProps = _objectWithoutProperties(_ref9, ["className", "style", "children", "shadow"]);

  return React__default.createElement(StyledCutout, _extends({
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

var StyledCheckmark = styled__default(Cutout).withConfig({
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
  }, label, React__default.createElement(StyledInput, _extends({
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

var StyledWindow = styled__default.div.withConfig({
  displayName: "Window__StyledWindow",
  componentId: "sc-183z2c8-0"
})(["position:relative;padding:2px;", " ", ""], createBorderStyles(), createBoxStyles());

var Window = function Window(_ref) {
  var shadow = _ref.shadow,
      className = _ref.className,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["shadow", "className", "children"]);

  return React__default.createElement(StyledWindow, _extends({
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
  className: propTypes.string,
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

  return React__default.createElement(SlyledWindowHeader, _extends({
    className: className,
    style: style
  }, otherProps), children);
};

WindowHeader.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
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

  return React__default.createElement(StyledWindowContent, _extends({
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

var StyledSelectWrapper = styled__default(Cutout).withConfig({
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
})(["box-sizing:border-box;font-size:", ";position:absolute;bottom:-2px;width:calc(100% - 2px);transform:translateY(100%);left:0px;background:", ";border:2px solid ", ";border-top:none;box-shadow:", ";cursor:default;z-index:99;"], fontSizes.md, function (_ref8) {
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
})(["box-sizing:border-box;width:100%;padding-left:", ";height:calc(", " - 4px);line-height:calc(", " - 4px);font-size:", ";white-space:nowrap;color:", ";&:hover{background:", ";color:", ";}"], padding.sm, blockSizes.md, blockSizes.md, fontSizes.md, function (_ref10) {
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

  return React__default.createElement(StyledSelectWrapper, _extends({
    className: className,
    onClick: function onClick() {
      return setOpen(!open);
    },
    style: _objectSpread({}, style, {
      width: width
    }),
    shadow: shadow
  }, otherProps), React__default.createElement(StyledSelectContent, null, items.length ? items[index].label : ""), React__default.createElement(StyledDropdownButton, null, React__default.createElement(StyledDropdownIcon, null)), open && React__default.createElement(StyledDropdownList, {
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
    }, item.label);
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
  onChange: propTypes.func
};
Select.defaultProps = {
  style: {},
  shadow: true,
  selectedIndex: 0
};

var StyledInputWrapper = styled__default(Cutout).withConfig({
  displayName: "InputBase__StyledInputWrapper",
  componentId: "sc-1komot1-0"
})(["height:", ";background:", ";"], blockSizes.md, function (_ref) {
  var theme = _ref.theme,
      isDisabled = _ref.isDisabled;
  return isDisabled ? theme.material : theme.canvas;
});
var StyledTextInput = styled__default.input.withConfig({
  displayName: "InputBase__StyledTextInput",
  componentId: "sc-1komot1-1"
})(["width:100%;height:100%;padding:0 ", ";outline:none;border:none;background:none;font-size:", ";font-family:", ";color:", ";text-shadow:", ";"], padding.sm, fontSizes.md, fontFamily, function (_ref2) {
  var theme = _ref2.theme,
      disabled = _ref2.disabled;
  return disabled ? theme.inputTextDisabled : theme.inputText;
}, function (_ref3) {
  var theme = _ref3.theme,
      disabled = _ref3.disabled;
  return disabled ? "1px 1px " + theme.inputTextDisabledShadow : "none";
});

var InputBase = function InputBase(_ref4) {
  var onChange = _ref4.onChange,
      value = _ref4.value,
      disabled = _ref4.disabled,
      name = _ref4.name,
      type = _ref4.type,
      style = _ref4.style,
      shadow = _ref4.shadow,
      width = _ref4.width,
      otherProps = _objectWithoutProperties(_ref4, ["onChange", "value", "disabled", "name", "type", "style", "shadow", "width"]);

  return React__default.createElement(StyledInputWrapper, {
    width: width,
    shadow: shadow,
    isDisabled: disabled,
    style: _objectSpread({}, style, {
      width: width ? width : "auto"
    })
  }, React__default.createElement(StyledTextInput, _extends({
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

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NumberField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: parseInt(_this.props.value) || 0
    });

    _defineProperty(_assertThisInitialized(_this), "add", function (value) {
      var newValue = _this.normalize(_this.state.value + value);

      _this.props.onChange(newValue);

      _this.setState({
        value: newValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var newValue = e.target.value === "-" ? "-" : _this.normalize(e.target.value);
      newValue = newValue ? newValue : newValue === 0 ? 0 : "";

      if (e.target.validity.valid) {
        _this.setState({
          value: newValue
        });

        _this.props.onChange(newValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "normalize", function (value) {
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

  return React__default.createElement(StyledToolbar, _extends({
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

var Calendar = styled__default(Cutout).withConfig({
  displayName: "DatePicker__Calendar",
  componentId: "sc-401e8-0"
})(["width:234px;margin:1rem 0;background:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.canvas;
});
var WeekDays = styled__default.div.withConfig({
  displayName: "DatePicker__WeekDays",
  componentId: "sc-401e8-1"
})(["display:flex;background:", ";color:#dfe0e3;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.materialDark;
});
var Dates = styled__default.div.withConfig({
  displayName: "DatePicker__Dates",
  componentId: "sc-401e8-2"
})(["display:flex;flex-wrap:wrap;"]);
var DateItem = styled__default.div.withConfig({
  displayName: "DatePicker__DateItem",
  componentId: "sc-401e8-3"
})(["text-align:center;height:1.5em;line-height:1.5em;width:14.28%;"]);
var DateItemContent = styled__default.span.withConfig({
  displayName: "DatePicker__DateItemContent",
  componentId: "sc-401e8-4"
})(["cursor:pointer;background:", ";color:", ";&:hover{border:2px dashed ", ";}"], function (_ref3) {
  var active = _ref3.active,
      theme = _ref3.theme;
  return active ? theme.hoverBackground : "transparent";
}, function (_ref4) {
  var active = _ref4.active,
      theme = _ref4.theme;
  return active ? theme.textInvert : "initial";
}, function (_ref5) {
  var theme = _ref5.theme,
      active = _ref5.active;
  return active ? "none" : theme.materialDark;
});

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function dayIndex(year, month, day) {
  return new Date(year, month, day).getDay();
}

var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "convertDateToState", function (date) {
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      return {
        day: day,
        month: month,
        year: year
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleMonthSelect", function (month) {
      return _this.setState({
        month: month
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleYearSelect", function (year) {
      return _this.setState({
        year: year
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDaySelect", function (day) {
      return _this.setState({
        day: day
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAccept", function () {
      var _this$state = _this.state,
          year = _this$state.year,
          month = _this$state.month,
          day = _this$state.day;
      var date = new Date(year, month, day);

      _this.props.onAccept(date);
    });

    var initialDate = _this.convertDateToState(props.date || new Date());

    _this.state = initialDate;
    return _this;
  }

  _createClass(DatePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          day = _this$state2.day,
          month = _this$state2.month,
          year = _this$state2.year;
      var _this$props = this.props,
          shadow = _this$props.shadow,
          className = _this$props.className,
          onAccept = _this$props.onAccept,
          onCancel = _this$props.onCancel;
      var months = [{
        value: 0,
        label: "January"
      }, {
        value: 1,
        label: "February"
      }, {
        value: 2,
        label: "March"
      }, {
        value: 3,
        label: "April"
      }, {
        value: 4,
        label: "May"
      }, {
        value: 5,
        label: "June"
      }, {
        value: 6,
        label: "July"
      }, {
        value: 7,
        label: "August"
      }, {
        value: 8,
        label: "September"
      }, {
        value: 9,
        label: "October"
      }, {
        value: 10,
        label: "November"
      }, {
        value: 11,
        label: "December"
      }]; // console.log("days in month: ", daysInMonth(year, month));

      console.log("first day index", dayIndex(year, month - 1, 1));
      var dayPickerItems = Array.apply(null, {
        length: 35
      });
      var firstDayIndex = dayIndex(year, month, 1);
      var daysNumber = daysInMonth(year, month);
      day = day < daysNumber ? day : daysNumber;
      dayPickerItems.forEach(function (item, i) {
        if (i >= firstDayIndex && i < daysNumber + firstDayIndex) {
          var dayNumber = i - firstDayIndex + 1;
          dayPickerItems[i] = React__default.createElement(DateItem, {
            key: i,
            onClick: function onClick() {
              _this2.handleDaySelect(dayNumber);
            }
          }, React__default.createElement(DateItemContent, {
            active: dayNumber === day
          }, dayNumber));
        } else {
          dayPickerItems[i] = React__default.createElement(DateItem, {
            key: i
          });
        }
      });
      return React__default.createElement(Window, {
        style: {
          margin: 20
        },
        className: className,
        shadow: shadow
      }, React__default.createElement(WindowHeader, null, "\uD83D\uDCC6 Date"), React__default.createElement(WindowContent, null, React__default.createElement(Toolbar, {
        noPadding: true,
        style: {
          justifyContent: "space-between"
        }
      }, React__default.createElement(Select, {
        items: months,
        selectedIndex: month,
        onChange: this.handleMonthSelect,
        width: 128,
        height: 200
      }), React__default.createElement(NumberField, {
        value: year,
        disableKeyboardInput: true,
        onChange: this.handleYearSelect,
        width: 100
      })), React__default.createElement(Calendar, null, React__default.createElement(WeekDays, null, React__default.createElement(DateItem, null, "S"), React__default.createElement(DateItem, null, "M"), React__default.createElement(DateItem, null, "T"), React__default.createElement(DateItem, null, "W"), React__default.createElement(DateItem, null, "T"), React__default.createElement(DateItem, null, "F"), React__default.createElement(DateItem, null, "S")), React__default.createElement(Dates, null, dayPickerItems)), React__default.createElement(Toolbar, {
        noPadding: true,
        style: {
          justifyContent: "space-between"
        }
      }, React__default.createElement(Button, {
        fullWidth: true,
        onClick: onCancel,
        disabled: true
      }, "Cancel"), React__default.createElement(Button, {
        fullWidth: true,
        onClick: onAccept ? this.handleAccept : undefined
      }, "OK"))));
    }
  }]);

  return DatePicker;
}(React.Component);

_defineProperty(DatePicker, "propTypes", {
  className: propTypes.string,
  shadow: propTypes.bool,
  onAccept: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
  date: propTypes.instanceOf(Date)
});

_defineProperty(DatePicker, "defaultProps", {
  shadow: true,
  style: {}
});

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

  return React__default.createElement(StyledDivider, _extends({
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

  return React__default.createElement(StyledFieldset, _extends({
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
})(["box-sizing:border-box;width:", ";padding:2px 4px 4px 2px;", " ", " ", " list-style:none;position:relative;", ""], function (props) {
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

  return React__default.createElement(StyledList, _extends({
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
})(["box-sizing:border-box;display:block;position:relative;height:", ";width:", ";padding:0 ", ";white-space:nowrap;text-align:", ";line-height:", ";color:", ";&:hover{", " cursor:default;}", ""], function (props) {
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

  return React__default.createElement(StyledListItem, _extends({
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

var Wrapper = styled__default(Cutout).withConfig({
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


var StyledCheckmark$1 = styled__default(Cutout).withConfig({
  displayName: "Radio__StyledCheckmark",
  componentId: "sc-12bsm0-2"
})(["position:absolute;top:50%;left:0;transform:translateY(-50%);width:20px;height:20px;border-radius:50%;background:", ";box-shadow:", ";&:before{content:\"\";position:absolute;left:0px;top:0px;width:calc(100% - 4px);height:calc(100% - 4px);border-radius:50%;box-shadow:none;}", ""], function (_ref3) {
  var theme = _ref3.theme,
      isDisabled = _ref3.isDisabled;
  return isDisabled ? theme.material : theme.canvas;
}, function (_ref4) {
  var shadow = _ref4.shadow;
  return shadow ? insetShadow : "none";
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
  }, label, React__default.createElement(StyledInput$1, _extends({
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

  return React__default.createElement(StyledTab, _extends({
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
})(["position:relative;left:8px;text-align:left;"]);

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
  return React__default.createElement(StyledTabs, _extends({
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

  return React__default.createElement(StyledTabBody, _extends({
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

  return React__default.createElement(Cutout, null, React__default.createElement(StyledTable, _extends({
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

  return React__default.createElement(StyledTableBody, _extends({
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

  return React__default.createElement(StyledTd, _extends({
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

  return React__default.createElement(StyledTableHead, _extends({
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
      onClick = _ref2.onClick,
      otherProps = _objectWithoutProperties(_ref2, ["className", "children", "style", "onClick"]);

  return React__default.createElement(StyledHeadCell, _extends({
    className: className,
    style: style
  }, otherProps, {
    onClick: onClick,
    onTouchStart: function onTouchStart() {
      return "";
    }
  }), children);
};

TableHeadCell.defaultProps = {};
TableHeadCell.propTypes = {
  onClick: propTypes.func,
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

  return React__default.createElement(StyledTr, _extends({
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

var StyledTextAreaWrapper = styled__default(Cutout).withConfig({
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
})(["width:100%;height:100%;box-sizing:border-box;padding:", ";outline:none;border:none;background:none;resize:none;font-size:", ";font-family:", ";color:", ";", ""], padding.sm, fontSizes.md, fontFamily, function (_ref2) {
  var theme = _ref2.theme,
      disabled = _ref2.disabled;
  return disabled ? theme.inputTextDisabled : theme.inputText;
}, function (props) {
  return props.disabled && createDisabledTextStyles();
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
    isDisabled: disabled,
    shadow: shadow
  }, React__default.createElement(StyledTextArea, _extends({
    className: className,
    name: name,
    width: width,
    height: height,
    readOnly: disabled,
    onChange: disabled && onChange ? onChange : undefined,
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

  return React__default.createElement(InputBase, _extends({
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
  }, React__default.createElement(Tip, _extends({
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

exports.Anchor = Anchor;
exports.AppBar = AppBar;
exports.Bar = Bar;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Cutout = Cutout;
exports.DatePicker = DatePicker;
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
exports.reset = reset;
exports.themes = themes;
