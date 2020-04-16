
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
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

class CreateNewExam extends Component {
	initialFormState = {
		divName: '',
		divCode: '',
		regionID: "",
	}


	render() {
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
						<Mutation mutation={createDivisionMutation}>
							{(createDivision, { loading, error }) => (


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
										<h4>Crée Département</h4>
										<Error error={error} />
										<StyledForm>
											<Form>
												<AllControls>
													<InputGroup>

														<SygexSelect name="regionID">
															<option>Choisir une Région</option>
															{regionOptions}
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
						</Mutation>
					)
				}
				}
			</Query >

		);
	}
}
export default CreateNewExam;