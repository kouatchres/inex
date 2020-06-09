module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/creates/newDivision.jsx":
/*!***************************************!*\
  !*** ./pages/creates/newDivision.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_division_NewDivisionHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/division/NewDivisionHooks */ "./src/components/division/NewDivisionHooks.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\pages\\creates\\newDivision.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const newDivision = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(_src_components_division_NewDivisionHooks__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (newDivision);

/***/ }),

/***/ "./src/components/ErrorMessage.js":
/*!****************************************!*\
  !*** ./src/components/ErrorMessage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\ErrorMessage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-3nz6rx-0"
})(["padding:0.5rem;background:", ";margin:0 1.1rem;border-radius:0.5rem;border:0.01rem solid rgba(0,0,0,0.05);border-left:0.05rem solid red;p{margin:0;font-size:1.2rem;font-weight:bold;}strong{margin-right:0.15rem;}"], props => props.theme.grey[2]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => __jsx(ErrorStyles, {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx("p", {
      "data-test": "graphql-error",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, "Probleme Reseaux!"), error.message.replace("GraphQL error: ", ""))));
  }

  return __jsx(ErrorStyles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("p", {
    "data-test": "graphql-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Erreure!"), error.message.replace("GraphQL error: ", "")));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./src/components/division/NewDivisionHooks.jsx":
/*!******************************************************!*\
  !*** ./src/components/division/NewDivisionHooks.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_FormInputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/FormInputs */ "./src/components/utils/FormInputs.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\division\\NewDivisionHooks.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "NewDivisionHooks__InputGroup",
  componentId: "sc-2paw25-0"
})(["display:flex;flex-direction:column;margin:0 1rem;"]);
const AllControls = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "NewDivisionHooks__AllControls",
  componentId: "sc-2paw25-1"
})(["display:flex;flex-direction:column;"]);
const validationSchema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
  divName: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Nom Département Obligatoire'),
  divCode: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Code Département Obligatoire'),
  region: yup__WEBPACK_IMPORTED_MODULE_7__["object"]().required('Région Obligatoire')
});

const NewDivisionHooks = () => {
  const {
    data,
    loading: loadingCount,
    error: errorCount
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_9__["getAllCountrysQuery"]);
  {
    loadingCount && __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 23
      }
    }, "Loading Countries from DB...");
  }
  {
    errorCount && __jsx(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      error: error,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    });
  }

  const {
    countries
  } = _objectSpread({}, data);

  console.log(countries);
  const reducedCountries = countries && countries.reduce(item => item);
  const refinedCountry = Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["removeTypename"])(reducedCountries);
  console.log(refinedCountry);

  const {
    id
  } = _objectSpread({}, refinedCountry);

  console.log(id);
  const {
    data: dataRegions,
    loading: loadingReg,
    error: errorReg
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_9__["getAllRegionsOfACountryQuery"], {
    variables: {
      id
    }
  });
  {
    loadingReg && __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, "Loading regions from DB...");
  }
  {
    errorReg && __jsx(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      error: errorReg,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 19
      }
    });
  }
  const getCountry = dataRegions && dataRegions.country;

  const {
    region
  } = _objectSpread({}, getCountry);

  console.log(dataRegions);
  const getRegionsOptions = region && region.map(item => ({
    value: item.id,
    label: item.regName
  }));
  const [createDivision, {
    loading,
    error
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_11__["createDivisionMutation"]);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    method: "POST",
    initialValues: {
      divName: "",
      divCode: "",
      region: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions, setSubmitting, resetForm) => {
      const res = await createDivision({
        variables: _objectSpread(_objectSpread({}, values), {}, {
          region: values.region && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_10__["getObjectFromID"])(values.region.value)
        })
      });
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        console.log(res);
        actions.resetForm(true);
        actions.setSubmitting(false);
      }, 400);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, ({
    setFieldValue
  }) => {
    return __jsx(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_1__["MinimStyledPage"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, __jsx("h4", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, "Nouveau D\xE9partement"), __jsx(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      error: error,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 25
      }
    }), __jsx(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_5__["StyledForm"], {
      disabled: loading,
      "aria-busy": loading,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 29
      }
    }, __jsx(AllControls, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 33
      }
    }, __jsx(InputGroup, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 37
      }
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
      options: getRegionsOptions,
      name: "region",
      onChange: value => setFieldValue('region', value),
      styles: _utils_FormInputs__WEBPACK_IMPORTED_MODULE_5__["customStyle"],
      placeholder: "la R\xE9gion",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 41
      }
    }), __jsx(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_5__["SygexInput"], {
      name: "divName",
      type: "text",
      label: "Nom D\xE9partement",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 41
      }
    }), __jsx(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_5__["SygexInput"], {
      name: "divCode",
      type: "text",
      label: "Code D\xE9partement",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 41
      }
    })), __jsx(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_5__["ButtonStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 37
      }
    }, __jsx(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_5__["StyledButton"], {
      type: "submit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 41
      }
    }, "Valid", loading ? 'ation en cours' : 'er'))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewDivisionHooks);

/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Functions.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Functions.jsx ***!
  \******************************************************************/
/*! exports provided: candExamSessionCode, roundFloatNumber, calcCandTotalScore, calcCandTotalCoeff, calcCandAve, objectFromCode, uniqueCodeGen, getSelectedObject, getObjectFromID, removeTypename, uploadFile, centerExamSessionObjectFromCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "candExamSessionCode", function() { return candExamSessionCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundFloatNumber", function() { return roundFloatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCandTotalScore", function() { return calcCandTotalScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCandTotalCoeff", function() { return calcCandTotalCoeff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCandAve", function() { return calcCandAve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectFromCode", function() { return objectFromCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueCodeGen", function() { return uniqueCodeGen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedObject", function() { return getSelectedObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectFromID", function() { return getObjectFromID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTypename", function() { return removeTypename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionObjectFromCode", function() { return centerExamSessionObjectFromCode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_1__);



const uniqueCodeGen = keyLength => {
  var i,
      key = '',
      //  characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  characters = 'abcdefghijklmnopqrstuvwxyzABCDEF@#$%&GHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;

  for (i = 0; i < keyLength; i++) {
    key += characters.substr(Math.floor(Math.random() * charactersLength + 1), 1);
  }

  return key;
};

const objectFromCode = codeValue => {
  const storedObject = {
    candCode: `${codeValue}`
  };
  return storedObject;
};

const getObjectFromID = suppliedID => {
  const theObject = {
    id: `${suppliedID}`
  };
  return theObject;
};

const centerExamSessionObjectFromCode = codeValue => {
  const storedObject = {
    centerExamSession: `${codeValue}`
  };
  return storedObject;
};

const candExamSessionCode = (candID, examID, sessionID) => {
  return `${candID + examID + sessionID}`;
};

const getSelectedObject = (dataSource, objectID) => {
  // 1 copy the data source
  if (dataSource.length > 0) {
    const tempObjects = [...dataSource]; // get the object

    const selectedObject = tempObjects.find(item => item.id === objectID);
    return selectedObject;
  }
}; // function to model a number with leading zeroes


Number.prototype.pad = function (size) {
  var s = String(this);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s;
};

const calcCandAve = candScores => {
  const aveTotal = candScores && candScores.reduce((tally, item) => tally + item.subjectAve * item.coeff, 0);
  const coeffTotal = candScores.reduce((tally, item) => item.subjectAve === null ? tally : tally + item.coeff, 0);
  const candAve = aveTotal / coeffTotal;
  return candAve;
};

const calcCandTotalScore = candScores => {
  const aveTotal = candScores && candScores.reduce((tally, item) => tally + item.subjectAve * item.coeff, 0);
  return aveTotal;
};

const calcCandTotalCoeff = candScores => {
  const coeffTotal = candScores && candScores.reduce((tally, item) => item.subjectAve === null ? tally : tally + item.coeff, 0);
  return coeffTotal;
};

const roundFloatNumber = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

const removeTypename = value => {
  if (value === null || value === undefined) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map(v => removeTypename(v));
  } else if (typeof value === 'object') {
    const newObj = {};
    Object.entries(value).forEach(([key, v]) => {
      if (key !== '__typename') {
        newObj[key] = removeTypename(v);
      }
    });
    return newObj;
  }

  return value;
};

const uploadFile = async e => {
  const files = e.target.files;
  const data = new FormData();
  data.append('file', files[0]);
  data.append('upload_preset', 'ineximages');
  const res = await fetch('https://api.cloudinary.com/v1_1/inex/image/upload', {
    method: 'POST',
    body: data
  });
  const file = await res.json();
  console.log(file); // this.setState({ image: file.secure_url });

  setState({
    image: file.secure_url
  });
};



/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Mutations.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Mutations.jsx ***!
  \******************************************************************/
/*! exports provided: createCandidateMutation, createNewSubjectMutation, createNewSubjectTypeMutation, createTownMutation, createCenterExamSessionExaminerMutation, createDivisionMutation, createRegistrationMutation, createCenterMutation, createEducationTypeMutation, createSeriesMutation, createSubDivisionMutation, createNewSessionMutation, createNewRankMutation, createNewReportMutation, createNewRegionMutation, createNewGenderMutation, createExamMutation, registerSubjectSeriesMutation, registerNewSubjectSeriesMutation, updateCenterMutation, updateTownMutation, updateSessionMutation, updateRegionMutation, updateExamMutation, updateSubDivisionMutation, updateGenderMutation, updateCandidateMutation, updateScoreMutation, updateDivisionMutation, updateItemMutation, createExaminerMutation, createPhaseMutation, createCenterExamSessionSeriesMutation, updateSeriesMutation, updateRankMutation, createPhaseRankMutation, createNewCountryMutation, signUpMutation, updateSubjectMutation, updateSubjectTypeMutation, createCenterExamSessionMutation, updateEducationTypeMutation, signInCandidate, loginUserMutation, signupUserMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCandidateMutation", function() { return createCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSubjectMutation", function() { return createNewSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSubjectTypeMutation", function() { return createNewSubjectTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTownMutation", function() { return createTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionExaminerMutation", function() { return createCenterExamSessionExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDivisionMutation", function() { return createDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegistrationMutation", function() { return createRegistrationMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterMutation", function() { return createCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEducationTypeMutation", function() { return createEducationTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSeriesMutation", function() { return createSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubDivisionMutation", function() { return createSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSessionMutation", function() { return createNewSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewRankMutation", function() { return createNewRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewReportMutation", function() { return createNewReportMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewRegionMutation", function() { return createNewRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewGenderMutation", function() { return createNewGenderMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExamMutation", function() { return createExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSubjectSeriesMutation", function() { return registerSubjectSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNewSubjectSeriesMutation", function() { return registerNewSubjectSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCenterMutation", function() { return updateCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTownMutation", function() { return updateTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSessionMutation", function() { return updateSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRegionMutation", function() { return updateRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExamMutation", function() { return updateExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubDivisionMutation", function() { return updateSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGenderMutation", function() { return updateGenderMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCandidateMutation", function() { return updateCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScoreMutation", function() { return updateScoreMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDivisionMutation", function() { return updateDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItemMutation", function() { return updateItemMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExaminerMutation", function() { return createExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhaseMutation", function() { return createPhaseMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionSeriesMutation", function() { return createCenterExamSessionSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSeriesMutation", function() { return updateSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRankMutation", function() { return updateRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhaseRankMutation", function() { return createPhaseRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewCountryMutation", function() { return createNewCountryMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpMutation", function() { return signUpMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubjectMutation", function() { return updateSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubjectTypeMutation", function() { return updateSubjectTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionMutation", function() { return createCenterExamSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEducationTypeMutation", function() { return updateEducationTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInCandidate", function() { return signInCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserMutation", function() { return loginUserMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUserMutation", function() { return signupUserMutation; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //************create mutations  */

const signInCandidate = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation signInCandidate($candCode: String!) {
    candidateSignIn(candCode: $candCode) {
      id
      cand1stName
    }
  }
`; //

const updateSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateSessionMutation(
    $id: ID!
    $sessionName: String
    $sessionCode: String
  ) {
    updateSession(
      id: $id
      sessionName: $sessionName
      sessionCode: $sessionCode
    ) {
      sessionName
      sessionCode
      id
    }
  }
`;
const updateEducationTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateEducationTypeMutation(
    $id: ID!
    $educationTypeName: String
    $educationTypeCode: String
  ) {
    updateEducationType(
      id: $id
      educationTypeName: $educationTypeName
      educationTypeCode: $educationTypeCode
    ) {
      id
      educationTypeName
      educationTypeCode
    }
  }
`;
const updateSubjectTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateSubjectTypeMutation(
    $id: ID!
    $subjectTypeName: String
    $subjectTypeCode: String
  ) {
    updateSubjectType(
      id: $id
      subjectTypeName: $subjectTypeName
      subjectTypeCode: $subjectTypeCode
    ) {
      id
      subjectTypeName
      subjectTypeCode
    }
  }
`;
const updateSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateSubjectMutation(
    $id: ID!
    $subjectName: String
    $subjectCode: String
  ) {
    updateSubject(
      id: $id
      subjectName: $subjectName
      subjectCode: $subjectCode
    ) {
      subjectName
      subjectCode
      id
    }
  }
`;
const updateRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateRankMutation($id: ID!, $rankName: String, $rankCode: String) {
    updateRank(id: $id, rankName: $rankName, rankCode: $rankCode) {
      id
      rankName
      rankCode
    }
  }
`;
const updateSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateSeriesMutation(
    $id: ID!
    $seriesName: String
    $seriesCode: String
  ) {
    updateSeries(id: $id, seriesName: $seriesName, seriesCode: $seriesCode) {
      seriesName
      seriesCode
      id
    }
  }
`;
const updateDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateDivisionMutation(
    $id: ID!
    $divName: String
    $divCode: String
  ) {
    updateDivision(id: $id, divName: $divName, divCode: $divCode) {
      id
      divName
      divCode
    }
  }
`;
const updateRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateRegionMutation($id: ID!, $regName: String, $regCode: String) {
    updateRegion(id: $id, regName: $regName, regCode: $regCode) {
      id
      regName
      regCode
    }
  }
`;
const createNewReportMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewReportMutation(
    $reportImage: String!
    $reportName: String!
    $centerExamSessionExaminer: CenterExamSessionExaminerWhereUniqueInput!

  ) {
    createReport(
      reportImage: $reportImage
      reportName: $reportName
      centerExamSessionExaminer: $centerExamSessionExaminer
    ) {
      id
      reportName
      reportImage
    }
  }
`;
const createNewGenderMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewGenderMutation($genderName: String!, $genderCode: String!) {
    createGender(genderName: $genderName, genderCode: $genderCode) {
      id
      genderCode
      genderName
    }
  }
`;
const createRegistrationMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createRegistrationMutation(
    $candidate: CandidateWhereUniqueInput!
    $candExamSecretCode: String!
    $candExamSession: String!
    $candRegistrationNumber: String!
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $centerExamSessionSeries: CenterExamSessionSeriesWhereUniqueInput!
    $series: SeriesWhereUniqueInput!
  ) {
    createRegistration(
      candidate: $candidate
      candExamSecretCode: $candExamSecretCode
      candExamSession: $candExamSession
      candRegistrationNumber: $candRegistrationNumber
      centerExamSession: $centerExamSession
      centerExamSessionSeries: $centerExamSessionSeries
      series: $series
    ) {
      id
      centerExamSession {
        id
        center {
          id
          centerName
        }
      }
      candidate {
        id
        cand1stName
      }
    }
  }
`;
const createCenterExamSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCenterExamSessionMutation(
    $examSession: ExamSessionWhereUniqueInput!
    $center: CenterWhereUniqueInput!
  ) {
    createCenterExamSession(examSession: $examSession, center: $center) {
      id
    }
  }
`;
const createPhaseRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createPhaseRankMutation(
    $phase: PhaseWhereUniqueInput!
    $rankName:  String!                                                                                                                                                                    
    $rankCode:  String!                                                                                                                                                                   
  ) {
    createPhaseRank(phase: $phase, rankName : $rankName, rankCode: $rankCode ){                                                                                                                                                                      
      id
    }
  }
`;
const createCenterExamSessionExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCenterExamSessionExaminerMutation(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $examiner:  ExaminerWhereUniqueInput! 
    $phaseRank:  PhaseRankWhereUniqueInput! 
  ) {
    createCenterExamSessionExaminer(
    phaseRank: $phaseRank,
    centerExamSession: $centerExamSession,
    examiner: $examiner
    ){                                                                                                                                                                      
      id
    }
  }
`;
const createCenterExamSessionSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCenterExamSessionSeriesMutation(
    $series: SeriesWhereUniqueInput!
    $centerExamSession: CenterExamSessionWhereUniqueInput!
  ) {
    createCenterExamSessionSeries(
      series: $series
      centerExamSession: $centerExamSession
    ) {
      id
    }
  }
`; // const createCenterExamSessionexaminerorityMutation = gql`
//   mutation createCenterExamSessionexaminerorityMutation(
//     $rank: RankWhereUniqueInput!
//     $centerExamSession: CenterExamSessionWhereUniqueInput!
//     $examinerName: String!
//     $examinerCode: String!
//     $examinerCNI: String!
//     $examinerPhone: Int!
//     $examinerMatricule: String!
//   ) {
//     createCenterExamSessionexaminerority(
//       rank: $rank
//       centerExamSession: $centerExamSession
//       examinerCNI: $examinerCNI
//       examinerName: $examinerName
//       examinerCode: $examinerCode
//       examinerPhone: $examinerPhone
//       examinerMatricule: $examinerMatricule
//     ) {
//       examinerName
//       examinerCode
//       examinerPhone
//     }
//   }
// `

const createDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createDivisionMutation(
    $divName: String!
    $divCode: String!
    $region: RegionWhereUniqueInput!
  ) {
    createDivision(divName: $divName, divCode: $divCode, region: $region) {
      id
      divName
    }
  }
`;
const createCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCenterMutation(
    $centerName: String!
    $centerNumber: Int
    $centerCode: String!
    $centerSecretCode: String!
    $town: TownWhereUniqueInput!
  ) {
    createCenter(
      centerSecretCode: $centerSecretCode
      centerName: $centerName
      centerNumber: $centerNumber
      centerCode: $centerCode
      town: $town
    ) {
      id
      centerName
      centerSecretCode
      centerCode
      town {
        townName
      }
    }
  }
`;
const createSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createSeriesMutation(
    $seriesName: String!
    $seriesCode: String!
    $educationType: EducationTypeWhereUniqueInput!
  ) {
    createSeries(
      seriesName: $seriesName
      seriesCode: $seriesCode
      educationType: $educationType
    ) {
      id
      seriesName
    }
  }
`;
const createEducationTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createEducationTypeMutation(
    $educationTypeName: String!
    $educationTypeCode: String!
  ) {
    createEducationType(
      educationTypeName: $educationTypeName
      educationTypeCode: $educationTypeCode
    ) {
      id
      educationTypeName
    }
  }
`;
const createTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createTownMutation(
    $townName: String!
    $townCode: String!
    $subDiv: SubDivisionWhereUniqueInput!
  ) {
    createTown(townName: $townName, townCode: $townCode, subDiv: $subDiv) {
      id
      townName
      townCode
      subDiv {
        subDivName
      }
    }
  }
`;
const createNewSubjectTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewSubjectTypeMutation(
    $subjectTypeName: String!
    $subjectTypeCode: String!
  ) {
    createSubjectType(
      subjectTypeName: $subjectTypeName
      subjectTypeCode: $subjectTypeCode
    ) {
      id
      subjectTypeName
    }
  }
`;
const createNewSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewSubjectMutation(
    $subjectName: String!
    $subjectCode: String!
    $subjectType: SubjectTypeWhereUniqueInput!
    $educType: EducationTypeWhereUniqueInput!
  ) {
    createSubject(
      subjectName: $subjectName
      educType: $educType
      subjectCode: $subjectCode
      subjectType: $subjectType
    ) {
      subjectCode
      subjectName
    }
  }
`;
const createSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createSubDivisionMutation(
    $subDivName: String!
    $subDivCode: String!
    $division: DivisionWhereUniqueInput!
  ) {
    createSubDivision(
      subDivName: $subDivName
      subDivCode: $subDivCode
      division: $division
    ) {
      id
      subDivName
      subDivCode
      division {
        divName
      }
    }
  }
`;
const createNewSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewSessionMutation(
    $sessionName: String!
    $sessionCode: String!
  ) {
    createSession(sessionName: $sessionName, sessionCode: $sessionCode) {
      id
      sessionName
    }
  }
`;
const createNewRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewRankMutation($rankName: String!, $rankCode: String!) {
    createRank(rankName: $rankName, rankCode: $rankCode) {
      id
      rankName
    }
  }
`;
const createNewRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewRegionMutation(
    $regName: String!
     $regCode: String!
      $country: CountryWhereUniqueInput!
      ) {
    createRegion(
       country: $country 
        regName: $regName
         regCode: $regCode
         ) {
      id
      regName
    }
  }
`;
const signupUserMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation signupUserMutation(
    $name: String!
     $email: String!
      $password: String!
      ) {
    signup(
       password: $password 
        name: $name
         email: $email
         ) {
      id
      name
      email
    }
  }
`;
const loginUserMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation loginUserMutation(
     $email: String!
      $password: String!
      ) {
    login(
       password: $password 
         email: $email
         ) {
      id
      email
    }
  }
`;
const createNewCountryMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewCountryMutation($countryName: String!, $countryCode: String!) {
    createCountry(countryName: $countryName, countryCode: $countryCode) {
      id
      countryName
      countryCode
    }
  }
`;
const createPhaseMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createPhaseMutation($phaseName: String!, $phaseCode: String!){
    createPhase(phaseName: $phaseName, phaseCode: $phaseCode) {
      id
      phaseName
    }
  }
`;
const createExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createExamMutation($examName: String!, $examCode: String!) {
    createExam(examName: $examName, examCode: $examCode) {
      id
      examName
    }
  }
`;
const registerSubjectSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation registerSubjectSeriesMutation(
    $subject: SubjectWhereUniqueInput!
    $series: SeriesWhereUniqueInput!
    $coeff: Int!
  ) {
    createSubjectSeries(subject: $subject, series: $series, coeff: $coeff) {
      id
      series {
        id
        seriesName
        subjectSeries {
          id
          subject {
            id
            subjectName
          }
        }
      }
    }
  }
`;
const registerNewSubjectSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation registerNewSubjectSeriesMutation(
    $series: SeriesWhereUniqueInput!
    $coeff: Int!
    $subjectName: String!
    $subjectCode: String!
  ) {
    createSubjectSeries(
      subjectCode: $subjectCode
      subjectName: $subjectName
      series: $series
      coeff: $coeff
    ) {
      id
      series {
        id
        seriesName
        subjectSeries {
          id
          subjectName
          subjectCode
        }
      }
    }
  }
`;
const createCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCandidateMutation(
    $cand1stName: String!
    $cand2ndName: String
    $cand3rdName: String
    $dadName: String
    $momName: String
    $candCode: String
    $email: String!
    $image: String!
    $phoneNumb: Int
    $dateOfBirth: DateTime
    $birthCertNumber: String
    $placeOfBirth: String
    $gender: GenderWhereUniqueInput!
  ) {
    createCandidate(
      cand1stName: $cand1stName
      cand2ndName: $cand2ndName
      dadName: $dadName
      momName: $momName
      cand3rdName: $cand3rdName
      candCode: $candCode
      email: $email
      image: $image
      phoneNumb: $phoneNumb
      dateOfBirth: $dateOfBirth
      birthCertNumber: $birthCertNumber
      placeOfBirth: $placeOfBirth
      gender: $gender
    ) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      momName
      dadName
      candCode
      birthCertNumber
      dateOfBirth
      image
    }
  }
`;
const createExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createExaminerMutation(
    $examiner1stName: String!
    $examiner2ndName: String!
    $examinerOtherNames: String
    $examinerCode: String!
    $examinerEmail: String!
    $examinerCNI: String!
    $examinerMatricule: String!
    $examinerImage: String!
    $examinerPhone: Int!
    $gender: GenderWhereUniqueInput!
  ) {
    createExaminer(
      examiner1stName: $examiner1stName
      examiner2ndName: $examiner2ndName
      examinerOtherNames: $examinerOtherNames
      examinerMatricule: $examinerMatricule
      examinerCode: $examinerCode
      examinerCNI: $examinerCNI
      examinerEmail: $examinerEmail
      examinerImage: $examinerImage
      examinerPhone: $examinerPhone
      gender: $gender
    ) {
      id
      examiner1stName
      examiner2ndName
      examinerOtherNames
      examinerCode
      examinerEmail
      examinerImage
      examinerPhone
    }
  }
`; //************create mutations  */
////**************Update mutations */

const updateSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateSubDivisionMutation(
    $id: ID!
    $subDivName: String
    $subDivCode: String
  ) {
    updateSubDivision(
      id: $id
      subDivName: $subDivName
      subDivCode: $subDivCode
    ) {
      subDivName
      subDivCode
      id
    }
  }
`;
const updateCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateCenterMutation(
    $id: ID!
    $centerName: String
    $centerCode: String
    $centerNumber: Int
  ) {
    updateCenter(
      id: $id
      centerName: $centerName
      centerCode: $centerCode
      centerNumber: $centerNumber
    ) {
      id
      centerName
      centerNumber
      centerCode
    }
  }
`;
const updateTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateTownMutation($id: ID!, $townName: String, $townCode: String) {
    updateTown(id: $id, townName: $townName, townCode: $townCode) {
      townName
      townCode
      id
    }
  }
`;
const updateExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateExamMutation($id: ID!, $examName: String, $examCode: String) {
    updateExam(id: $id, examName: $examName, examCode: $examCode) {
      examName
      examCode
      id
    }
  }
`;
const updateScoreMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateScoreMutation(
    $subjectSeries: SubjectSeriesWhereUniqueInput!
    $subjectAve: Float!
    $candExamSecretCode: String!
  ) {
    updateScore(
      subjectSeries: $subjectSeries
      subjectAve: $subjectAve
      candExamSecretCode: $candExamSecretCode
    ) {
      subjectAve
      coeff
      id
      subjectSeries {
        id
        subjectCode
        subjectName
      }
    }
  }
`; // const createUserMutation = gql`
//   mutation createUserMutation(
//     $email: String!
//     $name: String!
//     $password: String!
//     ) {
//     createUser( 
//                email: $email!
//                name: $name!
//                password: $password!
//                ) {
//       id
//       name
//       email
//       password
//     }
//   }
// `

const updateCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateCandidateMutation(
    $id: ID!
    $cand1stName: String
    $cand2ndName: String
    $cand3rdName: String
    $momName: String
    $dadName: String
    $email: String
    $image: String
    $phoneNumb: Int
    $placeOfBirth: String
    $dateOfBirth: DateTime
    $birthCertNumber: String
    $gender: GenderWhereUniqueInput
  ) {
    updateCandidate(
      id: $id
      cand1stName: $cand1stName
      cand2ndName: $cand2ndName
      cand3rdName: $cand3rdName
      momName: $momName
      dadName: $dadName
      email: $email
      image: $image
      phoneNumb: $phoneNumb
      placeOfBirth: $placeOfBirth
      dateOfBirth: $dateOfBirth
      birthCertNumber: $birthCertNumber
      gender: $gender
    ) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      momName
      dadName
      email
      image
      phoneNumb
      placeOfBirth
      dateOfBirth
      birthCertNumber
      gender {
        id
      }
    }
  }
`;
const updateGenderMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateGenderMutation(
    $id: ID!
    $genderName: String
    $genderCode: String
  ) {
    updateGender(id: $id, genderName: $genderName, genderCode: $genderCode) {
      id
      genderName
      genderCode
    }
  }
`;
const signUpMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation signUpMutation($email: String!, $name: String!, $password: String!) {
    signUp(email: $email, name: $name, password: $password) {
      id
      email
      resetToken
      password
    }
  }
`;

const updateItemMutation = async (e, updateMutation) => {
  e.preventDefault();
  console.log('Updating Region!!');
  const res = await updateMutation({
    variables: _objectSpread({
      id: undefined.props.id
    }, undefined.state)
  });
  console.log('Region Updated!!');
}; ////**************Update mutations */




/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Queries.jsx":
/*!****************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Queries.jsx ***!
  \****************************************************************/
/*! exports provided: getAllSubjectsOfASeriesQuery, getAllSubjectTypesQuery, getAllGendersQuery, getAllRegionsOfACountryQuery, getAllSeriesOfAnEducationTypeQuery, getAllExamsQuery, getAllSessionsQuery, getDivisionsOfARegionQuery, getAllDivisionsQuery, getSubDivisionsOfADivisionQuery, getTownsOfASubDivisionQuery, getCentersOfATownQuery, getAllEducationTypesQuery, getAllSubjectsQuery, getAllRanksQuery, getAllCandidatesQuery, getAllCentersQuery, getSingleRegionQuery, getACenterAdminQuery, getAllCenterAdminsQuery, getAllSeriesQuery, getAllSubDivisionsQuery, getAllSubjectsOfAnEducTypeQuery, getScoreID, singleSeriesQuery, getRegistrations, singleSubjectQuery, singleCandidateQuery1, singleCandidateQuery, viewSingleCandidateQuery, singleCenterQuery, singleCenterAdminQuery, singleExamQuery, singleTownQuery, getAllCenterResultsQuery, singleSessionQuery, singleDivisionQuery, singleSubDivisionQuery, singleSubjectTypeQuery, singleEducationTypeQuery, singleRankQuery, centerExamSessionSeriesForResultsQuery, getAllCandidateRegistrationIDsQuery, getCenterExamSessionSeriesQuery, singleGenderQuery, getExamSessionQuery, getAllSeriesOfACenterExamSessionQuery, getCenterResultsQuery, getCandidateRegistrationIDQuery, getCandidateRegistrationIDsQuery, centerExamSessionForResultsQuery, getCandidateIDQuery, getASingleCenterQuery, getRegisteredCandidateCountQuery, centersPerTownQuery, getSingleCenterQuery, getCandidateResultsQuery, getCenterRegistrationIDsQuery, getCandidateByCandCodeQuery, getSingleCenterExamSessionQuery, getEachCandidateResultsQuery, getCenterIDFromCenterCodeQuery, getRegistrationIDFromRegNumberQuery, centerExamSessionSeriesResultsQuery, dataForAverage, getAllCountrysRegionCreateQuery, getAllPhasesQuery, getAllRegionsQuery, getAllCountrysQuery, singleExaminerQuery, getCESExaminerQuery, getExaminerRegistrationQuery, getSingleProfQuery, getAllRanksOfAnExamPhaseQuery, meQuery, getSingleCenterByCodeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfASeriesQuery", function() { return getAllSubjectsOfASeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectTypesQuery", function() { return getAllSubjectTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGendersQuery", function() { return getAllGendersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsOfACountryQuery", function() { return getAllRegionsOfACountryQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesOfAnEducationTypeQuery", function() { return getAllSeriesOfAnEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllExamsQuery", function() { return getAllExamsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSessionsQuery", function() { return getAllSessionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDivisionsOfARegionQuery", function() { return getDivisionsOfARegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDivisionsQuery", function() { return getAllDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubDivisionsOfADivisionQuery", function() { return getSubDivisionsOfADivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTownsOfASubDivisionQuery", function() { return getTownsOfASubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentersOfATownQuery", function() { return getCentersOfATownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducationTypesQuery", function() { return getAllEducationTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsQuery", function() { return getAllSubjectsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksQuery", function() { return getAllRanksQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidatesQuery", function() { return getAllCandidatesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCentersQuery", function() { return getAllCentersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleRegionQuery", function() { return getSingleRegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getACenterAdminQuery", function() { return getACenterAdminQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCenterAdminsQuery", function() { return getAllCenterAdminsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesQuery", function() { return getAllSeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubDivisionsQuery", function() { return getAllSubDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfAnEducTypeQuery", function() { return getAllSubjectsOfAnEducTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreID", function() { return getScoreID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSeriesQuery", function() { return singleSeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrations", function() { return getRegistrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectQuery", function() { return singleSubjectQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery1", function() { return singleCandidateQuery1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery", function() { return singleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSingleCandidateQuery", function() { return viewSingleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterQuery", function() { return singleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterAdminQuery", function() { return singleCenterAdminQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExamQuery", function() { return singleExamQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleTownQuery", function() { return singleTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCenterResultsQuery", function() { return getAllCenterResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSessionQuery", function() { return singleSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleDivisionQuery", function() { return singleDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubDivisionQuery", function() { return singleSubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectTypeQuery", function() { return singleSubjectTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleEducationTypeQuery", function() { return singleEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleRankQuery", function() { return singleRankQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionSeriesForResultsQuery", function() { return centerExamSessionSeriesForResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidateRegistrationIDsQuery", function() { return getAllCandidateRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterExamSessionSeriesQuery", function() { return getCenterExamSessionSeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleGenderQuery", function() { return singleGenderQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExamSessionQuery", function() { return getExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesOfACenterExamSessionQuery", function() { return getAllSeriesOfACenterExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterResultsQuery", function() { return getCenterResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationIDQuery", function() { return getCandidateRegistrationIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationIDsQuery", function() { return getCandidateRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionForResultsQuery", function() { return centerExamSessionForResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateIDQuery", function() { return getCandidateIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getASingleCenterQuery", function() { return getASingleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredCandidateCountQuery", function() { return getRegisteredCandidateCountQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centersPerTownQuery", function() { return centersPerTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterQuery", function() { return getSingleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateResultsQuery", function() { return getCandidateResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterRegistrationIDsQuery", function() { return getCenterRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateByCandCodeQuery", function() { return getCandidateByCandCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterExamSessionQuery", function() { return getSingleCenterExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEachCandidateResultsQuery", function() { return getEachCandidateResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterIDFromCenterCodeQuery", function() { return getCenterIDFromCenterCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrationIDFromRegNumberQuery", function() { return getRegistrationIDFromRegNumberQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionSeriesResultsQuery", function() { return centerExamSessionSeriesResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataForAverage", function() { return dataForAverage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCountrysRegionCreateQuery", function() { return getAllCountrysRegionCreateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPhasesQuery", function() { return getAllPhasesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsQuery", function() { return getAllRegionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCountrysQuery", function() { return getAllCountrysQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExaminerQuery", function() { return singleExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCESExaminerQuery", function() { return getCESExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExaminerRegistrationQuery", function() { return getExaminerRegistrationQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProfQuery", function() { return getSingleProfQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksOfAnExamPhaseQuery", function() { return getAllRanksOfAnExamPhaseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meQuery", function() { return meQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterByCodeQuery", function() { return getSingleCenterByCodeQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const getACenterAdminQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getACenterAdminQuery($authCode: String!) {
    centerAdminSignIn(authCode: $authCode) {
      id
      authCode
    }
  }
`;
const meQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query meQuery {
    me {
      id
     email
     name 
     password
    }
  }
`;
const singleEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleEducationTypeQuery($id: ID!) {
    educationType(id: $id) {
      educationTypeName
      educationTypeCode
      id
    }
  }
`;
const getCESExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCESExaminerQuery(
    $examiner: ExaminerWhereUniqueInput!,
     $centerExamSession:CenterExamSessionWhereUniqueInput!) {
    getCenterExamSessionExaminers(
      examiner: $examiner, 
      centerExamSession:$centerExamSession  ) {
     
      id
    }
  }
`;
const singleSubjectTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSubjectTypeQuery($id: ID!) {
    subjectType(id: $id) {
      subjectTypeName
      subjectTypeCode
      id
    }
  }
`;
const getAllCenterAdminsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCenterAdminsQuery {
    centerAdmins {
      id
      authName
      authCode
    }
  }
`;
const getAllEducationTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllEducationTypesQuery {
    educationTypes(orderBy: educationTypeName_ASC) {
      id
      educationTypeName
      educationTypeCode
    }
  }
`;
const getAllRegionsOfACountryQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRegionsOfACountryQuery($id: ID!) {
    country(id: $id) {
      id
      region(orderBy: regName_ASC){
       regName
      regCode
      id
      }
    }
  }
`;
const getAllRegionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRegionsQuery {
      regions{
       regName
      regCode
      id
  }}
`;
const getAllCountrysQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCountrysQuery {
    countries(orderBy:countryName_ASC) {
      countryName
      countryCode
      id
    }
  }
`;
const getAllCountrysRegionCreateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCountrysRegionCreateQuery {
    countries(orderBy:countryName_ASC) {
           id
    }
  }
`;
const getCenterResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterResultsQuery(
    $exam: ExamWhereUniqueInput!
    $center: CenterWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    getResultsPerCenter(exam: $exam, center: $center, session: $session) {
      id
      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        placeOfBirth
        email
        dateOfBirth
        gender {
          genderName
        }
      }
      exam {
        examName
      }
      session {
        sessionName
      }
      center {
        centerName
      }
      scores {
        subjectAve
        coeff
        subjectSeries {
          subjectName
          series {
            id
            seriesName
          }
        }
      }
    }
  }
`;
const getCandidateResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateResultsQuery($id: ID!) {
    registration(id: $id) {
      id
      createdAt
      candRegistrationNumber
      
      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        momName
        dadName
        placeOfBirth
        image
        email
        dateOfBirth
        gender {
          genderName
        }
      }
      centerExamSessionSeries {
      centerExamSession{
        id 
      examSession {
       id
        exam{
          id 
          examName
        }
        session{
          id
          sessionName
        }
      }
      center {
        id
        centerName
      }}
      series {
        id
        seriesName
        subjectSeries {
          id
          subjectName
        }
      }
      }
      scores {
        id
        subjectAve
        coeff
        subjectSeries  {
          id
          subjectName
        }
      }
    }
  }
`;
const getExaminerRegistrationQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getExaminerRegistrationQuery($id: ID!) {
    centerExamSessionExaminer(id: $id) {
      id
      examiner{
        examiner1stName
        examiner2ndName
        examinerOtherNames
        examinerMatricule
        examinerPhone
        examinerCNI
        examinerImage
        examinerEmail
        gender {
          genderName
        }
      }
      centerExamSession{
        id 
      examSession {
       id
        exam{
          id 
          examName
        }
        session{
          id
          sessionName
      }}
      center {
        id
        centerName
      }
      
      }
      phaseRank {
        id
        rankName
      }
    }
  }
`;
const getAllCenterResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCenterResultsQuery($centerExamSession: String!) {
    centerExamSessionSeriesForResults(centerExamSession: $centerExamSession) {
      id
      series{
        id
        seriesName
        subjectSeries {
          id
          subjectName
        }
      }
     registration{
       id
       candidate{
         cand1stName
         id
       }
      scores {
        id
        subjectAve
        coeff
        subjectSeries {
          id
          subjectName
        }
      }
     }
   }
  }
`;
const getEachCandidateResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getEachCandidateResultsQuery($id: ID!) {
    registration(id: $id) {
      id
      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        momName
        dadName
        email
        dateOfBirth
        gender {
          genderName
        }
      }
      exam {
        examName
      }
      session {
        sessionName
      }
      series {
        id
        seriesName
      }
      center {
        centerName
      }
    }
  }
`;
const getCandidateRegistrationIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateRegistrationIDQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $candidate: CandidateWhereUniqueInput!
  ) {
    candidateRegistrationID(centerExamSession: $centerExamSession, candidate: $candidate) {
      id
      
    }
  }
`;
const getCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateRegistrationIDsQuery($candidate: RegistrationWhereInput!  ) {
    candidateRegistrationIDs(candidate: $candidate) {
      id
      
    }
  }
`;
const getAllCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCandidateRegistrationIDsQuery($id: ID!  ) {
    candidate( id: $id) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      placeOfBirth
      dateOfBirth
      image
      momName
      dadName
      email
      gender{
id
genderName
      }
      registration{
        id
     
        centerExamSessionSeries{
          id
         series{
           id
           seriesName
         }
         centerExamSession{
          center{
            id
            centerName
          }
          examSession{
            id
            exam{
              id
              examName
            }
            session{
              id
              sessionName
            }
          }
        }
       
        }
        scores {
        id
        subjectAve
        coeff
        subjectSeries {
          id
          subjectName
        }
      }
        }
      id
      
    }
  }
`;
const getCandidateIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateIDQuery(
    $candCode: String!
  ) {
    candidateCode(candCode: $candCode) {
      id
    }
  }
`;
const getRegistrationIDFromRegNumberQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegistrationIDFromRegNumberQuery(
    $candRegistrationNumber: String!
  ) {
    candidateRegistrationNumber(candRegistrationNumber: $candRegistrationNumber) {
     id
     candidate{
      id
      cand1stName
      cand2ndName
      cand3rdName
      placeOfBirth
      dateOfBirth
      image
      momName
      dadName
      email
      gender{
id
genderName
      }
      registration{
        id
     
        centerExamSessionSeries{
          id
         series{
           id
           seriesName
         }
         centerExamSession{
          center{
            id
            centerName
          }
          examSession{
            id
            exam{
              id
              examName
            }
            session{
              id
              sessionName
            }
          }
        }
       
        }
        scores {
        id
        subjectAve
        coeff
        subjectSeries {
          id
          subjectName
        }
      }
        }
        }
        }
    }
`;
const getCenterIDFromCenterCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterIDFromCenterCodeQuery($centerCode: String!) {
    centerByCode(centerCode: $centerCode) {
      id
    }
  }
`;
const getCenterRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterRegistrationIDsQuery(
    $exam: ExamWhereUniqueInput!
    $center: CenterWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    centerRegistrationIDs(exam: $exam, center: $center, session: $session) {
      id
    }
  }
`;
const centerExamSessionSeriesForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centerExamSessionSeriesForResultsQuery($centerExamSession: String !) {
    centerExamSessionSeriesForResults(centerExamSession: $centerExamSession) {
      id
      series{
        id
        seriesName
      }
      
    }
  }
`;
const centerExamSessionForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centerExamSessionForResultsQuery($id: ID !) {
    centerExamSession(id: $id) {
      id
      center{
                 id
                 centerName
                 centerCode
               }
               examSession{
               exam{
                 id
                 examName
               }
               session{
                 id
                 sessionName
               }}
           centerExamSessionSeries{
             id
            series{
              id
              seriesName
              seriesCode
            }
             registration{
               id
               candRegistrationNumber
               candExamSecretCode
               candidate{
            id
            cand1stName
            cand2ndName
            cand3rdName
            dateOfBirth
            placeOfBirth
            email
            phoneNumb
            gender{
              id
              genderName
            }

               }
               scores{
                 id
                 subjectAve

               }
             }
           }
       
    }
  }
`;
const centerExamSessionSeriesResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centerExamSessionSeriesResultsQuery($id: ID !) {
    centerExamSessionSeries(id: $id) {
      id
      centerExamSession{
                 id
                center{
                  id
                  centerName
                  centerCode
                }
               examSession{
               exam{
                 id
                 examName
               }
               session{
                 id
                 sessionName
               }
               }}
         
          
            series{
              id
              seriesName
              seriesCode
            }
             registration{
               id
               candRegistrationNumber
               candExamSecretCode
               candidate{
            id
            cand1stName
            cand2ndName
            cand3rdName
            dateOfBirth
            placeOfBirth
            email
            phoneNumb
            gender{
              id
              genderName
            }

               }
               scores{
                 id
                 subjectAve

               }
             }
    }
  }
`;
const getCandidateByCandCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateByCandCodeQuery($candCode: String!) {
    getCandidateByCode(candCode: $candCode) {
      id
      cand1stName
      candCode
      dateOfBirth
      placeOfBirth
    }
  }
`;
const getAllRanksQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRanksQuery {
    ranks(orderBy: rankName_ASC) {
      rankName
      rankCode
      id
    }
  }
`;
const getAllPhasesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllPhasesQuery {
  phases(orderBy:phaseName_ASC) {
    phaseName
    phaseCode
      id
    }
  }
`;
const getAllSubjectsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectsQuery {
    subjects(orderBy: subjectName_ASC) {
      subjectName
      subjectCode
      id
    }
  }
`;
const getAllGendersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllGendersQuery {
    genders(orderBy: genderName_ASC) {
      id
      genderName
      genderCode
    }
  }
`;
const getAllSeriesOfAnEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSeriesOfAnEducationTypeQuery($id: ID!) {
    educationType(id: $id) {
      id
      educationTypeName
      series(orderBy: seriesName_ASC) {
        id
        seriesName
        seriesCode
      }
    }
  }
`;
const getAllSeriesOfACenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSeriesOfACenterExamSessionQuery($id: ID!) {
    centerExamSession(id: $id) {
      id
      centerExamSessionSeries{
      series {
        id
        seriesName
        seriesCode
      }
    }}
  }
`;
const getAllSeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSeriesQuery {
    serieses(orderBy: seriesName_ASC) {
      id
      seriesName
      seriesCode
    }
  }
`;
const getAllSubjectsOfAnEducTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectsOfAnEducTypeQuery($id: ID!) {
    educationType(id: $id) {
      id
      educationTypeName
      subject(orderBy: subjectName_ASC) {
        id
        subjectName
        subjectCode
      }
    }
  }
`;
const getAllSubjectsOfASeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectsOfASeriesQuery($id: ID!) {
    series(id: $id) {
      id
      seriesName
      subjectSeries {
        id
        subjectName
        subjectCode
      }
    }
  }
`;
const getAllExamsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllExamsQuery {
    exams(orderBy: examName_ASC) {
      examName
      examCode
      id
    }
  }
`;
const getAllSessionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSessionsQuery {
    sessions(orderBy: createdAt_DESC) {
      sessionName
      sessionCode
      id
    }
  }
`;
const getAllDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllDivisionsQuery {
    divisions(orderBy: divName_ASC) {
      divName
      divCode
      id
    }
  }
`;
const getDivisionsOfARegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getDivisionsOfARegionQuery($id: ID!) {
    region(id: $id) {
      regName
      id
      division(orderBy: divName_ASC) {
        divName
        divCode
        id
      }
    }
  }
`;
const getSubDivisionsOfADivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSubDivisionsOfADivisionQuery($id: ID!) {
    division(id: $id) {
      divName
      id
      subDivision(orderBy: subDivName_ASC) {
        subDivName
        subDivCode
        id
      }
    }
  }
`;
const getAllSubDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubDivisionsQuery {
    subDivision(orderBy: subDivName_ASC) {
      subDivName
      subDivCode
      id
    }
  }
`;
const getTownsOfASubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getTownsOfASubDivision($id: ID!) {
    subDivision(id: $id) {
      subDivName
      id
      town(orderBy: townName_ASC) {
        townName
        townCode
        id
      }
    }
  }
`;
const getCentersOfATownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCentersOfATownQuery($id: ID!) {
    town(id: $id) {
      townName
      id
      center(orderBy: centerName_ASC) {
        centerName
        centerCode
        id
      }
    }
  }
`;
const centersPerTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centersPerTownQuery($id: ID!) {
    town(id: $id) {
      townName
      id
      center(orderBy: centerName_ASC) {
        centerName
        centerNumber
        centerSecretCode
        centerCode
        id
      }
    }
  }
`;
const getAllSubjectTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectTypesQuery {
    subjectTypes(orderBy: subjectTypeName_DESC) {
      id
      subjectTypeName
      subjectTypeCode
    }
  }
`;
const getAllCentersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCentersQuery {
    centers(orderBy: centerName_ASC) {
      id
      centerName
      centerCode
    }
  }
`;
const getAllCandidatesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCandidatesQuery {
    candidates(orderBy: cand1stName_ASC) {
      cand1stName
      cand2ndName
      cand3rdName
      email
      image
      phoneNumb
      placeOfBirth
      candCode
      id
    }
  }
`; ///*****************Single object queries */

const singleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCenterQuery($id: ID!) {
    center(id: $id) {
      centerName
      centerNumber
      centerCode
      id
    }
  }
`;
const getSingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterQuery($centerNumber: Int!) {
    centerByNumber(centerNumber:  $centerNumber) {
      id
      centerNumber
      centerCode
    }
  }
`;
const getSingleProfQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleProfQuery($authCode: String!) {
   profByAuthCode(authCode:  $authCode) {
     authCode
      id
      auth1stName
    }
  }
`;
const getSingleCenterByCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterByCodeQuery($centerSecretCode: String!) {
    getCenterByCode(centerSecretCode:  $centerSecretCode) {
      id
      centerCode
     
    }
  }
`;
const getASingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getASingleCenterQuery($centerNumber: Int!) {
    centerByNumber(centerNumber:  $centerNumber) {
      centerNumber
      centerName
      centerCode
      id
    }
  }
`;
const singleTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleTownQuery($id: ID!) {
    town(id: $id) {
      townName
      townCode
      id
    }
  }
`;
const getSingleCenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterExamSessionQuery(
    $center: CenterWhereUniqueInput!
    $examSession: ExamSessionWhereUniqueInput!
  ) {
    centerExamSessionsByCode(examSession: $examSession, center: $center) {
      id
    }
  }
`;
const getAllRanksOfAnExamPhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRanksOfAnExamPhaseQuery($id: ID!) {
    phase(id: $id) {
      id
      phaseRank{
             id
          rankName
          rankCode
      }
    }
  }
`;
const getRegisteredCandidateCountQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegisteredCandidateCountQuery($id: ID!)
 {
    registrationsConnection(id: $id) {
     aggregate{
       count
     }
    }
  }
`;
const getCenterExamSessionSeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterExamSessionSeriesQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $series: SeriesWhereUniqueInput!
  ) {
    centerExamSessionSerieses(series: $series, centerExamSession: $centerExamSession) {
      id

    }
  }
`;
const getExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getExamSessionQuery(
    $exam: ExamWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    examSessions(session: $session, exam: $exam) {
      id

    }
  }
`;
const singleExamQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleExamQuery($id: ID!) {
    exam(id: $id) {
      examName
      examCode
      id
    }
  }
`;
const singleCandidateQuery1 = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCandidateQuery1($id: ID!) {
    candidate(id: $id) {
      cand1stName
      cand2ndName
      cand3rdName
      dadName
      momName
      candCode
      email
      image
      phoneNumb
      placeOfBirth
      id
    }
  }
`;
const singleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCandidateQuery($id: ID!) {
    candidate(id: $id) {
      id
      dateOfBirth
      cand1stName
      cand2ndName
      cand3rdName
      candCode  
      dadName
      momName
      email
      image
      phoneNumb
      birthCertNumber
      placeOfBirth
      gender {
        id
        genderName
      }
    }
  }
`;
const singleExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleExaminerQuery($id: ID!) {
    examiner(id: $id) {
      id
      examiner1stName
      examiner2ndName
      examinerOtherNames
      examinerCode
      examinerEmail
      examinerImage
      examinerPhone
      examinerMatricule
      examinerCNI
      
    }
  }
`;
const viewSingleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query viewSingleCandidateQuery($candCode: String!) {
    singleCandidate(candCode: $candCode) {
      id
      dateOfBirth
      cand1stName
      cand2ndName
      cand3rdName
      candCode
      momName
      dadName
      email
      image
      phoneNumb
      birthCertNumber
      placeOfBirth
      gender {
        id
        genderName
      }
    }
  }
`;
const getScoreID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getScoreID($candExamSecretCode: String!) {
    scores(candExamSecretCode: $candExamSecretCode) {
      id
    }
  }
`;
const getRegistrations = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegistrations($candExamSecretCode: String!) {
    registration(candExamSecretCode: $candExamSecretCode) {
      id
      scores {
        id
        subject(orderBy: subjectName_ASC) {
          id
          subjectName
        }
      }
    }
  }
`;
const singleSubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSubDivisionQuery($id: ID!) {
    subDivision(id: $id) {
      subDivName
      subDivCode
      id
    }
  }
`;
const getSingleRegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleRegionQuery($id: ID!) {
    region(id: $id) {
      regName
      regCode
      id
    }
  }
`;
const singleGenderQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleGenderQuery($id: ID!) {
    gender(id: $id) {
      genderName
      genderCode
      id
    }
  }
`;
const singleSeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSeriesQuery($id: ID!) {
    series(id: $id) {
      seriesName
      seriesCode
      id
    }
  }
`;
const singleCenterAdminQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCenterAdminQuery($id: ID!) {
    centerAdmin(id: $id) {
      centerAdminName
      centerAdminCode
      id
    }
  }
`;
const dataForAverage = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query dataForAverage($candExamSecretCode: String!) {
    scores(candExamSecretCode: $candExamSecretCode) {
      id
      subjectAve
      coeff
    }
  }
`;
const singleDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleDivisionQuery($id: ID!) {
    division(id: $id) {
      divName
      divCode
      id
    }
  }
`;
const singleRankQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleRankQuery($id: ID!) {
    rank(id: $id) {
      rankName
      rankCode
      id
    }
  }
`;
const singleSubjectQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSubjectQuery($id: ID!) {
    subject(id: $id) {
      subjectName
      subjectCode
      id
    }
  }
`;
const singleSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSessionQuery($id: ID!) {
    session(id: $id) {
      sessionName
      sessionCode
      id
    }
  }
`; ///*****************End Single object queries */



/***/ }),

/***/ "./src/components/styles/StyledPage.jsx":
/*!**********************************************!*\
  !*** ./src/components/styles/StyledPage.jsx ***!
  \**********************************************/
/*! exports provided: MinimStyledPage, MiniStyledPage, StyledPage, BigStyledPage, BiggestStyledPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimStyledPage", function() { return MinimStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStyledPage", function() { return MiniStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledPage", function() { return StyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigStyledPage", function() { return BigStyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiggestStyledPage", function() { return BiggestStyledPage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage",
  componentId: "sc-141gozs-0"
})(["padding:0 1rem margin:0 auto;display:grid;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:70vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}form{justify-items:center;align-items:center;}"], props => props.theme.pureWhite, props => props.theme.formBS, props => props.theme.pureWhite, props => props.theme.blues[2]);
const MiniStyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage__MiniStyledPage",
  componentId: "sc-141gozs-1"
})(["display:grid;padding:0 1rem;margin:0 auto;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:50vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}"], props => props.theme.pureWhite, props => props.theme.formBS, props => props.theme.pureWhite, props => props.theme.blues[2]);
const MinimStyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage__MinimStyledPage",
  componentId: "sc-141gozs-2"
})(["display:grid;margin:0 auto;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:30vw;min-width:25rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}form{justify-items:center;align-items:center;}"], props => props.theme.pureWhite, props => props.theme.formBS, props => props.theme.pureWhite, props => props.theme.blues[2]);
const BigStyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage__BigStyledPage",
  componentId: "sc-141gozs-3"
})(["display:grid;padding:0 1rem;margin:0 auto;grid-template-columns:1fr;grid-auto-flow:row;text-align:center;width:60vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}fieldset{justify-items:center;align-items:center;}"], props => props.theme.pureWhite, props => props.theme.formBS, props => props.theme.pureWhite, props => props.theme.blues[2]);
const BiggestStyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledPage__BiggestStyledPage",
  componentId: "sc-141gozs-4"
})(["display:grid;padding:0 1rem;margin:0 auto;grid-template-columns:1fr;text-align:center;width:90vw;min-width:30rem;background-color:", ";h4{margin:0 auto;margin-bottom:1rem;padding:0.5rem 1rem;text-align:center;font-size:1.6rem;font-weight:normal;box-shadow:", ";background:", ";width:100%;border-radius:0.5rem;color:", ";}.Form{justify-items:center;align-items:center;}fieldset{justify-items:center;align-items:center;}"], props => props.theme.pureWhite, props => props.theme.formBS, props => props.theme.pureWhite, props => props.theme.blues[2]);


/***/ }),

/***/ "./src/components/utils/FormInputs.jsx":
/*!*********************************************!*\
  !*** ./src/components/utils/FormInputs.jsx ***!
  \*********************************************/
/*! exports provided: StyledLabel, StyledButton, customStyle, SygexSelect, ButtonStyled, SygexInput, StyledForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLabel", function() { return StyledLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customStyle", function() { return customStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SygexSelect", function() { return SygexSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStyled", function() { return ButtonStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SygexInput", function() { return SygexInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\utils\\FormInputs.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const customStyle = {
  control: provided => _objectSpread(_objectSpread({}, provided), {}, {
    fontFamily: 'Roboto Slab',
    border: "0px solid black",
    borderBottom: "0.9px solid #0780b7",
    fontSize: '1.6rem',
    outline: 'none',
    backgroundColor: 'white',
    color: '#000',
    borderRadius: '0',
    boxShadow: "none",
    alignItems: "center",
    '&:hover': {
      borderBottom: ' 2px solid #d4351c',
      borderRadius: '0'
    },
    // border style on hover
    '&:focus': {
      borderBottom: ' 2px solid #d4351c',
      borderRadius: '0'
    } // border style on hover

  }),
  option: provided => _objectSpread(_objectSpread({}, provided), {}, {
    textAlign: 'left'
  })
};
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "FormInputs__StyledInput",
  componentId: "ii1nqi-0"
})(["padding-top:1rem;margin-top:0.4rem;font-size:1.5rem;border-style:none;width:100%;outline:none;border-bottom:0.09rem solid ", ";z-index:10;font-family:\"Roboto Slab\";&:valid + label{top:-.25rem;font-size:1.1rem;color:", ";}&:focus,&active{outline:none;border-bottom:0.2rem solid ", ";}&:focus + label{top:-.25rem;font-size:1.1rem;color:#aaa;}"], props => props.theme.blues[2], props => props.theme.britishBlue, props => props.theme.britishRed);
const InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "FormInputs__InputGroup",
  componentId: "ii1nqi-1"
})(["position:relative;"]);
const StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label.withConfig({
  displayName: "FormInputs__StyledLabel",
  componentId: "ii1nqi-2"
})(["font-size:1.5rem;border-style:none;position:absolute;left:1rem;top:1.5rem;color:", ";pointer-events:none;transition:all 1s ease-out;font-family:\"Roboto Slab\";&:focus{outline:none;}"], props => props.theme.greys[2]);
const StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.select.withConfig({
  displayName: "FormInputs__StyledSelect",
  componentId: "ii1nqi-3"
})(["margin-top:1rem;font-size:1.5rem;border-style:none;border-bottom:0.09rem solid ", ";option{background:white;font-weight:400;display:flex;white-space:pre;min-height:20px;padding:0px 2px 1px;background:", ";border-radius:0.5rem;}&:focus{outline:none;border-color:", ";}"], props => props.theme.blues[2], props => props.theme.blues[0], props => props.theme.britishRed);
const StyledErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "FormInputs__StyledErrorMessage",
  componentId: "ii1nqi-4"
})(["padding-top:0.2rem;font-size:1.3rem;color:", ";"], props => props.theme.britishRed);
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "FormInputs__StyledButton",
  componentId: "ii1nqi-5"
})(["background-color:", ";color:", ";border:0;border-radius:.5rem;font-size:3rem;font-weight:300;line-height:1.5rem;text-shadow:3px 4px 5px #0000;box-shadow:", " cursor:pointer;"], props => props.theme.blues[2], props => props.theme.white, props => props.theme.bs2);
const ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "FormInputs__ButtonStyled",
  componentId: "ii1nqi-6"
})(["padding-bottom:0.5rem;padding-top:1rem;button{border-radius:0.6rem;font-size:1.7rem;font-weight:bold;box-shadow:", ";border:0.05rem solid ", ";color:", ";background:", ";cursor:pointer;padding:0.8rem;outline:none;&:hover{color:", " background-color:", ";}}"], props => props.theme.formBS, props => props.theme.blues[2], props => props.theme.blues[2], props => props.theme.pureWhite, props => props.theme.blues[2], props => props.theme.sand);
const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "FormInputs__StyledForm",
  componentId: "ii1nqi-7"
})(["margin:0 2rem;padding:0.6rem;font-size:1.5rem;border-radius:.5rem;border:0.09rem solid ", ";box-shadow:", ";min-width:20rem;&[disabled]{opacity:0.3;}&::before{height:0.3rem;content:'';display:block;background-image:linear-gradient(to right,#0780b7 0%,#e2b04a 20%,#0780b7 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}"], props => props.theme.blues[2], props => props.theme.formBS, loading);

const SygexInput = (_ref) => {
  let {
    label
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label"]);

  const [field, meta] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
  return __jsx(InputGroup, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx(StyledInput, _extends({
    className: "text-input"
  }, field, props, {
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  })), __jsx(StyledLabel, {
    htmlFor: props.id || props.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }
  }, label), meta.touched && meta.error ? __jsx(StyledErrorMessage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, meta.error) : null);
};

const SygexSelect = (_ref2) => {
  let {
    label
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["label"]);

  const [field, meta] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledSelect, _extends({}, field, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  })), meta.touched && meta.error ? __jsx(StyledErrorMessage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, meta.error) : null);
};



/***/ }),

/***/ 6:
/*!*********************************************!*\
  !*** multi ./pages/creates/newDivision.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\SYGEFEX\Sygefex-front-Formik\pages\creates\newDivision.jsx */"./pages/creates/newDivision.jsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3JlYXRlcy9uZXdEaXZpc2lvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpdmlzaW9uL05ld0RpdmlzaW9uSG9va3MuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1ZXJpZXMmTXV0YXRpb25zJkZ1bmN0aW9ucy9GdW5jdGlvbnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1ZXJpZXMmTXV0YXRpb25zJkZ1bmN0aW9ucy9NdXRhdGlvbnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1ZXJpZXMmTXV0YXRpb25zJkZ1bmN0aW9ucy9RdWVyaWVzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvU3R5bGVkUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvRm9ybUlucHV0cy5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInl1cFwiIl0sIm5hbWVzIjpbIm5ld0RpdmlzaW9uIiwicHJvcHMiLCJFcnJvclN0eWxlcyIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiZ3JleSIsIkRpc3BsYXlFcnJvciIsImVycm9yIiwibWVzc2FnZSIsIm5ldHdvcmtFcnJvciIsInJlc3VsdCIsImVycm9ycyIsImxlbmd0aCIsIm1hcCIsImkiLCJyZXBsYWNlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiSW5wdXRHcm91cCIsIkFsbENvbnRyb2xzIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInNoYXBlIiwiZGl2TmFtZSIsInJlcXVpcmVkIiwiZGl2Q29kZSIsInJlZ2lvbiIsIk5ld0RpdmlzaW9uSG9va3MiLCJkYXRhIiwibG9hZGluZyIsImxvYWRpbmdDb3VudCIsImVycm9yQ291bnQiLCJ1c2VRdWVyeSIsImdldEFsbENvdW50cnlzUXVlcnkiLCJjb3VudHJpZXMiLCJjb25zb2xlIiwibG9nIiwicmVkdWNlZENvdW50cmllcyIsInJlZHVjZSIsIml0ZW0iLCJyZWZpbmVkQ291bnRyeSIsInJlbW92ZVR5cGVuYW1lIiwiaWQiLCJkYXRhUmVnaW9ucyIsImxvYWRpbmdSZWciLCJlcnJvclJlZyIsImdldEFsbFJlZ2lvbnNPZkFDb3VudHJ5UXVlcnkiLCJ2YXJpYWJsZXMiLCJnZXRDb3VudHJ5IiwiY291bnRyeSIsImdldFJlZ2lvbnNPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInJlZ05hbWUiLCJjcmVhdGVEaXZpc2lvbiIsInVzZU11dGF0aW9uIiwiY3JlYXRlRGl2aXNpb25NdXRhdGlvbiIsInZhbHVlcyIsImFjdGlvbnMiLCJzZXRTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwicmVzIiwiZ2V0T2JqZWN0RnJvbUlEIiwic2V0VGltZW91dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRGaWVsZFZhbHVlIiwiY3VzdG9tU3R5bGUiLCJ1bmlxdWVDb2RlR2VuIiwia2V5TGVuZ3RoIiwia2V5IiwiY2hhcmFjdGVycyIsImNoYXJhY3RlcnNMZW5ndGgiLCJzdWJzdHIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJvYmplY3RGcm9tQ29kZSIsImNvZGVWYWx1ZSIsInN0b3JlZE9iamVjdCIsImNhbmRDb2RlIiwic3VwcGxpZWRJRCIsInRoZU9iamVjdCIsImNlbnRlckV4YW1TZXNzaW9uT2JqZWN0RnJvbUNvZGUiLCJjZW50ZXJFeGFtU2Vzc2lvbiIsImNhbmRFeGFtU2Vzc2lvbkNvZGUiLCJjYW5kSUQiLCJleGFtSUQiLCJzZXNzaW9uSUQiLCJnZXRTZWxlY3RlZE9iamVjdCIsImRhdGFTb3VyY2UiLCJvYmplY3RJRCIsInRlbXBPYmplY3RzIiwic2VsZWN0ZWRPYmplY3QiLCJmaW5kIiwiTnVtYmVyIiwicHJvdG90eXBlIiwicGFkIiwic2l6ZSIsInMiLCJTdHJpbmciLCJjYWxjQ2FuZEF2ZSIsImNhbmRTY29yZXMiLCJhdmVUb3RhbCIsInRhbGx5Iiwic3ViamVjdEF2ZSIsImNvZWZmIiwiY29lZmZUb3RhbCIsImNhbmRBdmUiLCJjYWxjQ2FuZFRvdGFsU2NvcmUiLCJjYWxjQ2FuZFRvdGFsQ29lZmYiLCJyb3VuZEZsb2F0TnVtYmVyIiwiZGVjaW1hbHMiLCJyb3VuZCIsInVuZGVmaW5lZCIsIkFycmF5IiwiaXNBcnJheSIsInYiLCJuZXdPYmoiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsInVwbG9hZEZpbGUiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImZpbGUiLCJqc29uIiwic2V0U3RhdGUiLCJpbWFnZSIsInNlY3VyZV91cmwiLCJzaWduSW5DYW5kaWRhdGUiLCJncWwiLCJ1cGRhdGVTZXNzaW9uTXV0YXRpb24iLCJ1cGRhdGVFZHVjYXRpb25UeXBlTXV0YXRpb24iLCJ1cGRhdGVTdWJqZWN0VHlwZU11dGF0aW9uIiwidXBkYXRlU3ViamVjdE11dGF0aW9uIiwidXBkYXRlUmFua011dGF0aW9uIiwidXBkYXRlU2VyaWVzTXV0YXRpb24iLCJ1cGRhdGVEaXZpc2lvbk11dGF0aW9uIiwidXBkYXRlUmVnaW9uTXV0YXRpb24iLCJjcmVhdGVOZXdSZXBvcnRNdXRhdGlvbiIsImNyZWF0ZU5ld0dlbmRlck11dGF0aW9uIiwiY3JlYXRlUmVnaXN0cmF0aW9uTXV0YXRpb24iLCJjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvbk11dGF0aW9uIiwiY3JlYXRlUGhhc2VSYW5rTXV0YXRpb24iLCJjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvbkV4YW1pbmVyTXV0YXRpb24iLCJjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvblNlcmllc011dGF0aW9uIiwiY3JlYXRlQ2VudGVyTXV0YXRpb24iLCJjcmVhdGVTZXJpZXNNdXRhdGlvbiIsImNyZWF0ZUVkdWNhdGlvblR5cGVNdXRhdGlvbiIsImNyZWF0ZVRvd25NdXRhdGlvbiIsImNyZWF0ZU5ld1N1YmplY3RUeXBlTXV0YXRpb24iLCJjcmVhdGVOZXdTdWJqZWN0TXV0YXRpb24iLCJjcmVhdGVTdWJEaXZpc2lvbk11dGF0aW9uIiwiY3JlYXRlTmV3U2Vzc2lvbk11dGF0aW9uIiwiY3JlYXRlTmV3UmFua011dGF0aW9uIiwiY3JlYXRlTmV3UmVnaW9uTXV0YXRpb24iLCJzaWdudXBVc2VyTXV0YXRpb24iLCJsb2dpblVzZXJNdXRhdGlvbiIsImNyZWF0ZU5ld0NvdW50cnlNdXRhdGlvbiIsImNyZWF0ZVBoYXNlTXV0YXRpb24iLCJjcmVhdGVFeGFtTXV0YXRpb24iLCJyZWdpc3RlclN1YmplY3RTZXJpZXNNdXRhdGlvbiIsInJlZ2lzdGVyTmV3U3ViamVjdFNlcmllc011dGF0aW9uIiwiY3JlYXRlQ2FuZGlkYXRlTXV0YXRpb24iLCJjcmVhdGVFeGFtaW5lck11dGF0aW9uIiwidXBkYXRlU3ViRGl2aXNpb25NdXRhdGlvbiIsInVwZGF0ZUNlbnRlck11dGF0aW9uIiwidXBkYXRlVG93bk11dGF0aW9uIiwidXBkYXRlRXhhbU11dGF0aW9uIiwidXBkYXRlU2NvcmVNdXRhdGlvbiIsInVwZGF0ZUNhbmRpZGF0ZU11dGF0aW9uIiwidXBkYXRlR2VuZGVyTXV0YXRpb24iLCJzaWduVXBNdXRhdGlvbiIsInVwZGF0ZUl0ZW1NdXRhdGlvbiIsInVwZGF0ZU11dGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsImdldEFDZW50ZXJBZG1pblF1ZXJ5IiwibWVRdWVyeSIsInNpbmdsZUVkdWNhdGlvblR5cGVRdWVyeSIsImdldENFU0V4YW1pbmVyUXVlcnkiLCJzaW5nbGVTdWJqZWN0VHlwZVF1ZXJ5IiwiZ2V0QWxsQ2VudGVyQWRtaW5zUXVlcnkiLCJnZXRBbGxFZHVjYXRpb25UeXBlc1F1ZXJ5IiwiZ2V0QWxsUmVnaW9uc1F1ZXJ5IiwiZ2V0QWxsQ291bnRyeXNSZWdpb25DcmVhdGVRdWVyeSIsImdldENlbnRlclJlc3VsdHNRdWVyeSIsImdldENhbmRpZGF0ZVJlc3VsdHNRdWVyeSIsImdldEV4YW1pbmVyUmVnaXN0cmF0aW9uUXVlcnkiLCJnZXRBbGxDZW50ZXJSZXN1bHRzUXVlcnkiLCJnZXRFYWNoQ2FuZGlkYXRlUmVzdWx0c1F1ZXJ5IiwiZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURRdWVyeSIsImdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5IiwiZ2V0QWxsQ2FuZGlkYXRlUmVnaXN0cmF0aW9uSURzUXVlcnkiLCJnZXRDYW5kaWRhdGVJRFF1ZXJ5IiwiZ2V0UmVnaXN0cmF0aW9uSURGcm9tUmVnTnVtYmVyUXVlcnkiLCJnZXRDZW50ZXJJREZyb21DZW50ZXJDb2RlUXVlcnkiLCJnZXRDZW50ZXJSZWdpc3RyYXRpb25JRHNRdWVyeSIsImNlbnRlckV4YW1TZXNzaW9uU2VyaWVzRm9yUmVzdWx0c1F1ZXJ5IiwiY2VudGVyRXhhbVNlc3Npb25Gb3JSZXN1bHRzUXVlcnkiLCJjZW50ZXJFeGFtU2Vzc2lvblNlcmllc1Jlc3VsdHNRdWVyeSIsImdldENhbmRpZGF0ZUJ5Q2FuZENvZGVRdWVyeSIsImdldEFsbFJhbmtzUXVlcnkiLCJnZXRBbGxQaGFzZXNRdWVyeSIsImdldEFsbFN1YmplY3RzUXVlcnkiLCJnZXRBbGxHZW5kZXJzUXVlcnkiLCJnZXRBbGxTZXJpZXNPZkFuRWR1Y2F0aW9uVHlwZVF1ZXJ5IiwiZ2V0QWxsU2VyaWVzT2ZBQ2VudGVyRXhhbVNlc3Npb25RdWVyeSIsImdldEFsbFNlcmllc1F1ZXJ5IiwiZ2V0QWxsU3ViamVjdHNPZkFuRWR1Y1R5cGVRdWVyeSIsImdldEFsbFN1YmplY3RzT2ZBU2VyaWVzUXVlcnkiLCJnZXRBbGxFeGFtc1F1ZXJ5IiwiZ2V0QWxsU2Vzc2lvbnNRdWVyeSIsImdldEFsbERpdmlzaW9uc1F1ZXJ5IiwiZ2V0RGl2aXNpb25zT2ZBUmVnaW9uUXVlcnkiLCJnZXRTdWJEaXZpc2lvbnNPZkFEaXZpc2lvblF1ZXJ5IiwiZ2V0QWxsU3ViRGl2aXNpb25zUXVlcnkiLCJnZXRUb3duc09mQVN1YkRpdmlzaW9uUXVlcnkiLCJnZXRDZW50ZXJzT2ZBVG93blF1ZXJ5IiwiY2VudGVyc1BlclRvd25RdWVyeSIsImdldEFsbFN1YmplY3RUeXBlc1F1ZXJ5IiwiZ2V0QWxsQ2VudGVyc1F1ZXJ5IiwiZ2V0QWxsQ2FuZGlkYXRlc1F1ZXJ5Iiwic2luZ2xlQ2VudGVyUXVlcnkiLCJnZXRTaW5nbGVDZW50ZXJRdWVyeSIsImdldFNpbmdsZVByb2ZRdWVyeSIsImdldFNpbmdsZUNlbnRlckJ5Q29kZVF1ZXJ5IiwiZ2V0QVNpbmdsZUNlbnRlclF1ZXJ5Iiwic2luZ2xlVG93blF1ZXJ5IiwiZ2V0U2luZ2xlQ2VudGVyRXhhbVNlc3Npb25RdWVyeSIsImdldEFsbFJhbmtzT2ZBbkV4YW1QaGFzZVF1ZXJ5IiwiZ2V0UmVnaXN0ZXJlZENhbmRpZGF0ZUNvdW50UXVlcnkiLCJnZXRDZW50ZXJFeGFtU2Vzc2lvblNlcmllc1F1ZXJ5IiwiZ2V0RXhhbVNlc3Npb25RdWVyeSIsInNpbmdsZUV4YW1RdWVyeSIsInNpbmdsZUNhbmRpZGF0ZVF1ZXJ5MSIsInNpbmdsZUNhbmRpZGF0ZVF1ZXJ5Iiwic2luZ2xlRXhhbWluZXJRdWVyeSIsInZpZXdTaW5nbGVDYW5kaWRhdGVRdWVyeSIsImdldFNjb3JlSUQiLCJnZXRSZWdpc3RyYXRpb25zIiwic2luZ2xlU3ViRGl2aXNpb25RdWVyeSIsImdldFNpbmdsZVJlZ2lvblF1ZXJ5Iiwic2luZ2xlR2VuZGVyUXVlcnkiLCJzaW5nbGVTZXJpZXNRdWVyeSIsInNpbmdsZUNlbnRlckFkbWluUXVlcnkiLCJkYXRhRm9yQXZlcmFnZSIsInNpbmdsZURpdmlzaW9uUXVlcnkiLCJzaW5nbGVSYW5rUXVlcnkiLCJzaW5nbGVTdWJqZWN0UXVlcnkiLCJzaW5nbGVTZXNzaW9uUXVlcnkiLCJTdHlsZWRQYWdlIiwicHVyZVdoaXRlIiwiZm9ybUJTIiwiYmx1ZXMiLCJNaW5pU3R5bGVkUGFnZSIsIk1pbmltU3R5bGVkUGFnZSIsIkJpZ1N0eWxlZFBhZ2UiLCJCaWdnZXN0U3R5bGVkUGFnZSIsImtleWZyYW1lcyIsImNvbnRyb2wiLCJwcm92aWRlZCIsImZvbnRGYW1pbHkiLCJib3JkZXIiLCJib3JkZXJCb3R0b20iLCJmb250U2l6ZSIsIm91dGxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImFsaWduSXRlbXMiLCJvcHRpb24iLCJ0ZXh0QWxpZ24iLCJTdHlsZWRJbnB1dCIsImlucHV0IiwiYnJpdGlzaEJsdWUiLCJicml0aXNoUmVkIiwiU3R5bGVkTGFiZWwiLCJncmV5cyIsIlN0eWxlZFNlbGVjdCIsInNlbGVjdCIsIlN0eWxlZEVycm9yTWVzc2FnZSIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsIndoaXRlIiwiYnMyIiwiQnV0dG9uU3R5bGVkIiwic2FuZCIsIlN0eWxlZEZvcm0iLCJTeWdleElucHV0IiwiZmllbGQiLCJtZXRhIiwidXNlRmllbGQiLCJuYW1lIiwidG91Y2hlZCIsIlN5Z2V4U2VsZWN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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QTtBQUFBLEtBQXFCc1MsSUFBSSxDQUFDdFMsS0FBMUIsQ0FERCxHQUVHLElBTE4sQ0FERjtBQVNELENBWEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNyZWF0ZXNcXG5ld0RpdmlzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5ld0RpdmlzaW9uSG9va3MgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvZGl2aXNpb24vTmV3RGl2aXNpb25Ib29rcyc7XHJcblxyXG5cclxuY29uc3QgbmV3RGl2aXNpb24gPSAocHJvcHMpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PE5ld0RpdmlzaW9uSG9va3MgLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IG5ld0RpdmlzaW9uO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBFcnJvclN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3JleVsyXX07XHJcbiAgbWFyZ2luOjAgMS4xcmVtIDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgLyogYm9yZGVyLXJpZ2h0OiAwLjA4cmVtIHNvbGlkIHJlZDsgKi9cclxuICBib3JkZXItbGVmdDogMC4wNXJlbSBzb2xpZCByZWQ7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6MS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIHN0cm9uZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMTVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGlzcGxheUVycm9yID0gKHsgZXJyb3IgfSkgPT4ge1xyXG4gIGlmICghZXJyb3IgfHwgIWVycm9yLm1lc3NhZ2UpIHJldHVybiBudWxsO1xyXG4gIGlmIChlcnJvci5uZXR3b3JrRXJyb3IgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdCAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5tYXAoKGVycm9yLCBpKSA9PiAoXHJcbiAgICAgIDxFcnJvclN0eWxlcyBrZXk9e2l9PlxyXG4gICAgICAgIDxwIGRhdGEtdGVzdD1cImdyYXBocWwtZXJyb3JcIj5cclxuICAgICAgICAgIDxzdHJvbmc+UHJvYmxlbWUgUmVzZWF1eCE8L3N0cm9uZz5cclxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoXCJHcmFwaFFMIGVycm9yOiBcIiwgXCJcIil9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L0Vycm9yU3R5bGVzPlxyXG4gICAgKSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8RXJyb3JTdHlsZXMgPlxyXG4gICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XHJcbiAgICAgICAgPHN0cm9uZz5FcnJldXJlITwvc3Ryb25nPlxyXG4gICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoXCJHcmFwaFFMIGVycm9yOiBcIiwgXCJcIil9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvRXJyb3JTdHlsZXM+XHJcbiAgKTtcclxufTtcclxuXHJcbkRpc3BsYXlFcnJvci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZXJyb3I6IHt9XHJcbn07XHJcblxyXG5EaXNwbGF5RXJyb3IucHJvcFR5cGVzID0ge1xyXG4gIGVycm9yOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5RXJyb3I7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTWluaW1TdHlsZWRQYWdlIH0gZnJvbSAnLi4vc3R5bGVzL1N0eWxlZFBhZ2UnXHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi9FcnJvck1lc3NhZ2UuanMnO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcclxuaW1wb3J0IHsgY3VzdG9tU3R5bGUsIFN5Z2V4SW5wdXQsIFN0eWxlZEZvcm0sIEJ1dHRvblN0eWxlZCwgU3R5bGVkQnV0dG9uIH0gZnJvbSAnLi4vdXRpbHMvRm9ybUlucHV0cydcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBnZXRBbGxDb3VudHJ5c1F1ZXJ5LCBnZXRBbGxSZWdpb25zT2ZBQ291bnRyeVF1ZXJ5IH0gZnJvbSAnLi4vcXVlcmllcyZNdXRhdGlvbnMmRnVuY3Rpb25zL1F1ZXJpZXMnXHJcbmltcG9ydCB7IHJlbW92ZVR5cGVuYW1lLCBnZXRPYmplY3RGcm9tSUQgfSBmcm9tICcuLi9xdWVyaWVzJk11dGF0aW9ucyZGdW5jdGlvbnMvRnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBjcmVhdGVEaXZpc2lvbk11dGF0aW9uIH0gZnJvbSAnLi4vcXVlcmllcyZNdXRhdGlvbnMmRnVuY3Rpb25zL011dGF0aW9ucydcclxuXHJcblxyXG5jb25zdCBJbnB1dEdyb3VwID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBtYXJnaW46MCAxcmVtO1xyXG4gICBcclxuYDtcclxuY29uc3QgQWxsQ29udHJvbHMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXBcclxuICAgIC5vYmplY3QoKVxyXG4gICAgLnNoYXBlKHtcclxuICAgICAgICBkaXZOYW1lOiBZdXBcclxuICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgICAgIC5yZXF1aXJlZCgnTm9tIETDqXBhcnRlbWVudCBPYmxpZ2F0b2lyZScpLFxyXG4gICAgICAgIGRpdkNvZGU6IFl1cFxyXG4gICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgLnJlcXVpcmVkKCdDb2RlIETDqXBhcnRlbWVudCBPYmxpZ2F0b2lyZScpLFxyXG4gICAgICAgIHJlZ2lvbjogWXVwXHJcbiAgICAgICAgICAgIC5vYmplY3QoKVxyXG4gICAgICAgICAgICAucmVxdWlyZWQoJ1LDqWdpb24gT2JsaWdhdG9pcmUnKVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbmNvbnN0IE5ld0RpdmlzaW9uSG9va3MgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nOiBsb2FkaW5nQ291bnQsIGVycm9yOiBlcnJvckNvdW50IH0gPSB1c2VRdWVyeShnZXRBbGxDb3VudHJ5c1F1ZXJ5KVxyXG4gICAgeyBsb2FkaW5nQ291bnQgJiYgPHA+TG9hZGluZyBDb3VudHJpZXMgZnJvbSBEQi4uLjwvcD4gfVxyXG4gICAgeyBlcnJvckNvdW50ICYmIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+IH1cclxuICAgIGNvbnN0IHsgY291bnRyaWVzIH0gPSB7IC4uLmRhdGEgfVxyXG4gICAgY29uc29sZS5sb2coY291bnRyaWVzKTtcclxuICAgIGNvbnN0IHJlZHVjZWRDb3VudHJpZXMgPSBjb3VudHJpZXMgJiYgY291bnRyaWVzLnJlZHVjZSgoaXRlbSkgPT4gaXRlbSlcclxuICAgIGNvbnN0IHJlZmluZWRDb3VudHJ5ID0gcmVtb3ZlVHlwZW5hbWUocmVkdWNlZENvdW50cmllcylcclxuICAgIGNvbnNvbGUubG9nKHJlZmluZWRDb3VudHJ5KTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHsgLi4ucmVmaW5lZENvdW50cnkgfVxyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhUmVnaW9ucywgbG9hZGluZzogbG9hZGluZ1JlZywgZXJyb3I6IGVycm9yUmVnIH0gPSB1c2VRdWVyeShnZXRBbGxSZWdpb25zT2ZBQ291bnRyeVF1ZXJ5LCB7IHZhcmlhYmxlczogeyBpZCB9IH0pXHJcbiAgICB7IGxvYWRpbmdSZWcgJiYgPHA+TG9hZGluZyByZWdpb25zIGZyb20gREIuLi48L3A+IH1cclxuICAgIHsgZXJyb3JSZWcgJiYgPEVycm9yIGVycm9yPXtlcnJvclJlZ30gLz4gfVxyXG4gICAgY29uc3QgZ2V0Q291bnRyeSA9IGRhdGFSZWdpb25zICYmIGRhdGFSZWdpb25zLmNvdW50cnlcclxuICAgIGNvbnN0IHsgcmVnaW9uIH0gPSB7IC4uLmdldENvdW50cnkgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YVJlZ2lvbnMpO1xyXG4gICAgY29uc3QgZ2V0UmVnaW9uc09wdGlvbnMgPSByZWdpb24gJiYgcmVnaW9uLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICB2YWx1ZTogaXRlbS5pZCwgbGFiZWw6IGl0ZW0ucmVnTmFtZVxyXG4gICAgfSkpXHJcbiAgICBjb25zdCBbY3JlYXRlRGl2aXNpb24sIHsgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihjcmVhdGVEaXZpc2lvbk11dGF0aW9uKVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgZGl2TmFtZTogXCJcIiwgZGl2Q29kZTogXCJcIiwgcmVnaW9uOiBcIlwiIH19XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3ZhbGlkYXRpb25TY2hlbWF9XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCBhY3Rpb25zLCBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZURpdmlzaW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogdmFsdWVzLnJlZ2lvbiAmJiBnZXRPYmplY3RGcm9tSUQodmFsdWVzLnJlZ2lvbi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7KHsgc2V0RmllbGRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW5pbVN0eWxlZFBhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ob3V2ZWF1IETDqXBhcnRlbWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRGb3JtIGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGxDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtnZXRSZWdpb25zT3B0aW9uc30gbmFtZT1cInJlZ2lvblwiIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRGaWVsZFZhbHVlKCdyZWdpb24nLCB2YWx1ZSl9IHN0eWxlcz17Y3VzdG9tU3R5bGV9IHBsYWNlaG9sZGVyPVwibGEgUsOpZ2lvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3lnZXhJbnB1dCBuYW1lPVwiZGl2TmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJOb20gRMOpcGFydGVtZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTeWdleElucHV0IG5hbWU9XCJkaXZDb2RlXCIgdHlwZT1cInRleHRcIiBsYWJlbD1cIkNvZGUgRMOpcGFydGVtZW50XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblN0eWxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlZhbGlke2xvYWRpbmcgPyAnYXRpb24gZW4gY291cnMnIDogJ2VyJ308L1N0eWxlZEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25TdHlsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbGxDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWluaW1TdHlsZWRQYWdlPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG5cclxuXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmV3RGl2aXNpb25Ib29rcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29uY2F0IH0gZnJvbSAnYXBvbGxvLWxpbmsnXHJcblxyXG5cclxuY29uc3QgdW5pcXVlQ29kZUdlbiA9IGtleUxlbmd0aCA9PiB7XHJcbiAgdmFyIGksXHJcbiAgICBrZXkgPSAnJyxcclxuICAgIC8vICBjaGFyYWN0ZXJzID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OVwiO1xyXG4gICAgY2hhcmFjdGVycyA9XHJcbiAgICAgICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkAjJCUmR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5J1xyXG5cclxuICB2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoXHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBrZXlMZW5ndGg7IGkrKykge1xyXG4gICAga2V5ICs9IGNoYXJhY3RlcnMuc3Vic3RyKFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoICsgMSksXHJcbiAgICAgIDEsXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ga2V5XHJcbn1cclxuXHJcbmNvbnN0IG9iamVjdEZyb21Db2RlID0gY29kZVZhbHVlID0+IHtcclxuICBjb25zdCBzdG9yZWRPYmplY3QgPSB7XHJcbiAgICBjYW5kQ29kZTogYCR7Y29kZVZhbHVlfWAsXHJcbiAgfVxyXG4gIHJldHVybiBzdG9yZWRPYmplY3RcclxufVxyXG5cclxuY29uc3QgZ2V0T2JqZWN0RnJvbUlEID0gc3VwcGxpZWRJRCA9PiB7XHJcbiAgY29uc3QgdGhlT2JqZWN0ID0ge1xyXG4gICAgaWQ6IGAke3N1cHBsaWVkSUR9YCxcclxuICB9XHJcbiAgcmV0dXJuIHRoZU9iamVjdFxyXG59XHJcblxyXG5jb25zdCBjZW50ZXJFeGFtU2Vzc2lvbk9iamVjdEZyb21Db2RlID0gY29kZVZhbHVlID0+IHtcclxuICBjb25zdCBzdG9yZWRPYmplY3QgPSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvbjogYCR7Y29kZVZhbHVlfWAsXHJcbiAgfVxyXG4gIHJldHVybiBzdG9yZWRPYmplY3RcclxufVxyXG5cclxuY29uc3QgY2FuZEV4YW1TZXNzaW9uQ29kZSA9IChjYW5kSUQsIGV4YW1JRCwgc2Vzc2lvbklEKSA9PiB7XHJcbiAgcmV0dXJuIGAke2NhbmRJRCArIGV4YW1JRCArIHNlc3Npb25JRH1gXHJcbn1cclxuXHJcbmNvbnN0IGdldFNlbGVjdGVkT2JqZWN0ID0gKGRhdGFTb3VyY2UsIG9iamVjdElEKSA9PiB7XHJcbiAgLy8gMSBjb3B5IHRoZSBkYXRhIHNvdXJjZVxyXG4gIGlmIChkYXRhU291cmNlLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IHRlbXBPYmplY3RzID0gWy4uLmRhdGFTb3VyY2VdXHJcbiAgICAvLyBnZXQgdGhlIG9iamVjdFxyXG4gICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSB0ZW1wT2JqZWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gb2JqZWN0SUQpXHJcbiAgICByZXR1cm4gc2VsZWN0ZWRPYmplY3RcclxuICB9XHJcbn1cclxuLy8gZnVuY3Rpb24gdG8gbW9kZWwgYSBudW1iZXIgd2l0aCBsZWFkaW5nIHplcm9lc1xyXG5OdW1iZXIucHJvdG90eXBlLnBhZCA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgdmFyIHMgPSBTdHJpbmcodGhpcylcclxuICB3aGlsZSAocy5sZW5ndGggPCAoc2l6ZSB8fCAyKSkge1xyXG4gICAgcyA9ICcwJyArIHNcclxuICB9XHJcbiAgcmV0dXJuIHNcclxufVxyXG5cclxuY29uc3QgY2FsY0NhbmRBdmUgPSBjYW5kU2NvcmVzID0+IHtcclxuICBjb25zdCBhdmVUb3RhbCA9XHJcbiAgICBjYW5kU2NvcmVzICYmXHJcbiAgICBjYW5kU2NvcmVzLnJlZHVjZSgodGFsbHksIGl0ZW0pID0+IHRhbGx5ICsgaXRlbS5zdWJqZWN0QXZlICogaXRlbS5jb2VmZiwgMClcclxuICBjb25zdCBjb2VmZlRvdGFsID0gY2FuZFNjb3Jlcy5yZWR1Y2UoXHJcbiAgICAodGFsbHksIGl0ZW0pID0+IChpdGVtLnN1YmplY3RBdmUgPT09IG51bGwgPyB0YWxseSA6IHRhbGx5ICsgaXRlbS5jb2VmZiksXHJcbiAgICAwLFxyXG4gIClcclxuICBjb25zdCBjYW5kQXZlID0gYXZlVG90YWwgLyBjb2VmZlRvdGFsXHJcbiAgcmV0dXJuIGNhbmRBdmVcclxufVxyXG5jb25zdCBjYWxjQ2FuZFRvdGFsU2NvcmUgPSBjYW5kU2NvcmVzID0+IHtcclxuICBjb25zdCBhdmVUb3RhbCA9XHJcbiAgICBjYW5kU2NvcmVzICYmXHJcbiAgICBjYW5kU2NvcmVzLnJlZHVjZSgodGFsbHksIGl0ZW0pID0+IHRhbGx5ICsgaXRlbS5zdWJqZWN0QXZlICogaXRlbS5jb2VmZiwgMClcclxuICByZXR1cm4gYXZlVG90YWxcclxufVxyXG5jb25zdCBjYWxjQ2FuZFRvdGFsQ29lZmYgPSBjYW5kU2NvcmVzID0+IHtcclxuICBjb25zdCBjb2VmZlRvdGFsID1cclxuICAgIGNhbmRTY29yZXMgJiZcclxuICAgIGNhbmRTY29yZXMucmVkdWNlKFxyXG4gICAgICAodGFsbHksIGl0ZW0pID0+IChpdGVtLnN1YmplY3RBdmUgPT09IG51bGwgPyB0YWxseSA6IHRhbGx5ICsgaXRlbS5jb2VmZiksXHJcbiAgICAgIDAsXHJcbiAgICApXHJcbiAgcmV0dXJuIGNvZWZmVG90YWxcclxufVxyXG5jb25zdCByb3VuZEZsb2F0TnVtYmVyID0gKHZhbHVlLCBkZWNpbWFscykgPT4ge1xyXG4gIHJldHVybiBOdW1iZXIoTWF0aC5yb3VuZCh2YWx1ZSArICdlJyArIGRlY2ltYWxzKSArICdlLScgKyBkZWNpbWFscylcclxufVxyXG5jb25zdCByZW1vdmVUeXBlbmFtZSA9ICh2YWx1ZSkgPT4ge1xyXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLm1hcCh2ID0+IHJlbW92ZVR5cGVuYW1lKHYpKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgIGNvbnN0IG5ld09iaiA9IHt9O1xyXG4gICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZdKSA9PiB7XHJcbiAgICAgIGlmIChrZXkgIT09ICdfX3R5cGVuYW1lJykge1xyXG4gICAgICAgIG5ld09ialtrZXldID0gcmVtb3ZlVHlwZW5hbWUodik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ld09iajtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5cclxuY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgY29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcclxuICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlc1swXSk7XHJcbiAgZGF0YS5hcHBlbmQoJ3VwbG9hZF9wcmVzZXQnLCAnaW5leGltYWdlcycpO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jbG91ZGluYXJ5LmNvbS92MV8xL2luZXgvaW1hZ2UvdXBsb2FkJywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBkYXRhXHJcbiAgfSk7XHJcbiAgY29uc3QgZmlsZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgLy8gdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBmaWxlLnNlY3VyZV91cmwgfSk7XHJcbiAgc2V0U3RhdGUoeyBpbWFnZTogZmlsZS5zZWN1cmVfdXJsIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY2FuZEV4YW1TZXNzaW9uQ29kZSxcclxuICByb3VuZEZsb2F0TnVtYmVyLFxyXG4gIGNhbGNDYW5kVG90YWxTY29yZSxcclxuICBjYWxjQ2FuZFRvdGFsQ29lZmYsXHJcbiAgY2FsY0NhbmRBdmUsXHJcbiAgb2JqZWN0RnJvbUNvZGUsXHJcbiAgdW5pcXVlQ29kZUdlbixcclxuICBnZXRTZWxlY3RlZE9iamVjdCxcclxuICBnZXRPYmplY3RGcm9tSUQsXHJcbiAgcmVtb3ZlVHlwZW5hbWUsXHJcbiAgdXBsb2FkRmlsZSxcclxuICBjZW50ZXJFeGFtU2Vzc2lvbk9iamVjdEZyb21Db2RlLFxyXG59XHJcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXHJcblxyXG4vLyoqKioqKioqKioqKmNyZWF0ZSBtdXRhdGlvbnMgICovXHJcbmNvbnN0IHNpZ25JbkNhbmRpZGF0ZSA9IGdxbGBcclxuICBtdXRhdGlvbiBzaWduSW5DYW5kaWRhdGUoJGNhbmRDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBjYW5kaWRhdGVTaWduSW4oY2FuZENvZGU6ICRjYW5kQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG4vL1xyXG5cclxuY29uc3QgdXBkYXRlU2Vzc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVNlc3Npb25NdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkc2Vzc2lvbk5hbWU6IFN0cmluZ1xyXG4gICAgJHNlc3Npb25Db2RlOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZVNlc3Npb24oXHJcbiAgICAgIGlkOiAkaWRcclxuICAgICAgc2Vzc2lvbk5hbWU6ICRzZXNzaW9uTmFtZVxyXG4gICAgICBzZXNzaW9uQ29kZTogJHNlc3Npb25Db2RlXHJcbiAgICApIHtcclxuICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgc2Vzc2lvbkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVwZGF0ZUVkdWNhdGlvblR5cGVNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVFZHVjYXRpb25UeXBlTXV0YXRpb24oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJGVkdWNhdGlvblR5cGVOYW1lOiBTdHJpbmdcclxuICAgICRlZHVjYXRpb25UeXBlQ29kZTogU3RyaW5nXHJcbiAgKSB7XHJcbiAgICB1cGRhdGVFZHVjYXRpb25UeXBlKFxyXG4gICAgICBpZDogJGlkXHJcbiAgICAgIGVkdWNhdGlvblR5cGVOYW1lOiAkZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgZWR1Y2F0aW9uVHlwZUNvZGU6ICRlZHVjYXRpb25UeXBlQ29kZVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVkdWNhdGlvblR5cGVOYW1lXHJcbiAgICAgIGVkdWNhdGlvblR5cGVDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IHVwZGF0ZVN1YmplY3RUeXBlTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlU3ViamVjdFR5cGVNdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkc3ViamVjdFR5cGVOYW1lOiBTdHJpbmdcclxuICAgICRzdWJqZWN0VHlwZUNvZGU6IFN0cmluZ1xyXG4gICkge1xyXG4gICAgdXBkYXRlU3ViamVjdFR5cGUoXHJcbiAgICAgIGlkOiAkaWRcclxuICAgICAgc3ViamVjdFR5cGVOYW1lOiAkc3ViamVjdFR5cGVOYW1lXHJcbiAgICAgIHN1YmplY3RUeXBlQ29kZTogJHN1YmplY3RUeXBlQ29kZVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHN1YmplY3RUeXBlTmFtZVxyXG4gICAgICBzdWJqZWN0VHlwZUNvZGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVwZGF0ZVN1YmplY3RNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVTdWJqZWN0TXV0YXRpb24oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJHN1YmplY3ROYW1lOiBTdHJpbmdcclxuICAgICRzdWJqZWN0Q29kZTogU3RyaW5nXHJcbiAgKSB7XHJcbiAgICB1cGRhdGVTdWJqZWN0KFxyXG4gICAgICBpZDogJGlkXHJcbiAgICAgIHN1YmplY3ROYW1lOiAkc3ViamVjdE5hbWVcclxuICAgICAgc3ViamVjdENvZGU6ICRzdWJqZWN0Q29kZVxyXG4gICAgKSB7XHJcbiAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgIHN1YmplY3RDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCB1cGRhdGVSYW5rTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlUmFua011dGF0aW9uKCRpZDogSUQhLCAkcmFua05hbWU6IFN0cmluZywgJHJhbmtDb2RlOiBTdHJpbmcpIHtcclxuICAgIHVwZGF0ZVJhbmsoaWQ6ICRpZCwgcmFua05hbWU6ICRyYW5rTmFtZSwgcmFua0NvZGU6ICRyYW5rQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICByYW5rTmFtZVxyXG4gICAgICByYW5rQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgdXBkYXRlU2VyaWVzTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlU2VyaWVzTXV0YXRpb24oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJHNlcmllc05hbWU6IFN0cmluZ1xyXG4gICAgJHNlcmllc0NvZGU6IFN0cmluZ1xyXG4gICkge1xyXG4gICAgdXBkYXRlU2VyaWVzKGlkOiAkaWQsIHNlcmllc05hbWU6ICRzZXJpZXNOYW1lLCBzZXJpZXNDb2RlOiAkc2VyaWVzQ29kZSkge1xyXG4gICAgICBzZXJpZXNOYW1lXHJcbiAgICAgIHNlcmllc0NvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVwZGF0ZURpdmlzaW9uTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlRGl2aXNpb25NdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkZGl2TmFtZTogU3RyaW5nXHJcbiAgICAkZGl2Q29kZTogU3RyaW5nXHJcbiAgKSB7XHJcbiAgICB1cGRhdGVEaXZpc2lvbihpZDogJGlkLCBkaXZOYW1lOiAkZGl2TmFtZSwgZGl2Q29kZTogJGRpdkNvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgZGl2TmFtZVxyXG4gICAgICBkaXZDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCB1cGRhdGVSZWdpb25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVSZWdpb25NdXRhdGlvbigkaWQ6IElEISwgJHJlZ05hbWU6IFN0cmluZywgJHJlZ0NvZGU6IFN0cmluZykge1xyXG4gICAgdXBkYXRlUmVnaW9uKGlkOiAkaWQsIHJlZ05hbWU6ICRyZWdOYW1lLCByZWdDb2RlOiAkcmVnQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICByZWdOYW1lXHJcbiAgICAgIHJlZ0NvZGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld1JlcG9ydE11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZU5ld1JlcG9ydE11dGF0aW9uKFxyXG4gICAgJHJlcG9ydEltYWdlOiBTdHJpbmchXHJcbiAgICAkcmVwb3J0TmFtZTogU3RyaW5nIVxyXG4gICAgJGNlbnRlckV4YW1TZXNzaW9uRXhhbWluZXI6IENlbnRlckV4YW1TZXNzaW9uRXhhbWluZXJXaGVyZVVuaXF1ZUlucHV0IVxyXG5cclxuICApIHtcclxuICAgIGNyZWF0ZVJlcG9ydChcclxuICAgICAgcmVwb3J0SW1hZ2U6ICRyZXBvcnRJbWFnZVxyXG4gICAgICByZXBvcnROYW1lOiAkcmVwb3J0TmFtZVxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbkV4YW1pbmVyOiAkY2VudGVyRXhhbVNlc3Npb25FeGFtaW5lclxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHJlcG9ydE5hbWVcclxuICAgICAgcmVwb3J0SW1hZ2VcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld0dlbmRlck11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZU5ld0dlbmRlck11dGF0aW9uKCRnZW5kZXJOYW1lOiBTdHJpbmchLCAkZ2VuZGVyQ29kZTogU3RyaW5nISkge1xyXG4gICAgY3JlYXRlR2VuZGVyKGdlbmRlck5hbWU6ICRnZW5kZXJOYW1lLCBnZW5kZXJDb2RlOiAkZ2VuZGVyQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBnZW5kZXJDb2RlXHJcbiAgICAgIGdlbmRlck5hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZVJlZ2lzdHJhdGlvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVJlZ2lzdHJhdGlvbk11dGF0aW9uKFxyXG4gICAgJGNhbmRpZGF0ZTogQ2FuZGlkYXRlV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjYW5kRXhhbVNlY3JldENvZGU6IFN0cmluZyFcclxuICAgICRjYW5kRXhhbVNlc3Npb246IFN0cmluZyFcclxuICAgICRjYW5kUmVnaXN0cmF0aW9uTnVtYmVyOiBTdHJpbmchXHJcbiAgICAkY2VudGVyRXhhbVNlc3Npb246IENlbnRlckV4YW1TZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvblNlcmllczogQ2VudGVyRXhhbVNlc3Npb25TZXJpZXNXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHNlcmllczogU2VyaWVzV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNyZWF0ZVJlZ2lzdHJhdGlvbihcclxuICAgICAgY2FuZGlkYXRlOiAkY2FuZGlkYXRlXHJcbiAgICAgIGNhbmRFeGFtU2VjcmV0Q29kZTogJGNhbmRFeGFtU2VjcmV0Q29kZVxyXG4gICAgICBjYW5kRXhhbVNlc3Npb246ICRjYW5kRXhhbVNlc3Npb25cclxuICAgICAgY2FuZFJlZ2lzdHJhdGlvbk51bWJlcjogJGNhbmRSZWdpc3RyYXRpb25OdW1iZXJcclxuICAgICAgY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvblxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllczogJGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzXHJcbiAgICAgIHNlcmllczogJHNlcmllc1xyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGNlbnRlciB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgY2VudGVyTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYW5kaWRhdGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvbk11dGF0aW9uKFxyXG4gICAgJGV4YW1TZXNzaW9uOiBFeGFtU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkY2VudGVyOiBDZW50ZXJXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb24oZXhhbVNlc3Npb246ICRleGFtU2Vzc2lvbiwgY2VudGVyOiAkY2VudGVyKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVQaGFzZVJhbmtNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVQaGFzZVJhbmtNdXRhdGlvbihcclxuICAgICRwaGFzZTogUGhhc2VXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHJhbmtOYW1lOiAgU3RyaW5nISAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAkcmFua0NvZGU6ICBTdHJpbmchICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICkge1xyXG4gICAgY3JlYXRlUGhhc2VSYW5rKHBoYXNlOiAkcGhhc2UsIHJhbmtOYW1lIDogJHJhbmtOYW1lLCByYW5rQ29kZTogJHJhbmtDb2RlICl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25FeGFtaW5lck11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uRXhhbWluZXJNdXRhdGlvbihcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvbjogQ2VudGVyRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGV4YW1pbmVyOiAgRXhhbWluZXJXaGVyZVVuaXF1ZUlucHV0ISBcclxuICAgICRwaGFzZVJhbms6ICBQaGFzZVJhbmtXaGVyZVVuaXF1ZUlucHV0ISBcclxuICApIHtcclxuICAgIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uRXhhbWluZXIoXHJcbiAgICBwaGFzZVJhbms6ICRwaGFzZVJhbmssXHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvbjogJGNlbnRlckV4YW1TZXNzaW9uLFxyXG4gICAgZXhhbWluZXI6ICRleGFtaW5lclxyXG4gICAgKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvblNlcmllc011dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uU2VyaWVzTXV0YXRpb24oXHJcbiAgICAkc2VyaWVzOiBTZXJpZXNXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNlbnRlckV4YW1TZXNzaW9uOiBDZW50ZXJFeGFtU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvblNlcmllcyhcclxuICAgICAgc2VyaWVzOiAkc2VyaWVzXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uOiAkY2VudGVyRXhhbVNlc3Npb25cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuXHJcbi8vIGNvbnN0IGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uZXhhbWluZXJvcml0eU11dGF0aW9uID0gZ3FsYFxyXG4vLyAgIG11dGF0aW9uIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uZXhhbWluZXJvcml0eU11dGF0aW9uKFxyXG4vLyAgICAgJHJhbms6IFJhbmtXaGVyZVVuaXF1ZUlucHV0IVxyXG4vLyAgICAgJGNlbnRlckV4YW1TZXNzaW9uOiBDZW50ZXJFeGFtU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbi8vICAgICAkZXhhbWluZXJOYW1lOiBTdHJpbmchXHJcbi8vICAgICAkZXhhbWluZXJDb2RlOiBTdHJpbmchXHJcbi8vICAgICAkZXhhbWluZXJDTkk6IFN0cmluZyFcclxuLy8gICAgICRleGFtaW5lclBob25lOiBJbnQhXHJcbi8vICAgICAkZXhhbWluZXJNYXRyaWN1bGU6IFN0cmluZyFcclxuLy8gICApIHtcclxuLy8gICAgIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uZXhhbWluZXJvcml0eShcclxuLy8gICAgICAgcmFuazogJHJhbmtcclxuLy8gICAgICAgY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvblxyXG4vLyAgICAgICBleGFtaW5lckNOSTogJGV4YW1pbmVyQ05JXHJcbi8vICAgICAgIGV4YW1pbmVyTmFtZTogJGV4YW1pbmVyTmFtZVxyXG4vLyAgICAgICBleGFtaW5lckNvZGU6ICRleGFtaW5lckNvZGVcclxuLy8gICAgICAgZXhhbWluZXJQaG9uZTogJGV4YW1pbmVyUGhvbmVcclxuLy8gICAgICAgZXhhbWluZXJNYXRyaWN1bGU6ICRleGFtaW5lck1hdHJpY3VsZVxyXG4vLyAgICAgKSB7XHJcbi8vICAgICAgIGV4YW1pbmVyTmFtZVxyXG4vLyAgICAgICBleGFtaW5lckNvZGVcclxuLy8gICAgICAgZXhhbWluZXJQaG9uZVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gYFxyXG5cclxuY29uc3QgY3JlYXRlRGl2aXNpb25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVEaXZpc2lvbk11dGF0aW9uKFxyXG4gICAgJGRpdk5hbWU6IFN0cmluZyFcclxuICAgICRkaXZDb2RlOiBTdHJpbmchXHJcbiAgICAkcmVnaW9uOiBSZWdpb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlRGl2aXNpb24oZGl2TmFtZTogJGRpdk5hbWUsIGRpdkNvZGU6ICRkaXZDb2RlLCByZWdpb246ICRyZWdpb24pIHtcclxuICAgICAgaWRcclxuICAgICAgZGl2TmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlQ2VudGVyTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlQ2VudGVyTXV0YXRpb24oXHJcbiAgICAkY2VudGVyTmFtZTogU3RyaW5nIVxyXG4gICAgJGNlbnRlck51bWJlcjogSW50XHJcbiAgICAkY2VudGVyQ29kZTogU3RyaW5nIVxyXG4gICAgJGNlbnRlclNlY3JldENvZGU6IFN0cmluZyFcclxuICAgICR0b3duOiBUb3duV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNyZWF0ZUNlbnRlcihcclxuICAgICAgY2VudGVyU2VjcmV0Q29kZTogJGNlbnRlclNlY3JldENvZGVcclxuICAgICAgY2VudGVyTmFtZTogJGNlbnRlck5hbWVcclxuICAgICAgY2VudGVyTnVtYmVyOiAkY2VudGVyTnVtYmVyXHJcbiAgICAgIGNlbnRlckNvZGU6ICRjZW50ZXJDb2RlXHJcbiAgICAgIHRvd246ICR0b3duXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgY2VudGVyTmFtZVxyXG4gICAgICBjZW50ZXJTZWNyZXRDb2RlXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgICAgdG93biB7XHJcbiAgICAgICAgdG93bk5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlU2VyaWVzTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlU2VyaWVzTXV0YXRpb24oXHJcbiAgICAkc2VyaWVzTmFtZTogU3RyaW5nIVxyXG4gICAgJHNlcmllc0NvZGU6IFN0cmluZyFcclxuICAgICRlZHVjYXRpb25UeXBlOiBFZHVjYXRpb25UeXBlV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNyZWF0ZVNlcmllcyhcclxuICAgICAgc2VyaWVzTmFtZTogJHNlcmllc05hbWVcclxuICAgICAgc2VyaWVzQ29kZTogJHNlcmllc0NvZGVcclxuICAgICAgZWR1Y2F0aW9uVHlwZTogJGVkdWNhdGlvblR5cGVcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBzZXJpZXNOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IGNyZWF0ZUVkdWNhdGlvblR5cGVNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVFZHVjYXRpb25UeXBlTXV0YXRpb24oXHJcbiAgICAkZWR1Y2F0aW9uVHlwZU5hbWU6IFN0cmluZyFcclxuICAgICRlZHVjYXRpb25UeXBlQ29kZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgY3JlYXRlRWR1Y2F0aW9uVHlwZShcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWU6ICRlZHVjYXRpb25UeXBlTmFtZVxyXG4gICAgICBlZHVjYXRpb25UeXBlQ29kZTogJGVkdWNhdGlvblR5cGVDb2RlXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZVRvd25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVUb3duTXV0YXRpb24oXHJcbiAgICAkdG93bk5hbWU6IFN0cmluZyFcclxuICAgICR0b3duQ29kZTogU3RyaW5nIVxyXG4gICAgJHN1YkRpdjogU3ViRGl2aXNpb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlVG93bih0b3duTmFtZTogJHRvd25OYW1lLCB0b3duQ29kZTogJHRvd25Db2RlLCBzdWJEaXY6ICRzdWJEaXYpIHtcclxuICAgICAgaWRcclxuICAgICAgdG93bk5hbWVcclxuICAgICAgdG93bkNvZGVcclxuICAgICAgc3ViRGl2IHtcclxuICAgICAgICBzdWJEaXZOYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld1N1YmplY3RUeXBlTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlTmV3U3ViamVjdFR5cGVNdXRhdGlvbihcclxuICAgICRzdWJqZWN0VHlwZU5hbWU6IFN0cmluZyFcclxuICAgICRzdWJqZWN0VHlwZUNvZGU6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZVN1YmplY3RUeXBlKFxyXG4gICAgICBzdWJqZWN0VHlwZU5hbWU6ICRzdWJqZWN0VHlwZU5hbWVcclxuICAgICAgc3ViamVjdFR5cGVDb2RlOiAkc3ViamVjdFR5cGVDb2RlXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgc3ViamVjdFR5cGVOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVOZXdTdWJqZWN0TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlTmV3U3ViamVjdE11dGF0aW9uKFxyXG4gICAgJHN1YmplY3ROYW1lOiBTdHJpbmchXHJcbiAgICAkc3ViamVjdENvZGU6IFN0cmluZyFcclxuICAgICRzdWJqZWN0VHlwZTogU3ViamVjdFR5cGVXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGVkdWNUeXBlOiBFZHVjYXRpb25UeXBlV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNyZWF0ZVN1YmplY3QoXHJcbiAgICAgIHN1YmplY3ROYW1lOiAkc3ViamVjdE5hbWVcclxuICAgICAgZWR1Y1R5cGU6ICRlZHVjVHlwZVxyXG4gICAgICBzdWJqZWN0Q29kZTogJHN1YmplY3RDb2RlXHJcbiAgICAgIHN1YmplY3RUeXBlOiAkc3ViamVjdFR5cGVcclxuICAgICkge1xyXG4gICAgICBzdWJqZWN0Q29kZVxyXG4gICAgICBzdWJqZWN0TmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlU3ViRGl2aXNpb25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVTdWJEaXZpc2lvbk11dGF0aW9uKFxyXG4gICAgJHN1YkRpdk5hbWU6IFN0cmluZyFcclxuICAgICRzdWJEaXZDb2RlOiBTdHJpbmchXHJcbiAgICAkZGl2aXNpb246IERpdmlzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNyZWF0ZVN1YkRpdmlzaW9uKFxyXG4gICAgICBzdWJEaXZOYW1lOiAkc3ViRGl2TmFtZVxyXG4gICAgICBzdWJEaXZDb2RlOiAkc3ViRGl2Q29kZVxyXG4gICAgICBkaXZpc2lvbjogJGRpdmlzaW9uXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgc3ViRGl2TmFtZVxyXG4gICAgICBzdWJEaXZDb2RlXHJcbiAgICAgIGRpdmlzaW9uIHtcclxuICAgICAgICBkaXZOYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld1Nlc3Npb25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVOZXdTZXNzaW9uTXV0YXRpb24oXHJcbiAgICAkc2Vzc2lvbk5hbWU6IFN0cmluZyFcclxuICAgICRzZXNzaW9uQ29kZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgY3JlYXRlU2Vzc2lvbihzZXNzaW9uTmFtZTogJHNlc3Npb25OYW1lLCBzZXNzaW9uQ29kZTogJHNlc3Npb25Db2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNlc3Npb25OYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVOZXdSYW5rTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlTmV3UmFua011dGF0aW9uKCRyYW5rTmFtZTogU3RyaW5nISwgJHJhbmtDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBjcmVhdGVSYW5rKHJhbmtOYW1lOiAkcmFua05hbWUsIHJhbmtDb2RlOiAkcmFua0NvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgcmFua05hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVOZXdSZWdpb25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVOZXdSZWdpb25NdXRhdGlvbihcclxuICAgICRyZWdOYW1lOiBTdHJpbmchXHJcbiAgICAgJHJlZ0NvZGU6IFN0cmluZyFcclxuICAgICAgJGNvdW50cnk6IENvdW50cnlXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgICApIHtcclxuICAgIGNyZWF0ZVJlZ2lvbihcclxuICAgICAgIGNvdW50cnk6ICRjb3VudHJ5IFxyXG4gICAgICAgIHJlZ05hbWU6ICRyZWdOYW1lXHJcbiAgICAgICAgIHJlZ0NvZGU6ICRyZWdDb2RlXHJcbiAgICAgICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICByZWdOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBzaWdudXBVc2VyTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gc2lnbnVwVXNlck11dGF0aW9uKFxyXG4gICAgJG5hbWU6IFN0cmluZyFcclxuICAgICAkZW1haWw6IFN0cmluZyFcclxuICAgICAgJHBhc3N3b3JkOiBTdHJpbmchXHJcbiAgICAgICkge1xyXG4gICAgc2lnbnVwKFxyXG4gICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZCBcclxuICAgICAgICBuYW1lOiAkbmFtZVxyXG4gICAgICAgICBlbWFpbDogJGVtYWlsXHJcbiAgICAgICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBsb2dpblVzZXJNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBsb2dpblVzZXJNdXRhdGlvbihcclxuICAgICAkZW1haWw6IFN0cmluZyFcclxuICAgICAgJHBhc3N3b3JkOiBTdHJpbmchXHJcbiAgICAgICkge1xyXG4gICAgbG9naW4oXHJcbiAgICAgICBwYXNzd29yZDogJHBhc3N3b3JkIFxyXG4gICAgICAgICBlbWFpbDogJGVtYWlsXHJcbiAgICAgICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBlbWFpbFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlTmV3Q291bnRyeU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZU5ld0NvdW50cnlNdXRhdGlvbigkY291bnRyeU5hbWU6IFN0cmluZyEsICRjb3VudHJ5Q29kZTogU3RyaW5nISkge1xyXG4gICAgY3JlYXRlQ291bnRyeShjb3VudHJ5TmFtZTogJGNvdW50cnlOYW1lLCBjb3VudHJ5Q29kZTogJGNvdW50cnlDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNvdW50cnlOYW1lXHJcbiAgICAgIGNvdW50cnlDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVQaGFzZU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVBoYXNlTXV0YXRpb24oJHBoYXNlTmFtZTogU3RyaW5nISwgJHBoYXNlQ29kZTogU3RyaW5nISl7XHJcbiAgICBjcmVhdGVQaGFzZShwaGFzZU5hbWU6ICRwaGFzZU5hbWUsIHBoYXNlQ29kZTogJHBoYXNlQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBwaGFzZU5hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZUV4YW1NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVFeGFtTXV0YXRpb24oJGV4YW1OYW1lOiBTdHJpbmchLCAkZXhhbUNvZGU6IFN0cmluZyEpIHtcclxuICAgIGNyZWF0ZUV4YW0oZXhhbU5hbWU6ICRleGFtTmFtZSwgZXhhbUNvZGU6ICRleGFtQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBleGFtTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgcmVnaXN0ZXJTdWJqZWN0U2VyaWVzTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gcmVnaXN0ZXJTdWJqZWN0U2VyaWVzTXV0YXRpb24oXHJcbiAgICAkc3ViamVjdDogU3ViamVjdFdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkc2VyaWVzOiBTZXJpZXNXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNvZWZmOiBJbnQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVTdWJqZWN0U2VyaWVzKHN1YmplY3Q6ICRzdWJqZWN0LCBzZXJpZXM6ICRzZXJpZXMsIGNvZWZmOiAkY29lZmYpIHtcclxuICAgICAgaWRcclxuICAgICAgc2VyaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHJlZ2lzdGVyTmV3U3ViamVjdFNlcmllc011dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHJlZ2lzdGVyTmV3U3ViamVjdFNlcmllc011dGF0aW9uKFxyXG4gICAgJHNlcmllczogU2VyaWVzV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjb2VmZjogSW50IVxyXG4gICAgJHN1YmplY3ROYW1lOiBTdHJpbmchXHJcbiAgICAkc3ViamVjdENvZGU6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZVN1YmplY3RTZXJpZXMoXHJcbiAgICAgIHN1YmplY3RDb2RlOiAkc3ViamVjdENvZGVcclxuICAgICAgc3ViamVjdE5hbWU6ICRzdWJqZWN0TmFtZVxyXG4gICAgICBzZXJpZXM6ICRzZXJpZXNcclxuICAgICAgY29lZmY6ICRjb2VmZlxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNlcmllcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzZXJpZXNOYW1lXHJcbiAgICAgICAgc3ViamVjdFNlcmllcyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICAgIHN1YmplY3RDb2RlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVDYW5kaWRhdGVNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVDYW5kaWRhdGVNdXRhdGlvbihcclxuICAgICRjYW5kMXN0TmFtZTogU3RyaW5nIVxyXG4gICAgJGNhbmQybmROYW1lOiBTdHJpbmdcclxuICAgICRjYW5kM3JkTmFtZTogU3RyaW5nXHJcbiAgICAkZGFkTmFtZTogU3RyaW5nXHJcbiAgICAkbW9tTmFtZTogU3RyaW5nXHJcbiAgICAkY2FuZENvZGU6IFN0cmluZ1xyXG4gICAgJGVtYWlsOiBTdHJpbmchXHJcbiAgICAkaW1hZ2U6IFN0cmluZyFcclxuICAgICRwaG9uZU51bWI6IEludFxyXG4gICAgJGRhdGVPZkJpcnRoOiBEYXRlVGltZVxyXG4gICAgJGJpcnRoQ2VydE51bWJlcjogU3RyaW5nXHJcbiAgICAkcGxhY2VPZkJpcnRoOiBTdHJpbmdcclxuICAgICRnZW5kZXI6IEdlbmRlcldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVDYW5kaWRhdGUoXHJcbiAgICAgIGNhbmQxc3ROYW1lOiAkY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWU6ICRjYW5kMm5kTmFtZVxyXG4gICAgICBkYWROYW1lOiAkZGFkTmFtZVxyXG4gICAgICBtb21OYW1lOiAkbW9tTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZTogJGNhbmQzcmROYW1lXHJcbiAgICAgIGNhbmRDb2RlOiAkY2FuZENvZGVcclxuICAgICAgZW1haWw6ICRlbWFpbFxyXG4gICAgICBpbWFnZTogJGltYWdlXHJcbiAgICAgIHBob25lTnVtYjogJHBob25lTnVtYlxyXG4gICAgICBkYXRlT2ZCaXJ0aDogJGRhdGVPZkJpcnRoXHJcbiAgICAgIGJpcnRoQ2VydE51bWJlcjogJGJpcnRoQ2VydE51bWJlclxyXG4gICAgICBwbGFjZU9mQmlydGg6ICRwbGFjZU9mQmlydGhcclxuICAgICAgZ2VuZGVyOiAkZ2VuZGVyXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIGNhbmRDb2RlXHJcbiAgICAgIGJpcnRoQ2VydE51bWJlclxyXG4gICAgICBkYXRlT2ZCaXJ0aFxyXG4gICAgICBpbWFnZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlRXhhbWluZXJNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVFeGFtaW5lck11dGF0aW9uKFxyXG4gICAgJGV4YW1pbmVyMXN0TmFtZTogU3RyaW5nIVxyXG4gICAgJGV4YW1pbmVyMm5kTmFtZTogU3RyaW5nIVxyXG4gICAgJGV4YW1pbmVyT3RoZXJOYW1lczogU3RyaW5nXHJcbiAgICAkZXhhbWluZXJDb2RlOiBTdHJpbmchXHJcbiAgICAkZXhhbWluZXJFbWFpbDogU3RyaW5nIVxyXG4gICAgJGV4YW1pbmVyQ05JOiBTdHJpbmchXHJcbiAgICAkZXhhbWluZXJNYXRyaWN1bGU6IFN0cmluZyFcclxuICAgICRleGFtaW5lckltYWdlOiBTdHJpbmchXHJcbiAgICAkZXhhbWluZXJQaG9uZTogSW50IVxyXG4gICAgJGdlbmRlcjogR2VuZGVyV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNyZWF0ZUV4YW1pbmVyKFxyXG4gICAgICBleGFtaW5lcjFzdE5hbWU6ICRleGFtaW5lcjFzdE5hbWVcclxuICAgICAgZXhhbWluZXIybmROYW1lOiAkZXhhbWluZXIybmROYW1lXHJcbiAgICAgIGV4YW1pbmVyT3RoZXJOYW1lczogJGV4YW1pbmVyT3RoZXJOYW1lc1xyXG4gICAgICBleGFtaW5lck1hdHJpY3VsZTogJGV4YW1pbmVyTWF0cmljdWxlXHJcbiAgICAgIGV4YW1pbmVyQ29kZTogJGV4YW1pbmVyQ29kZVxyXG4gICAgICBleGFtaW5lckNOSTogJGV4YW1pbmVyQ05JXHJcbiAgICAgIGV4YW1pbmVyRW1haWw6ICRleGFtaW5lckVtYWlsXHJcbiAgICAgIGV4YW1pbmVySW1hZ2U6ICRleGFtaW5lckltYWdlXHJcbiAgICAgIGV4YW1pbmVyUGhvbmU6ICRleGFtaW5lclBob25lXHJcbiAgICAgIGdlbmRlcjogJGdlbmRlclxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGV4YW1pbmVyMXN0TmFtZVxyXG4gICAgICBleGFtaW5lcjJuZE5hbWVcclxuICAgICAgZXhhbWluZXJPdGhlck5hbWVzXHJcbiAgICAgIGV4YW1pbmVyQ29kZVxyXG4gICAgICBleGFtaW5lckVtYWlsXHJcbiAgICAgIGV4YW1pbmVySW1hZ2VcclxuICAgICAgZXhhbWluZXJQaG9uZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuLy8qKioqKioqKioqKipjcmVhdGUgbXV0YXRpb25zICAqL1xyXG5cclxuLy8vLyoqKioqKioqKioqKioqVXBkYXRlIG11dGF0aW9ucyAqL1xyXG5cclxuY29uc3QgdXBkYXRlU3ViRGl2aXNpb25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVTdWJEaXZpc2lvbk11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRzdWJEaXZOYW1lOiBTdHJpbmdcclxuICAgICRzdWJEaXZDb2RlOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZVN1YkRpdmlzaW9uKFxyXG4gICAgICBpZDogJGlkXHJcbiAgICAgIHN1YkRpdk5hbWU6ICRzdWJEaXZOYW1lXHJcbiAgICAgIHN1YkRpdkNvZGU6ICRzdWJEaXZDb2RlXHJcbiAgICApIHtcclxuICAgICAgc3ViRGl2TmFtZVxyXG4gICAgICBzdWJEaXZDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCB1cGRhdGVDZW50ZXJNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVDZW50ZXJNdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkY2VudGVyTmFtZTogU3RyaW5nXHJcbiAgICAkY2VudGVyQ29kZTogU3RyaW5nXHJcbiAgICAkY2VudGVyTnVtYmVyOiBJbnRcclxuICApIHtcclxuICAgIHVwZGF0ZUNlbnRlcihcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBjZW50ZXJOYW1lOiAkY2VudGVyTmFtZVxyXG4gICAgICBjZW50ZXJDb2RlOiAkY2VudGVyQ29kZVxyXG4gICAgICBjZW50ZXJOdW1iZXI6ICRjZW50ZXJOdW1iZXJcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXJOYW1lXHJcbiAgICAgIGNlbnRlck51bWJlclxyXG4gICAgICBjZW50ZXJDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCB1cGRhdGVUb3duTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlVG93bk11dGF0aW9uKCRpZDogSUQhLCAkdG93bk5hbWU6IFN0cmluZywgJHRvd25Db2RlOiBTdHJpbmcpIHtcclxuICAgIHVwZGF0ZVRvd24oaWQ6ICRpZCwgdG93bk5hbWU6ICR0b3duTmFtZSwgdG93bkNvZGU6ICR0b3duQ29kZSkge1xyXG4gICAgICB0b3duTmFtZVxyXG4gICAgICB0b3duQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgdXBkYXRlRXhhbU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZUV4YW1NdXRhdGlvbigkaWQ6IElEISwgJGV4YW1OYW1lOiBTdHJpbmcsICRleGFtQ29kZTogU3RyaW5nKSB7XHJcbiAgICB1cGRhdGVFeGFtKGlkOiAkaWQsIGV4YW1OYW1lOiAkZXhhbU5hbWUsIGV4YW1Db2RlOiAkZXhhbUNvZGUpIHtcclxuICAgICAgZXhhbU5hbWVcclxuICAgICAgZXhhbUNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVwZGF0ZVNjb3JlTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlU2NvcmVNdXRhdGlvbihcclxuICAgICRzdWJqZWN0U2VyaWVzOiBTdWJqZWN0U2VyaWVzV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRzdWJqZWN0QXZlOiBGbG9hdCFcclxuICAgICRjYW5kRXhhbVNlY3JldENvZGU6IFN0cmluZyFcclxuICApIHtcclxuICAgIHVwZGF0ZVNjb3JlKFxyXG4gICAgICBzdWJqZWN0U2VyaWVzOiAkc3ViamVjdFNlcmllc1xyXG4gICAgICBzdWJqZWN0QXZlOiAkc3ViamVjdEF2ZVxyXG4gICAgICBjYW5kRXhhbVNlY3JldENvZGU6ICRjYW5kRXhhbVNlY3JldENvZGVcclxuICAgICkge1xyXG4gICAgICBzdWJqZWN0QXZlXHJcbiAgICAgIGNvZWZmXHJcbiAgICAgIGlkXHJcbiAgICAgIHN1YmplY3RTZXJpZXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3ViamVjdENvZGVcclxuICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG4vLyBjb25zdCBjcmVhdGVVc2VyTXV0YXRpb24gPSBncWxgXHJcbi8vICAgbXV0YXRpb24gY3JlYXRlVXNlck11dGF0aW9uKFxyXG4vLyAgICAgJGVtYWlsOiBTdHJpbmchXHJcbi8vICAgICAkbmFtZTogU3RyaW5nIVxyXG4vLyAgICAgJHBhc3N3b3JkOiBTdHJpbmchXHJcbi8vICAgICApIHtcclxuLy8gICAgIGNyZWF0ZVVzZXIoIFxyXG4vLyAgICAgICAgICAgICAgICBlbWFpbDogJGVtYWlsIVxyXG4vLyAgICAgICAgICAgICAgICBuYW1lOiAkbmFtZSFcclxuLy8gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZCFcclxuLy8gICAgICAgICAgICAgICAgKSB7XHJcbi8vICAgICAgIGlkXHJcbi8vICAgICAgIG5hbWVcclxuLy8gICAgICAgZW1haWxcclxuLy8gICAgICAgcGFzc3dvcmRcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIGBcclxuXHJcbmNvbnN0IHVwZGF0ZUNhbmRpZGF0ZU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZUNhbmRpZGF0ZU11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRjYW5kMXN0TmFtZTogU3RyaW5nXHJcbiAgICAkY2FuZDJuZE5hbWU6IFN0cmluZ1xyXG4gICAgJGNhbmQzcmROYW1lOiBTdHJpbmdcclxuICAgICRtb21OYW1lOiBTdHJpbmdcclxuICAgICRkYWROYW1lOiBTdHJpbmdcclxuICAgICRlbWFpbDogU3RyaW5nXHJcbiAgICAkaW1hZ2U6IFN0cmluZ1xyXG4gICAgJHBob25lTnVtYjogSW50XHJcbiAgICAkcGxhY2VPZkJpcnRoOiBTdHJpbmdcclxuICAgICRkYXRlT2ZCaXJ0aDogRGF0ZVRpbWVcclxuICAgICRiaXJ0aENlcnROdW1iZXI6IFN0cmluZ1xyXG4gICAgJGdlbmRlcjogR2VuZGVyV2hlcmVVbmlxdWVJbnB1dFxyXG4gICkge1xyXG4gICAgdXBkYXRlQ2FuZGlkYXRlKFxyXG4gICAgICBpZDogJGlkXHJcbiAgICAgIGNhbmQxc3ROYW1lOiAkY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWU6ICRjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZTogJGNhbmQzcmROYW1lXHJcbiAgICAgIG1vbU5hbWU6ICRtb21OYW1lXHJcbiAgICAgIGRhZE5hbWU6ICRkYWROYW1lXHJcbiAgICAgIGVtYWlsOiAkZW1haWxcclxuICAgICAgaW1hZ2U6ICRpbWFnZVxyXG4gICAgICBwaG9uZU51bWI6ICRwaG9uZU51bWJcclxuICAgICAgcGxhY2VPZkJpcnRoOiAkcGxhY2VPZkJpcnRoXHJcbiAgICAgIGRhdGVPZkJpcnRoOiAkZGF0ZU9mQmlydGhcclxuICAgICAgYmlydGhDZXJ0TnVtYmVyOiAkYmlydGhDZXJ0TnVtYmVyXHJcbiAgICAgIGdlbmRlcjogJGdlbmRlclxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgIG1vbU5hbWVcclxuICAgICAgZGFkTmFtZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICBpbWFnZVxyXG4gICAgICBwaG9uZU51bWJcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgIGJpcnRoQ2VydE51bWJlclxyXG4gICAgICBnZW5kZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVwZGF0ZUdlbmRlck11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZUdlbmRlck11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRnZW5kZXJOYW1lOiBTdHJpbmdcclxuICAgICRnZW5kZXJDb2RlOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZUdlbmRlcihpZDogJGlkLCBnZW5kZXJOYW1lOiAkZ2VuZGVyTmFtZSwgZ2VuZGVyQ29kZTogJGdlbmRlckNvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICBnZW5kZXJDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBzaWduVXBNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBzaWduVXBNdXRhdGlvbigkZW1haWw6IFN0cmluZyEsICRuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcclxuICAgIHNpZ25VcChlbWFpbDogJGVtYWlsLCBuYW1lOiAkbmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBlbWFpbFxyXG4gICAgICByZXNldFRva2VuXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCB1cGRhdGVJdGVtTXV0YXRpb24gPSBhc3luYyAoZSwgdXBkYXRlTXV0YXRpb24pID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBjb25zb2xlLmxvZygnVXBkYXRpbmcgUmVnaW9uISEnKVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZU11dGF0aW9uKHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgIH0sXHJcbiAgfSlcclxuICBjb25zb2xlLmxvZygnUmVnaW9uIFVwZGF0ZWQhIScpXHJcbn1cclxuXHJcbi8vLy8qKioqKioqKioqKioqKlVwZGF0ZSBtdXRhdGlvbnMgKi9cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlQ2FuZGlkYXRlTXV0YXRpb24sXHJcbiAgY3JlYXRlTmV3U3ViamVjdE11dGF0aW9uLFxyXG4gIGNyZWF0ZU5ld1N1YmplY3RUeXBlTXV0YXRpb24sXHJcbiAgY3JlYXRlVG93bk11dGF0aW9uLFxyXG4gIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uRXhhbWluZXJNdXRhdGlvbixcclxuICBjcmVhdGVEaXZpc2lvbk11dGF0aW9uLFxyXG4gIGNyZWF0ZVJlZ2lzdHJhdGlvbk11dGF0aW9uLFxyXG4gIGNyZWF0ZUNlbnRlck11dGF0aW9uLFxyXG4gIGNyZWF0ZUVkdWNhdGlvblR5cGVNdXRhdGlvbixcclxuICBjcmVhdGVTZXJpZXNNdXRhdGlvbixcclxuICBjcmVhdGVTdWJEaXZpc2lvbk11dGF0aW9uLFxyXG4gIGNyZWF0ZU5ld1Nlc3Npb25NdXRhdGlvbixcclxuICBjcmVhdGVOZXdSYW5rTXV0YXRpb24sXHJcbiAgY3JlYXRlTmV3UmVwb3J0TXV0YXRpb24sXHJcbiAgY3JlYXRlTmV3UmVnaW9uTXV0YXRpb24sXHJcbiAgY3JlYXRlTmV3R2VuZGVyTXV0YXRpb24sXHJcbiAgY3JlYXRlRXhhbU11dGF0aW9uLFxyXG4gIHJlZ2lzdGVyU3ViamVjdFNlcmllc011dGF0aW9uLFxyXG4gIHJlZ2lzdGVyTmV3U3ViamVjdFNlcmllc011dGF0aW9uLFxyXG4gIHVwZGF0ZUNlbnRlck11dGF0aW9uLFxyXG4gIHVwZGF0ZVRvd25NdXRhdGlvbixcclxuICB1cGRhdGVTZXNzaW9uTXV0YXRpb24sXHJcbiAgdXBkYXRlUmVnaW9uTXV0YXRpb24sXHJcbiAgdXBkYXRlRXhhbU11dGF0aW9uLFxyXG4gIHVwZGF0ZVN1YkRpdmlzaW9uTXV0YXRpb24sXHJcbiAgdXBkYXRlR2VuZGVyTXV0YXRpb24sXHJcbiAgdXBkYXRlQ2FuZGlkYXRlTXV0YXRpb24sXHJcbiAgdXBkYXRlU2NvcmVNdXRhdGlvbixcclxuICB1cGRhdGVEaXZpc2lvbk11dGF0aW9uLFxyXG4gIHVwZGF0ZUl0ZW1NdXRhdGlvbixcclxuICBjcmVhdGVFeGFtaW5lck11dGF0aW9uLFxyXG4gIGNyZWF0ZVBoYXNlTXV0YXRpb24sXHJcbiAgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25TZXJpZXNNdXRhdGlvbixcclxuICB1cGRhdGVTZXJpZXNNdXRhdGlvbixcclxuICB1cGRhdGVSYW5rTXV0YXRpb24sXHJcbiAgY3JlYXRlUGhhc2VSYW5rTXV0YXRpb24sXHJcbiAgY3JlYXRlTmV3Q291bnRyeU11dGF0aW9uLFxyXG4gIHNpZ25VcE11dGF0aW9uLFxyXG4gIHVwZGF0ZVN1YmplY3RNdXRhdGlvbixcclxuICB1cGRhdGVTdWJqZWN0VHlwZU11dGF0aW9uLFxyXG4gIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uTXV0YXRpb24sXHJcbiAgdXBkYXRlRWR1Y2F0aW9uVHlwZU11dGF0aW9uLFxyXG4gIHNpZ25JbkNhbmRpZGF0ZSxcclxuICBsb2dpblVzZXJNdXRhdGlvbixcclxuICBzaWdudXBVc2VyTXV0YXRpb24sXHJcbn1cclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcblxyXG5jb25zdCBnZXRBQ2VudGVyQWRtaW5RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBQ2VudGVyQWRtaW5RdWVyeSgkYXV0aENvZGU6IFN0cmluZyEpIHtcclxuICAgIGNlbnRlckFkbWluU2lnbkluKGF1dGhDb2RlOiAkYXV0aENvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgYXV0aENvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBtZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IG1lUXVlcnkge1xyXG4gICAgbWUge1xyXG4gICAgICBpZFxyXG4gICAgIGVtYWlsXHJcbiAgICAgbmFtZSBcclxuICAgICBwYXNzd29yZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUVkdWNhdGlvblR5cGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVFZHVjYXRpb25UeXBlUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGVkdWNhdGlvblR5cGUoaWQ6ICRpZCkge1xyXG4gICAgICBlZHVjYXRpb25UeXBlTmFtZVxyXG4gICAgICBlZHVjYXRpb25UeXBlQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENFU0V4YW1pbmVyUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q0VTRXhhbWluZXJRdWVyeShcclxuICAgICRleGFtaW5lcjogRXhhbWluZXJXaGVyZVVuaXF1ZUlucHV0ISxcclxuICAgICAkY2VudGVyRXhhbVNlc3Npb246Q2VudGVyRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0ISkge1xyXG4gICAgZ2V0Q2VudGVyRXhhbVNlc3Npb25FeGFtaW5lcnMoXHJcbiAgICAgIGV4YW1pbmVyOiAkZXhhbWluZXIsIFxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbjokY2VudGVyRXhhbVNlc3Npb24gICkge1xyXG4gICAgIFxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZVN1YmplY3RUeXBlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlU3ViamVjdFR5cGVRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgc3ViamVjdFR5cGUoaWQ6ICRpZCkge1xyXG4gICAgICBzdWJqZWN0VHlwZU5hbWVcclxuICAgICAgc3ViamVjdFR5cGVDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsQ2VudGVyQWRtaW5zUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsQ2VudGVyQWRtaW5zUXVlcnkge1xyXG4gICAgY2VudGVyQWRtaW5zIHtcclxuICAgICAgaWRcclxuICAgICAgYXV0aE5hbWVcclxuICAgICAgYXV0aENvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxFZHVjYXRpb25UeXBlc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbEVkdWNhdGlvblR5cGVzUXVlcnkge1xyXG4gICAgZWR1Y2F0aW9uVHlwZXMob3JkZXJCeTogZWR1Y2F0aW9uVHlwZU5hbWVfQVNDKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVkdWNhdGlvblR5cGVOYW1lXHJcbiAgICAgIGVkdWNhdGlvblR5cGVDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBnZXRBbGxSZWdpb25zT2ZBQ291bnRyeVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFJlZ2lvbnNPZkFDb3VudHJ5UXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGNvdW50cnkoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICByZWdpb24ob3JkZXJCeTogcmVnTmFtZV9BU0Mpe1xyXG4gICAgICAgcmVnTmFtZVxyXG4gICAgICByZWdDb2RlXHJcbiAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldEFsbFJlZ2lvbnNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxSZWdpb25zUXVlcnkge1xyXG4gICAgICByZWdpb25ze1xyXG4gICAgICAgcmVnTmFtZVxyXG4gICAgICByZWdDb2RlXHJcbiAgICAgIGlkXHJcbiAgfX1cclxuYDtcclxuY29uc3QgZ2V0QWxsQ291bnRyeXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxDb3VudHJ5c1F1ZXJ5IHtcclxuICAgIGNvdW50cmllcyhvcmRlckJ5OmNvdW50cnlOYW1lX0FTQykge1xyXG4gICAgICBjb3VudHJ5TmFtZVxyXG4gICAgICBjb3VudHJ5Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsQ291bnRyeXNSZWdpb25DcmVhdGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxDb3VudHJ5c1JlZ2lvbkNyZWF0ZVF1ZXJ5IHtcclxuICAgIGNvdW50cmllcyhvcmRlckJ5OmNvdW50cnlOYW1lX0FTQykge1xyXG4gICAgICAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBnZXRDZW50ZXJSZXN1bHRzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2VudGVyUmVzdWx0c1F1ZXJ5KFxyXG4gICAgJGV4YW06IEV4YW1XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNlbnRlcjogQ2VudGVyV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRzZXNzaW9uOiBTZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGdldFJlc3VsdHNQZXJDZW50ZXIoZXhhbTogJGV4YW0sIGNlbnRlcjogJGNlbnRlciwgc2Vzc2lvbjogJHNlc3Npb24pIHtcclxuICAgICAgaWRcclxuICAgICAgY2FuZGlkYXRlIHtcclxuICAgICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgZ2VuZGVyIHtcclxuICAgICAgICAgIGdlbmRlck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZXhhbSB7XHJcbiAgICAgICAgZXhhbU5hbWVcclxuICAgICAgfVxyXG4gICAgICBzZXNzaW9uIHtcclxuICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGNlbnRlciB7XHJcbiAgICAgICAgY2VudGVyTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNjb3JlcyB7XHJcbiAgICAgICAgc3ViamVjdEF2ZVxyXG4gICAgICAgIGNvZWZmXHJcbiAgICAgICAgc3ViamVjdFNlcmllcyB7XHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgICAgc2VyaWVzIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENhbmRpZGF0ZVJlc3VsdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDYW5kaWRhdGVSZXN1bHRzUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJlZ2lzdHJhdGlvbihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICBjYW5kUmVnaXN0cmF0aW9uTnVtYmVyXHJcbiAgICAgIFxyXG4gICAgICBjYW5kaWRhdGUge1xyXG4gICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICAgIG1vbU5hbWVcclxuICAgICAgICBkYWROYW1lXHJcbiAgICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgICAgaW1hZ2VcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgZ2VuZGVyIHtcclxuICAgICAgICAgIGdlbmRlck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2VudGVyRXhhbVNlc3Npb25TZXJpZXMge1xyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbntcclxuICAgICAgICBpZCBcclxuICAgICAgZXhhbVNlc3Npb24ge1xyXG4gICAgICAgaWRcclxuICAgICAgICBleGFte1xyXG4gICAgICAgICAgaWQgXHJcbiAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXNzaW9ue1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNlbnRlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgIH19XHJcbiAgICAgIHNlcmllcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzZXJpZXNOYW1lXHJcbiAgICAgICAgc3ViamVjdFNlcmllcyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzY29yZXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3ViamVjdEF2ZVxyXG4gICAgICAgIGNvZWZmXHJcbiAgICAgICAgc3ViamVjdFNlcmllcyAge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0RXhhbWluZXJSZWdpc3RyYXRpb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRFeGFtaW5lclJlZ2lzdHJhdGlvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvbkV4YW1pbmVyKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgZXhhbWluZXJ7XHJcbiAgICAgICAgZXhhbWluZXIxc3ROYW1lXHJcbiAgICAgICAgZXhhbWluZXIybmROYW1lXHJcbiAgICAgICAgZXhhbWluZXJPdGhlck5hbWVzXHJcbiAgICAgICAgZXhhbWluZXJNYXRyaWN1bGVcclxuICAgICAgICBleGFtaW5lclBob25lXHJcbiAgICAgICAgZXhhbWluZXJDTklcclxuICAgICAgICBleGFtaW5lckltYWdlXHJcbiAgICAgICAgZXhhbWluZXJFbWFpbFxyXG4gICAgICAgIGdlbmRlciB7XHJcbiAgICAgICAgICBnZW5kZXJOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9ue1xyXG4gICAgICAgIGlkIFxyXG4gICAgICBleGFtU2Vzc2lvbiB7XHJcbiAgICAgICBpZFxyXG4gICAgICAgIGV4YW17XHJcbiAgICAgICAgICBpZCBcclxuICAgICAgICAgIGV4YW1OYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlc3Npb257XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgfX1cclxuICAgICAgY2VudGVyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICBwaGFzZVJhbmsge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgcmFua05hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbENlbnRlclJlc3VsdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxDZW50ZXJSZXN1bHRzUXVlcnkoJGNlbnRlckV4YW1TZXNzaW9uOiBTdHJpbmchKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc0ZvclJlc3VsdHMoY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvbikge1xyXG4gICAgICBpZFxyXG4gICAgICBzZXJpZXN7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzZXJpZXNOYW1lXHJcbiAgICAgICAgc3ViamVjdFNlcmllcyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICByZWdpc3RyYXRpb257XHJcbiAgICAgICBpZFxyXG4gICAgICAgY2FuZGlkYXRle1xyXG4gICAgICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICAgICBpZFxyXG4gICAgICAgfVxyXG4gICAgICBzY29yZXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3ViamVjdEF2ZVxyXG4gICAgICAgIGNvZWZmXHJcbiAgICAgICAgc3ViamVjdFNlcmllcyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRFYWNoQ2FuZGlkYXRlUmVzdWx0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEVhY2hDYW5kaWRhdGVSZXN1bHRzUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJlZ2lzdHJhdGlvbihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNhbmRpZGF0ZSB7XHJcbiAgICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgbW9tTmFtZVxyXG4gICAgICAgIGRhZE5hbWVcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgZ2VuZGVyIHtcclxuICAgICAgICAgIGdlbmRlck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZXhhbSB7XHJcbiAgICAgICAgZXhhbU5hbWVcclxuICAgICAgfVxyXG4gICAgICBzZXNzaW9uIHtcclxuICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNlcmllcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzZXJpZXNOYW1lXHJcbiAgICAgIH1cclxuICAgICAgY2VudGVyIHtcclxuICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JRFF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEUXVlcnkoXHJcbiAgICAkY2VudGVyRXhhbVNlc3Npb246IENlbnRlckV4YW1TZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjYW5kaWRhdGU6IENhbmRpZGF0ZVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjYW5kaWRhdGVSZWdpc3RyYXRpb25JRChjZW50ZXJFeGFtU2Vzc2lvbjogJGNlbnRlckV4YW1TZXNzaW9uLCBjYW5kaWRhdGU6ICRjYW5kaWRhdGUpIHtcclxuICAgICAgaWRcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURzUXVlcnkoJGNhbmRpZGF0ZTogUmVnaXN0cmF0aW9uV2hlcmVJbnB1dCEgICkge1xyXG4gICAgY2FuZGlkYXRlUmVnaXN0cmF0aW9uSURzKGNhbmRpZGF0ZTogJGNhbmRpZGF0ZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxDYW5kaWRhdGVSZWdpc3RyYXRpb25JRHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxDYW5kaWRhdGVSZWdpc3RyYXRpb25JRHNRdWVyeSgkaWQ6IElEISAgKSB7XHJcbiAgICBjYW5kaWRhdGUoIGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIG1vbU5hbWVcclxuICAgICAgZGFkTmFtZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICBnZW5kZXJ7XHJcbmlkXHJcbmdlbmRlck5hbWVcclxuICAgICAgfVxyXG4gICAgICByZWdpc3RyYXRpb257XHJcbiAgICAgICAgaWRcclxuICAgICBcclxuICAgICAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc3tcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgIHNlcmllc3tcclxuICAgICAgICAgICBpZFxyXG4gICAgICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjZW50ZXJFeGFtU2Vzc2lvbntcclxuICAgICAgICAgIGNlbnRlcntcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY2VudGVyTmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXhhbVNlc3Npb257XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGV4YW17XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlc3Npb257XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjb3JlcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgY29lZmZcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgaWRcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2FuZGlkYXRlSURRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDYW5kaWRhdGVJRFF1ZXJ5KFxyXG4gICAgJGNhbmRDb2RlOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBjYW5kaWRhdGVDb2RlKGNhbmRDb2RlOiAkY2FuZENvZGUpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRSZWdpc3RyYXRpb25JREZyb21SZWdOdW1iZXJRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRSZWdpc3RyYXRpb25JREZyb21SZWdOdW1iZXJRdWVyeShcclxuICAgICRjYW5kUmVnaXN0cmF0aW9uTnVtYmVyOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBjYW5kaWRhdGVSZWdpc3RyYXRpb25OdW1iZXIoY2FuZFJlZ2lzdHJhdGlvbk51bWJlcjogJGNhbmRSZWdpc3RyYXRpb25OdW1iZXIpIHtcclxuICAgICBpZFxyXG4gICAgIGNhbmRpZGF0ZXtcclxuICAgICAgaWRcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIG1vbU5hbWVcclxuICAgICAgZGFkTmFtZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICBnZW5kZXJ7XHJcbmlkXHJcbmdlbmRlck5hbWVcclxuICAgICAgfVxyXG4gICAgICByZWdpc3RyYXRpb257XHJcbiAgICAgICAgaWRcclxuICAgICBcclxuICAgICAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc3tcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgIHNlcmllc3tcclxuICAgICAgICAgICBpZFxyXG4gICAgICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjZW50ZXJFeGFtU2Vzc2lvbntcclxuICAgICAgICAgIGNlbnRlcntcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY2VudGVyTmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXhhbVNlc3Npb257XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGV4YW17XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlc3Npb257XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjb3JlcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgY29lZmZcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2VudGVySURGcm9tQ2VudGVyQ29kZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENlbnRlcklERnJvbUNlbnRlckNvZGVRdWVyeSgkY2VudGVyQ29kZTogU3RyaW5nISkge1xyXG4gICAgY2VudGVyQnlDb2RlKGNlbnRlckNvZGU6ICRjZW50ZXJDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2VudGVyUmVnaXN0cmF0aW9uSURzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2VudGVyUmVnaXN0cmF0aW9uSURzUXVlcnkoXHJcbiAgICAkZXhhbTogRXhhbVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkY2VudGVyOiBDZW50ZXJXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHNlc3Npb246IFNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY2VudGVyUmVnaXN0cmF0aW9uSURzKGV4YW06ICRleGFtLCBjZW50ZXI6ICRjZW50ZXIsIHNlc3Npb246ICRzZXNzaW9uKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY2VudGVyRXhhbVNlc3Npb25TZXJpZXNGb3JSZXN1bHRzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgY2VudGVyRXhhbVNlc3Npb25TZXJpZXNGb3JSZXN1bHRzUXVlcnkoJGNlbnRlckV4YW1TZXNzaW9uOiBTdHJpbmcgISkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb25TZXJpZXNGb3JSZXN1bHRzKGNlbnRlckV4YW1TZXNzaW9uOiAkY2VudGVyRXhhbVNlc3Npb24pIHtcclxuICAgICAgaWRcclxuICAgICAgc2VyaWVze1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNlbnRlckV4YW1TZXNzaW9uRm9yUmVzdWx0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGNlbnRlckV4YW1TZXNzaW9uRm9yUmVzdWx0c1F1ZXJ5KCRpZDogSUQgISkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb24oaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXJ7XHJcbiAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgICAgICAgICAgY2VudGVyQ29kZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGV4YW1TZXNzaW9ue1xyXG4gICAgICAgICAgICAgICBleGFte1xyXG4gICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgZXhhbU5hbWVcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBzZXNzaW9ue1xyXG4gICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc3tcclxuICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHNlcmllc3tcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICAgICAgICBzZXJpZXNDb2RlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbntcclxuICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgY2FuZFJlZ2lzdHJhdGlvbk51bWJlclxyXG4gICAgICAgICAgICAgICBjYW5kRXhhbVNlY3JldENvZGVcclxuICAgICAgICAgICAgICAgY2FuZGlkYXRle1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICAgICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICAgICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICAgICAgICBkYXRlT2ZCaXJ0aFxyXG4gICAgICAgICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgcGhvbmVOdW1iXHJcbiAgICAgICAgICAgIGdlbmRlcntcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGdlbmRlck5hbWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBzY29yZXN7XHJcbiAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICBzdWJqZWN0QXZlXHJcblxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzUmVzdWx0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzUmVzdWx0c1F1ZXJ5KCRpZDogSUQgISkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb25TZXJpZXMoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbntcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgY2VudGVye1xyXG4gICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlckNvZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZXhhbVNlc3Npb257XHJcbiAgICAgICAgICAgICAgIGV4YW17XHJcbiAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHNlc3Npb257XHJcbiAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHNlcmllc3tcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICAgICAgICBzZXJpZXNDb2RlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbntcclxuICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgY2FuZFJlZ2lzdHJhdGlvbk51bWJlclxyXG4gICAgICAgICAgICAgICBjYW5kRXhhbVNlY3JldENvZGVcclxuICAgICAgICAgICAgICAgY2FuZGlkYXRle1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICAgICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICAgICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICAgICAgICBkYXRlT2ZCaXJ0aFxyXG4gICAgICAgICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgcGhvbmVOdW1iXHJcbiAgICAgICAgICAgIGdlbmRlcntcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGdlbmRlck5hbWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBzY29yZXN7XHJcbiAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICBzdWJqZWN0QXZlXHJcblxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2FuZGlkYXRlQnlDYW5kQ29kZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENhbmRpZGF0ZUJ5Q2FuZENvZGVRdWVyeSgkY2FuZENvZGU6IFN0cmluZyEpIHtcclxuICAgIGdldENhbmRpZGF0ZUJ5Q29kZShjYW5kQ29kZTogJGNhbmRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmRDb2RlXHJcbiAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFJhbmtzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsUmFua3NRdWVyeSB7XHJcbiAgICByYW5rcyhvcmRlckJ5OiByYW5rTmFtZV9BU0MpIHtcclxuICAgICAgcmFua05hbWVcclxuICAgICAgcmFua0NvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxQaGFzZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxQaGFzZXNRdWVyeSB7XHJcbiAgcGhhc2VzKG9yZGVyQnk6cGhhc2VOYW1lX0FTQykge1xyXG4gICAgcGhhc2VOYW1lXHJcbiAgICBwaGFzZUNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxTdWJqZWN0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFN1YmplY3RzUXVlcnkge1xyXG4gICAgc3ViamVjdHMob3JkZXJCeTogc3ViamVjdE5hbWVfQVNDKSB7XHJcbiAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgIHN1YmplY3RDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsR2VuZGVyc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbEdlbmRlcnNRdWVyeSB7XHJcbiAgICBnZW5kZXJzKG9yZGVyQnk6IGdlbmRlck5hbWVfQVNDKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGdlbmRlck5hbWVcclxuICAgICAgZ2VuZGVyQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFNlcmllc09mQW5FZHVjYXRpb25UeXBlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsU2VyaWVzT2ZBbkVkdWNhdGlvblR5cGVRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgZWR1Y2F0aW9uVHlwZShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVkdWNhdGlvblR5cGVOYW1lXHJcbiAgICAgIHNlcmllcyhvcmRlckJ5OiBzZXJpZXNOYW1lX0FTQykge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgIHNlcmllc0NvZGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFNlcmllc09mQUNlbnRlckV4YW1TZXNzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsU2VyaWVzT2ZBQ2VudGVyRXhhbVNlc3Npb25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb24oaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc3tcclxuICAgICAgc2VyaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICBzZXJpZXNDb2RlXHJcbiAgICAgIH1cclxuICAgIH19XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5jb25zdCBnZXRBbGxTZXJpZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTZXJpZXNRdWVyeSB7XHJcbiAgICBzZXJpZXNlcyhvcmRlckJ5OiBzZXJpZXNOYW1lX0FTQykge1xyXG4gICAgICBpZFxyXG4gICAgICBzZXJpZXNOYW1lXHJcbiAgICAgIHNlcmllc0NvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldEFsbFN1YmplY3RzT2ZBbkVkdWNUeXBlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsU3ViamVjdHNPZkFuRWR1Y1R5cGVRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgZWR1Y2F0aW9uVHlwZShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVkdWNhdGlvblR5cGVOYW1lXHJcbiAgICAgIHN1YmplY3Qob3JkZXJCeTogc3ViamVjdE5hbWVfQVNDKSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgIHN1YmplY3RDb2RlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldEFsbFN1YmplY3RzT2ZBU2VyaWVzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsU3ViamVjdHNPZkFTZXJpZXNRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgc2VyaWVzKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgc3ViamVjdENvZGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbEV4YW1zUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsRXhhbXNRdWVyeSB7XHJcbiAgICBleGFtcyhvcmRlckJ5OiBleGFtTmFtZV9BU0MpIHtcclxuICAgICAgZXhhbU5hbWVcclxuICAgICAgZXhhbUNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxTZXNzaW9uc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFNlc3Npb25zUXVlcnkge1xyXG4gICAgc2Vzc2lvbnMob3JkZXJCeTogY3JlYXRlZEF0X0RFU0MpIHtcclxuICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgc2Vzc2lvbkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldEFsbERpdmlzaW9uc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbERpdmlzaW9uc1F1ZXJ5IHtcclxuICAgIGRpdmlzaW9ucyhvcmRlckJ5OiBkaXZOYW1lX0FTQykge1xyXG4gICAgICBkaXZOYW1lXHJcbiAgICAgIGRpdkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldERpdmlzaW9uc09mQVJlZ2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldERpdmlzaW9uc09mQVJlZ2lvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICByZWdpb24oaWQ6ICRpZCkge1xyXG4gICAgICByZWdOYW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGRpdmlzaW9uKG9yZGVyQnk6IGRpdk5hbWVfQVNDKSB7XHJcbiAgICAgICAgZGl2TmFtZVxyXG4gICAgICAgIGRpdkNvZGVcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0U3ViRGl2aXNpb25zT2ZBRGl2aXNpb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRTdWJEaXZpc2lvbnNPZkFEaXZpc2lvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBkaXZpc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIGRpdk5hbWVcclxuICAgICAgaWRcclxuICAgICAgc3ViRGl2aXNpb24ob3JkZXJCeTogc3ViRGl2TmFtZV9BU0MpIHtcclxuICAgICAgICBzdWJEaXZOYW1lXHJcbiAgICAgICAgc3ViRGl2Q29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxTdWJEaXZpc2lvbnNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTdWJEaXZpc2lvbnNRdWVyeSB7XHJcbiAgICBzdWJEaXZpc2lvbihvcmRlckJ5OiBzdWJEaXZOYW1lX0FTQykge1xyXG4gICAgICBzdWJEaXZOYW1lXHJcbiAgICAgIHN1YkRpdkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRUb3duc09mQVN1YkRpdmlzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0VG93bnNPZkFTdWJEaXZpc2lvbigkaWQ6IElEISkge1xyXG4gICAgc3ViRGl2aXNpb24oaWQ6ICRpZCkge1xyXG4gICAgICBzdWJEaXZOYW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIHRvd24ob3JkZXJCeTogdG93bk5hbWVfQVNDKSB7XHJcbiAgICAgICAgdG93bk5hbWVcclxuICAgICAgICB0b3duQ29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDZW50ZXJzT2ZBVG93blF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENlbnRlcnNPZkFUb3duUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHRvd24oaWQ6ICRpZCkge1xyXG4gICAgICB0b3duTmFtZVxyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXIob3JkZXJCeTogY2VudGVyTmFtZV9BU0MpIHtcclxuICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgY2VudGVyQ29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjZW50ZXJzUGVyVG93blF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGNlbnRlcnNQZXJUb3duUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHRvd24oaWQ6ICRpZCkge1xyXG4gICAgICB0b3duTmFtZVxyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXIob3JkZXJCeTogY2VudGVyTmFtZV9BU0MpIHtcclxuICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgY2VudGVyTnVtYmVyXHJcbiAgICAgICAgY2VudGVyU2VjcmV0Q29kZVxyXG4gICAgICAgIGNlbnRlckNvZGVcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsU3ViamVjdFR5cGVzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsU3ViamVjdFR5cGVzUXVlcnkge1xyXG4gICAgc3ViamVjdFR5cGVzKG9yZGVyQnk6IHN1YmplY3RUeXBlTmFtZV9ERVNDKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHN1YmplY3RUeXBlTmFtZVxyXG4gICAgICBzdWJqZWN0VHlwZUNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldEFsbENlbnRlcnNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxDZW50ZXJzUXVlcnkge1xyXG4gICAgY2VudGVycyhvcmRlckJ5OiBjZW50ZXJOYW1lX0FTQykge1xyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXJOYW1lXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxDYW5kaWRhdGVzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsQ2FuZGlkYXRlc1F1ZXJ5IHtcclxuICAgIGNhbmRpZGF0ZXMob3JkZXJCeTogY2FuZDFzdE5hbWVfQVNDKSB7XHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHBob25lTnVtYlxyXG4gICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgY2FuZENvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4vLy8qKioqKioqKioqKioqKioqKlNpbmdsZSBvYmplY3QgcXVlcmllcyAqL1xyXG5cclxuY29uc3Qgc2luZ2xlQ2VudGVyUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlQ2VudGVyUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGNlbnRlcihpZDogJGlkKSB7XHJcbiAgICAgIGNlbnRlck5hbWVcclxuICAgICAgY2VudGVyTnVtYmVyXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRTaW5nbGVDZW50ZXJRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRTaW5nbGVDZW50ZXJRdWVyeSgkY2VudGVyTnVtYmVyOiBJbnQhKSB7XHJcbiAgICBjZW50ZXJCeU51bWJlcihjZW50ZXJOdW1iZXI6ICAkY2VudGVyTnVtYmVyKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlck51bWJlclxyXG4gICAgICBjZW50ZXJDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0U2luZ2xlUHJvZlF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFNpbmdsZVByb2ZRdWVyeSgkYXV0aENvZGU6IFN0cmluZyEpIHtcclxuICAgcHJvZkJ5QXV0aENvZGUoYXV0aENvZGU6ICAkYXV0aENvZGUpIHtcclxuICAgICBhdXRoQ29kZVxyXG4gICAgICBpZFxyXG4gICAgICBhdXRoMXN0TmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBnZXRTaW5nbGVDZW50ZXJCeUNvZGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRTaW5nbGVDZW50ZXJCeUNvZGVRdWVyeSgkY2VudGVyU2VjcmV0Q29kZTogU3RyaW5nISkge1xyXG4gICAgZ2V0Q2VudGVyQnlDb2RlKGNlbnRlclNlY3JldENvZGU6ICAkY2VudGVyU2VjcmV0Q29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXJDb2RlXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QVNpbmdsZUNlbnRlclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFTaW5nbGVDZW50ZXJRdWVyeSgkY2VudGVyTnVtYmVyOiBJbnQhKSB7XHJcbiAgICBjZW50ZXJCeU51bWJlcihjZW50ZXJOdW1iZXI6ICAkY2VudGVyTnVtYmVyKSB7XHJcbiAgICAgIGNlbnRlck51bWJlclxyXG4gICAgICBjZW50ZXJOYW1lXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVUb3duUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlVG93blF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICB0b3duKGlkOiAkaWQpIHtcclxuICAgICAgdG93bk5hbWVcclxuICAgICAgdG93bkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRTaW5nbGVDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFNpbmdsZUNlbnRlckV4YW1TZXNzaW9uUXVlcnkoXHJcbiAgICAkY2VudGVyOiBDZW50ZXJXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGV4YW1TZXNzaW9uOiBFeGFtU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvbnNCeUNvZGUoZXhhbVNlc3Npb246ICRleGFtU2Vzc2lvbiwgY2VudGVyOiAkY2VudGVyKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsUmFua3NPZkFuRXhhbVBoYXNlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsUmFua3NPZkFuRXhhbVBoYXNlUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHBoYXNlKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgcGhhc2VSYW5re1xyXG4gICAgICAgICAgICAgaWRcclxuICAgICAgICAgIHJhbmtOYW1lXHJcbiAgICAgICAgICByYW5rQ29kZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0UmVnaXN0ZXJlZENhbmRpZGF0ZUNvdW50UXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UmVnaXN0ZXJlZENhbmRpZGF0ZUNvdW50UXVlcnkoJGlkOiBJRCEpXHJcbiB7XHJcbiAgICByZWdpc3RyYXRpb25zQ29ubmVjdGlvbihpZDogJGlkKSB7XHJcbiAgICAgYWdncmVnYXRle1xyXG4gICAgICAgY291bnRcclxuICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2VudGVyRXhhbVNlc3Npb25TZXJpZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDZW50ZXJFeGFtU2Vzc2lvblNlcmllc1F1ZXJ5KFxyXG4gICAgJGNlbnRlckV4YW1TZXNzaW9uOiBDZW50ZXJFeGFtU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkc2VyaWVzOiBTZXJpZXNXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb25TZXJpZXNlcyhzZXJpZXM6ICRzZXJpZXMsIGNlbnRlckV4YW1TZXNzaW9uOiAkY2VudGVyRXhhbVNlc3Npb24pIHtcclxuICAgICAgaWRcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0RXhhbVNlc3Npb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRFeGFtU2Vzc2lvblF1ZXJ5KFxyXG4gICAgJGV4YW06IEV4YW1XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHNlc3Npb246IFNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgZXhhbVNlc3Npb25zKHNlc3Npb246ICRzZXNzaW9uLCBleGFtOiAkZXhhbSkge1xyXG4gICAgICBpZFxyXG5cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVFeGFtUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlRXhhbVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBleGFtKGlkOiAkaWQpIHtcclxuICAgICAgZXhhbU5hbWVcclxuICAgICAgZXhhbUNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVDYW5kaWRhdGVRdWVyeTEgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlQ2FuZGlkYXRlUXVlcnkxKCRpZDogSUQhKSB7XHJcbiAgICBjYW5kaWRhdGUoaWQ6ICRpZCkge1xyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIG1vbU5hbWVcclxuICAgICAgY2FuZENvZGVcclxuICAgICAgZW1haWxcclxuICAgICAgaW1hZ2VcclxuICAgICAgcGhvbmVOdW1iXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUNhbmRpZGF0ZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZUNhbmRpZGF0ZVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBjYW5kaWRhdGUoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBkYXRlT2ZCaXJ0aFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBjYW5kQ29kZSAgXHJcbiAgICAgIGRhZE5hbWVcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICBpbWFnZVxyXG4gICAgICBwaG9uZU51bWJcclxuICAgICAgYmlydGhDZXJ0TnVtYmVyXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICBnZW5kZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlRXhhbWluZXJRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVFeGFtaW5lclF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBleGFtaW5lcihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGV4YW1pbmVyMXN0TmFtZVxyXG4gICAgICBleGFtaW5lcjJuZE5hbWVcclxuICAgICAgZXhhbWluZXJPdGhlck5hbWVzXHJcbiAgICAgIGV4YW1pbmVyQ29kZVxyXG4gICAgICBleGFtaW5lckVtYWlsXHJcbiAgICAgIGV4YW1pbmVySW1hZ2VcclxuICAgICAgZXhhbWluZXJQaG9uZVxyXG4gICAgICBleGFtaW5lck1hdHJpY3VsZVxyXG4gICAgICBleGFtaW5lckNOSVxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB2aWV3U2luZ2xlQ2FuZGlkYXRlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgdmlld1NpbmdsZUNhbmRpZGF0ZVF1ZXJ5KCRjYW5kQ29kZTogU3RyaW5nISkge1xyXG4gICAgc2luZ2xlQ2FuZGlkYXRlKGNhbmRDb2RlOiAkY2FuZENvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgY2FuZENvZGVcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHBob25lTnVtYlxyXG4gICAgICBiaXJ0aENlcnROdW1iZXJcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIGdlbmRlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBnZW5kZXJOYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRTY29yZUlEID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFNjb3JlSUQoJGNhbmRFeGFtU2VjcmV0Q29kZTogU3RyaW5nISkge1xyXG4gICAgc2NvcmVzKGNhbmRFeGFtU2VjcmV0Q29kZTogJGNhbmRFeGFtU2VjcmV0Q29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFJlZ2lzdHJhdGlvbnMgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UmVnaXN0cmF0aW9ucygkY2FuZEV4YW1TZWNyZXRDb2RlOiBTdHJpbmchKSB7XHJcbiAgICByZWdpc3RyYXRpb24oY2FuZEV4YW1TZWNyZXRDb2RlOiAkY2FuZEV4YW1TZWNyZXRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNjb3JlcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0KG9yZGVyQnk6IHN1YmplY3ROYW1lX0FTQykge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlU3ViRGl2aXNpb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVTdWJEaXZpc2lvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzdWJEaXZpc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgc3ViRGl2Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNpbmdsZVJlZ2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFNpbmdsZVJlZ2lvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICByZWdpb24oaWQ6ICRpZCkge1xyXG4gICAgICByZWdOYW1lXHJcbiAgICAgIHJlZ0NvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVHZW5kZXJRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVHZW5kZXJRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgZ2VuZGVyKGlkOiAkaWQpIHtcclxuICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICBnZW5kZXJDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlU2VyaWVzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlU2VyaWVzUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHNlcmllcyhpZDogJGlkKSB7XHJcbiAgICAgIHNlcmllc05hbWVcclxuICAgICAgc2VyaWVzQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUNlbnRlckFkbWluUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlQ2VudGVyQWRtaW5RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgY2VudGVyQWRtaW4oaWQ6ICRpZCkge1xyXG4gICAgICBjZW50ZXJBZG1pbk5hbWVcclxuICAgICAgY2VudGVyQWRtaW5Db2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBkYXRhRm9yQXZlcmFnZSA9IGdxbGBcclxuICBxdWVyeSBkYXRhRm9yQXZlcmFnZSgkY2FuZEV4YW1TZWNyZXRDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBzY29yZXMoY2FuZEV4YW1TZWNyZXRDb2RlOiAkY2FuZEV4YW1TZWNyZXRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHN1YmplY3RBdmVcclxuICAgICAgY29lZmZcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVEaXZpc2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZURpdmlzaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGRpdmlzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgZGl2TmFtZVxyXG4gICAgICBkaXZDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlUmFua1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZVJhbmtRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcmFuayhpZDogJGlkKSB7XHJcbiAgICAgIHJhbmtOYW1lXHJcbiAgICAgIHJhbmtDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlU3ViamVjdFF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZVN1YmplY3RRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgc3ViamVjdChpZDogJGlkKSB7XHJcbiAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgIHN1YmplY3RDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlU2Vzc2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZVNlc3Npb25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgc2Vzc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgIHNlc3Npb25Db2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4vLy8qKioqKioqKioqKioqKioqKkVuZCBTaW5nbGUgb2JqZWN0IHF1ZXJpZXMgKi9cclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0QWxsU3ViamVjdHNPZkFTZXJpZXNRdWVyeSxcclxuICBnZXRBbGxTdWJqZWN0VHlwZXNRdWVyeSxcclxuICBnZXRBbGxHZW5kZXJzUXVlcnksXHJcbiAgZ2V0QWxsUmVnaW9uc09mQUNvdW50cnlRdWVyeSxcclxuICBnZXRBbGxTZXJpZXNPZkFuRWR1Y2F0aW9uVHlwZVF1ZXJ5LFxyXG4gIGdldEFsbEV4YW1zUXVlcnksXHJcbiAgZ2V0QWxsU2Vzc2lvbnNRdWVyeSxcclxuICBnZXREaXZpc2lvbnNPZkFSZWdpb25RdWVyeSxcclxuICBnZXRBbGxEaXZpc2lvbnNRdWVyeSxcclxuICBnZXRTdWJEaXZpc2lvbnNPZkFEaXZpc2lvblF1ZXJ5LFxyXG4gIGdldFRvd25zT2ZBU3ViRGl2aXNpb25RdWVyeSxcclxuICBnZXRDZW50ZXJzT2ZBVG93blF1ZXJ5LFxyXG4gIGdldEFsbEVkdWNhdGlvblR5cGVzUXVlcnksXHJcbiAgZ2V0QWxsU3ViamVjdHNRdWVyeSxcclxuICBnZXRBbGxSYW5rc1F1ZXJ5LFxyXG4gIGdldEFsbENhbmRpZGF0ZXNRdWVyeSxcclxuICBnZXRBbGxDZW50ZXJzUXVlcnksXHJcbiAgZ2V0U2luZ2xlUmVnaW9uUXVlcnksXHJcbiAgZ2V0QUNlbnRlckFkbWluUXVlcnksXHJcbiAgZ2V0QWxsQ2VudGVyQWRtaW5zUXVlcnksXHJcbiAgZ2V0QWxsU2VyaWVzUXVlcnksXHJcbiAgZ2V0QWxsU3ViRGl2aXNpb25zUXVlcnksXHJcbiAgZ2V0QWxsU3ViamVjdHNPZkFuRWR1Y1R5cGVRdWVyeSxcclxuICBnZXRTY29yZUlELFxyXG4gIHNpbmdsZVNlcmllc1F1ZXJ5LFxyXG4gIGdldFJlZ2lzdHJhdGlvbnMsXHJcbiAgc2luZ2xlU3ViamVjdFF1ZXJ5LFxyXG4gIHNpbmdsZUNhbmRpZGF0ZVF1ZXJ5MSxcclxuICBzaW5nbGVDYW5kaWRhdGVRdWVyeSxcclxuICB2aWV3U2luZ2xlQ2FuZGlkYXRlUXVlcnksXHJcbiAgc2luZ2xlQ2VudGVyUXVlcnksXHJcbiAgc2luZ2xlQ2VudGVyQWRtaW5RdWVyeSxcclxuICBzaW5nbGVFeGFtUXVlcnksXHJcbiAgc2luZ2xlVG93blF1ZXJ5LFxyXG4gIGdldEFsbENlbnRlclJlc3VsdHNRdWVyeSxcclxuICBzaW5nbGVTZXNzaW9uUXVlcnksXHJcbiAgc2luZ2xlRGl2aXNpb25RdWVyeSxcclxuICBzaW5nbGVTdWJEaXZpc2lvblF1ZXJ5LFxyXG4gIHNpbmdsZVN1YmplY3RUeXBlUXVlcnksXHJcbiAgc2luZ2xlRWR1Y2F0aW9uVHlwZVF1ZXJ5LFxyXG4gIHNpbmdsZVJhbmtRdWVyeSxcclxuICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc0ZvclJlc3VsdHNRdWVyeSxcclxuICBnZXRBbGxDYW5kaWRhdGVSZWdpc3RyYXRpb25JRHNRdWVyeSxcclxuICBnZXRDZW50ZXJFeGFtU2Vzc2lvblNlcmllc1F1ZXJ5LFxyXG4gIHNpbmdsZUdlbmRlclF1ZXJ5LFxyXG4gIGdldEV4YW1TZXNzaW9uUXVlcnksXHJcbiAgZ2V0QWxsU2VyaWVzT2ZBQ2VudGVyRXhhbVNlc3Npb25RdWVyeSxcclxuICBnZXRDZW50ZXJSZXN1bHRzUXVlcnksXHJcbiAgZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURRdWVyeSxcclxuICBnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JRHNRdWVyeSxcclxuICBjZW50ZXJFeGFtU2Vzc2lvbkZvclJlc3VsdHNRdWVyeSxcclxuICBnZXRDYW5kaWRhdGVJRFF1ZXJ5LFxyXG4gIGdldEFTaW5nbGVDZW50ZXJRdWVyeSxcclxuICBnZXRSZWdpc3RlcmVkQ2FuZGlkYXRlQ291bnRRdWVyeSxcclxuICBjZW50ZXJzUGVyVG93blF1ZXJ5LFxyXG4gIGdldFNpbmdsZUNlbnRlclF1ZXJ5LFxyXG4gIGdldENhbmRpZGF0ZVJlc3VsdHNRdWVyeSxcclxuICBnZXRDZW50ZXJSZWdpc3RyYXRpb25JRHNRdWVyeSxcclxuICBnZXRDYW5kaWRhdGVCeUNhbmRDb2RlUXVlcnksXHJcbiAgZ2V0U2luZ2xlQ2VudGVyRXhhbVNlc3Npb25RdWVyeSxcclxuICBnZXRFYWNoQ2FuZGlkYXRlUmVzdWx0c1F1ZXJ5LFxyXG4gIGdldENlbnRlcklERnJvbUNlbnRlckNvZGVRdWVyeSxcclxuICBnZXRSZWdpc3RyYXRpb25JREZyb21SZWdOdW1iZXJRdWVyeSxcclxuICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc1Jlc3VsdHNRdWVyeSxcclxuICBkYXRhRm9yQXZlcmFnZSxcclxuICBnZXRBbGxDb3VudHJ5c1JlZ2lvbkNyZWF0ZVF1ZXJ5LFxyXG4gIGdldEFsbFBoYXNlc1F1ZXJ5LFxyXG4gIGdldEFsbFJlZ2lvbnNRdWVyeSxcclxuICBnZXRBbGxDb3VudHJ5c1F1ZXJ5LFxyXG4gIHNpbmdsZUV4YW1pbmVyUXVlcnksXHJcbiAgZ2V0Q0VTRXhhbWluZXJRdWVyeSxcclxuICBnZXRFeGFtaW5lclJlZ2lzdHJhdGlvblF1ZXJ5LFxyXG4gIGdldFNpbmdsZVByb2ZRdWVyeSxcclxuICBnZXRBbGxSYW5rc09mQW5FeGFtUGhhc2VRdWVyeSxcclxuICBtZVF1ZXJ5LFxyXG4gIGdldFNpbmdsZUNlbnRlckJ5Q29kZVF1ZXJ5XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTdHlsZWRQYWdlID0gc3R5bGVkLmRpdmBcclxucGFkZGluZzowIDFyZW1cclxuIG1hcmdpbjowIGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gIGdyaWQtYXV0by1mbG93OnJvdztcclxuICAvKiBncmlkLXJvdy1nYXA6MXJlbTsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgbWluLXdpZHRoOiAzMHJlbTtcclxuICBcclxuYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG5oNHtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206MXJlbSA7XHJcbiAgcGFkZGluZzowLjVyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1CU307XHJcbiAgYmFja2dyb3VuZDoke3Byb3BzID0+IHByb3BzLnRoZW1lLnB1cmVXaGl0ZX07XHJcbndpZHRoOjEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czowLjVyZW07XHJcbiAgY29sb3I6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbn1cclxuLkZvcm0ge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE1pbmlTdHlsZWRQYWdlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBhZGRpbmc6MCAxcmVtO1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICBncmlkLWF1dG8tZmxvdzpyb3c7XHJcbiAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIG1pbi13aWR0aDogMzByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG4gIFxyXG4gIGg0e1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOjFyZW0gO1xyXG4gIHBhZGRpbmc6MC41cmVtIDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb3JtQlN9O1xyXG4gIGJhY2tncm91bmQ6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG53aWR0aDoxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6MC41cmVtO1xyXG4gIGNvbG9yOiR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19O1xyXG59XHJcbiAgLyogLkZvcm0ge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IE1pbmltU3R5bGVkUGFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAgbWFyZ2luOjAgYXV0bztcclxuICBcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gIGdyaWQtYXV0by1mbG93OnJvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgbWluLXdpZHRoOiAyNXJlbTtcclxuYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG5oNHtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206MXJlbSA7XHJcbiAgcGFkZGluZzowLjVyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1CU307XHJcbiAgYmFja2dyb3VuZDoke3Byb3BzID0+IHByb3BzLnRoZW1lLnB1cmVXaGl0ZX07XHJcbndpZHRoOjEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czowLjVyZW07XHJcbiAgY29sb3I6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbn1cclxuICAuRm9ybSB7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQmlnU3R5bGVkUGFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwYWRkaW5nOjAgMXJlbTtcclxuICAgbWFyZ2luOjAgYXV0bztcclxuICBcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gIGdyaWQtYXV0by1mbG93OnJvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgbWluLXdpZHRoOiAzMHJlbTtcclxuICBcclxuYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG4gIGg0e1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOjFyZW0gO1xyXG4gIHBhZGRpbmc6MC41cmVtIDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb3JtQlN9O1xyXG4gIGJhY2tncm91bmQ6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG53aWR0aDoxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6MC41cmVtO1xyXG4gIGNvbG9yOiR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19O1xyXG59XHJcbiAgLkZvcm0ge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgZmllbGRzZXQge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCaWdnZXN0U3R5bGVkUGFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwYWRkaW5nOjAgMXJlbTtcclxuICAgbWFyZ2luOjAgYXV0bztcclxuICBcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTB2dztcclxuICBtaW4td2lkdGg6IDMwcmVtO1xyXG5cclxuYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG5oNHtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206MXJlbSA7XHJcbiAgcGFkZGluZzowLjVyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1CU307XHJcbiAgYmFja2dyb3VuZDoke3Byb3BzID0+IHByb3BzLnRoZW1lLnB1cmVXaGl0ZX07XHJcbndpZHRoOjEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czowLjVyZW07XHJcbiAgY29sb3I6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbn1cclxuICAuRm9ybSB7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0gXHJcbiAgZmllbGRzZXQge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgeyBNaW5pbVN0eWxlZFBhZ2UsIE1pbmlTdHlsZWRQYWdlLCBTdHlsZWRQYWdlLCBCaWdTdHlsZWRQYWdlLCBCaWdnZXN0U3R5bGVkUGFnZSB9O1xyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gJ2Zvcm1payc7XHJcblxyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IGxvYWRpbmcgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICAvKiByb3RhdGU6IDA7ICovXHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgICAvKiByb3RhdGU6IDM2MGRlZzsgKi9cclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgY3VzdG9tU3R5bGUgPSB7XHJcbiAgY29udHJvbDogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgLi4ucHJvdmlkZWQsXHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInLFxyXG4gICAgYm9yZGVyOiBcIjBweCBzb2xpZCBibGFja1wiLFxyXG4gICAgYm9yZGVyQm90dG9tOiBcIjAuOXB4IHNvbGlkICMwNzgwYjdcIixcclxuICAgIGZvbnRTaXplOiAnMS42cmVtJyxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwJyxcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJvcmRlckJvdHRvbTogJyAycHggc29saWQgI2Q0MzUxYycsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzAnLFxyXG4gICAgfSwgLy8gYm9yZGVyIHN0eWxlIG9uIGhvdmVyXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgYm9yZGVyQm90dG9tOiAnIDJweCBzb2xpZCAjZDQzNTFjJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMCcsXHJcbiAgICB9LCAvLyBib3JkZXIgc3R5bGUgb24gaG92ZXJcclxuXHJcbiAgfSksXHJcbiAgb3B0aW9uOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAuLi5wcm92aWRlZCxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cclxuICB9KSxcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBwYWRkaW5nLXRvcDoxcmVtO1xyXG4gICAgLyogZGlzcGxheTpibG9jazsgKi9cclxuICAgIG1hcmdpbi10b3A6MC40cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMDlyZW0gc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTtcclxuICAgICB6LWluZGV4OjEwO1xyXG4gICAgIGZvbnQtZmFtaWx5OlwiUm9ib3RvIFNsYWJcIjtcclxuICAgIFxyXG4gICAgICY6dmFsaWQgKyBsYWJlbHtcclxuICAgICAgdG9wOi0uMjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZToxLjFyZW07XHJcbiAgICAgIGNvbG9yOiR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJpdGlzaEJsdWV9O1xyXG4gICAgIH1cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmYWN0aXZlIHtcclxuICAgICAgb3V0bGluZTogbm9uZTsgXHJcbiAgICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyaXRpc2hSZWR9O1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyArIGxhYmVse1xyXG4gICAgICB0b3A6LS4yNXJlbTtcclxuICAgICAgZm9udC1zaXplOjEuMXJlbTtcclxuICAgICAgY29sb3I6I2FhYTtcclxuICAgIH1cclxuICAgXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgYDtcclxuXHJcbmNvbnN0IElucHV0R3JvdXAgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBgO1xyXG5cclxuY29uc3QgU3R5bGVkTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDoxcmVtO1xyXG4gICAgdG9wOjEuNXJlbTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmdyZXlzWzJdfTtcclxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XHJcbiAgICBmb250LWZhbWlseTpcIlJvYm90byBTbGFiXCI7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXHJcbiAgIG1hcmdpbi10b3A6MXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDAuMDlyZW0gc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTtcclxuICAgICBvcHRpb24ge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgICAgICAgcGFkZGluZzogMHB4IDJweCAxcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMF19O1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOjAuNXJlbTtcclxuICAgICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icml0aXNoUmVkfTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbnBhZGRpbmctdG9wOjAuMnJlbTtcclxuZm9udC1zaXplOjEuM3JlbTtcclxuY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJpdGlzaFJlZH07XHJcbi8qIHBhZGRpbmctbGVmdDogMC41cmVtOyAqL1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUud2hpdGV9O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIHRleHQtc2hhZG93OjNweCA0cHggNXB4ICMwMDAwO1xyXG4gIC8qIHBhZGRpbmc6MC43cmVtIDsgKi9cclxuICAvKiBtYXJnaW4tYm90dG9tOiAxcmVtIGF1dG87ICovXHJcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iczJ9XHJcbiAgLyogbWFyZ2luLWJvdHRvbTogMS4xcmVtOyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3JleVsxMF19O1xyXG4gIH1cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3JleVsxM119O1xyXG4gIH0gICovXHJcbiAgXHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25TdHlsZWQgPSBzdHlsZWQuZGl2YFxyXG5wYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG5wYWRkaW5nLXRvcDogMXJlbTtcclxuYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgYm94LXNoYWRvdzoke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1CU307XHJcbiAgICBib3JkZXI6IDAuMDVyZW0gc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbiAgICBjb2xvcjogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19O1xyXG4gICAgYmFja2dyb3VuZDogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUucHVyZVdoaXRlfTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6ICAwLjhyZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIFxyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNhbmR9O1xyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZGl2YFxyXG5tYXJnaW46IDAgMnJlbTtcclxucGFkZGluZzowLjZyZW07XHJcbmZvbnQtc2l6ZTogMS41cmVtO1xyXG5ib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuYm9yZGVyOiAwLjA5cmVtIHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbi8qIGJvcmRlci10b3A6IDEuNXJlbSBzb2xpZCAkeyAocHJvcHMpID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTsgKi9cclxuLyogYm9yZGVyLWxlZnQ6IDAuMDlyZW0gc29saWQgJHsgKHByb3BzKSA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbmJvcmRlci1yaWdodDogMC4wOXJlbSBzb2xpZCAkeyAocHJvcHMpID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTtcclxuYm9yZGVyLWJvdHRvbTogMC4wOXJlbSBzb2xpZCAkeyAocHJvcHMpID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTsgKi9cclxuYm94LXNoYWRvdzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcm1CU307XHJcbm1pbi13aWR0aDogMjByZW07XHJcblxyXG5cclxuJltkaXNhYmxlZF0ge1xyXG4gICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBoZWlnaHQ6IDAuM3JlbTtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNzgwYjcgMCUsICNlMmIwNGEgMjAlLCAjMDc4MGI3IDEwMCUpO1xyXG4gICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMwMTkgMCUsICNlMmIwNGEgNTAlLCAjZmYzMDE5IDEwMCUpOyAqL1xyXG4gICAgfVxyXG4gICAgJlthcmlhLWJ1c3k9J3RydWUnXTo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcclxuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmNvbnN0IFN5Z2V4SW5wdXQgPSAoeyBsYWJlbCwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtmaWVsZCwgbWV0YV0gPSB1c2VGaWVsZChwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICA8U3R5bGVkSW5wdXQgY2xhc3NOYW1lPVwidGV4dC1pbnB1dFwiIHsuLi5maWVsZH0gey4uLnByb3BzfSByZXF1aXJlZCAvPlxyXG4gICAgICA8U3R5bGVkTGFiZWwgaHRtbEZvcj17cHJvcHMuaWQgfHwgcHJvcHMubmFtZX0+e2xhYmVsfTwvU3R5bGVkTGFiZWw+XHJcbiAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciA/IChcclxuICAgICAgICA8U3R5bGVkRXJyb3JNZXNzYWdlPnttZXRhLmVycm9yfTwvU3R5bGVkRXJyb3JNZXNzYWdlPlxyXG4gICAgICApIDogbnVsbH1cclxuXHJcbiAgICA8L0lucHV0R3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN5Z2V4U2VsZWN0ID0gKHsgbGFiZWwsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBbZmllbGQsIG1ldGFdID0gdXNlRmllbGQocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPFN0eWxlZExhYmVsIGh0bWxGb3I9e3Byb3BzLmlkIHx8IHByb3BzLm5hbWV9PntsYWJlbH08L1N0eWxlZExhYmVsPiAqL31cclxuICAgICAgPFN0eWxlZFNlbGVjdCB7Li4uZmllbGR9IHsuLi5wcm9wc30gLz5cclxuICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yID8gKFxyXG4gICAgICAgIDxTdHlsZWRFcnJvck1lc3NhZ2U+e21ldGEuZXJyb3J9PC9TdHlsZWRFcnJvck1lc3NhZ2U+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydFxyXG57XHJcbiAgU3R5bGVkTGFiZWwsXHJcbiAgICBTdHlsZWRCdXR0b24sXHJcbiAgICBjdXN0b21TdHlsZSxcclxuICAgIFN5Z2V4U2VsZWN0LFxyXG4gICAgQnV0dG9uU3R5bGVkLFxyXG4gICAgU3lnZXhJbnB1dCxcclxuICAgIFN0eWxlZEZvcm1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9