import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const getUsers = gql`
 query getUsers{
   getUsers{
   name  
   email
   id
  }}
`;

class Regions extends Component {
    render() {
        return (
            <div>
                <Query query={getUsers}>
                    {(payload) => {
                        console.log(payload);
                    }}
                </Query>
            </div>
        )
    }
}
export default Regions;