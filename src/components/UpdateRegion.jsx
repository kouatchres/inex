import React, {Component} from 'react'
import {Mutation, Query} from 'react-apollo'
import Form from './styles/Form'
import Error from './ErrorMessage.js';
import gql from 'graphql-tag'
import styled from 'styled-components'

const DataFrame = styled.div `
 display: flex;
 flex-direction: column;
 `;

const SINGLE_REGION_QUERY = gql `
 query SINGLE_REGION_QUERY($id: ID! ){
     region(id: $id){
regName,
regCode,
id
     }
 }

`;

const UPDATE_REGION_MUTATION = gql `
 mutation UPDATE_REGION_MUTATION(
     $id: ID!,
     $regName:String,
        $regCode: String,
        
 ){
  updateRegion(
      id:$id,
      regName: $regName,
        regCode: $regCode,
        ){
    id 
regName
regCode
           
  }
 }
`;

class UpdateRegion extends Component {
    state = {};

    handleChange = (e) => {
        const {name, value, type} = e.target;
        const val = type === 'number'
            ? parseFloat(value)
            : value;
        this.setState({[name]: val});
    };

    updateSingleRegion = async(e, updateRegionMutation) => {
        e.preventDefault();
        console.log('Updating Region!!');
        const res = await updateRegionMutation({
            variables: {
                id: this.props.id,
                ...this.state
            }
        });
        console.log('Region Updated!!');
    };

    render() {
        return (

            <Query
                query={SINGLE_REGION_QUERY}
                variables={{
                id: this.props.id
            }}>
                {({data, loading}) => {
                    console.log(data);
                    console.log(data.region);
                    { loading && <p>Loading...</p>};
                    {!data.region &&<p>No Region Found for ID {this.props.id}</p>};
                    return (
                        <Mutation
                            mutation={UPDATE_REGION_MUTATION}
                            variables={{id: this.props.id}}>
                            {(updateRegion, {loading, error}) => (
                                <Form onSubmit={e => this.updateSingleRegion(e, updateRegion)}>
                                    <h5>Update a Region</h5>
                                    < Error error={error}/>
                                    <fieldset disabled={loading} aria-busy={loading}>
                                        <DataFrame>
                                            <input
                                                type="text"
                                                id="regName"
                                                name="regName"
                                                placeholder="Region Name"
                                                defaultValue={data.region.regName}
                                                onChange={this.handleChange}
                                                required/>
                                            <input
                                                type="text"
                                                id="regCode"
                                                name="regCode"
                                                placeholder="Region Code"
                                                defaultValue={data.region.regCode}
                                                onChange={this.handleChange}
                                                required/>
                                            <div className="submitButton">
                                                <button type="submit">Updat{loading
                                                        ? 'ing  '
                                                        : 'e  '}</button>
                                            </div>
                                        </DataFrame>
                                    </fieldset>
                                </Form>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default UpdateRegion;
export {UPDATE_REGION_MUTATION};