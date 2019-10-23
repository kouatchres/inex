import React, {Component} from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import  styled from 'styled-components'
import { ALL_CANDIDATES_QUERY } from './Candidates'

const DELETE_CANDIDATE_MUTATION = gql `
 mutation DELETE_CANDIDATE_MUTATION($id: ID!){
   deleteCandidate(id: $id){
     id
   }
 }
`;

const DelBtn = styled.button `
  color: white;
  font-weight: bold;
  background-color:#375;
  border-radius:10px;
  font-size:1.8rem;
  height:40px;
`;



class DeleteCandidate extends Component {

  updateCache =(cache, payload)=>{

  // manually update the cache so that the data are all the same
  // 1. read the cache for the data we want
const data= cache.readQuery({query: ALL_CANDIDATES_QUERY});
// filter out the deleted candidate from the data in the cache
data.candidates = data.candidates.filter(candidate => candidate.id !== payload.data.deleteCandidate.id);
//  3. write the new data back to the cache
console.log('getting payload');
console.log(payload);
cache.writeQuery({query: ALL_CANDIDATES_QUERY, data });
}

    render() {
        return (
            <div>
            <Mutation  
            mutation={DELETE_CANDIDATE_MUTATION} 
            variables={{id: this.props.id}}
            update={this.updateCache} 
            >
                    {(deleteCandidate, {error}) => (
                        <DelBtn onClick={()=>
        {if(confirm('Sure to delete this candidate ?'))
                    { deleteCandidate();}
                    }}>
                    {this.props.children}</DelBtn>
                    )}
                </Mutation>
            </div>
        )
    }
}

export default DeleteCandidate
