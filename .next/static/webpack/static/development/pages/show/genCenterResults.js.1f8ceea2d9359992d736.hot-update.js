webpackHotUpdate("static\\development\\pages\\show\\genCenterResults.js",{

/***/ "./src/components/score/center/GenCenterResults.jsx":
/*!**********************************************************!*\
  !*** ./src/components/score/center/GenCenterResults.jsx ***!
  \**********************************************************/
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
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Form */ "./src/components/styles/Form.js");
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");

var _jsxFileName = "E:\\Sygex\\Sygex-front\\src\\components\\score\\center\\GenCenterResults.jsx";

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










var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "GenCenterResults__StyledDivision",
  componentId: "sc-1i780ta-0"
})(["display:grid;grid-template-columns:1fr;text-align:center;margin:0 auto;.submitButton{paddding-top:2rem;}"]);
var OtherSelect = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "GenCenterResults__OtherSelect",
  componentId: "sc-1i780ta-1"
})(["display:block;text-align:center;margin:0 auto;"]);

var GenCenterResults =
/*#__PURE__*/
function (_Component) {
  _inherits(GenCenterResults, _Component);

  function GenCenterResults() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GenCenterResults);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GenCenterResults)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      examID: "",
      sessionID: "",
      centerNumber: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === 'number' ? parseInt(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetForm", function () {
      _this.setState({
        centerNumber: ''
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeCenterVariableObject", function (centerCodeValue) {
      var storedCenter = {
        centerNumber: "".concat(centerCodeValue)
      };
      return storedCenter;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeCESSObject", function (candCodeValue) {
      var objCESS = {
        id: "".concat(candCodeValue)
      };
      return objCESS;
    });

    return _this;
  }

  _createClass(GenCenterResults, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          examID = _this$state.examID,
          sessionID = _this$state.sessionID,
          centerNumber = _this$state.centerNumber;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_9__["getAllExamsQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
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
              lineNumber: 75
            },
            __self: this
          }, "loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          });
        }
        var exams = data.exams;
        console.log(exams);
        var refinedExams = exams && exams.map(function (_ref2) {
          var __typename = _ref2.__typename,
              examName = _ref2.examName,
              others = _objectWithoutProperties(_ref2, ["__typename", "examName"]);

          return others;
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_9__["getAllSessionsQuery"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
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
                lineNumber: 95
              },
              __self: this
            }, "loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            });
          }
          var sessions = data.sessions;
          console.log(sessions);
          var refinedSessions = sessions && sessions.map(function (_ref4) {
            var __typename = _ref4.__typename,
                sessionName = _ref4.sessionName,
                others = _objectWithoutProperties(_ref4, ["__typename", "sessionName"]);

            return others;
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_9__["getExamSessionQuery"],
            variables: {
              exam: refinedExams && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__["getSelectedObject"])(refinedExams, examID),
              session: refinedSessions && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__["getSelectedObject"])(refinedSessions, sessionID)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, function (_ref5) {
            var data = _ref5.data,
                error = _ref5.error,
                loading = _ref5.loading;
            console.log(data);

            var _data = _objectSpread({}, data),
                examSessions = _data.examSessions;

            var refinedES = examSessions && examSessions.map(function (_ref6) {
              var __typename = _ref6.__typename,
                  others = _objectWithoutProperties(_ref6, ["__typename"]);

              return others;
            });
            var reducedES = refinedES && refinedES.reduce(function (item) {
              return item;
            });
            console.log(reducedES);
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
              query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_9__["getSingleCenterQuery"],
              variables: {
                centerNumber: centerNumber
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              },
              __self: this
            }, function (_ref7) {
              var data = _ref7.data,
                  error = _ref7.error,
                  loading = _ref7.loading;

              var _data2 = _objectSpread({}, data),
                  centerByNumber = _data2.centerByNumber;

              centerByNumber && delete centerByNumber.__typename;
              console.log(centerByNumber);
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_9__["getSingleCenterExamSessionQuery"],
                variables: {
                  examSession: reducedES && reducedES,
                  center: centerByNumber && centerByNumber
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              }, function (_ref8) {
                var data = _ref8.data,
                    error = _ref8.error,
                    loading = _ref8.loading;
                console.log(data);

                var _data3 = _objectSpread({}, data),
                    centerExamSessions = _data3.centerExamSessions;

                console.log(centerExamSessions); // remove typename from the object

                var refinedCenterExamSessions = centerExamSessions && centerExamSessions.map(function (_ref9) {
                  var __typename = _ref9.__typename,
                      others = _objectWithoutProperties(_ref9, ["__typename"]);

                  return others;
                }); // transform the array into a single object

                var getObj = refinedCenterExamSessions && refinedCenterExamSessions.reduce(function (item) {
                  return item;
                });
                console.log(getObj);
                getObj && next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
                  pathname: '/show/results/centerResults',
                  query: {
                    id: getObj.id
                  }
                });
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_4__["MiniStyledPage"], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  onSubmit:
                  /*#__PURE__*/
                  function () {
                    var _ref10 = _asyncToGenerator(
                    /*#__PURE__*/
                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              e.preventDefault();

                              _this2.resetForm();

                            case 2:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));

                    return function (_x) {
                      return _ref10.apply(this, arguments);
                    };
                  }(),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                  },
                  __self: this
                }, "Resultats du Centre"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OtherSelect, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                  type: "textarea",
                  id: "centerName",
                  name: "centerName",
                  placeholder: "Nom du centre",
                  value: centerByNumber && centerByNumber.centerCode,
                  rows: "2",
                  wrap: "soft",
                  readonly: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                  },
                  __self: this
                }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                  type: "number",
                  id: "centerNumber",
                  name: "centerNumber",
                  placeholder: "Num\xE9ro du centre",
                  value: centerNumber,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                  },
                  __self: this
                }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                  type: "select",
                  id: "sessionID",
                  name: "sessionID",
                  value: sessionID,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                  },
                  __self: this
                }, "La Session"), sessions && sessions.map(function (item) {
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                    key: item.id,
                    value: item.id,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 203
                    },
                    __self: this
                  }, item.sessionName);
                })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                  type: "select",
                  id: "examID",
                  name: "examID",
                  value: examID,
                  onChange: _this2.handleChange,
                  required: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                  },
                  __self: this
                }, "L'Examen"), exams && exams.map(function (item) {
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                    key: item.id,
                    value: item.id,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 220
                    },
                    __self: this
                  }, item.examName);
                })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                  className: "submitButton",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                  type: "submit",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 226
                  },
                  __self: this
                }, "Valid", loading ? 'ation en cours' : 'er')))))));
              });
            });
          });
        });
      });
    }
  }]);

  return GenCenterResults;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GenCenterResults);

/***/ })

})
//# sourceMappingURL=genCenterResults.js.1f8ceea2d9359992d736.hot-update.js.map