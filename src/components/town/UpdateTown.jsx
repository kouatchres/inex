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

const SINGLE_TOWN_QUERY = gql`
	query SINGLE_TOWN_QUERY($id: ID!) {
		town(id: $id) {
			townName
			townCode
			id
		}
	}
`;

const UPDATE_TOWN_MUTATION = gql`
	mutation UPDATE_TOWN_MUTATION($id: ID!, $townName: String, $townCode: String) {
		updateTown(id: $id, townName: $townName, townCode: $townCode) {
			townName
			townCode
			id
		}
	}
`;

class UpdateTown extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateSingleTown = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating town!!');
		const res = await updateMutation({
			variables: {
				...this.state,
				id: this.props.id
			}
		});
		console.log('Town Updated!!');
	};

	render() {
		return (
			<Query
				query={SINGLE_TOWN_QUERY}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { town } = data;
					const { townName, townCode } = town;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.town && <p>No Townor ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={UPDATE_TOWN_MUTATION} variables={{ id: this.props.id }}>
							{(updateTown, { loading, error }) => (
								<Form onSubmit={(e) => this.updateSingleTown(e, updateTown)}>
									<h5>Modifier d'une Ville</h5>
									<Error error={error} />
									<fieldset disabled={loading} aria-busy={loading}>
										<DataFrame>
											<input
												type="text"
												id="townName"
												name="townName"
												placeholder="Nom Ville"
												defaultValue={townName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="townCode"
												name="townCode"
												placeholder="Code Ville"
												defaultValue={townCode}
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

export default UpdateTown;
