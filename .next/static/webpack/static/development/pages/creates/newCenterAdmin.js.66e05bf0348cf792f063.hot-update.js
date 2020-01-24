webpackHotUpdate("static\\development\\pages\\creates\\newCenterAdmin.js",{

/***/ "./src/components/centerAdmin/CenterAdmin.jsx":
/*!****************************************************!*\
  !*** ./src/components/centerAdmin/CenterAdmin.jsx ***!
  \****************************************************/
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

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\centerAdmin\\CenterAdmin.jsx";

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
  displayName: "CenterAdmin__StyledDivision",
  componentId: "cjwnvl-0"
})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:2rem;text-align:center;margin:0 auto;min-width:82rem;"]);
var CenterSelect = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CenterAdmin__CenterSelect",
  componentId: "cjwnvl-1"
})(["display:block;text-align:center;margin:0 auto;min-width:40rem;"]);
var OtherSelect = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CenterAdmin__OtherSelect",
  componentId: "cjwnvl-2"
})(["display:block;text-align:center;margin:0 auto;min-width:40rem;"]);

var CenterAdmin =
/*#__PURE__*/
function (_Component) {
  _inherits(CenterAdmin, _Component);

  function CenterAdmin() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CenterAdmin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CenterAdmin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      rankID: "12",
      divisionID: "12",
      subDivisionID: "12",
      regionID: "12",
      centerID: "12",
      examID: "12",
      sessionID: "12",
      townID: "12",
      authName: "",
      authMatricule: "",
      authCNI: "",
      authPhone: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === "number" ? parseInt(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSessionRank", function () {
      var sessionRank = "".concat(_this.state.sessionID, "-").concat(_this.state.rankID);
      return sessionRank;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetForm", function () {
      _this.setState({
        authMatricule: "",
        authCNI: "",
        authName: "",
        authPhone: ""
      });
    });

    return _this;
  }

  _createClass(CenterAdmin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          regionID = _this$state.regionID,
          divisionID = _this$state.divisionID,
          subDivisionID = _this$state.subDivisionID,
          townID = _this$state.townID,
          centerID = _this$state.centerID,
          examID = _this$state.examID,
          sessionID = _this$state.sessionID,
          rankID = _this$state.rankID;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllRegionsQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
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
              lineNumber: 89
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
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
              lineNumber: 98
            },
            __self: this
          }, item.regName);
        }); //*******important function'stripping off __typename')

        var refinedRegions = regions.map(function (_ref2) {
          var __typename = _ref2.__typename,
              others = _objectWithoutProperties(_ref2, ["__typename"]);

          return others;
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getDivisionsOfARegionQuery"],
          variables: regions && (Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(regions, regionID) || anyRegion),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
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
                lineNumber: 112
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            });
          }
          var province = data.region;
          var division = province.division;
          var anyDivision = division[0];
          var divisionsOptions = division.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              value: item.id,
              key: item.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              },
              __self: this
            }, item.divName);
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getSubDivisionsOfADivisionQuery"],
            variables: division && (Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(division, divisionID) || anyDivision),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
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
                  lineNumber: 135
                },
                __self: this
              }, "Loading...");
            }
            {
              error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 138
                },
                __self: this
              });
            }
            var division = data.division;
            var arrondissement = division.subDivision;
            console.log(arrondissement);
            var subDivisionsOptions = arrondissement.map(function (item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                value: item.id,
                key: item.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 144
                },
                __self: this
              }, item.subDivName);
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
              query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getTownsOfASubDivisionQuery"],
              variables: arrondissement && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(arrondissement, subDivisionID),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              },
              __self: this
            }, function (_ref5) {
              var data = _ref5.data,
                  loading = _ref5.loading,
                  error = _ref5.error;
              {
                loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                  },
                  __self: this
                }, "Loding...");
              }
              {
                error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  error: error,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                  },
                  __self: this
                });
              }
              console.log("these are the towns of the selected Sub division");
              var district = data.subDivision;
              console.log(data);

              var _district = _objectSpread({}, district),
                  town = _district.town;

              console.log(town);
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getCentersOfATownQuery"],
                variables: town && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(town, townID),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 171
                },
                __self: this
              }, function (_ref6) {
                var data = _ref6.data,
                    loading = _ref6.loading,
                    error = _ref6.error;
                {
                  loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 178
                    },
                    __self: this
                  }, "Loding...");
                }
                {
                  error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    error: error,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 181
                    },
                    __self: this
                  });
                }
                var ville = data.town;

                var theTowns = _objectSpread({}, ville);

                var center = theTowns.center;
                console.log(center);
                var refinedCenter = center && center.map(function (_ref7) {
                  var __typename = _ref7.__typename,
                      centerName = _ref7.centerName,
                      others = _objectWithoutProperties(_ref7, ["__typename", "centerName"]);

                  return others;
                });
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                  query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllSessionsQuery"],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                  },
                  __self: this
                }, function (_ref8) {
                  var data = _ref8.data,
                      loading = _ref8.loading,
                      error = _ref8.error;
                  {
                    loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 193
                      },
                      __self: this
                    }, "loading...");
                  }
                  {
                    error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      error: error,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 196
                      },
                      __self: this
                    });
                  }
                  var sessions = data.sessions;
                  var refinedSessions = sessions && sessions.map(function (_ref9) {
                    var __typename = _ref9.__typename,
                        sessionName = _ref9.sessionName,
                        others = _objectWithoutProperties(_ref9, ["__typename", "sessionName"]);

                    return others;
                  });
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                    query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllRanksQuery"],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 203
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
                          lineNumber: 206
                        },
                        __self: this
                      }, "loading...");
                    }
                    {
                      error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        error: error,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 209
                        },
                        __self: this
                      });
                    }
                    var ranks = data.ranks;
                    console.log(ranks);
                    var refinedRanks = ranks && ranks.map(function (_ref11) {
                      var __typename = _ref11.__typename,
                          rankName = _ref11.rankName,
                          rankCode = _ref11.rankCode,
                          others = _objectWithoutProperties(_ref11, ["__typename", "rankName", "rankCode"]);

                      return others;
                    });
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                      query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllExamsQuery"],
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 218
                      },
                      __self: this
                    }, function (_ref12) {
                      var data = _ref12.data,
                          loading = _ref12.loading,
                          error = _ref12.error;
                      {
                        loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 220
                          },
                          __self: this
                        }, "loading...");
                      }
                      {
                        error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                          error: error,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 223
                          },
                          __self: this
                        });
                      }
                      var exams = data.exams;
                      var refinedExams = exams && exams.map(function (_ref13) {
                        var __typename = _ref13.__typename,
                            examName = _ref13.examName,
                            others = _objectWithoutProperties(_ref13, ["__typename", "examName"]);

                        return others;
                      });
                      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
                        mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_6__["createCenterAdminMutation"],
                        variables: _objectSpread({}, _this2.state, {
                          exam: exams && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(refinedExams, examID),
                          rank: ranks && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(refinedRanks, rankID),
                          session: sessions && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(refinedSessions, sessionID),
                          center: center && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(refinedCenter, centerID),
                          authCode: Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["uniqueCodeGen"])(8)
                        }),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 231
                        },
                        __self: this
                      }, function (createCenterAdmin, _ref14) {
                        var loading = _ref14.loading,
                            error = _ref14.error;
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
                          onSubmit:
                          /*#__PURE__*/
                          function () {
                            var _ref15 = _asyncToGenerator(
                            /*#__PURE__*/
                            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                              var res;
                              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      e.preventDefault();
                                      _context.next = 3;
                                      return createCenterAdmin();

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
                              return _ref15.apply(this, arguments);
                            };
                          }(),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 246
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 253
                          },
                          __self: this
                        }, "inscription des Authorites du centre"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                          error: error,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 254
                          },
                          __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
                          disabled: loading,
                          "aria-busy": loading,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 255
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 256
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CenterSelect, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 257
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                          type: "select",
                          id: "regionID",
                          name: "regionID",
                          placeholder: "select a region",
                          value: _this2.state.regionID,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 258
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 266
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
                            lineNumber: 270
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 277
                          },
                          __self: this
                        }, "Choisissez un departement"), division && divisionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                          type: "select",
                          id: "subDivisionID",
                          name: "subDivisionID",
                          value: _this2.state.subDivisionID,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 280
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 287
                          },
                          __self: this
                        }, "choisissez un Arrondissement"), arrondissement && subDivisionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                          type: "select",
                          id: "townID",
                          name: "townID",
                          value: _this2.state.townID,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 290
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 297
                          },
                          __self: this
                        }, "choisissez une Ville"), town && town.map(function (item) {
                          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            key: item.id,
                            value: item.id,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 299
                            },
                            __self: this
                          }, item.townName, "  ");
                        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                          type: "select",
                          id: "centerD",
                          name: "centerID",
                          value: _this2.state.centerID,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 306
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 314
                          },
                          __self: this
                        }, "Choisissez un Centre d'Examen"), center && center.map(function (item) {
                          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            key: item.id,
                            value: item.id,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 316
                            },
                            __self: this
                          }, item.centerName);
                        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OtherSelect, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 321
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                          type: "select",
                          id: "examID",
                          name: "examID",
                          value: _this2.state.examID,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 323
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 331
                          },
                          __self: this
                        }, "Choisissez un Examen"), exams && exams.map(function (item) {
                          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            key: item.id,
                            value: item.id,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 333
                            },
                            __self: this
                          }, item.examName);
                        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                          type: "select",
                          id: "sessionID",
                          name: "sessionID",
                          value: _this2.state.sessionID,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 337
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 344
                          },
                          __self: this
                        }, "Choisissez la Session"), sessions && sessions.map(function (item) {
                          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            key: item.id,
                            value: item.id,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 346
                            },
                            __self: this
                          }, item.sessionName);
                        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                          type: "select",
                          id: "rankID",
                          name: "rankID",
                          value: _this2.state.rankID,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 348
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 355
                          },
                          __self: this
                        }, "Le Rang que vous occupez"), ranks && ranks.map(function (item) {
                          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            key: item.id,
                            value: item.id,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 357
                            },
                            __self: this
                          }, item.rankName, "  ");
                        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                          type: "text",
                          id: "authName",
                          name: "authName",
                          placeholder: "Noms de l'authorite",
                          value: _this2.state.authName,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 361
                          },
                          __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                          type: "text",
                          id: "authPhone",
                          name: "authPhone",
                          placeholder: "No Tel:",
                          value: _this2.state.authPhone,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 370
                          },
                          __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                          type: "text",
                          id: "authMatricule",
                          name: "authMatricule",
                          placeholder: "Matricule",
                          value: _this2.state.authMatricule,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 379
                          },
                          __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                          type: "text",
                          id: "authCNI",
                          name: "authCNI",
                          placeholder: "No CNI",
                          value: _this2.state.authCNI,
                          onChange: _this2.handleChange,
                          required: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 388
                          },
                          __self: this
                        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                          className: "submitButton",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 399
                          },
                          __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                          type: "submit",
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 400
                          },
                          __self: this
                        }, "Valid", loading ? "ation en cours" : "er")))));
                      });
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

  return CenterAdmin;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CenterAdmin);

/***/ })

})
//# sourceMappingURL=newCenterAdmin.js.66e05bf0348cf792f063.hot-update.js.map