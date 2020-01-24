import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import { createNewSubjectTypeMutation } from "../queries&Mutations&Functions/Mutations";

class createSubjectType extends Component {
  state = {
    subjectTypeName: "",
    subjectTypeCode: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ subjectTypeName: "", subjectTypeCode: "" });
  }

  render() {
    return (
      <Mutation mutation={createNewSubjectTypeMutation} variables={this.state}>
        {(createSubjectType, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createSubjectType();
              console.log(res);
              this.resetForm();
            }}
          >
            <h5>Nouveau Type de Matiere</h5>
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <input
                type="text"
                id="subjectTypeName"
                name="subjectTypeName"
                placeholder="Nom Type de Matiere"
                value={this.state.subjectTypeName}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                id="subjectTypeCode"
                name="subjectTypeCode"
                placeholder="Code type de Matiere"
                value={this.state.subjectTypeCode}
                onChange={this.handleChange}
                required
              />

              <div className="submitButton">
                <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
              </div>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
export default createSubjectType;
