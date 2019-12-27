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

const SINGLE_SESSION_QUERY = gql`
  query SINGLE_SESSION_QUERY($id: ID!) {
    session(id: $id) {
      sessionName
      sessionCode
      id
    }
  }
`;

const UPDATE_SESSION_MUTATION = gql`
  mutation UPDATE_SESSION_MUTATION($id: ID!, $sessionName: String, $sessionCode: String) {
    updateSession(id: $id, sessionName: $sessionName, sessionCode: $sessionCode) {
      sessionName
      sessionCode
      id
    }
  }
`;

class UpdateSession extends Component {
  state = {};

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updatSingleSession = async (e, UpdateMutation) => {
    e.preventDefault();
    console.log("Updating Session!!");
    const res = await UpdateMutation({
      variables: {
        ...this.state,
        id: this.props.id
      }
    });
    console.log("Session Updated!!");
  };

  render() {
    return (
      <Query
        query={SINGLE_SESSION_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading, error }) => {
          console.log(data);
          const { session } = data;
          console.log(session);

          const { sessionName, sessionCode } = session;

          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          {
            !data.session && <p>No session Found for ID {this.props.id}</p>;
          }

          return (
            <Mutation mutation={UPDATE_SESSION_MUTATION} variables={{ id: this.props.id }}>
              {(updateSession, { loading, error }) => (
                <Form onSubmit={e => this.updatSingleSession(e, updateSession)}>
                  <h5>Modification de Session</h5>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <DataFrame>
                      <input
                        type="text"
                        id="sessionName"
                        name="sessionName"
                        placeholder="Nom session"
                        defaultValue={sessionName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="sessionCode"
                        name="sessionCode"
                        placeholder="Code session"
                        defaultValue={sessionCode}
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

export default UpdateSession;
