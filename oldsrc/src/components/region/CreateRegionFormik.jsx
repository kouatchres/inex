import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import Error from '../ErrorMessage'
import * as Yup from 'yup';
import { createNewRegionMutation } from '../queries&Mutations&Functions/Mutations'

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
`;


const validationSchema = Yup.object().shape({
    regName: Yup.string()
        .required('Nom de Région obligatoire'),
    regCode: Yup.string()
        .required('Code de Région obligatoire'),

});

class CreateRegionFormik extends Component {
    initialFormState = {
        regName: '',
        regCode: ''
    }


    render() {
        return (
            <Mutation mutation={createNewRegionMutation} >
                {(createRegion, { loading, error }) => (
                    <Formik
                        initialValues={this.initialFormState}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                            const res = await createRegion({ variables: values })
                            setTimeout(() => {
                                console.log(JSON.stringify(values, null, 2));
                                console.log(res)
                                actions.resetForm(true);
                                actions.setSubmitting(false);
                            }, 400);
                        }}

                    >
                        <MinimStyledPage>
                            <h4>Crée Région</h4>
                            <Error error={error} />
                            <StyledForm>
                                <Form>
                                    <AllControls>
                                        <InputGroup>
                                            <SygexInput
                                                name="regName"
                                                type="text"
                                                placeholder="Nom De la Région"
                                            />
                                            <SygexInput
                                                name="regCode"
                                                type="text"
                                                placeholder="Code de la Région"
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
                )}
            </Mutation>

        );
    }
}
export default CreateRegionFormik;