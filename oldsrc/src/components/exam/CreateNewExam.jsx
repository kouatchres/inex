
import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createExamMutation } from '../queries&Mutations&Functions/Mutations'

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
    examName: Yup
      .string()
      .required("Nom de l'examen obligatoire"),
    examCode: Yup
      .string()
      .required("Code de l'examen obligatoire")
  });

class CreateNewExam extends Component {
  initialFormState = {
    examName: '',
    examCode: ''
  }

  render() {
    return (
      <Mutation mutation={createExamMutation}>
        {(createExam, { loading, error }) => (
          <Formik
            method="POST"
            initialValues={this.initialFormState}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
              const res = await createExam({ variables: values });
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                console.log(res);
                actions.resetForm(true);
                actions.setSubmitting(false);
              }, 400);
            }}>
            <MinimStyledPage>
              <h4>Crée Examen</h4>
              <Error error={error} />
              <StyledForm>
                <Form>
                  <AllControls>
                    <InputGroup>
                      <SygexInput name="examName" type="text" placeholder="Nom Examen" />
                      <SygexInput name="examCode" type="text" placeholder="Code Examen" />

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