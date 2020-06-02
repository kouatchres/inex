
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexSelect, SygexInput, StyledForm, ButtonStyled, StyledButtonBlue } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createTownMutation } from '../queries&Mutations&Functions/Mutations';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
import {
    getAllRegionsQuery,
    getDivisionsOfARegionQuery,
    getSubDivisionsOfADivisionQuery
} from '../queries&Mutations&Functions/Queries';

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
`;

const validationSchema = Yup
    .object()
    .shape({
        townName: Yup
            .string()
            .required("Nom de l'arrondissement obligatoire"),
        townCode: Yup
            .string()
            .required("Code de l'arrondissement obligatoire"),
        regionID: Yup
            .string()
            .required("Choix d'une Région obligtoire"),
        divisionID: Yup
            .string()
            .required("Choix d'un Département obligtoire"),
        subDivisionID: Yup
            .string()
            .required("Choix d'un Département obligtoire")
    });

class CreateNewTown extends Component {

    initialValues = {
        townName: '',
        townCode: '',
        regionID: "",
        divisionID: "",
        subDivisionID: ""

    };

    state = { regionID: "", divisionID: "" };

    handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'number' ? parseInt(value) : value;
        this.setState({ [name]: val });
    };


    render() {
        const { regionID, divisionID } = this.state;

        this.initialValues.regionID = regionID;
        this.initialValues.divisionID = divisionID;

        return (
            <Query query={getAllRegionsQuery} >
                {({ data, loading, error }) => {
                    {
                        loading && <p>Loading...</p>;
                    }
                    {
                        error && <Error error={error} />;
                    }
                    const { regions } = data
                    const refinedRegions = regions && regions.map(({ __typename, ...others }) => others)
                    const regionOptions = refinedRegions && refinedRegions.map((item) => (<option value={item.id} key={item.id}>{item.regName}  </option>))

                    return (
                        <Query query={getDivisionsOfARegionQuery}
                            variables={regions && getSelectedObject(refinedRegions, regionID)}
                        >
                            {({ data, loading, error }) => {
                                {
                                    loading && <p>Loading...</p>;
                                }
                                {
                                    error && <Error error={error} />;
                                }
                                console.log(refinedRegions);
                                const { region } = data;
                                const allDivs = { ...region };
                                const { division } = allDivs;
                                console.log(division);
                                const refinedDivision = division && division.map(({ __typename, divName, ...others }) => others);
                                const divisionOptions =
                                    division &&
                                    division.map(item => (
                                        <option value={item.id} key={item.id}>{item.divName}</option>));

                                return (
                                    <Query
                                        query={getSubDivisionsOfADivisionQuery}
                                        variables={refinedDivision && getSelectedObject(refinedDivision, divisionID)}
                                    >
                                        {({ data, loading, error }) => {
                                            {
                                                loading && <p>Loading...</p>;
                                            }
                                            {
                                                error && <Error error={error} />;
                                            }
                                            const { division: departement } = data;

                                            const allSubDivs = { ...departement };
                                            const { subDivision } = allSubDivs;
                                            console.log(subDivision);
                                            const refinedSubDiv =
                                                subDivision &&
                                                subDivision.map(({ __typename, subDivName, ...others }) => others);
                                            console.log(refinedSubDiv)

                                            const subDivisionsOptions =
                                                subDivision &&
                                                subDivision.map((item) => (
                                                    <option value={item.id} key={item.id}>{item.subDivName}
                                                    </option>
                                                ));

                                            return (

                                                <Mutation mutation={createTownMutation}>
                                                    {(createTown, { loading, error }) => (
                                                        <Formik
                                                            method="POST"
                                                            initialValues={this.initialValues}
                                                            validationSchema={validationSchema}
                                                            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                                                                const res = await createTown({
                                                                    variables:
                                                                    {
                                                                        ...values,
                                                                        subDiv: refinedSubDiv && getSelectedObject(refinedSubDiv, values.subDivisionID)
                                                                    }
                                                                });
                                                                setTimeout(() => {
                                                                    console.log(JSON.stringify(values, null, 2));
                                                                    console.log(res);
                                                                    actions.setSubmitting(false);
                                                                    actions.resetForm(true);
                                                                }, 400);
                                                            }}>
                                                            <MinimStyledPage>
                                                                <h4>Crée Nouvelle Ville</h4>
                                                                <Error error={error} />
                                                                <StyledForm>
                                                                    <Form>
                                                                        <AllControls>
                                                                            <InputGroup>

                                                                                <SygexSelect onChange={this.handleChange} name="regionID">
                                                                                    <option>La Region</option>
                                                                                    {regionOptions}
                                                                                </SygexSelect>
                                                                                <SygexSelect onChange={this.handleChange} name="divisionID">
                                                                                    <option>Le  Departement</option>
                                                                                    {divisionOptions}
                                                                                </SygexSelect>
                                                                                <SygexSelect name="subDivisionID">
                                                                                    <option>L'Arrondissement</option>
                                                                                    {subDivisionsOptions}
                                                                                </SygexSelect>
                                                                                <SygexInput name="townName" type="text" placeholder="Nom de la Ville" />
                                                                                <SygexInput name="townCode" type="text" placeholder="Code de la Ville" />

                                                                            </InputGroup>
                                                                            <ButtonStyled>
                                                                                <StyledButtonBlue type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButtonBlue>
                                                                            </ButtonStyled>
                                                                        </AllControls>
                                                                    </Form>
                                                                </StyledForm>
                                                            </MinimStyledPage>
                                                        </Formik>
                                                    )
                                                    }
                                                </Mutation>
                                            )
                                        }
                                        }
                                    </Query>
                                )
                            }
                            }
                        </Query>
                    )
                }
                }
            </Query>

        );
    }
}
export default CreateNewTown;