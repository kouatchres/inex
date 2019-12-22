webpackHotUpdate("static\\development\\pages\\newSubDivision.js",{

/***/ "./src/components/CreateSubDivision.jsx":
/*!**********************************************!*\
  !*** ./src/components/CreateSubDivision.jsx ***!
  \**********************************************/
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
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./src/components/styles/Form.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./src/data.jsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\CreateSubDivision.jsx";

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tmutation CREATE_SUBDIVISION_MUTATION(\n\t\t$subDivName: String!\n\t\t$subDivCode: String!\n\t\t$division: DivisionWhereUniqueInput!\n\t) {\n\t\tcreateSubDivision(subDivName: $subDivName, subDivCode: $subDivCode, division: $division) {\n\t\t\tid\n\t\t\tsubDivName\n\t\t\tsubDivCode\n\t\t\tdivision {\n\t\t\t\tdivName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tquery GET_DIVISIONS_OF_A_REGION_QUERY($id: ID!) {\n\t\tregion(id: $id) {\n\t\t\tid\n\t\t\tregName\n\t\t\tdivision(orderBy: divName_ASC) {\n\t\t\t\tid\n\t\t\t\tdivName\n\t\t\t\tdivCode\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tquery GET_ALL_DIVISIONS_QUERY {\n\t\tdivisions(orderBy: divName_ASC) {\n\t\t\tid\n\t\t\tdivName\n\t\t\tdivCode\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tquery GET_ALL_REGIONS_QUERY {\n\t\tregions(orderBy: regName_DESC) {\n\t\t\tid\n\t\t\tregName\n\t\t\tregCode\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CreateSubDivision__StyledDivision",
  componentId: "z5uoye-0"
})(["display:block;text-align:center;margin:0 auto;min-width:350px;"]);
var GET_ALL_REGIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var GET_ALL_DIVISIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());
var GET_DIVISIONS_OF_A_REGION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject3());
var CREATE_SUBDIVISION_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject4());

var createSubDivision =
/*#__PURE__*/
function (_Component) {
  _inherits(createSubDivision, _Component);

  function createSubDivision() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, createSubDivision);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(createSubDivision)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      subDivName: '',
      subDivCode: '',
      divisionID: '12',
      regionID: '12',
      region: _data__WEBPACK_IMPORTED_MODULE_7__["storeRegion"],
      division: _data__WEBPACK_IMPORTED_MODULE_7__["storedDivision"]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === 'number' ? parseInt(value) : value;

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedRegion", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempRegions = _toConsumableArray(dataSource); // get the selected region object


        var selectedRegion = tempRegions.find(function (item) {
          return item.id === _this.state.regionID;
        });
        console.log('getting selected region');
        console.log(selectedRegion);
        return selectedRegion;
      }
    });

    return _this;
  }

  _createClass(createSubDivision, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_ALL_REGIONS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
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
              lineNumber: 109
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
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
              lineNumber: 121
            },
            __self: this
          }, item.regName, "-", item.regCode);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: GET_DIVISIONS_OF_A_REGION_QUERY,
          variables: _this2.getselectedRegion(regions) || anyRegion,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
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
                lineNumber: 132
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
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
                lineNumber: 141
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
            mutation: CREATE_SUBDIVISION_MUTATION,
            variables: _objectSpread({}, _this2.state, {
              division: _this2.getselectedDivision(divisionsOfARegion)
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, function (createSubDivision, _ref4) {
            var loading = _ref4.loading,
                error = _ref4.error;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
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

                        case 6:
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
                lineNumber: 160
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              },
              __self: this
            }, "New Sub-Division"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 169
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
              disabled: loading,
              "aria-busy": loading,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 170
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
                lineNumber: 171
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 179
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
                lineNumber: 182
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 190
              },
              __self: this
            }, "Choisissez un departement"), divisionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "text",
              id: "subDivName",
              name: "subDivName",
              placeholder: "Sub Division Name",
              value: _this2.state.subDivName,
              onChange: _this2.handleChange,
              required: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "text",
              id: "subDivCode",
              name: "subDivCode",
              placeholder: "Sub Division Code",
              value: _this2.state.subDivCode,
              onChange: _this2.handleChange,
              required: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 202
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "submitButton",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 211
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
              type: "submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 212
              },
              __self: this
            }, "Submit", loading ? 'ting' : '')))));
          });
        });
      });
    }
  }]);

  return createSubDivision;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (createSubDivision);


/***/ })

})
//# sourceMappingURL=newSubDivision.js.8646ddd0601c04bb1d59.hot-update.js.map