webpackHotUpdate("static\\development\\pages\\creates\\newSubDivision.js",{

/***/ "./src/components/subDivision/CreateSubDivision.jsx":
/*!**********************************************************!*\
  !*** ./src/components/subDivision/CreateSubDivision.jsx ***!
  \**********************************************************/
/*! exports provided: default, GET_ALL_DIVISIONS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_DIVISIONS_QUERY", function() { return GET_ALL_DIVISIONS_QUERY; });
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

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\subDivision\\CreateSubDivision.jsx";

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
  displayName: "CreateSubDivision__StyledDivision",
  componentId: "sc-11wtgg5-0"
})(["display:block;text-align:center;margin:0 auto;min-width:350px;"]);

var CreateSubDivision =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateSubDivision, _Component);

  function CreateSubDivision() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateSubDivision);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateSubDivision)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      subDivName: '',
      subDivCode: '',
      divisionID: '12',
      regionID: '12',
      region: '',
      division: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    return _this;
  }

  _createClass(CreateSubDivision, [{
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        subDivName: '',
        subDivCode: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          regionID = _this$state.regionID,
          divisionID = _this$state.divisionID;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllRegionsQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
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
              lineNumber: 42
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          });
        }
        var regions = data.regions;
        var anyRegion = regions[0];
        console.log('this is any chosen region');
        console.log(anyRegion); //prepare data for the region select options

        var regionsOptions = regions.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: item.id,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, item.regName, "-", item.regCode);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getDivisionsOfARegionQuery"],
          variables: regions && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(regions, regionID),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
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
                lineNumber: 65
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            });
          }
          console.log('these are the divisions of the selected region');
          console.log(data.region.division);
          var divisionsOptions = data.region.division.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              value: item.id,
              key: item.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              },
              __self: this
            }, item.divName);
          }); //*******important function'stripping off __typename')

          var divisionsOfARegion = data.region.division.map(function (_ref3) {
            var divName = _ref3.divName,
                divCode = _ref3.divCode,
                __typename = _ref3.__typename,
                others = _objectWithoutProperties(_ref3, ["divName", "divCode", "__typename"]);

            return others;
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
            mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_6__["createSubDivisionMutation"],
            variables: _objectSpread({}, _this2.state, {
              division: divisionsOfARegion && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(divisionsOfARegion, divisionID)
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, function (createSubDivision, _ref4) {
            var loading = _ref4.loading,
                error = _ref4.error;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
                          return createSubDivision();

                        case 3:
                          res = _context.sent;
                          console.log(res);
                          console.log(_this2.state);

                          _this2.resetForm();

                        case 7:
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
                lineNumber: 94
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            }, "New Sub-Division"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
              disabled: loading,
              "aria-busy": loading,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
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
                lineNumber: 106
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
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
                lineNumber: 117
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 125
              },
              __self: this
            }, "Choisissez un departement"), divisionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "text",
              id: "subDivName",
              name: "subDivName",
              placeholder: "Nom Arrondissement",
              value: _this2.state.subDivName,
              onChange: _this2.handleChange,
              required: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "text",
              id: "subDivCode",
              name: "subDivCode",
              placeholder: "Code Arrondissement",
              value: _this2.state.subDivCode,
              onChange: _this2.handleChange,
              required: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 137
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "submitButton",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
              type: "submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              },
              __self: this
            }, "Valid", loading ? 'ation en cours' : 'er')))));
          });
        });
      });
    }
  }]);

  return CreateSubDivision;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateSubDivision);


/***/ })

})
//# sourceMappingURL=newSubDivision.js.99062a4a33b9b6797980.hot-update.js.map