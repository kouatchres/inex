import React, {Component} from 'react'
import {Mutation, Query} from 'react-apollo'
import Form from './styles/Form'
import Error from './ErrorMessage.js';
import gql from 'graphql-tag'
import styled from 'styled-components'


const CreateCandForm = styled.div`
display:grid;
grid-template-columns: 10fr 18fr ;
grid-gap:10px;
min-width: 40vw;


`;
 const PicFrame = styled.div`
 display: flex;
flex-direction: column;
img{
    width:250px;
    height:350px;
    border-radius: 12px;
}
 `;
 const DataFrame = styled.div`
 display: flex;
flex-direction: column;
 `;


const SINGLE_CANDIDATE_QUERY = gql `
 query SINGLE_CANDIDATE_QUERY($id: ID! ){
     candidate(id: $id){
cand1stName
cand2ndName
cand3rdName
candCode
email
image
phoneNumb
placeOfBirth
id
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
     $image: String,
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
      image: $image,
        phoneNumb: $phoneNumb,
        placeOfBirth: $placeOfBirth
  ){
    id 
cand1stName
cand2ndName
cand3rdName 
image          
  }
 }
`;

class UpdateCandidate extends Component {
    state = {};

    handleChange = (e) => {
        const {name, value, type} = e.target;
        const val = type === 'number'
            ? parseFloat(value)
            : value;
        this.setState({[name]: val});
    };

    updateSingleCandidate = async(e, updateCandidateMutation) => {
        e.preventDefault();
        console.log('Updating Candidate!!');
        const res = await updateCandidateMutation({
            variables: {
                id: this.props.id,
                ...this.state
            }
        });
        console.log('Candidate Updated!!');
    };

    uploadFile = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'ineximages');
        const res = await fetch('https://api.cloudinary.com/v1_1/inex/image/upload', {
            method: 'POST',
            body: data
        });
        const file = await res.json();
        console.log(file);
        this.setState({
            image: file.secure_url,
            // biggerPhoto: file.eager[0].secure_url
        });
 {this.state.image && <img src={this.state.image} alt="Upload image"/>}
    }
    render() {
        return (

            <Query
                query={SINGLE_CANDIDATE_QUERY}
                variables={{id: this.props.id}}>
                {({data, loading}) => {
                    {loading && <p>Loading...</p>};
                    {!data.candidate && <p>No Candidate Found for ID {this.props.id}</p>};
                    return (
                        <Mutation
                            mutation={UPDATE_CANDIDATE_MUTATION}
                            variables={{id: this.props.id}}>
                            {(updateCandidate, {loading, error}) => (
                                <Form onSubmit={e => this.updateSingleCandidate(e, updateCandidate)}>
                                    <h5>Update a Candidate</h5>
                                    < Error error={error}/>
                                    <fieldset disabled={loading} aria-busy={loading}>
                                        <CreateCandForm>
                                            <PicFrame>
                                                <input
                                                    type="file"
                                                    id="file"
                                                    name="file"
                                                    placeholder="Your picture"
                                                    onChange={this.uploadFile}
                                                    defaultValue={data.candidate.image}
                                                    required/>
                                                <div>
 { this.state.image ? <img src={this.state.image} alt="Upload image"/>:<img src={data.candidate.image} alt="Upload image"/>}
{/* {this.state.image && <img src={this.state.image} alt="Upload image"/>}
                     { data.candidate.image && <img src={data.candidate.image} alt="Upload image"/>} */}
                                                </div>
                                            </PicFrame>
                                            <DataFrame>
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
                                                    <button disabled= {!this.state.image} type="submit">Updat{loading? 'ing  ': 'e '}</button>
                                                </div>
                                            </DataFrame>
                                        </CreateCandForm>
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