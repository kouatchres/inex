import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

const SINGLE_CANDIDATE_QUERY = gql`
  query SINGLE_CANDIDATE_QUERY($id: ID!) {
    candidate(where: { id: $id }) {
      id
      cand1stName
     cand3rdName
      cand2ndName
    }
  }
`;
const UPDATE_CANDIDATE_MUTATION = gql`
  mutation UPDATE_CANDIDATE_MUTATION($cand1stName: String, $cand2ndName: String, $cand3rdName: String) {
    updateCandidate(cand1stName: $cand1stName, cand2ndName: $cand2ndName, cand3rdName: $cand3rdName ) {
      id
      cand1stName
      cand2ndName
      cand3rdName
    }
  }
`;

class UpdateCandidate extends Component {
  state = {};
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  updateCandidate = async (e, updateCandidateMutation) => {
    e.preventDefault();
    console.log('Updating candidate!!');
    console.log(this.state);
    const res = await updateCandidateMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    });
    console.log('Updated!!');
  };

  render() {
    return (
      <Query
        query={SINGLE_CANDIDATE_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.candidate) return <p>No candidate Found for ID {this.props.id}</p>;
          return (
            <Mutation mutation={UPDATE_CANDIDATE_MUTATION} variables={this.state}>
              {(updateCandidate, { loading, error }) => (
                <Form onSubmit={e => this.updateCandidate(e, updateCandidate)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="cand1stName">
                      cand1stName
                      <input
                        type="text"
                        id="cand1stName"
                        name="cand1stName"
                        placeholder="cand1stName"
                        required
                        defaultValue={data.candidate.cand1stName}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="cand3rdName">
                      Price
                      <input
                        type="text"
                        id="cand3rdName"
                        name="cand3rdName"
                        placeholder="Last Name"
                        required
                        defaultValue={data.candidate.cand3rdName}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="cand2ndName">
                      cand2ndName
                      <textarea
                        id="cand2ndName"
                        name="cand2ndName"
                        placeholder="Enter A cand2ndName"
                        required
                        defaultValue={data.candidate.cand2ndName}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">Updat{loading ? 'ing' : 'e'}</button>
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

export default UpdateCandidate;
export { UPDATE_CANDIDATE_MUTATION };
