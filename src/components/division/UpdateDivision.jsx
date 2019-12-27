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

const SINGLE_DIVISION_QUERY = gql`
	query SINGLE_DIVISION_QUERY($id: ID!) {
		division(id: $id) {
			divName
			divCode
			id
		}
	}
`;

const UPDATE_DIVISION_MUTATION = gql`
	mutation UPDATE_DIVISION_MUTATION($id: ID!, $divName: String, $divCode: String) {
		updateDivision(id: $id, divName: $divName, divCode: $divCode) {
			id
			divName
			divCode
		}
	}
`;

class UpdateDivision extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateSingleDivision = async (e, updateMutation) => {
		e.preventDefault();
		const res = await updateMutation({
			variables: {
				id: this.props.id,
				...this.state
			}
		});
	};

	render() {
		return (
			<Query
				query={SINGLE_DIVISION_QUERY}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { divName, divCode } = data.division;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.division && <p>Pas de departement pout le ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={UPDATE_DIVISION_MUTATION} variables={{ id: this.props.id }}>
							{(updateDivision, { loading, error }) => (
								<Form onSubmit={(e) => this.updateSingleDivision(e, updateDivision)}>
									<h5>Modifier le departement</h5>
									<Error error={error} />
									<fieldset disabled={loading} aria-busy={loading}>
										<DataFrame>
											<input
												type="text"
												id="divName"
												name="divName"
												placeholder="Nom du Departement"
												defaultValue={divName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="divCode"
												name="divCode"
												placeholder="Code du Departement"
												defaultValue={divCode}
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

export default UpdateDivision;
