import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage.js";
import gql from "graphql-tag";
import styled from "styled-components";
import { singleTownQuery } from "../queries&Mutations&Functions/Queries";
import { updateTownMutation } from "../queries&Mutations&Functions/Mutations";
import { handleChange } from "../queries&Mutations&Functions/Functions";

const DataFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

class UpdateTown extends Component {
  state = {};

  updateSingleTown = async (e, updateMutation) => {
    e.preventDefault();
    console.log("Updating town!!");
    const res = await updateMutation({
      variables: {
        ...this.state,
        id: this.props.id
      }
    });
    console.log("Town Updated!!");
  };

  render() {
    return (
      <Query
        query={singleTownQuery}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading, error }) => {
          console.log(data);
          const { town } = data;
          const { townName, townCode } = town;
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          {
            !data.town && <p>No Townor ID {this.props.id}</p>;
          }

          return (
            <Mutation mutation={updateTownMutation} variables={{ id: this.props.id }}>
              {(updateTown, { loading, error }) => (
                <Form onSubmit={e => this.updateSingleTown(e, updateTown)}>
                  <h5>Modifier d'une Ville</h5>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <DataFrame>
                      <input
                        type="text"
                        id="townName"
                        name="townName"
                        placeholder="Nom Ville"
                        defaultValue={townName}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="townCode"
                        name="townCode"
                        placeholder="Code Ville"
                        defaultValue={townCode}
                        onChange={handleChange}
                        required
                      />
                      <div className="submitButton">
                        <button type="submit">Modifi{loading ? "cation en cours" : "er"}</button>
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

export default UpdateTown;
