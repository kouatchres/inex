import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import { createNewRegionMutation } from '../queries&Mutations&Functions/Mutations';
import { getAllRegionsQuery } from '../queries&Mutations&Functions/Queries';

class CreateRegion extends Component {
	state = {
		regName: '',
		regCode: ''
	};

	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	resetForm() {
		this.setState({ regName: '', regCode: '' });
	}

	render() {
		return (
			<Mutation mutation={createNewRegionMutation} variables={this.state}>
				{(createRegion, { loading, error }) => (
					<Form
						onSubmit={async (e) => {
							e.preventDefault();
							const res = await createRegion();
							console.log(res);
							this.resetForm();
						}}
					>
						<h5>New Region</h5>
						<Error error={error} />
						<fieldset disabled={loading} aria-busy={loading}>
							<input
								type="text"
								id="regName"
								name="regName"
								placeholder="Region Name"
								value={this.state.regName}
								onChange={this.handleChange}
								required
							/>
							<input
								type="text"
								id="regCode"
								name="regCode"
								placeholder="Region Code"
								value={this.state.regCode}
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
export default CreateRegion;
