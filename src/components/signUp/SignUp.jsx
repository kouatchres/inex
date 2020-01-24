import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "../styles/Form";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import styled from "styled-components";
import Link from "next/link";

const Actions = styled.div`
  padding-top: 1rem;
  padding-left: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  align-content: center;
  a:hover {
    font-size: 1.5rem;
    color: #357;
    transition: all 2s ease-in-out;
  }
`;
const StyledDivision = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  text-align: center;
  margin: 0 auto;
  width: 40vw;
  a:hover {
    pointer: cursor;
    transition: all 2s ease-in-out;
    color: black;
  }
`;

const SIGNUP_USER_MUTATION = gql`
  mutation SIGNUP_USER_MUTATION($email: String!, $name: String!, $password: String!) {
    signUp(email: $email, name: $name, password: $password) {
      id
      email
      resetToken
      password
    }
  }
`;

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    id: "123"
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ name: "", email: "", password: "" });
  }
  render = () => {
    return (
      <Mutation mutation={SIGNUP_USER_MUTATION} variables={this.state}>
        {(signUp, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                const res = await signUp();
                console.log(res);
                this.resetForm();
              }}
            >
              <h3>S'Inscrire</h3>

              <fieldset disabled={loading} aria-busy={loading}>
                <Error error={error} />
                <StyledDivision>
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </StyledDivision>
                <Actions>
                  <div className="submitButton">
                    <button type="submit">Valid{loading ? "ation en cours" : "er"} </button>
                  </div>
                  <ul>
                    <Link href="/signInOut/login">
                      <a>Se Connecter</a>
                    </Link>
                  </ul>
                </Actions>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  };
}

export default SignUp;
