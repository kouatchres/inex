import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import { createExamMutation } from '../queries&Mutations&Functions/Mutations';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';

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

	resetForm() {
		this.setState({ examName: '', examCode: '' });
	}
	render() {
		return (
			<Mutation mutation={createExamMutation} variables={this.state}>
				{(createExam, { loading, error }) => (
					<Form
						onSubmit={async (e) => {
							e.preventDefault();
							const res = await createExam();
							console.log(res);
							this.resetForm();
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
								value={this.state.examName}
								onChange={this.handleChange}
								required
							/>
							<input
								type="text"
								id="examCode"
								name="examCode"
								placeholder="Exam Code"
								value={this.state.examCode}
								onChange={this.handleChange}
								required
							/>
							<div className="submitButton">
								<button type="submit">Valid{loading ? 'ation en cours' : 'er'}</button>
							</div>
						</fieldset>
					</Form>
				)}
			</Mutation>
		);
	}
}
export default CreateExam;
