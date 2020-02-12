import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { updateScoreMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject, calcCandAve } from "../queries&Mutations&Functions/Functions";
import {
  getAllEducationTypesQuery,
  dataForAverage,
  getAllSubjectsOfASeriesQuery,
  getAllSeriesOfAnEducationTypeQuery
} from "../queries&Mutations&Functions/Queries";
const StyledDivision = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  margin: 0 auto;
  min-width: 52rem;
`;

const CenterSelect = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 40rem;
`;

const OtherSelect = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 40rem;
`;

class EnterMarks extends Component {
  state = {
    subjectAve: "",
    seriesID: "12",
    examID: "12",
    educTypeID: "12",
    sessionID: "",
    candExamSecretCode: "",
    subjectSeriesID: "ck5thzgfrwmow09352gytkff6"
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  resetForm = () => {
    this.setState({ candExamSecretCode: "", subjectAve: "" });
  };

  makeCandVariableObject = candCodeValue => {
    const storedCandidate = {
      candExamSecretCode: `${candCodeValue}`
    };
    return storedCandidate;
  };

  updateItemMutation = async (e, updateMutation) => {
    e.preventDefault();
    console.log("Entering Marks!!");
    const res = await updateMutation({
      variables: {
        ...this.state
      }
    });
    console.log("Marks entered!!");
  };

  render() {
    return (
      <Query query={getAllEducationTypesQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          console.log(data);

          const { educationTypes } = data;
          console.log(educationTypes);
          const educTypeOptions =
            educationTypes &&
            educationTypes.map(item => (
              <option key={item.id} value={item.id}>
                {item.educationTypeName}
              </option>
            ));

          return (
            <Query
              query={getAllSeriesOfAnEducationTypeQuery}
              variables={educationTypes && getSelectedObject(educationTypes, this.state.educTypeID)}
            >
              {({ data, loading, error }) => {
                {
                  loading && <p>loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                console.log(data);

                const { educationType } = data;

                const seriesEducType = { ...educationType };
                const { series } = seriesEducType;
                console.log(series);

                const refinedSeries = series && series.map(({ __typename, seriesName, ...others }) => others);
                const seriesOptions =
                  series &&
                  series.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.seriesName}
                    </option>
                  ));
                return (
                  <Query
                    query={getAllSubjectsOfASeriesQuery}
                    variables={series && getSelectedObject(series, this.state.seriesID)}
                  >
                    {({ data, loading, error }) => {
                      {
                        loading && <p>loading...</p>;
                      }
                      {
                        error && <Error error={error} />;
                      }

                      console.log(data);
                      const { series } = data;
                      const allEducTypes = { ...series };
                      const { subjectSeries } = allEducTypes;
                      console.log(subjectSeries);

                      const refinedSubjectSeries =
                        subjectSeries && subjectSeries.map(({ __typename, subjectName, subjectCode, ...others }) => others);
                      const subjectOptions =
                        subjectSeries &&
                        subjectSeries.map(item => (
                          <option key={item.id} value={item.id}>
                            {item.subjectName}
                          </option>
                        ));

                      return (
                        <Mutation
                          mutation={updateScoreMutation}
                          variables={{
                            ...this.state,
                            subjectSeries:
                              refinedSubjectSeries && getSelectedObject(refinedSubjectSeries, this.state.subjectSeriesID)
                          }}
                        >
                          {(updateScore, { loading, error }) => (
                            <Form
                              onSubmit={async e => {
                                e.preventDefault();
                                const res = await this.updateItemMutation(e, updateScore);
                                this.resetForm();
                                console.log(res);
                              }}
                            >
                              <h4>Inscrire les notes des candidats</h4>
                              <Error error={error} />
                              <fieldset disabled={loading} aria-busy={loading}>
                                <StyledDivision>
                                  <select
                                    type="select"
                                    id="educTypeID"
                                    name="educTypeID"
                                    value={this.state.educTypeID}
                                    onChange={this.handleChange}
                                    required
                                  >
                                    <option>Choisir un Type d'enseignement</option>
                                    {educTypeOptions}
                                  </select>
                                  <select
                                    type="select"
                                    id="seriesID"
                                    name="seriesID"
                                    value={this.state.seriesID}
                                    onChange={this.handleChange}
                                    required
                                  >
                                    <option>Choisir une Serie</option>
                                    {seriesOptions}
                                  </select>
                                  <select
                                    type="select"
                                    id="subjectSeriesID"
                                    name="subjectSeriesID"
                                    value={this.state.subjectSeriesID}
                                    onChange={this.handleChange}
                                    required
                                  >
                                    <option>Choisir la matiere</option>
                                    {subjectOptions}
                                  </select>
                                  <input
                                    type="text"
                                    id="candExamSecretCode"
                                    name="candExamSecretCode"
                                    placeholder="Code secret du candidat"
                                    value={this.state.candExamSecretCode}
                                    onChange={this.handleChange}
                                    required
                                  />
                                  <input
                                    type="number"
                                    step="0.001"
                                    min="0.0"
                                    max="20.0"
                                    id="subjectAve"
                                    name="subjectAve"
                                    placeholder="Note de la matiere"
                                    value={this.state.subjectAve}
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

export default EnterMarks;
