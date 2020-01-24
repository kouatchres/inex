import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage.js";
import Router from "next/router";
import styled from "styled-components";
import { getAllGendersQuery } from "../queries&Mutations&Functions/Queries";
import { createCandidateMutation } from "../queries&Mutations&Functions/Mutations";
import { uniqueCodeGen,getSelectedObject } from "../queries&Mutations&Functions/Functions";

const CreateCandForm = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-gap: 10px;
  min-width: 60vw;
`;
const PicFrame = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 20rem;
    width: 20rem;
    border-radius: 15px;
    background-size: contain;
    background-position: center;
  }
`;
const DataFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

class CreateCandidate extends Component {
  state = {
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    email: "",
    image: "",
    phoneNumb: "",
    placeOfBirth: "",
    genderID: "1254",
    gender: ""
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({
      cand1stName: "",
      cand2ndName: "",
      cand3rdName: "",
      email: "",
      image: "",
      phoneNumb: "",
      placeOfBirth: ""
    });
  }

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ineximages");
    const res = await fetch("https://api.cloudinary.com/v1_1/inex/image/upload", {
      method: "POST",
      body: data
    });
    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url
      // biggerPhoto: <file className="e"></file>ager[0].secure_url,
    });
  };

  render() {
    const { genderID, cand1stName, cand2ndName, cand3rdName, email, image, phoneNumb, placeOfBirth } = this.state;
    return (
      <Query query={getAllGendersQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          const { genders } = data;

          const allGenders =
            genders &&
            genders.map(item => (
              <option value={item.id} key={item.id}>
                {item.genderName}
              </option>
            ));

          //*******important function'stripping off __typename')
          const refinedGender = genders && genders.map(({ __typename, ...others }) => others);
          return (
            <Mutation
              mutation={createCandidateMutation}
              variables={{
                ...this.state,
                gender: genders && getSelectedObject(refinedGender, genderID),
                candCode: uniqueCodeGen(12)
              }}
            >
              {(createCandidate, { loading, error }) => (
                <Form
                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await createCandidate();
                    console.log(res);
                    Router.push({
                      pathname: "/show/singleCand",
                      query: {
                        id: res.data.createCandidate.id
                      }
                    });
                    this.resetForm();
                  }}
                >
                  <h5>New Candidate</h5>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <CreateCandForm>
                      <PicFrame>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          placeholder=" telechargez photo"
                          onChange={this.uploadFile}
                          required
                        />
                        <div>{this.state.image && <img src={image} alt="Upload image" />}</div>
                      </PicFrame>
                      <DataFrame>
                        <select
                          type="select"
                          id="genderID"
                          name="genderID"
                          value={genderID}
                          onChange={this.handleChange}
                          required
                        >
                          <option>Choisissez le Sexe</option>
                          {allGenders}
                        </select>
                        <input
                          type="text"
                          id="cand1stName"
                          name="cand1stName"
                          placeholder="Nom"
                          value={cand1stName}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="text"
                          id="cand2ndName"
                          name="cand2ndName"
                          placeholder="Prenoms"
                          value={cand2ndName}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="text"
                          id="cand3rdName"
                          name="cand3rdName"
                          placeholder="Autres noms"
                          value={cand3rdName}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="number"
                          id="phoneNumb"
                          name="phoneNumb"
                          placeholder="No Tel"
                          value={phoneNumb}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="text"
                          id="placeOfBirth"
                          name="placeOfBirth"
                          placeholder="Lieu Naissance"
                          value={placeOfBirth}
                          onChange={this.handleChange}
                          required
                        />
                        <div className="submitButton">
                          <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
                        </div>
                      </DataFrame>
                    </CreateCandForm>
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

export default CreateCandidate;
export { createCandidateMutation };
