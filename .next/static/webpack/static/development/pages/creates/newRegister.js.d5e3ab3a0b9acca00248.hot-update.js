webpackHotUpdate("static\\development\\pages\\creates\\newRegister.js",{

/***/ "./src/components/registration/Registration.jsx":
/*!******************************************************!*\
  !*** ./src/components/registration/Registration.jsx ***!
  \******************************************************/
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

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\registration\\Registration.jsx";

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









var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Registration__StyledDivision",
  componentId: "sc-797ej-0"
})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:2rem;text-align:center;margin:0 auto;width:55vw;"]);
var CenterSelect = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Registration__CenterSelect",
  componentId: "sc-797ej-1"
})(["display:block;text-align:center;margin:0 auto;"]);
var OtherSelect = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Registration__OtherSelect",
  componentId: "sc-797ej-2"
})(["display:block;text-align:center;margin:0 auto;"]);

var Registration =
/*#__PURE__*/
function (_Component) {
  _inherits(Registration, _Component);

  function Registration() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Registration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Registration)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      candCode: "12mn",
      divisionID: "12",
      subDivisionID: "12",
      regionID: "12",
      centerID: "12",
      townID: "12",
      sessionID: "12",
      seriesID: "12",
      examID: "12",
      educTypeID: "12",
      exam: "",
      series: "",
      session: "",
      center: "",
      candExamSession: "",
      candidate: "",
      subjects: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === "number" ? parseInt(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetForm", function () {
      _this.setState({
        candCode: ""
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedSubDivision", function (dataSource) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedTown", function (dataSource) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedCenter", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempCenter = _toConsumableArray(dataSource); // get the selected division object


        var selectedCenter = tempCenter.find(function (item) {
          return item.id === _this.state.centerID;
        });
        console.log(selectedCenter);
        return selectedCenter;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedExam", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempExam = _toConsumableArray(dataSource); // get the selected division object


        var selectedExam = tempExam.find(function (item) {
          return item.id === _this.state.examID;
        });
        console.log(selectedExam);
        return selectedExam;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedSession", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempSession = _toConsumableArray(dataSource); // get the selected division object


        var selectedSession = tempSession.find(function (item) {
          return item.id === _this.state.sessionID;
        });
        console.log(selectedSession);
        return selectedSession;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSubjects", function (subjectList) {
      _this.setState({
        subjects: subjectList
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedSeries", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempSeries = _toConsumableArray(dataSource); // get the selected division object


        var selectedSeries = tempSeries.find(function (item) {
          return item.id === _this.state.seriesID;
        });
        console.log(selectedSeries);
        return selectedSeries;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedEducType", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempEducType = _toConsumableArray(dataSource); // get the selected division object


        var selectedEducType = tempEducType.find(function (item) {
          return item.id === _this.state.educTypeID;
        });
        console.log(selectedEducType);
        return selectedEducType;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeCandVariableObject", function (candCodeValue) {
      var storedCandidate = {
        "candCode": "".concat(candCodeValue)
      };
      return storedCandidate;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedCandidate", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempCandidates = _toConsumableArray(dataSource); // get the selected region object


        var selectedCandidate = tempCandidates.find(function (item) {
          return item.candCode === _this.state.candCode;
        });
        console.log("getting selected region");
        console.log(selectedCandidate);
        return selectedCandidate;
      }
    });

    return _this;
  }

  _createClass(Registration, [{
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
          seriesID = _this$state.seriesID,
          candCode = _this$state.candCode;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllRegionsQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
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
              lineNumber: 225
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 228
            },
            __self: this
          });
        }
        var regions = data.regions;
        var anyRegion = regions[0]; //prepare data for the region select options

        var regionsOptions = regions && regions.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: item.id,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
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
            lineNumber: 243
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
                lineNumber: 248
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 251
              },
              __self: this
            });
          }
          var province = data.region;
          var division = province.division;
          var anyDivision = division[0];
          var divisionsOptions = division && division.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              value: item.id,
              key: item.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 259
              },
              __self: this
            }, item.divName);
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getSubDivisionsOfADivisionQuery"],
            variables: division && (Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(division, divisionID) || anyDivision),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 266
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
                  lineNumber: 271
                },
                __self: this
              }, "Loading...");
            }
            {
              error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 274
                },
                __self: this
              });
            }
            var division = data.division;
            var arrondissement = division.subDivision;
            console.log(arrondissement);
            var subDivisionsOptions = arrondissement && arrondissement.map(function (item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                value: item.id,
                key: item.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 280
                },
                __self: this
              }, item.subDivName);
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
              query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getTownsOfASubDivisionQuery"],
              variables: arrondissement && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(arrondissement, subDivisionID),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 287
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
                    lineNumber: 293
                  },
                  __self: this
                }, "Loding...");
              }
              {
                error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  error: error,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 296
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
                variables: town && _this2.getSelectedObject(town, townID),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 307
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
                      lineNumber: 314
                    },
                    __self: this
                  }, "Loding...");
                }
                {
                  error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    error: error,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 317
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
                  query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllExamsQuery"],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 325
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
                        lineNumber: 328
                      },
                      __self: this
                    }, "loading...");
                  }
                  {
                    error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      error: error,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 331
                      },
                      __self: this
                    });
                  }
                  var exams = data.exams;
                  console.log(exams);
                  var refinedExams = exams && exams.map(function (_ref9) {
                    var __typename = _ref9.__typename,
                        examName = _ref9.examName,
                        others = _objectWithoutProperties(_ref9, ["__typename", "examName"]);

                    return others;
                  });
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                    query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllEducTypesOfAnExam"],
                    variables: exams && _this2.getSelectedObject(exams, examID),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 339
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
                          lineNumber: 342
                        },
                        __self: this
                      }, "loading...");
                    }
                    {
                      error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        error: error,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 345
                        },
                        __self: this
                      });
                    }
                    console.log(data);
                    var exam = data.exam;

                    var educTypeList = _objectSpread({}, exam);

                    var educationType = educTypeList.educationType;
                    console.log(educationType);
                    var educTypeOptions = educationType && educationType.map(function (item) {
                      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                        key: item.id,
                        value: item.id,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 355
                        },
                        __self: this
                      }, item.educationTypeName);
                    });
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                      query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllSeriesOfAnEducationTypeQuery"],
                      variables: educationType && Object(educationType, examID, educTypeID),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 361
                      },
                      __self: this
                    }, function (_ref11) {
                      var data = _ref11.data,
                          loading = _ref11.loading,
                          error = _ref11.error;
                      {
                        loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 367
                          },
                          __self: this
                        }, "loading...");
                      }
                      {
                        error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                          error: error,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 370
                          },
                          __self: this
                        });
                      }
                      console.log(data);
                      var educationType = data.educationType;

                      var seriesEducType = _objectSpread({}, educationType);

                      var series = seriesEducType.series;
                      console.log(series);
                      var refinedSeries = series && series.map(function (_ref12) {
                        var __typename = _ref12.__typename,
                            seriesName = _ref12.seriesName,
                            others = _objectWithoutProperties(_ref12, ["__typename", "seriesName"]);

                        return others;
                      });
                      var seriesOptions = series && series.map(function (item) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                          key: item.id,
                          value: item.id,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 384
                          },
                          __self: this
                        }, item.seriesName);
                      });
                      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllSessionsQuery"],
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 390
                        },
                        __self: this
                      }, function (_ref13) {
                        var data = _ref13.data,
                            loading = _ref13.loading,
                            error = _ref13.error;
                        {
                          loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 393
                            },
                            __self: this
                          }, "loading...");
                        }
                        {
                          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            error: error,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 396
                            },
                            __self: this
                          });
                        }
                        var sessions = data.sessions;
                        var refinedSessions = sessions && sessions.map(function (_ref14) {
                          var __typename = _ref14.__typename,
                              sessionName = _ref14.sessionName,
                              others = _objectWithoutProperties(_ref14, ["__typename", "sessionName"]);

                          return others;
                        });
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
                          mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_6__["createRegistrationMutation"],
                          variables: _objectSpread({}, _this2.state, {
                            series: series && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(refinedSeries, seriesID),
                            exam: exams && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(refinedExams, examID),
                            session: sessions && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(refinedSessions, sessionID),
                            center: center && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(refinedCenter, centerID),
                            candidate: _this2.makeCandVariableObject(_this2.state.candCode)
                          }),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 402
                          },
                          __self: this
                        }, function (createCenterAdmin, _ref15) {
                          var loading = _ref15.loading,
                              error = _ref15.error;
                          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            onSubmit:
                            /*#__PURE__*/
                            function () {
                              var _ref16 = _asyncToGenerator(
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
                                return _ref16.apply(this, arguments);
                              };
                            }(),
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 414
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 421
                            },
                            __self: this
                          }, "Inscription a l'Examen"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            error: error,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 422
                            },
                            __self: this
                          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
                            disabled: loading,
                            "aria-busy": loading,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 423
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 424
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CenterSelect, {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 425
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
                              lineNumber: 426
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 434
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
                              lineNumber: 438
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 445
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
                              lineNumber: 448
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 455
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
                              lineNumber: 458
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 465
                            },
                            __self: this
                          }, "choisissez une Ville"), town && town.map(function (item) {
                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                              key: item.id,
                              value: item.id,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 467
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
                              lineNumber: 474
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 482
                            },
                            __self: this
                          }, "Choisissez un Centre d'Examen"), center && center.map(function (item) {
                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                              key: item.id,
                              value: item.id,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 484
                              },
                              __self: this
                            }, item.centerName);
                          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OtherSelect, {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 489
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
                              lineNumber: 491
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 499
                            },
                            __self: this
                          }, "Choisissez un Examen"), exams && exams.map(function (item) {
                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                              key: item.id,
                              value: item.id,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 501
                              },
                              __self: this
                            }, item.examName);
                          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                            type: "select",
                            id: "educTypeID",
                            name: "educTypeID",
                            value: _this2.state.educTypeID,
                            onChange: _this2.handleChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 503
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 511
                            },
                            __self: this
                          }, "Choisissez un Type D'enseignement"), educTypeOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                            type: "select",
                            id: "seriesID",
                            name: "seriesID",
                            value: _this2.state.seriesID,
                            onChange: _this2.handleChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 515
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 523
                            },
                            __self: this
                          }, "Choisissez une Serie"), seriesOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                            type: "select",
                            id: "sessionID",
                            name: "sessionID",
                            value: _this2.state.sessionID,
                            onChange: _this2.handleChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 527
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 534
                            },
                            __self: this
                          }, "Choisissez la Session"), sessions && sessions.map(function (item) {
                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                              key: item.id,
                              value: item.id,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 536
                              },
                              __self: this
                            }, item.sessionName);
                          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            type: "text",
                            id: "candCode",
                            name: "candCode",
                            placeholder: "Code Candidat",
                            value: _this2.state.candCode,
                            onChange: _this2.handleChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 539
                            },
                            __self: this
                          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                            className: "submitButton",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 549
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                            type: "submit",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 550
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
      });
    }
  }]);

  return Registration;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ })

})
//# sourceMappingURL=newRegister.js.d5e3ab3a0b9acca00248.hot-update.js.map