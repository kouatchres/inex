
import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createNewSubjectTypeMutation } from '../queries&Mutations&Functions/Mutations'

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
        subjectTypeName: Yup
            .string()
            .required("Nom Du type d'Enseignement Obligatoire"),
        subjectTypeCode: Yup
            .string()
            .required("Code Du type d'Enseignement Obligatoire")
    });

class CreateNewSubjectType extends Component {
    initialFormState = {
        subjectTypeName: "",
        subjectTypeCode: ""
    }

    render() {
        return (
            <Mutation mutation={createNewSubjectTypeMutation}>
                {(createSubjectType, { loading, error }) => (
                    <Formik
                        method="POST"
                        initialValues={this.initialFormState}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                            const res = await createSubjectType({ variables: values });
                            setTimeout(() => {
                                console.log(JSON.stringify(values, null, 2));
                                console.log(res);
                                actions.resetForm(true);
                                actions.setSubmitting(false);
                            }, 400);
                        }}>
                        <MinimStyledPage>
                            <h4>Crée Type de Matière</h4>
                            <Error error={error} />
                            <StyledForm>
                                <Form>
                                    <AllControls>
                                        <InputGroup>
                                            <SygexInput name="subjectTypeName" type="text" placeholder="Nom du Type de Matière" />
                                            <SygexInput name="subjectTypeCode" type="text" placeholder="Code du Type de Matière" />

                                        </InputGroup>
                                        <ButtonStyled>
                                            <StyledButton type="submit">Valid{loading
                                                ? 'ation en cours'
                                                : 'er'}</StyledButton>
                                        </ButtonStyled>
                                    </AllControls>
                                </Form>
                            </StyledForm>
                        </MinimStyledPage>
                    </Formik>
                )
                }
            </Mutation>

        );
    }
}
export default CreateNewSubjectType;