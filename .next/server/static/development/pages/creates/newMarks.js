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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/creates/newMarks.jsx":
/*!************************************!*\
  !*** ./pages/creates/newMarks.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_score_EnterNewMarksHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/score/EnterNewMarksHook */ "./src/components/score/EnterNewMarksHook.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\pages\\creates\\newMarks.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const newMarks = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(_src_components_score_EnterNewMarksHook__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (newMarks);

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

/***/ "./src/components/score/EnterNewMarksHook.jsx":
/*!****************************************************!*\
  !*** ./src/components/score/EnterNewMarksHook.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_StyledPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/StyledPage */ "./src/components/styles/StyledPage.jsx");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForm */ "./src/components/utils/useForm.jsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/FormInputs */ "./src/components/utils/FormInputs.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
var _jsxFileName = "E:\\SYGEFEX\\Sygefex-front-Formik\\src\\components\\score\\EnterNewMarksHook.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "EnterNewMarksHook__InputGroup",
  componentId: "sc-147e2er-0"
})(["display:flex;flex-direction:column;min-width:13rem;margin:0 1rem;"]);
const AllControls = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "EnterNewMarksHook__AllControls",
  componentId: "sc-147e2er-1"
})(["display:flex;flex-direction:column;"]);
const validationSchema = yup__WEBPACK_IMPORTED_MODULE_9__["object"]().shape({
  candExamSecretCode: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Code d'Anonymat du candidat Obligatoire"),
  educType: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Choix Du type d'Enseignement Obligatoire"),
  subjectSeries: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Choix de la matière Obligatoire"),
  series: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Choix de la Séries Obligatoire"),
  subjectAve: yup__WEBPACK_IMPORTED_MODULE_9__["number"]().min(0, 'Pas de note négative').max(20, 'Pas de note supérieure a 20').required('Note du candidate obligatoire')
});

const EnterNewMarks = () => {
  const initialValues = {
    subjectAve: "",
    series: "12",
    subjectSeries: "",
    educType: "12",
    candExamSecretCode: ""
  };
  const [state, setState, handleReactSelectChange] = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_5__["default"])({
    educTypeID: "",
    seriesID: ""
  });
  const {
    data: dataEducType,
    loadingEducType,
    errEducType
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllEducationTypesQuery"]);
  {
    loadingEducType && __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 26
      }
    }, "loading...");
  }
  {
    errEducType && __jsx(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: errEducType,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 22
      }
    });
  }
  console.log(dataEducType);
  const getEducationTypes = dataEducType && dataEducType.educationTypes;
  console.log(getEducationTypes);
  const getEducTypesOptions = getEducationTypes && getEducationTypes.map(item => _objectSpread(_objectSpread({}, item), {}, {
    value: item.id,
    label: item.educationTypeName
  }));
  const {
    data: dataEducationType,
    loading: loadingSeries,
    error: errSeries
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllSeriesOfAnEducationTypeQuery"], {
    skip: !state.educTypeID,
    variables: {
      id: state.educTypeID
    }
  });
  {
    loadingSeries && __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 24
      }
    }, "loading...");
  }
  {
    errSeries && __jsx(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: errSeries,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 20
      }
    });
  }
  console.log(dataEducationType);
  const getEducationType = dataEducationType && dataEducationType.educationType;

  const {
    series
  } = _objectSpread({}, getEducationType);

  console.log(series);
  const refinedSeries = series && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__["removeTypename"])(series);
  const getSeriesOptions = refinedSeries && refinedSeries.map(item => ({
    value: item.id,
    label: item.seriesName
  }));
  const {
    data: dataSubjSeries,
    loading: loadingSubjSer,
    error: errSubjSer
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_12__["getAllSubjectsOfASeriesQuery"], {
    skip: !state.seriesID,
    variables: {
      id: state.seriesID
    }
  });
  {
    loadingSubjSer && __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }, "loading...");
  }
  {
    errSubjSer && __jsx(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: errSubjSer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    });
  }
  console.log(dataSubjSeries);
  const getSeries = dataSubjSeries && dataSubjSeries.series;

  const {
    subjectSeries
  } = _objectSpread({}, getSeries);

  console.log(subjectSeries);
  const refinedSubjectSeries = subjectSeries && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__["removeTypename"])(subjectSeries);
  const getSubjectsOptions = refinedSubjectSeries && refinedSubjectSeries.map(item => ({
    value: item.id,
    label: item.subjectName
  }));
  const [updateScore, {
    loading,
    error
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_10__["updateScoreMutation"]);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    method: "POST",
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, actions, setSubmitting, resetForm) => {
      const res = await updateScore({
        variables: _objectSpread(_objectSpread({}, values), {}, {
          subjectSeries: refinedSubjectSeries && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_11__["getObjectFromID"])(values.subjectSeries.value)
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
      lineNumber: 117,
      columnNumber: 9
    }
  }, ({
    values,
    setFieldValue,
    isSubmitting
  }) => {
    return __jsx(_styles_StyledPage__WEBPACK_IMPORTED_MODULE_2__["MinimStyledPage"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      }
    }, __jsx("h4", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 25
      }
    }, "Notes des candidats"), __jsx(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 25
      }
    }), __jsx(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["StyledForm"], {
      disabled: isSubmitting,
      "aria-busy": isSubmitting,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 29
      }
    }, __jsx(AllControls, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 33
      }
    }, __jsx(InputGroup, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 37
      }
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onChange: handleReactSelectChange,
      name: "educTypeID",
      styles: _utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["customStyle"],
      placeholder: "Le type d'enseignement",
      options: getEducTypesOptions,
      disabled: isSubmitting,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 41
      }
    }), __jsx(react_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onChange: handleReactSelectChange,
      name: "seriesID",
      styles: _utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["customStyle"],
      placeholder: "La Serie",
      options: getSeriesOptions,
      disabled: isSubmitting,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 41
      }
    }), __jsx(react_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onChange: value => setFieldValue('subjectSeries', value),
      name: "subjectSeries",
      styles: _utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["customStyle"],
      placeholder: "Matiere",
      options: getSubjectsOptions,
      disabled: isSubmitting,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 41
      }
    }), __jsx(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
      name: "candExamSecretCode",
      type: "text",
      label: "sAnonymat du candidat",
      disabled: isSubmitting,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 41
      }
    }), __jsx(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["SygexInput"], {
      name: "subjectAve",
      type: "number",
      step: "0.001",
      label: "Note en la mati\xE8re",
      disabled: isSubmitting,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 41
      }
    })), __jsx(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["ButtonStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 37
      }
    }, __jsx(_utils_FormInputs__WEBPACK_IMPORTED_MODULE_7__["StyledButton"], {
      type: "submit",
      disabled: isSubmitting,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 41
      }
    }, "Valid", isSubmitting ? 'ation en cours' : 'er'))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (EnterNewMarks);

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

/***/ "./src/components/utils/useForm.jsx":
/*!******************************************!*\
  !*** ./src/components/utils/useForm.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useForm = initialValues => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValues);

  const handleInputChange = e => {
    const {
      name,
      value,
      type
    } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState(state => _objectSpread(_objectSpread({}, state), {}, {
      [name]: val
    }));
  };

  const handleReactSelectChange = (value, action) => {
    console.log({
      value
    });
    console.log({
      action
    });
    setState(state => _objectSpread(_objectSpread({}, state), {}, {
      [action.name]: value.value
    }));
  };

  return [state, setState, handleReactSelectChange, handleInputChange];
};

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ }),

/***/ 7:
/*!******************************************!*\
  !*** multi ./pages/creates/newMarks.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\SYGEFEX\Sygefex-front-Formik\pages\creates\newMarks.jsx */"./pages/creates/newMarks.jsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3JlYXRlcy9uZXdNYXJrcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1ZXJpZXMmTXV0YXRpb25zJkZ1bmN0aW9ucy9GdW5jdGlvbnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1ZXJpZXMmTXV0YXRpb25zJkZ1bmN0aW9ucy9NdXRhdGlvbnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1ZXJpZXMmTXV0YXRpb25zJkZ1bmN0aW9ucy9RdWVyaWVzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY29yZS9FbnRlck5ld01hcmtzSG9vay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1N0eWxlZFBhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWxzL0Zvcm1JbnB1dHMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3VzZUZvcm0uanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJuZXdNYXJrcyIsIkVycm9yU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImdyZXkiLCJEaXNwbGF5RXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJuZXR3b3JrRXJyb3IiLCJyZXN1bHQiLCJlcnJvcnMiLCJsZW5ndGgiLCJtYXAiLCJpIiwicmVwbGFjZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInVuaXF1ZUNvZGVHZW4iLCJrZXlMZW5ndGgiLCJrZXkiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsInN1YnN0ciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm9iamVjdEZyb21Db2RlIiwiY29kZVZhbHVlIiwic3RvcmVkT2JqZWN0IiwiY2FuZENvZGUiLCJnZXRPYmplY3RGcm9tSUQiLCJzdXBwbGllZElEIiwidGhlT2JqZWN0IiwiaWQiLCJjZW50ZXJFeGFtU2Vzc2lvbk9iamVjdEZyb21Db2RlIiwiY2VudGVyRXhhbVNlc3Npb24iLCJjYW5kRXhhbVNlc3Npb25Db2RlIiwiY2FuZElEIiwiZXhhbUlEIiwic2Vzc2lvbklEIiwiZ2V0U2VsZWN0ZWRPYmplY3QiLCJkYXRhU291cmNlIiwib2JqZWN0SUQiLCJ0ZW1wT2JqZWN0cyIsInNlbGVjdGVkT2JqZWN0IiwiZmluZCIsIml0ZW0iLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJwYWQiLCJzaXplIiwicyIsIlN0cmluZyIsImNhbGNDYW5kQXZlIiwiY2FuZFNjb3JlcyIsImF2ZVRvdGFsIiwicmVkdWNlIiwidGFsbHkiLCJzdWJqZWN0QXZlIiwiY29lZmYiLCJjb2VmZlRvdGFsIiwiY2FuZEF2ZSIsImNhbGNDYW5kVG90YWxTY29yZSIsImNhbGNDYW5kVG90YWxDb2VmZiIsInJvdW5kRmxvYXROdW1iZXIiLCJ2YWx1ZSIsImRlY2ltYWxzIiwicm91bmQiLCJyZW1vdmVUeXBlbmFtZSIsInVuZGVmaW5lZCIsIkFycmF5IiwiaXNBcnJheSIsInYiLCJuZXdPYmoiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsInVwbG9hZEZpbGUiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJmaWxlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImltYWdlIiwic2VjdXJlX3VybCIsInNpZ25JbkNhbmRpZGF0ZSIsImdxbCIsInVwZGF0ZVNlc3Npb25NdXRhdGlvbiIsInVwZGF0ZUVkdWNhdGlvblR5cGVNdXRhdGlvbiIsInVwZGF0ZVN1YmplY3RUeXBlTXV0YXRpb24iLCJ1cGRhdGVTdWJqZWN0TXV0YXRpb24iLCJ1cGRhdGVSYW5rTXV0YXRpb24iLCJ1cGRhdGVTZXJpZXNNdXRhdGlvbiIsInVwZGF0ZURpdmlzaW9uTXV0YXRpb24iLCJ1cGRhdGVSZWdpb25NdXRhdGlvbiIsImNyZWF0ZU5ld1JlcG9ydE11dGF0aW9uIiwiY3JlYXRlTmV3R2VuZGVyTXV0YXRpb24iLCJjcmVhdGVSZWdpc3RyYXRpb25NdXRhdGlvbiIsImNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uTXV0YXRpb24iLCJjcmVhdGVQaGFzZVJhbmtNdXRhdGlvbiIsImNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uRXhhbWluZXJNdXRhdGlvbiIsImNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uU2VyaWVzTXV0YXRpb24iLCJjcmVhdGVEaXZpc2lvbk11dGF0aW9uIiwiY3JlYXRlQ2VudGVyTXV0YXRpb24iLCJjcmVhdGVTZXJpZXNNdXRhdGlvbiIsImNyZWF0ZUVkdWNhdGlvblR5cGVNdXRhdGlvbiIsImNyZWF0ZVRvd25NdXRhdGlvbiIsImNyZWF0ZU5ld1N1YmplY3RUeXBlTXV0YXRpb24iLCJjcmVhdGVOZXdTdWJqZWN0TXV0YXRpb24iLCJjcmVhdGVTdWJEaXZpc2lvbk11dGF0aW9uIiwiY3JlYXRlTmV3U2Vzc2lvbk11dGF0aW9uIiwiY3JlYXRlTmV3UmFua011dGF0aW9uIiwiY3JlYXRlTmV3UmVnaW9uTXV0YXRpb24iLCJzaWdudXBVc2VyTXV0YXRpb24iLCJsb2dpblVzZXJNdXRhdGlvbiIsImNyZWF0ZU5ld0NvdW50cnlNdXRhdGlvbiIsImNyZWF0ZVBoYXNlTXV0YXRpb24iLCJjcmVhdGVFeGFtTXV0YXRpb24iLCJyZWdpc3RlclN1YmplY3RTZXJpZXNNdXRhdGlvbiIsInJlZ2lzdGVyTmV3U3ViamVjdFNlcmllc011dGF0aW9uIiwiY3JlYXRlQ2FuZGlkYXRlTXV0YXRpb24iLCJjcmVhdGVFeGFtaW5lck11dGF0aW9uIiwidXBkYXRlU3ViRGl2aXNpb25NdXRhdGlvbiIsInVwZGF0ZUNlbnRlck11dGF0aW9uIiwidXBkYXRlVG93bk11dGF0aW9uIiwidXBkYXRlRXhhbU11dGF0aW9uIiwidXBkYXRlU2NvcmVNdXRhdGlvbiIsInVwZGF0ZUNhbmRpZGF0ZU11dGF0aW9uIiwidXBkYXRlR2VuZGVyTXV0YXRpb24iLCJzaWduVXBNdXRhdGlvbiIsInVwZGF0ZUl0ZW1NdXRhdGlvbiIsInVwZGF0ZU11dGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJ2YXJpYWJsZXMiLCJzdGF0ZSIsImdldEFDZW50ZXJBZG1pblF1ZXJ5IiwibWVRdWVyeSIsInNpbmdsZUVkdWNhdGlvblR5cGVRdWVyeSIsImdldENFU0V4YW1pbmVyUXVlcnkiLCJzaW5nbGVTdWJqZWN0VHlwZVF1ZXJ5IiwiZ2V0QWxsQ2VudGVyQWRtaW5zUXVlcnkiLCJnZXRBbGxFZHVjYXRpb25UeXBlc1F1ZXJ5IiwiZ2V0QWxsUmVnaW9uc09mQUNvdW50cnlRdWVyeSIsImdldEFsbFJlZ2lvbnNRdWVyeSIsImdldEFsbENvdW50cnlzUXVlcnkiLCJnZXRBbGxDb3VudHJ5c1JlZ2lvbkNyZWF0ZVF1ZXJ5IiwiZ2V0Q2VudGVyUmVzdWx0c1F1ZXJ5IiwiZ2V0Q2FuZGlkYXRlUmVzdWx0c1F1ZXJ5IiwiZ2V0RXhhbWluZXJSZWdpc3RyYXRpb25RdWVyeSIsImdldEFsbENlbnRlclJlc3VsdHNRdWVyeSIsImdldEVhY2hDYW5kaWRhdGVSZXN1bHRzUXVlcnkiLCJnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JRFF1ZXJ5IiwiZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURzUXVlcnkiLCJnZXRBbGxDYW5kaWRhdGVSZWdpc3RyYXRpb25JRHNRdWVyeSIsImdldENhbmRpZGF0ZUlEUXVlcnkiLCJnZXRSZWdpc3RyYXRpb25JREZyb21SZWdOdW1iZXJRdWVyeSIsImdldENlbnRlcklERnJvbUNlbnRlckNvZGVRdWVyeSIsImdldENlbnRlclJlZ2lzdHJhdGlvbklEc1F1ZXJ5IiwiY2VudGVyRXhhbVNlc3Npb25TZXJpZXNGb3JSZXN1bHRzUXVlcnkiLCJjZW50ZXJFeGFtU2Vzc2lvbkZvclJlc3VsdHNRdWVyeSIsImNlbnRlckV4YW1TZXNzaW9uU2VyaWVzUmVzdWx0c1F1ZXJ5IiwiZ2V0Q2FuZGlkYXRlQnlDYW5kQ29kZVF1ZXJ5IiwiZ2V0QWxsUmFua3NRdWVyeSIsImdldEFsbFBoYXNlc1F1ZXJ5IiwiZ2V0QWxsU3ViamVjdHNRdWVyeSIsImdldEFsbEdlbmRlcnNRdWVyeSIsImdldEFsbFNlcmllc09mQW5FZHVjYXRpb25UeXBlUXVlcnkiLCJnZXRBbGxTZXJpZXNPZkFDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5IiwiZ2V0QWxsU2VyaWVzUXVlcnkiLCJnZXRBbGxTdWJqZWN0c09mQW5FZHVjVHlwZVF1ZXJ5IiwiZ2V0QWxsU3ViamVjdHNPZkFTZXJpZXNRdWVyeSIsImdldEFsbEV4YW1zUXVlcnkiLCJnZXRBbGxTZXNzaW9uc1F1ZXJ5IiwiZ2V0QWxsRGl2aXNpb25zUXVlcnkiLCJnZXREaXZpc2lvbnNPZkFSZWdpb25RdWVyeSIsImdldFN1YkRpdmlzaW9uc09mQURpdmlzaW9uUXVlcnkiLCJnZXRBbGxTdWJEaXZpc2lvbnNRdWVyeSIsImdldFRvd25zT2ZBU3ViRGl2aXNpb25RdWVyeSIsImdldENlbnRlcnNPZkFUb3duUXVlcnkiLCJjZW50ZXJzUGVyVG93blF1ZXJ5IiwiZ2V0QWxsU3ViamVjdFR5cGVzUXVlcnkiLCJnZXRBbGxDZW50ZXJzUXVlcnkiLCJnZXRBbGxDYW5kaWRhdGVzUXVlcnkiLCJzaW5nbGVDZW50ZXJRdWVyeSIsImdldFNpbmdsZUNlbnRlclF1ZXJ5IiwiZ2V0U2luZ2xlUHJvZlF1ZXJ5IiwiZ2V0U2luZ2xlQ2VudGVyQnlDb2RlUXVlcnkiLCJnZXRBU2luZ2xlQ2VudGVyUXVlcnkiLCJzaW5nbGVUb3duUXVlcnkiLCJnZXRTaW5nbGVDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5IiwiZ2V0QWxsUmFua3NPZkFuRXhhbVBoYXNlUXVlcnkiLCJnZXRSZWdpc3RlcmVkQ2FuZGlkYXRlQ291bnRRdWVyeSIsImdldENlbnRlckV4YW1TZXNzaW9uU2VyaWVzUXVlcnkiLCJnZXRFeGFtU2Vzc2lvblF1ZXJ5Iiwic2luZ2xlRXhhbVF1ZXJ5Iiwic2luZ2xlQ2FuZGlkYXRlUXVlcnkxIiwic2luZ2xlQ2FuZGlkYXRlUXVlcnkiLCJzaW5nbGVFeGFtaW5lclF1ZXJ5Iiwidmlld1NpbmdsZUNhbmRpZGF0ZVF1ZXJ5IiwiZ2V0U2NvcmVJRCIsImdldFJlZ2lzdHJhdGlvbnMiLCJzaW5nbGVTdWJEaXZpc2lvblF1ZXJ5IiwiZ2V0U2luZ2xlUmVnaW9uUXVlcnkiLCJzaW5nbGVHZW5kZXJRdWVyeSIsInNpbmdsZVNlcmllc1F1ZXJ5Iiwic2luZ2xlQ2VudGVyQWRtaW5RdWVyeSIsImRhdGFGb3JBdmVyYWdlIiwic2luZ2xlRGl2aXNpb25RdWVyeSIsInNpbmdsZVJhbmtRdWVyeSIsInNpbmdsZVN1YmplY3RRdWVyeSIsInNpbmdsZVNlc3Npb25RdWVyeSIsIklucHV0R3JvdXAiLCJBbGxDb250cm9scyIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsImNhbmRFeGFtU2VjcmV0Q29kZSIsInJlcXVpcmVkIiwiZWR1Y1R5cGUiLCJzdWJqZWN0U2VyaWVzIiwic2VyaWVzIiwibWluIiwibWF4IiwiRW50ZXJOZXdNYXJrcyIsImluaXRpYWxWYWx1ZXMiLCJoYW5kbGVSZWFjdFNlbGVjdENoYW5nZSIsInVzZUZvcm0iLCJlZHVjVHlwZUlEIiwic2VyaWVzSUQiLCJkYXRhRWR1Y1R5cGUiLCJsb2FkaW5nRWR1Y1R5cGUiLCJlcnJFZHVjVHlwZSIsInVzZVF1ZXJ5IiwiZ2V0RWR1Y2F0aW9uVHlwZXMiLCJlZHVjYXRpb25UeXBlcyIsImdldEVkdWNUeXBlc09wdGlvbnMiLCJsYWJlbCIsImVkdWNhdGlvblR5cGVOYW1lIiwiZGF0YUVkdWNhdGlvblR5cGUiLCJsb2FkaW5nIiwibG9hZGluZ1NlcmllcyIsImVyclNlcmllcyIsInNraXAiLCJnZXRFZHVjYXRpb25UeXBlIiwiZWR1Y2F0aW9uVHlwZSIsInJlZmluZWRTZXJpZXMiLCJnZXRTZXJpZXNPcHRpb25zIiwic2VyaWVzTmFtZSIsImRhdGFTdWJqU2VyaWVzIiwibG9hZGluZ1N1YmpTZXIiLCJlcnJTdWJqU2VyIiwiZ2V0U2VyaWVzIiwicmVmaW5lZFN1YmplY3RTZXJpZXMiLCJnZXRTdWJqZWN0c09wdGlvbnMiLCJzdWJqZWN0TmFtZSIsInVwZGF0ZVNjb3JlIiwidXNlTXV0YXRpb24iLCJ2YWx1ZXMiLCJhY3Rpb25zIiwic2V0U3VibWl0dGluZyIsInJlc2V0Rm9ybSIsInNldFRpbWVvdXQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0RmllbGRWYWx1ZSIsImlzU3VibWl0dGluZyIsImN1c3RvbVN0eWxlIiwiU3R5bGVkUGFnZSIsInB1cmVXaGl0ZSIsImZvcm1CUyIsImJsdWVzIiwiTWluaVN0eWxlZFBhZ2UiLCJNaW5pbVN0eWxlZFBhZ2UiLCJCaWdTdHlsZWRQYWdlIiwiQmlnZ2VzdFN0eWxlZFBhZ2UiLCJrZXlmcmFtZXMiLCJjb250cm9sIiwicHJvdmlkZWQiLCJmb250RmFtaWx5IiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJhbGlnbkl0ZW1zIiwib3B0aW9uIiwidGV4dEFsaWduIiwiU3R5bGVkSW5wdXQiLCJpbnB1dCIsImJyaXRpc2hCbHVlIiwiYnJpdGlzaFJlZCIsIlN0eWxlZExhYmVsIiwiZ3JleXMiLCJTdHlsZWRTZWxlY3QiLCJzZWxlY3QiLCJTdHlsZWRFcnJvck1lc3NhZ2UiLCJTdHlsZWRCdXR0b24iLCJidXR0b24iLCJ3aGl0ZSIsImJzMiIsIkJ1dHRvblN0eWxlZCIsInNhbmQiLCJTdHlsZWRGb3JtIiwiU3lnZXhJbnB1dCIsImZpZWxkIiwibWV0YSIsInVzZUZpZWxkIiwibmFtZSIsInRvdWNoZWQiLCJTeWdleFNlbGVjdCIsInVzZVN0YXRlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0eXBlIiwidmFsIiwicGFyc2VJbnQiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFHQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUN0QixTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQUREO0FBS0EsQ0FORDs7QUFPZUEsdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDROQUVEQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxJQUFaLENBQWlCLENBQWpCLENBRlIsQ0FBakI7O0FBa0JBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQ2xDLE1BQUksQ0FBQ0EsS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQ0MsT0FBckIsRUFBOEIsT0FBTyxJQUFQOztBQUM5QixNQUFJRCxLQUFLLENBQUNFLFlBQU4sSUFBc0JGLEtBQUssQ0FBQ0UsWUFBTixDQUFtQkMsTUFBekMsSUFBbURILEtBQUssQ0FBQ0UsWUFBTixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQTFCLENBQWlDQyxNQUF4RixFQUFnRztBQUM5RixXQUFPTCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCQyxNQUExQixDQUFpQ0UsR0FBakMsQ0FBcUMsQ0FBQ04sS0FBRCxFQUFRTyxDQUFSLEtBQzFDLE1BQUMsV0FBRDtBQUFhLFNBQUcsRUFBRUEsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsbUJBQVUsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVHUCxLQUFLLENBQUNDLE9BQU4sQ0FBY08sT0FBZCxDQUFzQixpQkFBdEIsRUFBeUMsRUFBekMsQ0FGSCxDQURGLENBREssQ0FBUDtBQVFEOztBQUNELFNBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGlCQUFVLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR1IsS0FBSyxDQUFDQyxPQUFOLENBQWNPLE9BQWQsQ0FBc0IsaUJBQXRCLEVBQXlDLEVBQXpDLENBRkgsQ0FERixDQURGO0FBUUQsQ0FwQkQ7O0FBc0JBVCxZQUFZLENBQUNVLFlBQWIsR0FBNEI7QUFDMUJULE9BQUssRUFBRTtBQURtQixDQUE1QjtBQUlBRCxZQUFZLENBQUNXLFNBQWIsR0FBeUI7QUFDdkJWLE9BQUssRUFBRVcsaURBQVMsQ0FBQ0M7QUFETSxDQUF6QjtBQUllYiwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBR0EsTUFBTWMsYUFBYSxHQUFHQyxTQUFTLElBQUk7QUFDakMsTUFBSVAsQ0FBSjtBQUFBLE1BQ0VRLEdBQUcsR0FBRyxFQURSO0FBQUEsTUFFRTtBQUNBQyxZQUFVLEdBQ1IscUVBSko7QUFNQSxNQUFJQyxnQkFBZ0IsR0FBR0QsVUFBVSxDQUFDWCxNQUFsQzs7QUFFQSxPQUFLRSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdPLFNBQWhCLEVBQTJCUCxDQUFDLEVBQTVCLEVBQWdDO0FBQzlCUSxPQUFHLElBQUlDLFVBQVUsQ0FBQ0UsTUFBWCxDQUNMQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixnQkFBaEIsR0FBbUMsQ0FBOUMsQ0FESyxFQUVMLENBRkssQ0FBUDtBQUlEOztBQUVELFNBQU9GLEdBQVA7QUFDRCxDQWpCRDs7QUFtQkEsTUFBTU8sY0FBYyxHQUFHQyxTQUFTLElBQUk7QUFDbEMsUUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxZQUFRLEVBQUcsR0FBRUYsU0FBVTtBQURKLEdBQXJCO0FBR0EsU0FBT0MsWUFBUDtBQUNELENBTEQ7O0FBT0EsTUFBTUUsZUFBZSxHQUFHQyxVQUFVLElBQUk7QUFDcEMsUUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxNQUFFLEVBQUcsR0FBRUYsVUFBVztBQURGLEdBQWxCO0FBR0EsU0FBT0MsU0FBUDtBQUNELENBTEQ7O0FBT0EsTUFBTUUsK0JBQStCLEdBQUdQLFNBQVMsSUFBSTtBQUNuRCxRQUFNQyxZQUFZLEdBQUc7QUFDbkJPLHFCQUFpQixFQUFHLEdBQUVSLFNBQVU7QUFEYixHQUFyQjtBQUdBLFNBQU9DLFlBQVA7QUFDRCxDQUxEOztBQU9BLE1BQU1RLG1CQUFtQixHQUFHLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFpQkMsU0FBakIsS0FBK0I7QUFDekQsU0FBUSxHQUFFRixNQUFNLEdBQUdDLE1BQVQsR0FBa0JDLFNBQVUsRUFBdEM7QUFDRCxDQUZEOztBQUlBLE1BQU1DLGlCQUFpQixHQUFHLENBQUNDLFVBQUQsRUFBYUMsUUFBYixLQUEwQjtBQUNsRDtBQUNBLE1BQUlELFVBQVUsQ0FBQ2hDLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekIsVUFBTWtDLFdBQVcsR0FBRyxDQUFDLEdBQUdGLFVBQUosQ0FBcEIsQ0FEeUIsQ0FFekI7O0FBQ0EsVUFBTUcsY0FBYyxHQUFHRCxXQUFXLENBQUNFLElBQVosQ0FBaUJDLElBQUksSUFBSUEsSUFBSSxDQUFDYixFQUFMLEtBQVlTLFFBQXJDLENBQXZCO0FBQ0EsV0FBT0UsY0FBUDtBQUNEO0FBQ0YsQ0FSRCxDLENBU0E7OztBQUNBRyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLEdBQWpCLEdBQXVCLFVBQVVDLElBQVYsRUFBZ0I7QUFDckMsTUFBSUMsQ0FBQyxHQUFHQyxNQUFNLENBQUMsSUFBRCxDQUFkOztBQUNBLFNBQU9ELENBQUMsQ0FBQzFDLE1BQUYsSUFBWXlDLElBQUksSUFBSSxDQUFwQixDQUFQLEVBQStCO0FBQzdCQyxLQUFDLEdBQUcsTUFBTUEsQ0FBVjtBQUNEOztBQUNELFNBQU9BLENBQVA7QUFDRCxDQU5EOztBQVFBLE1BQU1FLFdBQVcsR0FBR0MsVUFBVSxJQUFJO0FBQ2hDLFFBQU1DLFFBQVEsR0FDWkQsVUFBVSxJQUNWQSxVQUFVLENBQUNFLE1BQVgsQ0FBa0IsQ0FBQ0MsS0FBRCxFQUFRWCxJQUFSLEtBQWlCVyxLQUFLLEdBQUdYLElBQUksQ0FBQ1ksVUFBTCxHQUFrQlosSUFBSSxDQUFDYSxLQUFsRSxFQUF5RSxDQUF6RSxDQUZGO0FBR0EsUUFBTUMsVUFBVSxHQUFHTixVQUFVLENBQUNFLE1BQVgsQ0FDakIsQ0FBQ0MsS0FBRCxFQUFRWCxJQUFSLEtBQWtCQSxJQUFJLENBQUNZLFVBQUwsS0FBb0IsSUFBcEIsR0FBMkJELEtBQTNCLEdBQW1DQSxLQUFLLEdBQUdYLElBQUksQ0FBQ2EsS0FEakQsRUFFakIsQ0FGaUIsQ0FBbkI7QUFJQSxRQUFNRSxPQUFPLEdBQUdOLFFBQVEsR0FBR0ssVUFBM0I7QUFDQSxTQUFPQyxPQUFQO0FBQ0QsQ0FWRDs7QUFXQSxNQUFNQyxrQkFBa0IsR0FBR1IsVUFBVSxJQUFJO0FBQ3ZDLFFBQU1DLFFBQVEsR0FDWkQsVUFBVSxJQUNWQSxVQUFVLENBQUNFLE1BQVgsQ0FBa0IsQ0FBQ0MsS0FBRCxFQUFRWCxJQUFSLEtBQWlCVyxLQUFLLEdBQUdYLElBQUksQ0FBQ1ksVUFBTCxHQUFrQlosSUFBSSxDQUFDYSxLQUFsRSxFQUF5RSxDQUF6RSxDQUZGO0FBR0EsU0FBT0osUUFBUDtBQUNELENBTEQ7O0FBTUEsTUFBTVEsa0JBQWtCLEdBQUdULFVBQVUsSUFBSTtBQUN2QyxRQUFNTSxVQUFVLEdBQ2ROLFVBQVUsSUFDVkEsVUFBVSxDQUFDRSxNQUFYLENBQ0UsQ0FBQ0MsS0FBRCxFQUFRWCxJQUFSLEtBQWtCQSxJQUFJLENBQUNZLFVBQUwsS0FBb0IsSUFBcEIsR0FBMkJELEtBQTNCLEdBQW1DQSxLQUFLLEdBQUdYLElBQUksQ0FBQ2EsS0FEcEUsRUFFRSxDQUZGLENBRkY7QUFNQSxTQUFPQyxVQUFQO0FBQ0QsQ0FSRDs7QUFTQSxNQUFNSSxnQkFBZ0IsR0FBRyxDQUFDQyxLQUFELEVBQVFDLFFBQVIsS0FBcUI7QUFDNUMsU0FBT25CLE1BQU0sQ0FBQ3hCLElBQUksQ0FBQzRDLEtBQUwsQ0FBV0YsS0FBSyxHQUFHLEdBQVIsR0FBY0MsUUFBekIsSUFBcUMsSUFBckMsR0FBNENBLFFBQTdDLENBQWI7QUFDRCxDQUZEOztBQUdBLE1BQU1FLGNBQWMsR0FBSUgsS0FBRCxJQUFXO0FBQ2hDLE1BQUlBLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUtJLFNBQWhDLEVBQTJDO0FBQ3pDLFdBQU9KLEtBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUssS0FBSyxDQUFDQyxPQUFOLENBQWNOLEtBQWQsQ0FBSixFQUEwQjtBQUMvQixXQUFPQSxLQUFLLENBQUN2RCxHQUFOLENBQVU4RCxDQUFDLElBQUlKLGNBQWMsQ0FBQ0ksQ0FBRCxDQUE3QixDQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUksT0FBT1AsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUNwQyxVQUFNUSxNQUFNLEdBQUcsRUFBZjtBQUNBQyxVQUFNLENBQUNDLE9BQVAsQ0FBZVYsS0FBZixFQUFzQlcsT0FBdEIsQ0FBOEIsQ0FBQyxDQUFDekQsR0FBRCxFQUFNcUQsQ0FBTixDQUFELEtBQWM7QUFDMUMsVUFBSXJELEdBQUcsS0FBSyxZQUFaLEVBQTBCO0FBQ3hCc0QsY0FBTSxDQUFDdEQsR0FBRCxDQUFOLEdBQWNpRCxjQUFjLENBQUNJLENBQUQsQ0FBNUI7QUFDRDtBQUNGLEtBSkQ7QUFLQSxXQUFPQyxNQUFQO0FBQ0Q7O0FBQ0QsU0FBT1IsS0FBUDtBQUNELENBZkQ7O0FBaUJBLE1BQU1ZLFVBQVUsR0FBRyxNQUFPQyxDQUFQLElBQWE7QUFDOUIsUUFBTUMsS0FBSyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsS0FBdkI7QUFDQSxRQUFNRSxJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFiO0FBQ0FELE1BQUksQ0FBQ0UsTUFBTCxDQUFZLE1BQVosRUFBb0JKLEtBQUssQ0FBQyxDQUFELENBQXpCO0FBQ0FFLE1BQUksQ0FBQ0UsTUFBTCxDQUFZLGVBQVosRUFBNkIsWUFBN0I7QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLG1EQUFELEVBQXNEO0FBQzNFQyxVQUFNLEVBQUUsTUFEbUU7QUFFM0VDLFFBQUksRUFBRU47QUFGcUUsR0FBdEQsQ0FBdkI7QUFJQSxRQUFNTyxJQUFJLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxJQUFKLEVBQW5CO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaLEVBVjhCLENBVzlCOztBQUNBSSxVQUFRLENBQUM7QUFBRUMsU0FBSyxFQUFFTCxJQUFJLENBQUNNO0FBQWQsR0FBRCxDQUFSO0FBQ0QsQ0FiRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0M5R0E7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHQyxrREFBSTs7Ozs7OztDQUE1QixDLENBUUE7O0FBRUEsTUFBTUMscUJBQXFCLEdBQUdELGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0NBQWxDO0FBa0JBLE1BQU1FLDJCQUEyQixHQUFHRixrREFBSTs7Ozs7Ozs7Ozs7Ozs7OztDQUF4QztBQWlCQSxNQUFNRyx5QkFBeUIsR0FBR0gsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBdEM7QUFrQkEsTUFBTUkscUJBQXFCLEdBQUdKLGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0NBQWxDO0FBa0JBLE1BQU1LLGtCQUFrQixHQUFHTCxrREFBSTs7Ozs7Ozs7Q0FBL0I7QUFVQSxNQUFNTSxvQkFBb0IsR0FBR04sa0RBQUk7Ozs7Ozs7Ozs7OztDQUFqQztBQWNBLE1BQU1PLHNCQUFzQixHQUFHUCxrREFBSTs7Ozs7Ozs7Ozs7O0NBQW5DO0FBY0EsTUFBTVEsb0JBQW9CLEdBQUdSLGtEQUFJOzs7Ozs7OztDQUFqQztBQVVBLE1BQU1TLHVCQUF1QixHQUFHVCxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBcEM7QUFtQkEsTUFBTVUsdUJBQXVCLEdBQUdWLGtEQUFJOzs7Ozs7OztDQUFwQztBQVVBLE1BQU1XLDBCQUEwQixHQUFHWCxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXZDO0FBbUNBLE1BQU1ZLCtCQUErQixHQUFHWixrREFBSTs7Ozs7Ozs7O0NBQTVDO0FBV0EsTUFBTWEsdUJBQXVCLEdBQUdiLGtEQUFJOzs7Ozs7Ozs7O0NBQXBDO0FBWUEsTUFBTWMsdUNBQXVDLEdBQUdkLGtEQUFJOzs7Ozs7Ozs7Ozs7OztDQUFwRDtBQWdCQSxNQUFNZSxxQ0FBcUMsR0FBR2Ysa0RBQUk7Ozs7Ozs7Ozs7OztDQUFsRCxDLENBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWdCLHNCQUFzQixHQUFHaEIsa0RBQUk7Ozs7Ozs7Ozs7O0NBQW5DO0FBYUEsTUFBTWlCLG9CQUFvQixHQUFHakIsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFqQztBQTBCQSxNQUFNa0Isb0JBQW9CLEdBQUdsQixrREFBSTs7Ozs7Ozs7Ozs7Ozs7O0NBQWpDO0FBZ0JBLE1BQU1tQiwyQkFBMkIsR0FBR25CLGtEQUFJOzs7Ozs7Ozs7Ozs7O0NBQXhDO0FBZUEsTUFBTW9CLGtCQUFrQixHQUFHcEIsa0RBQUk7Ozs7Ozs7Ozs7Ozs7OztDQUEvQjtBQWlCQSxNQUFNcUIsNEJBQTRCLEdBQUdyQixrREFBSTs7Ozs7Ozs7Ozs7OztDQUF6QztBQWVBLE1BQU1zQix3QkFBd0IsR0FBR3RCLGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztDQUFyQztBQW1CQSxNQUFNdUIseUJBQXlCLEdBQUd2QixrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF0QztBQXFCQSxNQUFNd0Isd0JBQXdCLEdBQUd4QixrREFBSTs7Ozs7Ozs7OztDQUFyQztBQVlBLE1BQU15QixxQkFBcUIsR0FBR3pCLGtEQUFJOzs7Ozs7O0NBQWxDO0FBU0EsTUFBTTBCLHVCQUF1QixHQUFHMUIsa0RBQUk7Ozs7Ozs7Ozs7Ozs7OztDQUFwQztBQWlCQSxNQUFNMkIsa0JBQWtCLEdBQUczQixrREFBSTs7Ozs7Ozs7Ozs7Ozs7OztDQUEvQjtBQWtCQSxNQUFNNEIsaUJBQWlCLEdBQUc1QixrREFBSTs7Ozs7Ozs7Ozs7OztDQUE5QjtBQWVBLE1BQU02Qix3QkFBd0IsR0FBRzdCLGtEQUFJOzs7Ozs7OztDQUFyQztBQVVBLE1BQU04QixtQkFBbUIsR0FBRzlCLGtEQUFJOzs7Ozs7O0NBQWhDO0FBU0EsTUFBTStCLGtCQUFrQixHQUFHL0Isa0RBQUk7Ozs7Ozs7Q0FBL0I7QUFTQSxNQUFNZ0MsNkJBQTZCLEdBQUdoQyxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQTFDO0FBdUJBLE1BQU1pQyxnQ0FBZ0MsR0FBR2pDLGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQTdDO0FBMkJBLE1BQU1rQyx1QkFBdUIsR0FBR2xDLGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXBDO0FBNkNBLE1BQU1tQyxzQkFBc0IsR0FBR25DLGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFuQyxDLENBcUNBO0FBRUE7O0FBRUEsTUFBTW9DLHlCQUF5QixHQUFHcEMsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBdEM7QUFrQkEsTUFBTXFDLG9CQUFvQixHQUFHckMsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBakM7QUFxQkEsTUFBTXNDLGtCQUFrQixHQUFHdEMsa0RBQUk7Ozs7Ozs7O0NBQS9CO0FBVUEsTUFBTXVDLGtCQUFrQixHQUFHdkMsa0RBQUk7Ozs7Ozs7O0NBQS9CO0FBVUEsTUFBTXdDLG1CQUFtQixHQUFHeEMsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFoQyxDLENBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNeUMsdUJBQXVCLEdBQUd6QyxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXBDO0FBa0RBLE1BQU0wQyxvQkFBb0IsR0FBRzFDLGtEQUFJOzs7Ozs7Ozs7Ozs7Q0FBakM7QUFjQSxNQUFNMkMsY0FBYyxHQUFHM0Msa0RBQUk7Ozs7Ozs7OztDQUEzQjs7QUFXQSxNQUFNNEMsa0JBQWtCLEdBQUcsT0FBTzlELENBQVAsRUFBVStELGNBQVYsS0FBNkI7QUFDdEQvRCxHQUFDLENBQUNnRSxjQUFGO0FBQ0FwRCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLFFBQU1QLEdBQUcsR0FBRyxNQUFNeUQsY0FBYyxDQUFDO0FBQy9CRSxhQUFTO0FBQ1A5RyxRQUFFLEVBQUUsU0FBSSxDQUFDakMsS0FBTCxDQUFXaUM7QUFEUixPQUVKLFNBQUksQ0FBQytHLEtBRkQ7QUFEc0IsR0FBRCxDQUFoQztBQU1BdEQsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxDQVZELEMsQ0FZQTs7Ozs7Ozs7Ozs7Ozs7O0FDejBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTXNELG9CQUFvQixHQUFHakQsa0RBQUk7Ozs7Ozs7Q0FBakM7QUFTQSxNQUFNa0QsT0FBTyxHQUFHbEQsa0RBQUk7Ozs7Ozs7OztDQUFwQjtBQVdBLE1BQU1tRCx3QkFBd0IsR0FBR25ELGtEQUFJOzs7Ozs7OztDQUFyQztBQVVBLE1BQU1vRCxtQkFBbUIsR0FBR3BELGtEQUFJOzs7Ozs7Ozs7OztDQUFoQztBQWFBLE1BQU1xRCxzQkFBc0IsR0FBR3JELGtEQUFJOzs7Ozs7OztDQUFuQztBQVVBLE1BQU1zRCx1QkFBdUIsR0FBR3RELGtEQUFJOzs7Ozs7OztDQUFwQztBQVVBLE1BQU11RCx5QkFBeUIsR0FBR3ZELGtEQUFJOzs7Ozs7OztDQUF0QztBQVNBLE1BQU13RCw0QkFBNEIsR0FBR3hELGtEQUFJOzs7Ozs7Ozs7OztDQUF6QztBQVlBLE1BQU15RCxrQkFBa0IsR0FBR3pELGtEQUFJOzs7Ozs7O0NBQS9CO0FBUUEsTUFBTTBELG1CQUFtQixHQUFHMUQsa0RBQUk7Ozs7Ozs7O0NBQWhDO0FBU0EsTUFBTTJELCtCQUErQixHQUFHM0Qsa0RBQUk7Ozs7OztDQUE1QztBQU9BLE1BQU00RCxxQkFBcUIsR0FBRzVELGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFsQztBQTJDQSxNQUFNNkQsd0JBQXdCLEdBQUc3RCxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBckM7QUE2REEsTUFBTThELDRCQUE0QixHQUFHOUQsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXpDO0FBMkNBLE1BQU0rRCx3QkFBd0IsR0FBRy9ELGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBckM7QUFnQ0EsTUFBTWdFLDRCQUE0QixHQUFHaEUsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBekM7QUFpQ0EsTUFBTWlFLCtCQUErQixHQUFHakUsa0RBQUk7Ozs7Ozs7Ozs7Q0FBNUM7QUFZQSxNQUFNa0UsZ0NBQWdDLEdBQUdsRSxrREFBSTs7Ozs7OztDQUE3QztBQVNBLE1BQU1tRSxtQ0FBbUMsR0FBR25FLGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFoRDtBQTZEQSxNQUFNb0UsbUJBQW1CLEdBQUdwRSxrREFBSTs7Ozs7Ozs7Q0FBaEM7QUFVQSxNQUFNcUUsbUNBQW1DLEdBQUdyRSxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBaEQ7QUFnRUEsTUFBTXNFLDhCQUE4QixHQUFHdEUsa0RBQUk7Ozs7OztDQUEzQztBQVFBLE1BQU11RSw2QkFBNkIsR0FBR3ZFLGtEQUFJOzs7Ozs7Ozs7O0NBQTFDO0FBWUEsTUFBTXdFLHNDQUFzQyxHQUFHeEUsa0RBQUk7Ozs7Ozs7Ozs7O0NBQW5EO0FBYUEsTUFBTXlFLGdDQUFnQyxHQUFHekUsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUE3QztBQXlEQSxNQUFNMEUsbUNBQW1DLEdBQUcxRSxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFoRDtBQXlEQSxNQUFNMkUsMkJBQTJCLEdBQUczRSxrREFBSTs7Ozs7Ozs7OztDQUF4QztBQVlBLE1BQU00RSxnQkFBZ0IsR0FBRzVFLGtEQUFJOzs7Ozs7OztDQUE3QjtBQVVBLE1BQU02RSxpQkFBaUIsR0FBRzdFLGtEQUFJOzs7Ozs7OztDQUE5QjtBQVVBLE1BQU04RSxtQkFBbUIsR0FBRzlFLGtEQUFJOzs7Ozs7OztDQUFoQztBQVVBLE1BQU0rRSxrQkFBa0IsR0FBRy9FLGtEQUFJOzs7Ozs7OztDQUEvQjtBQVVBLE1BQU1nRixrQ0FBa0MsR0FBR2hGLGtEQUFJOzs7Ozs7Ozs7Ozs7Q0FBL0M7QUFjQSxNQUFNaUYscUNBQXFDLEdBQUdqRixrREFBSTs7Ozs7Ozs7Ozs7O0NBQWxEO0FBZ0JBLE1BQU1rRixpQkFBaUIsR0FBR2xGLGtEQUFJOzs7Ozs7OztDQUE5QjtBQVNBLE1BQU1tRiwrQkFBK0IsR0FBR25GLGtEQUFJOzs7Ozs7Ozs7Ozs7Q0FBNUM7QUFhQSxNQUFNb0YsNEJBQTRCLEdBQUdwRixrREFBSTs7Ozs7Ozs7Ozs7O0NBQXpDO0FBY0EsTUFBTXFGLGdCQUFnQixHQUFHckYsa0RBQUk7Ozs7Ozs7O0NBQTdCO0FBVUEsTUFBTXNGLG1CQUFtQixHQUFHdEYsa0RBQUk7Ozs7Ozs7O0NBQWhDO0FBU0EsTUFBTXVGLG9CQUFvQixHQUFHdkYsa0RBQUk7Ozs7Ozs7O0NBQWpDO0FBU0EsTUFBTXdGLDBCQUEwQixHQUFHeEYsa0RBQUk7Ozs7Ozs7Ozs7OztDQUF2QztBQWNBLE1BQU15RiwrQkFBK0IsR0FBR3pGLGtEQUFJOzs7Ozs7Ozs7Ozs7Q0FBNUM7QUFjQSxNQUFNMEYsdUJBQXVCLEdBQUcxRixrREFBSTs7Ozs7Ozs7Q0FBcEM7QUFVQSxNQUFNMkYsMkJBQTJCLEdBQUczRixrREFBSTs7Ozs7Ozs7Ozs7O0NBQXhDO0FBY0EsTUFBTTRGLHNCQUFzQixHQUFHNUYsa0RBQUk7Ozs7Ozs7Ozs7OztDQUFuQztBQWNBLE1BQU02RixtQkFBbUIsR0FBRzdGLGtEQUFJOzs7Ozs7Ozs7Ozs7OztDQUFoQztBQWdCQSxNQUFNOEYsdUJBQXVCLEdBQUc5RixrREFBSTs7Ozs7Ozs7Q0FBcEM7QUFTQSxNQUFNK0Ysa0JBQWtCLEdBQUcvRixrREFBSTs7Ozs7Ozs7Q0FBL0I7QUFVQSxNQUFNZ0cscUJBQXFCLEdBQUdoRyxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Q0FBbEMsQyxDQWdCQTs7QUFFQSxNQUFNaUcsaUJBQWlCLEdBQUdqRyxrREFBSTs7Ozs7Ozs7O0NBQTlCO0FBV0EsTUFBTWtHLG9CQUFvQixHQUFHbEcsa0RBQUk7Ozs7Ozs7O0NBQWpDO0FBVUEsTUFBTW1HLGtCQUFrQixHQUFHbkcsa0RBQUk7Ozs7Ozs7O0NBQS9CO0FBV0EsTUFBTW9HLDBCQUEwQixHQUFHcEcsa0RBQUk7Ozs7Ozs7O0NBQXZDO0FBVUEsTUFBTXFHLHFCQUFxQixHQUFHckcsa0RBQUk7Ozs7Ozs7OztDQUFsQztBQVdBLE1BQU1zRyxlQUFlLEdBQUd0RyxrREFBSTs7Ozs7Ozs7Q0FBNUI7QUFVQSxNQUFNdUcsK0JBQStCLEdBQUd2RyxrREFBSTs7Ozs7Ozs7O0NBQTVDO0FBV0EsTUFBTXdHLDZCQUE2QixHQUFHeEcsa0RBQUk7Ozs7Ozs7Ozs7O0NBQTFDO0FBYUEsTUFBTXlHLGdDQUFnQyxHQUFHekcsa0RBQUk7Ozs7Ozs7OztDQUE3QztBQVdBLE1BQU0wRywrQkFBK0IsR0FBRzFHLGtEQUFJOzs7Ozs7Ozs7O0NBQTVDO0FBWUEsTUFBTTJHLG1CQUFtQixHQUFHM0csa0RBQUk7Ozs7Ozs7Ozs7Q0FBaEM7QUFZQSxNQUFNNEcsZUFBZSxHQUFHNUcsa0RBQUk7Ozs7Ozs7O0NBQTVCO0FBVUEsTUFBTTZHLHFCQUFxQixHQUFHN0csa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBbEM7QUFrQkEsTUFBTThHLG9CQUFvQixHQUFHOUcsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBakM7QUF3QkEsTUFBTStHLG1CQUFtQixHQUFHL0csa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBaEM7QUFrQkEsTUFBTWdILHdCQUF3QixHQUFHaEgsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBckM7QUF3QkEsTUFBTWlILFVBQVUsR0FBR2pILGtEQUFJOzs7Ozs7Q0FBdkI7QUFRQSxNQUFNa0gsZ0JBQWdCLEdBQUdsSCxrREFBSTs7Ozs7Ozs7Ozs7OztDQUE3QjtBQWVBLE1BQU1tSCxzQkFBc0IsR0FBR25ILGtEQUFJOzs7Ozs7OztDQUFuQztBQVVBLE1BQU1vSCxvQkFBb0IsR0FBR3BILGtEQUFJOzs7Ozs7OztDQUFqQztBQVVBLE1BQU1xSCxpQkFBaUIsR0FBR3JILGtEQUFJOzs7Ozs7OztDQUE5QjtBQVVBLE1BQU1zSCxpQkFBaUIsR0FBR3RILGtEQUFJOzs7Ozs7OztDQUE5QjtBQVVBLE1BQU11SCxzQkFBc0IsR0FBR3ZILGtEQUFJOzs7Ozs7OztDQUFuQztBQVNBLE1BQU13SCxjQUFjLEdBQUd4SCxrREFBSTs7Ozs7Ozs7Q0FBM0I7QUFVQSxNQUFNeUgsbUJBQW1CLEdBQUd6SCxrREFBSTs7Ozs7Ozs7Q0FBaEM7QUFVQSxNQUFNMEgsZUFBZSxHQUFHMUgsa0RBQUk7Ozs7Ozs7O0NBQTVCO0FBVUEsTUFBTTJILGtCQUFrQixHQUFHM0gsa0RBQUk7Ozs7Ozs7O0NBQS9CO0FBVUEsTUFBTTRILGtCQUFrQixHQUFHNUgsa0RBQUk7Ozs7Ozs7O0NBQS9CLEMsQ0FTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxNQUFNNkgsVUFBVSxHQUFHL04sd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5RUFBaEI7QUFRQSxNQUFNK04sV0FBVyxHQUFHaE8sd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyQ0FBakI7QUFNQSxNQUFNZ08sZ0JBQWdCLEdBQUdDLDBDQUFBLEdBRXBCQyxLQUZvQixDQUVkO0FBQ0hDLG9CQUFrQixFQUFFRiwwQ0FBQSxHQUVmRyxRQUZlLENBRU4seUNBRk0sQ0FEakI7QUFJSEMsVUFBUSxFQUFFSiwwQ0FBQSxHQUVMRyxRQUZLLENBRUksMENBRkosQ0FKUDtBQU9IRSxlQUFhLEVBQUVMLDBDQUFBLEdBRVZHLFFBRlUsQ0FFRCxpQ0FGQyxDQVBaO0FBVUhHLFFBQU0sRUFBRU4sMENBQUEsR0FFSEcsUUFGRyxDQUVNLGdDQUZOLENBVkw7QUFhSHpLLFlBQVUsRUFBRXNLLDBDQUFBLEdBRVBPLEdBRk8sQ0FFSCxDQUZHLEVBRUEsc0JBRkEsRUFHUEMsR0FITyxDQUdILEVBSEcsRUFHQyw2QkFIRCxFQUlQTCxRQUpPLENBSUUsK0JBSkY7QUFiVCxDQUZjLENBQXpCOztBQXNCQSxNQUFNTSxhQUFhLEdBQUcsTUFBTTtBQUN4QixRQUFNQyxhQUFhLEdBQUc7QUFDbEJoTCxjQUFVLEVBQUUsRUFETTtBQUVsQjRLLFVBQU0sRUFBRSxJQUZVO0FBR2xCRCxpQkFBYSxFQUFFLEVBSEc7QUFJbEJELFlBQVEsRUFBRSxJQUpRO0FBS2xCRixzQkFBa0IsRUFBRTtBQUxGLEdBQXRCO0FBU0EsUUFBTSxDQUFDbEYsS0FBRCxFQUFRcEQsUUFBUixFQUFrQitJLHVCQUFsQixJQUE2Q0MsOERBQU8sQ0FBQztBQUFFQyxjQUFVLEVBQUUsRUFBZDtBQUFrQkMsWUFBUSxFQUFFO0FBQTVCLEdBQUQsQ0FBMUQ7QUFFQSxRQUFNO0FBQUU3SixRQUFJLEVBQUU4SixZQUFSO0FBQXNCQyxtQkFBdEI7QUFBdUNDO0FBQXZDLE1BQXVEQyxvRUFBUSxDQUFDM0YsK0ZBQUQsQ0FBckU7QUFDQTtBQUFFeUYsbUJBQWUsSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFuQjtBQUF1QztBQUN6QztBQUFFQyxlQUFXLElBQUksTUFBQyx3REFBRDtBQUFPLFdBQUssRUFBRUEsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWY7QUFBK0M7QUFDakR2SixTQUFPLENBQUNDLEdBQVIsQ0FBWW9KLFlBQVo7QUFFQSxRQUFNSSxpQkFBaUIsR0FBR0osWUFBWSxJQUFJQSxZQUFZLENBQUNLLGNBQXZEO0FBQ0ExSixTQUFPLENBQUNDLEdBQVIsQ0FBWXdKLGlCQUFaO0FBQ0EsUUFBTUUsbUJBQW1CLEdBQ3JCRixpQkFBaUIsSUFDakJBLGlCQUFpQixDQUFDek8sR0FBbEIsQ0FBc0JvQyxJQUFJLG9DQUFVQSxJQUFWO0FBQWdCbUIsU0FBSyxFQUFFbkIsSUFBSSxDQUFDYixFQUE1QjtBQUFnQ3FOLFNBQUssRUFBRXhNLElBQUksQ0FBQ3lNO0FBQTVDLElBQTFCLENBRko7QUFJQSxRQUFNO0FBQUV0SyxRQUFJLEVBQUV1SyxpQkFBUjtBQUEyQkMsV0FBTyxFQUFFQyxhQUFwQztBQUFtRHRQLFNBQUssRUFBRXVQO0FBQTFELE1BQXdFVCxvRUFBUSxDQUFDbEUsd0dBQUQsRUFBcUM7QUFDdkg0RSxRQUFJLEVBQUUsQ0FBQzVHLEtBQUssQ0FBQzZGLFVBRDBHO0FBRXZIOUYsYUFBUyxFQUFFO0FBQUU5RyxRQUFFLEVBQUUrRyxLQUFLLENBQUM2RjtBQUFaO0FBRjRHLEdBQXJDLENBQXRGO0FBS0E7QUFBRWEsaUJBQWEsSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFqQjtBQUFxQztBQUN2QztBQUFFQyxhQUFTLElBQUksTUFBQyx3REFBRDtBQUFPLFdBQUssRUFBRUEsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWI7QUFBMkM7QUFDN0NqSyxTQUFPLENBQUNDLEdBQVIsQ0FBWTZKLGlCQUFaO0FBQ0EsUUFBTUssZ0JBQWdCLEdBQUdMLGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQ00sYUFBaEU7O0FBQ0EsUUFBTTtBQUFFeEI7QUFBRix3QkFBa0J1QixnQkFBbEIsQ0FBTjs7QUFDQW5LLFNBQU8sQ0FBQ0MsR0FBUixDQUFZMkksTUFBWjtBQUNBLFFBQU15QixhQUFhLEdBQUd6QixNQUFNLElBQUlsSyw4RkFBYyxDQUFDa0ssTUFBRCxDQUE5QztBQUNBLFFBQU0wQixnQkFBZ0IsR0FDbEJELGFBQWEsSUFDYkEsYUFBYSxDQUFDclAsR0FBZCxDQUFrQm9DLElBQUksS0FBSztBQUFFbUIsU0FBSyxFQUFFbkIsSUFBSSxDQUFDYixFQUFkO0FBQWtCcU4sU0FBSyxFQUFFeE0sSUFBSSxDQUFDbU47QUFBOUIsR0FBTCxDQUF0QixDQUZKO0FBS0EsUUFBTTtBQUFFaEwsUUFBSSxFQUFFaUwsY0FBUjtBQUF3QlQsV0FBTyxFQUFFVSxjQUFqQztBQUFpRC9QLFNBQUssRUFBRWdRO0FBQXhELE1BQXVFbEIsb0VBQVEsQ0FBQzlELGtHQUFELEVBQStCO0FBQ2hId0UsUUFBSSxFQUFFLENBQUM1RyxLQUFLLENBQUM4RixRQURtRztBQUVoSC9GLGFBQVMsRUFBRTtBQUFFOUcsUUFBRSxFQUFFK0csS0FBSyxDQUFDOEY7QUFBWjtBQUZxRyxHQUEvQixDQUFyRjtBQUtBO0FBQUVxQixrQkFBYyxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWxCO0FBQXNDO0FBQ3hDO0FBQUVDLGNBQVUsSUFBSSxNQUFDLHdEQUFEO0FBQU8sV0FBSyxFQUFFQSxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBZDtBQUE2QztBQUMvQzFLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZdUssY0FBWjtBQUNBLFFBQU1HLFNBQVMsR0FBR0gsY0FBYyxJQUFJQSxjQUFjLENBQUM1QixNQUFuRDs7QUFDQSxRQUFNO0FBQUVEO0FBQUYsd0JBQXlCZ0MsU0FBekIsQ0FBTjs7QUFDQTNLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZMEksYUFBWjtBQUVBLFFBQU1pQyxvQkFBb0IsR0FDdEJqQyxhQUFhLElBQUlqSyw4RkFBYyxDQUFDaUssYUFBRCxDQURuQztBQUVBLFFBQU1rQyxrQkFBa0IsR0FDcEJELG9CQUFvQixJQUNwQkEsb0JBQW9CLENBQUM1UCxHQUFyQixDQUF5Qm9DLElBQUksS0FBSztBQUFFbUIsU0FBSyxFQUFFbkIsSUFBSSxDQUFDYixFQUFkO0FBQWtCcU4sU0FBSyxFQUFFeE0sSUFBSSxDQUFDME47QUFBOUIsR0FBTCxDQUE3QixDQUZKO0FBS0EsUUFBTSxDQUFDQyxXQUFELEVBQWM7QUFBRWhCLFdBQUY7QUFBV3JQO0FBQVgsR0FBZCxJQUFvQ3NRLHVFQUFXLENBQUNsSSwyRkFBRCxDQUFyRDtBQUNBLFNBQ0ksTUFBQyw2Q0FBRDtBQUNJLFVBQU0sRUFBQyxNQURYO0FBRUksaUJBQWEsRUFBRWtHLGFBRm5CO0FBR0ksb0JBQWdCLEVBQUVYLGdCQUh0QjtBQUlJLFlBQVEsRUFBRSxPQUFPNEMsTUFBUCxFQUFlQyxPQUFmLEVBQXdCQyxhQUF4QixFQUF1Q0MsU0FBdkMsS0FBcUQ7QUFDM0QsWUFBTTFMLEdBQUcsR0FBRyxNQUFNcUwsV0FBVyxDQUFDO0FBQzFCMUgsaUJBQVMsa0NBQ0Y0SCxNQURFO0FBRUx0Qyx1QkFBYSxFQUFFaUMsb0JBQW9CLElBQUl4TywrRkFBZSxDQUFDNk8sTUFBTSxDQUFDdEMsYUFBUCxDQUFxQnBLLEtBQXRCO0FBRmpEO0FBRGlCLE9BQUQsQ0FBN0I7QUFNQThNLGdCQUFVLENBQUMsTUFBTTtBQUNickwsZUFBTyxDQUFDQyxHQUFSLENBQVlxTCxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFaO0FBQ0FqTCxlQUFPLENBQUNDLEdBQVIsQ0FBWVAsR0FBWjtBQUNBd0wsZUFBTyxDQUFDRSxTQUFSLENBQWtCLElBQWxCO0FBQ0FGLGVBQU8sQ0FBQ0MsYUFBUixDQUFzQixLQUF0QjtBQUNILE9BTFMsRUFLUCxHQUxPLENBQVY7QUFNSCxLQWpCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBa0JLLENBQUM7QUFBRUYsVUFBRjtBQUFVTyxpQkFBVjtBQUF5QkM7QUFBekIsR0FBRCxLQUE2QztBQUMxQyxXQUNJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosRUFFSSxNQUFDLHdEQUFEO0FBQU8sV0FBSyxFQUFFL1EsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFHSSxNQUFDLDREQUFEO0FBQVksY0FBUSxFQUFFK1EsWUFBdEI7QUFBb0MsbUJBQVdBLFlBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxtREFBRDtBQUFRLGNBQVEsRUFBRXhDLHVCQUFsQjtBQUEyQyxVQUFJLEVBQUMsWUFBaEQ7QUFBNkQsWUFBTSxFQUFFeUMsNkRBQXJFO0FBQWtGLGlCQUFXLEVBQUUsd0JBQS9GO0FBQXlILGFBQU8sRUFBRS9CLG1CQUFsSTtBQUF1SixjQUFRLEVBQUU4QixZQUFqSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSSxNQUFDLG1EQUFEO0FBQVEsY0FBUSxFQUFFeEMsdUJBQWxCO0FBQTJDLFVBQUksRUFBQyxVQUFoRDtBQUEyRCxZQUFNLEVBQUV5Qyw2REFBbkU7QUFBZ0YsaUJBQVcsRUFBRSxVQUE3RjtBQUF5RyxhQUFPLEVBQUVwQixnQkFBbEg7QUFBb0ksY0FBUSxFQUFFbUIsWUFBOUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLEVBR0ksTUFBQyxtREFBRDtBQUFRLGNBQVEsRUFBR2xOLEtBQUQsSUFBWWlOLGFBQWEsQ0FBQyxlQUFELEVBQWtCak4sS0FBbEIsQ0FBM0M7QUFBc0UsVUFBSSxFQUFDLGVBQTNFO0FBQTJGLFlBQU0sRUFBRW1OLDZEQUFuRztBQUFnSCxpQkFBVyxFQUFFLFNBQTdIO0FBQXdJLGFBQU8sRUFBRWIsa0JBQWpKO0FBQXFLLGNBQVEsRUFBRVksWUFBL0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhKLEVBS0ksTUFBQyw0REFBRDtBQUFZLFVBQUksRUFBQyxvQkFBakI7QUFBc0MsVUFBSSxFQUFDLE1BQTNDO0FBQWtELFdBQUssRUFBQyx1QkFBeEQ7QUFBZ0YsY0FBUSxFQUFFQSxZQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEosRUFNSSxNQUFDLDREQUFEO0FBQ0ksVUFBSSxFQUFDLFlBRFQ7QUFFSSxVQUFJLEVBQUMsUUFGVDtBQUdJLFVBQUksRUFBQyxPQUhUO0FBSUksV0FBSyxFQUFDLHVCQUpWO0FBS0ksY0FBUSxFQUFFQSxZQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOSixDQURKLEVBZ0JJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsOERBQUQ7QUFBYyxVQUFJLEVBQUMsUUFBbkI7QUFBNEIsY0FBUSxFQUFFQSxZQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUEwREEsWUFBWSxHQUFHLGdCQUFILEdBQXNCLElBQTVGLENBREosQ0FoQkosQ0FESixDQURKLENBSEosQ0FESjtBQThCSCxHQWpETCxDQURKO0FBc0RILENBbEhEOztBQW1IZTFDLDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNNEMsVUFBVSxHQUFHdlIsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwYkFXSUMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXFSLFNBWHpCLEVBbUJBdFIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXNSLE1BbkJyQixFQW9CRHZSLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlxUixTQXBCcEIsRUF1Qk50UixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZdVIsS0FBWixDQUFrQixDQUFsQixDQXZCSCxDQUFoQjtBQW1DQSxNQUFNQyxjQUFjLEdBQUczUix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZWQVVFQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZcVIsU0FWdkIsRUFtQkp0UixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZc1IsTUFuQmpCLEVBb0JMdlIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXFSLFNBcEJoQixFQXVCVnRSLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVl1UixLQUFaLENBQWtCLENBQWxCLENBdkJDLENBQXBCO0FBbUNBLE1BQU1FLGVBQWUsR0FBRzVSLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMmFBU0RDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlxUixTQVRwQixFQWlCTHRSLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlzUixNQWpCaEIsRUFrQk52UixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZcVIsU0FsQmYsRUFxQlh0UixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZdVIsS0FBWixDQUFrQixDQUFsQixDQXJCRSxDQUFyQjtBQWlDQSxNQUFNRyxhQUFhLEdBQUc3Uix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhiQVdDQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZcVIsU0FYdEIsRUFtQkh0UixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZc1IsTUFuQmxCLEVBb0JKdlIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXFSLFNBcEJqQixFQXVCVHRSLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVl1UixLQUFaLENBQWtCLENBQWxCLENBdkJBLENBQW5CO0FBbUNBLE1BQU1JLGlCQUFpQixHQUFHOVIsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyYUFVSEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXFSLFNBVmxCLEVBa0JQdFIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXNSLE1BbEJkLEVBbUJSdlIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXFSLFNBbkJiLEVBc0JidFIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXVSLEtBQVosQ0FBa0IsQ0FBbEIsQ0F0QkksQ0FBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVJQTtBQUVBO0FBRUE7QUFFQSxNQUFNL0IsT0FBTyxHQUFHb0MsbUVBQUgsc0VBQWI7QUFhQSxNQUFNVCxXQUFXLEdBQUc7QUFDbEJVLFNBQU8sRUFBR0MsUUFBRCxvQ0FDSkEsUUFESTtBQUVQQyxjQUFVLEVBQUUsYUFGTDtBQUdQQyxVQUFNLEVBQUUsaUJBSEQ7QUFJUEMsZ0JBQVksRUFBRSxxQkFKUDtBQUtQQyxZQUFRLEVBQUUsUUFMSDtBQU1QQyxXQUFPLEVBQUUsTUFORjtBQU9QQyxtQkFBZSxFQUFFLE9BUFY7QUFRUEMsU0FBSyxFQUFFLE1BUkE7QUFTUEMsZ0JBQVksRUFBRSxHQVRQO0FBVVBDLGFBQVMsRUFBRSxNQVZKO0FBV1BDLGNBQVUsRUFBRSxRQVhMO0FBWVAsZUFBVztBQUNUUCxrQkFBWSxFQUFFLG9CQURMO0FBRVRLLGtCQUFZLEVBQUU7QUFGTCxLQVpKO0FBZUo7QUFDSCxlQUFXO0FBQ1RMLGtCQUFZLEVBQUUsb0JBREw7QUFFVEssa0JBQVksRUFBRTtBQUZMLEtBaEJKLENBbUJKOztBQW5CSSxJQURTO0FBdUJsQkcsUUFBTSxFQUFHWCxRQUFELG9DQUNIQSxRQURHO0FBRU5ZLGFBQVMsRUFBRTtBQUZMO0FBdkJVLENBQXBCO0FBaUNBLE1BQU1DLFdBQVcsR0FBRzlTLHdEQUFNLENBQUMrUyxLQUFWO0FBQUE7QUFBQTtBQUFBLCtWQVFtQjdTLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVl1UixLQUFaLENBQWtCLENBQWxCLENBUjdCLEVBZUh4UixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZNlMsV0FmbEIsRUFvQmtCOVMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWThTLFVBcEJ4QyxDQUFqQjtBQWdDQSxNQUFNbEYsVUFBVSxHQUFHL04sd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwQkFBaEI7QUFJQSxNQUFNaVQsV0FBVyxHQUFHbFQsd0RBQU0sQ0FBQ3dQLEtBQVY7QUFBQTtBQUFBO0FBQUEsK0xBTUp0UCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZZ1QsS0FBWixDQUFrQixDQUFsQixDQU5MLENBQWpCO0FBZUEsTUFBTUMsWUFBWSxHQUFHcFQsd0RBQU0sQ0FBQ3FULE1BQVY7QUFBQTtBQUFBO0FBQUEsb1JBSW1CblQsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXVSLEtBQVosQ0FBa0IsQ0FBbEIsQ0FKN0IsRUFZS3hSLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVl1UixLQUFaLENBQWtCLENBQWxCLENBWmQsRUFpQkt4UixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZOFMsVUFqQjNCLENBQWxCO0FBcUJBLE1BQU1LLGtCQUFrQixHQUFHdFQsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3REFHZkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWThTLFVBSE4sQ0FBeEI7QUFRQSxNQUFNTSxZQUFZLEdBQUd2VCx3REFBTSxDQUFDd1QsTUFBVjtBQUFBO0FBQUE7QUFBQSxzTEFDSXRULEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVl1UixLQUFaLENBQWtCLENBQWxCLENBRGIsRUFFUHhSLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlzVCxLQUZkLEVBV0Z2VCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZdVQsR0FYbkIsQ0FBbEI7QUF1QkEsTUFBTUMsWUFBWSxHQUFHM1Qsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5UUFPREMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXNSLE1BUHBCLEVBUVV2UixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZdVIsS0FBWixDQUFrQixDQUFsQixDQVJuQixFQVNKeFIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXVSLEtBQVosQ0FBa0IsQ0FBbEIsQ0FUTCxFQVVDeFIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXFSLFNBVnRCLEVBZ0JMdFIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXVSLEtBQVosQ0FBa0IsQ0FBbEIsQ0FoQkosRUFpQk14UixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZeVQsSUFqQjNCLENBQWxCO0FBdUJBLE1BQU1DLFVBQVUsR0FBRzdULHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseVhBS1NDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVl1UixLQUFaLENBQWtCLENBQWxCLENBTG5CLEVBVUR4UixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZc1IsTUFWckIsRUEwQkc5QixPQTFCSCxDQUFoQjs7QUErQkEsTUFBTW1FLFVBQVUsR0FBRyxVQUF5QjtBQUFBLE1BQXhCO0FBQUV0RTtBQUFGLEdBQXdCO0FBQUEsTUFBWnRQLEtBQVk7O0FBQzFDLFFBQU0sQ0FBQzZULEtBQUQsRUFBUUMsSUFBUixJQUFnQkMsdURBQVEsQ0FBQy9ULEtBQUQsQ0FBOUI7QUFDQSxTQUNFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQWEsYUFBUyxFQUFDO0FBQXZCLEtBQXdDNlQsS0FBeEMsRUFBbUQ3VCxLQUFuRDtBQUEwRCxZQUFRLE1BQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixFQUVFLE1BQUMsV0FBRDtBQUFhLFdBQU8sRUFBRUEsS0FBSyxDQUFDaUMsRUFBTixJQUFZakMsS0FBSyxDQUFDZ1UsSUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQzFFLEtBQS9DLENBRkYsRUFHR3dFLElBQUksQ0FBQ0csT0FBTCxJQUFnQkgsSUFBSSxDQUFDMVQsS0FBckIsR0FDQyxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUIwVCxJQUFJLENBQUMxVCxLQUExQixDQURELEdBRUcsSUFMTixDQURGO0FBVUQsQ0FaRDs7QUFjQSxNQUFNOFQsV0FBVyxHQUFHLFdBQXlCO0FBQUEsTUFBeEI7QUFBRTVFO0FBQUYsR0FBd0I7QUFBQSxNQUFadFAsS0FBWTs7QUFDM0MsUUFBTSxDQUFDNlQsS0FBRCxFQUFRQyxJQUFSLElBQWdCQyx1REFBUSxDQUFDL1QsS0FBRCxDQUE5QjtBQUNBLFNBQ0UsbUVBRUUsTUFBQyxZQUFELGVBQWtCNlQsS0FBbEIsRUFBNkI3VCxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkYsRUFHRzhULElBQUksQ0FBQ0csT0FBTCxJQUFnQkgsSUFBSSxDQUFDMVQsS0FBckIsR0FDQyxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUIwVCxJQUFJLENBQUMxVCxLQUExQixDQURELEdBRUcsSUFMTixDQURGO0FBU0QsQ0FYRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TkE7O0FBRUEsTUFBTXdPLE9BQU8sR0FBSUYsYUFBRCxJQUFtQjtBQUMvQixRQUFNO0FBQUEsT0FBQzFGLEtBQUQ7QUFBQSxPQUFRcEQ7QUFBUixNQUFvQnVPLHNEQUFRLENBQUN6RixhQUFELENBQWxDOztBQUVBLFFBQU0wRixpQkFBaUIsR0FBR3RQLENBQUMsSUFBSTtBQUMzQixVQUFNO0FBQUVrUCxVQUFGO0FBQVEvUCxXQUFSO0FBQWVvUTtBQUFmLFFBQXdCdlAsQ0FBQyxDQUFDRSxNQUFoQztBQUNBLFVBQU1zUCxHQUFHLEdBQUdELElBQUksS0FBSyxRQUFULEdBQW9CRSxRQUFRLENBQUN0USxLQUFELENBQTVCLEdBQXNDQSxLQUFsRDtBQUNBMkIsWUFBUSxDQUFDb0QsS0FBSyxvQ0FBVUEsS0FBVjtBQUFpQixPQUFDZ0wsSUFBRCxHQUFRTTtBQUF6QixNQUFOLENBQVI7QUFDSCxHQUpEOztBQU1BLFFBQU0zRix1QkFBdUIsR0FBRyxDQUFDMUssS0FBRCxFQUFRdVEsTUFBUixLQUFtQjtBQUMvQzlPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUUxQjtBQUFGLEtBQVo7QUFDQXlCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUU2TztBQUFGLEtBQVo7QUFDQTVPLFlBQVEsQ0FBQ29ELEtBQUssb0NBQVVBLEtBQVY7QUFBaUIsT0FBQ3dMLE1BQU0sQ0FBQ1IsSUFBUixHQUFlL1AsS0FBSyxDQUFDQTtBQUF0QyxNQUFOLENBQVI7QUFDSCxHQUpEOztBQU1BLFNBQU8sQ0FBQytFLEtBQUQsRUFBUXBELFFBQVIsRUFBa0IrSSx1QkFBbEIsRUFBMkN5RixpQkFBM0MsQ0FBUDtBQUNILENBaEJEOztBQWlCZXhGLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjcmVhdGVzXFxuZXdNYXJrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFbnRlck5ld01hcmtzSG9vayBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9zY29yZS9FbnRlck5ld01hcmtzSG9vayc7XHJcblxyXG5cclxuY29uc3QgbmV3TWFya3MgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxFbnRlck5ld01hcmtzSG9vayAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3TWFya3M7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNvbnN0IEVycm9yU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ncmV5WzJdfTtcclxuICBtYXJnaW46MCAxLjFyZW0gO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAvKiBib3JkZXItcmlnaHQ6IDAuMDhyZW0gc29saWQgcmVkOyAqL1xyXG4gIGJvcmRlci1sZWZ0OiAwLjA1cmVtIHNvbGlkIHJlZDtcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZToxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgc3Ryb25nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC4xNXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEaXNwbGF5RXJyb3IgPSAoeyBlcnJvciB9KSA9PiB7XHJcbiAgaWYgKCFlcnJvciB8fCAhZXJyb3IubWVzc2FnZSkgcmV0dXJuIG51bGw7XHJcbiAgaWYgKGVycm9yLm5ldHdvcmtFcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0ICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IChcclxuICAgICAgPEVycm9yU3R5bGVzIGtleT17aX0+XHJcbiAgICAgICAgPHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxyXG4gICAgICAgICAgPHN0cm9uZz5Qcm9ibGVtZSBSZXNlYXV4ITwvc3Ryb25nPlxyXG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2UucmVwbGFjZShcIkdyYXBoUUwgZXJyb3I6IFwiLCBcIlwiKX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvRXJyb3JTdHlsZXM+XHJcbiAgICApKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxFcnJvclN0eWxlcyA+XHJcbiAgICAgIDxwIGRhdGEtdGVzdD1cImdyYXBocWwtZXJyb3JcIj5cclxuICAgICAgICA8c3Ryb25nPkVycmV1cmUhPC9zdHJvbmc+XHJcbiAgICAgICAge2Vycm9yLm1lc3NhZ2UucmVwbGFjZShcIkdyYXBoUUwgZXJyb3I6IFwiLCBcIlwiKX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9FcnJvclN0eWxlcz5cclxuICApO1xyXG59O1xyXG5cclxuRGlzcGxheUVycm9yLmRlZmF1bHRQcm9wcyA9IHtcclxuICBlcnJvcjoge31cclxufTtcclxuXHJcbkRpc3BsYXlFcnJvci5wcm9wVHlwZXMgPSB7XHJcbiAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlFcnJvcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25jYXQgfSBmcm9tICdhcG9sbG8tbGluaydcclxuXHJcblxyXG5jb25zdCB1bmlxdWVDb2RlR2VuID0ga2V5TGVuZ3RoID0+IHtcclxuICB2YXIgaSxcclxuICAgIGtleSA9ICcnLFxyXG4gICAgLy8gIGNoYXJhY3RlcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5XCI7XHJcbiAgICBjaGFyYWN0ZXJzID1cclxuICAgICAgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGQCMkJSZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODknXHJcblxyXG4gIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGhcclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGtleUxlbmd0aDsgaSsrKSB7XHJcbiAgICBrZXkgKz0gY2hhcmFjdGVycy5zdWJzdHIoXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGggKyAxKSxcclxuICAgICAgMSxcclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiBrZXlcclxufVxyXG5cclxuY29uc3Qgb2JqZWN0RnJvbUNvZGUgPSBjb2RlVmFsdWUgPT4ge1xyXG4gIGNvbnN0IHN0b3JlZE9iamVjdCA9IHtcclxuICAgIGNhbmRDb2RlOiBgJHtjb2RlVmFsdWV9YCxcclxuICB9XHJcbiAgcmV0dXJuIHN0b3JlZE9iamVjdFxyXG59XHJcblxyXG5jb25zdCBnZXRPYmplY3RGcm9tSUQgPSBzdXBwbGllZElEID0+IHtcclxuICBjb25zdCB0aGVPYmplY3QgPSB7XHJcbiAgICBpZDogYCR7c3VwcGxpZWRJRH1gLFxyXG4gIH1cclxuICByZXR1cm4gdGhlT2JqZWN0XHJcbn1cclxuXHJcbmNvbnN0IGNlbnRlckV4YW1TZXNzaW9uT2JqZWN0RnJvbUNvZGUgPSBjb2RlVmFsdWUgPT4ge1xyXG4gIGNvbnN0IHN0b3JlZE9iamVjdCA9IHtcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uOiBgJHtjb2RlVmFsdWV9YCxcclxuICB9XHJcbiAgcmV0dXJuIHN0b3JlZE9iamVjdFxyXG59XHJcblxyXG5jb25zdCBjYW5kRXhhbVNlc3Npb25Db2RlID0gKGNhbmRJRCwgZXhhbUlELCBzZXNzaW9uSUQpID0+IHtcclxuICByZXR1cm4gYCR7Y2FuZElEICsgZXhhbUlEICsgc2Vzc2lvbklEfWBcclxufVxyXG5cclxuY29uc3QgZ2V0U2VsZWN0ZWRPYmplY3QgPSAoZGF0YVNvdXJjZSwgb2JqZWN0SUQpID0+IHtcclxuICAvLyAxIGNvcHkgdGhlIGRhdGEgc291cmNlXHJcbiAgaWYgKGRhdGFTb3VyY2UubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgdGVtcE9iamVjdHMgPSBbLi4uZGF0YVNvdXJjZV1cclxuICAgIC8vIGdldCB0aGUgb2JqZWN0XHJcbiAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IHRlbXBPYmplY3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBvYmplY3RJRClcclxuICAgIHJldHVybiBzZWxlY3RlZE9iamVjdFxyXG4gIH1cclxufVxyXG4vLyBmdW5jdGlvbiB0byBtb2RlbCBhIG51bWJlciB3aXRoIGxlYWRpbmcgemVyb2VzXHJcbk51bWJlci5wcm90b3R5cGUucGFkID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICB2YXIgcyA9IFN0cmluZyh0aGlzKVxyXG4gIHdoaWxlIChzLmxlbmd0aCA8IChzaXplIHx8IDIpKSB7XHJcbiAgICBzID0gJzAnICsgc1xyXG4gIH1cclxuICByZXR1cm4gc1xyXG59XHJcblxyXG5jb25zdCBjYWxjQ2FuZEF2ZSA9IGNhbmRTY29yZXMgPT4ge1xyXG4gIGNvbnN0IGF2ZVRvdGFsID1cclxuICAgIGNhbmRTY29yZXMgJiZcclxuICAgIGNhbmRTY29yZXMucmVkdWNlKCh0YWxseSwgaXRlbSkgPT4gdGFsbHkgKyBpdGVtLnN1YmplY3RBdmUgKiBpdGVtLmNvZWZmLCAwKVxyXG4gIGNvbnN0IGNvZWZmVG90YWwgPSBjYW5kU2NvcmVzLnJlZHVjZShcclxuICAgICh0YWxseSwgaXRlbSkgPT4gKGl0ZW0uc3ViamVjdEF2ZSA9PT0gbnVsbCA/IHRhbGx5IDogdGFsbHkgKyBpdGVtLmNvZWZmKSxcclxuICAgIDAsXHJcbiAgKVxyXG4gIGNvbnN0IGNhbmRBdmUgPSBhdmVUb3RhbCAvIGNvZWZmVG90YWxcclxuICByZXR1cm4gY2FuZEF2ZVxyXG59XHJcbmNvbnN0IGNhbGNDYW5kVG90YWxTY29yZSA9IGNhbmRTY29yZXMgPT4ge1xyXG4gIGNvbnN0IGF2ZVRvdGFsID1cclxuICAgIGNhbmRTY29yZXMgJiZcclxuICAgIGNhbmRTY29yZXMucmVkdWNlKCh0YWxseSwgaXRlbSkgPT4gdGFsbHkgKyBpdGVtLnN1YmplY3RBdmUgKiBpdGVtLmNvZWZmLCAwKVxyXG4gIHJldHVybiBhdmVUb3RhbFxyXG59XHJcbmNvbnN0IGNhbGNDYW5kVG90YWxDb2VmZiA9IGNhbmRTY29yZXMgPT4ge1xyXG4gIGNvbnN0IGNvZWZmVG90YWwgPVxyXG4gICAgY2FuZFNjb3JlcyAmJlxyXG4gICAgY2FuZFNjb3Jlcy5yZWR1Y2UoXHJcbiAgICAgICh0YWxseSwgaXRlbSkgPT4gKGl0ZW0uc3ViamVjdEF2ZSA9PT0gbnVsbCA/IHRhbGx5IDogdGFsbHkgKyBpdGVtLmNvZWZmKSxcclxuICAgICAgMCxcclxuICAgIClcclxuICByZXR1cm4gY29lZmZUb3RhbFxyXG59XHJcbmNvbnN0IHJvdW5kRmxvYXROdW1iZXIgPSAodmFsdWUsIGRlY2ltYWxzKSA9PiB7XHJcbiAgcmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKHZhbHVlICsgJ2UnICsgZGVjaW1hbHMpICsgJ2UtJyArIGRlY2ltYWxzKVxyXG59XHJcbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHZhbHVlKSA9PiB7XHJcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gdmFsdWUubWFwKHYgPT4gcmVtb3ZlVHlwZW5hbWUodikpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc3QgbmV3T2JqID0ge307XHJcbiAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdl0pID0+IHtcclxuICAgICAgaWYgKGtleSAhPT0gJ19fdHlwZW5hbWUnKSB7XHJcbiAgICAgICAgbmV3T2JqW2tleV0gPSByZW1vdmVUeXBlbmFtZSh2KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3T2JqO1xyXG4gIH1cclxuICByZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG5jb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKGUpID0+IHtcclxuICBjb25zdCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVzWzBdKTtcclxuICBkYXRhLmFwcGVuZCgndXBsb2FkX3ByZXNldCcsICdpbmV4aW1hZ2VzJyk7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvaW5leC9pbWFnZS91cGxvYWQnLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IGRhdGFcclxuICB9KTtcclxuICBjb25zdCBmaWxlID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAvLyB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IGZpbGUuc2VjdXJlX3VybCB9KTtcclxuICBzZXRTdGF0ZSh7IGltYWdlOiBmaWxlLnNlY3VyZV91cmwgfSlcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjYW5kRXhhbVNlc3Npb25Db2RlLFxyXG4gIHJvdW5kRmxvYXROdW1iZXIsXHJcbiAgY2FsY0NhbmRUb3RhbFNjb3JlLFxyXG4gIGNhbGNDYW5kVG90YWxDb2VmZixcclxuICBjYWxjQ2FuZEF2ZSxcclxuICBvYmplY3RGcm9tQ29kZSxcclxuICB1bmlxdWVDb2RlR2VuLFxyXG4gIGdldFNlbGVjdGVkT2JqZWN0LFxyXG4gIGdldE9iamVjdEZyb21JRCxcclxuICByZW1vdmVUeXBlbmFtZSxcclxuICB1cGxvYWRGaWxlLFxyXG4gIGNlbnRlckV4YW1TZXNzaW9uT2JqZWN0RnJvbUNvZGUsXHJcbn1cclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcclxuXHJcbi8vKioqKioqKioqKioqY3JlYXRlIG11dGF0aW9ucyAgKi9cclxuY29uc3Qgc2lnbkluQ2FuZGlkYXRlID0gZ3FsYFxyXG4gIG11dGF0aW9uIHNpZ25JbkNhbmRpZGF0ZSgkY2FuZENvZGU6IFN0cmluZyEpIHtcclxuICAgIGNhbmRpZGF0ZVNpZ25JbihjYW5kQ29kZTogJGNhbmRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbi8vXHJcblxyXG5jb25zdCB1cGRhdGVTZXNzaW9uTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlU2Vzc2lvbk11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRzZXNzaW9uTmFtZTogU3RyaW5nXHJcbiAgICAkc2Vzc2lvbkNvZGU6IFN0cmluZ1xyXG4gICkge1xyXG4gICAgdXBkYXRlU2Vzc2lvbihcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBzZXNzaW9uTmFtZTogJHNlc3Npb25OYW1lXHJcbiAgICAgIHNlc3Npb25Db2RlOiAkc2Vzc2lvbkNvZGVcclxuICAgICkge1xyXG4gICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICBzZXNzaW9uQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgdXBkYXRlRWR1Y2F0aW9uVHlwZU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZUVkdWNhdGlvblR5cGVNdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkZWR1Y2F0aW9uVHlwZU5hbWU6IFN0cmluZ1xyXG4gICAgJGVkdWNhdGlvblR5cGVDb2RlOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZUVkdWNhdGlvblR5cGUoXHJcbiAgICAgIGlkOiAkaWRcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWU6ICRlZHVjYXRpb25UeXBlTmFtZVxyXG4gICAgICBlZHVjYXRpb25UeXBlQ29kZTogJGVkdWNhdGlvblR5cGVDb2RlXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgZWR1Y2F0aW9uVHlwZUNvZGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgdXBkYXRlU3ViamVjdFR5cGVNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVTdWJqZWN0VHlwZU11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRzdWJqZWN0VHlwZU5hbWU6IFN0cmluZ1xyXG4gICAgJHN1YmplY3RUeXBlQ29kZTogU3RyaW5nXHJcbiAgKSB7XHJcbiAgICB1cGRhdGVTdWJqZWN0VHlwZShcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBzdWJqZWN0VHlwZU5hbWU6ICRzdWJqZWN0VHlwZU5hbWVcclxuICAgICAgc3ViamVjdFR5cGVDb2RlOiAkc3ViamVjdFR5cGVDb2RlXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgc3ViamVjdFR5cGVOYW1lXHJcbiAgICAgIHN1YmplY3RUeXBlQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgdXBkYXRlU3ViamVjdE11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVN1YmplY3RNdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkc3ViamVjdE5hbWU6IFN0cmluZ1xyXG4gICAgJHN1YmplY3RDb2RlOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZVN1YmplY3QoXHJcbiAgICAgIGlkOiAkaWRcclxuICAgICAgc3ViamVjdE5hbWU6ICRzdWJqZWN0TmFtZVxyXG4gICAgICBzdWJqZWN0Q29kZTogJHN1YmplY3RDb2RlXHJcbiAgICApIHtcclxuICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgc3ViamVjdENvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVwZGF0ZVJhbmtNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVSYW5rTXV0YXRpb24oJGlkOiBJRCEsICRyYW5rTmFtZTogU3RyaW5nLCAkcmFua0NvZGU6IFN0cmluZykge1xyXG4gICAgdXBkYXRlUmFuayhpZDogJGlkLCByYW5rTmFtZTogJHJhbmtOYW1lLCByYW5rQ29kZTogJHJhbmtDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHJhbmtOYW1lXHJcbiAgICAgIHJhbmtDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCB1cGRhdGVTZXJpZXNNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVTZXJpZXNNdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkc2VyaWVzTmFtZTogU3RyaW5nXHJcbiAgICAkc2VyaWVzQ29kZTogU3RyaW5nXHJcbiAgKSB7XHJcbiAgICB1cGRhdGVTZXJpZXMoaWQ6ICRpZCwgc2VyaWVzTmFtZTogJHNlcmllc05hbWUsIHNlcmllc0NvZGU6ICRzZXJpZXNDb2RlKSB7XHJcbiAgICAgIHNlcmllc05hbWVcclxuICAgICAgc2VyaWVzQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgdXBkYXRlRGl2aXNpb25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVEaXZpc2lvbk11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRkaXZOYW1lOiBTdHJpbmdcclxuICAgICRkaXZDb2RlOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZURpdmlzaW9uKGlkOiAkaWQsIGRpdk5hbWU6ICRkaXZOYW1lLCBkaXZDb2RlOiAkZGl2Q29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBkaXZOYW1lXHJcbiAgICAgIGRpdkNvZGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVwZGF0ZVJlZ2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVJlZ2lvbk11dGF0aW9uKCRpZDogSUQhLCAkcmVnTmFtZTogU3RyaW5nLCAkcmVnQ29kZTogU3RyaW5nKSB7XHJcbiAgICB1cGRhdGVSZWdpb24oaWQ6ICRpZCwgcmVnTmFtZTogJHJlZ05hbWUsIHJlZ0NvZGU6ICRyZWdDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHJlZ05hbWVcclxuICAgICAgcmVnQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlTmV3UmVwb3J0TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlTmV3UmVwb3J0TXV0YXRpb24oXHJcbiAgICAkcmVwb3J0SW1hZ2U6IFN0cmluZyFcclxuICAgICRyZXBvcnROYW1lOiBTdHJpbmchXHJcbiAgICAkY2VudGVyRXhhbVNlc3Npb25FeGFtaW5lcjogQ2VudGVyRXhhbVNlc3Npb25FeGFtaW5lcldoZXJlVW5pcXVlSW5wdXQhXHJcblxyXG4gICkge1xyXG4gICAgY3JlYXRlUmVwb3J0KFxyXG4gICAgICByZXBvcnRJbWFnZTogJHJlcG9ydEltYWdlXHJcbiAgICAgIHJlcG9ydE5hbWU6ICRyZXBvcnROYW1lXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uRXhhbWluZXI6ICRjZW50ZXJFeGFtU2Vzc2lvbkV4YW1pbmVyXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgcmVwb3J0TmFtZVxyXG4gICAgICByZXBvcnRJbWFnZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlTmV3R2VuZGVyTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlTmV3R2VuZGVyTXV0YXRpb24oJGdlbmRlck5hbWU6IFN0cmluZyEsICRnZW5kZXJDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBjcmVhdGVHZW5kZXIoZ2VuZGVyTmFtZTogJGdlbmRlck5hbWUsIGdlbmRlckNvZGU6ICRnZW5kZXJDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGdlbmRlckNvZGVcclxuICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlUmVnaXN0cmF0aW9uTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlUmVnaXN0cmF0aW9uTXV0YXRpb24oXHJcbiAgICAkY2FuZGlkYXRlOiBDYW5kaWRhdGVXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNhbmRFeGFtU2VjcmV0Q29kZTogU3RyaW5nIVxyXG4gICAgJGNhbmRFeGFtU2Vzc2lvbjogU3RyaW5nIVxyXG4gICAgJGNhbmRSZWdpc3RyYXRpb25OdW1iZXI6IFN0cmluZyFcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvbjogQ2VudGVyRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzOiBDZW50ZXJFeGFtU2Vzc2lvblNlcmllc1doZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkc2VyaWVzOiBTZXJpZXNXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlUmVnaXN0cmF0aW9uKFxyXG4gICAgICBjYW5kaWRhdGU6ICRjYW5kaWRhdGVcclxuICAgICAgY2FuZEV4YW1TZWNyZXRDb2RlOiAkY2FuZEV4YW1TZWNyZXRDb2RlXHJcbiAgICAgIGNhbmRFeGFtU2Vzc2lvbjogJGNhbmRFeGFtU2Vzc2lvblxyXG4gICAgICBjYW5kUmVnaXN0cmF0aW9uTnVtYmVyOiAkY2FuZFJlZ2lzdHJhdGlvbk51bWJlclxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbjogJGNlbnRlckV4YW1TZXNzaW9uXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzOiAkY2VudGVyRXhhbVNlc3Npb25TZXJpZXNcclxuICAgICAgc2VyaWVzOiAkc2VyaWVzXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgY2VudGVyRXhhbVNlc3Npb24ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY2VudGVyIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNhbmRpZGF0ZSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uTXV0YXRpb24oXHJcbiAgICAkZXhhbVNlc3Npb246IEV4YW1TZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjZW50ZXI6IENlbnRlcldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvbihleGFtU2Vzc2lvbjogJGV4YW1TZXNzaW9uLCBjZW50ZXI6ICRjZW50ZXIpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZVBoYXNlUmFua011dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVBoYXNlUmFua011dGF0aW9uKFxyXG4gICAgJHBoYXNlOiBQaGFzZVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkcmFua05hbWU6ICBTdHJpbmchICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICRyYW5rQ29kZTogIFN0cmluZyEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVQaGFzZVJhbmsocGhhc2U6ICRwaGFzZSwgcmFua05hbWUgOiAkcmFua05hbWUsIHJhbmtDb2RlOiAkcmFua0NvZGUgKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvbkV4YW1pbmVyTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25FeGFtaW5lck11dGF0aW9uKFxyXG4gICAgJGNlbnRlckV4YW1TZXNzaW9uOiBDZW50ZXJFeGFtU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkZXhhbWluZXI6ICBFeGFtaW5lcldoZXJlVW5pcXVlSW5wdXQhIFxyXG4gICAgJHBoYXNlUmFuazogIFBoYXNlUmFua1doZXJlVW5pcXVlSW5wdXQhIFxyXG4gICkge1xyXG4gICAgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25FeGFtaW5lcihcclxuICAgIHBoYXNlUmFuazogJHBoYXNlUmFuayxcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uOiAkY2VudGVyRXhhbVNlc3Npb24sXHJcbiAgICBleGFtaW5lcjogJGV4YW1pbmVyXHJcbiAgICApeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uU2VyaWVzTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25TZXJpZXNNdXRhdGlvbihcclxuICAgICRzZXJpZXM6IFNlcmllc1doZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkY2VudGVyRXhhbVNlc3Npb246IENlbnRlckV4YW1TZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uU2VyaWVzKFxyXG4gICAgICBzZXJpZXM6ICRzZXJpZXNcclxuICAgICAgY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvblxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5cclxuLy8gY29uc3QgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25leGFtaW5lcm9yaXR5TXV0YXRpb24gPSBncWxgXHJcbi8vICAgbXV0YXRpb24gY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25leGFtaW5lcm9yaXR5TXV0YXRpb24oXHJcbi8vICAgICAkcmFuazogUmFua1doZXJlVW5pcXVlSW5wdXQhXHJcbi8vICAgICAkY2VudGVyRXhhbVNlc3Npb246IENlbnRlckV4YW1TZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuLy8gICAgICRleGFtaW5lck5hbWU6IFN0cmluZyFcclxuLy8gICAgICRleGFtaW5lckNvZGU6IFN0cmluZyFcclxuLy8gICAgICRleGFtaW5lckNOSTogU3RyaW5nIVxyXG4vLyAgICAgJGV4YW1pbmVyUGhvbmU6IEludCFcclxuLy8gICAgICRleGFtaW5lck1hdHJpY3VsZTogU3RyaW5nIVxyXG4vLyAgICkge1xyXG4vLyAgICAgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25leGFtaW5lcm9yaXR5KFxyXG4vLyAgICAgICByYW5rOiAkcmFua1xyXG4vLyAgICAgICBjZW50ZXJFeGFtU2Vzc2lvbjogJGNlbnRlckV4YW1TZXNzaW9uXHJcbi8vICAgICAgIGV4YW1pbmVyQ05JOiAkZXhhbWluZXJDTklcclxuLy8gICAgICAgZXhhbWluZXJOYW1lOiAkZXhhbWluZXJOYW1lXHJcbi8vICAgICAgIGV4YW1pbmVyQ29kZTogJGV4YW1pbmVyQ29kZVxyXG4vLyAgICAgICBleGFtaW5lclBob25lOiAkZXhhbWluZXJQaG9uZVxyXG4vLyAgICAgICBleGFtaW5lck1hdHJpY3VsZTogJGV4YW1pbmVyTWF0cmljdWxlXHJcbi8vICAgICApIHtcclxuLy8gICAgICAgZXhhbWluZXJOYW1lXHJcbi8vICAgICAgIGV4YW1pbmVyQ29kZVxyXG4vLyAgICAgICBleGFtaW5lclBob25lXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyBgXHJcblxyXG5jb25zdCBjcmVhdGVEaXZpc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZURpdmlzaW9uTXV0YXRpb24oXHJcbiAgICAkZGl2TmFtZTogU3RyaW5nIVxyXG4gICAgJGRpdkNvZGU6IFN0cmluZyFcclxuICAgICRyZWdpb246IFJlZ2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVEaXZpc2lvbihkaXZOYW1lOiAkZGl2TmFtZSwgZGl2Q29kZTogJGRpdkNvZGUsIHJlZ2lvbjogJHJlZ2lvbikge1xyXG4gICAgICBpZFxyXG4gICAgICBkaXZOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVDZW50ZXJNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVDZW50ZXJNdXRhdGlvbihcclxuICAgICRjZW50ZXJOYW1lOiBTdHJpbmchXHJcbiAgICAkY2VudGVyTnVtYmVyOiBJbnRcclxuICAgICRjZW50ZXJDb2RlOiBTdHJpbmchXHJcbiAgICAkY2VudGVyU2VjcmV0Q29kZTogU3RyaW5nIVxyXG4gICAgJHRvd246IFRvd25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlQ2VudGVyKFxyXG4gICAgICBjZW50ZXJTZWNyZXRDb2RlOiAkY2VudGVyU2VjcmV0Q29kZVxyXG4gICAgICBjZW50ZXJOYW1lOiAkY2VudGVyTmFtZVxyXG4gICAgICBjZW50ZXJOdW1iZXI6ICRjZW50ZXJOdW1iZXJcclxuICAgICAgY2VudGVyQ29kZTogJGNlbnRlckNvZGVcclxuICAgICAgdG93bjogJHRvd25cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXJOYW1lXHJcbiAgICAgIGNlbnRlclNlY3JldENvZGVcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgICB0b3duIHtcclxuICAgICAgICB0b3duTmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVTZXJpZXNNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVTZXJpZXNNdXRhdGlvbihcclxuICAgICRzZXJpZXNOYW1lOiBTdHJpbmchXHJcbiAgICAkc2VyaWVzQ29kZTogU3RyaW5nIVxyXG4gICAgJGVkdWNhdGlvblR5cGU6IEVkdWNhdGlvblR5cGVXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlU2VyaWVzKFxyXG4gICAgICBzZXJpZXNOYW1lOiAkc2VyaWVzTmFtZVxyXG4gICAgICBzZXJpZXNDb2RlOiAkc2VyaWVzQ29kZVxyXG4gICAgICBlZHVjYXRpb25UeXBlOiAkZWR1Y2F0aW9uVHlwZVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNlcmllc05hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgY3JlYXRlRWR1Y2F0aW9uVHlwZU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUVkdWNhdGlvblR5cGVNdXRhdGlvbihcclxuICAgICRlZHVjYXRpb25UeXBlTmFtZTogU3RyaW5nIVxyXG4gICAgJGVkdWNhdGlvblR5cGVDb2RlOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVFZHVjYXRpb25UeXBlKFxyXG4gICAgICBlZHVjYXRpb25UeXBlTmFtZTogJGVkdWNhdGlvblR5cGVOYW1lXHJcbiAgICAgIGVkdWNhdGlvblR5cGVDb2RlOiAkZWR1Y2F0aW9uVHlwZUNvZGVcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBlZHVjYXRpb25UeXBlTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlVG93bk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVRvd25NdXRhdGlvbihcclxuICAgICR0b3duTmFtZTogU3RyaW5nIVxyXG4gICAgJHRvd25Db2RlOiBTdHJpbmchXHJcbiAgICAkc3ViRGl2OiBTdWJEaXZpc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVUb3duKHRvd25OYW1lOiAkdG93bk5hbWUsIHRvd25Db2RlOiAkdG93bkNvZGUsIHN1YkRpdjogJHN1YkRpdikge1xyXG4gICAgICBpZFxyXG4gICAgICB0b3duTmFtZVxyXG4gICAgICB0b3duQ29kZVxyXG4gICAgICBzdWJEaXYge1xyXG4gICAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlTmV3U3ViamVjdFR5cGVNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVOZXdTdWJqZWN0VHlwZU11dGF0aW9uKFxyXG4gICAgJHN1YmplY3RUeXBlTmFtZTogU3RyaW5nIVxyXG4gICAgJHN1YmplY3RUeXBlQ29kZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgY3JlYXRlU3ViamVjdFR5cGUoXHJcbiAgICAgIHN1YmplY3RUeXBlTmFtZTogJHN1YmplY3RUeXBlTmFtZVxyXG4gICAgICBzdWJqZWN0VHlwZUNvZGU6ICRzdWJqZWN0VHlwZUNvZGVcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBzdWJqZWN0VHlwZU5hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld1N1YmplY3RNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVOZXdTdWJqZWN0TXV0YXRpb24oXHJcbiAgICAkc3ViamVjdE5hbWU6IFN0cmluZyFcclxuICAgICRzdWJqZWN0Q29kZTogU3RyaW5nIVxyXG4gICAgJHN1YmplY3RUeXBlOiBTdWJqZWN0VHlwZVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkZWR1Y1R5cGU6IEVkdWNhdGlvblR5cGVXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlU3ViamVjdChcclxuICAgICAgc3ViamVjdE5hbWU6ICRzdWJqZWN0TmFtZVxyXG4gICAgICBlZHVjVHlwZTogJGVkdWNUeXBlXHJcbiAgICAgIHN1YmplY3RDb2RlOiAkc3ViamVjdENvZGVcclxuICAgICAgc3ViamVjdFR5cGU6ICRzdWJqZWN0VHlwZVxyXG4gICAgKSB7XHJcbiAgICAgIHN1YmplY3RDb2RlXHJcbiAgICAgIHN1YmplY3ROYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVTdWJEaXZpc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVN1YkRpdmlzaW9uTXV0YXRpb24oXHJcbiAgICAkc3ViRGl2TmFtZTogU3RyaW5nIVxyXG4gICAgJHN1YkRpdkNvZGU6IFN0cmluZyFcclxuICAgICRkaXZpc2lvbjogRGl2aXNpb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlU3ViRGl2aXNpb24oXHJcbiAgICAgIHN1YkRpdk5hbWU6ICRzdWJEaXZOYW1lXHJcbiAgICAgIHN1YkRpdkNvZGU6ICRzdWJEaXZDb2RlXHJcbiAgICAgIGRpdmlzaW9uOiAkZGl2aXNpb25cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBzdWJEaXZOYW1lXHJcbiAgICAgIHN1YkRpdkNvZGVcclxuICAgICAgZGl2aXNpb24ge1xyXG4gICAgICAgIGRpdk5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlTmV3U2Vzc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZU5ld1Nlc3Npb25NdXRhdGlvbihcclxuICAgICRzZXNzaW9uTmFtZTogU3RyaW5nIVxyXG4gICAgJHNlc3Npb25Db2RlOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVTZXNzaW9uKHNlc3Npb25OYW1lOiAkc2Vzc2lvbk5hbWUsIHNlc3Npb25Db2RlOiAkc2Vzc2lvbkNvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgc2Vzc2lvbk5hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld1JhbmtNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVOZXdSYW5rTXV0YXRpb24oJHJhbmtOYW1lOiBTdHJpbmchLCAkcmFua0NvZGU6IFN0cmluZyEpIHtcclxuICAgIGNyZWF0ZVJhbmsocmFua05hbWU6ICRyYW5rTmFtZSwgcmFua0NvZGU6ICRyYW5rQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICByYW5rTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld1JlZ2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZU5ld1JlZ2lvbk11dGF0aW9uKFxyXG4gICAgJHJlZ05hbWU6IFN0cmluZyFcclxuICAgICAkcmVnQ29kZTogU3RyaW5nIVxyXG4gICAgICAkY291bnRyeTogQ291bnRyeVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAgICkge1xyXG4gICAgY3JlYXRlUmVnaW9uKFxyXG4gICAgICAgY291bnRyeTogJGNvdW50cnkgXHJcbiAgICAgICAgcmVnTmFtZTogJHJlZ05hbWVcclxuICAgICAgICAgcmVnQ29kZTogJHJlZ0NvZGVcclxuICAgICAgICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHJlZ05hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHNpZ251cFVzZXJNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBzaWdudXBVc2VyTXV0YXRpb24oXHJcbiAgICAkbmFtZTogU3RyaW5nIVxyXG4gICAgICRlbWFpbDogU3RyaW5nIVxyXG4gICAgICAkcGFzc3dvcmQ6IFN0cmluZyFcclxuICAgICAgKSB7XHJcbiAgICBzaWdudXAoXHJcbiAgICAgICBwYXNzd29yZDogJHBhc3N3b3JkIFxyXG4gICAgICAgIG5hbWU6ICRuYW1lXHJcbiAgICAgICAgIGVtYWlsOiAkZW1haWxcclxuICAgICAgICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZW1haWxcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGxvZ2luVXNlck11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGxvZ2luVXNlck11dGF0aW9uKFxyXG4gICAgICRlbWFpbDogU3RyaW5nIVxyXG4gICAgICAkcGFzc3dvcmQ6IFN0cmluZyFcclxuICAgICAgKSB7XHJcbiAgICBsb2dpbihcclxuICAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmQgXHJcbiAgICAgICAgIGVtYWlsOiAkZW1haWxcclxuICAgICAgICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVtYWlsXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVOZXdDb3VudHJ5TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlTmV3Q291bnRyeU11dGF0aW9uKCRjb3VudHJ5TmFtZTogU3RyaW5nISwgJGNvdW50cnlDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBjcmVhdGVDb3VudHJ5KGNvdW50cnlOYW1lOiAkY291bnRyeU5hbWUsIGNvdW50cnlDb2RlOiAkY291bnRyeUNvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgY291bnRyeU5hbWVcclxuICAgICAgY291bnRyeUNvZGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZVBoYXNlTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlUGhhc2VNdXRhdGlvbigkcGhhc2VOYW1lOiBTdHJpbmchLCAkcGhhc2VDb2RlOiBTdHJpbmchKXtcclxuICAgIGNyZWF0ZVBoYXNlKHBoYXNlTmFtZTogJHBoYXNlTmFtZSwgcGhhc2VDb2RlOiAkcGhhc2VDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHBoYXNlTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgY3JlYXRlRXhhbU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUV4YW1NdXRhdGlvbigkZXhhbU5hbWU6IFN0cmluZyEsICRleGFtQ29kZTogU3RyaW5nISkge1xyXG4gICAgY3JlYXRlRXhhbShleGFtTmFtZTogJGV4YW1OYW1lLCBleGFtQ29kZTogJGV4YW1Db2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGV4YW1OYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCByZWdpc3RlclN1YmplY3RTZXJpZXNNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiByZWdpc3RlclN1YmplY3RTZXJpZXNNdXRhdGlvbihcclxuICAgICRzdWJqZWN0OiBTdWJqZWN0V2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRzZXJpZXM6IFNlcmllc1doZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkY29lZmY6IEludCFcclxuICApIHtcclxuICAgIGNyZWF0ZVN1YmplY3RTZXJpZXMoc3ViamVjdDogJHN1YmplY3QsIHNlcmllczogJHNlcmllcywgY29lZmY6ICRjb2VmZikge1xyXG4gICAgICBpZFxyXG4gICAgICBzZXJpZXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgIHN1YmplY3RTZXJpZXMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHN1YmplY3Qge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgcmVnaXN0ZXJOZXdTdWJqZWN0U2VyaWVzTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gcmVnaXN0ZXJOZXdTdWJqZWN0U2VyaWVzTXV0YXRpb24oXHJcbiAgICAkc2VyaWVzOiBTZXJpZXNXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNvZWZmOiBJbnQhXHJcbiAgICAkc3ViamVjdE5hbWU6IFN0cmluZyFcclxuICAgICRzdWJqZWN0Q29kZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgY3JlYXRlU3ViamVjdFNlcmllcyhcclxuICAgICAgc3ViamVjdENvZGU6ICRzdWJqZWN0Q29kZVxyXG4gICAgICBzdWJqZWN0TmFtZTogJHN1YmplY3ROYW1lXHJcbiAgICAgIHNlcmllczogJHNlcmllc1xyXG4gICAgICBjb2VmZjogJGNvZWZmXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgc2VyaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgICAgc3ViamVjdENvZGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGNyZWF0ZUNhbmRpZGF0ZU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUNhbmRpZGF0ZU11dGF0aW9uKFxyXG4gICAgJGNhbmQxc3ROYW1lOiBTdHJpbmchXHJcbiAgICAkY2FuZDJuZE5hbWU6IFN0cmluZ1xyXG4gICAgJGNhbmQzcmROYW1lOiBTdHJpbmdcclxuICAgICRkYWROYW1lOiBTdHJpbmdcclxuICAgICRtb21OYW1lOiBTdHJpbmdcclxuICAgICRjYW5kQ29kZTogU3RyaW5nXHJcbiAgICAkZW1haWw6IFN0cmluZyFcclxuICAgICRpbWFnZTogU3RyaW5nIVxyXG4gICAgJHBob25lTnVtYjogSW50XHJcbiAgICAkZGF0ZU9mQmlydGg6IERhdGVUaW1lXHJcbiAgICAkYmlydGhDZXJ0TnVtYmVyOiBTdHJpbmdcclxuICAgICRwbGFjZU9mQmlydGg6IFN0cmluZ1xyXG4gICAgJGdlbmRlcjogR2VuZGVyV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNyZWF0ZUNhbmRpZGF0ZShcclxuICAgICAgY2FuZDFzdE5hbWU6ICRjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZTogJGNhbmQybmROYW1lXHJcbiAgICAgIGRhZE5hbWU6ICRkYWROYW1lXHJcbiAgICAgIG1vbU5hbWU6ICRtb21OYW1lXHJcbiAgICAgIGNhbmQzcmROYW1lOiAkY2FuZDNyZE5hbWVcclxuICAgICAgY2FuZENvZGU6ICRjYW5kQ29kZVxyXG4gICAgICBlbWFpbDogJGVtYWlsXHJcbiAgICAgIGltYWdlOiAkaW1hZ2VcclxuICAgICAgcGhvbmVOdW1iOiAkcGhvbmVOdW1iXHJcbiAgICAgIGRhdGVPZkJpcnRoOiAkZGF0ZU9mQmlydGhcclxuICAgICAgYmlydGhDZXJ0TnVtYmVyOiAkYmlydGhDZXJ0TnVtYmVyXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aDogJHBsYWNlT2ZCaXJ0aFxyXG4gICAgICBnZW5kZXI6ICRnZW5kZXJcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBtb21OYW1lXHJcbiAgICAgIGRhZE5hbWVcclxuICAgICAgY2FuZENvZGVcclxuICAgICAgYmlydGhDZXJ0TnVtYmVyXHJcbiAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgIGltYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjcmVhdGVFeGFtaW5lck11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUV4YW1pbmVyTXV0YXRpb24oXHJcbiAgICAkZXhhbWluZXIxc3ROYW1lOiBTdHJpbmchXHJcbiAgICAkZXhhbWluZXIybmROYW1lOiBTdHJpbmchXHJcbiAgICAkZXhhbWluZXJPdGhlck5hbWVzOiBTdHJpbmdcclxuICAgICRleGFtaW5lckNvZGU6IFN0cmluZyFcclxuICAgICRleGFtaW5lckVtYWlsOiBTdHJpbmchXHJcbiAgICAkZXhhbWluZXJDTkk6IFN0cmluZyFcclxuICAgICRleGFtaW5lck1hdHJpY3VsZTogU3RyaW5nIVxyXG4gICAgJGV4YW1pbmVySW1hZ2U6IFN0cmluZyFcclxuICAgICRleGFtaW5lclBob25lOiBJbnQhXHJcbiAgICAkZ2VuZGVyOiBHZW5kZXJXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlRXhhbWluZXIoXHJcbiAgICAgIGV4YW1pbmVyMXN0TmFtZTogJGV4YW1pbmVyMXN0TmFtZVxyXG4gICAgICBleGFtaW5lcjJuZE5hbWU6ICRleGFtaW5lcjJuZE5hbWVcclxuICAgICAgZXhhbWluZXJPdGhlck5hbWVzOiAkZXhhbWluZXJPdGhlck5hbWVzXHJcbiAgICAgIGV4YW1pbmVyTWF0cmljdWxlOiAkZXhhbWluZXJNYXRyaWN1bGVcclxuICAgICAgZXhhbWluZXJDb2RlOiAkZXhhbWluZXJDb2RlXHJcbiAgICAgIGV4YW1pbmVyQ05JOiAkZXhhbWluZXJDTklcclxuICAgICAgZXhhbWluZXJFbWFpbDogJGV4YW1pbmVyRW1haWxcclxuICAgICAgZXhhbWluZXJJbWFnZTogJGV4YW1pbmVySW1hZ2VcclxuICAgICAgZXhhbWluZXJQaG9uZTogJGV4YW1pbmVyUGhvbmVcclxuICAgICAgZ2VuZGVyOiAkZ2VuZGVyXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgZXhhbWluZXIxc3ROYW1lXHJcbiAgICAgIGV4YW1pbmVyMm5kTmFtZVxyXG4gICAgICBleGFtaW5lck90aGVyTmFtZXNcclxuICAgICAgZXhhbWluZXJDb2RlXHJcbiAgICAgIGV4YW1pbmVyRW1haWxcclxuICAgICAgZXhhbWluZXJJbWFnZVxyXG4gICAgICBleGFtaW5lclBob25lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG4vLyoqKioqKioqKioqKmNyZWF0ZSBtdXRhdGlvbnMgICovXHJcblxyXG4vLy8vKioqKioqKioqKioqKipVcGRhdGUgbXV0YXRpb25zICovXHJcblxyXG5jb25zdCB1cGRhdGVTdWJEaXZpc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVN1YkRpdmlzaW9uTXV0YXRpb24oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJHN1YkRpdk5hbWU6IFN0cmluZ1xyXG4gICAgJHN1YkRpdkNvZGU6IFN0cmluZ1xyXG4gICkge1xyXG4gICAgdXBkYXRlU3ViRGl2aXNpb24oXHJcbiAgICAgIGlkOiAkaWRcclxuICAgICAgc3ViRGl2TmFtZTogJHN1YkRpdk5hbWVcclxuICAgICAgc3ViRGl2Q29kZTogJHN1YkRpdkNvZGVcclxuICAgICkge1xyXG4gICAgICBzdWJEaXZOYW1lXHJcbiAgICAgIHN1YkRpdkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVwZGF0ZUNlbnRlck11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZUNlbnRlck11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRjZW50ZXJOYW1lOiBTdHJpbmdcclxuICAgICRjZW50ZXJDb2RlOiBTdHJpbmdcclxuICAgICRjZW50ZXJOdW1iZXI6IEludFxyXG4gICkge1xyXG4gICAgdXBkYXRlQ2VudGVyKFxyXG4gICAgICBpZDogJGlkXHJcbiAgICAgIGNlbnRlck5hbWU6ICRjZW50ZXJOYW1lXHJcbiAgICAgIGNlbnRlckNvZGU6ICRjZW50ZXJDb2RlXHJcbiAgICAgIGNlbnRlck51bWJlcjogJGNlbnRlck51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlck5hbWVcclxuICAgICAgY2VudGVyTnVtYmVyXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVwZGF0ZVRvd25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVUb3duTXV0YXRpb24oJGlkOiBJRCEsICR0b3duTmFtZTogU3RyaW5nLCAkdG93bkNvZGU6IFN0cmluZykge1xyXG4gICAgdXBkYXRlVG93bihpZDogJGlkLCB0b3duTmFtZTogJHRvd25OYW1lLCB0b3duQ29kZTogJHRvd25Db2RlKSB7XHJcbiAgICAgIHRvd25OYW1lXHJcbiAgICAgIHRvd25Db2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCB1cGRhdGVFeGFtTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlRXhhbU11dGF0aW9uKCRpZDogSUQhLCAkZXhhbU5hbWU6IFN0cmluZywgJGV4YW1Db2RlOiBTdHJpbmcpIHtcclxuICAgIHVwZGF0ZUV4YW0oaWQ6ICRpZCwgZXhhbU5hbWU6ICRleGFtTmFtZSwgZXhhbUNvZGU6ICRleGFtQ29kZSkge1xyXG4gICAgICBleGFtTmFtZVxyXG4gICAgICBleGFtQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgdXBkYXRlU2NvcmVNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVTY29yZU11dGF0aW9uKFxyXG4gICAgJHN1YmplY3RTZXJpZXM6IFN1YmplY3RTZXJpZXNXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHN1YmplY3RBdmU6IEZsb2F0IVxyXG4gICAgJGNhbmRFeGFtU2VjcmV0Q29kZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgdXBkYXRlU2NvcmUoXHJcbiAgICAgIHN1YmplY3RTZXJpZXM6ICRzdWJqZWN0U2VyaWVzXHJcbiAgICAgIHN1YmplY3RBdmU6ICRzdWJqZWN0QXZlXHJcbiAgICAgIGNhbmRFeGFtU2VjcmV0Q29kZTogJGNhbmRFeGFtU2VjcmV0Q29kZVxyXG4gICAgKSB7XHJcbiAgICAgIHN1YmplY3RBdmVcclxuICAgICAgY29lZmZcclxuICAgICAgaWRcclxuICAgICAgc3ViamVjdFNlcmllcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0Q29kZVxyXG4gICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbi8vIGNvbnN0IGNyZWF0ZVVzZXJNdXRhdGlvbiA9IGdxbGBcclxuLy8gICBtdXRhdGlvbiBjcmVhdGVVc2VyTXV0YXRpb24oXHJcbi8vICAgICAkZW1haWw6IFN0cmluZyFcclxuLy8gICAgICRuYW1lOiBTdHJpbmchXHJcbi8vICAgICAkcGFzc3dvcmQ6IFN0cmluZyFcclxuLy8gICAgICkge1xyXG4vLyAgICAgY3JlYXRlVXNlciggXHJcbi8vICAgICAgICAgICAgICAgIGVtYWlsOiAkZW1haWwhXHJcbi8vICAgICAgICAgICAgICAgIG5hbWU6ICRuYW1lIVxyXG4vLyAgICAgICAgICAgICAgICBwYXNzd29yZDogJHBhc3N3b3JkIVxyXG4vLyAgICAgICAgICAgICAgICApIHtcclxuLy8gICAgICAgaWRcclxuLy8gICAgICAgbmFtZVxyXG4vLyAgICAgICBlbWFpbFxyXG4vLyAgICAgICBwYXNzd29yZFxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gYFxyXG5cclxuY29uc3QgdXBkYXRlQ2FuZGlkYXRlTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlQ2FuZGlkYXRlTXV0YXRpb24oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJGNhbmQxc3ROYW1lOiBTdHJpbmdcclxuICAgICRjYW5kMm5kTmFtZTogU3RyaW5nXHJcbiAgICAkY2FuZDNyZE5hbWU6IFN0cmluZ1xyXG4gICAgJG1vbU5hbWU6IFN0cmluZ1xyXG4gICAgJGRhZE5hbWU6IFN0cmluZ1xyXG4gICAgJGVtYWlsOiBTdHJpbmdcclxuICAgICRpbWFnZTogU3RyaW5nXHJcbiAgICAkcGhvbmVOdW1iOiBJbnRcclxuICAgICRwbGFjZU9mQmlydGg6IFN0cmluZ1xyXG4gICAgJGRhdGVPZkJpcnRoOiBEYXRlVGltZVxyXG4gICAgJGJpcnRoQ2VydE51bWJlcjogU3RyaW5nXHJcbiAgICAkZ2VuZGVyOiBHZW5kZXJXaGVyZVVuaXF1ZUlucHV0XHJcbiAgKSB7XHJcbiAgICB1cGRhdGVDYW5kaWRhdGUoXHJcbiAgICAgIGlkOiAkaWRcclxuICAgICAgY2FuZDFzdE5hbWU6ICRjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZTogJGNhbmQybmROYW1lXHJcbiAgICAgIGNhbmQzcmROYW1lOiAkY2FuZDNyZE5hbWVcclxuICAgICAgbW9tTmFtZTogJG1vbU5hbWVcclxuICAgICAgZGFkTmFtZTogJGRhZE5hbWVcclxuICAgICAgZW1haWw6ICRlbWFpbFxyXG4gICAgICBpbWFnZTogJGltYWdlXHJcbiAgICAgIHBob25lTnVtYjogJHBob25lTnVtYlxyXG4gICAgICBwbGFjZU9mQmlydGg6ICRwbGFjZU9mQmlydGhcclxuICAgICAgZGF0ZU9mQmlydGg6ICRkYXRlT2ZCaXJ0aFxyXG4gICAgICBiaXJ0aENlcnROdW1iZXI6ICRiaXJ0aENlcnROdW1iZXJcclxuICAgICAgZ2VuZGVyOiAkZ2VuZGVyXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHBob25lTnVtYlxyXG4gICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgYmlydGhDZXJ0TnVtYmVyXHJcbiAgICAgIGdlbmRlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgdXBkYXRlR2VuZGVyTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlR2VuZGVyTXV0YXRpb24oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJGdlbmRlck5hbWU6IFN0cmluZ1xyXG4gICAgJGdlbmRlckNvZGU6IFN0cmluZ1xyXG4gICkge1xyXG4gICAgdXBkYXRlR2VuZGVyKGlkOiAkaWQsIGdlbmRlck5hbWU6ICRnZW5kZXJOYW1lLCBnZW5kZXJDb2RlOiAkZ2VuZGVyQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBnZW5kZXJOYW1lXHJcbiAgICAgIGdlbmRlckNvZGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHNpZ25VcE11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHNpZ25VcE11dGF0aW9uKCRlbWFpbDogU3RyaW5nISwgJG5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xyXG4gICAgc2lnblVwKGVtYWlsOiAkZW1haWwsIG5hbWU6ICRuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIHJlc2V0VG9rZW5cclxuICAgICAgcGFzc3dvcmRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVwZGF0ZUl0ZW1NdXRhdGlvbiA9IGFzeW5jIChlLCB1cGRhdGVNdXRhdGlvbikgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKVxyXG4gIGNvbnNvbGUubG9nKCdVcGRhdGluZyBSZWdpb24hIScpXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlTXV0YXRpb24oe1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgfSxcclxuICB9KVxyXG4gIGNvbnNvbGUubG9nKCdSZWdpb24gVXBkYXRlZCEhJylcclxufVxyXG5cclxuLy8vLyoqKioqKioqKioqKioqVXBkYXRlIG11dGF0aW9ucyAqL1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVDYW5kaWRhdGVNdXRhdGlvbixcclxuICBjcmVhdGVOZXdTdWJqZWN0TXV0YXRpb24sXHJcbiAgY3JlYXRlTmV3U3ViamVjdFR5cGVNdXRhdGlvbixcclxuICBjcmVhdGVUb3duTXV0YXRpb24sXHJcbiAgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25FeGFtaW5lck11dGF0aW9uLFxyXG4gIGNyZWF0ZURpdmlzaW9uTXV0YXRpb24sXHJcbiAgY3JlYXRlUmVnaXN0cmF0aW9uTXV0YXRpb24sXHJcbiAgY3JlYXRlQ2VudGVyTXV0YXRpb24sXHJcbiAgY3JlYXRlRWR1Y2F0aW9uVHlwZU11dGF0aW9uLFxyXG4gIGNyZWF0ZVNlcmllc011dGF0aW9uLFxyXG4gIGNyZWF0ZVN1YkRpdmlzaW9uTXV0YXRpb24sXHJcbiAgY3JlYXRlTmV3U2Vzc2lvbk11dGF0aW9uLFxyXG4gIGNyZWF0ZU5ld1JhbmtNdXRhdGlvbixcclxuICBjcmVhdGVOZXdSZXBvcnRNdXRhdGlvbixcclxuICBjcmVhdGVOZXdSZWdpb25NdXRhdGlvbixcclxuICBjcmVhdGVOZXdHZW5kZXJNdXRhdGlvbixcclxuICBjcmVhdGVFeGFtTXV0YXRpb24sXHJcbiAgcmVnaXN0ZXJTdWJqZWN0U2VyaWVzTXV0YXRpb24sXHJcbiAgcmVnaXN0ZXJOZXdTdWJqZWN0U2VyaWVzTXV0YXRpb24sXHJcbiAgdXBkYXRlQ2VudGVyTXV0YXRpb24sXHJcbiAgdXBkYXRlVG93bk11dGF0aW9uLFxyXG4gIHVwZGF0ZVNlc3Npb25NdXRhdGlvbixcclxuICB1cGRhdGVSZWdpb25NdXRhdGlvbixcclxuICB1cGRhdGVFeGFtTXV0YXRpb24sXHJcbiAgdXBkYXRlU3ViRGl2aXNpb25NdXRhdGlvbixcclxuICB1cGRhdGVHZW5kZXJNdXRhdGlvbixcclxuICB1cGRhdGVDYW5kaWRhdGVNdXRhdGlvbixcclxuICB1cGRhdGVTY29yZU11dGF0aW9uLFxyXG4gIHVwZGF0ZURpdmlzaW9uTXV0YXRpb24sXHJcbiAgdXBkYXRlSXRlbU11dGF0aW9uLFxyXG4gIGNyZWF0ZUV4YW1pbmVyTXV0YXRpb24sXHJcbiAgY3JlYXRlUGhhc2VNdXRhdGlvbixcclxuICBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvblNlcmllc011dGF0aW9uLFxyXG4gIHVwZGF0ZVNlcmllc011dGF0aW9uLFxyXG4gIHVwZGF0ZVJhbmtNdXRhdGlvbixcclxuICBjcmVhdGVQaGFzZVJhbmtNdXRhdGlvbixcclxuICBjcmVhdGVOZXdDb3VudHJ5TXV0YXRpb24sXHJcbiAgc2lnblVwTXV0YXRpb24sXHJcbiAgdXBkYXRlU3ViamVjdE11dGF0aW9uLFxyXG4gIHVwZGF0ZVN1YmplY3RUeXBlTXV0YXRpb24sXHJcbiAgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25NdXRhdGlvbixcclxuICB1cGRhdGVFZHVjYXRpb25UeXBlTXV0YXRpb24sXHJcbiAgc2lnbkluQ2FuZGlkYXRlLFxyXG4gIGxvZ2luVXNlck11dGF0aW9uLFxyXG4gIHNpZ251cFVzZXJNdXRhdGlvbixcclxufVxyXG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmNvbnN0IGdldEFDZW50ZXJBZG1pblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFDZW50ZXJBZG1pblF1ZXJ5KCRhdXRoQ29kZTogU3RyaW5nISkge1xyXG4gICAgY2VudGVyQWRtaW5TaWduSW4oYXV0aENvZGU6ICRhdXRoQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBhdXRoQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IG1lUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgbWVRdWVyeSB7XHJcbiAgICBtZSB7XHJcbiAgICAgIGlkXHJcbiAgICAgZW1haWxcclxuICAgICBuYW1lIFxyXG4gICAgIHBhc3N3b3JkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlRWR1Y2F0aW9uVHlwZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZUVkdWNhdGlvblR5cGVRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgZWR1Y2F0aW9uVHlwZShpZDogJGlkKSB7XHJcbiAgICAgIGVkdWNhdGlvblR5cGVOYW1lXHJcbiAgICAgIGVkdWNhdGlvblR5cGVDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q0VTRXhhbWluZXJRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDRVNFeGFtaW5lclF1ZXJ5KFxyXG4gICAgJGV4YW1pbmVyOiBFeGFtaW5lcldoZXJlVW5pcXVlSW5wdXQhLFxyXG4gICAgICRjZW50ZXJFeGFtU2Vzc2lvbjpDZW50ZXJFeGFtU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhKSB7XHJcbiAgICBnZXRDZW50ZXJFeGFtU2Vzc2lvbkV4YW1pbmVycyhcclxuICAgICAgZXhhbWluZXI6ICRleGFtaW5lciwgXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uOiRjZW50ZXJFeGFtU2Vzc2lvbiAgKSB7XHJcbiAgICAgXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlU3ViamVjdFR5cGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVTdWJqZWN0VHlwZVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzdWJqZWN0VHlwZShpZDogJGlkKSB7XHJcbiAgICAgIHN1YmplY3RUeXBlTmFtZVxyXG4gICAgICBzdWJqZWN0VHlwZUNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxDZW50ZXJBZG1pbnNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxDZW50ZXJBZG1pbnNRdWVyeSB7XHJcbiAgICBjZW50ZXJBZG1pbnMge1xyXG4gICAgICBpZFxyXG4gICAgICBhdXRoTmFtZVxyXG4gICAgICBhdXRoQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbEVkdWNhdGlvblR5cGVzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsRWR1Y2F0aW9uVHlwZXNRdWVyeSB7XHJcbiAgICBlZHVjYXRpb25UeXBlcyhvcmRlckJ5OiBlZHVjYXRpb25UeXBlTmFtZV9BU0MpIHtcclxuICAgICAgaWRcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgZWR1Y2F0aW9uVHlwZUNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldEFsbFJlZ2lvbnNPZkFDb3VudHJ5UXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsUmVnaW9uc09mQUNvdW50cnlRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgY291bnRyeShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHJlZ2lvbihvcmRlckJ5OiByZWdOYW1lX0FTQyl7XHJcbiAgICAgICByZWdOYW1lXHJcbiAgICAgIHJlZ0NvZGVcclxuICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsUmVnaW9uc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFJlZ2lvbnNRdWVyeSB7XHJcbiAgICAgIHJlZ2lvbnN7XHJcbiAgICAgICByZWdOYW1lXHJcbiAgICAgIHJlZ0NvZGVcclxuICAgICAgaWRcclxuICB9fVxyXG5gO1xyXG5jb25zdCBnZXRBbGxDb3VudHJ5c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENvdW50cnlzUXVlcnkge1xyXG4gICAgY291bnRyaWVzKG9yZGVyQnk6Y291bnRyeU5hbWVfQVNDKSB7XHJcbiAgICAgIGNvdW50cnlOYW1lXHJcbiAgICAgIGNvdW50cnlDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBnZXRBbGxDb3VudHJ5c1JlZ2lvbkNyZWF0ZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENvdW50cnlzUmVnaW9uQ3JlYXRlUXVlcnkge1xyXG4gICAgY291bnRyaWVzKG9yZGVyQnk6Y291bnRyeU5hbWVfQVNDKSB7XHJcbiAgICAgICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldENlbnRlclJlc3VsdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDZW50ZXJSZXN1bHRzUXVlcnkoXHJcbiAgICAkZXhhbTogRXhhbVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkY2VudGVyOiBDZW50ZXJXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHNlc3Npb246IFNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgZ2V0UmVzdWx0c1BlckNlbnRlcihleGFtOiAkZXhhbSwgY2VudGVyOiAkY2VudGVyLCBzZXNzaW9uOiAkc2Vzc2lvbikge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kaWRhdGUge1xyXG4gICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgICBnZW5kZXIge1xyXG4gICAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBleGFtIHtcclxuICAgICAgICBleGFtTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNlc3Npb24ge1xyXG4gICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgIH1cclxuICAgICAgY2VudGVyIHtcclxuICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgIH1cclxuICAgICAgc2NvcmVzIHtcclxuICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgY29lZmZcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgICBzZXJpZXMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzZXJpZXNOYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2FuZGlkYXRlUmVzdWx0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENhbmRpZGF0ZVJlc3VsdHNRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcmVnaXN0cmF0aW9uKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgY3JlYXRlZEF0XHJcbiAgICAgIGNhbmRSZWdpc3RyYXRpb25OdW1iZXJcclxuICAgICAgXHJcbiAgICAgIGNhbmRpZGF0ZSB7XHJcbiAgICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgbW9tTmFtZVxyXG4gICAgICAgIGRhZE5hbWVcclxuICAgICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgICBpbWFnZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgICBnZW5kZXIge1xyXG4gICAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllcyB7XHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9ue1xyXG4gICAgICAgIGlkIFxyXG4gICAgICBleGFtU2Vzc2lvbiB7XHJcbiAgICAgICBpZFxyXG4gICAgICAgIGV4YW17XHJcbiAgICAgICAgICBpZCBcclxuICAgICAgICAgIGV4YW1OYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlc3Npb257XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2VudGVyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgfX1cclxuICAgICAgc2VyaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNjb3JlcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgY29lZmZcclxuICAgICAgICBzdWJqZWN0U2VyaWVzICB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRFeGFtaW5lclJlZ2lzdHJhdGlvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEV4YW1pbmVyUmVnaXN0cmF0aW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uRXhhbWluZXIoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBleGFtaW5lcntcclxuICAgICAgICBleGFtaW5lcjFzdE5hbWVcclxuICAgICAgICBleGFtaW5lcjJuZE5hbWVcclxuICAgICAgICBleGFtaW5lck90aGVyTmFtZXNcclxuICAgICAgICBleGFtaW5lck1hdHJpY3VsZVxyXG4gICAgICAgIGV4YW1pbmVyUGhvbmVcclxuICAgICAgICBleGFtaW5lckNOSVxyXG4gICAgICAgIGV4YW1pbmVySW1hZ2VcclxuICAgICAgICBleGFtaW5lckVtYWlsXHJcbiAgICAgICAgZ2VuZGVyIHtcclxuICAgICAgICAgIGdlbmRlck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2VudGVyRXhhbVNlc3Npb257XHJcbiAgICAgICAgaWQgXHJcbiAgICAgIGV4YW1TZXNzaW9uIHtcclxuICAgICAgIGlkXHJcbiAgICAgICAgZXhhbXtcclxuICAgICAgICAgIGlkIFxyXG4gICAgICAgICAgZXhhbU5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Vzc2lvbntcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICB9fVxyXG4gICAgICBjZW50ZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY2VudGVyTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHBoYXNlUmFuayB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICByYW5rTmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsQ2VudGVyUmVzdWx0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENlbnRlclJlc3VsdHNRdWVyeSgkY2VudGVyRXhhbVNlc3Npb246IFN0cmluZyEpIHtcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzRm9yUmVzdWx0cyhjZW50ZXJFeGFtU2Vzc2lvbjogJGNlbnRlckV4YW1TZXNzaW9uKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNlcmllc3tcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNlcmllc05hbWVcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIHJlZ2lzdHJhdGlvbntcclxuICAgICAgIGlkXHJcbiAgICAgICBjYW5kaWRhdGV7XHJcbiAgICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgIGlkXHJcbiAgICAgICB9XHJcbiAgICAgIHNjb3JlcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgY29lZmZcclxuICAgICAgICBzdWJqZWN0U2VyaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEVhY2hDYW5kaWRhdGVSZXN1bHRzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0RWFjaENhbmRpZGF0ZVJlc3VsdHNRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcmVnaXN0cmF0aW9uKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgY2FuZGlkYXRlIHtcclxuICAgICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgICBtb21OYW1lXHJcbiAgICAgICAgZGFkTmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgICBnZW5kZXIge1xyXG4gICAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBleGFtIHtcclxuICAgICAgICBleGFtTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNlc3Npb24ge1xyXG4gICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgIH1cclxuICAgICAgc2VyaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNlcmllc05hbWVcclxuICAgICAgfVxyXG4gICAgICBjZW50ZXIge1xyXG4gICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURRdWVyeShcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvbjogQ2VudGVyRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNhbmRpZGF0ZTogQ2FuZGlkYXRlV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEKGNlbnRlckV4YW1TZXNzaW9uOiAkY2VudGVyRXhhbVNlc3Npb24sIGNhbmRpZGF0ZTogJGNhbmRpZGF0ZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JRHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JRHNRdWVyeSgkY2FuZGlkYXRlOiBSZWdpc3RyYXRpb25XaGVyZUlucHV0ISAgKSB7XHJcbiAgICBjYW5kaWRhdGVSZWdpc3RyYXRpb25JRHMoY2FuZGlkYXRlOiAkY2FuZGlkYXRlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5KCRpZDogSUQhICApIHtcclxuICAgIGNhbmRpZGF0ZSggaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgaW1hZ2VcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGdlbmRlcntcclxuaWRcclxuZ2VuZGVyTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdHJhdGlvbntcclxuICAgICAgICBpZFxyXG4gICAgIFxyXG4gICAgICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVze1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgc2VyaWVze1xyXG4gICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNlbnRlckV4YW1TZXNzaW9ue1xyXG4gICAgICAgICAgY2VudGVye1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBleGFtU2Vzc2lvbntcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZXhhbXtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGV4YW1OYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2Vzc2lvbntcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcmVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3RBdmVcclxuICAgICAgICBjb2VmZlxyXG4gICAgICAgIHN1YmplY3RTZXJpZXMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBpZFxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDYW5kaWRhdGVJRFF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENhbmRpZGF0ZUlEUXVlcnkoXHJcbiAgICAkY2FuZENvZGU6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNhbmRpZGF0ZUNvZGUoY2FuZENvZGU6ICRjYW5kQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFJlZ2lzdHJhdGlvbklERnJvbVJlZ051bWJlclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFJlZ2lzdHJhdGlvbklERnJvbVJlZ051bWJlclF1ZXJ5KFxyXG4gICAgJGNhbmRSZWdpc3RyYXRpb25OdW1iZXI6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNhbmRpZGF0ZVJlZ2lzdHJhdGlvbk51bWJlcihjYW5kUmVnaXN0cmF0aW9uTnVtYmVyOiAkY2FuZFJlZ2lzdHJhdGlvbk51bWJlcikge1xyXG4gICAgIGlkXHJcbiAgICAgY2FuZGlkYXRle1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgaW1hZ2VcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGdlbmRlcntcclxuaWRcclxuZ2VuZGVyTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdHJhdGlvbntcclxuICAgICAgICBpZFxyXG4gICAgIFxyXG4gICAgICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVze1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgc2VyaWVze1xyXG4gICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNlbnRlckV4YW1TZXNzaW9ue1xyXG4gICAgICAgICAgY2VudGVye1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBleGFtU2Vzc2lvbntcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZXhhbXtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGV4YW1OYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2Vzc2lvbntcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcmVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3RBdmVcclxuICAgICAgICBjb2VmZlxyXG4gICAgICAgIHN1YmplY3RTZXJpZXMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDZW50ZXJJREZyb21DZW50ZXJDb2RlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2VudGVySURGcm9tQ2VudGVyQ29kZVF1ZXJ5KCRjZW50ZXJDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBjZW50ZXJCeUNvZGUoY2VudGVyQ29kZTogJGNlbnRlckNvZGUpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDZW50ZXJSZWdpc3RyYXRpb25JRHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDZW50ZXJSZWdpc3RyYXRpb25JRHNRdWVyeShcclxuICAgICRleGFtOiBFeGFtV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjZW50ZXI6IENlbnRlcldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkc2Vzc2lvbjogU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjZW50ZXJSZWdpc3RyYXRpb25JRHMoZXhhbTogJGV4YW0sIGNlbnRlcjogJGNlbnRlciwgc2Vzc2lvbjogJHNlc3Npb24pIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc0ZvclJlc3VsdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc0ZvclJlc3VsdHNRdWVyeSgkY2VudGVyRXhhbVNlc3Npb246IFN0cmluZyAhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc0ZvclJlc3VsdHMoY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvbikge1xyXG4gICAgICBpZFxyXG4gICAgICBzZXJpZXN7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzZXJpZXNOYW1lXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY2VudGVyRXhhbVNlc3Npb25Gb3JSZXN1bHRzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgY2VudGVyRXhhbVNlc3Npb25Gb3JSZXN1bHRzUXVlcnkoJGlkOiBJRCAhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlcntcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICAgICAgICAgICBjZW50ZXJDb2RlXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZXhhbVNlc3Npb257XHJcbiAgICAgICAgICAgICAgIGV4YW17XHJcbiAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHNlc3Npb257XHJcbiAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVze1xyXG4gICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgc2VyaWVze1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgICAgICAgIHNlcmllc0NvZGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgcmVnaXN0cmF0aW9ue1xyXG4gICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICBjYW5kUmVnaXN0cmF0aW9uTnVtYmVyXHJcbiAgICAgICAgICAgICAgIGNhbmRFeGFtU2VjcmV0Q29kZVxyXG4gICAgICAgICAgICAgICBjYW5kaWRhdGV7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBwaG9uZU51bWJcclxuICAgICAgICAgICAgZ2VuZGVye1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHNjb3Jlc3tcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgIHN1YmplY3RBdmVcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgY2VudGVyRXhhbVNlc3Npb25TZXJpZXNSZXN1bHRzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgY2VudGVyRXhhbVNlc3Npb25TZXJpZXNSZXN1bHRzUXVlcnkoJGlkOiBJRCAhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllcyhpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9ue1xyXG4gICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJ7XHJcbiAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICAgICAgICAgICAgY2VudGVyQ29kZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBleGFtU2Vzc2lvbntcclxuICAgICAgICAgICAgICAgZXhhbXtcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgIGV4YW1OYW1lXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgc2Vzc2lvbntcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgc2VyaWVze1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgICAgICAgIHNlcmllc0NvZGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgcmVnaXN0cmF0aW9ue1xyXG4gICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICBjYW5kUmVnaXN0cmF0aW9uTnVtYmVyXHJcbiAgICAgICAgICAgICAgIGNhbmRFeGFtU2VjcmV0Q29kZVxyXG4gICAgICAgICAgICAgICBjYW5kaWRhdGV7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBwaG9uZU51bWJcclxuICAgICAgICAgICAgZ2VuZGVye1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHNjb3Jlc3tcclxuICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgIHN1YmplY3RBdmVcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDYW5kaWRhdGVCeUNhbmRDb2RlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2FuZGlkYXRlQnlDYW5kQ29kZVF1ZXJ5KCRjYW5kQ29kZTogU3RyaW5nISkge1xyXG4gICAgZ2V0Q2FuZGlkYXRlQnlDb2RlKGNhbmRDb2RlOiAkY2FuZENvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZENvZGVcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsUmFua3NRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxSYW5rc1F1ZXJ5IHtcclxuICAgIHJhbmtzKG9yZGVyQnk6IHJhbmtOYW1lX0FTQykge1xyXG4gICAgICByYW5rTmFtZVxyXG4gICAgICByYW5rQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFBoYXNlc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFBoYXNlc1F1ZXJ5IHtcclxuICBwaGFzZXMob3JkZXJCeTpwaGFzZU5hbWVfQVNDKSB7XHJcbiAgICBwaGFzZU5hbWVcclxuICAgIHBoYXNlQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFN1YmplY3RzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsU3ViamVjdHNRdWVyeSB7XHJcbiAgICBzdWJqZWN0cyhvcmRlckJ5OiBzdWJqZWN0TmFtZV9BU0MpIHtcclxuICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgc3ViamVjdENvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxHZW5kZXJzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsR2VuZGVyc1F1ZXJ5IHtcclxuICAgIGdlbmRlcnMob3JkZXJCeTogZ2VuZGVyTmFtZV9BU0MpIHtcclxuICAgICAgaWRcclxuICAgICAgZ2VuZGVyTmFtZVxyXG4gICAgICBnZW5kZXJDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsU2VyaWVzT2ZBbkVkdWNhdGlvblR5cGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTZXJpZXNPZkFuRWR1Y2F0aW9uVHlwZVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBlZHVjYXRpb25UeXBlKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgc2VyaWVzKG9yZGVyQnk6IHNlcmllc05hbWVfQVNDKSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzZXJpZXNOYW1lXHJcbiAgICAgICAgc2VyaWVzQ29kZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsU2VyaWVzT2ZBQ2VudGVyRXhhbVNlc3Npb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTZXJpZXNPZkFDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVze1xyXG4gICAgICBzZXJpZXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICAgIHNlcmllc0NvZGVcclxuICAgICAgfVxyXG4gICAgfX1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuXHJcbmNvbnN0IGdldEFsbFNlcmllc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFNlcmllc1F1ZXJ5IHtcclxuICAgIHNlcmllc2VzKG9yZGVyQnk6IHNlcmllc05hbWVfQVNDKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNlcmllc05hbWVcclxuICAgICAgc2VyaWVzQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsU3ViamVjdHNPZkFuRWR1Y1R5cGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTdWJqZWN0c09mQW5FZHVjVHlwZVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBlZHVjYXRpb25UeXBlKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgc3ViamVjdChvcmRlckJ5OiBzdWJqZWN0TmFtZV9BU0MpIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgc3ViamVjdENvZGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsU3ViamVjdHNPZkFTZXJpZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTdWJqZWN0c09mQVNlcmllc1F1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzZXJpZXMoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBzZXJpZXNOYW1lXHJcbiAgICAgIHN1YmplY3RTZXJpZXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICBzdWJqZWN0Q29kZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsRXhhbXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxFeGFtc1F1ZXJ5IHtcclxuICAgIGV4YW1zKG9yZGVyQnk6IGV4YW1OYW1lX0FTQykge1xyXG4gICAgICBleGFtTmFtZVxyXG4gICAgICBleGFtQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFNlc3Npb25zUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsU2Vzc2lvbnNRdWVyeSB7XHJcbiAgICBzZXNzaW9ucyhvcmRlckJ5OiBjcmVhdGVkQXRfREVTQykge1xyXG4gICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICBzZXNzaW9uQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsRGl2aXNpb25zUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsRGl2aXNpb25zUXVlcnkge1xyXG4gICAgZGl2aXNpb25zKG9yZGVyQnk6IGRpdk5hbWVfQVNDKSB7XHJcbiAgICAgIGRpdk5hbWVcclxuICAgICAgZGl2Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0RGl2aXNpb25zT2ZBUmVnaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0RGl2aXNpb25zT2ZBUmVnaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJlZ2lvbihpZDogJGlkKSB7XHJcbiAgICAgIHJlZ05hbWVcclxuICAgICAgaWRcclxuICAgICAgZGl2aXNpb24ob3JkZXJCeTogZGl2TmFtZV9BU0MpIHtcclxuICAgICAgICBkaXZOYW1lXHJcbiAgICAgICAgZGl2Q29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRTdWJEaXZpc2lvbnNPZkFEaXZpc2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFN1YkRpdmlzaW9uc09mQURpdmlzaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGRpdmlzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgZGl2TmFtZVxyXG4gICAgICBpZFxyXG4gICAgICBzdWJEaXZpc2lvbihvcmRlckJ5OiBzdWJEaXZOYW1lX0FTQykge1xyXG4gICAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgICBzdWJEaXZDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFN1YkRpdmlzaW9uc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFN1YkRpdmlzaW9uc1F1ZXJ5IHtcclxuICAgIHN1YkRpdmlzaW9uKG9yZGVyQnk6IHN1YkRpdk5hbWVfQVNDKSB7XHJcbiAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgc3ViRGl2Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFRvd25zT2ZBU3ViRGl2aXNpb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRUb3duc09mQVN1YkRpdmlzaW9uKCRpZDogSUQhKSB7XHJcbiAgICBzdWJEaXZpc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgaWRcclxuICAgICAgdG93bihvcmRlckJ5OiB0b3duTmFtZV9BU0MpIHtcclxuICAgICAgICB0b3duTmFtZVxyXG4gICAgICAgIHRvd25Db2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENlbnRlcnNPZkFUb3duUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2VudGVyc09mQVRvd25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgdG93bihpZDogJGlkKSB7XHJcbiAgICAgIHRvd25OYW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlcihvcmRlckJ5OiBjZW50ZXJOYW1lX0FTQykge1xyXG4gICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICBjZW50ZXJDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNlbnRlcnNQZXJUb3duUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgY2VudGVyc1BlclRvd25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgdG93bihpZDogJGlkKSB7XHJcbiAgICAgIHRvd25OYW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlcihvcmRlckJ5OiBjZW50ZXJOYW1lX0FTQykge1xyXG4gICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICBjZW50ZXJOdW1iZXJcclxuICAgICAgICBjZW50ZXJTZWNyZXRDb2RlXHJcbiAgICAgICAgY2VudGVyQ29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxTdWJqZWN0VHlwZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTdWJqZWN0VHlwZXNRdWVyeSB7XHJcbiAgICBzdWJqZWN0VHlwZXMob3JkZXJCeTogc3ViamVjdFR5cGVOYW1lX0RFU0MpIHtcclxuICAgICAgaWRcclxuICAgICAgc3ViamVjdFR5cGVOYW1lXHJcbiAgICAgIHN1YmplY3RUeXBlQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsQ2VudGVyc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENlbnRlcnNRdWVyeSB7XHJcbiAgICBjZW50ZXJzKG9yZGVyQnk6IGNlbnRlck5hbWVfQVNDKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlck5hbWVcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbENhbmRpZGF0ZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxDYW5kaWRhdGVzUXVlcnkge1xyXG4gICAgY2FuZGlkYXRlcyhvcmRlckJ5OiBjYW5kMXN0TmFtZV9BU0MpIHtcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgaW1hZ2VcclxuICAgICAgcGhvbmVOdW1iXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICBjYW5kQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vLyoqKioqKioqKioqKioqKioqU2luZ2xlIG9iamVjdCBxdWVyaWVzICovXHJcblxyXG5jb25zdCBzaW5nbGVDZW50ZXJRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVDZW50ZXJRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgY2VudGVyKGlkOiAkaWQpIHtcclxuICAgICAgY2VudGVyTmFtZVxyXG4gICAgICBjZW50ZXJOdW1iZXJcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNpbmdsZUNlbnRlclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFNpbmdsZUNlbnRlclF1ZXJ5KCRjZW50ZXJOdW1iZXI6IEludCEpIHtcclxuICAgIGNlbnRlckJ5TnVtYmVyKGNlbnRlck51bWJlcjogICRjZW50ZXJOdW1iZXIpIHtcclxuICAgICAgaWRcclxuICAgICAgY2VudGVyTnVtYmVyXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRTaW5nbGVQcm9mUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U2luZ2xlUHJvZlF1ZXJ5KCRhdXRoQ29kZTogU3RyaW5nISkge1xyXG4gICBwcm9mQnlBdXRoQ29kZShhdXRoQ29kZTogICRhdXRoQ29kZSkge1xyXG4gICAgIGF1dGhDb2RlXHJcbiAgICAgIGlkXHJcbiAgICAgIGF1dGgxc3ROYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IGdldFNpbmdsZUNlbnRlckJ5Q29kZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFNpbmdsZUNlbnRlckJ5Q29kZVF1ZXJ5KCRjZW50ZXJTZWNyZXRDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBnZXRDZW50ZXJCeUNvZGUoY2VudGVyU2VjcmV0Q29kZTogICRjZW50ZXJTZWNyZXRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBU2luZ2xlQ2VudGVyUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QVNpbmdsZUNlbnRlclF1ZXJ5KCRjZW50ZXJOdW1iZXI6IEludCEpIHtcclxuICAgIGNlbnRlckJ5TnVtYmVyKGNlbnRlck51bWJlcjogICRjZW50ZXJOdW1iZXIpIHtcclxuICAgICAgY2VudGVyTnVtYmVyXHJcbiAgICAgIGNlbnRlck5hbWVcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZVRvd25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVUb3duUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHRvd24oaWQ6ICRpZCkge1xyXG4gICAgICB0b3duTmFtZVxyXG4gICAgICB0b3duQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNpbmdsZUNlbnRlckV4YW1TZXNzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U2luZ2xlQ2VudGVyRXhhbVNlc3Npb25RdWVyeShcclxuICAgICRjZW50ZXI6IENlbnRlcldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkZXhhbVNlc3Npb246IEV4YW1TZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uc0J5Q29kZShleGFtU2Vzc2lvbjogJGV4YW1TZXNzaW9uLCBjZW50ZXI6ICRjZW50ZXIpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxSYW5rc09mQW5FeGFtUGhhc2VRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxSYW5rc09mQW5FeGFtUGhhc2VRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcGhhc2UoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBwaGFzZVJhbmt7XHJcbiAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgcmFua05hbWVcclxuICAgICAgICAgIHJhbmtDb2RlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRSZWdpc3RlcmVkQ2FuZGlkYXRlQ291bnRRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRSZWdpc3RlcmVkQ2FuZGlkYXRlQ291bnRRdWVyeSgkaWQ6IElEISlcclxuIHtcclxuICAgIHJlZ2lzdHJhdGlvbnNDb25uZWN0aW9uKGlkOiAkaWQpIHtcclxuICAgICBhZ2dyZWdhdGV7XHJcbiAgICAgICBjb3VudFxyXG4gICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDZW50ZXJFeGFtU2Vzc2lvblNlcmllc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENlbnRlckV4YW1TZXNzaW9uU2VyaWVzUXVlcnkoXHJcbiAgICAkY2VudGVyRXhhbVNlc3Npb246IENlbnRlckV4YW1TZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRzZXJpZXM6IFNlcmllc1doZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvblNlcmllc2VzKHNlcmllczogJHNlcmllcywgY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvbikge1xyXG4gICAgICBpZFxyXG5cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRFeGFtU2Vzc2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEV4YW1TZXNzaW9uUXVlcnkoXHJcbiAgICAkZXhhbTogRXhhbVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkc2Vzc2lvbjogU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBleGFtU2Vzc2lvbnMoc2Vzc2lvbjogJHNlc3Npb24sIGV4YW06ICRleGFtKSB7XHJcbiAgICAgIGlkXHJcblxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUV4YW1RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVFeGFtUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGV4YW0oaWQ6ICRpZCkge1xyXG4gICAgICBleGFtTmFtZVxyXG4gICAgICBleGFtQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUNhbmRpZGF0ZVF1ZXJ5MSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVDYW5kaWRhdGVRdWVyeTEoJGlkOiBJRCEpIHtcclxuICAgIGNhbmRpZGF0ZShpZDogJGlkKSB7XHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgIGRhZE5hbWVcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBjYW5kQ29kZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICBpbWFnZVxyXG4gICAgICBwaG9uZU51bWJcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlQ2FuZGlkYXRlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlQ2FuZGlkYXRlUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGNhbmRpZGF0ZShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgIGNhbmRDb2RlICBcclxuICAgICAgZGFkTmFtZVxyXG4gICAgICBtb21OYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHBob25lTnVtYlxyXG4gICAgICBiaXJ0aENlcnROdW1iZXJcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIGdlbmRlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBnZW5kZXJOYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVFeGFtaW5lclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZUV4YW1pbmVyUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGV4YW1pbmVyKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgZXhhbWluZXIxc3ROYW1lXHJcbiAgICAgIGV4YW1pbmVyMm5kTmFtZVxyXG4gICAgICBleGFtaW5lck90aGVyTmFtZXNcclxuICAgICAgZXhhbWluZXJDb2RlXHJcbiAgICAgIGV4YW1pbmVyRW1haWxcclxuICAgICAgZXhhbWluZXJJbWFnZVxyXG4gICAgICBleGFtaW5lclBob25lXHJcbiAgICAgIGV4YW1pbmVyTWF0cmljdWxlXHJcbiAgICAgIGV4YW1pbmVyQ05JXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHZpZXdTaW5nbGVDYW5kaWRhdGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSB2aWV3U2luZ2xlQ2FuZGlkYXRlUXVlcnkoJGNhbmRDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBzaW5nbGVDYW5kaWRhdGUoY2FuZENvZGU6ICRjYW5kQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBkYXRlT2ZCaXJ0aFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBjYW5kQ29kZVxyXG4gICAgICBtb21OYW1lXHJcbiAgICAgIGRhZE5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgaW1hZ2VcclxuICAgICAgcGhvbmVOdW1iXHJcbiAgICAgIGJpcnRoQ2VydE51bWJlclxyXG4gICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgZ2VuZGVyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGdlbmRlck5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNjb3JlSUQgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U2NvcmVJRCgkY2FuZEV4YW1TZWNyZXRDb2RlOiBTdHJpbmchKSB7XHJcbiAgICBzY29yZXMoY2FuZEV4YW1TZWNyZXRDb2RlOiAkY2FuZEV4YW1TZWNyZXRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0UmVnaXN0cmF0aW9ucyA9IGdxbGBcclxuICBxdWVyeSBnZXRSZWdpc3RyYXRpb25zKCRjYW5kRXhhbVNlY3JldENvZGU6IFN0cmluZyEpIHtcclxuICAgIHJlZ2lzdHJhdGlvbihjYW5kRXhhbVNlY3JldENvZGU6ICRjYW5kRXhhbVNlY3JldENvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgc2NvcmVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3Qob3JkZXJCeTogc3ViamVjdE5hbWVfQVNDKSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVTdWJEaXZpc2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZVN1YkRpdmlzaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHN1YkRpdmlzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgc3ViRGl2TmFtZVxyXG4gICAgICBzdWJEaXZDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0U2luZ2xlUmVnaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U2luZ2xlUmVnaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJlZ2lvbihpZDogJGlkKSB7XHJcbiAgICAgIHJlZ05hbWVcclxuICAgICAgcmVnQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUdlbmRlclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZUdlbmRlclF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBnZW5kZXIoaWQ6ICRpZCkge1xyXG4gICAgICBnZW5kZXJOYW1lXHJcbiAgICAgIGdlbmRlckNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVTZXJpZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVTZXJpZXNRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgc2VyaWVzKGlkOiAkaWQpIHtcclxuICAgICAgc2VyaWVzTmFtZVxyXG4gICAgICBzZXJpZXNDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlQ2VudGVyQWRtaW5RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVDZW50ZXJBZG1pblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBjZW50ZXJBZG1pbihpZDogJGlkKSB7XHJcbiAgICAgIGNlbnRlckFkbWluTmFtZVxyXG4gICAgICBjZW50ZXJBZG1pbkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGRhdGFGb3JBdmVyYWdlID0gZ3FsYFxyXG4gIHF1ZXJ5IGRhdGFGb3JBdmVyYWdlKCRjYW5kRXhhbVNlY3JldENvZGU6IFN0cmluZyEpIHtcclxuICAgIHNjb3JlcyhjYW5kRXhhbVNlY3JldENvZGU6ICRjYW5kRXhhbVNlY3JldENvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgc3ViamVjdEF2ZVxyXG4gICAgICBjb2VmZlxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZURpdmlzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlRGl2aXNpb25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgZGl2aXNpb24oaWQ6ICRpZCkge1xyXG4gICAgICBkaXZOYW1lXHJcbiAgICAgIGRpdkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVSYW5rUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlUmFua1F1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICByYW5rKGlkOiAkaWQpIHtcclxuICAgICAgcmFua05hbWVcclxuICAgICAgcmFua0NvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVTdWJqZWN0UXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlU3ViamVjdFF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzdWJqZWN0KGlkOiAkaWQpIHtcclxuICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgc3ViamVjdENvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVTZXNzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlU2Vzc2lvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzZXNzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgc2Vzc2lvbkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbi8vLyoqKioqKioqKioqKioqKioqRW5kIFNpbmdsZSBvYmplY3QgcXVlcmllcyAqL1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRBbGxTdWJqZWN0c09mQVNlcmllc1F1ZXJ5LFxyXG4gIGdldEFsbFN1YmplY3RUeXBlc1F1ZXJ5LFxyXG4gIGdldEFsbEdlbmRlcnNRdWVyeSxcclxuICBnZXRBbGxSZWdpb25zT2ZBQ291bnRyeVF1ZXJ5LFxyXG4gIGdldEFsbFNlcmllc09mQW5FZHVjYXRpb25UeXBlUXVlcnksXHJcbiAgZ2V0QWxsRXhhbXNRdWVyeSxcclxuICBnZXRBbGxTZXNzaW9uc1F1ZXJ5LFxyXG4gIGdldERpdmlzaW9uc09mQVJlZ2lvblF1ZXJ5LFxyXG4gIGdldEFsbERpdmlzaW9uc1F1ZXJ5LFxyXG4gIGdldFN1YkRpdmlzaW9uc09mQURpdmlzaW9uUXVlcnksXHJcbiAgZ2V0VG93bnNPZkFTdWJEaXZpc2lvblF1ZXJ5LFxyXG4gIGdldENlbnRlcnNPZkFUb3duUXVlcnksXHJcbiAgZ2V0QWxsRWR1Y2F0aW9uVHlwZXNRdWVyeSxcclxuICBnZXRBbGxTdWJqZWN0c1F1ZXJ5LFxyXG4gIGdldEFsbFJhbmtzUXVlcnksXHJcbiAgZ2V0QWxsQ2FuZGlkYXRlc1F1ZXJ5LFxyXG4gIGdldEFsbENlbnRlcnNRdWVyeSxcclxuICBnZXRTaW5nbGVSZWdpb25RdWVyeSxcclxuICBnZXRBQ2VudGVyQWRtaW5RdWVyeSxcclxuICBnZXRBbGxDZW50ZXJBZG1pbnNRdWVyeSxcclxuICBnZXRBbGxTZXJpZXNRdWVyeSxcclxuICBnZXRBbGxTdWJEaXZpc2lvbnNRdWVyeSxcclxuICBnZXRBbGxTdWJqZWN0c09mQW5FZHVjVHlwZVF1ZXJ5LFxyXG4gIGdldFNjb3JlSUQsXHJcbiAgc2luZ2xlU2VyaWVzUXVlcnksXHJcbiAgZ2V0UmVnaXN0cmF0aW9ucyxcclxuICBzaW5nbGVTdWJqZWN0UXVlcnksXHJcbiAgc2luZ2xlQ2FuZGlkYXRlUXVlcnkxLFxyXG4gIHNpbmdsZUNhbmRpZGF0ZVF1ZXJ5LFxyXG4gIHZpZXdTaW5nbGVDYW5kaWRhdGVRdWVyeSxcclxuICBzaW5nbGVDZW50ZXJRdWVyeSxcclxuICBzaW5nbGVDZW50ZXJBZG1pblF1ZXJ5LFxyXG4gIHNpbmdsZUV4YW1RdWVyeSxcclxuICBzaW5nbGVUb3duUXVlcnksXHJcbiAgZ2V0QWxsQ2VudGVyUmVzdWx0c1F1ZXJ5LFxyXG4gIHNpbmdsZVNlc3Npb25RdWVyeSxcclxuICBzaW5nbGVEaXZpc2lvblF1ZXJ5LFxyXG4gIHNpbmdsZVN1YkRpdmlzaW9uUXVlcnksXHJcbiAgc2luZ2xlU3ViamVjdFR5cGVRdWVyeSxcclxuICBzaW5nbGVFZHVjYXRpb25UeXBlUXVlcnksXHJcbiAgc2luZ2xlUmFua1F1ZXJ5LFxyXG4gIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzRm9yUmVzdWx0c1F1ZXJ5LFxyXG4gIGdldEFsbENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5LFxyXG4gIGdldENlbnRlckV4YW1TZXNzaW9uU2VyaWVzUXVlcnksXHJcbiAgc2luZ2xlR2VuZGVyUXVlcnksXHJcbiAgZ2V0RXhhbVNlc3Npb25RdWVyeSxcclxuICBnZXRBbGxTZXJpZXNPZkFDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5LFxyXG4gIGdldENlbnRlclJlc3VsdHNRdWVyeSxcclxuICBnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JRFF1ZXJ5LFxyXG4gIGdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5LFxyXG4gIGNlbnRlckV4YW1TZXNzaW9uRm9yUmVzdWx0c1F1ZXJ5LFxyXG4gIGdldENhbmRpZGF0ZUlEUXVlcnksXHJcbiAgZ2V0QVNpbmdsZUNlbnRlclF1ZXJ5LFxyXG4gIGdldFJlZ2lzdGVyZWRDYW5kaWRhdGVDb3VudFF1ZXJ5LFxyXG4gIGNlbnRlcnNQZXJUb3duUXVlcnksXHJcbiAgZ2V0U2luZ2xlQ2VudGVyUXVlcnksXHJcbiAgZ2V0Q2FuZGlkYXRlUmVzdWx0c1F1ZXJ5LFxyXG4gIGdldENlbnRlclJlZ2lzdHJhdGlvbklEc1F1ZXJ5LFxyXG4gIGdldENhbmRpZGF0ZUJ5Q2FuZENvZGVRdWVyeSxcclxuICBnZXRTaW5nbGVDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5LFxyXG4gIGdldEVhY2hDYW5kaWRhdGVSZXN1bHRzUXVlcnksXHJcbiAgZ2V0Q2VudGVySURGcm9tQ2VudGVyQ29kZVF1ZXJ5LFxyXG4gIGdldFJlZ2lzdHJhdGlvbklERnJvbVJlZ051bWJlclF1ZXJ5LFxyXG4gIGNlbnRlckV4YW1TZXNzaW9uU2VyaWVzUmVzdWx0c1F1ZXJ5LFxyXG4gIGRhdGFGb3JBdmVyYWdlLFxyXG4gIGdldEFsbENvdW50cnlzUmVnaW9uQ3JlYXRlUXVlcnksXHJcbiAgZ2V0QWxsUGhhc2VzUXVlcnksXHJcbiAgZ2V0QWxsUmVnaW9uc1F1ZXJ5LFxyXG4gIGdldEFsbENvdW50cnlzUXVlcnksXHJcbiAgc2luZ2xlRXhhbWluZXJRdWVyeSxcclxuICBnZXRDRVNFeGFtaW5lclF1ZXJ5LFxyXG4gIGdldEV4YW1pbmVyUmVnaXN0cmF0aW9uUXVlcnksXHJcbiAgZ2V0U2luZ2xlUHJvZlF1ZXJ5LFxyXG4gIGdldEFsbFJhbmtzT2ZBbkV4YW1QaGFzZVF1ZXJ5LFxyXG4gIG1lUXVlcnksXHJcbiAgZ2V0U2luZ2xlQ2VudGVyQnlDb2RlUXVlcnlcclxufTtcclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IE1pbmltU3R5bGVkUGFnZSB9IGZyb20gJy4uL3N0eWxlcy9TdHlsZWRQYWdlJ1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vRXJyb3JNZXNzYWdlLmpzJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL3V0aWxzL3VzZUZvcm0nXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7IFN5Z2V4SW5wdXQsIFN0eWxlZEZvcm0sIEJ1dHRvblN0eWxlZCwgU3R5bGVkQnV0dG9uLCBjdXN0b21TdHlsZSB9IGZyb20gJy4uL3V0aWxzL0Zvcm1JbnB1dHMnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgdXBkYXRlU2NvcmVNdXRhdGlvbiB9IGZyb20gXCIuLi9xdWVyaWVzJk11dGF0aW9ucyZGdW5jdGlvbnMvTXV0YXRpb25zXCI7XHJcbmltcG9ydCB7IGdldE9iamVjdEZyb21JRCwgcmVtb3ZlVHlwZW5hbWUgfSBmcm9tIFwiLi4vcXVlcmllcyZNdXRhdGlvbnMmRnVuY3Rpb25zL0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0QWxsRWR1Y2F0aW9uVHlwZXNRdWVyeSxcclxuICAgIGdldEFsbFN1YmplY3RzT2ZBU2VyaWVzUXVlcnksXHJcbiAgICBnZXRBbGxTZXJpZXNPZkFuRWR1Y2F0aW9uVHlwZVF1ZXJ5XHJcbn0gZnJvbSBcIi4uL3F1ZXJpZXMmTXV0YXRpb25zJkZ1bmN0aW9ucy9RdWVyaWVzXCI7XHJcblxyXG5jb25zdCBJbnB1dEdyb3VwID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIG1pbi13aWR0aDoxM3JlbTtcclxuICAgIG1hcmdpbjowIDFyZW07XHJcbiAgIFxyXG5gO1xyXG5jb25zdCBBbGxDb250cm9scyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4vKiBtaW4td2lkdGg6IDE3cmVtOyAqL1xyXG5gO1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFl1cFxyXG4gICAgLm9iamVjdCgpXHJcbiAgICAuc2hhcGUoe1xyXG4gICAgICAgIGNhbmRFeGFtU2VjcmV0Q29kZTogWXVwXHJcbiAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAucmVxdWlyZWQoXCJDb2RlIGQnQW5vbnltYXQgZHUgY2FuZGlkYXQgT2JsaWdhdG9pcmVcIiksXHJcbiAgICAgICAgZWR1Y1R5cGU6IFl1cFxyXG4gICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgLnJlcXVpcmVkKFwiQ2hvaXggRHUgdHlwZSBkJ0Vuc2VpZ25lbWVudCBPYmxpZ2F0b2lyZVwiKSxcclxuICAgICAgICBzdWJqZWN0U2VyaWVzOiBZdXBcclxuICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgICAgIC5yZXF1aXJlZChcIkNob2l4IGRlIGxhIG1hdGnDqHJlIE9ibGlnYXRvaXJlXCIpLFxyXG4gICAgICAgIHNlcmllczogWXVwXHJcbiAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAucmVxdWlyZWQoXCJDaG9peCBkZSBsYSBTw6lyaWVzIE9ibGlnYXRvaXJlXCIpLFxyXG4gICAgICAgIHN1YmplY3RBdmU6IFl1cFxyXG4gICAgICAgICAgICAubnVtYmVyKClcclxuICAgICAgICAgICAgLm1pbigwLCAnUGFzIGRlIG5vdGUgbsOpZ2F0aXZlJylcclxuICAgICAgICAgICAgLm1heCgyMCwgJ1BhcyBkZSBub3RlIHN1cMOpcmlldXJlIGEgMjAnKVxyXG4gICAgICAgICAgICAucmVxdWlyZWQoJ05vdGUgZHUgY2FuZGlkYXRlIG9ibGlnYXRvaXJlJyksXHJcbiAgICB9KTtcclxuXHJcbmNvbnN0IEVudGVyTmV3TWFya3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgICAgIHN1YmplY3RBdmU6IFwiXCIsXHJcbiAgICAgICAgc2VyaWVzOiBcIjEyXCIsXHJcbiAgICAgICAgc3ViamVjdFNlcmllczogXCJcIixcclxuICAgICAgICBlZHVjVHlwZTogXCIxMlwiLFxyXG4gICAgICAgIGNhbmRFeGFtU2VjcmV0Q29kZTogXCJcIixcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGUsIGhhbmRsZVJlYWN0U2VsZWN0Q2hhbmdlXSA9IHVzZUZvcm0oeyBlZHVjVHlwZUlEOiBcIlwiLCBzZXJpZXNJRDogXCJcIiB9KVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogZGF0YUVkdWNUeXBlLCBsb2FkaW5nRWR1Y1R5cGUsIGVyckVkdWNUeXBlIH0gPSB1c2VRdWVyeShnZXRBbGxFZHVjYXRpb25UeXBlc1F1ZXJ5KVxyXG4gICAgeyBsb2FkaW5nRWR1Y1R5cGUgJiYgPHA+bG9hZGluZy4uLjwvcD47IH1cclxuICAgIHsgZXJyRWR1Y1R5cGUgJiYgPEVycm9yIGVycm9yPXtlcnJFZHVjVHlwZX0gLz47IH1cclxuICAgIGNvbnNvbGUubG9nKGRhdGFFZHVjVHlwZSk7XHJcblxyXG4gICAgY29uc3QgZ2V0RWR1Y2F0aW9uVHlwZXMgPSBkYXRhRWR1Y1R5cGUgJiYgZGF0YUVkdWNUeXBlLmVkdWNhdGlvblR5cGVzO1xyXG4gICAgY29uc29sZS5sb2coZ2V0RWR1Y2F0aW9uVHlwZXMpO1xyXG4gICAgY29uc3QgZ2V0RWR1Y1R5cGVzT3B0aW9ucyA9XHJcbiAgICAgICAgZ2V0RWR1Y2F0aW9uVHlwZXMgJiZcclxuICAgICAgICBnZXRFZHVjYXRpb25UeXBlcy5tYXAoaXRlbSA9PiAoeyAuLi5pdGVtLCB2YWx1ZTogaXRlbS5pZCwgbGFiZWw6IGl0ZW0uZWR1Y2F0aW9uVHlwZU5hbWUgfSkpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogZGF0YUVkdWNhdGlvblR5cGUsIGxvYWRpbmc6IGxvYWRpbmdTZXJpZXMsIGVycm9yOiBlcnJTZXJpZXMgfSA9IHVzZVF1ZXJ5KGdldEFsbFNlcmllc09mQW5FZHVjYXRpb25UeXBlUXVlcnksIHtcclxuICAgICAgICBza2lwOiAhc3RhdGUuZWR1Y1R5cGVJRCxcclxuICAgICAgICB2YXJpYWJsZXM6IHsgaWQ6IHN0YXRlLmVkdWNUeXBlSUQgfVxyXG4gICAgfSlcclxuXHJcbiAgICB7IGxvYWRpbmdTZXJpZXMgJiYgPHA+bG9hZGluZy4uLjwvcD47IH1cclxuICAgIHsgZXJyU2VyaWVzICYmIDxFcnJvciBlcnJvcj17ZXJyU2VyaWVzfSAvPjsgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YUVkdWNhdGlvblR5cGUpO1xyXG4gICAgY29uc3QgZ2V0RWR1Y2F0aW9uVHlwZSA9IGRhdGFFZHVjYXRpb25UeXBlICYmIGRhdGFFZHVjYXRpb25UeXBlLmVkdWNhdGlvblR5cGU7XHJcbiAgICBjb25zdCB7IHNlcmllcyB9ID0geyAuLi5nZXRFZHVjYXRpb25UeXBlIH07XHJcbiAgICBjb25zb2xlLmxvZyhzZXJpZXMpO1xyXG4gICAgY29uc3QgcmVmaW5lZFNlcmllcyA9IHNlcmllcyAmJiByZW1vdmVUeXBlbmFtZShzZXJpZXMpO1xyXG4gICAgY29uc3QgZ2V0U2VyaWVzT3B0aW9ucyA9XHJcbiAgICAgICAgcmVmaW5lZFNlcmllcyAmJlxyXG4gICAgICAgIHJlZmluZWRTZXJpZXMubWFwKGl0ZW0gPT4gKHsgdmFsdWU6IGl0ZW0uaWQsIGxhYmVsOiBpdGVtLnNlcmllc05hbWUgfSkpO1xyXG5cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGRhdGFTdWJqU2VyaWVzLCBsb2FkaW5nOiBsb2FkaW5nU3VialNlciwgZXJyb3I6IGVyclN1YmpTZXIgfSA9IHVzZVF1ZXJ5KGdldEFsbFN1YmplY3RzT2ZBU2VyaWVzUXVlcnksIHtcclxuICAgICAgICBza2lwOiAhc3RhdGUuc2VyaWVzSUQsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7IGlkOiBzdGF0ZS5zZXJpZXNJRCB9XHJcbiAgICB9KVxyXG5cclxuICAgIHsgbG9hZGluZ1N1YmpTZXIgJiYgPHA+bG9hZGluZy4uLjwvcD47IH1cclxuICAgIHsgZXJyU3VialNlciAmJiA8RXJyb3IgZXJyb3I9e2VyclN1YmpTZXJ9IC8+OyB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhU3VialNlcmllcyk7XHJcbiAgICBjb25zdCBnZXRTZXJpZXMgPSBkYXRhU3VialNlcmllcyAmJiBkYXRhU3VialNlcmllcy5zZXJpZXM7XHJcbiAgICBjb25zdCB7IHN1YmplY3RTZXJpZXMgfSA9IHsgLi4uZ2V0U2VyaWVzIH07XHJcbiAgICBjb25zb2xlLmxvZyhzdWJqZWN0U2VyaWVzKTtcclxuXHJcbiAgICBjb25zdCByZWZpbmVkU3ViamVjdFNlcmllcyA9XHJcbiAgICAgICAgc3ViamVjdFNlcmllcyAmJiByZW1vdmVUeXBlbmFtZShzdWJqZWN0U2VyaWVzKTtcclxuICAgIGNvbnN0IGdldFN1YmplY3RzT3B0aW9ucyA9XHJcbiAgICAgICAgcmVmaW5lZFN1YmplY3RTZXJpZXMgJiZcclxuICAgICAgICByZWZpbmVkU3ViamVjdFNlcmllcy5tYXAoaXRlbSA9PiAoeyB2YWx1ZTogaXRlbS5pZCwgbGFiZWw6IGl0ZW0uc3ViamVjdE5hbWUgfSkpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbdXBkYXRlU2NvcmUsIHsgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbih1cGRhdGVTY29yZU11dGF0aW9uKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0aW9uU2NoZW1hfVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgYWN0aW9ucywgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVTY29yZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdFNlcmllczogcmVmaW5lZFN1YmplY3RTZXJpZXMgJiYgZ2V0T2JqZWN0RnJvbUlEKHZhbHVlcy5zdWJqZWN0U2VyaWVzLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnJlc2V0Rm9ybSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHsoeyB2YWx1ZXMsIHNldEZpZWxkVmFsdWUsIGlzU3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW5pbVN0eWxlZFBhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ob3RlcyBkZXMgY2FuZGlkYXRzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEZvcm0gZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gYXJpYS1idXN5PXtpc1N1Ym1pdHRpbmd9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGxDb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVSZWFjdFNlbGVjdENoYW5nZX0gbmFtZT1cImVkdWNUeXBlSURcIiBzdHlsZXM9e2N1c3RvbVN0eWxlfSBwbGFjZWhvbGRlcj17XCJMZSB0eXBlIGQnZW5zZWlnbmVtZW50XCJ9IG9wdGlvbnM9e2dldEVkdWNUeXBlc09wdGlvbnN9IGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVSZWFjdFNlbGVjdENoYW5nZX0gbmFtZT1cInNlcmllc0lEXCIgc3R5bGVzPXtjdXN0b21TdHlsZX0gcGxhY2Vob2xkZXI9e1wiTGEgU2VyaWVcIn0gb3B0aW9ucz17Z2V0U2VyaWVzT3B0aW9uc30gZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gKHNldEZpZWxkVmFsdWUoJ3N1YmplY3RTZXJpZXMnLCB2YWx1ZSkpfSBuYW1lPVwic3ViamVjdFNlcmllc1wiIHN0eWxlcz17Y3VzdG9tU3R5bGV9IHBsYWNlaG9sZGVyPXtcIk1hdGllcmVcIn0gb3B0aW9ucz17Z2V0U3ViamVjdHNPcHRpb25zfSBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTeWdleElucHV0IG5hbWU9XCJjYW5kRXhhbVNlY3JldENvZGVcIiB0eXBlPVwidGV4dFwiIGxhYmVsPVwic0Fub255bWF0IGR1IGNhbmRpZGF0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTeWdleElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RBdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAwMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb3RlIGVuIGxhIG1hdGnDqHJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblN0eWxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlZhbGlke2lzU3VibWl0dGluZyA/ICdhdGlvbiBlbiBjb3VycycgOiAnZXInfTwvU3R5bGVkQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvblN0eWxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsbENvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NaW5pbVN0eWxlZFBhZ2U+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcblxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBFbnRlck5ld01hcmtzOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTdHlsZWRQYWdlID0gc3R5bGVkLmRpdmBcclxucGFkZGluZzowIDFyZW1cclxuIG1hcmdpbjowIGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gIGdyaWQtYXV0by1mbG93OnJvdztcclxuICAvKiBncmlkLXJvdy1nYXA6MXJlbTsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgbWluLXdpZHRoOiAzMHJlbTtcclxuICBcclxuYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG5oNHtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206MXJlbSA7XHJcbiAgcGFkZGluZzowLjVyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1CU307XHJcbiAgYmFja2dyb3VuZDoke3Byb3BzID0+IHByb3BzLnRoZW1lLnB1cmVXaGl0ZX07XHJcbndpZHRoOjEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czowLjVyZW07XHJcbiAgY29sb3I6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbn1cclxuLkZvcm0ge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE1pbmlTdHlsZWRQYWdlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBhZGRpbmc6MCAxcmVtO1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICBncmlkLWF1dG8tZmxvdzpyb3c7XHJcbiAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIG1pbi13aWR0aDogMzByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG4gIFxyXG4gIGg0e1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOjFyZW0gO1xyXG4gIHBhZGRpbmc6MC41cmVtIDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb3JtQlN9O1xyXG4gIGJhY2tncm91bmQ6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG53aWR0aDoxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6MC41cmVtO1xyXG4gIGNvbG9yOiR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19O1xyXG59XHJcbiAgLyogLkZvcm0ge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IE1pbmltU3R5bGVkUGFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAgbWFyZ2luOjAgYXV0bztcclxuICBcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gIGdyaWQtYXV0by1mbG93OnJvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgbWluLXdpZHRoOiAyNXJlbTtcclxuYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG5oNHtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206MXJlbSA7XHJcbiAgcGFkZGluZzowLjVyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1CU307XHJcbiAgYmFja2dyb3VuZDoke3Byb3BzID0+IHByb3BzLnRoZW1lLnB1cmVXaGl0ZX07XHJcbndpZHRoOjEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czowLjVyZW07XHJcbiAgY29sb3I6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbn1cclxuICAuRm9ybSB7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQmlnU3R5bGVkUGFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwYWRkaW5nOjAgMXJlbTtcclxuICAgbWFyZ2luOjAgYXV0bztcclxuICBcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gIGdyaWQtYXV0by1mbG93OnJvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgbWluLXdpZHRoOiAzMHJlbTtcclxuICBcclxuYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG4gIGg0e1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOjFyZW0gO1xyXG4gIHBhZGRpbmc6MC41cmVtIDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb3JtQlN9O1xyXG4gIGJhY2tncm91bmQ6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG53aWR0aDoxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6MC41cmVtO1xyXG4gIGNvbG9yOiR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19O1xyXG59XHJcbiAgLkZvcm0ge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgZmllbGRzZXQge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCaWdnZXN0U3R5bGVkUGFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwYWRkaW5nOjAgMXJlbTtcclxuICAgbWFyZ2luOjAgYXV0bztcclxuICBcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTB2dztcclxuICBtaW4td2lkdGg6IDMwcmVtO1xyXG5cclxuYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJlV2hpdGV9O1xyXG5oNHtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206MXJlbSA7XHJcbiAgcGFkZGluZzowLjVyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1CU307XHJcbiAgYmFja2dyb3VuZDoke3Byb3BzID0+IHByb3BzLnRoZW1lLnB1cmVXaGl0ZX07XHJcbndpZHRoOjEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czowLjVyZW07XHJcbiAgY29sb3I6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbn1cclxuICAuRm9ybSB7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0gXHJcbiAgZmllbGRzZXQge1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgeyBNaW5pbVN0eWxlZFBhZ2UsIE1pbmlTdHlsZWRQYWdlLCBTdHlsZWRQYWdlLCBCaWdTdHlsZWRQYWdlLCBCaWdnZXN0U3R5bGVkUGFnZSB9O1xyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gJ2Zvcm1payc7XHJcblxyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IGxvYWRpbmcgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICAvKiByb3RhdGU6IDA7ICovXHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgICAvKiByb3RhdGU6IDM2MGRlZzsgKi9cclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgY3VzdG9tU3R5bGUgPSB7XHJcbiAgY29udHJvbDogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgLi4ucHJvdmlkZWQsXHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInLFxyXG4gICAgYm9yZGVyOiBcIjBweCBzb2xpZCBibGFja1wiLFxyXG4gICAgYm9yZGVyQm90dG9tOiBcIjAuOXB4IHNvbGlkICMwNzgwYjdcIixcclxuICAgIGZvbnRTaXplOiAnMS42cmVtJyxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwJyxcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJvcmRlckJvdHRvbTogJyAycHggc29saWQgI2Q0MzUxYycsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzAnLFxyXG4gICAgfSwgLy8gYm9yZGVyIHN0eWxlIG9uIGhvdmVyXHJcbiAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgYm9yZGVyQm90dG9tOiAnIDJweCBzb2xpZCAjZDQzNTFjJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMCcsXHJcbiAgICB9LCAvLyBib3JkZXIgc3R5bGUgb24gaG92ZXJcclxuXHJcbiAgfSksXHJcbiAgb3B0aW9uOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAuLi5wcm92aWRlZCxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cclxuICB9KSxcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBwYWRkaW5nLXRvcDoxcmVtO1xyXG4gICAgLyogZGlzcGxheTpibG9jazsgKi9cclxuICAgIG1hcmdpbi10b3A6MC40cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMDlyZW0gc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTtcclxuICAgICB6LWluZGV4OjEwO1xyXG4gICAgIGZvbnQtZmFtaWx5OlwiUm9ib3RvIFNsYWJcIjtcclxuICAgIFxyXG4gICAgICY6dmFsaWQgKyBsYWJlbHtcclxuICAgICAgdG9wOi0uMjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZToxLjFyZW07XHJcbiAgICAgIGNvbG9yOiR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJpdGlzaEJsdWV9O1xyXG4gICAgIH1cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmYWN0aXZlIHtcclxuICAgICAgb3V0bGluZTogbm9uZTsgXHJcbiAgICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyaXRpc2hSZWR9O1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyArIGxhYmVse1xyXG4gICAgICB0b3A6LS4yNXJlbTtcclxuICAgICAgZm9udC1zaXplOjEuMXJlbTtcclxuICAgICAgY29sb3I6I2FhYTtcclxuICAgIH1cclxuICAgXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgYDtcclxuXHJcbmNvbnN0IElucHV0R3JvdXAgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBgO1xyXG5cclxuY29uc3QgU3R5bGVkTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDoxcmVtO1xyXG4gICAgdG9wOjEuNXJlbTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmdyZXlzWzJdfTtcclxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XHJcbiAgICBmb250LWZhbWlseTpcIlJvYm90byBTbGFiXCI7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXHJcbiAgIG1hcmdpbi10b3A6MXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDAuMDlyZW0gc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTtcclxuICAgICBvcHRpb24ge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgICAgICAgcGFkZGluZzogMHB4IDJweCAxcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMF19O1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOjAuNXJlbTtcclxuICAgICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icml0aXNoUmVkfTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbnBhZGRpbmctdG9wOjAuMnJlbTtcclxuZm9udC1zaXplOjEuM3JlbTtcclxuY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJpdGlzaFJlZH07XHJcbi8qIHBhZGRpbmctbGVmdDogMC41cmVtOyAqL1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUud2hpdGV9O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIHRleHQtc2hhZG93OjNweCA0cHggNXB4ICMwMDAwO1xyXG4gIC8qIHBhZGRpbmc6MC43cmVtIDsgKi9cclxuICAvKiBtYXJnaW4tYm90dG9tOiAxcmVtIGF1dG87ICovXHJcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iczJ9XHJcbiAgLyogbWFyZ2luLWJvdHRvbTogMS4xcmVtOyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3JleVsxMF19O1xyXG4gIH1cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3JleVsxM119O1xyXG4gIH0gICovXHJcbiAgXHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25TdHlsZWQgPSBzdHlsZWQuZGl2YFxyXG5wYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG5wYWRkaW5nLXRvcDogMXJlbTtcclxuYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgYm94LXNoYWRvdzoke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1CU307XHJcbiAgICBib3JkZXI6IDAuMDVyZW0gc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbiAgICBjb2xvcjogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19O1xyXG4gICAgYmFja2dyb3VuZDogJHsgcHJvcHMgPT4gcHJvcHMudGhlbWUucHVyZVdoaXRlfTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6ICAwLjhyZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIFxyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmx1ZXNbMl19XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNhbmR9O1xyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZGl2YFxyXG5tYXJnaW46IDAgMnJlbTtcclxucGFkZGluZzowLjZyZW07XHJcbmZvbnQtc2l6ZTogMS41cmVtO1xyXG5ib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuYm9yZGVyOiAwLjA5cmVtIHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbi8qIGJvcmRlci10b3A6IDEuNXJlbSBzb2xpZCAkeyAocHJvcHMpID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTsgKi9cclxuLyogYm9yZGVyLWxlZnQ6IDAuMDlyZW0gc29saWQgJHsgKHByb3BzKSA9PiBwcm9wcy50aGVtZS5ibHVlc1syXX07XHJcbmJvcmRlci1yaWdodDogMC4wOXJlbSBzb2xpZCAkeyAocHJvcHMpID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTtcclxuYm9yZGVyLWJvdHRvbTogMC4wOXJlbSBzb2xpZCAkeyAocHJvcHMpID0+IHByb3BzLnRoZW1lLmJsdWVzWzJdfTsgKi9cclxuYm94LXNoYWRvdzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvcm1CU307XHJcbm1pbi13aWR0aDogMjByZW07XHJcblxyXG5cclxuJltkaXNhYmxlZF0ge1xyXG4gICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBoZWlnaHQ6IDAuM3JlbTtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNzgwYjcgMCUsICNlMmIwNGEgMjAlLCAjMDc4MGI3IDEwMCUpO1xyXG4gICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMwMTkgMCUsICNlMmIwNGEgNTAlLCAjZmYzMDE5IDEwMCUpOyAqL1xyXG4gICAgfVxyXG4gICAgJlthcmlhLWJ1c3k9J3RydWUnXTo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcclxuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmNvbnN0IFN5Z2V4SW5wdXQgPSAoeyBsYWJlbCwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtmaWVsZCwgbWV0YV0gPSB1c2VGaWVsZChwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICA8U3R5bGVkSW5wdXQgY2xhc3NOYW1lPVwidGV4dC1pbnB1dFwiIHsuLi5maWVsZH0gey4uLnByb3BzfSByZXF1aXJlZCAvPlxyXG4gICAgICA8U3R5bGVkTGFiZWwgaHRtbEZvcj17cHJvcHMuaWQgfHwgcHJvcHMubmFtZX0+e2xhYmVsfTwvU3R5bGVkTGFiZWw+XHJcbiAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciA/IChcclxuICAgICAgICA8U3R5bGVkRXJyb3JNZXNzYWdlPnttZXRhLmVycm9yfTwvU3R5bGVkRXJyb3JNZXNzYWdlPlxyXG4gICAgICApIDogbnVsbH1cclxuXHJcbiAgICA8L0lucHV0R3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN5Z2V4U2VsZWN0ID0gKHsgbGFiZWwsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBbZmllbGQsIG1ldGFdID0gdXNlRmllbGQocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPFN0eWxlZExhYmVsIGh0bWxGb3I9e3Byb3BzLmlkIHx8IHByb3BzLm5hbWV9PntsYWJlbH08L1N0eWxlZExhYmVsPiAqL31cclxuICAgICAgPFN0eWxlZFNlbGVjdCB7Li4uZmllbGR9IHsuLi5wcm9wc30gLz5cclxuICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yID8gKFxyXG4gICAgICAgIDxTdHlsZWRFcnJvck1lc3NhZ2U+e21ldGEuZXJyb3J9PC9TdHlsZWRFcnJvck1lc3NhZ2U+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydFxyXG57XHJcbiAgU3R5bGVkTGFiZWwsXHJcbiAgICBTdHlsZWRCdXR0b24sXHJcbiAgICBjdXN0b21TdHlsZSxcclxuICAgIFN5Z2V4U2VsZWN0LFxyXG4gICAgQnV0dG9uU3R5bGVkLFxyXG4gICAgU3lnZXhJbnB1dCxcclxuICAgIFN0eWxlZEZvcm1cclxufSIsIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgdXNlRm9ybSA9IChpbml0aWFsVmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZXMpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCB0eXBlIH0gPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCB2YWwgPSB0eXBlID09PSBcIm51bWJlclwiID8gcGFyc2VJbnQodmFsdWUpIDogdmFsdWU7XHJcbiAgICAgICAgc2V0U3RhdGUoc3RhdGUgPT4gKHsgLi4uc3RhdGUsIFtuYW1lXTogdmFsIH0pKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVhY3RTZWxlY3RDaGFuZ2UgPSAodmFsdWUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgdmFsdWUgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyBhY3Rpb24gfSk7XHJcbiAgICAgICAgc2V0U3RhdGUoc3RhdGUgPT4gKHsgLi4uc3RhdGUsIFthY3Rpb24ubmFtZV06IHZhbHVlLnZhbHVlIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlLCBoYW5kbGVSZWFjdFNlbGVjdENoYW5nZSwgaGFuZGxlSW5wdXRDaGFuZ2VdXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ybSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9