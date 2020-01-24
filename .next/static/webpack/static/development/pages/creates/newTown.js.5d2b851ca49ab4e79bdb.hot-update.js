webpackHotUpdate("static\\development\\pages\\creates\\newTown.js",{

/***/ "./src/components/town/CreateTown.jsx":
/*!********************************************!*\
  !*** ./src/components/town/CreateTown.jsx ***!
  \********************************************/
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

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\town\\CreateTown.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
  displayName: "CreateTown__StyledDivision",
  componentId: "cpovj6-0"
})(["display:block;text-align:center;margin:0 auto;min-width:350px;"]);

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
      region: "",
      division: "",
      subDiv: ""
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

  _createClass(CreateTown, [{
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        townName: "",
        townCode: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          regionID = _this$state.regionID,
          divisionID = _this$state.divisionID,
          subDivisionID = _this$state.subDivisionID;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllRegionsQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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
              lineNumber: 48
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
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
              lineNumber: 58
            },
            __self: this
          }, item.regName);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getDivisionsOfARegionQuery"],
          variables: getselectedObject(regions, regionID) || anyRegion,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
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
                lineNumber: 66
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
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
                lineNumber: 77
              },
              __self: this
            }, item.divName);
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getSubDivisionsOfADivisionQuery"],
            variables: getselectedObject(division, divisionID) || anyDivision,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
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
                  lineNumber: 85
                },
                __self: this
              }, "Loading...");
            }
            {
              error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                },
                __self: this
              });
            }
            var departement = data.division;
            var arrondissement = departement.subDivision;
            console.log(arrondissement);
            var refinedSubDiv = arrondissement && arrondissement.map(function (_ref4) {
              var __typename = _ref4.__typename,
                  subDivName = _ref4.subDivName,
                  others = _objectWithoutProperties(_ref4, ["__typename", "subDivName"]);

              return others;
            });
            var subDivisionsOptions = arrondissement.map(function (item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                value: item.id,
                key: item.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97
                },
                __self: this
              }, item.subDivName);
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
              mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_6__["createTownMutation"],
              variables: _objectSpread({}, _this2.state, {
                subDiv: getselectedObject(refinedSubDiv, subDivisionID)
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            }, function (createTown, _ref5) {
              var loading = _ref5.loading,
                  error = _ref5.error;
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
                onSubmit:
                /*#__PURE__*/
                function () {
                  var _ref6 = _asyncToGenerator(
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

                            _this2.resetForm();

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x) {
                    return _ref6.apply(this, arguments);
                  };
                }(),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 119
                },
                __self: this
              }, "Nouvelle Ville"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 120
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
                disabled: loading,
                "aria-busy": loading,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 122
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
                  lineNumber: 123
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
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
                  lineNumber: 135
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 143
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
                  lineNumber: 146
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 154
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
                  lineNumber: 157
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
                  lineNumber: 166
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "submitButton",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 175
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                type: "submit",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 176
                },
                __self: this
              }, "Valid", loading ? "ation en cours" : "er")))));
            });
          });
        });
      });
    }
  }]);

  return CreateTown;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateTown);

/***/ })

})
//# sourceMappingURL=newTown.js.5d2b851ca49ab4e79bdb.hot-update.js.map