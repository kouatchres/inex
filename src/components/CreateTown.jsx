import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "./styles/Form";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import styled from "styled-components";
import { storeRegion, storedDivision, storedSubDivision } from "../data";

const StyledDivision = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
`;

const GET_ALL_REGIONS_QUERY = gql`
  query GET_ALL_REGIONS_QUERY {
    regions(orderBy: regName_DESC) {
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

const CREATE_TOWN_MUTATION = gql`
  mutation CREATE_TOWN_MUTATION($townName: String!, $townCode: String!, $subDiv: SubDivisionWhereUniqueInput!) {
    createTown(townName: $townName, townCode: $townCode, subDiv: $subDiv) {
      id
      townName
      townCode
      subDiv {
        subDivName
      }
    }
  }
`;

class CreateTown extends Component {
  state = {
    townName: "",
    townCode: "",
    divisionID: "12",
    subDivisionID: "12",
    regionID: "12",
    region: storeRegion,
    division: storedDivision,
    subDiv: storedSubDivision
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
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
          console.log("this is any chosen region");
          console.log(anyRegion);

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

                console.log("these are the divisions of the selected region");
                console.log(data.region.division);
                const { region } = data;
                const { division } = region;
                const anyDivision = division[0];
                console.log(anyDivision);
                const divisionsOptions = division.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.divName}
                  </option>
                ));
                //*******important function'stripping off __typename')
                const divisionsOfARegion = division.map(({ __typename, ...others }) => others);
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
                      console.log("getting sub divisions");
                      console.log(data.division.subDivision);

                      const subDivisionsOptions = data.division.subDivision.map(item => (
                        <option value={item.id} key={item.id}>
                          {item.subDivName}
                        </option>
                      ));
                      //*******important function'stripping off __typename')
                      const subDivisionsOfADivision = data.division.subDivision.map(
                        ({ __typename, subDivName, subDivCode, ...others }) => others
                      );
                      console.log("sub division for the town");
                      console.log(subDivisionsOfADivision);
                      console.log("This are the state values");
                      console.log(this.state);
                      return (
                        <Mutation
                          mutation={CREATE_TOWN_MUTATION}
                          variables={{
                            ...this.state,
                            subDiv: this.getselectedSubDivision(subDivisionsOfADivision)
                          }}
                        >
                          {(createTown, { loading, error }) => (
                            <StyledDivision>
                              <Form
                                onSubmit={async e => {
                                  e.preventDefault();
                                  const res = await createTown();
                                  console.log(res);
                                }}
                              >
                                <h5>Nouvelle Ville</h5>
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
  }
}

export default CreateTown;
export { GET_ALL_SUBDIVISIONS_QUERY };
