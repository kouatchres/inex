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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/modifyRegion.jsx":
/*!********************************!*\
  !*** ./pages/modifyRegion.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_UpdateRegionBest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/UpdateRegionBest */ "./src/components/UpdateRegionBest.jsx");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\pages\\modifyRegion.jsx";



var DivStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "modifyRegion__DivStyled",
  componentId: "sc-159r9fi-0"
})(["display:block;margin:0 auto;justify-items:center;align-content:center;"]);

var newDivision = function newDivision(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DivStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_UpdateRegionBest__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (newDivision);

/***/ }),

/***/ "./src/components/DeleteRegion.jsx":
/*!*****************************************!*\
  !*** ./src/components/DeleteRegion.jsx ***!
  \*****************************************/
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
/* harmony import */ var _Regions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Regions */ "./src/components/Regions.jsx");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\DeleteRegion.jsx";

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
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_REGION_MUTATION($id: ID!) {\n    deleteRegion(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var DELETE_REGION_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var DelBtn = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "DeleteRegion__DelBtn",
  componentId: "sc-11jcedq-0"
})(["font-weight:bold;border-radius:8px;font-size:1.5rem;height:30px;border:none;padding-top:5px;padding-bottom:5px;align-items:center;background-color:white;color:black;width:10vw;border:2px solid #4CAF50;:hover{cursor:pointer;background-color:#4CAF50;color:white;}}"]);

var DeleteRegion =
/*#__PURE__*/
function (_Component) {
  _inherits(DeleteRegion, _Component);

  function DeleteRegion() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteRegion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteRegion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCache", function (cache, payload) {
      // manually update the cache so that the data are all the same
      // 1. read the cache for the data we want
      var data = cache.readQuery({
        query: _Regions__WEBPACK_IMPORTED_MODULE_4__["ALL_REGIONS_QUERY"]
      }); // the deletedselect all the other regions except the deleted one from the cache

      data.regions = data.regions.filter(function (region) {
        return region.id !== payload.data.deleteRegion.id;
      }); //  3. write the new data back to the cache

      console.log("getting payload");
      console.log(payload);
      cache.writeQuery({
        query: _Regions__WEBPACK_IMPORTED_MODULE_4__["ALL_REGIONS_QUERY"],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteRegion, [{
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
        mutation: DELETE_REGION_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.updateCache,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, function (deleteRegion, _ref) {
        var error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DelBtn, {
          onClick: function onClick() {
            if (confirm("Do you want to delete this candidate ?")) {
              deleteRegion();
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, _this2.props.children);
      }));
    }
  }]);

  return DeleteRegion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DeleteRegion);

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

/***/ "./src/components/Regions.jsx":
/*!************************************!*\
  !*** ./src/components/Regions.jsx ***!
  \************************************/
/*! exports provided: default, ALL_REGIONS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_REGIONS_QUERY", function() { return ALL_REGIONS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\Regions.jsx";

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
  var data = _taggedTemplateLiteral(["\n query  ALL_REGIONS_QUERY {\n   regions{\n     regName\n   regCode\n   id\n   \n   }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var CenterStyled = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Regions__CenterStyled",
  componentId: "z1swe2-0"
})(["text-align:center;"]);
var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Regions__ItemsList",
  componentId: "z1swe2-1"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;margin:0 auto;max-width:", ";"], function (props) {
  return props.theme.maxWidth;
});
var ALL_REGIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var Regions =
/*#__PURE__*/
function (_Component) {
  _inherits(Regions, _Component);

  function Regions() {
    _classCallCheck(this, Regions);

    return _possibleConstructorReturn(this, _getPrototypeOf(Regions).apply(this, arguments));
  }

  _createClass(Regions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CenterStyled, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Regions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: ALL_REGIONS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Loading...");
        error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, "Error: ", error.message, " ");
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemsList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, data.regions.map(function (region) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, "  ", region.regName);
        }));
      }));
    }
  }]);

  return Regions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Regions);


/***/ }),

/***/ "./src/components/UpdateRegionBest.jsx":
/*!*********************************************!*\
  !*** ./src/components/UpdateRegionBest.jsx ***!
  \*********************************************/
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
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./src/components/styles/Form.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data */ "./src/data.jsx");
/* harmony import */ var _DeleteRegion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DeleteRegion */ "./src/components/DeleteRegion.jsx");

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\UpdateRegionBest.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_REGIONS_QUERY {\n    regions(orderBy: regName_DESC) {\n      id\n      regName\n      regCode\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var DeleteBlock = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "UpdateRegionBest__DeleteBlock",
  componentId: "u76p8z-0"
})(["align-content:left;"]);
var UpdateBlock = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.button.withConfig({
  displayName: "UpdateRegionBest__UpdateBlock",
  componentId: "u76p8z-1"
})(["font-weight:bold;border-radius:8px;font-size:1.5rem;height:30px;border:none;padding:5px;align-items:center;background-color:white;color:black;border:2px solid #4caf50;:hover{cursor:pointer;background-color:#4c50;color:#4caf50;}"]);
var SelectBlock = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "UpdateRegionBest__SelectBlock",
  componentId: "u76p8z-2"
})(["display:block;"]);
var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "UpdateRegionBest__StyledDivision",
  componentId: "u76p8z-3"
})(["display:grid;grid-template-columns:7fr auto auto;grid-gap:20px;text-align:center;margin:0 auto;width:70vw;"]);
var GET_ALL_REGIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());

var UpdateRegionBest =
/*#__PURE__*/
function (_Component) {
  _inherits(UpdateRegionBest, _Component);

  function UpdateRegionBest() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UpdateRegionBest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateRegionBest)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      divName: "",
      divCode: "",
      regionID: "12",
      id: "",
      region: _data__WEBPACK_IMPORTED_MODULE_8__["storeRegion"]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === "number" ? parseInt(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedRegion", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempRegions = _toConsumableArray(dataSource); // get the region object


        var selectedRegion = tempRegions.find(function (item) {
          return item.id === _this.state.regionID;
        });
        console.log("getting selected region");
        console.log(selectedRegion);
        return selectedRegion;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var id = _this.state.id;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_ALL_REGIONS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
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
              lineNumber: 87
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          });
        }
        var regions = data.regions; //'getting region from the state')

        console.log(_this.state.regions);
        var getRegions = regions.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: item.id,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, item.regName, " - ", item.regCode);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return updateRegion();

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
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "Modification de Region"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectBlock, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          type: "select",
          id: "id",
          name: "id",
          value: _this.state.id,
          onChange: _this.handleChange,
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, " Choisissez la region a modifier "), getRegions)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UpdateBlock, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: {
            pathname: "updateRegion",
            query: {
              id: id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, "Update"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DeleteBlock, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DeleteRegion__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: _this.state.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, "Delete")))));
      });
    });

    return _this;
  }

  return UpdateRegionBest;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UpdateRegionBest);

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
})(["background:", ";border:5px solid white;padding:20px;font-size:1.7rem;line-height:1.4;font-weight:400;label{margin-bottom:2rem;}input,textarea,select{width:100%;padding:1rem;font-size:2rem;border-style:none;border-bottom:1px solid ", ";&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:", ";color:white;border:0;font-size:2rem;font-weight:300;border-radius:7px;margin-top:1rem;padding:.8rem .8rem;}fieldset{max-width:80vw;margin:20px  height:60vh;border:.8px solid ", ";padding:15px;display:flex;flex-direction:row;border-radius:.5rem;justify-items:center;box-shadow:", ";&[disabled]{opacity:0.3;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#359 0%,#e2b04a 20%,#359 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
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

/***/ "./src/data.jsx":
/*!**********************!*\
  !*** ./src/data.jsx ***!
  \**********************/
/*! exports provided: storeRegion, storedGender, storedDivision, storedTown, storedSubDivision, storedEducType, storedCandidate, storedSeries, storedSession, storedExam, storedCenter, bestTowns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRegion", function() { return storeRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storedGender", function() { return storedGender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storedDivision", function() { return storedDivision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storedTown", function() { return storedTown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storedSubDivision", function() { return storedSubDivision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storedEducType", function() { return storedEducType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storedCandidate", function() { return storedCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storedSeries", function() { return storedSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storedSession", function() { return storedSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storedExam", function() { return storedExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storedCenter", function() { return storedCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bestTowns", function() { return bestTowns; });
var storeRegion = {
  id: "ck3albumntavq09228sbbzlh8",
  regName: "Lithuania",
  regCode: "Minsk"
};
var storedGender = {
  id: "cjzkbe47nadpi0b53a6wjogji",
  genderName: "Male",
  genderCode: "M"
};
var storedDivision = {
  id: "ck3albumntavq09228sbbzlh8",
  divName: "Lithuania",
  divCode: "Minsk"
};
var storedTown = {
  id: "ck3albumntavq09228sbbzlh8",
  townName: "Moscow",
  townCode: "Mosc"
};
var storedSubDivision = {
  id: "ck3m9r2e51ar009642q8k5nhs",
  subDivCode: "LLG",
  subDivName: "Lilongwe"
};
var storedEducType = {
  id: "ck3m9r2e51ar009642q8k5nhs",
  educTypeCode: "BCG",
  educTypeName: "Generale"
};
var storedCandidate = {
  id: "ck3m9r2e51ar009642q8k5nhs",
  candidateCode: "BCG",
  candidateName: "Generale"
};
var storedSeries = {
  id: "ck3m9r2e51ar009642q8k5nhs",
  seriesCode: "BCG",
  seriesName: "Generale"
};
var storedSession = {
  id: "ck3m9r2e51ar009642q8k5nhs",
  sessionCode: "BCG",
  sessionName: "Generale"
};
var storedExam = {
  id: "ck3m9r2e51ar009642q8k5nhs",
  examCode: "BCG",
  examName: "Generale"
};
var storedCenter = {
  id: "ck3m9r2e51ar009642q8k5nhs",
  centerCode: "BCG",
  centerName: "Generale"
};
var bestTowns = [{
  id: "ck3uryvzdn6x00922vhgbf532",
  townName: "Botexim",
  townCode: "BTM"
}, {
  id: "ck3ury04en6ql09223dgegz0o",
  townName: "Hummingbird",
  townCode: "HUB"
}, {
  id: "ck3urygiy9o140964a70t3auk",
  townName: "Shakinbrest",
  townCode: "SHB"
}];

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/modifyRegion.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/modifyRegion.jsx */"./pages/modifyRegion.jsx");


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
//# sourceMappingURL=modifyRegion.js.map