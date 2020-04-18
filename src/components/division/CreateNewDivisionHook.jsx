
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import {useMutation, useQuery} from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { getAllRegionsQuery } from '../queries&Mutations&Functions/Queries';
import { createDivisionMutation } from '../queries&Mutations&Functions/Mutations';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';

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
		divName: Yup
			.string()
			.required(' Nom du Département obligatoire'),
		divCode: Yup
			.string()
			.required(' Code du Département obligatoire'),
		regionID: Yup.string().required("Choix d'une region obligatoire")
	});
  const CreateNewDivisionHook=() =>{
  const { loading, error, data } = useQuery(getAllRegionsQuery);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (

								<Formik
									method="POST"
									initialValues={this.initialFormState}
									validationSchema={validationSchema}
									onSubmit={async (values, actions, setSubmitting, resetForm) => {
										const res = await createDivision({
											variables:
											{
												...values,
												region: refinedRegions && getSelectedObject(refinedRegions, values.regionID)
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
										<h4>Division hooks</h4>
										<Error error={error} />
										<StyledForm>
											<Form>
												<AllControls>
													<InputGroup>

														<SygexSelect name="regionID">
															<option>Choisir une Région</option>
															{data.regions.map(region => (<option key={region.id} value={region.id}> {region.regName}</option>))}
														</SygexSelect>
														<SygexInput name="divName" type="text" placeholder="Nom Département" />
														<SygexInput name="divCode" type="text" placeholder="Code Département" />

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
export default CreateNewDivisionHook;