import React, {Component} from 'react'
import {Mutation} from 'react-apollo'
import Form from './styles/Form'
import gql from 'graphql-tag'
import Error from './ErrorMessage'

const CREATE_NEW_REGION_MUTATION=gql`
mutation CREATE_NEW_REGION_MUTATION($regName: String!, $regCode: String!){
    createRegion(
        regName: $regName,
        regCode: $regCode
    ){
        id
        regName
    }

}

`;


const CREATE_REGION_MUTATION = gql `
   mutation CREATE_REGION_MUTATION(
 $regName: String!,
 $regCode: String!      

   ){
createRegion(
         regName:$regName,
           regCode: $regCode
){
            id
}
   }
 `;

class CreateRegion extends Component {
    state = {
       regName: "",
        regCode: ""
    }

    handleChange = (e) => {
        const {name, type, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (

            <Mutation mutation={CREATE_NEW_REGION_MUTATION} variables={this.state}>

                {(createRegion, {loading, error}) => (
                        <Form
                            onSubmit=
                            {async e => {
                                 e.preventDefault(); 
                const res = await createRegion();
                 console.log(res); }}>

                            <h5>Create a new Region</h5>
                            <Error error={error}/>
                            <fieldset disabled={loading} aria-busy={loading}>
                                <input
                                    type="text"
                                    id="regName"
                                    name="regName"
                                    placeholder="Region Name"
                                    value={this.state.regName}
                                    onChange={this.handleChange}
                                    required/>
                                <input
                                    type="text"
                                    id="regCode"
                                    name="regCode"
                                    placeholder="Region Code"
                                    value={this.state.regCode}
                                    onChange={this.handleChange}
                                    required/>
                                <div className="submitButton">
                                    <button type="submit">Submit</button>
                                </div>
                            </fieldset>
                        </Form>
                     )}
            </Mutation>
        );
    }
}
export default CreateRegion;