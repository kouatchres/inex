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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/newTown.jsx":
/*!***************************!*\
  !*** ./pages/newTown.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_CreateTown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/CreateTown */ "./src/components/CreateTown.jsx");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\pages\\newTown.jsx";



var DivStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "newTown__DivStyled",
  componentId: "xq7fv5-0"
})(["display:block;margin:0 auto;max-width:40vw;"]);

var newTown = function newTown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DivStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_CreateTown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (newTown);

/***/ }),

/***/ "./src/components/CreateTown.jsx":
/*!***************************************!*\
  !*** ./src/components/CreateTown.jsx ***!
  \***************************************/
/*! exports provided: default, GET_ALL_SUBDIVISIONS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_SUBDIVISIONS_QUERY", function() { return GET_ALL_SUBDIVISIONS_QUERY; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./src/components/styles/Form.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./src/data.jsx");

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\CreateTown.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_TOWN_MUTATION($townName: String!, $townCode: String!, $subDiv: SubDivisionWhereUniqueInput!) {\n    createTown(townName: $townName, townCode: $townCode, subDiv: $subDiv) {\n      id\n      townName\n      townCode\n      subDiv {\n        subDivName\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query GET_SUBDIVISIONS_OF_A_DIVSION_QUERY($id: ID!) {\n    division(id: $id) {\n      id\n      divName\n      subDivision(orderBy: subDivName_ASC) {\n        id\n        subDivName\n        subDivCode\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query GET_DIVISIONS_OF_A_REGION_QUERY($id: ID!) {\n    region(id: $id) {\n      id\n      regName\n      division(orderBy: divName_ASC) {\n        id\n        divName\n        divCode\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_DIVISIONS_QUERY {\n    divisions(orderBy: divName_ASC) {\n      id\n      divName\n      divCode\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_REGIONS_QUERY {\n    regions(orderBy: regName_DESC) {\n      id\n      regName\n      regCode\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "CreateTown__StyledDivision",
  componentId: "sc-1nhwqyj-0"
})(["display:block;text-align:center;margin:0 auto;min-width:350px;"]);
var GET_ALL_REGIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var GET_ALL_DIVISIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());
var GET_DIVISIONS_OF_A_REGION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject3());
var GET_SUBDIVISIONS_OF_A_DIVSION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject4());
var CREATE_TOWN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject5());

var CreateTown =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateTown, _Component);

  function CreateTown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateTown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateTown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      townName: "",
      townCode: "",
      divisionID: "12",
      subDivisionID: "12",
      regionID: "12",
      region: _data__WEBPACK_IMPORTED_MODULE_7__["storeRegion"],
      division: _data__WEBPACK_IMPORTED_MODULE_7__["storedDivision"],
      subDiv: _data__WEBPACK_IMPORTED_MODULE_7__["storedSubDivision"]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === "number" ? parseInt(value) : value;

      _this.setState(_defineProperty({}, name, val));
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
          return item.id === _this.state.subDivisionID;
        });
        console.log(selectedSubDivision);
        return selectedSubDivision;
      }
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

    return _this;
  }

  _createClass(CreateTown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_ALL_REGIONS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
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
              lineNumber: 133
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          });
        }
        var regions = data.regions;
        var anyRegion = regions[0];
        console.log("this is any chosen region");
        console.log(anyRegion); //prepare data for the region select options

        var regionsOptions = regions.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: item.id,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, item.regName);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: GET_DIVISIONS_OF_A_REGION_QUERY,
          variables: _this2.getselectedRegion(regions) || anyRegion,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
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
                lineNumber: 153
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 156
              },
              __self: this
            });
          }
          console.log("these are the divisions of the selected region");
          console.log(data.region.division);
          var region = data.region;
          var division = region.division;
          var anyDivision = division[0];
          console.log(anyDivision);
          var divisionsOptions = division.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              value: item.id,
              key: item.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              },
              __self: this
            }, item.divName);
          }); //*******important function'stripping off __typename')

          var divisionsOfARegion = division.map(function (_ref3) {
            var __typename = _ref3.__typename,
                others = _objectWithoutProperties(_ref3, ["__typename"]);

            return others;
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: GET_SUBDIVISIONS_OF_A_DIVSION_QUERY,
            variables: _this2.getselectedDivision(division) || anyDivision,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
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
                  lineNumber: 179
                },
                __self: this
              }, "Loading...");
            }
            {
              error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 182
                },
                __self: this
              });
            }
            console.log("getting sub divisions");
            console.log(data.division.subDivision);
            var subDivisionsOptions = data.division.subDivision.map(function (item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                value: item.id,
                key: item.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 188
                },
                __self: this
              }, item.subDivName);
            }); //*******important function'stripping off __typename')

            var subDivisionsOfADivision = data.division.subDivision.map(function (_ref5) {
              var __typename = _ref5.__typename,
                  subDivName = _ref5.subDivName,
                  subDivCode = _ref5.subDivCode,
                  others = _objectWithoutProperties(_ref5, ["__typename", "subDivName", "subDivCode"]);

              return others;
            });
            console.log("sub division for the town");
            console.log(subDivisionsOfADivision);
            console.log("This are the state values");
            console.log(_this2.state);
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
              mutation: CREATE_TOWN_MUTATION,
              variables: _objectSpread({}, _this2.state, {
                subDiv: _this2.getselectedSubDivision(subDivisionsOfADivision)
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 201
              },
              __self: this
            }, function (createTown, _ref6) {
              var loading = _ref6.loading,
                  error = _ref6.error;
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 209
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
                            return createTown();

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
                    return _ref7.apply(this, arguments);
                  };
                }(),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 210
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 217
                },
                __self: this
              }, "Nouvelle Ville"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 218
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
                disabled: loading,
                "aria-busy": loading,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 219
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
                  lineNumber: 220
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 228
                },
                __self: this
              }, "choisssez une region"), regionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                type: "select",
                id: "divisionID",
                name: "divisionID",
                value: _this2.state.divisionID,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 232
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 240
                },
                __self: this
              }, " choisissez un departement"), divisionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                type: "select",
                id: "subDivisionID",
                name: "subDivisionID",
                value: _this2.state.subDivisionID,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 243
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 251
                },
                __self: this
              }, " choisissez un arrondissement"), subDivisionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                type: "text",
                id: "townName",
                name: "townName",
                placeholder: "Nom de la ville",
                value: _this2.state.subDivName,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 254
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                type: "text",
                id: "townCode",
                name: "townCode",
                placeholder: "Code de la ville",
                value: _this2.state.subDivCode,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 263
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "submitButton",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 272
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                type: "submit",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 273
                },
                __self: this
              }, "Submit", loading ? "ting" : "")))));
            });
          });
        });
      });
    }
  }]);

  return CreateTown;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateTown);


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

/***/ 7:
/*!*********************************!*\
  !*** multi ./pages/newTown.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/newTown.jsx */"./pages/newTown.jsx");


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
//# sourceMappingURL=newTown.js.map