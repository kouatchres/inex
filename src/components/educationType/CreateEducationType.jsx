import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import { createEducationTypeMutation } from '../queries&Mutations&Functions/Mutations';
import { getAllExamsQuery } from '../queries&Mutations&Functions/Queries';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
class CreateEducationType extends Component {
	state = {
		educationTypeName: '',
		educationTypeCode: '',
		examID: '452',
		exam: ''
	};
	resetForm() {
		this.setState({ educationTypeName: '', educationTypeCode: '' });
	}
	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return (
			<Query query={getAllExamsQuery}>
				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					const { exams } = data;
					console.log(exams);

					const examOptions =
						exams &&
						exams.map((item) => (
							<option key={item.id} value={item.id}>
								{item.examName}
							</option>
						));

					const refinedExams = exams && exams.map(({ __typename, examName, ...others }) => others);
					console.log(refinedExams);
					return (
						<Mutation
							mutation={createEducationTypeMutation}
							variables={{
								...this.state,
								exam: exams && getSelectedObject(refinedExams, examID)
							}}
						>
							{(createEducationType, { loading, error }) => (
								<Form
									onSubmit={async (e) => {
										e.preventDefault();
										const res = await createEducationType();
										console.log(res);
										this.resetForm();
									}}
								>
									<h5>New Education Type</h5>
									<Error error={error} />
									<fieldset disabled={loading} aria-busy={loading}>
										<select
											type="select"
											id="examID"
											name="examID"
											value={this.state.examID}
											onChange={this.handleChange}
											required
										>
											<option>Choisissez un Examen</option>
											{examOptions}
										</select>
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
											<button type="submit">Valid{loading ? 'ation en cours' : 'er'}</button>
										</div>
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
export default CreateEducationType;
