webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Page.jsx":
/*!*********************************!*\
  !*** ./src/components/Page.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.jsx");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./src/components/Meta.jsx");
var _theme,
    _jsxFileName = "E:\\Sygex-Formik\\Sygex-front-Formik\\src\\components\\Page.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n/* \n radnika_next font  \n  @font-face {\n    font-family: 'radnika_next';\n    src: url('../../static/radnikanext-medium-webfont.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n    \n  }  */\n\n\n/* roboto-slab-regular - latin */\n\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url('../../static/roboto-slab-v11-latin-regular.woff2') format('woff2') /* Super Modern Browsers */\n  src:  url('../../static/roboto-slab-v11-latin-regular.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */\n  src: url('../../static/roboto-slab-v11-latin-regular.woff') format('woff') /* Modern Browsers */\n  src: url('../../static/roboto-slab-v11-latin-regular.ttf') format('truetype') /* Safari, Android, iOS */\n  src: url('../../static/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */\n  src: url('../../static/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */\n} \n\n\n\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body\n{\n    padding:0;\n    margin: 0;\n    font-size: 2rem;\n    line-height: 2;\n    font-family: \"Roboto Slab\";\n    font-weight: 500;\n    font-style: normal;\n   \n  button {  font-family: 'Roboto Slab'; }\n\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family: \"Roboto Slab\";\n    font-size:1.8rem;\n    font-weight: 500;\n    font-style: normal;\n}\n\na\n{\n    font-family: \"Roboto Slab\";\n    font-weight: 400;\n    font-size:1.5rem;\n    font-style: italic;\n    text-decoration: none;\n    color: ", ";\n    :hover {\n  text-decoration: underline;\n}\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var theme = (_theme = {
  maxWidth: "1000px",
  red: "#FF0000",
  googleBlue: "#359",
  goldenBrown: "#d17f05",
  black: "#393939",
  grey: "#aaabaa",
  slightGrey: "rgb(243, 241, 241)",
  lightGrey: "#E1E1E1",
  darkGrey: "#EEEEEE",
  pureWhite: "#FFFFFF",
  offWhite: "#EDEDED",
  primary: '#00ab80',
  black2: '#4a4a4a',
  white3: '#ffffff',
  error: '#e05666',
  brownishRed: '#fo7031',
  coolBlue: '#195e83',
  coollerBlue: '#136ea5',
  sand: '#eea549',
  reddishBrown: '#f57836',
  buff: '#edb879'
}, _defineProperty(_theme, "grey", ['#FAFAFA', '#F2F2F2', '#E6E5E5', '#D9D8D8', '#CDCCCB', '#C0BFBF', '#B3B2B2', '#A7A5A5', '#9A9898', '#817E7E', '#747272', '#676565', '#5A5858', '#4D4C4C', '#403F3F']), _defineProperty(_theme, "bs", "0.7rem 0.7rem 0.5rem  rgba(0,0,0,0.9)"), _defineProperty(_theme, "bs2", "0.03rem .2rem 0.2rem 0.03rem rgba(0,0.3,0,0.2)"), _defineProperty(_theme, "bs3", "0 .1rem 1.5rem 0.5rem rgba(0,0,0.8,0.9)"), _theme);
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-7w315w-0"
})(["background:", ";color:", ";"], function (props) {
  return props.theme.slightGrey;
}, function (props) {
  return props.theme.black;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-7w315w-1"
})(["max-width:", ";margin:0 auto;background:", ";"], function (props) {
  return props.theme.maxWidth;
}, function (props) {
  return props.theme.slightGrey;
});
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), function (props) {
  return props.theme.black;
});

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=_app.js.d9510f3cd1f001f5099f.hot-update.js.map