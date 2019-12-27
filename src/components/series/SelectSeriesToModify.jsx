import React, { Component } from "react";
import { Query } from "react-apollo";
import Form from "../styles/Form";
import Link from "next/link";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import styled from "styled-components";
import DeleteDivision from "./DeleteSeries";

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

const GET_ALL_EDUCATION_TYPES_QUERY = gql`
  query GET_ALL_EDUCATION_TYPES_QUERY {
    educationTypes(orderBy: educationTypeName_DESC) {
      id
      educationTypeName
      educationTypeCode
    }
  }
`;

const GET_SERIES_OF_AN_EDUCATION_TYPE_QUERY = gql`
  query GET_SERIES_OF_AN_EDUCATION_TYPE_QUERY($id: ID!) {
    educationType(id: $id) {
      id
      educationTypeName
      series(orderBy: seriesName_ASC) {
        id
        seriesName
        seriesCode
      }
    }
  }
`;

class SelectSeriesToModify extends Component {
  state = {
    educTypeID: "125",
    id: "122"
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  getSelectedEducType = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempEducTypes = [...dataSource];
      // get the region object
      const selectedEducType = tempEducTypes.find(item => item.id === this.state.educTypeID);
      console.log("getting selected EducType");
      console.log(selectedEducType);
      return selectedEducType;
    }
  };
  getSelectedSeries = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempSerieses = [...dataSource];
      // get the region object
      const selectedSeries = tempSerieses.find(item => item.id === this.state.id);
      console.log("getting thee selected series");
      console.log(selectedSeries);
      return selectedSeries;
    }
  };

  render = () => {
    const { id } = this.state;
    return (
      <Query query={GET_ALL_EDUCATION_TYPES_QUERY}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          const { educationTypes } = data;
          console.log(data);
          const anyEducType = educationTypes[0];
          //'getting region from the state')

          const getEducTypes = data.educationTypes.map(item => (
            <option value={item.id} key={item.id}>
              {item.educationTypeName} - {item.educationTypeCode}
            </option>
          ));
          return (
            <Query
              query={GET_SERIES_OF_AN_EDUCATION_TYPE_QUERY}
              variables={this.getSelectedEducType(educationTypes) || anyEducType}
            >
              {({ data, loading, error }) => {
                {
                  loading && <p>Loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }

                console.log("these are the series of the selected educ Type");
                const { educationType } = data;
                const getAllSeries = { ...educationType };
                const { series } = getAllSeries;
                console.log(series);

                const seriesOptions = series.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.seriesName}
                  </option>
                ));

                return (
                  <Form
                    onSubmit={async e => {
                      e.preventDefault();
                      const res = await updateSeries();
                      console.log(res);
                    }}
                  >
                    <h5>Modification d'une Serie</h5>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <StyledDivision>
                        <SelectBlock>
                          <select
                            type="select"
                            id="educTypeID"
                            name="educTypeID"
                            value={this.state.educTypeID}
                            onChange={this.handleChange}
                            required
                          >
                            <option>Type D'enseignement</option>
                            {getEducTypes}
                          </select>
                          <select type="select" id="id" name="id" value={this.state.id} onChange={this.handleChange} required>
                            <option>Serie a modifier</option>
                            {seriesOptions}
                          </select>
                        </SelectBlock>

                        <UpdateBlock>
                          <Link href={{ pathname: "../updates/updateSeries", query: { id } }}>
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

export default SelectSeriesToModify;
