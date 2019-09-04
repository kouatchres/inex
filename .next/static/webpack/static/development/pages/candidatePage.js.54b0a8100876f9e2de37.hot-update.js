webpackHotUpdate("static\\development\\pages\\candidatePage.js",{

/***/ "./src/components/Candidates.jsx":
/*!***************************************!*\
  !*** ./src/components/Candidates.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Candidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Candidate */ "./src/components/Candidate.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\Candidates.jsx";

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
  var data = _taggedTemplateLiteral(["\n query ALL_CANDIDATES_QUERY{\n   candidates{\n   cand1stName  \n   cand2ndName  \n   cand3rdName  \n   email\n   image\n   phoneNumb    \n   placeOfBirth\n   candCode\n   id\n  }}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ALL_CANDIDATES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
"";
var CenteredStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Candidates__CenteredStyled",
  componentId: "sc-1wexpnt-0"
})(["text-align:center;"]);
var CandidateList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Candidates__CandidateList",
  componentId: "sc-1wexpnt-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));grid-gap:5px;min-width:300px;background:", ";width:100vw;margin:1px auto;max-width:", ";"], function (props) {
  return props.theme.darkGrey;
}, function (props) {
  return props.theme.maxWidth;
});

var Candidates =
/*#__PURE__*/
function (_Component) {
  _inherits(Candidates, _Component);

  function Candidates() {
    _classCallCheck(this, Candidates);

    return _possibleConstructorReturn(this, _getPrototypeOf(Candidates).apply(this, arguments));
  }

  _createClass(Candidates, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenteredStyled, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_CANDIDATES_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        console.log(data.candidates);
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Loading...");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CandidateList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, data.candidates.map(function (candidate) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Candidate__WEBPACK_IMPORTED_MODULE_3__["default"], {
            eachCandidate: candidate,
            key: candidate.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          });
        }));
      }));
    }
  }]);

  return Candidates;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Candidates);

/***/ })

})
//# sourceMappingURL=candidatePage.js.54b0a8100876f9e2de37.hot-update.js.map