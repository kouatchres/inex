import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import Error from '../ErrorMessage.js';
import styled from 'styled-components';
import { updateItemMutation } from '../queries&Mutations&Functions/Mutations';
import { getAllGenderQuery } from '../queries&Mutations&Functions/Queries';

const DataFrame = styled.div`
	display: flex;
	flex-direction: column;
`;

class UpdateGender extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};
	resetForm = () => {
		this.setState({ regName: '', regCode: '' });
	};

	render() {
		return (
			<Query
				query={getAllGenderQuery}
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
						<Mutation mutation={updateGenderMutation} variables={{ id: this.props.id }}>
							{(updateGender, { loading, error }) => (
								<Form
									onSubmit={async (e) => {
										e.preventDefault();
										const res = await updateItemMutation(e, updateGender);
										console.log(res);
										this.resetForm();
									}}
								>
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
