import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import gql from 'graphql-tag';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import { storeRegion } from '../../data';

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

const CREATE_DIVISION_MUTATION = gql`
	mutation CREATE_DIVISION_MUTATION(
		$divName: String!
		$divCode: String!
		$region: RegionCreateWithoutDivisionInput!
	) {
		createDivision(divName: $divName, divCode: $divCode, region: $region) {
			id
			divName
		}
	}
`;

class CreateDivision extends Component {
	state = {
		divName: '',
		divCode: '',
		regionID: '12',
		region: storeRegion
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	getSelectedRegion = (dataSource) => {
		// 1 copy the data source
		if (dataSource.length > 0) {
			const tempRegions = [ ...dataSource ];
			// get the region object
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
					//'getting region from the state')
					console.log(this.state.region);

					const getRegions = regions.map((region) => (
						<option value={region.id} key={region.id}>
							{region.regName}
						</option>
					));

					//*******important function'stripping off __typename')
					const refinedRegions = regions.map(({ __typename, ...others }) => others);
					return (
						<Mutation
							mutation={CREATE_DIVISION_MUTATION}
							variables={{
								...this.state,
								region: this.getSelectedRegion(refinedRegions)
							}}
						>
							{(createDivision, { loading, error }) => (
								<StyledDivision>
									<Form
										onSubmit={async (e) => {
											e.preventDefault();
											const res = await createDivision();
											console.log(res);
										}}
									>
										<h5>New Division</h5>
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
												{getRegions}
											</select>

											<input
												type="text"
												id="divName"
												name="divName"
												placeholder="Nom Departement"
												value={this.state.divName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="divCode"
												name="divCode"
												placeholder="Code departement"
												value={this.state.divCode}
												onChange={this.handleChange}
												required
											/>
											<div className="submitButton">
												<button type="submit">Submit</button>
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
	}
}

export default CreateDivision;
export { GET_ALL_REGIONS_QUERY };
