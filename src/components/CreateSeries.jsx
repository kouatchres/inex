import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from './styles/Form';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import styled from 'styled-components';

import { storedEducType } from '../data';

const StyledDivision = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	min-width: 350px;
`;

const GET_ALL_EDUCATION_TYPES_QUERY = gql`
	query GET_ALL_EDUCATION_TYPES_QUERY {
		educationTypes(orderBy: educationTypeName_ASC) {
			id
			educationTypeName
			educationTypeCode
		}
	}
`;




const CREATE_SERIES_MUTATION = gql`
	mutation CREATE_SERIES_MUTATION(
		$seriesName: String!
		$seriesCode: String!
		$educationType: EducationTypeCreateWithoutSeriesInput!
	) {
		createSeries(seriesName: $seriesName, seriesCode: $seriesCode, educationType: $educationType) {
			id
			seriesName
		}
	}
`;

class CreateSeries extends Component {
	state = {
		seriesName: '',
		seriesCode: '',
		educationTypeID: '12',
		educationType: storedEducType
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	getSelectedEducType = (dataSource) => {
		// 1 copy the data source
		if (dataSource.length > 0) {
			const tempEducTypes = [ ...dataSource ];
			// get the region object
			const selectedEducType = tempEducTypes.find((item) => item.id === this.state.educationTypeID);
			console.log('getting selected EducType');
			console.log(selectedEducType);
			return selectedEducType;
		}
	};

	render() {
		return (
			<Query query={GET_ALL_EDUCATION_TYPES_QUERY}>
				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					const { educationTypes } = data;
					//'getting region from the state')
					console.log(educationTypes);
					const getEducTypes = educationTypes.map((item) => (
						<option value={item.id} key={item.id}>
							{item.educationTypeName}
						</option>
					));

					//*******important function'stripping off __typename')
					const refinedEducationTypes = educationTypes.map(({ __typename, ...others }) => others);
					return (
						<Mutation
							mutation={CREATE_SERIES_MUTATION}
							variables={{
								...this.state,
								educationType: this.getSelectedEducType(refinedEducationTypes) || storedEducType
							}}
						>
							{(createSeries, { loading, error }) => (
								<StyledDivision>
									<Form
										onSubmit={async (e) => {
											e.preventDefault();
											const res = await createSeries();
											console.log(res);
										}}
									>
										<h5>New Series</h5>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<select
												type="select"
												id="educationTypeID"
												name="educationTypeID"
												value={this.state.educationTypeID}
												onChange={this.handleChange}
												required
											>
												{getEducTypes}
											</select>

											<input
												type="text"
												id="seriesName"
												name="seriesName"
												placeholder="Series Name"
												value={this.state.seriesName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="seriesCode"
												name="seriesCode"
												placeholder="Series Code"
												value={this.state.seriesCode}
												onChange={this.handleChange}
												required
											/>
											<div className="submitButton">
												<button type="submit">Submit{loading ? 'ting' : ''} </button>
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

export default CreateSeries;
