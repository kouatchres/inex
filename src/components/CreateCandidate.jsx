import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "./styles/Form";
import Error from "./ErrorMessage.js";
import gql from "graphql-tag";
import Router from "next/router";
import styled from "styled-components";
import { storedGender } from "../../src/data";

const CreateCandForm = styled.div`
  display: grid;
  grid-template-columns: 10fr 18fr;
  grid-gap: 10px;
  min-width: 40vw;
`;
const PicFrame = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 350px;
    border-radius: 12px;
    background-size: contain;
    background-position: center;
  }
`;
const DataFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

const GET_GENDER_QUERY = gql`
  query GET_GENDER_QUERY {
    genders(orderBy: genderName_ASC) {
      id
      genderName
      genderCode
    }
  }
`;

const CREATE_CANDIDATE_MUTATION = gql`
  mutation CREATE_CANDIDATE_MUTATION(
    $cand1stName: String
    $cand2ndName: String
    $cand3rdName: String
    $candCode: String
    $email: String
    $image: String
    $phoneNumb: Int
    $placeOfBirth: String
    $gender: GenderCreateWithoutCandidateInput!
  ) {
    createCandidate(
      cand1stName: $cand1stName
      cand2ndName: $cand2ndName
      cand3rdName: $cand3rdName
      candCode: $candCode
      email: $email
      image: $image
      phoneNumb: $phoneNumb
      placeOfBirth: $placeOfBirth
      gender: $gender
    ) {
      id
      cand1stName
      cand2ndName
      cand3rdName
    }
  }
`;

class CreateCandidate extends Component {
  state = {
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    candCode: "",
    email: "",
    image: "",
    phoneNumb: "",
    placeOfBirth: "",
    genderID: "",
    gender: storedGender
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

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

  getSelectedGender = dataSource => {
    // 1 copy the data source
    // if (dataSource.length > 0) {
    const tempGender = [...dataSource];
    // get the region object
    const selectedGender = tempGender.find(item => item.id === this.state.genderID);
    console.log("getting selected gender");
    console.log(selectedGender);
    return selectedGender;
    // }
  };

  render() {
    console.log(this.state);
    return (
      <Query query={GET_GENDER_QUERY}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          const { genders } = data;
          console.log("getting genders");
          console.log(genders);
          const allGenders = genders.map(item => (
            <option value={item.id} key={item.id}>
              {item.genderName}
            </option>
          ));

          //*******important function'stripping off __typename')
          const refinedGender = genders.map(({ __typename, ...others }) => others);
          return (
            <Mutation
              mutation={CREATE_CANDIDATE_MUTATION}
              variables={{
                ...this.state,
                gender: this.getSelectedGender(refinedGender)
              }}
            >
              {(createCandidate, { loading, error }) => (
                <Form
                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await createCandidate();
                    console.log(res);
                    Router.push({
                      pathname: "/singleCand",
                      query: {
                        id: res.data.createCandidate.id
                      }
                    });
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
                          placeholder="Upload your picture"
                          onChange={this.uploadFile}
                          required
                        />
                        <div>{this.state.image && <img src={this.state.image} alt="Upload image" />}</div>
                      </PicFrame>
                      <DataFrame>
                        <select
                          type="select"
                          id="genderID"
                          name="genderID"
                          value={this.state.genderID}
                          onChange={this.handleChange}
                          required
                        >
                          {allGenders}
                        </select>
                        <input
                          type="text"
                          id="cand1stName"
                          name="cand1stName"
                          placeholder="First Name"
                          value={this.state.cand1stName}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="text"
                          id="cand2ndName"
                          name="cand2ndName"
                          placeholder="Second Name"
                          value={this.state.cand2ndName}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="text"
                          id="cand3rdName"
                          name="cand3rdName"
                          placeholder="Last Name"
                          value={this.state.cand3rdName}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="number"
                          id="phoneNumb"
                          name="phoneNumb"
                          placeholder="Phone Number"
                          value={this.state.phoneNumb}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="text"
                          id="placeOfBirth"
                          name="placeOfBirth"
                          placeholder="Birth Place"
                          value={this.state.placeOfBirth}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="text"
                          id="candCode"
                          name="candCode"
                          placeholder="Candidate Code"
                          value={this.state.candCode}
                          onChange={this.handleChange}
                          required
                        />

                        <div className="submitButton">
                          <button type="submit">Submit{loading ? "ting" : ""}</button>
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
export { CREATE_CANDIDATE_MUTATION };
