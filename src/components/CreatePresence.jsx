import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "./styles/Form";
import gql from "graphql-tag";
import Error from "./ErrorMessage";

const CREATE_NEW_PRESENCE_MUTATION = gql`
  mutation CREATE_NEW_PRESENCE_MUTATION($presenceName: String!, $presenceCode: String!) {
    createPresence(presenceName: $presenceName, regCode: $presenceCode) {
      id
      presenceName
    }
  }
`;

const CREATE_PRESENCE_MUTATION = gql`
  mutation CREATE_PRESENCE_MUTATION($presenceName: String!, $presenceCode: String!) {
    createRegion(presenceName: $presenceName, presenceCode: $presenceCode) {
      id
      presenceName
    }
  }
`;

class CreatePresence extends Component {
  state = {
    presenceName: "",
    presenceCode: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_NEW_PRESENCE_MUTATION} variables={this.state}>
        {(createPresence, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createPresence();
              console.log(res);
            }}
          >
            <h5>New Presence</h5>
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <input
                type="text"
                id="presenceName"
                name="presenceName"
                placeholder="Presence Name"
                value={this.state.presenceName}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                id="presenceCode"
                name="presenceCode"
                placeholder="Presence Code"
                value={this.state.presenceCode}
                onChange={this.handleChange}
                required
              />
              <div className="submitButton">
                <button type="submit">Submit{loading ? "ting" : ""}</button>
              </div>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
export default CreatePresence;
