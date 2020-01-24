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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/creates/newCenter.jsx":
/*!*************************************!*\
  !*** ./pages/creates/newCenter.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_center_CreateCenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/center/CreateCenter */ "./src/components/center/CreateCenter.jsx");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\pages\\creates\\newCenter.jsx";



var DivStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "newCenter__DivStyled",
  componentId: "sc-1yyyhqi-0"
})(["display:block;margin:0 auto;max-width:40vw;"]);

var newCenter = function newCenter(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DivStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_center_CreateCenter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (newCenter);

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
      }, "Error Msg!"), error.message.replace("GraphQL error: ", "")));
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
  }, "Shoot!"), error.message.replace("GraphQL error: ", "")));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./src/components/center/CreateCenter.jsx":
/*!************************************************!*\
  !*** ./src/components/center/CreateCenter.jsx ***!
  \************************************************/
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
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\center\\CreateCenter.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "CreateCenter__StyledDivision",
  componentId: "sc-18vtqn9-0"
})(["display:block;text-align:center;margin:0 auto;min-width:350px;"]);

var CreateCenter =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateCenter, _Component);

  function CreateCenter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateCenter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateCenter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      centerName: "",
      centerCode: "",
      centerNumber: "",
      townID: "12",
      divisionID: "12",
      subDivisionID: "12",
      regionID: "12",
      region: "",
      division: "",
      subDivision: "",
      town: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var setValue = type === "number" ? parseInt(value) : value;

      _this.setState(_defineProperty({}, name, setValue));
    });

    return _this;
  }

  _createClass(CreateCenter, [{
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        centerName: "",
        centerCode: "",
        centerNumber: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          regionID = _this$state.regionID,
          divisionID = _this$state.divisionID,
          subDivisionID = _this$state.subDivisionID,
          townID = _this$state.townID;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllRegionsQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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
              lineNumber: 53
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
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
              lineNumber: 63
            },
            __self: this
          }, item.regName);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getDivisionsOfARegionQuery"],
          variables: regions && (Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(regions, regionID) || anyRegion),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
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
                lineNumber: 72
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            });
          }
          var region = data.region;
          var division = region.division;
          var anyDivision = division[0];
          var divisionsOptions = division.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              value: item.id,
              key: item.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              },
              __self: this
            }, item.divName);
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getSubDivisionsOfADivisionQuery"],
            variables: division && (Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(division, divisionID) || anyDivision),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
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
                  lineNumber: 92
                },
                __self: this
              }, "Loading...");
            }
            {
              error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95
                },
                __self: this
              });
            }
            var departement = data.division;
            var arrondissement = departement.subDivision;
            {
              /* const anySubDivision = arrondissement[0]; */
            }
            console.log(departement);
            var subDivisionsOptions = arrondissement.map(function (item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                value: item.id,
                key: item.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                },
                __self: this
              }, item.subDivName);
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
              query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getTownsOfASubDivisionQuery"],
              variables: arrondissement && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(arrondissement, subDivisionID),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
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
                    lineNumber: 116
                  },
                  __self: this
                }, "Loading...");
              }
              {
                error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                  },
                  __self: this
                }, "error=", error);
              }
              var village = data.subDivision;

              var allTowns = _objectSpread({}, village);

              var town = allTowns.town;
              var refinedTown = town && town.map(function (_ref5) {
                var __typename = _ref5.__typename,
                    townName = _ref5.townName,
                    townCode = _ref5.townCode,
                    others = _objectWithoutProperties(_ref5, ["__typename", "townName", "townCode"]);

                return others;
              });
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
                mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_6__["createCenterMutation"],
                variables: _objectSpread({}, _this2.state, {
                  town: town && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(refinedTown, townID)
                }),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 130
                },
                __self: this
              }, function (createCenter, _ref6) {
                var loading = _ref6.loading,
                    error = _ref6.error;
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  onSubmit:
                  /*#__PURE__*/
                  function () {
                    var _ref7 = _asyncToGenerator(
                    /*#__PURE__*/
                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                      var res;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              e.preventDefault();
                              _context.next = 3;
                              return createCenter();

                            case 3:
                              res = _context.sent;
                              console.log(res);

                              _this2.resetForm();

                            case 6:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));

                    return function (_x) {
                      return _ref7.apply(this, arguments);
                    };
                  }(),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                  },
                  __self: this
                }, "Nouveau Centre d'Examen"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  error: error,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                  },
                  __self: this
                }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
                  disabled: loading,
                  "aria-busy": loading,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                  type: "select",
                  id: "regionID",
                  name: "regionID",
                  value: _this2.state.regionID,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
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
                    lineNumber: 162
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  },
                  __self: this
                }, "Choisissez un departement"), divisionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                  type: "select",
                  id: "subDivisionID",
                  name: "subDivisionID",
                  value: _this2.state.subDivisionID,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                  },
                  __self: this
                }, "Choisissez un arrondissement"), subDivisionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                  type: "select",
                  id: "townID",
                  name: "townID",
                  value: _this2.state.townID,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                  },
                  __self: this
                }, "Choisissez une ville"), town && town.map(function (item) {
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                    value: item.id,
                    key: item.id,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 195
                    },
                    __self: this
                  }, item.townName);
                })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                  type: "text",
                  id: "centerName",
                  name: "centerName",
                  placeholder: "Nom du Centre d'examen",
                  value: _this2.state.centerName,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                  },
                  __self: this
                }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                  type: "text",
                  id: "centerCode",
                  name: "centerCode",
                  placeholder: "Code centre d'examen",
                  value: _this2.state.centerCode,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                  },
                  __self: this
                }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                  type: "text",
                  id: "centerNumber",
                  name: "centerNumber",
                  placeholder: "No du Centre",
                  value: _this2.state.centerNumber,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                  },
                  __self: this
                }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                  className: "submitButton",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 228
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                  type: "submit",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                  },
                  __self: this
                }, "Valid", loading ? "ation en cours" : "er")))));
              });
            });
          });
        });
      });
    }
  }]);

  return CreateCenter;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateCenter);

/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Functions.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Functions.jsx ***!
  \******************************************************************/
/*! exports provided: objectFromCode, uniqueCodeGen, getSelectedObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectFromCode", function() { return objectFromCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueCodeGen", function() { return uniqueCodeGen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedObject", function() { return getSelectedObject; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var uniqueCodeGen = function uniqueCodeGen(keyLength) {
  var i,
      key = '',
      //  characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  characters = 'abcdefghijklmnopqrstuvwxyzABCDEF@#$%&GHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;

  for (i = 0; i < keyLength; i++) {
    key += characters.substr(Math.floor(Math.random() * charactersLength + 1), 1);
  }

  return key;
};

var objectFromCode = function objectFromCode(codeValue) {
  var storedObject = {
    candCode: "".concat(codeValue)
  };
  return storedObject;
};

var getSelectedObject = function getSelectedObject(dataSource, objectID) {
  // 1 copy the data source
  if (dataSource.length > 0) {
    var tempObjects = _toConsumableArray(dataSource); // get the object


    var selectedObject = tempObjects.find(function (item) {
      return item.id === objectID;
    });
    return selectedObject;
  }
};



/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Mutations.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Mutations.jsx ***!
  \******************************************************************/
/*! exports provided: createCandidateMutation, createNewSubjectMutation, createNewSubjectTypeMutation, createTownMutation, createCenterAdminMutation, createDivisionMutation, createRegistrationMutation, createCenterMutation, createEducationTypeMutation, createSeriesMutation, createSubDivisionMutation, createNewSessionMutation, createNewRankMutation, createNewReportMutation, createNewRegionMutation, createExamMutation, registerSubjectSeriesMutation, updateCenterMutation, updateTownMutation, updateExamMutation, updateSubDivisionMutation, updateCandidateMutation, signInCandidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCandidateMutation", function() { return createCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSubjectMutation", function() { return createNewSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSubjectTypeMutation", function() { return createNewSubjectTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTownMutation", function() { return createTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterAdminMutation", function() { return createCenterAdminMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDivisionMutation", function() { return createDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegistrationMutation", function() { return createRegistrationMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterMutation", function() { return createCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEducationTypeMutation", function() { return createEducationTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSeriesMutation", function() { return createSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubDivisionMutation", function() { return createSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSessionMutation", function() { return createNewSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewRankMutation", function() { return createNewRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewReportMutation", function() { return createNewReportMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewRegionMutation", function() { return createNewRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExamMutation", function() { return createExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSubjectSeriesMutation", function() { return registerSubjectSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCenterMutation", function() { return updateCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTownMutation", function() { return updateTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExamMutation", function() { return updateExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubDivisionMutation", function() { return updateSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCandidateMutation", function() { return updateCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInCandidate", function() { return signInCandidate; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n\tmutation updateCandidateMutation(\n\t\t$id: ID!\n\t\t$cand1stName: String\n\t\t$cand2ndName: String\n\t\t$cand3rdName: String\n\t\t$candCode: String\n\t\t$email: String\n\t\t$image: String\n\t\t$phoneNumb: Int\n\t\t$placeOfBirth: String\n\t) {\n\t\tupdateCandidate(\n\t\t\tid: $id\n\t\t\tcand1stName: $cand1stName\n\t\t\tcand2ndName: $cand2ndName\n\t\t\tcand3rdName: $cand3rdName\n\t\t\tcandCode: $candCode\n\t\t\temail: $email\n\t\t\timage: $image\n\t\t\tphoneNumb: $phoneNumb\n\t\t\tplaceOfBirth: $placeOfBirth\n\t\t) {\n\t\t\tid\n\t\t\tcand1stName\n\t\t\tcand2ndName\n\t\t\tcand3rdName\n\t\t\timage\n\t\t}\n\t}\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n\tmutation updateExamMutation($id: ID!, $examName: String, $examCode: String) {\n\t\tupdateExam(id: $id, examName: $examName, examCode: $examCode) {\n\t\t\texamName\n\t\t\texamCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n\tmutation updateTownMutation($id: ID!, $townName: String, $townCode: String) {\n\t\tupdateTown(id: $id, townName: $townName, townCode: $townCode) {\n\t\t\ttownName\n\t\t\ttownCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n\tmutation updateCenterMutation($id: ID!, $centerName: String, $centerCode: String) {\n\t\tupdateCenter(id: $id, centerName: $centerName, centerCode: $centerCode) {\n\t\t\tid\n\t\t\tcenterName\n\t\t\tcenterCode\n\t\t}\n\t}\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n\tmutation updateSubDivisionMutation($id: ID!, $subDivName: String, $subDivCode: String) {\n\t\tupdateSubDivision(id: $id, subDivName: $subDivName, subDivCode: $subDivCode) {\n\t\t\tsubDivName\n\t\t\tsubDivCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n\tmutation createCandidateMutation(\n\t\t$cand1stName: String!\n\t\t$cand2ndName: String\n\t\t$cand3rdName: String\n\t\t$candCode: String\n\t\t$email: String!\n\t\t$image: String!\n\t\t$phoneNumb: Int\n\t\t$placeOfBirth: String\n\t\t$gender: GenderCreateWithoutCandidateInput!\n\t) {\n\t\tcreateCandidate(\n\t\t\tcand1stName: $cand1stName\n\t\t\tcand2ndName: $cand2ndName\n\t\t\tcand3rdName: $cand3rdName\n\t\t\tcandCode: $candCode\n\t\t\temail: $email\n\t\t\timage: $image\n\t\t\tphoneNumb: $phoneNumb\n\t\t\tplaceOfBirth: $placeOfBirth\n\t\t\tgender: $gender\n\t\t) {\n\t\t\tid\n\t\t\tcand1stName\n\t\t\tcand2ndName\n\t\t\tcandCode\n\t\t\timage\n\t\t}\n\t}\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n\tmutation registerSubjectSeriesMutation($subject: SubjectWhereUniqueInput!, $series: SeriesWhereUniqueInput!) {\n\t\tcreateSubjectSeries(subject: $subject, series: $series) {\n\t\t\tid\n\t\t\tseries {\n\t\t\t\tid\n\t\t\t\tseriesName\n\t\t\t\tsubjectSeries {\n\t\t\t\t\tid\n\t\t\t\t\tsubject {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tsubjectName\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n\tmutation createExamMutation($examName: String!, $examCode: String!) {\n\t\tcreateExam(examName: $examName, examCode: $examCode) {\n\t\t\tid\n\t\t\texamName\n\t\t}\n\t}\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewRegionMutation($regName: String!, $regCode: String!) {\n\t\tcreateRegion(regName: $regName, regCode: $regCode) {\n\t\t\tid\n\t\t\tregName\n\t\t}\n\t}\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewRankMutation($rankName: String!, $rankCode: String!) {\n\t\tcreateRank(rankName: $rankName, rankCode: $rankCode) {\n\t\t\tid\n\t\t\trankName\n\t\t}\n\t}\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewSessionMutation($sessionName: String!, $sessionCode: String!) {\n\t\tcreateSession(sessionName: $sessionName, sessionCode: $sessionCode) {\n\t\t\tid\n\t\t\tsessionName\n\t\t}\n\t}\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n\tmutation createSubDivisionMutation(\n\t\t$subDivName: String!\n\t\t$subDivCode: String!\n\t\t$division: DivisionWhereUniqueInput!\n\t) {\n\t\tcreateSubDivision(subDivName: $subDivName, subDivCode: $subDivCode, division: $division) {\n\t\t\tid\n\t\t\tsubDivName\n\t\t\tsubDivCode\n\t\t\tdivision {\n\t\t\t\tdivName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewSubjectMutation(\n\t\t$subjectName: String!\n\t\t$subjectCode: String!\n\t\t$subjectType: SubjectTypeWhereUniqueInput!\n\t) {\n\t\tcreateSubject(subjectName: $subjectName, subjectCode: $subjectCode, subjectType: $subjectType) {\n\t\t\tsubjectCode\n\t\t\tsubjectName\n\t\t}\n\t}\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewSubjectTypeMutation($subjectTypeName: String!, $subjectTypeCode: String!) {\n\t\tcreateSubjectType(subjectTypeName: $subjectTypeName, subjectTypeCode: $subjectTypeCode) {\n\t\t\tid\n\t\t\tsubjectTypeName\n\t\t}\n\t}\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tmutation createTownMutation($townName: String!, $townCode: String!, $subDiv: SubDivisionWhereUniqueInput!) {\n\t\tcreateTown(townName: $townName, townCode: $townCode, subDiv: $subDiv) {\n\t\t\tid\n\t\t\ttownName\n\t\t\ttownCode\n\t\t\tsubDiv {\n\t\t\t\tsubDivName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmutation createEducationTypeMutation(\n\t\t$educationTypeName: String!\n\t\t$exam: ExamWhereUniqueInput!\n\t\t$educationTypeCode: String!\n\t) {\n\t\tcreateEducationType(educationTypeName: $educationTypeName, exam: $exam, educationTypeCode: $educationTypeCode) {\n\t\t\tid\n\t\t\teducationTypeName\n\t\t}\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tmutation createSeriesMutation(\n\t\t$seriesName: String!\n\t\t$seriesCode: String!\n\t\t$educationType: EducationTypeWhereUniqueInput!\n\t) {\n\t\tcreateSeries(seriesName: $seriesName, seriesCode: $seriesCode, educationType: $educationType) {\n\t\t\tid\n\t\t\tseriesName\n\t\t}\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tmutation createCenterMutation(\n\t\t$centerName: String!\n\t\t$centerNumber: Int\n\t\t$centerCode: String!\n\t\t$town: TownWhereUniqueInput!\n\t) {\n\t\tcreateCenter(centerName: $centerName, centerNumber: $centerNumber, centerCode: $centerCode, town: $town) {\n\t\t\tid\n\t\t\tcenterName\n\t\t\tcenterCode\n\t\t\ttown {\n\t\t\t\ttownName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tmutation createDivisionMutation($divName: String!, $divCode: String!, $region: RegionCreateWithoutDivisionInput!) {\n\t\tcreateDivision(divName: $divName, divCode: $divCode, region: $region) {\n\t\t\tid\n\t\t\tdivName\n\t\t}\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tmutation createCenterAdminMutation(\n\t\t$exam: ExamWhereUniqueInput!\n\t\t$rank: RankWhereUniqueInput!\n\t\t$session: SessionWhereUniqueInput!\n\t\t$center: CenterWhereUniqueInput!\n\t\t$authName: String!\n\t\t$authCode: String!\n\t\t$authCNI: String!\n\t\t$authPhone: Int!\n\t\t$authMatricule: String!\n\t) {\n\t\tcreateCenterAdmin(\n\t\t\texam: $exam\n\t\t\trank: $rank\n\t\t\tsession: $session\n\t\t\tcenter: $center\n\t\t\tauthCNI: $authCNI\n\t\t\tauthName: $authName\n\t\t\tauthCode: $authCode\n\t\t\tauthPhone: $authPhone\n\t\t\tauthMatricule: $authMatricule\n\t\t) {\n\t\t\tauthName\n\t\t\tauthCode\n\t\t\tauthPhone\n\t\t}\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tmutation createRegistrationMutation(\n\t\t$exam: ExamWhereUniqueInput!\n\t\t$series: SeriesWhereUniqueInput!\n\t\t$candidate: CandidateWhereUniqueInput!\n\t\t$session: SessionWhereUniqueInput!\n\t\t$center: CenterWhereUniqueInput!\n\t) {\n\t\tcreateRegistration(exam: $exam, series: $series, session: $session, candidate: $candidate, center: $center) {\n\t\t\tid\n\t\t\tseries {\n\t\t\t\tseriesName\n\t\t\t}\n\t\t\tcandidate {\n\t\t\t\tid\n\t\t\t\tcand1stName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewReportMutation(\n\t\t$reportImage: String!\n\t\t$reportName: String!\n\t\t$centerAdmin: CenterAdminWhereUniqueInput!\n\t) {\n\t\tcreateReport(reportImage: $reportImage, reportName: $reportName, centerAdmin: $centerAdmin) {\n\t\t\tid\n\t\t\treportName\n\t\t\treportImage\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tmutation signInCandidate($candCode: String!) {\n\t\tcandidateSignIn(candCode: $candCode) {\n\t\t\tid\n\t\t\tcand1stName\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 //************create mutations  */

var signInCandidate = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject()); //

var createNewReportMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var createRegistrationMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());
var createCenterAdminMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject4());
var createDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject5());
var createCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject6());
var createSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject7());
var createEducationTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject8());
var createTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject9());
var createNewSubjectTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject10());
var createNewSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject11());
var createSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject12());
var createNewSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject13());
var createNewRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject14());
var createNewRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject15());
var createExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject16());
var registerSubjectSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject17());
var createCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject18()); //************create mutations  */
////**************Update mutations */

var updateSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject19());
var updateCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject20());
var updateTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject21());
var updateExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject22());
var updateCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject23()); ////**************Update mutations */



/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Queries.jsx":
/*!****************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Queries.jsx ***!
  \****************************************************************/
/*! exports provided: getAllSubjectsOfASeriesQuery, getAllSubjectTypeQuery, getAllGendersQuery, getAllRegionsQuery, getAllEducTypeQuery, getAllSeriesOfAnEducationTypeQuery, getAllExamsQuery, getAllSessionsQuery, getDivisionsOfARegionQuery, getAllDivisionsQuery, getSubDivisionsOfADivisionQuery, getTownsOfASubDivisionQuery, getCentersOfATownQuery, getAllEducationTypesQuery, getAllSubjectsQuery, getAllRanksQuery, getAllEducTypesOfAnExam, getAllCandidatesQuery, getAllCentersQuery, getACenterAdminQuery, singleCandidateQuery1, singleCandidateQuery, viewSingleCandidateQuery, singleCenterQuery, singleCenterAdminQuery, singleExamQuery, singleTownQuery, singleSubDivisionQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfASeriesQuery", function() { return getAllSubjectsOfASeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectTypeQuery", function() { return getAllSubjectTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGendersQuery", function() { return getAllGendersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsQuery", function() { return getAllRegionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducTypeQuery", function() { return getAllEducTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesOfAnEducationTypeQuery", function() { return getAllSeriesOfAnEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllExamsQuery", function() { return getAllExamsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSessionsQuery", function() { return getAllSessionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDivisionsOfARegionQuery", function() { return getDivisionsOfARegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDivisionsQuery", function() { return getAllDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubDivisionsOfADivisionQuery", function() { return getSubDivisionsOfADivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTownsOfASubDivisionQuery", function() { return getTownsOfASubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentersOfATownQuery", function() { return getCentersOfATownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducationTypesQuery", function() { return getAllEducationTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsQuery", function() { return getAllSubjectsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksQuery", function() { return getAllRanksQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducTypesOfAnExam", function() { return getAllEducTypesOfAnExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidatesQuery", function() { return getAllCandidatesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCentersQuery", function() { return getAllCentersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getACenterAdminQuery", function() { return getACenterAdminQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery1", function() { return singleCandidateQuery1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery", function() { return singleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSingleCandidateQuery", function() { return viewSingleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterQuery", function() { return singleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterAdminQuery", function() { return singleCenterAdminQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExamQuery", function() { return singleExamQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleTownQuery", function() { return singleTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubDivisionQuery", function() { return singleSubDivisionQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  query singleCenterAdminQuery($id: ID!) {\n    centerAdmin(id: $id) {\n      centerAdminName\n      centerAdminCode\n      id\n    }\n  }\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  query singleSubDivisionQuery($id: ID!) {\n    subDivision(id: $id) {\n      subDivName\n      subDivCode\n      id\n    }\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  query viewSingleCandidateQuery($candCode: String!) {\n    singleCandidate(candCode: $candCode) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      gender {\n        genderName\n      }\n    }\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  query singleCandidateQuery($id: ID!) {\n    candidate(id: $id) {\n      id\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      gender {\n        genderName\n      }\n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  query singleCandidateQuery1($id: ID!) {\n    candidate(id: $id) {\n      cand1stName\n      cand2ndName\n      cand3rdName\n      candCode\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      id\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  query singleExamQuery($id: ID!) {\n    exam(id: $id) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  query singleTownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      townCode\n      id\n    }\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  query singleCenterQuery($id: ID!) {\n    center(id: $id) {\n      centerName\n      centerCode\n      id\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  query getAllCandidatesQuery {\n    candidates(orderBy: cand1stName_ASC) {\n      cand1stName\n      cand2ndName\n      cand3rdName\n      email\n      image\n      phoneNumb\n      placeOfBirth\n      candCode\n      id\n    }\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  query getAllCentersQuery {\n    centers(orderBy: centerName_ASC) {\n      id\n      centerName\n      centerCode\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectTypeQuery {\n    subjectTypes(orderBy: subjectTypeName_DESC) {\n      id\n      subjectTypeName\n      subjectTypeCode\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  query getCentersOfATownQuery($id: ID!) {\n    town(id: $id) {\n      townName\n      id\n      center(orderBy: centerName_ASC) {\n        centerName\n        centerCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  query getTownsOfASubDivision($id: ID!) {\n    subDivision(id: $id) {\n      subDivName\n      id\n      town(orderBy: townName_ASC) {\n        townName\n        townCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  query getSubjectsOfASeriesQuery($id: ID!) {\n    series(id: $id) {\n      seriesName\n      id\n      subjectSeries {\n        subject {\n          id\n          subjectName\n        }\n      }\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  query getSubDivisionsOfADivisionQuery($id: ID!) {\n    division(id: $id) {\n      divName\n      id\n      subDivision(orderBy: subDivName_ASC) {\n        subDivName\n        subDivCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  query getDivisionsOfARegionQuery($id: ID!) {\n    region(id: $id) {\n      regName\n      id\n      division(orderBy: divName_ASC) {\n        divName\n        divCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  query getAllDivisionsQuery {\n    divisions(orderBy: divName_ASC) {\n      divName\n      divCode\n      id\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  query getAllSessionsQuery {\n    sessions(orderBy: createdAt_DESC) {\n      sessionName\n      sessionCode\n      id\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  query getAllExamsQuery {\n    exams(orderBy: examName_ASC) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  query getAllEducTypesOfAnExam($id: ID!) {\n    exam(id: $id) {\n      id\n      examName\n      educationType(orderBy: educationTypeName_ASC) {\n        educationTypeName\n        educationTypeCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  query getAllSeriesOfAnEducationTypeQuery($id: ID!) {\n    educationType(id: $id) {\n      id\n      educationTypeName\n      series(orderBy: seriesName_ASC) {\n        id\n        seriesName\n        seriesCode\n      }\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  query getAllEducationTypesQuery {\n    educationTypes {\n      educationTypeName\n      educationTypeCode\n      id\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  query getAllGendersQuery {\n    genders(orderBy: genderName_ASC) {\n      id\n      genderName\n      genderCode\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query getAllSubjectsQuery {\n    subjects(orderBy: subjectName_ASC) {\n      subjectName\n      subjectCode\n      id\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query getAllRanksQuery {\n    ranks(orderBy: rankName_ASC) {\n      rankName\n      rankCode\n      id\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query getAllRegionsQuery {\n    regions(orderBy: regName_ASC) {\n      regName\n      regCode\n      id\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query getACenterAdminQuery($authCode: String!) {\n    centerAdminSignIn(authCode: $authCode) {\n      id\n      authCode\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var getACenterAdminQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var getAllRegionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var getAllRanksQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());
var getAllSubjectsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject4());
var getAllGendersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject5());
var getAllEducationTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject6());
var getAllSeriesOfAnEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject7());
var getAllEducTypesOfAnExam = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject8());
var getAllExamsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject9());
var getAllSessionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject10());
var getAllDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject11());
var getDivisionsOfARegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject12());
var getSubDivisionsOfADivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject13());
var getAllSubjectsOfASeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject14());
var getTownsOfASubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject15());
var getCentersOfATownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject16());
var getAllSubjectTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject17());
var getAllCentersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject18());
var getAllCandidatesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject19()); ///*****************Single object queries */

var singleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject20());
var singleTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject21());
var singleExamQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject22());
var singleCandidateQuery1 = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject23());
var singleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject24());
var viewSingleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject25());
var singleSubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject26());
var singleCenterAdminQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject27()); ///*****************End Single object queries */



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

/***/ 7:
/*!*******************************************!*\
  !*** multi ./pages/creates/newCenter.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/creates/newCenter.jsx */"./pages/creates/newCenter.jsx");


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
//# sourceMappingURL=newCenter.js.map