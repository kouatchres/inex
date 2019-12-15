import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from './styles/Form';
import gql from 'graphql-tag';
import Error from './ErrorMessage';

const CREATE_NEW_SUBJECT_MUTATION = gql`
	mutation CREATE_NEW_SUBJECT_MUTATION($subjectName: String!, $subjectCode: String!) {
		createSubject(subjectName: $subjectName, subjectCode: $subjectCode) {
			id
			subjectName
		}
	}
`;

class CreateSubject extends Component {
	state = {
		subjectName: '',
		subjectCode: ''
	};

	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return (
			<Mutation mutation={CREATE_NEW_SUBJECT_MUTATION} variables={this.state}>
				{(createSubject, { loading, error }) => (
					<Form
						onSubmit={async (e) => {
							e.preventDefault();
							const res = await createSubject();
							console.log(res);
						}}
					>
						<h5>New Subject</h5>
						<Error error={error} />
						<fieldset disabled={loading} aria-busy={loading}>
							<input
								type="text"
								id="subjectName"
								name="subjectName"
								placeholder="Subject Name"
								value={this.state.subjectName}
								onChange={this.handleChange}
								required
							/>
							<input
								type="text"
								id="subjectCode"
								name="subjectCode"
								placeholder="Subject Code"
								value={this.state.subjectCode}
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
export default CreateSubject;
