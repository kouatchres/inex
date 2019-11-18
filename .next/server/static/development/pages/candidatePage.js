module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/candidatePage.js":
/*!********************************!*\
  !*** ./pages/candidatePage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_candidate_CandidateList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/candidate/CandidateList */ "./src/components/candidate/CandidateList.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\pages\\candidatePage.js";




var CandPresentation = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "candidatePage__CandPresentation",
  componentId: "kpx3bv-0"
})(["max-width:98vw;justify-content:center;background:", ";"], function (props) {
  return props.theme.darkGrey;
});

var Candidate = function Candidate(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Candidate page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CandPresentation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_candidate_CandidateList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Candidate);

/***/ }),

/***/ "./src/components/DeleteCandidate.jsx":
/*!********************************************!*\
  !*** ./src/components/DeleteCandidate.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_candidate_CandidateList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/candidate/CandidateList */ "./src/components/candidate/CandidateList.jsx");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\DeleteCandidate.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n mutation DELETE_CANDIDATE_MUTATION($id: ID!){\n   deleteCandidate(id: $id){\n     id\n   }\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var DELETE_CANDIDATE_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var DelBtn = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "DeleteCandidate__DelBtn",
  componentId: "sc-1pxqafj-0"
})(["color:white;font-weight:bold;background-color:#375;border-radius:10px;font-size:1.1rem;height:30px;"]);

var DeleteCandidate =
/*#__PURE__*/
function (_Component) {
  _inherits(DeleteCandidate, _Component);

  function DeleteCandidate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteCandidate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteCandidate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCache", function (cache, payload) {
      // manually update the cache so that the data are all the same
      // 1. read the cache for the data we want
      var data = cache.readQuery({
        query: _components_candidate_CandidateList__WEBPACK_IMPORTED_MODULE_4__["ALL_CANDIDATES_QUERY"]
      }); // filter out the deleted candidate from the data in the cache

      data.candidates = data.candidates.filter(function (candidate) {
        return candidate.id !== payload.data.deleteCandidate.id;
      }); //  3. write the new data back to the cache

      console.log('getting payload');
      console.log(payload);
      cache.writeQuery({
        query: _components_candidate_CandidateList__WEBPACK_IMPORTED_MODULE_4__["ALL_CANDIDATES_QUERY"],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteCandidate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: DELETE_CANDIDATE_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.updateCache,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, function (deleteCandidate, _ref) {
        var error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DelBtn, {
          onClick: function onClick() {
            if (confirm('Sure to delete this candidate ?')) {
              deleteCandidate();
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, _this2.props.children);
      }));
    }
  }]);

  return DeleteCandidate;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DeleteCandidate);

/***/ }),

/***/ "./src/components/Pagination.jsx":
/*!***************************************!*\
  !*** ./src/components/Pagination.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./src/components/styles/PaginationStyles.js");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\Pagination.jsx";



var Pagination = function Pagination() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "This is the pagination conponent"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/components/candidate/Candidate.jsx":
/*!************************************************!*\
  !*** ./src/components/candidate/Candidate.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DeleteCandidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DeleteCandidate */ "./src/components/DeleteCandidate.jsx");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\candidate\\Candidate.jsx";

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






var ItemStyled = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Candidate__ItemStyled",
  componentId: "sc-5latnq-0"
})(["display:grid;grid-template-columns:1fr;background-color:white;width:320px;border-radius:15px;height:260px;grid-row-gap:10px;justify-content:space-evenly;&:hover{box-shadow:", ";}"], function (props) {
  return props.theme.bs;
});
var CandAllInfo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Candidate__CandAllInfo",
  componentId: "sc-5latnq-1"
})(["display:grid;grid-template-columns:11fr 19fr;height:220px;"]);
var ButtonList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Candidate__ButtonList",
  componentId: "sc-5latnq-2"
})(["display:grid;grid-template-columns:4fr 7fr;width:100%;border-top:1px solid ", ";grid-gap:5px;height:42px;border-bottom-right-radius:10px;border-bottom-left-radius:10px;padding:10px 20px;font-weight:bold;align-content:center;font-size:1.1rem;color:white;background:", ";"], function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.grey;
});
var CandImg = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Candidate__CandImg",
  componentId: "sc-5latnq-3"
})(["padding:5px;height:230px;width:150px;img{width:100%;height:100%;border-radius:15px;background-size:cover;background-position:center;background-repeat:no-repeat;&:hover{transition:all 2s ease-in-out;transform:scale(1.5);}}"]);
var RestInfo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Candidate__RestInfo",
  componentId: "sc-5latnq-4"
})(["display:flex;font-size:1.1rem;flex-direction:column;padding:5px;line-height:5px;"]);
var UpdateBtn = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "Candidate__UpdateBtn",
  componentId: "sc-5latnq-5"
})(["background-color:#379;border-radius:10px;font-size:1.1rem;font-weight:bold;height:30px;border:none;outline:none;a{color:white;}"]);
var ItemInfo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Candidate__ItemInfo",
  componentId: "sc-5latnq-6"
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
      var handleSingleCand = this.props.data.handleSingleCand;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemStyled, {
        onClick: function onClick() {
          handleSingleCand(id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CandAllInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CandImg, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: image,
        alt: cand1stName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RestInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
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
      }, "Prenom: ", cand1stName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
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
      }, "Noms: ", cand2ndName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
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
      }, "Autre: ", cand3rdName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
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
      }, "Date: ", phoneNumb)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
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
      }, "Lieu: ", placeOfBirth)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "tel: ", phoneNumb)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Code: ", candCode)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UpdateBtn, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: "updateCand",
          query: {
            id: id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Update "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteCandidate__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Delete Candidate")));
    }
  }]);

  return Candidate;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Candidate, "propTypes", {
  eachCandidate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Candidate);

/***/ }),

/***/ "./src/components/candidate/CandidateList.jsx":
/*!****************************************************!*\
  !*** ./src/components/candidate/CandidateList.jsx ***!
  \****************************************************/
/*! exports provided: default, ALL_CANDIDATES_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_CANDIDATES_QUERY", function() { return ALL_CANDIDATES_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Candidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Candidate */ "./src/components/candidate/Candidate.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pagination */ "./src/components/Pagination.jsx");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\candidate\\CandidateList.jsx";

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
var CenteredStyled = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "CandidateList__CenteredStyled",
  componentId: "sc-1ler1sl-0"
})(["text-align:center;display:block;margin:0 auto;"]);
var CandidateList = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "CandidateList",
  componentId: "sc-1ler1sl-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));grid-row-gap:20px;cursor:pointer;"]);

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
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_CANDIDATES_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        console.log(data.candidates);
        {
          loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, "Loading...");
        }
        {
          loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, " Error: ", error.message);
        }
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
            data: data,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          });
        }));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }));
    }
  }]);

  return Candidates;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Candidates);


/***/ }),

/***/ "./src/components/styles/PaginationStyles.js":
/*!***************************************************!*\
  !*** ./src/components/styles/PaginationStyles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaginationStyles",
  componentId: "sc-1jth69v-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ", ";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ", ";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

/***/ }),

/***/ 6:
/*!**************************************!*\
  !*** multi ./pages/candidatePage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/candidatePage.js */"./pages/candidatePage.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=candidatePage.js.map