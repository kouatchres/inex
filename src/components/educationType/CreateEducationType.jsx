import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import { createEducationTypeMutation } from "../queries&Mutations&Functions/Mutations";

class CreateEducationType extends Component {
  state = {
    educationTypeName: "",
    educationTypeCode: ""
  };
  resetForm() {
    this.setState({ educationTypeName: "", educationTypeCode: "" });
  }
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation
        mutation={createEducationTypeMutation}
        variables={{
          ...this.state
        }}
      >
        {(createEducationType, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createEducationType();
              console.log(res);
              this.resetForm();
            }}
          >
            <h5>New Education Type</h5>
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <input
                type="text"
                id="educationTypeName"
                name="educationTypeName"
                placeholder="Education Type Name"
                value={this.state.educationTypeName}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                id="educationTypeCode"
                name="educationTypeCode"
                placeholder="Education Type Code"
                value={this.state.educationTypeCode}
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
export default CreateEducationType;
