import React, {Component} from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import CandLine from '../src/components/CandLine';
import styled from 'styled-components';

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

const CandPageTitle = styled.div `
  width: 100%;
  min-height: 90vh;
`;
const CandHeader = styled.div `
width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: left;
    border-bottom: 2px solid black;
    background: lightgray;
    `;

const TitleItem = styled.div `
    margin:0 10px;
    border-right: 1px solid black;
      text-transform: capitalize;
      width: 13%;
      text-align:left;
      `;

const CandidateList = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr ;
 `;

class CandDisplay extends Component {
    render() {
        return (
            <CandPageTitle>
                <CandHeader>
                    <TitleItem className="candidate-block">
                        <span>Pic</span>
                    </TitleItem>
                    <TitleItem>
                        <span>1st Name</span>
                    </TitleItem>
                    <TitleItem className="candidate-block">
                        <span>Last Name</span>
                    </TitleItem>
                    <TitleItem className="candidate-block">
                        <span>Other Name</span>
                    </TitleItem>
                    <TitleItem className="candidate-block">
                        <span>Email</span>
                    </TitleItem>
                    <TitleItem className="candidate-block">
                        <span>Code</span>
                    </TitleItem>
                    <TitleItem className="candidate-block">
                        <span>Phone</span>
                    </TitleItem>
                    <TitleItem className="candidate-block">
                        <span>Birth Place</span>
                    </TitleItem>
                    <TitleItem className="candidate-block">
                        <span>Edit</span>
                    </TitleItem>
                    <TitleItem className="candidate-block">
                        <span>Delete</span>
                    </TitleItem>
                </CandHeader>

                <Query query={ALL_CANDIDATES_QUERY}>
                    {({loading, error, data}) => {
                        console.log(data.candidates)
                        if (loading) 
                            return <p>Loading...</p>
                        if (loading) 
                            return <p>Error: {error.message}</p>
                        return (
                            <CandidateList>
                                {data
                                    .candidates
                                    .map(candidate => <CandLine eachCandidate={candidate} key={candidate.id}/>)}
                            </CandidateList>
                        );
                    }}
                </Query>

            </CandPageTitle>

        );
    }
}

export default CandDisplay;
