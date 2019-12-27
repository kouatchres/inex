import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from '../styles/Form';
import gql from 'graphql-tag';
import Error from '../ErrorMessage';

const CREATE_NEW_SESSION_MUTATION = gql`
	mutation CREATE_NEW_SESSION_MUTATION($sessionName: String!, $sessionCode: String!) {
		createSession(sessionName: $sessionName, sessionCode: $sessionCode) {
			id
			sessionName
		}
	}
`;

class CreateSession extends Component {
	state = {
		sessionName: '',
		sessionCode: ''
	};

	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return (
			<Mutation mutation={CREATE_NEW_SESSION_MUTATION} variables={this.state}>
				{(createSession, { loading, error }) => (
					<Form
						onSubmit={async (e) => {
							e.preventDefault();
							const res = await createSession();
							console.log(res);
						}}
					>
						<h5>New Session</h5>
						<Error error={error} />
						<fieldset disabled={loading} aria-busy={loading}>
							<input
								type="text"
								id="sessionName"
								name="sessionName"
								placeholder="Session Name"
								value={this.state.sessionName}
								onChange={this.handleChange}
								required
							/>
							<input
								type="text"
								id="sessionCode"
								name="sessionCode"
								placeholder="Session Code"
								value={this.state.sessionCode}
								onChange={this.handleChange}
								required
							/>
							<div className="submitButton">
								<button type="submit">Submit{loading ? 'ting' : ''} </button>
							</div>
						</fieldset>
					</Form>
				)}
			</Mutation>
		);
	}
}
export default CreateSession;
