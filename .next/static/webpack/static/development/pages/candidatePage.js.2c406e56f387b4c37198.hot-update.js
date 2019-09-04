webpackHotUpdate("static\\development\\pages\\candidatePage.js",{

/***/ "./src/components/Candidate.jsx":
/*!**************************************!*\
  !*** ./src/components/Candidate.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\Candidate.jsx";

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





var ItemStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Candidate__ItemStyled",
  componentId: "sc-1vwlxkz-0"
})(["background:", ";border:.7px solid ", ";position:relative;display:grid;grid-template-columns:1fr;background-color:white;width:400px;border-radius:7px;"], function (props) {
  return props.theme.darkGrey;
}, function (props) {
  return props.theme.lightGrey;
});
var CandAllInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Candidate__CandAllInfo",
  componentId: "sc-1vwlxkz-1"
})(["display:grid;grid-template-columns:1fr 3fr;"]);
var ButtonList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Candidate__ButtonList",
  componentId: "sc-1vwlxkz-2"
})(["display:grid;grid-template-columns:repeat(2,1fr);width:100%;border-top:1px solid ", ";grid-gap:5px;height:20px;padding:5px;& > *{background:#357;border:0;font-family:'radnika_next';font-size:1.8rem;}"], function (props) {
  return props.theme.lightGrey;
});
var CandImg = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Candidate__CandImg",
  componentId: "sc-1vwlxkz-3"
})(["padding:5px;img{max-width:100%;min-width:100px;width:150px;object-fit:cover;border-radius:12px;height:250px;}"]);
var RestInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Candidate__RestInfo",
  componentId: "sc-1vwlxkz-4"
})(["display:flex;flex-direction:column;padding:5px;line-height:5px;"]);
var UpdateBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Candidate__UpdateBtn",
  componentId: "sc-1vwlxkz-5"
})(["background-color:#359;border-radius:5px;font-size:2rem;font-weight:normal;color:white;"]);
var DelBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Candidate__DelBtn",
  componentId: "sc-1vwlxkz-6"
})(["color:white;font-weight:bold;background-color:#375;border-radius:5px;font-size:2.2rem;"]);
var ItemInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Candidate__ItemInfo",
  componentId: "sc-1vwlxkz-7"
})(["display:flex;flex-direction:row;text-align:left;"]);

var Candidate =
/*#__PURE__*/
function (_Component) {
  _inherits(Candidate, _Component);

  function Candidate() {
    _classCallCheck(this, Candidate);

    return _possibleConstructorReturn(this, _getPrototypeOf(Candidate).apply(this, arguments));
  }

  _createClass(Candidate, [{
    key: "render",
    value: function render() {
      var _this$props$eachCandi = this.props.eachCandidate,
          image = _this$props$eachCandi.image,
          id = _this$props$eachCandi.id,
          candCode = _this$props$eachCandi.candCode,
          cand1stName = _this$props$eachCandi.cand1stName,
          cand2ndName = _this$props$eachCandi.cand2ndName,
          cand3rdName = _this$props$eachCandi.cand3rdName,
          email = _this$props$eachCandi.email,
          phoneNumb = _this$props$eachCandi.phoneNumb,
          placeOfBirth = _this$props$eachCandi.placeOfBirth;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemStyled, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CandAllInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CandImg, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: image,
        alt: cand1stName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RestInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "1st Name: ", cand1stName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "2nd Name: ", cand2ndName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Last Name: ", cand3rdName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Birth Date: ", phoneNumb)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Birth Place: ", placeOfBirth)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Phone: ", phoneNumb)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Code: ", candCode)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Email: ", email)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UpdateBtn, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: "/update",
          query: {
            id: id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, " Update "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DelBtn, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Delete")));
    }
  }]);

  return Candidate;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Candidate, "propTypes", {
  eachCandidate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Candidate);

/***/ })

})
//# sourceMappingURL=candidatePage.js.2c406e56f387b4c37198.hot-update.js.map