webpackHotUpdate("static\\development\\pages\\modifyRegion.js",{

/***/ "./src/components/UpdateRegionBest.jsx":
/*!*********************************************!*\
  !*** ./src/components/UpdateRegionBest.jsx ***!
  \*********************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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










var DeleteBlock = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "UpdateRegionBest__DeleteBlock",
  componentId: "u76p8z-0"
})(["width:40vw;align-content:left;"]);
var UpdateBlock = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].button.withConfig({
  displayName: "UpdateRegionBest__UpdateBlock",
  componentId: "u76p8z-1"
})(["width:7vw;font-weight:bold;border-radius:8px;font-size:1.5rem;height:30px;border:none;padding:5px;align-items:center;background-color:white;color:black;border:2px solid #4caf50;:hover{cursor:pointer;background-color:#4c50;color:#4caf50;}"]);
var SelectBlock = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "UpdateRegionBest__SelectBlock",
  componentId: "u76p8z-2"
})(["display:block;"]);
var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "UpdateRegionBest__StyledDivision",
  componentId: "u76p8z-3"
})(["display:grid;grid-template-columns:10fr auto auto;grid-gap:20px;text-align:center;margin:0 auto;width:70vw;"]);
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
          lineNumber: 87
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
              lineNumber: 90
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
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
              lineNumber: 100
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
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "Modification de Region"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectBlock, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
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
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, " Choisissez une region "), getRegions)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UpdateBlock, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
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
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, "Update"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DeleteBlock, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DeleteRegion__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: _this.state.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
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

/***/ })

})
//# sourceMappingURL=modifyRegion.js.ce010379b3c1f8939bd1.hot-update.js.map