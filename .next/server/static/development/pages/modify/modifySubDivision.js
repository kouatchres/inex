module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./pages/modify/modifySubDivision.jsx":
/*!********************************************!*\
  !*** ./pages/modify/modifySubDivision.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_subDivision_SelectSubDivisionToModify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/subDivision/SelectSubDivisionToModify */ "./src/components/subDivision/SelectSubDivisionToModify.jsx");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\pages\\modify\\modifySubDivision.jsx";



var DivStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "modifySubDivision__DivStyled",
  componentId: "sc-71h8z9-0"
})(["display:block;margin:0 auto;justify-items:center;align-content:center;"]);

var modifySubDivision = function modifySubDivision(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DivStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_subDivision_SelectSubDivisionToModify__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (modifySubDivision);

/***/ }),

/***/ "./src/components/ErrorMessage.js":
/*!****************************************!*\
  !*** ./src/components/ErrorMessage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "g6g73q-0"
})(["padding:2rem;background:white;margin:2rem 0;border-radius:12px;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:50;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./src/components/center/DeleteDivision.jsx":
/*!**************************************************!*\
  !*** ./src/components/center/DeleteDivision.jsx ***!
  \**************************************************/
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
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\center\\DeleteDivision.jsx";

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
  var data = _taggedTemplateLiteral(["\n\tmutation DELETE_DIVISION_MUTATION($id: ID!) {\n\t\tdeleteDivision(id: $id) {\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




 // import { ALL_REGIONS_QUERY } from "../Regions";

var DELETE_DIVISION_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var DelBtn = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "DeleteDivision__DelBtn",
  componentId: "n80in5-0"
})(["font-weight:bold;border-radius:8px;font-size:1.5rem;height:30px;border:none;padding-top:5px;padding-bottom:5px;align-items:center;background-color:white;color:black;width:10vw;border:2px solid #4CAF50;:hover{cursor:pointer;background-color:#4CAF50;color:white;}}"]);

var DeleteDivision =
/*#__PURE__*/
function (_Component) {
  _inherits(DeleteDivision, _Component);

  function DeleteDivision() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteDivision);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteDivision)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCache", function (cache, payload) {
      // manually update the cache so that the data are all the same
      // 1. read the cache for the data we want
      var data = cache.readQuery({
        query: ALL_DIVISIONS_QUERY
      }); // the deletedselect all the other regions except the deleted one from the cache

      data.divisions = data.divisions.filter(function (item) {
        return item.id !== payload.data.deleteDivision.id;
      }); //  3. write the new data back to the cache

      console.log('getting payload');
      console.log(payload);
      cache.writeQuery({
        query: ALL_DIVISIONS_QUERY,
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteDivision, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: DELETE_DIVISION_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.updateCache,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, function (deleteDivision, _ref) {
        var error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DelBtn, {
          onClick: function onClick() {
            if (confirm('Do you want to delete this candidate ?')) {
              deleteDivision();
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, _this2.props.children);
      }));
    }
  }]);

  return DeleteDivision;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DeleteDivision);

/***/ }),

/***/ "./src/components/styles/Form.js":
/*!***************************************!*\
  !*** ./src/components/styles/Form.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1f9o34k-0"
})(["background:", ";border:5px solid white;padding:20px;font-size:1.2rem;line-height:1.2;font-weight:100;label{margin-bottom:2rem;}input,textarea,select{width:100%;padding:1rem;font-size:1.3rem;border-style:none;border-bottom:1px solid ", ";&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:", ";color:white;border:0;font-size:1.3rem;font-weight:200;border-radius:7px;margin-top:1rem;padding:.8rem .8rem;}fieldset{max-width:80vw;margin:20px  height:60vh;border:.8px solid ", ";padding:15px;display:flex;flex-direction:row;border-radius:.5rem;justify-items:center;box-shadow:", ";&[disabled]{opacity:0.3;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#359 0%,#e2b04a 20%,#359 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.googleBlue;
}, function (props) {
  return props.theme.lightGrey;
}, function (props) {
  return props.theme.bs;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/components/subDivision/SelectSubDivisionToModify.jsx":
/*!******************************************************************!*\
  !*** ./src/components/subDivision/SelectSubDivisionToModify.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Form */ "./src/components/styles/Form.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _center_DeleteDivision__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../center/DeleteDivision */ "./src/components/center/DeleteDivision.jsx");

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\subDivision\\SelectSubDivisionToModify.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query GET_TOWNS_OF_A_SUBDIVISIONS_QUERY($id: ID!) {\n    subDivision(id: $id) {\n      subDivName\n      id\n      town(orderBy: townName_ASC) {\n        townName\n        townCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query GET_SUBDIVISIONS_OF_A_DIVSION_QUERY($id: ID!) {\n    division(id: $id) {\n      divName\n      id\n      subDivision(orderBy: subDivName_ASC) {\n        subDivName\n        subDivCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query GET_DIVISIONS_OF_A_REGION_QUERY($id: ID!) {\n    region(id: $id) {\n      regName\n      id\n      division(orderBy: divName_ASC) {\n        divName\n        divCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_REGIONS_QUERY {\n    regions(orderBy: regName_DESC) {\n    regName\n    regCode\n    id\n  }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var ButtonBlock = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "SelectSubDivisionToModify__ButtonBlock",
  componentId: "sc-1a8jljt-0"
})(["display:grid;grid-template-columns:1fr 1fr 6fr;grid-gap:2rem;"]);
var DeleteBlock = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "SelectSubDivisionToModify__DeleteBlock",
  componentId: "sc-1a8jljt-1"
})(["align-content:left;"]);
var UpdateBlock = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.button.withConfig({
  displayName: "SelectSubDivisionToModify__UpdateBlock",
  componentId: "sc-1a8jljt-2"
})(["font-weight:bold;border-radius:8px;font-size:1.3rem;height:30px;border:none;padding:5px;align-items:center;background-color:white;color:black;border:2px solid #4caf50;:hover{cursor:pointer;background-color:#4c50;color:#4caf50;}"]);
var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "SelectSubDivisionToModify__StyledDivision",
  componentId: "sc-1a8jljt-3"
})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:2rem;text-align:center;margin:0 auto;min-width:82rem;"]);
var CenterSelect = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "SelectSubDivisionToModify__CenterSelect",
  componentId: "sc-1a8jljt-4"
})(["display:block;text-align:center;margin:0 auto;min-width:40rem;"]);
var GET_ALL_REGIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var GET_DIVISIONS_OF_A_REGION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());
var GET_SUBDIVISIONS_OF_A_DIVSION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject3());
var GET_TOWNS_OF_A_SUBDIVISIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject4());

var SelectSubDivisionToModify =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectSubDivisionToModify, _Component);

  function SelectSubDivisionToModify() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectSubDivisionToModify);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectSubDivisionToModify)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", _defineProperty({
      regionID: '125',
      divisionID: '125',
      id: '125'
    }, "id", '125'));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === "number" ? parseInt(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedRegion", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempRegions = _toConsumableArray(dataSource); // get the selected region object


        var selectedRegion = tempRegions.find(function (item) {
          return item.id === _this.state.regionID;
        });
        console.log("getting selected region");
        console.log(selectedRegion);
        return selectedRegion;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedDivision", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempDivisions = _toConsumableArray(dataSource); // get the selected division object


        var selectedDivision = tempDivisions.find(function (item) {
          return item.id === _this.state.divisionID;
        });
        console.log(selectedDivision);
        return selectedDivision;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedSubDivision", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempSubDivisions = _toConsumableArray(dataSource); // get the selected division object


        var selectedSubDivision = tempSubDivisions.find(function (item) {
          return item.id === _this.state.id;
        });
        console.log(selectedSubDivision);
        return selectedSubDivision;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedTown", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempTown = _toConsumableArray(dataSource); // get the selected division object


        var selectedTown = tempTown.find(function (item) {
          return item.id === _this.state.id;
        });
        console.log(selectedTown);
        return selectedTown;
      }
    });

    return _this;
  }

  _createClass(SelectSubDivisionToModify, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // make theses variables available in the render method
      var id = this.state.id;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_ALL_REGIONS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        {
          loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          });
        }
        var regions = data.regions;
        var anyRegion = regions[0]; //prepare data for the region select options

        var regionsOptions = regions.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: item.id,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: this
          }, item.regName);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: GET_DIVISIONS_OF_A_REGION_QUERY,
          variables: regions && (_this2.getselectedRegion(regions) || anyRegion),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              loading = _ref2.loading,
              error = _ref2.error;
          {
            loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 196
              },
              __self: this
            });
          }
          var province = data.region;
          var division = province.division;
          var anyDivision = division[0];
          var divisionsOptions = division.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              value: item.id,
              key: item.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 204
              },
              __self: this
            }, item.divName);
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: GET_SUBDIVISIONS_OF_A_DIVSION_QUERY,
            variables: division && (_this2.getselectedDivision(division) || anyDivision),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          }, function (_ref3) {
            var data = _ref3.data,
                loading = _ref3.loading,
                error = _ref3.error;
            {
              loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 215
                },
                __self: this
              }, "Loading...");
            }
            {
              error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 218
                },
                __self: this
              });
            }
            var departement = data.division;
            var subDivision = departement.subDivision;
            var anySubDivision = subDivision[0];
            var subDivisionsOptions = subDivision.map(function (item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                value: item.id,
                key: item.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 225
                },
                __self: this
              }, item.subDivName);
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
              query: GET_TOWNS_OF_A_SUBDIVISIONS_QUERY,
              variables: subDivision && (_this2.getselectedSubDivision(subDivision) || anySubDivision),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 231
              },
              __self: this
            }, function (_ref4) {
              var data = _ref4.data,
                  loading = _ref4.loading,
                  error = _ref4.error;
              {
                loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                  },
                  __self: this
                }, "Loding...");
              }
              {
                error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  error: error,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                  },
                  __self: this
                });
              }
              console.log("these are the towns of the selected Sub division");
              var subDivision = data.subDivision;
              console.log(data);

              var newTowns = _objectSpread({}, subDivision);

              var town = newTowns.town;
              console.log(newTowns);
              console.log(town);
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
                onSubmit:
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                    var res;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            e.preventDefault();
                            _context.next = 3;
                            return updateSubDivision();

                          case 3:
                            res = _context.sent;
                            console.log(res);

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x) {
                    return _ref5.apply(this, arguments);
                  };
                }(),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 253
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 259
                },
                __self: this
              }, "Modifier un Arrondissement"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 260
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
                disabled: loading,
                "aria-busy": loading,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 261
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CenterSelect, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 262
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                type: "select",
                id: "regionID",
                name: "regionID",
                placeholder: "select a region",
                value: _this2.state.regionID,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 263
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 271
                },
                __self: this
              }, "Choisissez une region"), regionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                type: "select",
                id: "divisionID",
                name: "divisionID",
                value: _this2.state.divisionID,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 275
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 282
                },
                __self: this
              }, "Choisissez un departement"), divisionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                type: "select",
                id: "id",
                name: "id",
                value: _this2.state.id,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 285
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 292
                },
                __self: this
              }, "choisissez un Arrondissement"), subDivisionsOptions)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonBlock, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 297
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UpdateBlock, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 299
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: {
                  pathname: "../updates/updateSubDivision",
                  query: {
                    id: id
                  }
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 300
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 301
                },
                __self: this
              }, "Valider"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DeleteBlock, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 304
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_center_DeleteDivision__WEBPACK_IMPORTED_MODULE_8__["default"], {
                id: _this2.state.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 305
                },
                __self: this
              }, "Delete")))));
            });
          });
        });
      });
    }
  }]);

  return SelectSubDivisionToModify;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SelectSubDivisionToModify);

/***/ }),

/***/ 6:
/*!**************************************************!*\
  !*** multi ./pages/modify/modifySubDivision.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/modify/modifySubDivision.jsx */"./pages/modify/modifySubDivision.jsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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
//# sourceMappingURL=modifySubDivision.js.map