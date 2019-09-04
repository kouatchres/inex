import React, {Component} from 'react'
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const getGender = gql `
 query getGender{
   getGenders{
   genderName  
   genderCode
   id
  }}
`;

class Genders extends Component {
    render() {
        return (
            <div>
                <p>
                    All Genders!!!</p>
            </div>
        )
    }
}
export default Genders;