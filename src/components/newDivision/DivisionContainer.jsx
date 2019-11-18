import React, {Component} from 'react'
import DivisionFilter from './DivisionFilter'
import RegionFilter from './RegionFilter'
import DivisionList from './DivisionList'
import {Mutation, Query} from 'react-apollo'
import gql from 'graphql-tag'
import Error from '../ErrorMessage'
import styled from 'styled-components';

const StyledDivision = styled.div `
display: block; 
text-align:center;
margin: 0 auto;
min-width:350px;
`;

const GET_DIVSIONS_QUERY = gql `
query GET_DIVSIONS_QUERY{
  divisions{
      id
     divName
         }

}
`;

const GET_ALL_REGIONS_QUERY =gql`
query GET_ALL_REGIONS_QUERY{
   regions{
       id
       regName
 }
}

`;

const SELECT_A_DIVISION = gql `
  query SELECT_A_DIVISION($id: ID!){
      division(id: $id){
          id
          divName
          divCode
      }
  }
`;
class DivisionContainer extends Component {
 state={
               regionID:'',
               regions:[],
               selectedRegion:{}
 }

 handleChange=(event)=>{
              const target = event.target;
              const {name,value}= target
              this.setState({[name]:value },this.selectedRegion(this.state.regionID));
 };
      
 

 
  
    render() {
        return ( 
        <> 
 <Query
 query={GET_ALL_REGIONS_QUERY} 
 
  >
   {({data})=>{
     return(
<>

         <RegionFilter  allRegions={data}  /> 

  <Query
  query={GET_DIVSIONS_QUERY}
  >
    {({data})=>{
      return(
          <>
<h7>Getting divisions</h7>
         <DivisionFilter  allDivisions={data}  /> 
         <DivisionList  allRegions={data} />
         </>
              );
         
            }}
        </Query>

        </>
     )
   }}
 </Query>
              </>
        )
}
}
export default DivisionContainer