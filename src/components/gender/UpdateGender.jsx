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

const SINGLE_GENDER_QUERY = gql`
	query SINGLE_GENDER_QUERY($id: ID!) {
		gender(id: $id) {
			genderName
			genderCode
			id
		}
	}
`;

const UPDATE_GENDER_MUTATION = gql`
	mutation UPDATE_GENDER_MUTATION($id: ID!, $genderName: String, $genderCode: String) {
		updateGender(id: $id, genderName: $genderName, genderCode: $genderCode) {
			id
			genderName
			genderCode
		}
	}
`;

class UpdateGender extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateSingleGender = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating Gender!!');
		const res = await updateMutation({
			variables: {
				id: this.props.id,
				...this.state
			}
		});
		console.log('Gender Updated!!');
	};

	render() {
		return (
			<Query
				query={SINGLE_GENDER_QUERY}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { genderName, genderCode } = data.gender;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.gender && <p>No Gender Found for ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={UPDATE_GENDER_MUTATION} variables={{ id: this.props.id }}>
							{(updateGender, { loading, error }) => (
								<Form onSubmit={(e) => this.updateSingleGender(e, updateGender)}>
									<h5>Modification d'un Sexe</h5>
									<Error error={error} />
									<fieldset disabled={loading} aria-busy={loading}>
										<DataFrame>
											<input
												type="text"
												id="genderName"
												name="genderName"
												placeholder="Nom Sexe"
												defaultValue={genderName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="genderCode"
												name="genderCode"
												placeholder="Code Sexe"
												defaultValue={genderCode}
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

export default UpdateGender;
