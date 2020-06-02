
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexSelect, StyledButtonBlueBlue, SygexInput, StyledForm, ButtonStyled, StyledButtonBlue } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { getAllSubjectTypesQuery, getAllEducationTypesQuery } from "../queries&Mutations&Functions/Queries";
import { createNewSubjectMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject } from "../queries&Mutations&Functions/Functions";

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
    subjectName: Yup
      .string()
      .required('Libéllé de la matière obligatoire'),
    subjectCode: Yup
      .string()
      .required('Code de la matière obligatoire'),
    educTypeID: Yup.string().required("Choix d'un type d'enseignement obligatiore"),
    subjectTypeID: Yup
      .string()
      .required("Choix d'un type de matière obligatiore")
  });

class CreateNewSubject extends Component {
  initialFormState = {
    subjectName: '',
    subjectCode: '',
    educTypeID: "",
    subjectTypeID: "",

  }


  render() {
    return (
      <Query query={getAllEducationTypesQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }

          const { educationTypes } = data;

          const educTypeOptions =
            educationTypes &&
            educationTypes.map((item) => (
              <option value={item.id} key={item.id}>
                {item.educationTypeName}
              </option>
            ));

          //*******important function'stripping off __typename')
          const refinedEducTypes =
            educationTypes && educationTypes.map(({ __typename, educationTypeName, ...others }) => others);

          return (
            <Query query={getAllSubjectTypesQuery}>
              {({ data, loading, error }) => {
                {
                  loading && <p>Loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                const { subjectTypes } = data;
                const refinedSubjectType = subjectTypes && subjectTypes.map(({ __typename, ...others }) => others);
                console.log(refinedSubjectType);
                const allSubjctTypes =
                  subjectTypes &&
                  subjectTypes.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.subjectTypeName}
                    </option>
                  ));
                return (
                  <Mutation mutation={createNewSubjectMutation}>
                    {(createSubject, { loading, error }) => (
                      <Formik
                        method="POST"
                        initialValues={this.initialFormState}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                          const res = await createSubject({
                            variables:
                            {
                              ...values,
                              subjectType: refinedSubjectType && getSelectedObject(refinedSubjectType, values.subjectTypeID),
                              educType: refinedEducTypes && getSelectedObject(refinedEducTypes, values.educTypeID)
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
                          <h4>Crée Nouvelle Matière</h4>
                          <Error error={error} />
                          <StyledForm>
                            <Form>
                              <AllControls>
                                <InputGroup>

                                  <SygexSelect name="educTypeID">
                                    <option>Le Type d'enseignement</option>
                                    {educTypeOptions}
                                  </SygexSelect>
                                  <SygexSelect name="subjectTypeID">
                                    <option>Le type de la Matière</option>
                                    {allSubjctTypes}
                                  </SygexSelect>
                                  <SygexInput name="subjectName" type="text" placeholder="Libéllé de la Matière" />
                                  <SygexInput name="subjectCode" type="text" placeholder="Code de la Matière" />

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

    );
  }
}
export default CreateNewSubject;