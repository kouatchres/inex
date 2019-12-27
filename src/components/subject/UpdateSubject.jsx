import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import Error from '../ErrorMessage.js';
import gql from 'graphql-tag';
import styled from 'styled-components';

const DataFrame = styled.div`
	display: flex;
	flex-direction: column;
`;

const SINGLE_SUBJECT_QUERY = gql`
	query SINGLE_SUBJECT_QUERY($id: ID!) {
		subject(id: $id) {
			subjectName
			subjectCode
			id
		}
	}
`;

const UPDATE_SUBJECT_MUTATION = gql`
	mutation UPDATE_SUBJECT_MUTATION($id: ID!, $subjectName: String, $subjectCode: String) {
		updateSubject(id: $id, subjectName: $subjectName, subjectCode: $subjectCode) {
			subjectName
			subjectCode
			id
		}
	}
`;

class subject extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateSingleSubject = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating subject!!');
		const res = await updateMutation({
			variables: {
				...this.state,
				id: this.props.id
			}
		});
		console.log('subject Updated!!');
	};

	render() {
		return (
			<Query
				query={SINGLE_SUBJECT_QUERY}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);

					const { subjectName, subjectCode } = data.subject;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.subject && <p>No subject Found for ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={UPDATE_SUBJECT_MUTATION} variables={{ id: this.props.id }}>
							{(updateSubject, { loading, error }) => (
								<Form onSubmit={(e) => this.updateSingleSubject(e, updateSubject)}>
									<h5>Modification d'une matiere</h5>
									<Error error={error} />
									<fieldset disabled={loading} aria-busy={loading}>
										<DataFrame>
											<input
												type="text"
												id="subjectName"
												name="subjectName"
												placeholder="Nom Matiere"
												defaultValue={subjectName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="subjectCode"
												name="subjectCode"
												placeholder="Code Matiere"
												defaultValue={subjectCode}
												onChange={this.handleChange}
												required
											/>
											<div className="submitButton">
												<button type="submit">Valid{loading ? 'ation en cours' : 'er'}</button>
											</div>
										</DataFrame>
									</fieldset>
								</Form>
							)}
						</Mutation>
					);
				}}
			</Query>
		);
	}
}

export default subject;
