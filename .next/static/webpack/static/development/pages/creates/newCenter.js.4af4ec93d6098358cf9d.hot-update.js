webpackHotUpdate("static\\development\\pages\\creates\\newCenter.js",{

/***/ "./src/components/center/CreateCenter.jsx":
/*!************************************************!*\
  !*** ./src/components/center/CreateCenter.jsx ***!
  \************************************************/
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
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Form */ "./src/components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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









var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
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
                  town: town && getselectedObject(refinedTown, townID)
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

/***/ })

})
//# sourceMappingURL=newCenter.js.4af4ec93d6098358cf9d.hot-update.js.map