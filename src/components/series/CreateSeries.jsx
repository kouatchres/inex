import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { createSeriesMutation } from "../queries&Mutations&Functions/Mutations";
import { getAllExamsQuery, getAllEducTypesOfAnExam } from "../queries&Mutations&Functions/Queries";

const StyledDivision = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
`;

class CreateSeries extends Component {
  state = {
    seriesName: "",
    examID: "",
    seriesCode: "",
    educationTypeID: "",
    educationType: ""
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ seriesName: "", seriesCode: "" });
  }

  getSelectedExam = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempExams = [...dataSource];
      // get the selected division object
      const selectedExam = tempExams.find(item => item.id === this.state.examID);
      console.log(selectedExam);
      return selectedExam;
    }
  };

  getSelectedSeries = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempSeries = [...dataSource];
      // get the selected division object
      const selectedSeries = tempSeries.find(item => item.id === this.state.seriesID);

      console.log(selectedSeries);
      return selectedSeries;
    }
  };

  getSelectedEducType = dataSource => {
    // 1 copy the data source
    if (dataSource.length > 0) {
      const tempEducTypes = [...dataSource];
      // get the region object
      const selectedEducType = tempEducTypes.find(item => item.id === this.state.educationTypeID);
      console.log("getting selected EducType");
      console.log(selectedEducType);
      return selectedEducType;
    }
  };

  render() {
    return (
      <Query query={getAllExamsQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          const { exams } = data;
          console.log(exams);

          const examOptions =
            exams &&
            exams.map(item => (
              <option key={item.id} value={item.id}>
                {item.examName}
              </option>
            ));

          return (
            <Query query={getAllEducTypesOfAnExam} variables={exams && this.getSelectedExam(exams)}>
              {({ data, loading, error }) => {
                {
                  loading && <p>Loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                const { exam } = data;
                const newExams = { ...exam };
                const { educationType } = newExams;

                const educTypeOptions =
                  educationType &&
                  educationType.map(item => (
                    <option value={item.id} key={item.id}>
                      {item.educationTypeName}
                    </option>
                  ));

                //*******important function'stripping off __typename')
                const refinedEducTypes =
                  educationType && educationType.map(({ __typename, educationTypeName, ...others }) => others);

                return (
                  <Mutation
                    mutation={createSeriesMutation}
                    variables={{
                      ...this.state,
                      educationType: refinedEducTypes && this.getSelectedEducType(refinedEducTypes)
                    }}
                  >
                    {(createSeries, { loading, error }) => (
                      <StyledDivision>
                        <Form
                          onSubmit={async e => {
                            e.preventDefault();
                            const res = await createSeries();
                            console.log(res);
                            this.resetForm();
                          }}
                        >
                          <h5>New Series</h5>
                          <Error error={error} />
                          <fieldset disabled={loading} aria-busy={loading}>
                            <select
                              type="select"
                              id="examID"
                              name="examID"
                              value={this.state.examID}
                              onChange={this.handleChange}
                              required
                            >
                              <option>Choisissez un Examen</option>
                              {examOptions}
                            </select>
                            <select
                              type="select"
                              id="educationTypeID"
                              name="educationTypeID"
                              value={this.state.educationTypeID}
                              onChange={this.handleChange}
                              required
                            >
                              <option>Choisir un type D'enseignement</option>
                              {educTypeOptions}
                            </select>

                            <input
                              type="text"
                              id="seriesName"
                              name="seriesName"
                              placeholder="Series Name"
                              value={this.state.seriesName}
                              onChange={this.handleChange}
                              required
                            />
                            <input
                              type="text"
                              id="seriesCode"
                              name="seriesCode"
                              placeholder="Series Code"
                              value={this.state.seriesCode}
                              onChange={this.handleChange}
                              required
                            />
                            <div className="submitButton">
                              <button type="submit">Valid{loading ? "ation en cours" : "er"} </button>
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
  }
}

export default CreateSeries;
