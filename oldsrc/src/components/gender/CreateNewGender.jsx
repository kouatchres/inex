
import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createNewGenderMutation } from '../queries&Mutations&Functions/Mutations'

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
    genderName: Yup
      .string()
      .required('Required'),
    genderCode: Yup
      .string()
      .required('Required')
  });

class CreateNewExam extends Component {
  initialFormState = {
    genderName: '',
    genderCode: ''
  }

  render() {
    return (
      <Mutation mutation={createNewGenderMutation}>
        {(createGender, { loading, error }) => (
          <Formik
            method="POST"
            initialValues={this.initialFormState}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
              const res = await createGender({ variables: values });
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                console.log(res);
                actions.resetForm(true);
                actions.setSubmitting(false);
              }, 400);
            }}>
            <MinimStyledPage>
              <Error error={error} />
              <h4>Crée Sexe</h4>
              <StyledForm>
                <Form>
                  <AllControls>
                    <InputGroup>
                      <SygexInput name="genderName" type="text" placeholder="Nom Sexe" />
                      <SygexInput name="genderCode" type="text" placeholder="Code Sexe" />

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
export default CreateNewExam;