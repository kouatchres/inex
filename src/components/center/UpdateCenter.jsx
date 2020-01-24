import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage.js";
import gql from "graphql-tag";
import styled from "styled-components";
import { singleCenterQuery } from "../queries&Mutations&Functions/Queries";
import { updateCenterMutation } from "../queries&Mutations&Functions/Mutations";

const DataFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

class UpdateCenter extends Component {
  state = {};

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateSingleCenter = async (e, updateMutation) => {
    e.preventDefault();
    const res = await updateMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
  };

  render() {
    return (
      <Query
        query={singleCenterQuery}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading, error }) => {
          console.log(data);
          const { center } = data;
          const { centerName, centerCode } = center;

          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          {
            !data.center && <p>Pas de Centre pour ce ID {this.props.id}</p>;
          }

          return (
            <Mutation mutation={updateCenterMutation} variables={{ id: this.props.id }}>
              {(updateCenter, { loading, error }) => (
                <Form onSubmit={e => this.updateSingleCenter(e, updateCenter)}>
                  <h5>Modifier le nom du Centre</h5>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <DataFrame>
                      <input
                        type="text"
                        id="centerName"
                        name="centerName"
                        placeholder="Nom Centre"
                        defaultValue={centerName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="centerCode"
                        name="centerCode"
                        placeholder="Code Centre"
                        defaultValue={centerCode}
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

export default UpdateCenter;
