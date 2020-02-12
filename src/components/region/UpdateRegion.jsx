import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import Error from '../ErrorMessage.js';
import styled from 'styled-components';
import { updateRegionMutation } from '../queries&Mutations&Functions/Mutations';
import { getSingleRegionQuery } from '../queries&Mutations&Functions/Queries';
import { updateItemMutation } from '../queries&Mutations&Functions/Functions';

const DataFrame = styled.div`
	display: flex;
	flex-direction: column;
`;

class UpdateRegion extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	resetForm() {
		this.setState({ regName: '', regCode: '' });
	}

	render() {
		return (
			<Query
				query={getSingleRegionQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { regName, regCode } = data.region;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.region && <p>No Region Found for ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateRegionMutation} variables={{ id: this.props.id }}>
							{(updateRegion, { loading, error }) => (
								<Form
									onSubmit={async (e) => {
										e.preventDefault();
										await this.updateItemMutation(e, updateRegion);
										this.resetForm();
									}}
								>
									<h5>Update a Region</h5>
									<Error error={error} />
									<fieldset disabled={loading} aria-busy={loading}>
										<DataFrame>
											<input
												type="text"
												id="regName"
												name="regName"
												placeholder="Nom Region"
												defaultValue={regName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="regCode"
												name="regCode"
												placeholder="Code Region"
												defaultValue={regCode}
												onChange={this.handleChange}
												required
											/>
											<div className="submitButton">
												<button type="submit">Updat{loading ? 'ing' : 'e'}</button>
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

export default UpdateRegion;
export { UPDATE_REGION_MUTATION };
