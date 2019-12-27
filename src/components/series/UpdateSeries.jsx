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

const SINGLE_SERIES_QUERY = gql`
  query SINGLE_SERIES_QUERY($id: ID!) {
    series(id: $id) {
      seriesName
      seriesCode
      id
    }
  }
`;

const UPDATE_SERIES_MUTATION = gql`
  mutation UPDATE_SERIES_MUTATION($id: ID!, $seriesName: String, $seriesCode: String) {
    updateSeries(id: $id, seriesName: $seriesName, seriesCode: $seriesCode) {
      seriesName
      seriesCode
      id
    }
  }
`;

class UpdateSeries extends Component {
  state = {};

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateSingleSeries = async (e, updateMutation) => {
    e.preventDefault();
    console.log("Updating series!!");
    const res = await updateMutation({
      variables: {
        ...this.state,
        id: this.props.id
      }
    });
    console.log("Series Updated!!");
  };

  render() {
    return (
      <Query
        query={SINGLE_SERIES_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading, error }) => {
          console.log(data);
          const { series } = data;
          const { seriesName, seriesCode } = series;
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          {
            !data.series && <p>No series Found for ID {this.props.id}</p>;
          }

          return (
            <Mutation mutation={UPDATE_SERIES_MUTATION} variables={{ id: this.props.id }}>
              {(updateSeries, { loading, error }) => (
                <Form onSubmit={e => this.updateSingleSeries(e, updateSeries)}>
                  <h5>Modification de serie</h5>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <DataFrame>
                      <input
                        type="text"
                        id="seriesName"
                        name="seriesName"
                        placeholder="Nom serie"
                        defaultValue={seriesName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="seriesCode"
                        name="seriesCode"
                        placeholder="Code serie"
                        defaultValue={seriesCode}
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

export default UpdateSeries;
