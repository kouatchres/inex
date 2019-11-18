import React, {Component} from 'react'
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Candidate from './Candidate';
import styled from 'styled-components';
import Pagination from '../Pagination'

const ALL_CANDIDATES_QUERY = gql `
 query ALL_CANDIDATES_QUERY{
   candidates{
   cand1stName  
   cand2ndName  
   cand3rdName  
   email
   image
   phoneNumb    
   placeOfBirth
   candCode
   id
  }}
`;
``
const CenteredStyled = styled.div `
text-align:center;
display:block;
margin: 0 auto; 
`;

const CandidateList = styled.div `
 display:grid;
grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
grid-row-gap: 20px;
cursor:pointer;
 `;
 class Candidates extends Component {
    render() {
        return (
            <CenteredStyled>
            <Pagination/>   
                <Query query={ALL_CANDIDATES_QUERY}>
                    {({loading, error, data}) => {
                        console.log(data.candidates)
 {loading &&  <p>Loading...</p>}
 {loading &&  <p> Error: {error.message}</p>}
                      return (
                            <CandidateList>
{data.candidates.map(candidate => <Candidate eachCandidate={candidate} key={candidate.id}  data={data} />)}
                            </CandidateList>
                        );
                    }}
                </Query>
                <Pagination/>
            </CenteredStyled>

        );
    }
}
export default Candidates;
export {ALL_CANDIDATES_QUERY};