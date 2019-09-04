import React, {Component} from 'react';
import {Query} from 'react-apollo';
import Form from './styles/Form';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import styled from 'styled-components';
import CreateDivision from './CreateDivision';

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

class GetAllRegions extends Component {
    state = {
        divName: "",
        divCode: "",
        region: 'cjzknbgmdjse90b53p5n3udb6',
        regObj: [],
        selectedItem: "cjzknbgmdjse90b53p5n3udb6"
    }
    
    handleChange = (e) => {
        const {name, type, value} = e.target;
        this.setState({[name]: value});
        

    }


    render() {

        return (
            <Query query={GET_ALL_REGIONS_QUERY}>

                {({loading, error, data}) =>{
                     console.log(data);
                     const regObject = data.regions.find(region=> region.id ===this.state.region);
                     console.log(regObject);
                    return(
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
                                    {data.regions.map((region) => <option value={region.id} key={region.id}>
                                            {region.regName}
                                        </option>)}
                                </select>
                                <CreateDivision  regObj={this.state}  />
                                <div className="submitButton">
                                    <button type="submit">Submit</button>
                                </div>
                            </fieldset>
                        </Form>
                    </StyledDivision>
                )}
}
            </Query >
        )

    }
}

export default GetAllRegions;