import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import { createSubDivisionMutation } from '../queries&Mutations&Functions/Mutations';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
import { getAllRegionsQuery, getDivisionsOfARegionQuery } from '../queries&Mutations&Functions/Queries';

const StyledDivision = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	min-width: 350px;
`;

class CreateSubDivision extends Component {
	state = {
		subDivName: '',
		subDivCode: '',
		divisionID: '12',
		regionID: '12',
		region: '',
		division: ''
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	resetForm() {
		this.setState({ subDivName: '', subDivCode: '' });
	}
	render() {
		const { regionID, divisionID } = this.state;
		return (
			<Query query={getAllRegionsQuery}>
				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					const { regions } = data;
					const anyRegion = regions[0];
					console.log('this is any chosen region');
					console.log(anyRegion);

					//prepare data for the region select options
					const regionsOptions = regions.map((item) => (
						<option value={item.id} key={item.id}>
							{item.regName}-{item.regCode}
						</option>
					));
					return (
						<Query
							query={getDivisionsOfARegionQuery}
							variables={regions && (getSelectedObject(regions, regionID) || anyRegion)}
						>
							{({ data, loading, error }) => {
								{
									loading && <p>Loading...</p>;
								}
								{
									error && <Error error={error} />;
								}

								console.log('these are the divisions of the selected region');
								console.log(data.region.division);
								const divisionsOptions = data.region.division.map((item) => (
									<option value={item.id} key={item.id}>
										{item.divName}
									</option>
								));
								//*******important function'stripping off __typename')
								const divisionsOfARegion = data.region.division.map(
									({ divName, divCode, __typename, ...others }) => others
								);

								return (
									<Mutation
										mutation={createSubDivisionMutation}
										variables={{
											...this.state,
											division:
												divisionsOfARegion && getSelectedObject(divisionsOfARegion, divisionID)
										}}
									>
										{(createSubDivision, { loading, error }) => (
											<StyledDivision>
												<Form
													onSubmit={async (e) => {
														e.preventDefault();
														const res = await createSubDivision();
														console.log(res);
														console.log(this.state);
														this.resetForm();
													}}
												>
													<h5>New Sub-Division</h5>
													<Error error={error} />
													<fieldset disabled={loading} aria-busy={loading}>
														<select
															type="select"
															id="regionID"
															name="regionID"
															value={this.state.regionID}
															onChange={this.handleChange}
															required
														>
															<option>Choisissez une region</option>
															{regionsOptions}
														</select>
														<select
															type="select"
															id="divisionID"
															name="divisionID"
															value={this.state.divisionID}
															onChange={this.handleChange}
															required
														>
															<option>Choisissez un departement</option>
															{divisionsOptions}
														</select>
														<input
															type="text"
															id="subDivName"
															name="subDivName"
															placeholder="Nom Arrondissement"
															value={this.state.subDivName}
															onChange={this.handleChange}
															required
														/>
														<input
															type="text"
															id="subDivCode"
															name="subDivCode"
															placeholder="Code Arrondissement"
															value={this.state.subDivCode}
															onChange={this.handleChange}
															required
														/>
														<div className="submitButton">
															<button type="submit">
																Valid{loading ? 'ation en cours' : 'er'}
															</button>
														</div>
													</fieldset>
												</Form>
											</StyledDivision>
										)}
									</Mutation>
								);
							}}
						</Query>
					);
				}}
			</Query>
		);
	}
}

export default CreateSubDivision;
export { GET_ALL_DIVISIONS_QUERY };
