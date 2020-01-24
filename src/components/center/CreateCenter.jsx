import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { createCenterMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject } from "../queries&Mutations&Functions/Functions";

import {
  getAllRegionsQuery,
  getDivisionsOfARegionQuery,
  getSubDivisionsOfADivisionQuery,
  getTownsOfASubDivisionQuery
} from "../queries&Mutations&Functions/Queries";

const StyledDivision = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
`;

class CreateCenter extends Component {
  state = {
    centerName: "",
    centerCode: "",
    centerNumber: "",
    townID: "12",
    divisionID: "12",
    subDivisionID: "12",
    regionID: "12",
    region: "",
    division: "",
    subDivision: "",
    town: ""
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const setValue = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: setValue });
  };
  resetForm() {
    this.setState({ centerName: "", centerCode: "", centerNumber: "" });
  }
  
  render() {
    const { regionID, divisionID, subDivisionID, townID}= this.state
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
            <Query query={getDivisionsOfARegionQuery}
             variables={regions && (getSelectedObject(regions,regionID) || anyRegion)}>
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
                  <Query query={getSubDivisionsOfADivisionQuery}
                   variables={division && (getSelectedObject(division,divisionID) || anyDivision)}>
                    {({ data, loading, error }) => {
                      {
                        loading && <p>Loading...</p>;
                      }
                      {
                        error && <Error error={error} />;
                      }
                      const { division: departement } = data;
                      const { subDivision: arrondissement } = departement;

                      {/* const anySubDivision = arrondissement[0]; */}
                      console.log(departement);

                      const subDivisionsOptions = arrondissement.map(item => (
                        <option value={item.id} key={item.id}>
                          {item.subDivName}
                        </option>
                      ));

                      return (
                        <Query
                          query={getTownsOfASubDivisionQuery}
                          variables={arrondissement && getSelectedObject(arrondissement, subDivisionID) }
                        >
                          {({ data, loading, error }) => {
                            {
                              loading && <p>Loading...</p>;
                            }
                            {
                              error && <Error>error={error}</Error>;
                            }

                            const village = data.subDivision;

                            const allTowns = { ...village };

                            const { town } = allTowns;
                            const refinedTown = town && town.map(({ __typename, townName, townCode, ...others }) => others);

                            return (
                              <Mutation
                                mutation={createCenterMutation}
                                variables={{
                                  ...this.state,
                                  town: town && getSelectedObject(refinedTown, townID)
                                }}
                              >
                                {(createCenter, { loading, error }) => (
                                  <StyledDivision>
                                    <Form
                                      onSubmit={async e => {
                                        e.preventDefault();
                                        const res = await createCenter();
                                        console.log(res);
                                        this.resetForm();
                                      }}
                                    >
                                      <h5>Nouveau Centre d'Examen</h5>
                                      <Error error={error} />
                                      <fieldset disabled={loading} aria-busy={loading}>
                                        <select
                                          type="select"
                                          id="regionID"
                                          name="regionID"
                                          value={this.state.regionID}
                                          onChange={this.handleChange}
                                          required
                                        >
                                          <option>Choisissez une region</option>
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
                                          <option>Choisissez un departement</option>
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
                                          <option>Choisissez un arrondissement</option>
                                          {subDivisionsOptions}
                                        </select>
                                        <select
                                          type="select"
                                          id="townID"
                                          name="townID"
                                          value={this.state.townID}
                                          onChange={this.handleChange}
                                          required
                                        >
                                          <option>Choisissez une ville</option>
                                          {town
                                            && town.map(item => (
                                                <option value={item.id} key={item.id}>
                                                  {item.townName}
                                                </option>
                                              ))
                                           }
                                        </select>
                                        <input
                                          type="text"
                                          id="centerName"
                                          name="centerName"
                                          placeholder="Nom du Centre d'examen"
                                          value={this.state.centerName}
                                          onChange={this.handleChange}
                                          required
                                        />
                                        <input
                                          type="text"
                                          id="centerCode"
                                          name="centerCode"
                                          placeholder="Code centre d'examen"
                                          value={this.state.centerCode}
                                          onChange={this.handleChange}
                                          required
                                        />
                                        <input
                                          type="text"
                                          id="centerNumber"
                                          name="centerNumber"
                                          placeholder="No du Centre"
                                          value={this.state.centerNumber}
                                          onChange={this.handleChange}
                                          required
                                        />
                                        <div className="submitButton">
                                          <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
                                        </div>
                                      </fieldset>
                                    </Form>
                                  </StyledDivision>
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
        }}
      </Query>
    );
  }
}

export default CreateCenter;
