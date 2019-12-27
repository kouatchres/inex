import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from '../styles/Form';
import gql from 'graphql-tag';
import Error from '../ErrorMessage';

const CREATE_NEW_EXAM_MUTATION = gql`
	mutation CREATE_NEW_EXAM_MUTATION($examName: String!, $examCode: String!) {
		createExam(examName: $examName, examCode: $examCode) {
			id
			examName
		}
	}
`;

// const CREATE_EXAM_MUTATION = gql`
// 	mutation CREATE_EXAM_MUTATION($examName: String!, $examCode: String!) {
// 		createExam(examName: $examName, examCode: $examCode) {
// 			id
// 			examName
// 		}
// 	}
// `;

class CreateExam extends Component {
	state = {
		examName: '',
		examCode: ''
	};

	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return (
			<Mutation mutation={CREATE_NEW_EXAM_MUTATION} variables={this.state}>
				{(createExam, { loading, error }) => (
					<Form
						onSubmit={async (e) => {
							e.preventDefault();
							const res = await createExam();
							console.log(res);
						}}
					>
						<h5>New Exam Type</h5>
						<Error error={error} />
						<fieldset disabled={loading} aria-busy={loading}>
							<input
								type="text"
								id="examName"
								name="examName"
								placeholder="Exam Name"
								value={this.state.regName}
								onChange={this.handleChange}
								required
							/>
							<input
								type="text"
								id="examCode"
								name="examCode"
								placeholder="Exam Code"
								value={this.state.regCode}
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
export default CreateExam;
