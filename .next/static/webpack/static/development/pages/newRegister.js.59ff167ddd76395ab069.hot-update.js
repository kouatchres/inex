webpackHotUpdate("static\\development\\pages\\newRegister.js",{

/***/ "./src/components/Registrations.jsx":
/*!******************************************!*\
  !*** ./src/components/Registrations.jsx ***!
  \******************************************/
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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./src/components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./src/data.jsx");

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\Registrations.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_REGISTRATION_MUTATION(\n      $exam: ExamWhereUniqueInput!,\n      $series: SeriesWhereUniqueInput!, \n      $candidate: CandidateWhereUniqueInput!, \n      $session: SessionWhereUniqueInput!, \n      $center: CenterWhereUniqueInput!,\n      ) {\n    createRegistrations( \n        exam:$exam,\n        series: $series,\n        series: $series,\n         candidate: $candidate,\n          center: $center\n          ) {\n      id\n      series {\n        seriesName\n      }\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  query GET_CENTERS_OF_A_TOWN_QUERY($id: ID!) {\n    town(id: $id) {\n      townName\n      id\n      center(orderBy: centerName_ASC) {\n        centerName\n        centerCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  query GET_TOWNS_OF_A_SUBDIVISIONS_QUERY($id: ID!) {\n    subDivision(id: $id) {\n      subDivName\n      id\n      town(orderBy: townName_ASC) {\n        townName\n        townCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  query GET_SUBDIVISIONS_OF_A_DIVSION_QUERY($id: ID!) {\n    division(id: $id) {\n      divName\n      id\n      subDivision(orderBy: subDivName_ASC) {\n        subDivName\n        subDivCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  query GET_DIVISIONS_OF_A_REGION_QUERY($id: ID!) {\n    region(id: $id) {\n      regName\n      id\n      division(orderBy: divName_ASC) {\n        divName\n        divCode\n        id\n      }\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_DIVISIONS_QUERY {\n    divisions(orderBy: divName_ASC) {\n      divName\n      divCode\n      id\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_SESSIONS_QUERY {\n    sessions(orderBy: createdAt_DESC) {\n      createdAt\n      sessionName\n      sessionCode\n      id\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_EXAMS_QUERY {\n    exams(orderBy: examName_ASC ) {\n      examName\n      examCode\n      id\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nquery GET_ALL_SERIES_OF_EDUCATION_TYPE_QUERY($id: ID!){\n  educationType(id:$id){\n    id\n    educationTypeName\n     series(orderBy: seriesName_ASC){\n       seriesName\n       seriesCode\n     }\n  }\n}\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_EDUCATION_TYPES_QUERY {\n    educationTypes {\n      educationTypeName\n      educationTypeCode\n      id\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_SERIES_QUERY {\n    serieses(orderBy: seriesName_ASC) {\n      seriesName\n      seriesCode\n      id\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query GET_ALL_REGIONS_QUERY {\n    regions(orderBy: regName_DESC) {\n    regName\n    regCode\n    id\n  }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Registrations__StyledDivision",
  componentId: "h4cgwm-0"
})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:2rem;text-align:center;margin:0 auto;min-width:82rem;"]);
var CenterSelect = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Registrations__CenterSelect",
  componentId: "h4cgwm-1"
})(["display:block;text-align:center;margin:0 auto;min-width:40rem;"]);
var OtherSelect = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Registrations__OtherSelect",
  componentId: "h4cgwm-2"
})(["display:block;text-align:center;margin:0 auto;min-width:40rem;"]);
var GET_ALL_REGIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var GET_ALL_SERIES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());
var GET_ALL_EDUCATION_TYPES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject3());
var GET_ALL_SERIES_OF_EDUCATION_TYPE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject4());
var GET_ALL_EXAMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject5());
var GET_ALL_SESSIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject6());
var GET_ALL_DIVISIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject7());
var GET_DIVISIONS_OF_A_REGION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject8());
var GET_SUBDIVISIONS_OF_A_DIVSION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject9());
var GET_TOWNS_OF_A_SUBDIVISIONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject10());
var GET_CENTERS_OF_A_TOWN_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject11());
var CREATE_REGISTRATION_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject12());

var Registrations =
/*#__PURE__*/
function (_Component) {
  _inherits(Registrations, _Component);

  function Registrations() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Registrations);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Registrations)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      townName: "",
      townCode: "",
      townID: "12",
      divisionID: "12",
      subDivisionID: "12",
      regionID: "12",
      centerID: "12",
      examID: "12",
      sessionID: "12",
      seriesID: "12",
      educTypeID: "12",
      candidateID: "12",
      region: _data__WEBPACK_IMPORTED_MODULE_7__["storeRegion"],
      division: _data__WEBPACK_IMPORTED_MODULE_7__["storedDivision"],
      subDiv: _data__WEBPACK_IMPORTED_MODULE_7__["storedSubDivision"],
      town: _data__WEBPACK_IMPORTED_MODULE_7__["storedTown"],
      center: _data__WEBPACK_IMPORTED_MODULE_7__["storedCenter"],
      exam: _data__WEBPACK_IMPORTED_MODULE_7__["storedExam"],
      session: _data__WEBPACK_IMPORTED_MODULE_7__["storedSession"],
      series: _data__WEBPACK_IMPORTED_MODULE_7__["storedSeries"],
      educationType: _data__WEBPACK_IMPORTED_MODULE_7__["storedEducType"],
      candidate: _data__WEBPACK_IMPORTED_MODULE_7__["storedCandidate"],
      candidateRegistrationID: "125"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === "number" ? parseInt(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedRegion", function (dataSource) {
      // 1 copy the data source
      if (dataSource.length > 0) {
        var tempRegions = _toConsumableArray(dataSource); // get the selected region object


        var selectedRegion = tempRegions.find(function (item) {
          return item.id === _this.state.regionID;
        });
        console.log("getting selected region");
        console.log(selectedRegion);
        return selectedRegion;
      }
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedSubDivision", function (dataSource) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedTown", function (dataSource) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedCenter", function (dataSource) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedExam", function (dataSource) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedSession", function (dataSource) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedSeries", function (dataSource) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getselectedEducType", function (dataSource) {
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

    return _this;
  }

  _createClass(Registrations, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_ALL_REGIONS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
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
              lineNumber: 344
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 347
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
              lineNumber: 353
            },
            __self: this
          }, item.regName);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: GET_DIVISIONS_OF_A_REGION_QUERY,
          variables: _this2.getselectedRegion(regions) || anyRegion,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 360
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
                lineNumber: 365
              },
              __self: this
            }, "Loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 368
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
                lineNumber: 376
              },
              __self: this
            }, item.divName);
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: GET_SUBDIVISIONS_OF_A_DIVSION_QUERY,
            variables: division && (_this2.getselectedDivision(division) || anyDivision),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 383
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
                  lineNumber: 388
                },
                __self: this
              }, "Loading...");
            }
            {
              error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 391
                },
                __self: this
              });
            }
            var departement = data.division;
            var subDivision = departement.subDivision;
            var subDivisionsOptions = subDivision.map(function (item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                value: item.id,
                key: item.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 396
                },
                __self: this
              }, item.subDivName);
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
              query: GET_TOWNS_OF_A_SUBDIVISIONS_QUERY,
              variables: _this2.getselectedSubDivision(subDivision),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 404
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
                    lineNumber: 409
                  },
                  __self: this
                }, "Loding...");
              }
              {
                error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  error: error,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 412
                  },
                  __self: this
                });
              }
              console.log("these are the towns of the selected Sub division");
              var village = data.subDivision;

              var allTowns = _objectSpread({}, village);

              var town = allTowns.town;
              console.log(data);
              console.log(town);
              {
                /* const villesOptions =allTowns.town.map(item => (
                <option value={item.id} key={item.id}>
                {item.townName}
                </option>
                )); */
              }
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                query: GET_CENTERS_OF_A_TOWN_QUERY,
                variables: town && _this2.getselectedTown(town),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 430
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
                      lineNumber: 436
                    },
                    __self: this
                  }, "Loding...");
                }
                {
                  error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    error: error,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 439
                    },
                    __self: this
                  });
                }
                var ville = data.town;

                var theTowns = _objectSpread({}, ville);

                var center = theTowns.center;
                console.log(center);
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                  query: GET_ALL_SESSIONS_QUERY,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 448
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
                        lineNumber: 451
                      },
                      __self: this
                    }, "loading...");
                  }
                  {
                    error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                      error: error,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 454
                      },
                      __self: this
                    });
                  }
                  var sessions = data.sessions;
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                    query: GET_ALL_EDUCATION_TYPES_QUERY,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 459
                    },
                    __self: this
                  }, function (_ref7) {
                    var data = _ref7.data,
                        loading = _ref7.loading,
                        error = _ref7.error;
                    {
                      loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 462
                        },
                        __self: this
                      }, "loading...");
                    }
                    {
                      error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        error: error,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 465
                        },
                        __self: this
                      });
                    }
                    var educationTypes = data.educationTypes;
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                      query: GET_ALL_SERIES_OF_EDUCATION_TYPE_QUERY,
                      variables: educationTypes && _this2.getselectedEducType(educationTypes),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 471
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
                            lineNumber: 476
                          },
                          __self: this
                        }, "loading...");
                      }
                      {
                        error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                          error: error,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 479
                          },
                          __self: this
                        });
                      }
                      var educationType = data.educationType;

                      var seriesEducType = _objectSpread({}, educationType);

                      var series = seriesEducType.series;
                      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
                        query: GET_ALL_EXAMS_QUERY,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 486
                        },
                        __self: this
                      }, function (_ref9) {
                        var data = _ref9.data,
                            loading = _ref9.loading,
                            error = _ref9.error;
                        {
                          loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 488
                            },
                            __self: this
                          }, "loading...");
                        }
                        {
                          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            error: error,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 491
                            },
                            __self: this
                          });
                        }
                        var exams = data.exams;
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
                          mutation: CREATE_REGISTRATION_MUTATION,
                          variables: _objectSpread({}, _this2.state),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 499
                          },
                          __self: this
                        }, function (createRegistrations, _ref10) {
                          var loading = _ref10.loading,
                              error = _ref10.error;
                          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            onSubmit:
                            /*#__PURE__*/
                            function () {
                              var _ref11 = _asyncToGenerator(
                              /*#__PURE__*/
                              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                                var res;
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        e.preventDefault();
                                        _context.next = 3;
                                        return createRegistrations();

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
                                return _ref11.apply(this, arguments);
                              };
                            }(),
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 506
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 512
                            },
                            __self: this
                          }, "S'inscrire a un examen"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            error: error,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 513
                            },
                            __self: this
                          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
                            disabled: loading,
                            "aria-busy": loading,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 514
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 515
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CenterSelect, {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 516
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
                              lineNumber: 517
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 525
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
                              lineNumber: 529
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 536
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
                              lineNumber: 539
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 546
                            },
                            __self: this
                          }, "choisissez un Arrondissement"), subDivisionsOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                            type: "select",
                            id: "townID",
                            name: "townID",
                            value: _this2.state.townID,
                            onChange: _this2.handleChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 549
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 556
                            },
                            __self: this
                          }, "choisissez une Ville")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                            type: "select",
                            id: "centerD",
                            name: "centerID",
                            value: _this2.state.centerID,
                            onChange: _this2.handleChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 562
                            },
                            __self: this
                          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OtherSelect, {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 573
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
                              lineNumber: 575
                            },
                            __self: this
                          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                            type: "select",
                            id: "sessionID",
                            name: "sessionID",
                            value: _this2.state.sessionID,
                            onChange: _this2.handleChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 588
                            },
                            __self: this
                          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                            type: "select",
                            id: "educTypeID",
                            name: "educTypeID",
                            value: _this2.state.educTypeID,
                            onChange: _this2.handleChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 599
                            },
                            __self: this
                          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                            type: "select",
                            id: "seriesID",
                            name: "seriesID",
                            value: _this2.state.seriesID,
                            onChange: _this2.handleChange,
                            required: true,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 611
                            },
                            __self: this
                          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                            className: "submitButton",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 625
                            },
                            __self: this
                          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                            type: "submit",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 626
                            },
                            __self: this
                          }, "Submit", loading ? "ting" : "")))));
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

  return Registrations;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Registrations);

/***/ })

})
//# sourceMappingURL=newRegister.js.59ff167ddd76395ab069.hot-update.js.map