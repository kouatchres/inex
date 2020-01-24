webpackHotUpdate("static\\development\\pages\\creates\\newTown.js",{

/***/ "./src/components/queries&Mutations&Functions/Mutations.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Mutations.jsx ***!
  \******************************************************************/
/*! exports provided: createCandidateMutation, createNewSubjectMutation, createNewSubjectTypeMutation, createTownMutation, createCenterAdminMutation, createDivisionMutation, createRegistrationMutation, createCenterMutation, createEducationTypeMutation, createSeriesMutation, createSubDivisionMutation, createNewSessionMutation, createNewRankMutation, createNewReportMutation, createNewRegionMutation, createExamMutation, registerSubjectSeriesMutation, updateCenterMutation, updateTownMutation, updateExamMutation, updateSubDivisionMutation, updateCandidateMutation, signInCandidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCandidateMutation", function() { return createCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSubjectMutation", function() { return createNewSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSubjectTypeMutation", function() { return createNewSubjectTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTownMutation", function() { return createTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterAdminMutation", function() { return createCenterAdminMutation; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExamMutation", function() { return createExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSubjectSeriesMutation", function() { return registerSubjectSeriesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCenterMutation", function() { return updateCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTownMutation", function() { return updateTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExamMutation", function() { return updateExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubDivisionMutation", function() { return updateSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCandidateMutation", function() { return updateCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInCandidate", function() { return signInCandidate; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n\tmutation updateCandidateMutation(\n\t\t$id: ID!\n\t\t$cand1stName: String\n\t\t$cand2ndName: String\n\t\t$cand3rdName: String\n\t\t$candCode: String\n\t\t$email: String\n\t\t$image: String\n\t\t$phoneNumb: Int\n\t\t$placeOfBirth: String\n\t) {\n\t\tupdateCandidate(\n\t\t\tid: $id\n\t\t\tcand1stName: $cand1stName\n\t\t\tcand2ndName: $cand2ndName\n\t\t\tcand3rdName: $cand3rdName\n\t\t\tcandCode: $candCode\n\t\t\temail: $email\n\t\t\timage: $image\n\t\t\tphoneNumb: $phoneNumb\n\t\t\tplaceOfBirth: $placeOfBirth\n\t\t) {\n\t\t\tid\n\t\t\tcand1stName\n\t\t\tcand2ndName\n\t\t\tcand3rdName\n\t\t\timage\n\t\t}\n\t}\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n\tmutation updateExamMutation($id: ID!, $examName: String, $examCode: String) {\n\t\tupdateExam(id: $id, examName: $examName, examCode: $examCode) {\n\t\t\texamName\n\t\t\texamCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n\tmutation updateTownMutation($id: ID!, $townName: String, $townCode: String) {\n\t\tupdateTown(id: $id, townName: $townName, townCode: $townCode) {\n\t\t\ttownName\n\t\t\ttownCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n\tmutation updateCenterMutation($id: ID!, $centerName: String, $centerCode: String) {\n\t\tupdateCenter(id: $id, centerName: $centerName, centerCode: $centerCode) {\n\t\t\tid\n\t\t\tcenterName\n\t\t\tcenterCode\n\t\t}\n\t}\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n\tmutation updateSubDivisionMutation($id: ID!, $subDivName: String, $subDivCode: String) {\n\t\tupdateSubDivision(id: $id, subDivName: $subDivName, subDivCode: $subDivCode) {\n\t\t\tsubDivName\n\t\t\tsubDivCode\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n\tmutation createCandidateMutation(\n\t\t$cand1stName: String!\n\t\t$cand2ndName: String\n\t\t$cand3rdName: String\n\t\t$candCode: String\n\t\t$email: String!\n\t\t$image: String!\n\t\t$phoneNumb: Int\n\t\t$placeOfBirth: String\n\t\t$gender: GenderCreateWithoutCandidateInput!\n\t) {\n\t\tcreateCandidate(\n\t\t\tcand1stName: $cand1stName\n\t\t\tcand2ndName: $cand2ndName\n\t\t\tcand3rdName: $cand3rdName\n\t\t\tcandCode: $candCode\n\t\t\temail: $email\n\t\t\timage: $image\n\t\t\tphoneNumb: $phoneNumb\n\t\t\tplaceOfBirth: $placeOfBirth\n\t\t\tgender: $gender\n\t\t) {\n\t\t\tid\n\t\t\tcand1stName\n\t\t\tcand2ndName\n\t\t\tcandCode\n\t\t\timage\n\t\t}\n\t}\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n\tmutation registerSubjectSeriesMutation($subject: SubjectWhereUniqueInput!, $series: SeriesWhereUniqueInput!) {\n\t\tcreateSubjectSeries(subject: $subject, series: $series) {\n\t\t\tid\n\t\t\tseries {\n\t\t\t\tid\n\t\t\t\tseriesName\n\t\t\t\tsubjectSeries {\n\t\t\t\t\tid\n\t\t\t\t\tsubject {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tsubjectName\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n\tmutation createExamMutation($examName: String!, $examCode: String!) {\n\t\tcreateExam(examName: $examName, examCode: $examCode) {\n\t\t\tid\n\t\t\texamName\n\t\t}\n\t}\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewRegionMutation($regName: String!, $regCode: String!) {\n\t\tcreateRegion(regName: $regName, regCode: $regCode) {\n\t\t\tid\n\t\t\tregName\n\t\t}\n\t}\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewRankMutation($rankName: String!, $rankCode: String!) {\n\t\tcreateRank(rankName: $rankName, rankCode: $rankCode) {\n\t\t\tid\n\t\t\trankName\n\t\t}\n\t}\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewSessionMutation($sessionName: String!, $sessionCode: String!) {\n\t\tcreateSession(sessionName: $sessionName, sessionCode: $sessionCode) {\n\t\t\tid\n\t\t\tsessionName\n\t\t}\n\t}\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n\tmutation createSubDivisionMutation(\n\t\t$subDivName: String!\n\t\t$subDivCode: String!\n\t\t$division: DivisionWhereUniqueInput!\n\t) {\n\t\tcreateSubDivision(subDivName: $subDivName, subDivCode: $subDivCode, division: $division) {\n\t\t\tid\n\t\t\tsubDivName\n\t\t\tsubDivCode\n\t\t\tdivision {\n\t\t\t\tdivName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewSubjectMutation(\n\t\t$subjectName: String!\n\t\t$subjectCode: String!\n\t\t$subjectType: SubjectTypeWhereUniqueInput!\n\t) {\n\t\tcreateSubject(subjectName: $subjectName, subjectCode: $subjectCode, subjectType: $subjectType) {\n\t\t\tsubjectCode\n\t\t\tsubjectName\n\t\t}\n\t}\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewSubjectTypeMutation($subjectTypeName: String!, $subjectTypeCode: String!) {\n\t\tcreateSubjectType(subjectTypeName: $subjectTypeName, subjectTypeCode: $subjectTypeCode) {\n\t\t\tid\n\t\t\tsubjectTypeName\n\t\t}\n\t}\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tmutation createTownMutation($townName: String!, $townCode: String!, $subDiv: SubDivisionWhereUniqueInput!) {\n\t\tcreateTown(townName: $townName, townCode: $townCode, subDiv: $subDiv) {\n\t\t\tid\n\t\t\ttownName\n\t\t\ttownCode\n\t\t\tsubDiv {\n\t\t\t\tsubDivName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmutation createEducationTypeMutation(\n\t\t$educationTypeName: String!\n\t\t$exam: ExamWhereUniqueInput!\n\t\t$educationTypeCode: String!\n\t) {\n\t\tcreateEducationType(educationTypeName: $educationTypeName, exam: $exam, educationTypeCode: $educationTypeCode) {\n\t\t\tid\n\t\t\teducationTypeName\n\t\t}\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tmutation createSeriesMutation(\n\t\t$seriesName: String!\n\t\t$seriesCode: String!\n\t\t$educationType: EducationTypeWhereUniqueInput!\n\t) {\n\t\tcreateSeries(seriesName: $seriesName, seriesCode: $seriesCode, educationType: $educationType) {\n\t\t\tid\n\t\t\tseriesName\n\t\t}\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tmutation createCenterMutation(\n\t\t$centerName: String!\n\t\t$centerNumber: Int\n\t\t$centerCode: String!\n\t\t$town: TownWhereUniqueInput!\n\t) {\n\t\tcreateCenter(centerName: $centerName, centerNumber: $centerNumber, centerCode: $centerCode, town: $town) {\n\t\t\tid\n\t\t\tcenterName\n\t\t\tcenterCode\n\t\t\ttown {\n\t\t\t\ttownName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tmutation createDivisionMutation($divName: String!, $divCode: String!, $region: RegionCreateWithoutDivisionInput!) {\n\t\tcreateDivision(divName: $divName, divCode: $divCode, region: $region) {\n\t\t\tid\n\t\t\tdivName\n\t\t}\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tmutation createCenterAdminMutation(\n\t\t$exam: ExamWhereUniqueInput!\n\t\t$rank: RankWhereUniqueInput!\n\t\t$session: SessionWhereUniqueInput!\n\t\t$center: CenterWhereUniqueInput!\n\t\t$authName: String!\n\t\t$authCode: String!\n\t\t$authCNI: String!\n\t\t$authPhone: Int!\n\t\t$authMatricule: String!\n\t) {\n\t\tcreateCenterAdmin(\n\t\t\texam: $exam\n\t\t\trank: $rank\n\t\t\tsession: $session\n\t\t\tcenter: $center\n\t\t\tauthCNI: $authCNI\n\t\t\tauthName: $authName\n\t\t\tauthCode: $authCode\n\t\t\tauthPhone: $authPhone\n\t\t\tauthMatricule: $authMatricule\n\t\t) {\n\t\t\tauthName\n\t\t\tauthCode\n\t\t\tauthPhone\n\t\t}\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tmutation createRegistrationMutation(\n\t\t$exam: ExamWhereUniqueInput!\n\t\t$series: SeriesWhereUniqueInput!\n\t\t$candidate: CandidateWhereUniqueInput!\n\t\t$session: SessionWhereUniqueInput!\n\t\t$center: CenterWhereUniqueInput!\n\t) {\n\t\tcreateRegistration(exam: $exam, series: $series, session: $session, candidate: $candidate, center: $center) {\n\t\t\tid\n\t\t\tseries {\n\t\t\t\tseriesName\n\t\t\t}\n\t\t\tcandidate {\n\t\t\t\tid\n\t\t\t\tcand1stName\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tmutation createNewReportMutation(\n\t\t$reportImage: String!\n\t\t$reportName: String!\n\t\t$centerAdmin: CenterAdminWhereUniqueInput!\n\t) {\n\t\tcreateReport(reportImage: $reportImage, reportName: $reportName, centerAdmin: $centerAdmin) {\n\t\t\tid\n\t\t\treportName\n\t\t\treportImage\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tmutation signInCandidate($candCode: String!) {\n\t\tcandidateSignIn(candCode: $candCode) {\n\t\t\tid\n\t\t\tcand1stName\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 //************create mutations  */

var signInCandidate = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject()); //

var createNewReportMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var createRegistrationMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());
var createCenterAdminMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject4());
var createDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject5());
var createCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject6());
var createSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject7());
var createEducationTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject8());
var createTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject9());
var createNewSubjectTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject10());
var createNewSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject11());
var createSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject12());
var createNewSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject13());
var createNewRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject14());
var createNewRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject15());
var createExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject16());
var registerSubjectSeriesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject17());
var createCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject18()); //************create mutations  */
////**************Update mutations */

var updateSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject19());
var updateCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject20());
var updateTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject21());
var updateExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject22());
var updateCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject23()); ////**************Update mutations */



/***/ })

})
//# sourceMappingURL=newTown.js.285ed2f4394f04d5e766.hot-update.js.map