import React, {Component} from 'react'
import {Mutation, Query} from 'react-apollo'
import Form from './styles/Form'
import gql from 'graphql-tag'
import Error from './ErrorMessage'
import styled from 'styled-components';
import { storeRegion,storedDivision } from '../data'

const StyledDivision = styled.div `
display: block; 
text-align:center;
margin: 0 auto;
min-width:350px;
`;

const GET_ALL_REGIONS_QUERY = gql `
query GET_ALL_REGIONS_QUERY{
  regions{
      id
     regName
     regCode
}
}
`;
const GET_ALL_DIVISIONS_QUERY = gql `
query GET_ALL_DIVISIONS_QUERY{
  divisions{
      id
     divName
     divCode
         }
}
`;
const GET_DIVISIONS_OF_A_REGION_QUERY = gql `
    query GET_DIVISIONS_OF_A_REGION_QUERY($id: ID!){
  getDivisions(
      id:$id
  ){
      id
     divName
     divCode
        }
}
`;
const CREATE_SUBDIVISION_MUTATION = gql `
   mutation CREATE_SUBDIVISION_MUTATION(
        $subDivName: String!
        $subDivCode: String!
        $division: DivisionWhereUniqueInput!
   ){
createSubDivision(
             subDivName: $subDivName,
             subDivCode: $subDivCode,
             division: $division
){
            id
            subDivName
            subDivCode
            division{
                divName
            }
            
   }
   }
 `;

class createSubDivision extends Component {

    state = {
        subDivName: "",
        subDivCode: "",
        divisionID: '12',
        regionID: '12',
        region:storeRegion,
        division: storedDivision

    }
    
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
        
    }
  
    findChosenDivision = (dataSource) => {
        // 1 copy the data source
      if(dataSource.length>0){
          const tempDivisions = [...dataSource];
          // get the region object
const selectedDivision = tempDivisions.find(item => item.id === this.state.divisionID);
        console.log(selectedDivision);
        return selectedDivision;
    }

}

    render() {
        return (
<Query 
query={GET_ALL_REGIONS_QUERY}
>
{({data, loading, error})=>{
        { loading && <p>Loading...</p>};
        {error && <Error error={error}/>};
        const {regions} =data;
        const seletedRegionID=regions[0].id
        console.log(seletedRegionID);
        //prepare the options for the region select
       const regionsOptions= regions.map(item =>
   <option value={item.id} key={item.id} >{item.regName}</option>)
         
 return  (
<Query 
query={GET_ALL_DIVISIONS_QUERY}
>
                {({data, loading, error}) => {
                    { loading && <p>Loading...</p>};
                    {error && <Error error={error}/>};
                    const {divisions} =data;
                    console.log(data)
                    //'getting region from the state')
                    //*******important function'stripping off __typename')

// prepare the options for the divisions select
{/* const divisionsOptions= divisions.map(item => */}
    {/* <option value={item.id} key={item.id} >{item.divName}</option>) */}

   {/* const refinedDivisions = divisions.map(({__typename,divName,divCode, ...others}) => others)  */}
                    return (
                        <Mutation
                            mutation={CREATE_SUBDIVISION_MUTATION}
                           
                            variables={{
                                ...this.state
                        }}>

                            {(createSubDivision, {loading, error}) => (
                                <StyledDivision>
                                    <Form
                                        onSubmit={async e => {
                                        e.preventDefault();
                                        const res = await createSubDivision();
                                        console.log(res);
                                    }}>
                                        <h5>New Sub Division</h5>
                                        <Error error={error}/>
                                        <fieldset disabled={loading} aria-busy={loading}>

                                            <select
                                                type="select"
                                                id="regionID"
                                                name="regionID"
                                                value={this.state.regionID}
                                                onChange={this.handleChange}
                                                required>
                                         {regionsOptions}
                                            </select>
                                            <select
                                                type="select"
                                                id="divisionID"
                                                name="divisionID"
                                                value={this.state.divisionID}
                                                onChange={this.handleChange}
                                                required>
                                                {/* { divisionsOptions} */}
                                            </select>

                                            <input
                                                type="text"
                                                id="subDivName"
                                                name="subDivName"
                                                placeholder="Sub Division Name"
                                                value={this.state.subDivName}
                                                onChange={this.handleChange}
                                                required/>
                                            <input
                                                type="text"
                                                id="subDivCode"
                                                name="subDivCode"
                                                placeholder="Sub Division Code"
                                                value={this.state.subDivCode}
                                                onChange={this.handleChange}
                                                required/>
                                            <div className="submitButton">
                                                <button type="submit">`Submit${loading? 'ting': ''}`</button>
                                            </div>
                                        </fieldset>
                                    </Form>
                                </StyledDivision>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
            )
         }}
       </Query>

        );
    }
}

export default createSubDivision;