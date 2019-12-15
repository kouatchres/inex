import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from './styles/Form';
import gql from 'graphql-tag';
import Error from './ErrorMessage';

const CREATE_NEW_RANK_MUTATION = gql`
	mutation CREATE_NEW_RANK_MUTATION($rankName: String!, $rankCode: String!) {
		createRank(rankName: $rankName, rankCode: $rankCode) {
			id
			rankName
		}
	}
`;

class CreateRank extends Component {
	state = {
		rankName: '',
		rankCode: ''
	};

	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return (
			<Mutation mutation={CREATE_NEW_RANK_MUTATION} variables={this.state}>
				{(createRank, { loading, error }) => (
					<Form
						onSubmit={async (e) => {
							e.preventDefault();
							const res = await createRank();
							console.log(res);
						}}
					>
						<h5>New Rank</h5>
						<Error error={error} />
						<fieldset disabled={loading} aria-busy={loading}>
							<input
								type="text"
								id="rankName"
								name="rankName"
								placeholder="Rank Name"
								value={this.state.rankName}
								onChange={this.handleChange}
								required
							/>
							<input
								type="text"
								id="rankCode"
								name="rankCode"
								placeholder="Rank Code"
								value={this.state.rankCode}
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
export default CreateRank;
