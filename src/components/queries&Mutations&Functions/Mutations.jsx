import gql from 'graphql-tag';

//************create mutations  */
const signInCandidate = gql`
	mutation signInCandidate($candCode: String!) {
		candidateSignIn(candCode: $candCode) {
			id
			cand1stName
		}
	}
`;
//

const createNewReportMutation = gql`
	mutation createNewReportMutation(
		$reportImage: String!
		$reportName: String!
		$centerAdmin: CenterAdminWhereUniqueInput!
	) {
		createReport(reportImage: $reportImage, reportName: $reportName, centerAdmin: $centerAdmin) {
			id
			reportName
			reportImage
		}
	}
`;

const createRegistrationMutation = gql`
	mutation createRegistrationMutation(
		$exam: ExamWhereUniqueInput!
		$series: SeriesWhereUniqueInput!
		$candidate: CandidateWhereUniqueInput!
		$session: SessionWhereUniqueInput!
		$center: CenterWhereUniqueInput!
	) {
		createRegistration(exam: $exam, series: $series, session: $session, candidate: $candidate, center: $center) {
			id
			series {
				seriesName
			}
			candidate {
				id
				cand1stName
			}
		}
	}
`;

const createCenterAdminMutation = gql`
	mutation createCenterAdminMutation(
		$exam: ExamWhereUniqueInput!
		$rank: RankWhereUniqueInput!
		$session: SessionWhereUniqueInput!
		$center: CenterWhereUniqueInput!
		$authName: String!
		$authCode: String!
		$authCNI: String!
		$authPhone: Int!
		$authMatricule: String!
	) {
		createCenterAdmin(
			exam: $exam
			rank: $rank
			session: $session
			center: $center
			authCNI: $authCNI
			authName: $authName
			authCode: $authCode
			authPhone: $authPhone
			authMatricule: $authMatricule
		) {
			authName
			authCode
			authPhone
		}
	}
`;

const createDivisionMutation = gql`
	mutation createDivisionMutation($divName: String!, $divCode: String!, $region: RegionCreateWithoutDivisionInput!) {
		createDivision(divName: $divName, divCode: $divCode, region: $region) {
			id
			divName
		}
	}
`;

const createCenterMutation = gql`
	mutation createCenterMutation(
		$centerName: String!
		$centerNumber: Int
		$centerCode: String!
		$town: TownWhereUniqueInput!
	) {
		createCenter(centerName: $centerName, centerNumber: $centerNumber, centerCode: $centerCode, town: $town) {
			id
			centerName
			centerCode
			town {
				townName
			}
		}
	}
`;

const createSeriesMutation = gql`
	mutation createSeriesMutation(
		$seriesName: String!
		$seriesCode: String!
		$educationType: EducationTypeWhereUniqueInput!
	) {
		createSeries(seriesName: $seriesName, seriesCode: $seriesCode, educationType: $educationType) {
			id
			seriesName
		}
	}
`;
const createEducationTypeMutation = gql`
	mutation createEducationTypeMutation(
		$educationTypeName: String!
		$exam: ExamWhereUniqueInput!
		$educationTypeCode: String!
	) {
		createEducationType(educationTypeName: $educationTypeName, exam: $exam, educationTypeCode: $educationTypeCode) {
			id
			educationTypeName
		}
	}
`;

const createTownMutation = gql`
	mutation createTownMutation($townName: String!, $townCode: String!, $subDiv: SubDivisionWhereUniqueInput!) {
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

const createNewSubjectTypeMutation = gql`
	mutation createNewSubjectTypeMutation($subjectTypeName: String!, $subjectTypeCode: String!) {
		createSubjectType(subjectTypeName: $subjectTypeName, subjectTypeCode: $subjectTypeCode) {
			id
			subjectTypeName
		}
	}
`;

const createNewSubjectMutation = gql`
	mutation createNewSubjectMutation(
		$subjectName: String!
		$subjectCode: String!
		$subjectType: SubjectTypeWhereUniqueInput!
	) {
		createSubject(subjectName: $subjectName, subjectCode: $subjectCode, subjectType: $subjectType) {
			subjectCode
			subjectName
		}
	}
`;

const createSubDivisionMutation = gql`
	mutation createSubDivisionMutation(
		$subDivName: String!
		$subDivCode: String!
		$division: DivisionWhereUniqueInput!
	) {
		createSubDivision(subDivName: $subDivName, subDivCode: $subDivCode, division: $division) {
			id
			subDivName
			subDivCode
			division {
				divName
			}
		}
	}
`;

const createNewSessionMutation = gql`
	mutation createNewSessionMutation($sessionName: String!, $sessionCode: String!) {
		createSession(sessionName: $sessionName, sessionCode: $sessionCode) {
			id
			sessionName
		}
	}
`;

const createNewRankMutation = gql`
	mutation createNewRankMutation($rankName: String!, $rankCode: String!) {
		createRank(rankName: $rankName, rankCode: $rankCode) {
			id
			rankName
		}
	}
`;
const createNewRegionMutation = gql`
	mutation createNewRegionMutation($regName: String!, $regCode: String!) {
		createRegion(regName: $regName, regCode: $regCode) {
			id
			regName
		}
	}
`;

const createExamMutation = gql`
	mutation createExamMutation($examName: String!, $examCode: String!) {
		createExam(examName: $examName, examCode: $examCode) {
			id
			examName
		}
	}
`;

const registerSubjectSeriesMutation = gql`
	mutation registerSubjectSeriesMutation($subject: SubjectWhereUniqueInput!, $series: SeriesWhereUniqueInput!) {
		createSubjectSeries(subject: $subject, series: $series) {
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

const createCandidateMutation = gql`
	mutation createCandidateMutation(
		$cand1stName: String!
		$cand2ndName: String
		$cand3rdName: String
		$candCode: String
		$email: String!
		$image: String!
		$phoneNumb: Int
		$placeOfBirth: String
		$gender: GenderCreateWithoutCandidateInput!
	) {
		createCandidate(
			cand1stName: $cand1stName
			cand2ndName: $cand2ndName
			cand3rdName: $cand3rdName
			candCode: $candCode
			email: $email
			image: $image
			phoneNumb: $phoneNumb
			placeOfBirth: $placeOfBirth
			gender: $gender
		) {
			id
			cand1stName
			cand2ndName
			candCode
			image
		}
	}
`;

//************create mutations  */

////**************Update mutations */

const updateSubDivisionMutation = gql`
	mutation updateSubDivisionMutation($id: ID!, $subDivName: String, $subDivCode: String) {
		updateSubDivision(id: $id, subDivName: $subDivName, subDivCode: $subDivCode) {
			subDivName
			subDivCode
			id
		}
	}
`;

const updateCenterMutation = gql`
	mutation updateCenterMutation($id: ID!, $centerName: String, $centerCode: String) {
		updateCenter(id: $id, centerName: $centerName, centerCode: $centerCode) {
			id
			centerName
			centerCode
		}
	}
`;

const updateTownMutation = gql`
	mutation updateTownMutation($id: ID!, $townName: String, $townCode: String) {
		updateTown(id: $id, townName: $townName, townCode: $townCode) {
			townName
			townCode
			id
		}
	}
`;

const updateExamMutation = gql`
	mutation updateExamMutation($id: ID!, $examName: String, $examCode: String) {
		updateExam(id: $id, examName: $examName, examCode: $examCode) {
			examName
			examCode
			id
		}
	}
`;

const updateCandidateMutation = gql`
	mutation updateCandidateMutation(
		$id: ID!
		$cand1stName: String
		$cand2ndName: String
		$cand3rdName: String
		$candCode: String
		$email: String
		$image: String
		$phoneNumb: Int
		$placeOfBirth: String
	) {
		updateCandidate(
			id: $id
			cand1stName: $cand1stName
			cand2ndName: $cand2ndName
			cand3rdName: $cand3rdName
			candCode: $candCode
			email: $email
			image: $image
			phoneNumb: $phoneNumb
			placeOfBirth: $placeOfBirth
		) {
			id
			cand1stName
			cand2ndName
			cand3rdName
			image
		}
	}
`;

////**************Update mutations */

export {
	createCandidateMutation,
	createNewSubjectMutation,
	createNewSubjectTypeMutation,
	createTownMutation,
	createCenterAdminMutation,
	createDivisionMutation,
	createRegistrationMutation,
	createCenterMutation,
	createEducationTypeMutation,
	createSeriesMutation,
	createSubDivisionMutation,
	createNewSessionMutation,
	createNewRankMutation,
	createNewReportMutation,
	createNewRegionMutation,
	createExamMutation,
	registerSubjectSeriesMutation,
	updateCenterMutation,
	updateTownMutation,
	updateExamMutation,
	updateSubDivisionMutation,
	updateCandidateMutation,
	signInCandidate
};
