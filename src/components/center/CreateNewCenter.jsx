
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexSelect, SygexInput, StyledForm, ButtonStyled, StyledButtonBlue } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createCenterMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject, uniqueCodeGen } from "../queries&Mutations&Functions/Functions";

import {
    getAllRegionsQuery,
    getDivisionsOfARegionQuery,
    getSubDivisionsOfADivisionQuery,
    getTownsOfASubDivisionQuery
} from "../queries&Mutations&Functions/Queries";
const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
min-width:15rem;

`;

const validationSchema = Yup
    .object()
    .shape({
        centerName: Yup
            .string()
            .required("Nom du centre obligatoire"),
        centerCode: Yup
            .string()
            .required("Code du centre obligatoire"),
        centerNumber: Yup
            .number()
            .required("Numero du centre obligatoire"),
        regionID: Yup
            .string()
            .required("Choix d'une Région obligtoire"),
        divisionID: Yup
            .string()
            .required("Choix d'un Département obligtoire"),
        subDivisionID: Yup
            .string()
            .required("Choix de l'arrondissement obligtoire"),
        townID: Yup
            .string()
            .required("Choix de la ville obligtoire")
    });

class CreateNewCenter extends Component {

    initialValues = {
        centerName: "",
        centerCode: "",
        centerNumber: "",
        townID: "12",
        divisionID: "12",
        subDivisionID: "12",
        regionID: "12",
    };

    state = { regionID: "", divisionID: "", subDivisionID: "" };

    handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'number' ? parseInt(value) : value;
        this.setState({ [name]: val });
    };


    render() {
        const { regionID, divisionID, subDivisionID } = this.state;

        this.initialValues.regionID = regionID;
        this.initialValues.divisionID = divisionID;
        this.initialValues.subDivisionID = subDivisionID;

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
                                                <Query
                                                    query={getTownsOfASubDivisionQuery}
                                                    variables={refinedSubDiv && getSelectedObject(refinedSubDiv, subDivisionID)}
                                                >
                                                    {({ data, loading, error }) => {
                                                        {
                                                            loading && <p>Loading...</p>;
                                                        }
                                                        {
                                                            error && <Error>error={error}</Error>;
                                                        }

                                                        const village = data.subDivision;

                                                        const allTowns = { ...village };

                                                        const { town } = allTowns;
                                                        const refinedTown = town && town.map(({ __typename, townName, townCode, ...others }) => others);
                                                        const townsOptions = town &&
                                                            town.map(item => (
                                                                <option value={item.id} key={item.id}>
                                                                    {item.townName}
                                                                </option>
                                                            ))
                                                        return (

                                                            <Mutation mutation={createCenterMutation}>
                                                                {(createCenter, { loading, error }) => (
                                                                    <Formik
                                                                        method="POST"
                                                                        initialValues={this.initialValues}
                                                                        validationSchema={validationSchema}
                                                                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                                                                            const res = await createCenter({
                                                                                variables:
                                                                                {
                                                                                    ...values,
                                                                                    centerSecretCode: uniqueCodeGen(18),
                                                                                    town: refinedTown && getSelectedObject(refinedTown, values.townID)
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
                                                                            <h4>Crée Nouveau Centre</h4>
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
                                                                                            <SygexSelect onChange={this.handleChange} name="subDivisionID">
                                                                                                <option>L'Arrondissement</option>
                                                                                                {subDivisionsOptions}
                                                                                            </SygexSelect>
                                                                                            <SygexSelect name="townID">
                                                                                                <option>La Ville</option>
                                                                                                {townsOptions}
                                                                                            </SygexSelect>
                                                                                            <SygexInput name="centerName" type="text" placeholder="Nom du centre" />
                                                                                            <SygexInput name="centerCode" type="text" placeholder="Code du centre" />
                                                                                            <SygexInput name="centerNumber" type="number" placeholder="Numero du centre" />

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
                    )
                }
                }
            </Query>

        );
    }
}
export default CreateNewCenter;