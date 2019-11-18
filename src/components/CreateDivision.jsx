import React, {Component} from 'react'
import {Mutation, Query} from 'react-apollo'
import Form from './styles/Form'
import gql from 'graphql-tag'
import Error from './ErrorMessage'
import styled from 'styled-components';

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
}
}
`;
const SELECT_A_REGION = gql `
  query SELECT_A_REGION($id: ID!){
      region(id: $id){
          id
          regName
          regCode
      }
  }
`;

const CREATE_DIVISION_MUTATION = gql `
   mutation CREATE_DIVISION_MUTATION(
 $divName: String!,
 $divCode: String!,
 $region: RegionCreateOneInput!

   ){
createDivision(
         divName: $divName,
           divCode: $divCode,
           region: $region
){
            id
            divName
            
   }
   }
 `;

class createDivision extends Component {

    state = {
        divName: "",
        divCode: "",
        regionId: '',
        selctedRegion: {},
        regions: []
    }
    componentDidUpdate() {
        // this.updateStateWithRegion();
    }
    handleChange = (e) => {
        const {name, type, value} = e.target;
        this.setState({[name]: value});
    }

    handleRegionChange = (regionID) => {
        let tempRegions = this.state.regions;
        const selectedRegion = tempRegions.find(region => region.id === regionID);
        this.setState({selectedRegion});
    }

    render() {
        return (
            <Query query={GET_ALL_REGIONS_QUERY}>

                {({data, loading, error}) => {
                    { loading && <p>Loading...</p>};
                    {error && <Error error={error}/>};
                    console.log(data);
                    const {regions}= data;
                    return (
                        <Mutation
                            mutation={CREATE_DIVISION_MUTATION}
                            variables={{
                            ...this.state
                        }}>

                            {(createDivision, {loading, error}) => (
                                <StyledDivision>
                                    <Form
                                        onSubmit={async e => {
                                        e.preventDefault();
                                        const res = await createDivision();
                                        console.log(res);
                                    }}>
                                        <h5>Create a new Division</h5>
                                        <Error error={error}/>
                                        <fieldset disabled={loading} aria-busy={loading}>

                                            <select
                                                type="select"
                                                id="region"
                                                name="region"
                                                value={this.state.region}
                                                onChange={this.handleChange}
                                                required>
                                                {data
                                                    .regions
                                                    .map((region) => <option value={region.id} key={region.id}>
                                                        {region.regName}</option>)}
                                            </select>

                                            <input
                                                type="text"
                                                id="divName"
                                                name="divName"
                                                placeholder="Division Name"
                                                value={this.state.divName}
                                                onChange={this.handleChange}
                                                required/>
                                            <input
                                                type="text"
                                                id="divCode"
                                                name="divCode"
                                                placeholder="Division Code"
                                                value={this.state.divCode}
                                                onChange={this.handleChange}
                                                required/>
                                            <div className="submitButton">
                                                <button type="submit">Submit</button>
                                            </div>
                                        </fieldset>
                                    </Form>
                                </StyledDivision>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default createDivision;