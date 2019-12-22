import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from './styles/Form';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import styled from 'styled-components';
import { storeRegion, storedDivision } from '../data';
import { select, option } from '@material-ui/core';

const StyledDivision = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	min-width: 350px;
`;

const GET_ALL_REGIONS_QUERY = gql`
	query GET_ALL_REGIONS_QUERY {
		regions(orderBy: regName_DESC) {
			id
			regName
			regCode
		}
	}
`;
const GET_ALL_DIVISIONS_QUERY = gql`
	query GET_ALL_DIVISIONS_QUERY {
		divisions(orderBy: divName_ASC) {
			id
			divName
			divCode
		}
	}
`;
const GET_DIVISIONS_OF_A_REGION_QUERY = gql`
	query GET_DIVISIONS_OF_A_REGION_QUERY($id: ID!) {
		region(id: $id) {
			id
			regName
			division(orderBy: divName_ASC) {
				id
				divName
				divCode
			}
		}
	}
`;
const CREATE_SUBDIVISION_MUTATION = gql`
	mutation CREATE_SUBDIVISION_MUTATION(
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

class CreateSubDivision extends Component {
	state = {
		subDivName: '',
		subDivCode: '',
		divisionID: '12',
		regionID: '12',
		region: storeRegion,
		division: storedDivision
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	getselectedDivision = (dataSource) => {
		// 1 copy the data source
		if (dataSource.length > 0) {
			const tempDivisions = [ ...dataSource ];
			// get the selected division object
			const selectedDivision = tempDivisions.find((item) => item.id === this.state.divisionID);
			console.log(selectedDivision);
			return selectedDivision;
		}
	};

	getselectedRegion = (dataSource) => {
		// 1 copy the data source
		if (dataSource.length > 0) {
			const tempRegions = [ ...dataSource ];
			// get the selected region object
			const selectedRegion = tempRegions.find((item) => item.id === this.state.regionID);
			console.log('getting selected region');
			console.log(selectedRegion);
			return selectedRegion;
		}
	};

	render() {
		return (
			<Query query={GET_ALL_REGIONS_QUERY}>
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
							query={GET_DIVISIONS_OF_A_REGION_QUERY}
							variables={this.getselectedRegion(regions) || anyRegion}
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
										mutation={CREATE_SUBDIVISION_MUTATION}
										variables={{
											...this.state,
											division: this.getselectedDivision(divisionsOfARegion)
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
															<button type="submit">Submit{loading ? 'ting' : ''}</button>
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
