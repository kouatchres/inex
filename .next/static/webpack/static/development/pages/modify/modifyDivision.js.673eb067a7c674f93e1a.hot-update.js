webpackHotUpdate("static\\development\\pages\\modify\\modifyDivision.js",{

/***/ "./src/components/division/SelectDivisionToModify.jsx":
/*!************************************************************!*\
  !*** ./src/components/division/SelectDivisionToModify.jsx ***!
  \************************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _DeleteDivision__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteDivision */ "./src/components/division/DeleteDivision.jsx");

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\division\\SelectDivisionToModify.jsx";

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query GET_DIVISIONS_OF_A_REGION_QUERY($id: ID!) {\n    region(id: $id) {\n      id\n      regName\n      division(orderBy: divName_ASC) {\n        id\n        divName\n        divCode\n      }\n    }\n  }\n"]);

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









var DeleteBlock = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "SelectDivisionToModify__DeleteBlock",
  componentId: "y3bt4q-0"
})(["align-content:left;"]);
var UpdateBlock = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].button.withConfig({
  displayName: "SelectDivisionToModify__UpdateBlock",
  componentId: "y3bt4q-1"
})(["font-weight:bold;border-radius:8px;font-size:1.5rem;height:30px;border:none;padding:5px;align-items:center;background-color:white;color:black;border:2px solid #4caf50;:hover{cursor:pointer;background-color:#4c50;color:#4caf50;}"]);
var SelectBlock = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "SelectDivisionToModify__SelectBlock",
  componentId: "y3bt4q-2"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:10px;"]);
var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "SelectDivisionToModify__StyledDivision",
  componentId: "y3bt4q-3"
})(["display:grid;grid-template-columns:20fr auto auto;grid-gap:20px;text-align:center;margin:0 auto;width:70vw;"]);
var GET_ALL_REGIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var GET_DIVISIONS_OF_A_REGION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2());

var SelectDivisionToModify =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectDivisionToModify, _Component);

  function SelectDivisionToModify() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectDivisionToModify);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectDivisionToModify)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      regionID: "12",
      id: "122",
      divisionID: "452"
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedDivision", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempDivisions = _toConsumableArray(dataSource); // get the region object


        var selectedDivision = tempDivisions.find(function (item) {
          return item.id === _this.state.id;
        });
        console.log("getting selected region");
        console.log(selectedDivision);
        return selectedDivision;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var id = _this.state.id;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_ALL_REGIONS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
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
              lineNumber: 112
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          });
        }
        var regions = data.regions;
        var anyRegion = regions[0]; //'getting region from the state')

        console.log(_this.state.regions);
        var getRegions = regions.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: item.id,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, item.regName, " - ", item.regCode);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: GET_DIVISIONS_OF_A_REGION_QUERY,
          variables: _this.getSelectedRegion(regions) || anyRegion,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
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
                lineNumber: 131
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            });
          }
          console.log("these are the divisions of the selected region");
          console.log(data.region.division);
          var divisionsOptions = data.region.division.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              value: item.id,
              key: item.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 140
              },
              __self: this
            }, item.divName);
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                var res;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        _context.next = 3;
                        return updateDivision();

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
                return _ref3.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, "Modification d'un Departement"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectBlock, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            type: "select",
            id: "regionID",
            name: "regionID",
            value: _this.state.regionID,
            onChange: _this.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, " Choisissez la region"), getRegions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            type: "select",
            id: "id",
            name: "id",
            value: _this.state.id,
            onChange: _this.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }, "Departement a modifier"), divisionsOptions)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UpdateBlock, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: {
              pathname: "../updates/updateDivision",
              query: {
                id: id
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, "Valider"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DeleteBlock, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DeleteDivision__WEBPACK_IMPORTED_MODULE_8__["default"], {
            id: _this.state.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            },
            __self: this
          }, "Delete")))));
        });
      });
    });

    return _this;
  }

  return SelectDivisionToModify;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SelectDivisionToModify);

/***/ })

})
//# sourceMappingURL=modifyDivision.js.673eb067a7c674f93e1a.hot-update.js.map