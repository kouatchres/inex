import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage.js";
import gql from "graphql-tag";
import styled from "styled-components";

const DataFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

const SINGLE_RANK_QUERY = gql`
  query SINGLE_RANK_QUERY($id: ID!) {
    rank(id: $id) {
      rankName
      rankCode
      id
    }
  }
`;

const UPDATE_RANK_MUTATION = gql`
  mutation UPDATE_RANK_MUTATION($id: ID!, $rankName: String, $rankCode: String) {
    updateRank(id: $id, rankName: $rankName, rankCode: $rankCode) {
      id
      rankName
      rankCode
    }
  }
`;

class UpdateRank extends Component {
  state = {};

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateSingleRank = async (e, updateMutation) => {
    e.preventDefault();
    console.log("Updating Rank!!");
    const res = await updateMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    console.log("Rank Updated!!");
  };

  render() {
    return (
      <Query
        query={SINGLE_RANK_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading, error }) => {
          console.log(data);
          const { rankName, rankCode } = data.rank;
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          {
            !data.Rank && <p>No Rank Found for ID {this.props.id}</p>;
          }

          return (
            <Mutation mutation={UPDATE_RANK_MUTATION} variables={{ id: this.props.id }}>
              {(updateRank, { loading, error }) => (
                <Form onSubmit={e => this.updateSingleRank(e, updateRank)}>
                  <h5>Update a Rank</h5>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <DataFrame>
                      <input
                        type="text"
                        id="rankName"
                        name="rankName"
                        placeholder="Nom Poste"
                        defaultValue={rankName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="rankCode"
                        name="rankCode"
                        placeholder="Code Post"
                        defaultValue={rankCode}
                        onChange={this.handleChange}
                        required
                      />
                      <div className="submitButton">
                        <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
                      </div>
                    </DataFrame>
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

export default UpdateRank;
export { UPDATErANK_MUTATION };
