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
const GET_DIVISIONS_OF_A_REGION =gql`
  query GET_DIVISIONS_OF_A_REGION{
  division(region:$regionID){
    id
    divName
    divCode
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

// const SELECT_A_DIVISION = gql `
//   query SELECT_A_DIVISION($id: ID!){
//       division(id: $id){
//           id
//           divName
//           divCode
//       }
//   }
// `;
class DivisionContainer extends Component {
 state={
               regionID:'',
               regions:[],
               selectedRegion:{},
               divisions:[],
               divName:'',
               divCode:'',
               region:'',
               division:'',
               selectedDivisions:[]

 }
componentDidMount() {
  
}

handleChange = (e) => {
  const {name, value} = e.target;
  this.setState({[name]: value});
}

handleRegionChange = (regionID) => {
  let tempRegions = [...this.state.regions];
  console.log(tempRegions);
  const selectedRegion = tempRegions.find(region => region.id === regionID);
  console.log("getting selected region");
  console.log(selectedRegion)
  this.setState({[selectedRegion]:region});
}

    render() {
        return ( 
        <> 
 <Query
 query={GET_ALL_REGIONS_QUERY} 
 
  >
   {({data})=>{
     const { regions}=data;
     return(
<>
         <RegionFilter  
         allRegions={data} 
            handleChange={this.handleChange}
            handleRegionChange={this.handleRegionChange}
             /> 
  <Query
  query={GET_DIVSIONS_QUERY}
  >
    {({data})=>{
      return(
          <>
         <DivisionFilter 
          allDivisions={data}
          handleChange={this.handleChange}
            handleRegionChange={this.handleRegionChange}
             /> 
         <DivisionList  allRegions={data} />
         <input 
         type="text"
         name=  "country"
         id="country"
         />
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