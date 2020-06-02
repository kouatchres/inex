
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createSeriesMutation } from '../queries&Mutations&Functions/Mutations';
import { getAllEducationTypesQuery, getAllSeriesQuery } from '../queries&Mutations&Functions/Queries';
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
		seriesName: Yup
			.string()
			.required('Libéllé de la série obligatoire'),
		seriesCode: Yup
			.string()
			.required('Code de la série obligatoire'),
		educTypeID: Yup.string().required("Choissisez un type d'enseignement")
	});

class CreateNewSeries extends Component {
	initialFormState = {
		seriesName: '',
		seriesCode: '',
		educTypeID: "",
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
					console.log(educationTypes);
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
						<Mutation mutation={createSeriesMutation}>
							{(createSeries, { loading, error }) => (
								<Formik
									method="POST"
									initialValues={this.initialFormState}
									validationSchema={validationSchema}
									onSubmit={async (values, actions, setSubmitting, resetForm) => {
										const res = await createSeries({
											variables:
											{
												...values,
												educationType: refinedEducTypes && getSelectedObject(refinedEducTypes, values.educTypeID)
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
										<h4>Crée Nouvelle Série</h4>
										<Error error={error} />
										<StyledForm>
											<Form>
												<AllControls>
													<InputGroup>

														<SygexSelect name="educTypeID">
															<option>Choisir le Type d'enseignement</option>
															{educTypeOptions}
														</SygexSelect>
														<SygexInput name="seriesName" type="text" placeholder="Libéllé de la Série" />
														<SygexInput name="seriesCode" type="text" placeholder="Code de la Série" />

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
			</Query>

		);
	}
}
export default CreateNewSeries;