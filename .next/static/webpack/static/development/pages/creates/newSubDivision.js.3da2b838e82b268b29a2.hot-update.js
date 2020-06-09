webpackHotUpdate("static\\development\\pages\\creates\\newSubDivision.js",{

/***/ "./src/components/subDivision/SubDivHooks.jsx":
/*!****************************************************!*\
  !*** ./src/components/subDivision/SubDivHooks.jsx ***!
  \****************************************************/
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
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");

var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\subDivision\\SubDivHooks.jsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SubDivHooks__InputGroup",
  componentId: "sc-112mmkw-0"
})(["display:flex;flex-direction:column;min-width:13rem;margin:0 1rem;"]);
var AllControls = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SubDivHooks__AllControls",
  componentId: "sc-112mmkw-1"
})(["display:flex;flex-direction:column;"]);
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_10__["object"]().shape({
  division: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().required("Choix Du type d'Enseignement Obligatoire"),
  subDivName: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().required("Choix de la matière Obligatoire"),
  subDivCode: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().required("Choix de la Séries Obligatoire")
});

var SubDivHooks = function SubDivHooks() {
  var initialValues = {
    subDivName: "",
    subDivCode: "",
    division: ""
  };

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_6__["default"])({
    regionID: ""
  }),
      _useForm2 = _slicedToArray(_useForm, 3),
      state = _useForm2[0],
      setState = _useForm2[1],
      handleReactSelectChange = _useForm2[2];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_11__["getAllCountrysQuery"]),
      data = _useQuery.data,
      loadingCount = _useQuery.loading,
      errorCount = _useQuery.error;

  {
    loadingCount && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Loading Countries from DB...");
  }
  {
    errorCount && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
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

  var _useQuery2 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_11__["getAllRegionsOfACountryQuery"], {
    variables: {
      id: id
    }
  }),
      dataCountry = _useQuery2.data,
      loadingCountry = _useQuery2.loadingCountry,
      errCountry = _useQuery2.errCountry;

  {
    loadingCountry && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "loading...");
  }
  {
    errCountry && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: errCountry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
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

  var _useQuery3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_11__["getDivisionsOfARegionQuery"], {
    skip: !state.regionID,
    variables: {
      id: state.regionID
    }
  }),
      dataRegion = _useQuery3.data,
      loadingRegion = _useQuery3.loadingRegion,
      errRegion = _useQuery3.errRegion;

  {
    loadingRegion && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "loading...");
  }
  {
    errRegion && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: errRegion,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
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

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_13__["createSubDivisionMutation"], {
    refetchQueries: [{
      getAllSubDivisionsQueries: getAllSubDivisionsQueries
    }]
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      createSubDivision = _useMutation2[0],
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
                return createSubDivision({
                  variables: _objectSpread({}, values, {
                    division: values.division && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_12__["getObjectFromID"])(values.division.value)
                  })
                });

              case 2:
                res = _context.sent;
                setTimeout(function () {
                  console.log(JSON.stringify(values, null, 2));
                  console.log(res);
                  actions.resetForm(true);
                  actions.setSubmitting(false);
                }, 400);

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
      lineNumber: 93
    },
    __self: this
  }, function (_ref2) {
    var values = _ref2.values,
        setFieldValue = _ref2.setFieldValue,
        isSubmitting = _ref2.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_3__["MinimStyledPage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Nouvel arrondissement"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["StyledForm"], {
      disabled: isSubmitting,
      "aria-busy": isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AllControls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
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
        lineNumber: 120
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onChange: function onChange(value) {
        return setFieldValue('division', value);
      },
      name: "division",
      styles: _utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["customStyle"],
      placeholder: "Le D\xE9partement",
      options: getDivOptions,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["SygexInput"], {
      name: "subDivName",
      type: "text",
      label: "Lib\xE9ll\xE9 de l'arrondissement",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["SygexInput"], {
      name: "subDivCode",
      type: "text",
      label: "Code de l'arrondissement",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["ButtonStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_8__["StyledButton"], {
      type: "submit",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Valid", isSubmitting ? 'ation en cours' : 'er'))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SubDivHooks);

/***/ })

})
//# sourceMappingURL=newSubDivision.js.3da2b838e82b268b29a2.hot-update.js.map