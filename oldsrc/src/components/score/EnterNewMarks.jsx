
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, SygexSelect, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { updateScoreMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject } from "../queries&Mutations&Functions/Functions";
import {
    getAllEducationTypesQuery,
    getAllSubjectsOfASeriesQuery,
    getAllSeriesOfAnEducationTypeQuery
} from "../queries&Mutations&Functions/Queries";

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    min-width:13rem;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
/* min-width: 17rem; */
`;

const validationSchema = Yup
    .object()
    .shape({
        candExamSecretCode: Yup
            .string()
            .required("Nom Du type d'Enseignement Obligatoire"),
        educTypeID: Yup
            .string()
            .required("Choix Du type d'Enseignement Obligatoire"),
        subjectSeriesID: Yup
            .string()
            .required("Choix de la matière Obligatoire"),
        seriesID: Yup
            .string()
            .required("Choix de la Séries Obligatoire"),
        subjectAve: Yup
            .number()
            .min(0, 'Pas de note négative')
            .max(20, 'Pas de note supérieure a 20')
            .required('Note du candidate obligatoire'),
    });

class EnterNewMarks extends Component {
    initialValues = {
        subjectAve: "",
        seriesID: "12",
        subjectSeriesID: "",
        educTypeID: "12",
        candExamSecretCode: "",


    };
    state = { seriesID: "12", educTypeID: "12" }

    handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseFloat(value) : value;
        this.setState({ [name]: val });
    };

    render() {

        const { seriesID, educTypeID } = this.state
        this.initialValues.seriesID = seriesID
        this.initialValues.educTypeID = educTypeID
        return (
            <Query query={getAllEducationTypesQuery}>
                {({ data, loading, error }) => {
                    {
                        loading && <p>loading...</p>;
                    }
                    {
                        error && <Error error={error} />;
                    }
                    console.log(data);

                    const { educationTypes } = data;
                    console.log(educationTypes);
                    const educTypeOptions =
                        educationTypes &&
                        educationTypes.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.educationTypeName}
                            </option>
                        ));

                    return (
                        <Query
                            query={getAllSeriesOfAnEducationTypeQuery}
                            variables={educationTypes && getSelectedObject(educationTypes, educTypeID)}
                        >
                            {({ data, loading, error }) => {
                                {
                                    loading && <p>loading...</p>;
                                }
                                {
                                    error && <Error error={error} />;
                                }
                                console.log(data);

                                const { educationType } = data;

                                const seriesEducType = { ...educationType };
                                const { series } = seriesEducType;
                                console.log(series);

                                const refinedSeries = series && series.map(({ __typename, seriesName, ...others }) => others);
                                const seriesOptions =
                                    refinedSeries &&
                                    series.map(item => (
                                        <option key={item.id} value={item.id}>
                                            {item.seriesName}
                                        </option>
                                    ));
                                return (
                                    <Query
                                        query={getAllSubjectsOfASeriesQuery}
                                        variables={refinedSeries && getSelectedObject(refinedSeries, seriesID)}
                                    >
                                        {({ data, loading, error }) => {
                                            {
                                                loading && <p>loading...</p>;
                                            }
                                            {
                                                error && <Error error={error} />;
                                            }

                                            console.log(data);
                                            const { series } = data;
                                            const allEducTypes = { ...series };
                                            const { subjectSeries } = allEducTypes;
                                            console.log(subjectSeries);

                                            const refinedSubjectSeries =
                                                subjectSeries && subjectSeries.map(({ __typename, subjectName, subjectCode, ...others }) => others);
                                            const subjectOptions =
                                                subjectSeries &&
                                                subjectSeries.map(item => (
                                                    <option key={item.id} value={item.id}>
                                                        {item.subjectName}
                                                    </option>
                                                ));

                                            return (
                                                <Mutation mutation={updateScoreMutation}>

                                                    {(updateScore, { loading, error }) => (
                                                        <Formik
                                                            method="POST"
                                                            initialValues={this.initialValues}
                                                            validationSchema={validationSchema}
                                                            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                                                                const res = await updateScore({
                                                                    variables: {
                                                                        ...values,
                                                                        subjectSeries: refinedSubjectSeries && getSelectedObject(refinedSubjectSeries, values.subjectSeriesID)
                                                                    }
                                                                });
                                                                setTimeout(() => {
                                                                    console.log(JSON.stringify(values, null, 2));
                                                                    console.log(res);
                                                                    actions.resetForm(true);
                                                                    actions.setSubmitting(false);
                                                                }, 400);
                                                            }}>
                                                            <MinimStyledPage>
                                                                <h4>Notes des candidats</h4>
                                                                <Error error={error} />
                                                                <StyledForm>
                                                                    <Form>
                                                                        <AllControls>
                                                                            <InputGroup>
                                                                                <SygexSelect onChange={this.handleChange} name="educTypeID">
                                                                                    <option value=""  >Type d'Enseignement</option>
                                                                                    {educTypeOptions}
                                                                                </SygexSelect>
                                                                                <SygexSelect onChange={this.handleChange} name="seriesID">
                                                                                    <option value="" >La Séries</option>
                                                                                    {seriesOptions}
                                                                                </SygexSelect>
                                                                                <SygexSelect name="subjectSeriesID">
                                                                                    <option value="" >La Matière</option>
                                                                                    {subjectOptions}
                                                                                </SygexSelect>

                                                                                <SygexInput name="candExamSecretCode" type="text" placeholder="Code secret du candidat" />
                                                                                <SygexInput
                                                                                    name="subjectAve"
                                                                                    type="number"
                                                                                    step="0.001"
                                                                                    placeholder="Note en la matière"
                                                                                />

                                                                            </InputGroup>
                                                                            <ButtonStyled>
                                                                                <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
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
                                        }}</Query>
                                )
                            }}</Query>
                    )
                }
                }</Query >
        );
    }
}
export default EnterNewMarks;