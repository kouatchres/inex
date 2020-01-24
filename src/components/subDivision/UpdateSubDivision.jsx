import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage.js";
import styled from "styled-components";
import { singleSubDivisionQuery } from "../queries&Mutations&Functions/Queries";
import { updateSubDivisionMutation } from "../queries&Mutations&Functions/Mutations";

const DataFrame = styled.div`
  display: flex;
  flex-direction: column;
`;
class UpdateSubDivision extends Component {
  state = {};

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateSingleSubDivision = async (e, updateMutation) => {
    e.preventDefault();
    console.log("Updating town!!");
    const res = await updateMutation({
      variables: {
        ...this.state,
        id: this.props.id
      }
    });
    console.log("Sub division Updated!!");
  };

  render() {
    return (
      <Query
        query={singleSubDivisionQuery}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading, error }) => {
          console.log(data);
          const { subDivision } = data;
          const { subDivName, subDivCode } = subDivision;
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          {
            !data.subDivision && <p>No Sub division Found for ID {this.props.id}</p>;
          }

          return (
            <Mutation mutation={updateSubDivisionMutation} variables={{ id: this.props.id }}>
              {(updateSubDivision, { loading, error }) => (
                <Form onSubmit={e => this.updateSingleSubDivision(e, updateSubDivision)}>
                  <h5>Modifier d'un Arrondissement</h5>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <DataFrame>
                      <input
                        type="text"
                        id="subDivName"
                        name="subDivName"
                        placeholder="Nom Ville"
                        defaultValue={subDivName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="subDivCode"
                        name="subDivCode"
                        placeholder="Code Ville"
                        defaultValue={subDivCode}
                        onChange={this.handleChange}
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

export default UpdateSubDivision;
