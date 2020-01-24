import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { createTownMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject } from "../queries&Mutations&Functions/Functions";
import {
  getAllRegionsQuery,
  getDivisionsOfARegionQuery,
  getSubDivisionsOfADivisionQuery
} from "../queries&Mutations&Functions/Queries";

const StyledDivision = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
`;

class CreateTown extends Component {
  state = {
    townName: "",
    townCode: "",
    divisionID: "12",
    subDivisionID: "12",
    regionID: "12",
    region: "",
    division: "",
    subDiv: ""
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const setValue = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: setValue });
  };
  resetForm() {
    this.setState({ townName: "", townCode: "" });
  }
 
  render() {
    const { regionID, divisionID, subDivisionID} = this.state
    return (
      <Query query={getAllRegionsQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          const { regions } = data;
          const anyRegion = regions[0];

          //prepare data for the region select options
          const regionsOptions = regions.map(item => (
            <option value={item.id} key={item.id}>
              {item.regName}
            </option>
          ));
          return (
            <Query query={getDivisionsOfARegionQuery} variables={getSelectedObject(regions, regionID) || anyRegion}>
              {({ data, loading, error }) => {
                {
                  loading && <p>Loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }

                const { region } = data;
                const { division } = region;
                const anyDivision = division[0];

                const divisionsOptions = division.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.divName}
                  </option>
                ));
                return (
                  <Query query={getSubDivisionsOfADivisionQuery} variables={getSelectedObject(division, divisionID) || anyDivision}>
                    {({ data, loading, error }) => {
                      {
                        loading && <p>Loading...</p>;
                      }
                      {
                        error && <Error error={error} />;
                      }
                      const { division: departement } = data;
                      const { subDivision: arrondissement } = departement;
                      console.log(arrondissement);
                      const refinedSubDiv =
                        arrondissement && arrondissement.map(({ __typename, subDivName, ...others }) => others);

                      const subDivisionsOptions = arrondissement.map(item => (
                        <option value={item.id} key={item.id}>
                          {item.subDivName}
                        </option>
                      ));

                      return (
                        <Mutation
                          mutation={createTownMutation}
                          variables={{
                            ...this.state,
                            subDiv:refinedSubDiv && getSelectedObject(refinedSubDiv, subDivisionID)
                          }}
                        >
                          {(createTown, { loading, error }) => (
                            <Form
                              onSubmit={async e => {
                                e.preventDefault();
                                const res = await createTown();
                                console.log(res);
                                this.resetForm();
                              }}
                            >
                              <h5>Nouvelle Ville</h5>
                              <Error error={error} />
                              <fieldset disabled={loading} aria-busy={loading}>
                                <StyledDivision>
                                  <select
                                    type="select"
                                    id="regionID"
                                    name="regionID"
                                    value={this.state.regionID}
                                    onChange={this.handleChange}
                                    required
                                  >
                                    <option>choisssez une region</option>
                                    {regionsOptions}
                                  </select>

                                  <select
                                    type="select"
                                    id="divisionID"
                                    name="divisionID"
                                    value={this.state.divisionID}
                                    onChange={this.handleChange}
                                    required
                                  >
                                    <option> choisissez un departement</option>
                                    {divisionsOptions}
                                  </select>
                                  <select
                                    type="select"
                                    id="subDivisionID"
                                    name="subDivisionID"
                                    value={this.state.subDivisionID}
                                    onChange={this.handleChange}
                                    required
                                  >
                                    <option> choisissez un arrondissement</option>
                                    {subDivisionsOptions}
                                  </select>
                                  <input
                                    type="text"
                                    id="townName"
                                    name="townName"
                                    placeholder="Nom de la ville"
                                    value={this.state.subDivName}
                                    onChange={this.handleChange}
                                    required
                                  />
                                  <input
                                    type="text"
                                    id="townCode"
                                    name="townCode"
                                    placeholder="Code de la ville"
                                    value={this.state.subDivCode}
                                    onChange={this.handleChange}
                                    required
                                  />
                                  <div className="submitButton">
                                    <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
                                  </div>
                                </StyledDivision>
                              </fieldset>
                            </Form>
                          )}
                        </Mutation>
                      );
                    }}
                  </Query>
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default CreateTown;
