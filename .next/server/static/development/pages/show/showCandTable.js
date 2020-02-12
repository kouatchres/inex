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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/show/showCandTable.jsx":
/*!**************************************!*\
  !*** ./pages/show/showCandTable.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_tableGrid_RemoteDataGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/tableGrid/RemoteDataGrid */ "./src/components/tableGrid/RemoteDataGrid.jsx");
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\pages\\show\\showCandTable.jsx";



function showCandTable(_ref) {
  var query = _ref.query;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_tableGrid_RemoteDataGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (showCandTable);

/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Queries.jsx":
/*!****************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Queries.jsx ***!
  \****************************************************************/
/*! exports provided: getAllSubjectsOfASeriesQuery, getAllSubjectTypesQuery, getAllGendersQuery, getAllEducTypeQuery, getAllRegionsQuery, getAllSeriesOfAnEducationTypeQuery, getAllExamsQuery, getAllSessionsQuery, getDivisionsOfARegionQuery, getAllDivisionsQuery, getSubDivisionsOfADivisionQuery, getTownsOfASubDivisionQuery, getCentersOfATownQuery, getAllEducationTypesQuery, getAllSubjectsQuery, getAllRanksQuery, getAllEducTypesOfAnExam, getAllCandidatesQuery, getAllCentersQuery, getSingleRegionQuery, getACenterAdminQuery, getAllSeriesQuery, getAllSubjectsOfAnEducTypeQuery, getScoreID, getRegistrations, singleCandidateQuery1, singleCandidateQuery, viewSingleCandidateQuery, singleCenterQuery, singleCenterAdminQuery, singleExamQuery, singleTownQuery, schoolDataQuery, singleSubDivisionQuery, dataForAverage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfASeriesQuery", function() { return getAllSubjectsOfASeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectTypesQuery", function() { return getAllSubjectTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGendersQuery", function() { return getAllGendersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducTypeQuery", function() { return getAllEducTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsQuery", function() { return getAllRegionsQuery; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducTypesOfAnExam", function() { return getAllEducTypesOfAnExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidatesQuery", function() { return getAllCandidatesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCentersQuery", function() { return getAllCentersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleRegionQuery", function() { return getSingleRegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getACenterAdminQuery", function() { return getACenterAdminQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSeriesQuery", function() { return getAllSeriesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfAnEducTypeQuery", function() { return getAllSubjectsOfAnEducTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreID", function() { return getScoreID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrations", function() { return getRegistrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery1", function() { return singleCandidateQuery1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery", function() { return singleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSingleCandidateQuery", function() { return viewSingleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterQuery", function() { return singleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterAdminQuery", function() { return singleCenterAdminQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExamQuery", function() { return singleExamQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleTownQuery", function() { return singleTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schoolDataQuery", function() { return schoolDataQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubDivisionQuery", function() { return singleSubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataForAverage", function() { return dataForAverage; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n\tquery dataForAverage($candExamSecretCode: String!) {\n\t\tscores(candExamSecretCode: $candExamSecretCode) {\n\t\t\tid\n\t\t\tsubjectAve\n\t\t\tcoeff\n\t\t}\n\t}\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n\tquery singleCenterAdminQuery($id: ID!) {\n\t\tcenterAdmin(id: $id) {\n\t\t\tcenterAdminName\n\t\t\tcenterAdminCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n\tquery getSingleRegionQuery($id: ID!) {\n\t\tregion(id: $id) {\n\t\t\tregName\n\t\t\tregCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n\tquery singleSubDivisionQuery($id: ID!) {\n\t\tsubDivision(id: $id) {\n\t\t\tsubDivName\n\t\t\tsubDivCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n\tquery getRegistrations($candExamSecretCode: String!) {\n\t\tregistration(candExamSecretCode: $candExamSecretCode) {\n\t\t\tid\n\t\t\tscores {\n\t\t\t\tid\n\t\t\t\tsubject {\n\t\t\t\t\tid\n\t\t\t\t\tsubjectName\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n\tquery getScoreID($candExamSecretCode: String!) {\n\t\tscores(candExamSecretCode: $candExamSecretCode) {\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n\tquery viewSingleCandidateQuery($candCode: String!) {\n\t\tsingleCandidate(candCode: $candCode) {\n\t\t\tid\n\t\t\tcand1stName\n\t\t\tcand2ndName\n\t\t\tcand3rdName\n\t\t\tcandCode\n\t\t\temail\n\t\t\timage\n\t\t\tphoneNumb\n\t\t\tplaceOfBirth\n\t\t\tgender {\n\t\t\t\tgenderName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n\tquery singleCandidateQuery($id: ID!) {\n\t\tcandidate(id: $id) {\n\t\t\tid\n\t\t\tcand1stName\n\t\t\tcand2ndName\n\t\t\tcand3rdName\n\t\t\tcandCode\n\t\t\temail\n\t\t\timage\n\t\t\tphoneNumb\n\t\t\tplaceOfBirth\n\t\t\tgender {\n\t\t\t\tgenderName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n\tquery singleCandidateQuery1($id: ID!) {\n\t\tcandidate(id: $id) {\n\t\t\tcand1stName\n\t\t\tcand2ndName\n\t\t\tcand3rdName\n\t\t\tcandCode\n\t\t\temail\n\t\t\timage\n\t\t\tphoneNumb\n\t\t\tplaceOfBirth\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n\tquery singleExamQuery($id: ID!) {\n\t\texam(id: $id) {\n\t\t\texamName\n\t\t\texamCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n\tquery singleTownQuery($id: ID!) {\n\t\ttown(id: $id) {\n\t\t\ttownName\n\t\t\ttownCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n\tquery singleCenterQuery($id: ID!) {\n\t\tcenter(id: $id) {\n\t\t\tcenterName\n\t\t\tcenterCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllCandidatesQuery {\n\t\tcandidates(orderBy: cand1stName_ASC) {\n\t\t\tcand1stName\n\t\t\tcand2ndName\n\t\t\tcand3rdName\n\t\t\temail\n\t\t\timage\n\t\t\tphoneNumb\n\t\t\tplaceOfBirth\n\t\t\tcandCode\n\t\t\tid\n\t\t\t\n\t\t}\n\t}\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllCentersQuery {\n\t\tcenters(orderBy: centerName_ASC) {\n\t\t\tid\n\t\t\tcenterName\n\t\t\tcenterCode\n\t\t}\n\t}\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllSubjectTypesQuery {\n\t\tsubjectTypes(orderBy: subjectTypeName_DESC) {\n\t\t\tid\n\t\t\tsubjectTypeName\n\t\t\tsubjectTypeCode\n\t\t}\n\t}\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n\tquery getCentersOfATownQuery($id: ID!) {\n\t\ttown(id: $id) {\n\t\t\ttownName\n\t\t\tid\n\t\t\tcenter(orderBy: centerName_ASC) {\n\t\t\t\tcenterName\n\t\t\t\tcenterCode\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n\tquery getTownsOfASubDivision($id: ID!) {\n\t\tsubDivision(id: $id) {\n\t\t\tsubDivName\n\t\t\tid\n\t\t\ttown(orderBy: townName_ASC) {\n\t\t\t\ttownName\n\t\t\t\ttownCode\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n\tquery getSubDivisionsOfADivisionQuery($id: ID!) {\n\t\tdivision(id: $id) {\n\t\t\tdivName\n\t\t\tid\n\t\t\tsubDivision(orderBy: subDivName_ASC) {\n\t\t\t\tsubDivName\n\t\t\t\tsubDivCode\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n\tquery getDivisionsOfARegionQuery($id: ID!) {\n\t\tregion(id: $id) {\n\t\t\tregName\n\t\t\tid\n\t\t\tdivision(orderBy: divName_ASC) {\n\t\t\t\tdivName\n\t\t\t\tdivCode\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllDivisionsQuery {\n\t\tdivisions(orderBy: divName_ASC) {\n\t\t\tdivName\n\t\t\tdivCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllSessionsQuery {\n\t\tsessions(orderBy: createdAt_DESC) {\n\t\t\tsessionName\n\t\t\tsessionCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllExamsQuery {\n\t\texams(orderBy: examName_ASC) {\n\t\t\texamName\n\t\t\texamCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllSubjectsOfASeriesQuery($id: ID!) {\n\t\tseries(id: $id) {\n\t\t\tid\n\t\t\tseriesName\n\t\t\tsubjectSeries {\n\t\t\t\tid\n\t\t\t\tsubjectName\n\t\t\t\tsubjectCode\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllSubjectsOfAnEducTypeQuery($id: ID!) {\n\t\teducationType(id: $id) {\n\t\t\tid\n\t\t\teducationTypeName\n\t\t\tsubject(orderBy: subjectName_ASC) {\n\t\t\t\tid\n\t\t\t\tsubjectName\n\t\t\t\tsubjectCode\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllSeriesQuery {\n\t\tserieses(orderBy: seriesName_ASC) {\n\t\t\tid\n\t\t\tseriesName\n\t\t\tseriesCode\n\t\t}\n\t}\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllSeriesOfAnEducationTypeQuery($id: ID!) {\n\t\teducationType(id: $id) {\n\t\t\tid\n\t\t\teducationTypeName\n\t\t\tseries(orderBy: seriesName_ASC) {\n\t\t\t\tid\n\t\t\t\tseriesName\n\t\t\t\tseriesCode\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllEducationTypesQuery {\n\t\teducationTypes {\n\t\t\teducationTypeName\n\t\t\teducationTypeCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllGendersQuery {\n\t\tgenders(orderBy: genderName_ASC) {\n\t\t\tid\n\t\t\tgenderName\n\t\t\tgenderCode\n\t\t}\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllSubjectsQuery {\n\t\tsubjects(orderBy: subjectName_ASC) {\n\t\t\tsubjectName\n\t\t\tsubjectCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllRanksQuery {\n\t\tranks(orderBy: rankName_ASC) {\n\t\t\trankName\n\t\t\trankCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tquery getAllRegionsQuery {\n\t\tregions(orderBy: regName_ASC) {\n\t\t\tregName\n\t\t\tregCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tquery getACenterAdminQuery($authCode: String!) {\n\t\tcenterAdminSignIn(authCode: $authCode) {\n\t\t\tid\n\t\t\tauthCode\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tquery schoolDataQuery {\n\t\tcandidates {\n\t\t\tid\n\t\t\tcand1stName\n\t\t\tregistration {\n\t\t\t\tid\n\t\t\t\tcandExamSecretCode\n\t\t\t\tscores {\n\t\t\t\t\tid\n\t\t\t\t\tsubjectAve\n\t\t\t\t\tsubjectSeries {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tsubjectName\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var schoolDataQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var getACenterAdminQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var getAllRegionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());
var getAllRanksQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject4());
var getAllSubjectsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject5());
var getAllGendersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject6());
var getAllEducationTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject7());
var getAllSeriesOfAnEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject8());
var getAllSeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject9());
var getAllSubjectsOfAnEducTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject10());
var getAllSubjectsOfASeriesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject11());
var getAllExamsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject12());
var getAllSessionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject13());
var getAllDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject14());
var getDivisionsOfARegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject15());
var getSubDivisionsOfADivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject16());
var getTownsOfASubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject17());
var getCentersOfATownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject18());
var getAllSubjectTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject19());
var getAllCentersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject20());
var getAllCandidatesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject21()); ///*****************Single object queries */

var singleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject22());
var singleTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject23());
var singleExamQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject24());
var singleCandidateQuery1 = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject25());
var singleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject26());
var viewSingleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject27());
var getScoreID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject28());
var getRegistrations = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject29());
var singleSubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject30());
var getSingleRegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject31());
var singleCenterAdminQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject32());
var dataForAverage = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject33()); ///*****************End Single object queries */



/***/ }),

/***/ "./src/components/tableGrid/Columns.jsx":
/*!**********************************************!*\
  !*** ./src/components/tableGrid/Columns.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tubular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tubular-common */ "tubular-common");
/* harmony import */ var tubular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tubular_common__WEBPACK_IMPORTED_MODULE_0__);

var columns = [new tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnModel"]("cand1stName", {
  dataType: tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnDataType"].text,
  filterable: true,
  isKey: true,
  label: "First Name",
  sortDirection: tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnSortDirection"].Ascending,
  sortOrder: 1,
  sortable: true
}), new tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnModel"]("cand2ndName", {
  dataType: tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnDataType"].text,
  filterable: true,
  isKey: true,
  label: "Last Name",
  sortDirection: tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnSortDirection"].Ascending,
  sortOrder: 1,
  sortable: true
}), new tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnModel"]("email", {
  dataType: tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnDataType"].text,
  filterable: true,
  isKey: true,
  label: "Email",
  sortDirection: tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnSortDirection"].Ascending,
  sortOrder: 1,
  sortable: true
}), new tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnModel"]("placeOfBirth", {
  dataType: tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnDataType"].text,
  filterable: true,
  isKey: true,
  label: "Birth Place",
  sortDirection: tubular_common__WEBPACK_IMPORTED_MODULE_0__["ColumnSortDirection"].Ascending,
  sortOrder: 1,
  sortable: true
})];
/* harmony default export */ __webpack_exports__["default"] = (columns);

/***/ }),

/***/ "./src/components/tableGrid/RemoteDataGrid.jsx":
/*!*****************************************************!*\
  !*** ./src/components/tableGrid/RemoteDataGrid.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Columns */ "./src/components/tableGrid/Columns.jsx");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tubular_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tubular-react */ "tubular-react");
/* harmony import */ var tubular_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tubular_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\Inex Node GraphQL\\inex-graphql\\src\\components\\tableGrid\\RemoteDataGrid.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var GridStyles = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "RemoteDataGrid__GridStyles",
  componentId: "djswi0-0"
})(["background:#358;font-size:2.9rem;"]);

var RemoteDataGrid =
/*#__PURE__*/
function (_Component) {
  _inherits(RemoteDataGrid, _Component);

  function RemoteDataGrid() {
    _classCallCheck(this, RemoteDataGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(RemoteDataGrid).apply(this, arguments));
  }

  _createClass(RemoteDataGrid, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_4__["getAllCandidatesQuery"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        {
          loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, "Loading...");
        }
        {
          error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          });
        }
        console.log(data);
        var candidates = data.candidates;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GridStyles, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tubular_react__WEBPACK_IMPORTED_MODULE_3__["DataGrid"], {
          gridName: "Tubular-React",
          columns: _Columns__WEBPACK_IMPORTED_MODULE_1__["default"],
          dataSource: candidates,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }));
      });
    }
  }]);

  return RemoteDataGrid;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RemoteDataGrid);

/***/ }),

/***/ 4:
/*!********************************************!*\
  !*** multi ./pages/show/showCandTable.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/show/showCandTable.jsx */"./pages/show/showCandTable.jsx");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "tubular-common":
/*!*********************************!*\
  !*** external "tubular-common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tubular-common");

/***/ }),

/***/ "tubular-react":
/*!********************************!*\
  !*** external "tubular-react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tubular-react");

/***/ })

/******/ });
//# sourceMappingURL=showCandTable.js.map