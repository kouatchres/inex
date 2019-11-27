webpackHotUpdate("static\\development\\pages\\CandDisplay.js",{

/***/ "./src/components/CandLine.jsx":
/*!*************************************!*\
  !*** ./src/components/CandLine.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\CandLine.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CandItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CandLine__CandItem",
  componentId: "j5kfyt-0"
})(["width:100%;display:flex;flex-direction:row;border-bottom:1px solid darkgrey;padding:2px 0;font-size:.8rem;align-items:center;"]);
var CellBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CandLine__CellBlock",
  componentId: "j5kfyt-1"
})(["width:13%;align-content:left;"]);
var ActionBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CandLine__ActionBlock",
  componentId: "j5kfyt-2"
})(["width:13%;background:blue;"]);
var PicBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CandLine__PicBlock",
  componentId: "j5kfyt-3"
})(["width:13%;align-content:center;display:grid;margin:0 20px;img{border-radius:5px;width:30px;height:20px;&:hover{transform:scale(7);transition:all 2s ease-in-out;}}"]);

var CandLine =
/*#__PURE__*/
function (_Component) {
  _inherits(CandLine, _Component);

  function CandLine() {
    _classCallCheck(this, CandLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(CandLine).apply(this, arguments));
  }

  _createClass(CandLine, [{
    key: "render",
    value: function render() {
      var _this$props$eachCandi = this.props.eachCandidate,
          cand1stName = _this$props$eachCandi.cand1stName,
          cand2ndName = _this$props$eachCandi.cand2ndName,
          cand3rdName = _this$props$eachCandi.cand3rdName,
          candCode = _this$props$eachCandi.candCode,
          email = _this$props$eachCandi.email,
          phoneNumb = _this$props$eachCandi.phoneNumb,
          placeOfBirth = _this$props$eachCandi.placeOfBirth,
          image = _this$props$eachCandi.image,
          id = _this$props$eachCandi.id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CandItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PicBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: image,
        alt: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, cand1stName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, cand2ndName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, cand3rdName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, candCode)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, phoneNumb)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, placeOfBirth)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: {
          pathname: 'updatePage',
          query: {
            id: id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Update")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Delete")));
    }
  }]);

  return CandLine;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(CandLine, "propTypes", {
  eachCandidate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CandLine);

/***/ })

})
//# sourceMappingURL=CandDisplay.js.99c4c0857ed430470dff.hot-update.js.map