import gql from "graphql-tag";

const getACenterAdminQuery = gql`
  query getACenterAdminQuery($authCode: String!) {
    centerAdminSignIn(authCode: $authCode) {
      id
      authCode
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

const getAllEducationTypesQuery = gql`
  query getAllEducationTypesQuery {
    educationTypes {
      educationTypeName
      educationTypeCode
      id
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

const getAllEducTypesOfAnExam = gql`
  query getAllEducTypesOfAnExam($id: ID!) {
    exam(id: $id) {
      id
      examName
      educationType(orderBy: educationTypeName_ASC) {
        educationTypeName
        educationTypeCode
        id
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

const getAllSubjectsOfASeriesQuery = gql`
  query getSubjectsOfASeriesQuery($id: ID!) {
    series(id: $id) {
      seriesName
      id
      subjectSeries {
        subject {
          id
          subjectName
        }
      }
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

const getAllSubjectTypeQuery = gql`
  query getAllSubjectTypeQuery {
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
      cand1stName
      cand2ndName
      cand3rdName
      candCode
      email
      image
      phoneNumb
      placeOfBirth
      gender {
        genderName
      }
    }
  }
`;

const viewSingleCandidateQuery = gql`
  query viewSingleCandidateQuery($candCode: String!) {
    singleCandidate(candCode: $candCode) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      candCode
      email
      image
      phoneNumb
      placeOfBirth
      gender {
        genderName
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

const singleCenterAdminQuery = gql`
  query singleCenterAdminQuery($id: ID!) {
    centerAdmin(id: $id) {
      centerAdminName
      centerAdminCode
      id
    }
  }
`;
///*****************End Single object queries */

export {
  getAllSubjectsOfASeriesQuery,
  getAllSubjectTypeQuery,
  getAllGendersQuery,
  getAllRegionsQuery,
  getAllEducTypeQuery,
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
  getACenterAdminQuery,
  singleCandidateQuery1,
  singleCandidateQuery,
  viewSingleCandidateQuery,
  singleCenterQuery,
  singleCenterAdminQuery,
  singleExamQuery,
  singleTownQuery,
  singleSubDivisionQuery
};
