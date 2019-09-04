import React, {Component} from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Candidate from './Candidate';
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
``
const CenteredStyled = styled.div`
text-align:center;

`;
const CandidateList = styled.div`
 display:grid;
grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
grid-gap: 5px;
min-width:400px;
background: ${props => props.theme.slightGrey};
width: 100vw;
margin: 2px auto;
justify-content:space-evenly;
max-width: ${props => props.theme.maxWidth}; 
 `;

class Candidates extends Component {
    render() {
        return (
            <CenteredStyled>
                <Query query={ALL_CANDIDATES_QUERY}>
                    {({loading, error, data}) => {
                        console.log(data.candidates)
                        if (loading) return <p>Loading...</p>
                        if (loading) return <p>Error: {error.message}</p>
                        return (<CandidateList>
                            {data.candidates.map(candidate => <Candidate eachCandidate={candidate} key={candidate.id}/>)}
                        </CandidateList>);
                    }}
                </Query>
            </CenteredStyled>

        );
    }
}
export default Candidates;