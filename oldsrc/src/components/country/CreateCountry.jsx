import React, { useState } from "react";
import { Mutation } from "react-apollo";
import {useMutation } from '@apollo/react-hooks'
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import { createNewCountryMutation } from "../queries&Mutations&Functions/Mutations";
import Error from "../ErrorMessage";

const CreateCountry =()=> {
  

 const handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };
  // resetForm=()=>{
  //   this.setState({ countryName: "", countryCode: "" });
  // }

const [addCountry] =useMutation(createNewCountryMutation)

    return (
          <StyledPage>
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                const res = await addCountry({variables:this.state});
                console.log(res);
              }}
            >
              <h4>Nouveau Pays</h4>
              {/* <Error error={error} /> */}
              <fieldset disabled={loading} aria-busy={loading}>
                <input
                  type="text"
                  id="countryName"
                  name="countryName"
                  placeholder="Nom pays "
                  value={countryName}
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="text"
                  id="countryCode"
                  name="countryCode"
                  placeholder="Code Sexe"
                  value={countryCode}
                  onChange={this.handleChange}
                  required
                />
                <div className="submitButton">
                  <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
                </div>
              </fieldset>
            </Form>
          </StyledPage>
    );
    }
export default CreateCountry;
