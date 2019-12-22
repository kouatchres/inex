webpackHotUpdate("static\\development\\pages\\newCenter.js",{

/***/ "./src/components/CreateCenter.jsx":
/*!*****************************************!*\
  !*** ./src/components/CreateCenter.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./src/components/styles/Form.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data */ "./src/data.jsx");

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\CreateCenter.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_CENTER_MUTATION(\n    $centerName: String!\n    $centerNumber: Int\n    $centerCode: String!\n    $town: TownWhereUniqueInput!\n  ) {\n    createCenter(centerName: $centerName, centerNumber: $centerNumber, centerCode: $centerCode, town: $town) {\n      id\n      centerName\n      centerCode\n      town {\n        townName\n      }\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  query GET_TOWNS_OF_A_SUBDIVISION_QUERY($id: ID!) {\n    subDivision(id: $id) {\n      id\n      subDivName\n      town(orderBy: townName_ASC) {\n        id\n        townName\n        townCode\n      }\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_REGIONS_QUERY {\n    regions(orderBy: regName_ASC) {\n      id\n      regName\n      regCode\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CreateCenter__StyledDivision",
  componentId: "y9cnli-0"
})(["display:block;text-align:center;margin:0 auto;min-width:350px;"]);
var GET_ALL_REGIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var GET_ALL_DIVISIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());
var GET_DIVISIONS_OF_A_REGION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject3());
var GET_SUBDIVISIONS_OF_A_DIVSION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject4());
var GET_TOWNS_OF_A_SUBDIVISION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject5());
var CREATE_CENTER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject6());

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
      townName: "",
      townCode: "",
      townID: "12",
      divisionID: "12",
      subDivisionID: "12",
      regionID: "12",
      region: _data__WEBPACK_IMPORTED_MODULE_8__["storeRegion"],
      division: _data__WEBPACK_IMPORTED_MODULE_8__["storedDivision"],
      subDivision: _data__WEBPACK_IMPORTED_MODULE_8__["storedSubDivision"],
      town: _data__WEBPACK_IMPORTED_MODULE_8__["storedTown"]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var setValue = type === "number" ? parseInt(value) : value;

      _this.setState(_defineProperty({}, name, setValue));
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedTown", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempTown = _toConsumableArray(dataSource); // get the selected division object


        var selectedTown = tempTown.find(function (item) {
          return item.id === _this.state.townID;
        });
        console.log(selectedTown);
        return selectedTown;
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

  _createClass(CreateCenter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_ALL_REGIONS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
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
              lineNumber: 166
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
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
              lineNumber: 176
            },
            __self: this
          }, item.regName);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: GET_DIVISIONS_OF_A_REGION_QUERY,
          variables: _this2.getselectedRegion(regions) || anyRegion,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
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
                lineNumber: 184
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 187
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
                lineNumber: 195
              },
              __self: this
            }, item.divName);
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: GET_SUBDIVISIONS_OF_A_DIVSION_QUERY,
            variables: _this2.getselectedDivision(division) || anyDivision,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
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
                  lineNumber: 206
                },
                __self: this
              }, "Loading...");
            }
            {
              error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 209
                },
                __self: this
              });
            }
            var departement = data.division;
            var arrondissement = departement.subDivision;
            var anySubDivision = arrondissement[0];
            console.log(departement);
            var subDivisionsOptions = arrondissement.map(function (item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                value: item.id,
                key: item.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 218
                },
                __self: this
              }, item.subDivName);
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
              query: GET_TOWNS_OF_A_SUBDIVISION_QUERY,
              variables: _this2.getselectedSubDivision(arrondissement) || anySubDivision,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 224
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
                    lineNumber: 230
                  },
                  __self: this
                }, "Loading...");
              }
              {
                error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 233
                  },
                  __self: this
                }, "error=", error);
              }
              var village = data.subDivision;

              var allTowns = _objectSpread({}, village);

              var town = allTowns.town;
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
                mutation: CREATE_CENTER_MUTATION,
                variables: _objectSpread({}, _this2.state, {
                  town: _this2.getselectedTown(town ? town.map(function (_ref5) {
                    var __typename = _ref5.__typename,
                        townName = _ref5.townName,
                        townCode = _ref5.townCode,
                        others = _objectWithoutProperties(_ref5, ["__typename", "townName", "townCode"]);

                    return others;
                  }) : _data__WEBPACK_IMPORTED_MODULE_8__["storedTown"])
                }),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 243
                },
                __self: this
              }, function (createCenter, _ref6) {
                var loading = _ref6.loading,
                    error = _ref6.error;
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
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
                    lineNumber: 254
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 261
                  },
                  __self: this
                }, "Nouveau Centre d'Examen"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  error: error,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 262
                  },
                  __self: this
                }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
                  disabled: loading,
                  "aria-busy": loading,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
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
                    lineNumber: 264
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
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
                    lineNumber: 276
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 284
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
                    lineNumber: 287
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 295
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
                    lineNumber: 298
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 306
                  },
                  __self: this
                }, "Choisissez une ville"), town ? town.map(function (item) {
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                    value: item.id,
                    key: item.id,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 309
                    },
                    __self: this
                  }, item.townName);
                }) : _data__WEBPACK_IMPORTED_MODULE_8__["bestTowns"].map(function (item) {
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                    value: item.id,
                    key: item.id,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 314
                    },
                    __self: this
                  }, item.townName);
                })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                  type: "text",
                  id: "centerName",
                  name: "centerName",
                  placeholder: "Center Name",
                  value: _this2.state.centerName,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 319
                  },
                  __self: this
                }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                  type: "text",
                  id: "centerCode",
                  name: "centerCode",
                  placeholder: "Center Code",
                  value: _this2.state.centerCode,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 328
                  },
                  __self: this
                }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                  type: "text",
                  id: "centerNumber",
                  name: "centerNumber",
                  placeholder: "Center Number",
                  value: _this2.state.centerNumber,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 337
                  },
                  __self: this
                }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                  className: "submitButton",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 346
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                  type: "submit",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 347
                  },
                  __self: this
                }, "Submit", loading ? "ting" : "")))));
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

/***/ })

})
//# sourceMappingURL=newCenter.js.069659b7b15c76345bfb.hot-update.js.map