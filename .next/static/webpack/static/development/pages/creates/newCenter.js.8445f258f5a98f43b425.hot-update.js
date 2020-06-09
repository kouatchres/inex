webpackHotUpdate("static\\development\\pages\\creates\\newCenter.js",{

/***/ "./src/components/center/NewCenterHooks.jsx":
/*!**************************************************!*\
  !*** ./src/components/center/NewCenterHooks.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useForm */ "./src/components/utils/useForm.jsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/FormInputs */ "./src/components/utils/FormInputs.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");

var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\center\\NewCenterHooks.jsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "NewCenterHooks__InputGroup",
  componentId: "juvr68-0"
})(["display:flex;flex-direction:column;min-width:13rem;margin:0 1rem;"]);
var AllControls = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "NewCenterHooks__AllControls",
  componentId: "juvr68-1"
})(["display:flex;flex-direction:column;"]);
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_10__["object"]().shape({
  centerName: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().required("Nom du Centre Obligatoire"),
  centerCode: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().required("Code centre Obligatoire"),
  centerNumber: yup__WEBPACK_IMPORTED_MODULE_10__["number"]().min(1, "Numéro centre du doit etre Positif").required("Numéro centre Obligatoire")
});

var NewCenterHooks = function NewCenterHooks() {
  var initialValues = {
    centerName: "",
    centerCode: "",
    town: ""
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_6__["default"])({
    regionID: "",
    divisionID: "",
    subDivID: ""
  }),
      _useForm2 = _slicedToArray(_useForm, 3),
      state = _useForm2[0],
      setState = _useForm2[1],
      handleReactSelectChange = _useForm2[2];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_13__["getAllCountrysQuery"]),
      data = _useQuery.data,
      loadingCount = _useQuery.loading,
      errorCount = _useQuery.error;

  {
    loadingCount && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Loading Countries from DB...");
  }
  {
    errorCount && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    });
  }

  var _data = _objectSpread({}, data),
      countries = _data.countries;

  console.log(countries);
  var reducedCountries = countries && countries.reduce(function (item) {
    return item;
  });
  console.log(reducedCountries);

  var _reducedCountries = _objectSpread({}, reducedCountries),
      id = _reducedCountries.id;

  console.log(id);

  var _useQuery2 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_13__["getAllRegionsOfACountryQuery"], {
    variables: {
      id: id
    }
  }),
      dataCountry = _useQuery2.data,
      loadingCountry = _useQuery2.loading,
      errCountry = _useQuery2.error;

  {
    loadingCountry && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "loading...");
  }
  {
    errCountry && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: errCountry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    });
  }
  console.log(dataCountry);
  var getCountry = dataCountry && dataCountry.country;
  console.log(getCountry);

  var _getCountry = _objectSpread({}, getCountry),
      region = _getCountry.region;

  var getRegionsOptions = region && region.map(function (item) {
    return {
      value: item.id,
      label: item.regName
    };
  });
  console.log(state.regionID);

  var _useQuery3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_13__["getDivisionsOfARegionQuery"], {
    skip: !state.regionID,
    variables: {
      id: state.regionID
    }
  }),
      dataRegion = _useQuery3.data,
      loadingRegion = _useQuery3.loading,
      errRegion = _useQuery3.error;

  {
    loadingRegion && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "loading...");
  }
  {
    errRegion && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: errRegion,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    });
  }
  console.log(dataRegion);
  var getRegion = dataRegion && dataRegion.region;

  var _getRegion = _objectSpread({}, getRegion),
      division = _getRegion.division;

  console.log(division);
  var getDivOptions = division && division.map(function (item) {
    return {
      value: item.id,
      label: item.divName
    };
  });
  console.log(state.divisionID);

  var _useQuery4 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_13__["getSubDivisionsOfADivisionQuery"], {
    skip: !state.divisionID,
    variables: {
      id: state.divisionID
    }
  }),
      dataDivision = _useQuery4.data,
      loadingDivision = _useQuery4.loading,
      errDivision = _useQuery4.error;

  {
    loadingDivision && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "loading...");
  }
  {
    errDivision && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: errDivision,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    });
  }
  console.log(dataDivision);
  var getDivision = dataDivision && dataDivision.division;

  var _getDivision = _objectSpread({}, getDivision),
      subDivision = _getDivision.subDivision;

  console.log(subDivision);
  var getSubDivOptions = subDivision && subDivision.map(function (item) {
    return {
      value: item.id,
      label: item.subDivName
    };
  });

  var _useQuery5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_13__["getTownsOfASubDivisionQuery"], {
    skip: !state.subDivID,
    variables: {
      id: state.subDivID
    }
  }),
      dataSubDivision = _useQuery5.data,
      loadingSubDivision = _useQuery5.loading,
      errSubDivision = _useQuery5.error;

  {
    loadingSubDivision && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "loading...");
  }
  {
    errSubDivision && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: errSubDivision,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    });
  }
  console.log(dataSubDivision);
  var getSubDivision = dataSubDivision && dataSubDivision.subDivision;

  var _getSubDivision = _objectSpread({}, getSubDivision),
      town = _getSubDivision.town;

  console.log(town);
  var getTownOptions = town && town.map(function (item) {
    return {
      value: item.id,
      label: item.townName
    };
  });

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_11__["createCenterMutation"], {}),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      createCenter = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    method: "POST",
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, actions, setSubmitting, resetForm) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return createCenter({
                  variables: _objectSpread({}, values, {
                    centerSecretCode: Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_12__["uniqueCodeGen"])(18),
                    town: values.town && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_12__["getObjectFromID"])(values.town.value)
                  })
                });

              case 2:
                res = _context.sent;
                setTimeout(function () {
                  console.log(JSON.stringify(values, null, 2));
                  console.log(res);
                  actions.resetForm(true);
                  actions.setSubmitting(false);
                }, 200);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, function (_ref2) {
    var values = _ref2.values,
        setFieldValue = _ref2.setFieldValue,
        isSubmitting = _ref2.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_3__["MinimStyledPage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "Nouveau Centre"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["StyledForm"], {
      disabled: isSubmitting,
      "aria-busy": isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AllControls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onChange: handleReactSelectChange,
      name: "regionID",
      styles: _utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["customStyle"],
      placeholder: "La Région",
      options: getRegionsOptions,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onChange: handleReactSelectChange,
      name: "divisionID",
      styles: _utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["customStyle"],
      placeholder: "Le Département",
      options: getDivOptions,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onChange: handleReactSelectChange,
      name: "subDivID",
      styles: _utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["customStyle"],
      placeholder: "L'Arrondissement",
      options: getSubDivOptions,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onChange: function onChange(value) {
        return setFieldValue('town', value);
      },
      name: "town",
      styles: _utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["customStyle"],
      placeholder: "La Ville",
      options: getTownOptions,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["SygexInput"], {
      name: "centerName",
      type: "text",
      label: "Lib\xE9ll\xE9 du centre",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["SygexInput"], {
      name: "centerCode",
      type: "text",
      label: "Nom Court du centre",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["SygexInput"], {
      name: "centerNumber",
      type: "number",
      label: "Code Num\xE9rique du centre",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["ButtonStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["StyledButton"], {
      type: "submit",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "Valid", isSubmitting ? 'ation en cours' : 'er'))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewCenterHooks);

/***/ })

})
//# sourceMappingURL=newCenter.js.8445f258f5a98f43b425.hot-update.js.map