
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import Select from 'react-select'
import { customStyle, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createPhaseRankMutation } from '../queries&Mutations&Functions/Mutations';
import { getObjectFromID } from '../queries&Mutations&Functions/Functions';
import {
  getAllPhasesQuery,
  getAllRanksQuery
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
    phase: Yup
      .string()
      .required("Choix de la phase de l'examen Obligatoire"),
    rank: Yup
      .string()
      .required("Choix du poste Obligatoire"),

  });

class NewRegPhaseRank extends Component {
  initialValues = {
    phase: '12',
    rank: '',
  };

  render() {

    return (
      <Query query={getAllPhasesQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          console.log(data);

          const { phases } = data;
          console.log(phases);
          const refinedPhase =
            phases &&
            phases.map(({ __typename, ...others }) => others);

          const getPhases =
            refinedPhase &&
            refinedPhase.map(item => ({ ...item, value: item.id, label: item.phaseName }));

          return (
            <Query query={getAllRanksQuery}>
              {({ data, loading, error }) => {
                {
                  loading && <p>loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                console.log(data);

                const { ranks } = data;

                const refinedRank =
                  ranks &&
                  ranks.map(({ __typename, ...others }) => others);
                const getRanks =
                  refinedRank &&
                  refinedRank.map(item => ({ ...item, value: item.id, label: item.rankName }))

                return (
                  <Mutation mutation={createPhaseRankMutation}>
                    {(createPhaseRank, { loading, error }) => (
                      <Formik
                        method="POST"
                        initialValues={this.initialValues}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                          const res = await createPhaseRank({
                            variables: {
                              ...values,
                              rankName: ranks && values.rank.rankName,
                              rankCode: ranks && values.rank.rankCode,
                              phase: refinedPhase && getObjectFromID(values.phase.id),
                            }
                          });
                          setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            console.log(res);
                            actions.resetForm(true);
                            actions.setSubmitting(false);
                          }, 400);
                        }}>
                        {({ values, setFieldValue, isSubmitting }) => {
                          return (

                            <MinimStyledPage>
                              <h4>Postes des Phases de l'Examen</h4>
                              <Error error={error} />
                              <StyledForm disabled={loading} aria-busy={loading} >
                                <Form>
                                  <AllControls>
                                    <InputGroup>

                                      <Select name="phase" onChange={(value) => (setFieldValue('phase', value))} styles={customStyle} options={getPhases} placeholder={"La Phase de l'Examen"} />

                                      <Select name="rank" onChange={(value) => (setFieldValue('rank', value))} styles={customStyle} options={getRanks} placeholder={"Poste de responsabilité tenu"} />

                                    </InputGroup>
                                    <ButtonStyled>
                                      <StyledButton disables={isSubmitting} type="submit">Valid{loading
                                        ? 'ation en cours'
                                        : 'er'}</StyledButton>
                                    </ButtonStyled>
                                  </AllControls>
                                </Form>
                              </StyledForm>
                            </MinimStyledPage>

                          )
                        }}
                      </Formik>
                    )
                    }
                  </Mutation>
                )
              }}
            </Query>
          )
        }}
      </Query>
    );
  }
}
export default NewRegPhaseRank;