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

const SINGLE_EDUC_TYPE_QUERY = gql`
	query SINGLE_EDUC_TYPE_QUERY($id: ID!) {
		educationType(id: $id) {
			educationTypeName
			educationTypeCode
			id
		}
	}
`;

const UPDATE_EDUC_TYPE_MUTATION = gql`
	mutation UPDATE_EDUC_TYPE_MUTATION($id: ID!, $educationTypeName: String, $educationTypeCode: String) {
		updateEducationType(id: $id, educationTypeName: $educationTypeName, educationTypeCode: $educationTypeCode) {
			id
			educationTypeName
			educationTypeCode
		}
	}
`;

class UpdateEducationType extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateSingleEducationType = async (e, updateMutation) => {
		e.preventDefault();
		const res = await updateMutation({
			variables: {
				...this.state,
				id: this.props.id
			}
		});
	};

	render() {
		return (
			<Query
				query={SINGLE_EDUC_TYPE_QUERY}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { educationType } = data;
					const { educationTypeName, educationTypeCode } = educationType;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.educationType && <p>Pas de departement pout le ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={UPDATE_EDUC_TYPE_MUTATION} variables={{ id: this.props.id }}>
							{(updateEducationType, { loading, error }) => (
								<Form onSubmit={(e) => this.updateSingleEducationType(e, updateEducationType)}>
									<h5>Modifier le type d'enseignement</h5>
									<Error error={error} />
									<fieldset disabled={loading} aria-busy={loading}>
										<DataFrame>
											<input
												type="text"
												id="educationTypeName"
												name="educationTypeName"
												placeholder="Nom du type D'Enseignement"
												defaultValue={educationTypeName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="educationTypeCode"
												name="educationTypeCode"
												placeholder="Code du type D'Enseignement"
												defaultValue={educationTypeCode}
												onChange={this.handleChange}
												required
											/>
											<div className="submitButton">
												<button type="submit">
													Modifi{loading ? 'cation en cours' : 'er'}
												</button>
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

export default UpdateEducationType;
