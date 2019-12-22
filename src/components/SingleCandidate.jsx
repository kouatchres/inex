import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";

const StyledSingleCand = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 9fr 19fr;
  grid-gap: 20px;
  grid-auto-flow: column;
  min-height: 500px;
  box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`;

const OtherInfo = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: column;
  width: 800px;
  margin: 2rem auto;

  p {
    font-size: 2rem;
    line-height: 2px;
  }
`;

const CandImg = styled.div`
  padding: 10px;

  img {
    height: 400px;
    width: 600px;
    border-radius: 15px;
  }
`;

const GET_SINGLE_CANDIDATE_QUERY = gql`
  query GET_SINGLE_CANDIDATE_QUERY($id: ID!) {
    candidate(id: $id) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      candCode
      email
      image
      phoneNumb
      placeOfBirth
    }
  }
`;

class SingleCandidate extends Component {
  render() {
    return (
      <Query
        query={GET_SINGLE_CANDIDATE_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading, error }) => {
          console.log(data);
          const { candidate } = data;
          console.log(candidate);

          const { image, candCode, cand1stName, cand2ndName, cand3rdName, email, phoneNumb, placeOfBirth } = candidate;
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          return (
            <StyledSingleCand>
              <CandImg>
                <img src={image} alt={candCode} />
              </CandImg>

              <OtherInfo>
                <p>1st Name: {cand1stName}</p>
                <p>2nd Name: {cand2ndName}</p>
                <p>Last Name: {cand3rdName}</p>
                <p>Birth Date: {phoneNumb}</p>
                <p>Birth Place: {placeOfBirth}</p>
                <p>Phone: {phoneNumb}</p>
                <p>Code: {candCode}</p>
                <p>1st Name: {cand1stName}</p>
                <p>2nd Name: {cand2ndName}</p>
                <p>Last Name: {cand3rdName}</p>
                <p>Birth Date: {phoneNumb}</p>
                <p>Birth Place: {placeOfBirth}</p>
                <p>Phone: {phoneNumb}</p>
                <p>Code: {candCode}</p>
                <p>Email: {email}</p>
              </OtherInfo>
            </StyledSingleCand>
          );
        }}
      </Query>
    );
  }
}

export default SingleCandidate;
