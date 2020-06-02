import React, {Component} from 'react'
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const GET_ALL_REGIONS = gql `
 query GET_ALL_REGIONS{
   getRegions{
   regName  
   regCode
   id
  }}
`;

class Regions extends Component {
    render() {
        return (
            <div>
                <Query  query={GET_ALL_REGIONS}>
                   {(payload)=>{
    console.log(payload);
                   }}           
                </Query>
            </div>
        )
    }
}
export default Regions;