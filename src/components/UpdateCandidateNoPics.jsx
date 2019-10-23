import React, {Component} from 'react'
import {Mutation, Query} from 'react-apollo'
import Form from './styles/Form'
import Error from './ErrorMessage.js';
import gql from 'graphql-tag'

const SINGLE_CANDIDATE_QUERY = gql `
 query SINGLE_CANDIDATE_QUERY($id: ID! ){
     candidate(id: $id){
         id
cand1stName
cand2ndName
cand3rdName
candCode
email
phoneNumb
placeOfBirth
     }
 }

`;

const UPDATE_CANDIDATE_MUTATION = gql `
 mutation UPDATE_CANDIDATE_MUTATION(
     $id: ID!,
        $cand1stName: String,
        $cand2ndName: String,
        $cand3rdName: String,
        $candCode: String ,      
        $email: String,
        $phoneNumb: Int,
        $placeOfBirth: String
 ){
  updateCandidate(
      id:$id,
        cand1stName: $cand1stName,
        cand2ndName: $cand2ndName,
        cand3rdName: $cand3rdName,
        candCode: $candCode,
        email: $email,
        phoneNumb: $phoneNumb,
        placeOfBirth: $placeOfBirth
  ){
    id 
cand1stName
cand2ndName
cand3rdName           
  }
 }
`;

class UpdateCandidate extends Component {
    state = {};

    handleChange = (e) => {
        const {name, value, type} = e.target;
        const val = type === 'number'? parseFloat(value) : value;
        this.setState({[name]: val});
    };

    updateSingleCandidate = async(e, updateCandidateMutation) => {
        e.preventDefault();
        console.log('Updating Candidate!!');
        const res = await updateCandidateMutation({
            variables: {
                id: this.props.id,
                ...this.state,
            },
        });
            console.log('Candidate Updated!!');
    };

    render() {
        return (

            <Query
                query={SINGLE_CANDIDATE_QUERY}
                variables={{id: this.props.id}}
                >
                {({data, loading}) => {
                    console.log(data);
                    console.log(data.candidate);
                    if(loading) return <p>Loading...</p>;
                   if(!data.candidate) <p>No Candidate Found for ID {this.props.id}</p>;
                    return (
                        <Mutation 
                        mutation={UPDATE_CANDIDATE_MUTATION} 
                        variables={{id: this.props.id}}
                        >
                            {(updateCandidate, {loading, error}) => (
                                <Form onSubmit={e => this.updateSingleCandidate(e, updateCandidate)}
                                    >
                                    <h5>Update a Candidate</h5>
                                    < Error error={error}/>
                                    <fieldset disabled={loading} aria-busy={loading}>

                                        <input
                                            type="text"
                                            id="cand1stName"
                                            name="cand1stName"
                                            placeholder="First Name"
                                            defaultValue={data.candidate.cand1stName}
                                            onChange={this.handleChange}
                                            required/>
                                        <input
                                            type="text"
                                            id="cand2ndName"
                                            name="cand2ndName"
                                            placeholder="Second Name"
                                            defaultValue={data.candidate.cand2ndName}
                                            onChange={this.handleChange}
                                            required/>
                                        <input
                                            type="text"
                                            id="cand3rdName"
                                            name="cand3rdName"
                                            placeholder="Last Name"
                                            defaultValue={data.candidate.cand3rdName}
                                            onChange={this.handleChange}
                                            required/>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            defaultValue={data.candidate.email}
                                            onChange={this.handleChange}
                                            required/>
                                        <input
                                            type="number"
                                            id="phoneNumb"
                                            name="phoneNumb"
                                            placeholder="Phone Number"
                                            defaultValue={data.candidate.phoneNumb}
                                            onChange={this.handleChange}
                                            required/>
                                        <input
                                            type="text"
                                            id="placeOfBirth"
                                            name="placeOfBirth"
                                            placeholder="Birth Place"
                                            defaultValue={data.candidate.placeOfBirth}
                                            onChange={this.handleChange}
                                            required/>
                                        <input
                                            type="text"
                                            id="candCode"
                                            name="candCode"
                                            placeholder="Candidate Code"
                                            defaultValue={data.candidate.candCode}
                                            onChange={this.handleChange}
                                            required/>
                                        <div className="submitButton">
                                            <button type="submit">Updat{loading ? 'ing': 'e'}</button>
                                        </div>
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

export default UpdateCandidate;
export {UPDATE_CANDIDATE_MUTATION};