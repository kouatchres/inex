import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { select, option } from "@material-ui/core";
import { storedTown, storeRegion, storedDivision, storedSubDivision, bestTowns } from "../../data";

const StyledDivision = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
`;

const GET_ALL_REGIONS_QUERY = gql`
  query GET_ALL_REGIONS_QUERY {
    regions(orderBy: regName_ASC) {
      id
      regName
      regCode
    }
  }
`;
const GET_ALL_DIVISIONS_QUERY = gql`
  query GET_ALL_DIVISIONS_QUERY {
    divisions(orderBy: divName_ASC) {
      id
      divName
      divCode
    }
  }
`;
const GET_DIVISIONS_OF_A_REGION_QUERY = gql`
  query GET_DIVISIONS_OF_A_REGION_QUERY($id: ID!) {
    region(id: $id) {
      id
      regName
      division(orderBy: divName_ASC) {
        id
        divName
        divCode
      }
    }
  }
`;

const GET_SUBDIVISIONS_OF_A_DIVSION_QUERY = gql`
  query GET_SUBDIVISIONS_OF_A_DIVSION_QUERY($id: ID!) {
    division(id: $id) {
      id
      divName
      subDivision(orderBy: subDivName_ASC) {
        id
        subDivName
        subDivCode
      }
    }
  }
`;
const GET_TOWNS_OF_A_SUBDIVISION_QUERY = gql`
  query GET_TOWNS_OF_A_SUBDIVISION_QUERY($id: ID!) {
    subDivision(id: $id) {
      id
      subDivName
      town(orderBy: townName_ASC) {
        id
        townName
        townCode
      }
    }
  }
`;

const CREATE_CENTER_MUTATION = gql`
  mutation CREATE_CENTER_MUTATION(
    $centerName: String!
    $centerNumber: Int
    $centerCode: String!
    $town: TownWhereUniqueInput!
  ) {
    createCenter(centerName: $centerName, centerNumber: $centerNumber, centerCode: $centerCode, town: $town) {
      id
      centerName
      centerCode
      town {
        townName
      }
    }
  }
`;

class CreateCenter extends Component {
  state = {
    townName: "",
    townCode: "",
    townID: "12",
    divisionID: "12",
    subDivisionID: "12",
    regionID: "12",
    region: storeRegion,
    division: storedDivision,
    subDivision: storedSubDivision,
    town: storedTown
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const setValue = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: setValue });
  };

  getselectedDivision = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempDivisions = [...dataSource];
      // get the selected division object
      const selectedDivision = tempDivisions.find(item => item.id === this.state.divisionID);
      console.log(selectedDivision);
      return selectedDivision;
    }
  };

  getselectedSubDivision = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempSubDivisions = [...dataSource];
      // get the selected division object
      const selectedSubDivision = tempSubDivisions.find(item => item.id === this.state.subDivisionID);

      console.log(selectedSubDivision);
      return selectedSubDivision;
    }
  };

  getselectedTown = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempTown = [...dataSource];
      // get the selected division object
      const selectedTown = tempTown.find(item => item.id === this.state.townID);

      console.log(selectedTown);
      return selectedTown;
    }
  };

  getselectedRegion = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempRegions = [...dataSource];
      // get the selected region object
      const selectedRegion = tempRegions.find(item => item.id === this.state.regionID);
      console.log("getting selected region");
      console.log(selectedRegion);
      return selectedRegion;
    }
  };

  render() {
    return (
      <Query query={GET_ALL_REGIONS_QUERY}>
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
            <Query query={GET_DIVISIONS_OF_A_REGION_QUERY} variables={this.getselectedRegion(regions) || anyRegion}>
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
                  <Query
                    query={GET_SUBDIVISIONS_OF_A_DIVSION_QUERY}
                    variables={this.getselectedDivision(division) || anyDivision}
                  >
                    {({ data, loading, error }) => {
                      {
                        loading && <p>Loading...</p>;
                      }
                      {
                        error && <Error error={error} />;
                      }
                      const { division: departement } = data;
                      const { subDivision: arrondissement } = departement;

                      const anySubDivision = arrondissement[0];
                      console.log(departement);

                      const subDivisionsOptions = arrondissement.map(item => (
                        <option value={item.id} key={item.id}>
                          {item.subDivName}
                        </option>
                      ));

                      return (
                        <Query
                          query={GET_TOWNS_OF_A_SUBDIVISION_QUERY}
                          variables={this.getselectedSubDivision(arrondissement) || anySubDivision}
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

                            return (
                              <Mutation
                                mutation={CREATE_CENTER_MUTATION}
                                variables={{
                                  ...this.state,
                                  town: this.getselectedTown(
                                    town ? town.map(({ __typename, townName, townCode, ...others }) => others) : storedTown
                                  )
                                }}
                              >
                                {(createCenter, { loading, error }) => (
                                  <StyledDivision>
                                    <Form
                                      onSubmit={async e => {
                                        e.preventDefault();
                                        const res = await createCenter();
                                        console.log(res);
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
                                            ? town.map(item => (
                                                <option value={item.id} key={item.id}>
                                                  {item.townName}
                                                </option>
                                              ))
                                            : bestTowns.map(item => (
                                                <option value={item.id} key={item.id}>
                                                  {item.townName}
                                                </option>
                                              ))}
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
                                          <button type="submit">Submit{loading ? "ting" : ""}</button>
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
