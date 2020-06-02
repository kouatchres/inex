
import React, { Component, useState } from 'react';
import { MinimStyledPage } from '../styles/StyledPage'
import { useMutation} from '@apollo/react-hooks'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createNewCountryMutation } from '../queries&Mutations&Functions/Mutations'

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
    countryName: Yup
      .string()
      .required('Nom du pays obligatoire'),
    countryCode: Yup
      .string()
      .required('Ccde du pays obligatoire')
  });

class CreateNewExam extends Component {
  initialFormState = {
    countryName: '',
    countryCode: ''
  }

  render() {
    const [addCountry]= useMutation(createNewCountryMutation)
    return (
     
          <Formik
            method="POST"
            initialValues={this.initialFormState}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
              const res = await addCountry({ variables: values });
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                console.log(res);
                actions.resetForm(true);
                actions.setSubmitting(false);
              }, 400);
            }}>
            <MinimStyledPage>
              <Error error={error} />
              <h4>Nouveau Pays</h4>
              <StyledForm>
                <Form>
                  <AllControls>
                    <InputGroup>
                      <SygexInput name="countryName" type="text" placeholder="Nom Du pays" />
                      <SygexInput name="countryCode" type="text" placeholder="Code Du pays" />

                    </InputGroup>
                    <ButtonStyled>
                      <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
                    </ButtonStyled>
                  </AllControls>
                </Form>
              </StyledForm>
            </MinimStyledPage>
          </Formik>    );
  }
}
export default CreateNewExam;