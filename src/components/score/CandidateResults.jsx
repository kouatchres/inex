import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import styled from 'styled-components';

import Router from 'next/router';

import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
import {
	getAllExamsQuery,
	getCandidateRegistrationIDQuery,
	getAllSessionsQuery
} from '../queries&Mutations&Functions/Queries';

const OtherSelect = styled.div`
  display: block;
flex-direction:column
  text-align: center;
  margin: 0 auto;
  /* min-width: 40rem; */
`;

class Results extends Component {
	state = {
		candCode: '',
		sessionID: '12',
		examID: '12',
		id: '',
		loading: false
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};
	resetForm = () => {
		this.setState({ candCode: '' });
	};

	makeCandVariableObject = (candCodeValue) => {
		const storedCandidate = {
			candCode: `${candCodeValue}`
		};
		return storedCandidate;
	};

	render() {
		const { candCode, examID, sessionID } = this.state;
		return (
			<Query query={getAllExamsQuery}>
				{({ data, loading, error }) => {
					{
						loading && <p>loading...</p>;
					}
					{
						error && <Error error={error} />;
					}

					const { exams } = data;
					console.log(exams);

					const refinedExams = exams && exams.map(({ __typename, examName, ...others }) => others);
					const firstExams = refinedExams[0];
					const examsOptions =
						exams &&
						exams.map((item) => (
							<option key={item.id} value={item.id}>
								{item.examName}
							</option>
						));
					return (
						<Query query={getAllSessionsQuery}>
							{({ data, loading, error }) => {
								{
									loading && <p>loading...</p>;
								}
								{
									error && <Error error={error} />;
								}

								const { sessions } = data;
								const refinedSessions =
									sessions && sessions.map(({ __typename, sessionName, ...others }) => others);
								const firstSessions = refinedSessions[0];
								const sessionsOptions =
									sessions &&
									sessions.map((item) => (
										<option key={item.id} value={item.id}>
											{item.sessionName}
										</option>
									));
								return (
									<Query
										query={getSingleCenterExamSessionQuery}
										variables={{
											exam: refinedExams && getSelectedObject(refinedExams, examID),
											session: refinedSessions && getSelectedObject(refinedSessions, sessionID),
											center: refinedCenter && getSelectedObject(refinedCenter, centerID)
										}}>
										{({ data, error, loading }) => {
											console.log(data);
											const { centerExamSessions } = {
												...data
											};
											console.log(centerExamSessions);
											// remove typename from the object
											const refinedCenterExamSessions = centerExamSessions && centerExamSessions.map(({
												__typename,
												...others
											}) => others);
											// transform the array into a single object
											const getObj = refinedCenterExamSessions && refinedCenterExamSessions.reduce((item) => item);
											console.log(getObj);

											return (
												<Query
													query={getCandidateRegistrationIDQuery}
													variables={{
														centerExamSession: getObj && getObj,
														candidate: this.makeCandVariableObject(candCode)
													}}
												>
													{({ data, error, loading }) => {
														const { candidateRegistrationID } = { ...data };
														candidateRegistrationID &&
															Router.push({
																pathname: '/show/results/candResults',
																query: { id: candidateRegistrationID.id }
															});
														return (
															<StyledPage>
																<Form
																	onSubmit={async (e) => {
																		e.preventDefault();
																	}}
																>
																	<h4>Résultats d'un Candidat</h4>
																	<Error error={error} />
																	<fieldset disabled={loading} aria-busy={loading}>
																		<OtherSelect>
																			<select
																				type="select"
																				id="sessionID"
																				name="sessionID"
																				value={sessionID}
																				onChange={this.handleChange}
																				required
																			>
																				<option>Choisissez la Session</option>
																				{sessionsOptions}
																			</select>
																			<select
																				type="select"
																				id="examID"
																				name="examID"
																				value={examID}
																				onChange={this.handleChange}
																				required
																			>
																				<option>Choisissez un Examen</option>
																				{examsOptions}
																			</select>

																			<input
																				type="search"
																				id="candCode"
																				name="candCode"
																				value={candCode}
																				placeholder="Code Candidate"
																				onChange={this.handleChange}
																				required
																			/>
																		</OtherSelect>
																	</fieldset>
																</Form>
															</StyledPage>
														);
													}}
												</Query>
											);
										}}
									</Query>
								);
							}}
						</Query>
					);
				}}
			</Query>
		);
	}
}

export default Results;
