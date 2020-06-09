webpackHotUpdate("static\\development\\pages\\creates\\newDivision.js",{

/***/ "./src/components/division/NewDivisionHooks.jsx":
/*!******************************************************!*\
  !*** ./src/components/division/NewDivisionHooks.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/FormInputs */ "./src/components/utils/FormInputs.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");

var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\division\\NewDivisionHooks.jsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "NewDivisionHooks__InputGroup",
  componentId: "sc-2paw25-0"
})(["display:flex;flex-direction:column;margin:0 1rem;"]);
var AllControls = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "NewDivisionHooks__AllControls",
  componentId: "sc-2paw25-1"
})(["display:flex;flex-direction:column;"]);
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
  divName: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Nom Département Obligatoire'),
  divCode: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Code Département Obligatoire'),
  region: yup__WEBPACK_IMPORTED_MODULE_8__["object"]().required('Région Obligatoire')
});

var NewDivisionHooks = function NewDivisionHooks() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__["getAllCountrysQuery"]),
      data = _useQuery.data,
      loadingCount = _useQuery.loading,
      errorCount = _useQuery.error;

  {
    loadingCount && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Loading Countries from DB...");
  }
  {
    errorCount && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
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
  var refinedCountry = Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__["removeTypename"])(reducedCountries);
  console.log(refinedCountry);

  var _refinedCountry = _objectSpread({}, refinedCountry),
      id = _refinedCountry.id;

  console.log(id);

  var _useQuery2 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_10__["getAllRegionsOfACountryQuery"], {
    variables: {
      id: id
    }
  }),
      dataRegions = _useQuery2.data,
      loadingReg = _useQuery2.loading,
      errorReg = _useQuery2.error;

  {
    loadingReg && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Loading regions from DB...");
  }
  {
    errorReg && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: errorReg,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    });
  }
  var getCountry = dataRegions && dataRegions.country;

  var _getCountry = _objectSpread({}, getCountry),
      region = _getCountry.region;

  console.log(dataRegions);
  var getRegionsOptions = region && region.map(function (item) {
    return {
      value: item.id,
      label: item.regName
    };
  });

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_12__["createDivisionMutation"], {
    refetchQueries: ["getAllDivisionsQuery"]
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      createDivision = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    method: "POST",
    initialValues: {
      divName: "",
      divCode: "",
      region: ""
    },
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
                return createDivision({
                  variables: _objectSpread({}, values, {
                    region: values.region && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__["getObjectFromID"])(values.region.value)
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
      lineNumber: 72
    },
    __self: this
  }, function (_ref2) {
    var setFieldValue = _ref2.setFieldValue;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_2__["MinimStyledPage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Nouveau D\xE9partement"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["StyledForm"], {
      disabled: loading,
      "aria-busy": loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AllControls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
      options: getRegionsOptions,
      name: "region",
      onChange: function onChange(value) {
        return setFieldValue('region', value);
      },
      styles: _utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["customStyle"],
      placeholder: "la R\xE9gion",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "divName",
      type: "text",
      label: "Nom D\xE9partement",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["SygexInput"], {
      name: "divCode",
      type: "text",
      label: "Code D\xE9partement",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["ButtonStyled"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_6__["StyledButton"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Valid", loading ? 'ation en cours' : 'er'))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewDivisionHooks);

/***/ })

})
//# sourceMappingURL=newDivision.js.de180f7071e949334c42.hot-update.js.map