import React, {Component} from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import styled from 'styled-components'


const CenterStyled = styled.div`
text-align:center;

`;
const ItemsList = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
margin: 0 auto;
max-width: ${props=> props.theme.maxWidth}; 
`;

const ALL_REGIONS_QUERY = gql `
 query  ALL_REGIONS_QUERY {
   regions{
     regName
   regCode
   id
   
   }
  }
`;

class Regions extends Component {
    render() {
        return (
            <CenterStyled>
                <p>Regions</p>
                <Query query={ALL_REGIONS_QUERY}>

                  {({data, error, loading})=> {
loading &&  <p>Loading...</p> 
error &&  <p>Error: {error.message} </p>

return <ItemsList>
      {data.regions.map(region=> <p>  {region.regName}</p>)}        
</ItemsList>
                  }}
                </Query>
            </CenterStyled>
        )
    }
}
export default Regions;
export {ALL_REGIONS_QUERY};