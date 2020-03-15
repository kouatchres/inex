import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { updateDivisionMutation } from '../queries&Mutations&Functions/Mutations';
import { singleDivisionQuery } from '../queries&Mutations&Functions/Queries';

class UpdateDivision extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateItemMutation = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating Region!!');
		const res = await updateMutation({
			variables: {
				id: this.props.id,
				...this.state
			}
		});
		console.log('Region Updated!!');
	};

	resetForm() {
		this.setState({ divCode: '', divName: '' });
	}

	render() {
		return (
			<Query
				query={singleDivisionQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { division } = data;
					const { divName, divCode } = division;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.division && <p>Pas de département pout le ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateDivisionMutation} variables={{ id: this.props.id }}>
							{(updateDivision, { loading, error }) => (
								<StyledPage>
									<Form
										onSubmit={async (e) => {
											const res = await this.updateItemMutation(e, updateDivision);

											console.log(res);
											this.resetForm();
										}}
									>
										<h4>Modification de département</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="divName"
												name="divName"
												placeholder="Nom du Département"
												defaultValue={divName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="divCode"
												name="divCode"
												placeholder="Code du Département"
												defaultValue={divCode}
												onChange={this.handleChange}
												required
											/>
											<div className="submitButton">
												<button type="submit">
													Modifi{loading ? 'cation en cours' : 'er'}
												</button>
											</div>
										</fieldset>
									</Form>
								</StyledPage>
							)}
						</Mutation>
					);
				}}
			</Query>
		);
	}
}

export default UpdateDivision;
