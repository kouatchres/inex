import gql from 'graphql-tag';

const schoolDataQuery = gql`
	query schoolDataQuery {
		candidates {
			id
			cand1stName
			registration {
				id
				candExamSecretCode
				scores {
					id
					subjectAve
					subjectSeries {
						id
						subjectName
					}
				}
			}
		}
	}
`;

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
				subject {
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
	getAllSeriesQuery,
	getAllSubjectsOfAnEducTypeQuery,
	getScoreID,
	getRegistrations,
	singleCandidateQuery1,
	singleCandidateQuery,
	viewSingleCandidateQuery,
	singleCenterQuery,
	singleCenterAdminQuery,
	singleExamQuery,
	singleTownQuery,
	schoolDataQuery,
	singleSubDivisionQuery,
	dataForAverage
};
