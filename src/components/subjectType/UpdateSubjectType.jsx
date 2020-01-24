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

const SINGLE_SUBJECT_TYPE_QUERY = gql`
  query SINGLE_SUBJECT_TYPE_QUERY($id: ID!) {
    subjectType(id: $id) {
      subjectTypeName
      subjectTypeCode
      id
    }
  }
`;

const UPDATE_SUBJECT_TYPE_MUTATION = gql`
  mutation UPDATE_SUBJECT_TYPE_MUTATION($id: ID!, $subjectTypeName: String, $subjectTypeCode: String) {
    updateSubjectType(id: $id, subjectTypeName: $subjectTypeName, subjectTypeCode: $subjectTypeCode) {
      id
      subjectTypeName
      subjectTypeCode
    }
  }
`;

class UpdateSubjectType extends Component {
  state = {};

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ subjectTypeName: "", subjectTypeCode: "" });
  }

  updateSingleSubjectType = async (e, updateMutation) => {
    e.preventDefault();
    console.log("Updating SubjectType!!");
    const res = await updateMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    console.log("SubjectType Updated!!");
  };

  render() {
    return (
      <Query
        query={SINGLE_SUBJECT_TYPE_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading, error }) => {
          console.log(data);
          const { subjectType } = data;
          const { subjectTypeName, subjectTypeCode } = subjectType;
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          {
            !subjectType && <p>No SubjectType Found for ID {this.props.id}</p>;
          }

          return (
            <Mutation mutation={UPDATE_SUBJECT_TYPE_MUTATION} variables={{ id: this.props.id }}>
              {(updateSubjectType, { loading, error }) => (
                <Form
                  onSubmit={async e => {
                    e.preventDefault();
                    await this.updateSingleSubjectType(e, updateSubjectType);
                    this.resetForm();
                  }}
                >
                  <h5>Modifier Un Type de Matiere</h5>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <DataFrame>
                      <input
                        type="text"
                        id="subjectTypeName"
                        name="subjectTypeName"
                        placeholder="Nom Matiere"
                        defaultValue={subjectTypeName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="subjectTypeCode"
                        name="subjectTypeCode"
                        placeholder="Code Matiere"
                        defaultValue={subjectTypeCode}
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

export default UpdateSubjectType;
export { UPDATE_SubjectType_MUTATION };
