import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "../styles/Form";
import gql from "graphql-tag";
import Error from "../ErrorMessage";

const CREATE_NEW_GENDER_MUTATION = gql`
  mutation CREATE_NEW_GENDER_MUTATION($genderName: String!, $genderCode: String!) {
    createGender(genderName: $genderName, genderCode: $genderCode) {
      id
      genderCode
      genderName
    }
  }
`;

class CreateGender extends Component {
  state = {
    genderName: "",
    genderCode: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };
  resetForm() {
    this.setState({ genderName: "", genderCode: "" });
  }

  render() {
    return (
      <Mutation mutation={CREATE_NEW_GENDER_MUTATION} variables={this.state}>
        {(createGender, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createGender();
              console.log(res);
              this.resetForm();
            }}
          >
            <h5>Create a new Gender</h5>
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <input
                type="text"
                id="genderName"
                name="genderName"
                placeholder="gender Name"
                value={this.state.genderName}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                id="genderCode"
                name="genderCode"
                placeholder="gender Code"
                value={this.state.genderCode}
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
export default CreateGender;
