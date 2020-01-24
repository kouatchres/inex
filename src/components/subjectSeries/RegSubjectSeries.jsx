import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { registerSubjectSeriesMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject } from "../queries&Mutations&Functions/Functions";
import {
  getAllExamsQuery,
  getAllSubjectsOfASeriesQuery,
  getAllSubjectsQuery,
  getAllSeriesOfAnEducationTypeQuery,
  getAllEducTypesOfAnExam
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

class RegSubjectSeries extends Component {
  state = {
    seriesID: "12",
    examID: "12",
    educTypeID: "12",
    subjectID: "12",
    exam: "",
    series: "",
    subject: ""
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    const {examID, seriesID, subjectID, educTypeID} = this.state
    return (
      <Query query={getAllExamsQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>loading...</p>;
          }
          {
            error && <Error error={error} />;
          }

          const { exams } = data;
          console.log(exams);
          const examsOptions = exams.map(item => (
            <option key={item.id} value={item.id}>
              {item.examName}
            </option>
          ));

          return (
            <Query query={getAllEducTypesOfAnExam} variables={exams && getSelectedObject(exams, examID)}>
              {({ data, loading, error }) => {
                {
                  loading && <p>loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                console.log(data);
                const { exam } = data;
                const educTypeList = { ...exam };
                const { educationType } = educTypeList;
                console.log(educationType);
                const educTypeOptions =
                  educationType &&
                  educationType.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.educationTypeName}
                    </option>
                  ));

                return (
                  <Query
                    query={getAllSeriesOfAnEducationTypeQuery}
                    variables={educationType && getSelectedObject(educationType, educTypeID)}
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
                        <Query query={getAllSubjectsOfASeriesQuery} variables={series && getSelectedObject(series, seriesID)}>
                          {({ data, loading, error }) => {
                            {
                              loading && <p>loading...</p>;
                            }
                            {
                              error && <Error error={error} />;
                            }

                            console.log(data);
                            const { series } = data;
                            const allsubjSeries = { ...series };
                            const { subjectSeries } = allsubjSeries;
                            console.log(subjectSeries);

                            return (
                              <Query query={getAllSubjectsQuery}>
                                {({ data, loading, error }) => {
                                  {
                                    loading && <p>loading...</p>;
                                  }
                                  {
                                    error && <Error error={error} />;
                                  }

                                  const { subjects } = data;
                                  console.log(data);
                                  const refinedSubject =
                                    subjects && subjects.map(({ __typename, subjectName, ...others }) => others);
                                  const subjectOptions =
                                    subjects &&
                                    subjects.map(item => (
                                      <option key={item.id} value={item.id}>
                                        {item.subjectName}
                                      </option>
                                    ));

                                  return (
                                    <Mutation
                                      mutation={registerSubjectSeriesMutation}
                                      variables={{
                                        ...this.state,
                                        subject: refinedSubject && getSelectedObject(refinedSubject, subjectID),
                                        series: refinedSeries && getSelectedObject(refinedSeries, seriesID)
                                      }}
                                    >
                                      {(createSubjectSeries, { loading, error }) => (
                                        <Form
                                          onSubmit={async e => {
                                            e.preventDefault();
                                            const res = await createSubjectSeries();
                                            console.log(res);
                                          }}
                                        >
                                          <h4>Inscrire les matieres aux Series</h4>
                                          <Error error={error} />
                                          <fieldset disabled={loading} aria-busy={loading}>
                                            <StyledDivision>
                                              <select
                                                type="select"
                                                id="examID"
                                                name="examID"
                                                value={this.state.examID}
                                                onChange={this.handleChange}
                                                required
                                              >
                                                <option>Choisir un Examen</option>
                                                {examsOptions}
                                              </select>
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
                                                id="subjectID"
                                                name="subjectID"
                                                value={this.state.subjectID}
                                                onChange={this.handleChange}
                                                required
                                              >
                                                <option>Choisir la matiere</option>
                                                {subjectOptions}
                                              </select>

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
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default RegSubjectSeries;
