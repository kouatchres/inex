webpackHotUpdate("static\\development\\pages\\creates\\newMarks.js",{

/***/ "./src/components/score/MuiMarks.jsx":
/*!*******************************************!*\
  !*** ./src/components/score/MuiMarks.jsx ***!
  \*******************************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\score\\MuiMarks.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import "typeface-roboto";





var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CreateMuiTheme"])();
var StyledDivision = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MuiMarks__StyledDivision",
  componentId: "sc-1jk7bhv-0"
})(["display:grid;grid-template-columns:1fr;text-align:center;margin:0 auto;min-width:52rem;"]);
var CenterSelect = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MuiMarks__CenterSelect",
  componentId: "sc-1jk7bhv-1"
})(["display:block;text-align:center;margin:0 auto;min-width:40rem;"]);
var OtherSelect = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MuiMarks__OtherSelect",
  componentId: "sc-1jk7bhv-2"
})(["display:block;text-align:center;margin:0 auto;min-width:40rem;"]);

var MuiMarks =
/*#__PURE__*/
function (_Component) {
  _inherits(MuiMarks, _Component);

  function MuiMarks() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MuiMarks);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MuiMarks)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      subjectAve: "",
      seriesID: "12",
      examID: "12",
      educTypeID: "12",
      sessionID: "",
      candExamSecretCode: "",
      MuiText: "",
      subjectSeriesID: "ck5thzgfrwmow09352gytkff6"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetForm", function () {
      _this.setState({
        candExamSecretCode: "",
        subjectAve: ""
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeCandVariableObject", function (candCodeValue) {
      var storedCandidate = {
        candExamSecretCode: "".concat(candCodeValue)
      };
      return storedCandidate;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateItemMutation",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, updateMutation) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log("Entering Marks!!");
                _context.next = 4;
                return updateMutation({
                  variables: _objectSpread({}, _this.state)
                });

              case 4:
                res = _context.sent;
                console.log("Marks entered!!");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(MuiMarks, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllEducationTypesQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
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
              lineNumber: 83
            },
            __self: this
          }, "loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          });
        }
        console.log(data);
        var educationTypes = data.educationTypes;
        console.log(educationTypes);
        var educTypeOptions = educationTypes && educationTypes.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: item.id,
            value: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, item.educationTypeName);
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllSeriesOfAnEducationTypeQuery"],
          variables: educationTypes && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(educationTypes, _this2.state.educTypeID),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
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
                lineNumber: 107
              },
              __self: this
            }, "loading...");
          }
          {
            error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            });
          }
          console.log(data);
          var educationType = data.educationType;

          var seriesEducType = _objectSpread({}, educationType);

          var series = seriesEducType.series;
          console.log(series);
          var refinedSeries = series && series.map(function (_ref4) {
            var __typename = _ref4.__typename,
                seriesName = _ref4.seriesName,
                others = _objectWithoutProperties(_ref4, ["__typename", "seriesName"]);

            return others;
          });
          var seriesOptions = series && series.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              key: item.id,
              value: item.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: this
            }, item.seriesName);
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
            query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_8__["getAllSubjectsOfASeriesQuery"],
            variables: series && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(series, _this2.state.seriesID),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
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
                  lineNumber: 135
                },
                __self: this
              }, "loading...");
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
            console.log(data);
            var series = data.series;

            var allEducTypes = _objectSpread({}, series);

            var subjectSeries = allEducTypes.subjectSeries;
            console.log(subjectSeries);
            var refinedSubjectSeries = subjectSeries && subjectSeries.map(function (_ref6) {
              var __typename = _ref6.__typename,
                  subjectName = _ref6.subjectName,
                  subjectCode = _ref6.subjectCode,
                  others = _objectWithoutProperties(_ref6, ["__typename", "subjectName", "subjectCode"]);

              return others;
            });
            var subjectOptions = subjectSeries && subjectSeries.map(function (item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                key: item.id,
                value: item.id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                },
                __self: this
              }, item.subjectName);
            });
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
              mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_6__["updateScoreMutation"],
              variables: _objectSpread({}, _this2.state, {
                subjectSeries: refinedSubjectSeries && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_7__["getSelectedObject"])(refinedSubjectSeries, _this2.state.subjectSeriesID)
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158
              },
              __self: this
            }, function (updateScore, _ref7) {
              var loading = _ref7.loading,
                  error = _ref7.error;
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MuiThemeProvider"], {
                theme: theme,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 167
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Paper"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 168
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
                onSubmit:
                /*#__PURE__*/
                function () {
                  var _ref8 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
                    var res;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            e.preventDefault();
                            _context2.next = 3;
                            return _this2.updateItemMutation(e, updateScore);

                          case 3:
                            res = _context2.sent;

                            _this2.resetForm();

                            console.log(res);

                          case 6:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x3) {
                    return _ref8.apply(this, arguments);
                  };
                }(),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 169
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
                variant: "display1",
                align: "center",
                gutterBottom: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 177
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 178
                },
                __self: this
              }, "Inscrire les notes des candidats")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                error: error,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 180
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
                disabled: loading,
                "aria-busy": loading,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 181
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDivision, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 182
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                type: "select",
                id: "educTypeID",
                name: "educTypeID",
                value: _this2.state.educTypeID,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 183
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 191
                },
                __self: this
              }, "Choisir un Type d'enseignement"), educTypeOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                type: "select",
                id: "seriesID",
                name: "seriesID",
                value: _this2.state.seriesID,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 194
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 202
                },
                __self: this
              }, "Choisir une Serie"), seriesOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
                type: "select",
                id: "subjectSeriesID",
                name: "subjectSeriesID",
                value: _this2.state.subjectSeriesID,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 205
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 213
                },
                __self: this
              }, "Choisir la matiere"), subjectOptions), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                type: "text",
                id: "candExamSecretCode",
                name: "candExamSecretCode",
                placeholder: "Code secret du candidat",
                value: _this2.state.candExamSecretCode,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 216
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                type: "number",
                step: "0.001",
                min: "0.0",
                max: "20.0",
                id: "subjectAve",
                name: "subjectAve",
                placeholder: "Note de la matiere",
                value: _this2.state.subjectAve,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 225
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
                type: "text",
                placeholder: "MuiText",
                name: "MuiText",
                id: "MuiText",
                value: _this2.state.MuiText,
                onChange: _this2.handleChange,
                required: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 237
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "submitButton",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 246
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 247
                },
                __self: this
              }, "Mui Button"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                type: "submit",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 248
                },
                __self: this
              }, "Valid", loading ? "ation en cours" : "er")))))));
            });
          });
        });
      });
    }
  }]);

  return MuiMarks;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MuiMarks);

/***/ })

})
//# sourceMappingURL=newMarks.js.99592524a35320169be3.hot-update.js.map