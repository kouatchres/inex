import gql from 'graphql-tag';

const getACenterAdminQuery = gql`
  query getACenterAdminQuery($authCode: String!) {
    centerAdminSignIn(authCode: $authCode) {
      id
      authCode
    }
  }
`;

const singleEducationTypeQuery = gql`
  query singleEducationTypeQuery($id: ID!) {
    educationType(id: $id) {
      educationTypeName
      educationTypeCode
      id
    }
  }
`;

const singleSubjectTypeQuery = gql`
  query singleSubjectTypeQuery($id: ID!) {
    subjectType(id: $id) {
      subjectTypeName
      subjectTypeCode
      id
    }
  }
`;

const getAllCenterAdminsQuery = gql`
  query getAllCenterAdminsQuery {
    centerAdmins {
      id
      authName
      authCode
    }
  }
`;

const getAllEducationTypesQuery = gql`
  query getAllEducationTypesQuery {
    educationTypes(orderBy: educationTypeName_ASC) {
      id
      educationTypeName
      educationTypeCode
    }
  }
`;
const getAllRegionsQuery = gql`
  query getAllRegionsQuery {
    regions(orderBy: regName_ASC) {
      regName
      regCode
      id
    }
  }
`;
const getCenterResultsQuery = gql`
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

const getCandidateResultsQuery = gql`
  query getCandidateResultsQuery($id: ID!) {
    registration(id: $id) {
      id
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
      centerExamSession {
      center{
        id 
         centerName}
      exam {
       id
        examName
      }
      session {
        id
        sessionName
      }}
      series {
        id
        seriesName
        subjectSeries {
          id
          subjectName
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
`;

const getAllCenterResultsQuery = gql`
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

const getEachCandidateResultsQuery = gql`
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

const getCandidateRegistrationIDQuery = gql`
  query getCandidateRegistrationIDQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $candidate: CandidateWhereUniqueInput!
  ) {
    candidateRegistrationID(centerExamSession: $centerExamSession, candidate: $candidate) {
      id
    }
  }
`;

const getCenterRegistrationIDsQuery = gql`
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

const centerExamSessionSeriesForResultsQuery = gql`
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

const getCandidateByCandCodeQuery = gql`
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

const getAllRanksQuery = gql`
  query getAllRanksQuery {
    ranks(orderBy: rankName_ASC) {
      rankName
      rankCode
      id
    }
  }
`;

const getAllSubjectsQuery = gql`
  query getAllSubjectsQuery {
    subjects(orderBy: subjectName_ASC) {
      subjectName
      subjectCode
      id
    }
  }
`;

const getAllGendersQuery = gql`
  query getAllGendersQuery {
    genders(orderBy: genderName_ASC) {
      id
      genderName
      genderCode
    }
  }
`;

const getAllSeriesOfAnEducationTypeQuery = gql`
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

const getAllSeriesQuery = gql`
  query getAllSeriesQuery {
    serieses(orderBy: seriesName_ASC) {
      id
      seriesName
      seriesCode
    }
  }
`;
const getAllSubjectsOfAnEducTypeQuery = gql`
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
const getAllSubjectsOfASeriesQuery = gql`
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

const getAllExamsQuery = gql`
  query getAllExamsQuery {
    exams(orderBy: examName_ASC) {
      examName
      examCode
      id
    }
  }
`;

const getAllSessionsQuery = gql`
  query getAllSessionsQuery {
    sessions(orderBy: createdAt_DESC) {
      sessionName
      sessionCode
      id
    }
  }
`;
const getAllDivisionsQuery = gql`
  query getAllDivisionsQuery {
    divisions(orderBy: divName_ASC) {
      divName
      divCode
      id
    }
  }
`;
const getDivisionsOfARegionQuery = gql`
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

const getSubDivisionsOfADivisionQuery = gql`
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

const getAllSubDivisionsQuery = gql`
  query getAllSubDivisionsQuery {
    subDivision(orderBy: subDivName_ASC) {
      subDivName
      subDivCode
      id
    }
  }
`;

const getTownsOfASubDivisionQuery = gql`
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

const getCentersOfATownQuery = gql`
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

const getAllSubjectTypesQuery = gql`
  query getAllSubjectTypesQuery {
    subjectTypes(orderBy: subjectTypeName_DESC) {
      id
      subjectTypeName
      subjectTypeCode
    }
  }
`;
const getAllCentersQuery = gql`
  query getAllCentersQuery {
    centers(orderBy: centerName_ASC) {
      id
      centerName
      centerCode
    }
  }
`;

const getAllCandidatesQuery = gql`
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
`;

///*****************Single object queries */

const singleCenterQuery = gql`
  query singleCenterQuery($id: ID!) {
    center(id: $id) {
      centerName
      centerNumber
      centerCode
      id
    }
  }
`;

const singleTownQuery = gql`
  query singleTownQuery($id: ID!) {
    town(id: $id) {
      townName
      townCode
      id
    }
  }
`;

const getSingleCenterExamSessionQuery = gql`
  query getSingleCenterExamSessionQuery(
    $center: CenterWhereUniqueInput!
    $exam: ExamWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    centerExamSessions(exam: $exam, center: $center, session: $session) {
      id

    }
  }
`;

const getCenterExamSessionSeriesQuery = gql`
  query getCenterExamSessionSeriesQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $series: SeriesWhereUniqueInput!
  ) {
    centerExamSessionSerieses(series: $series, centerExamSession: $centerExamSession) {
      id

    }
  }
`;

const singleExamQuery = gql`
  query singleExamQuery($id: ID!) {
    exam(id: $id) {
      examName
      examCode
      id
    }
  }
`;

const singleCandidateQuery1 = gql`
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

const singleCandidateQuery = gql`
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

const viewSingleCandidateQuery = gql`
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

const getScoreID = gql`
  query getScoreID($candExamSecretCode: String!) {
    scores(candExamSecretCode: $candExamSecretCode) {
      id
    }
  }
`;

const getRegistrations = gql`
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

const singleSubDivisionQuery = gql`
  query singleSubDivisionQuery($id: ID!) {
    subDivision(id: $id) {
      subDivName
      subDivCode
      id
    }
  }
`;

const getSingleRegionQuery = gql`
  query getSingleRegionQuery($id: ID!) {
    region(id: $id) {
      regName
      regCode
      id
    }
  }
`;

const singleGenderQuery = gql`
  query singleGenderQuery($id: ID!) {
    gender(id: $id) {
      genderName
      genderCode
      id
    }
  }
`;

const singleSeriesQuery = gql`
  query singleSeriesQuery($id: ID!) {
    series(id: $id) {
      seriesName
      seriesCode
      id
    }
  }
`;

const singleCenterAdminQuery = gql`
  query singleCenterAdminQuery($id: ID!) {
    centerAdmin(id: $id) {
      centerAdminName
      centerAdminCode
      id
    }
  }
`;
const dataForAverage = gql`
  query dataForAverage($candExamSecretCode: String!) {
    scores(candExamSecretCode: $candExamSecretCode) {
      id
      subjectAve
      coeff
    }
  }
`;

const singleDivisionQuery = gql`
  query singleDivisionQuery($id: ID!) {
    division(id: $id) {
      divName
      divCode
      id
    }
  }
`;

const singleRankQuery = gql`
  query singleRankQuery($id: ID!) {
    rank(id: $id) {
      rankName
      rankCode
      id
    }
  }
`;

const singleSubjectQuery = gql`
  query singleSubjectQuery($id: ID!) {
    subject(id: $id) {
      subjectName
      subjectCode
      id
    }
  }
`;

const singleSessionQuery = gql`
  query singleSessionQuery($id: ID!) {
    session(id: $id) {
      sessionName
      sessionCode
      id
    }
  }
`;
///*****************End Single object queries */

export {
  getAllSubjectsOfASeriesQuery,
  getAllSubjectTypesQuery,
  getAllGendersQuery,
  getAllEducTypeQuery,
  getAllRegionsQuery,
  getAllSeriesOfAnEducationTypeQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getDivisionsOfARegionQuery,
  getAllDivisionsQuery,
  getSubDivisionsOfADivisionQuery,
  getTownsOfASubDivisionQuery,
  getCentersOfATownQuery,
  getAllEducationTypesQuery,
  getAllSubjectsQuery,
  getAllRanksQuery,
  getAllEducTypesOfAnExam,
  getAllCandidatesQuery,
  getAllCentersQuery,
  getSingleRegionQuery,
  getACenterAdminQuery,
  getAllCenterAdminsQuery,
  getAllSeriesQuery,
  getAllSubDivisionsQuery,
  getAllSubjectsOfAnEducTypeQuery,
  getScoreID,
  singleSeriesQuery,
  getRegistrations,
  singleSubjectQuery,
  singleCandidateQuery1,
  singleCandidateQuery,
  viewSingleCandidateQuery,
  singleCenterQuery,
  singleCenterAdminQuery,
  singleExamQuery,
  singleTownQuery,
  schoolDataQuery,
  getAllCenterResultsQuery,
  singleSessionQuery,
  singleDivisionQuery,
  singleSubDivisionQuery,
  singleSubjectTypeQuery,
  singleEducationTypeQuery,
  singleRankQuery,
  centerExamSessionSeriesForResultsQuery,
  getCenterExamSessionSeriesQuery,
  singleGenderQuery,
  getCenterResultsQuery,
  getCandidateRegistrationIDQuery,
  getCandidateResultsQuery,
  getCenterRegistrationIDsQuery,
  getCandidateByCandCodeQuery,
  getSingleCenterExamSessionQuery,
  getEachCandidateResultsQuery,
  dataForAverage,
};
