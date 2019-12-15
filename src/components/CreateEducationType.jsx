import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from './styles/Form';
import gql from 'graphql-tag';
import Error from './ErrorMessage';

const CREATE_NEW_EDUCATION_TYPE_MUTATION = gql`
	mutation CREATE_NEW_EDUCATION_TYPE_MUTATION($educationTypeName: String!, $educationTypeCode: String!) {
		createEducationType(educationTypeName: $educationTypeName, educationTypeCode: $educationTypeCode) {
			id
			educationTypeName
		}
	}
`;

class CreateEducationType extends Component {
	state = {
		educationTypeName: '',
		educationTypeCode: ''
	};

	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return (
			<Mutation mutation={CREATE_NEW_EDUCATION_TYPE_MUTATION} variables={this.state}>
				{(createEducationType, { loading, error }) => (
					<Form
						onSubmit={async (e) => {
							e.preventDefault();
							const res = await createEducationType();
							console.log(res);
						}}
					>
						<h5>New Education Type</h5>
						<Error error={error} />
						<fieldset disabled={loading} aria-busy={loading}>
							<input
								type="text"
								id="educationTypeName"
								name="educationTypeName"
								placeholder="Education Type Name"
								value={this.state.educationTypeName}
								onChange={this.handleChange}
								required
							/>
							<input
								type="text"
								id="educationTypeCode"
								name="educationTypeCode"
								placeholder="Education Type Code"
								value={this.state.educationTypeCode}
								onChange={this.handleChange}
								required
							/>
							<div className="submitButton">
								<button type="submit">Submit{loading ? 'ting' : ''}</button>
							</div>
						</fieldset>
					</Form>
				)}
			</Mutation>
		);
	}
}
export default CreateEducationType;
