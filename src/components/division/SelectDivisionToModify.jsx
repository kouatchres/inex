import React, { Component } from "react";
import { Query } from "react-apollo";
import Form from "../styles/Form";
import Link from "next/link";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import styled from "styled-components";
import DeleteDivision from "./DeleteDivision";
import { getAllRegionsQuery, getDivisionsOfARegionQuery } from "../queries&Mutations&Functions/Queries";

const DeleteBlock = styled.div`
  align-content: left;
`;
const UpdateBlock = styled.button`
  font-weight: bold;
  border-radius: 8px;
  font-size: 1.5rem;
  height: 30px;
  border: none;
  padding: 5px;
  align-items: center;
  background-color: white;
  color: black;
  border: 2px solid #4caf50; /* Green */
  :hover {
    cursor: pointer;
    background-color: #4c50;
    color: #4caf50;
  }
`;

const SelectBlock = styled.div`
  /* display: block; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const StyledDivision = styled.div`
  display: grid;
  grid-template-columns: 20fr auto auto;
  grid-gap: 20px;
  text-align: center;
  margin: 0 auto;
  width: 70vw;
`;
class SelectDivisionToModify extends Component {
  state = {
    regionID: "12",
    id: "122",
    divisionID: "452"
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  getSelectedRegion = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempRegions = [...dataSource];
      // get the region object
      const selectedRegion = tempRegions.find(item => item.id === this.state.regionID);
      console.log("getting selected region");
      console.log(selectedRegion);
      return selectedRegion;
    }
  };
  getSelectedDivision = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempDivisions = [...dataSource];
      // get the region object
      const selectedDivision = tempDivisions.find(item => item.id === this.state.id);
      console.log("getting selected region");
      console.log(selectedDivision);
      return selectedDivision;
    }
  };

  render = () => {
    const { id } = this.state;
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
          //'getting region from the state')
          console.log(this.state.regions);

          const getRegions = regions.map(item => (
            <option value={item.id} key={item.id}>
              {item.regName} - {item.regCode}
            </option>
          ));
          return (
            <Query query={getDivisionsOfARegionQuery} variables={this.getSelectedRegion(regions) || anyRegion}>
              {({ data, loading, error }) => {
                {
                  loading && <p>Loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }

                console.log("these are the divisions of the selected region");
                console.log(data.region.division);
                const divisionsOptions = data.region.division.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.divName}
                  </option>
                ));

                return (
                  <Form
                    onSubmit={async e => {
                      e.preventDefault();
                      const res = await updateDivision();
                      console.log(res);
                    }}
                  >
                    <h5>Modification d'un Departement</h5>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <StyledDivision>
                        <SelectBlock>
                          <select
                            type="select"
                            id="regionID"
                            name="regionID"
                            value={this.state.regionID}
                            onChange={this.handleChange}
                            required
                          >
                            <option> Choisissez la region</option>
                            {getRegions}
                          </select>
                          <select type="select" id="id" name="id" value={this.state.id} onChange={this.handleChange} required>
                            <option>Departement a modifier</option>
                            {divisionsOptions}
                          </select>
                        </SelectBlock>

                        <UpdateBlock>
                          <Link href={{ pathname: "../updates/updateDivision", query: { id } }}>
                            <a>Valider</a>
                          </Link>
                        </UpdateBlock>
                        <DeleteBlock>
                          <DeleteDivision id={this.state.id}>Delete</DeleteDivision>
                        </DeleteBlock>
                      </StyledDivision>
                    </fieldset>
                  </Form>
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  };
}

export default SelectDivisionToModify;
