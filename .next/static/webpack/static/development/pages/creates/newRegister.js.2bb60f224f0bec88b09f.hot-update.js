webpackHotUpdate("static\\development\\pages\\creates\\newRegister.js",{

/***/ "./src/components/registration/RecentRegistration.jsx":
/*!************************************************************!*\
  !*** ./src/components/registration/RecentRegistration.jsx ***!
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
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");

var _jsxFileName = "E:\\Sygex\\Sygex-front\\src\\components\\registration\\RecentRegistration.jsx";

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











var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "RecentRegistration__StyledDivision",
  componentId: "sc-1hddqjp-0"
})(["display:grid;grid-template-columns:1fr;text-align:center;margin:0 auto;.submitButton{paddding-top:2rem;}"]);
var OtherSelect = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "RecentRegistration__OtherSelect",
  componentId: "sc-1hddqjp-1"
})(["display:block;text-align:center;margin:0 auto;"]);

var RecentRegistration =
/*#__PURE__*/
function (_Component) {
  _inherits(RecentRegistration, _Component);

  function RecentRegistration() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RecentRegistration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RecentRegistration)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      examID: "",
      sessionID: "",
      centerNumber: "",
      candCode: "",
      seriesID: ""
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
        candCode: ''
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeCenterVariableObject", function (centerCodeValue) {
      var storedCenter = {
        centerNumber: "".concat(centerCodeValue)
      };
      return storedCenter;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "candRegistrationNumber", function (centerCode, exam, session, serialCode) {
      return "".concat(centerCode + exam + session + serialCode);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeCandVariableObject", function (candCodeValue) {
      var storedCandidate = {
        candCode: "".concat(candCodeValue)
      };
      return storedCandidate;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeCESSObject", function (candCodeValue) {
      var objCESS = {
        id: "".concat(candCodeValue)
      };
      return objCESS;
    });

    return _this;
  }

  _createClass(RecentRegistration, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          candCode = _this$state.candCode,
          seriesID = _this$state.seriesID,
          examID = _this$state.examID,
          sessionID = _this$state.sessionID,
          centerNumber = _this$state.centerNumber;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__["getAllExamsQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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
              lineNumber: 94
            },
            __self: this
          }, "loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          });
        }
        var exams = data.exams;
        console.log(exams);

        var getExamName = exams && _objectSpread({}, Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__["getSelectedObject"])(exams, examID));

        var refinedExams = exams && exams.map(function (_ref2) {
          var __typename = _ref2.__typename,
              examName = _ref2.examName,
              others = _objectWithoutProperties(_ref2, ["__typename", "examName"]);

          return others;
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__["getAllSessionsQuery"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
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
                lineNumber: 114
              },
              __self: this
            }, "loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              },
              __self: this
            });
          }
          var sessions = data.sessions;
          console.log(sessions);

          var getSessionName = sessions && _objectSpread({}, Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__["getSelectedObject"])(sessions, sessionID));

          var refinedSessions = sessions && sessions.map(function (_ref4) {
            var __typename = _ref4.__typename,
                sessionName = _ref4.sessionName,
                others = _objectWithoutProperties(_ref4, ["__typename", "sessionName"]);

            return others;
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__["getExamSessionQuery"],
            variables: {
              exam: refinedExams && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__["getSelectedObject"])(refinedExams, examID),
              session: refinedSessions && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__["getSelectedObject"])(refinedSessions, sessionID)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
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
              query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__["getSingleCenterQuery"],
              variables: {
                centerNumber: centerNumber
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              },
              __self: this
            }, function (_ref7) {
              var data = _ref7.data,
                  error = _ref7.error,
                  loading = _ref7.loading;
              {
                loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                  },
                  __self: this
                }, "...Loading");
              }
              {
                error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  error: error,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                  },
                  __self: this
                });
              }

              var _data2 = _objectSpread({}, data),
                  centerByNumber = _data2.centerByNumber;

              centerByNumber && delete centerByNumber.__typename;
              console.log(centerByNumber);
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__["getSingleCenterExamSessionQuery"],
                variables: {
                  examSession: reducedES && reducedES,
                  center: centerByNumber && centerByNumber
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 157
                },
                __self: this
              }, function (_ref8) {
                var data = _ref8.data,
                    error = _ref8.error,
                    loading = _ref8.loading;
                {
                  loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 164
                    },
                    __self: this
                  }, "...Loading");
                }
                {
                  error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    error: error,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 165
                    },
                    __self: this
                  });
                }
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
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                  query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__["getAllSeriesOfACenterExamSessionQuery"],
                  variables: {
                    id: getObj && getObj.id
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                  },
                  __self: this
                }, function (_ref10) {
                  var data = _ref10.data,
                      loading = _ref10.loading,
                      error = _ref10.error;
                  {
                    loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 186
                      },
                      __self: this
                    }, "...Loading");
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
                  console.log(data);
                  var centerExamSession = data.centerExamSession;

                  var seriesCES = _objectSpread({}, centerExamSession);

                  var centerExamSessionSeries = seriesCES.centerExamSessionSeries;
                  console.log(centerExamSessionSeries); // get all the series out of this object

                  var newSeries = centerExamSessionSeries && centerExamSessionSeries.map(function (item) {
                    return item.series;
                  });
                  var refinedSeries = newSeries && newSeries.map(function (_ref11) {
                    var __typename = _ref11.__typename,
                        seriesName = _ref11.seriesName,
                        others = _objectWithoutProperties(_ref11, ["__typename", "seriesName"]);

                    return others;
                  });
                  var seriesOptions = newSeries && newSeries.map(function (item) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                      key: item.id,
                      value: item.id,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 208
                      },
                      __self: this
                    }, item.seriesName);
                  });
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                    query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__["getCenterExamSessionSeriesQuery"],
                    variables: {
                      centerExamSession: getObj && getObj,
                      series: refinedSeries && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__["getSelectedObject"])(refinedSeries, seriesID)
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 215
                    },
                    __self: this
                  }, function (_ref12) {
                    var data = _ref12.data,
                        error = _ref12.error,
                        loading = _ref12.loading;
                    {
                      loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 220
                        },
                        __self: this
                      }, "...Loading");
                    }
                    {
                      error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        error: error,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 221
                        },
                        __self: this
                      });
                    }

                    var _data4 = _objectSpread({}, data),
                        centerExamSessionSerieses = _data4.centerExamSessionSerieses;

                    var getCESS = centerExamSessionSerieses && centerExamSessionSerieses.reduce(function (item) {
                      return item;
                    });
                    console.log(getCESS);
                    console.log(refinedSeries);

                    var _getCESS = _objectSpread({}, getCESS),
                        idObj = _getCESS.id;

                    var refinedCESS = idObj && _this2.makeCESSObject(idObj);

                    console.log(refinedCESS);
                    console.log(_this2.candRegistrationNumber(centerNumber, getExamName.examCode, getSessionName.sessionName, 99 .pad(5)));
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
                      mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_9__["createRegistrationMutation"],
                      variables: _objectSpread({}, _this2.state, {
                        candExamSecretCode: Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__["uniqueCodeGen"])(8),
                        candidate: _this2.makeCandVariableObject(candCode),
                        centerExamSession: getObj && getObj,
                        series: refinedSeries && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__["getSelectedObject"])(refinedSeries, seriesID),
                        centerExamSessionSeries: refinedCESS && refinedCESS,
                        candExamSession: Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_8__["candExamSessionCode"])(candCode, examID, sessionID),
                        candRegistrationNumber: _this2.candRegistrationNumber(centerNumber, getExamName.examCode, getSessionName.sessionName, 10 .pad(5))
                      }),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 233
                      },
                      __self: this
                    }, function (createRegistration, _ref13) {
                      var loading = _ref13.loading,
                          error = _ref13.error;
                      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_4__["MiniStyledPage"], {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 247
                        },
                        __self: this
                      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        method: "POST",
                        onSubmit:
                        /*#__PURE__*/
                        function () {
                          var _ref14 = _asyncToGenerator(
                          /*#__PURE__*/
                          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                            var res;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    e.preventDefault();
                                    _context.next = 3;
                                    return createRegistration();

                                  case 3:
                                    res = _context.sent;
                                    console.log(res);

                                    _this2.resetForm();

                                    res && next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
                                      pathname: '/show/results/registrationReceipt',
                                      query: {
                                        id: res.data.createRegistration.id
                                      }
                                    });

                                  case 7:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));

                          return function (_x) {
                            return _ref14.apply(this, arguments);
                          };
                        }(),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 248
                        },
                        __self: this
                      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 260
                        },
                        __self: this
                      }, "S'Inscrire \xE0 un Examen"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        error: error,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 263
                        },
                        __self: this
                      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
                        disabled: loading,
                        "aria-busy": loading,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 264
                        },
                        __self: this
                      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 265
                        },
                        __self: this
                      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OtherSelect, {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 267
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
                        readOnly: true,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 268
                        },
                        __self: this
                      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        type: "number",
                        id: "centerNumber",
                        name: "centerNumber",
                        placeholder: "Num\xE9ro du centre",
                        value: centerNumber,
                        onChange: _this2.handleChange,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 278
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
                          lineNumber: 287
                        },
                        __self: this
                      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 294
                        },
                        __self: this
                      }, "La Session"), sessions && sessions.map(function (item) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          key: item.id,
                          value: item.id,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 298
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
                          lineNumber: 304
                        },
                        __self: this
                      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 311
                        },
                        __self: this
                      }, "L'Examen"), exams && exams.map(function (item) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          key: item.id,
                          value: item.id,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 315
                          },
                          __self: this
                        }, item.examName);
                      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                        type: "select",
                        id: "seriesID",
                        name: "seriesID",
                        value: seriesID,
                        onChange: _this2.handleChange,
                        required: true,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 320
                        },
                        __self: this
                      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 327
                        },
                        __self: this
                      }, "La S\xE9rie"), seriesOptions && seriesOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        type: "text",
                        id: "candCode",
                        name: "candCode",
                        placeholder: "Code Candidat",
                        value: candCode,
                        onChange: _this2.handleChange,
                        required: true,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 332
                        },
                        __self: this
                      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                        className: "submitButton",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 341
                        },
                        __self: this
                      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                        type: "submit",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 342
                        },
                        __self: this
                      }, "Valid", loading ? 'ation en cours' : 'er')))))));
                    });
                  });
                });
              });
            });
          });
        });
      });
    }
  }]);

  return RecentRegistration;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecentRegistration);

/***/ })

})
//# sourceMappingURL=newRegister.js.2bb60f224f0bec88b09f.hot-update.js.map