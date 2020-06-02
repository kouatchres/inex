
import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import Select from 'react-select'
import { customStyle, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createSeriesMutation } from '../queries&Mutations&Functions/Mutations';
import { getAllEducationTypesQuery, getAllSeriesQuery } from '../queries&Mutations&Functions/Queries';
import { getObjectFromID, removeTypename } from '../queries&Mutations&Functions/Functions';

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
		educType: Yup.string().required("Choissisez un type d'enseignement")
	});

const CreateNewSeriesHook = () => {
	const initialValues = {
		seriesName: '',
		seriesCode: '',
		educType: "",
	}

	const { data: dataEducType, loading: loadingEducType, error: errorEducType } = useQuery(getAllEducationTypesQuery)

	{ loadingEducType && <p>Loading...</p>; }
	{ errorEducType && <Error error={errorEducType} />; }

	const getEducationTypes = dataEducType && dataEducType.educationTypes;
	console.log(getEducationTypes);
	const getEducTypeOptions =
		getEducationTypes &&
		getEducationTypes.map((item) => ({ value: item.id, label: item.educationTypeName }));

	const refinedEducTypes =
		educationTypes && removeTypename(getEducTypeOptions);

	const [createSeries, { loading, error }] = useMutation(createSeriesMutation)
	return (

		<Formik
			method="POST"
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={async (values, actions, setSubmitting, resetForm) => {
				const res = await createSeries({
					variables:
					{
						...values,
						educationType: refinedEducTypes && getObjectFromID(values.educType.value)
					}
				});
				setTimeout(() => {
					console.log(JSON.stringify(values, null, 2));
					console.log(res);
					actions.resetForm(true);
					actions.setSubmitting(false);
				}, 200);
			}}>
			{({ values, setFieldValue, isSubmitting }) => {
				return (

					<MinimStyledPage>
						<h4> Nouvelle Série</h4>
						<Error error={error} />
						<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
							<Form>
								<AllControls>
									<InputGroup>

										<Select name="educType" onChange={(value) => (setFieldValue('educType', value))} options={getEducTypeOptions} placeholder={"Type d'Enseignement"} styles={customStyle} disabled={isSubmitting} />
										<SygexInput name="seriesName" type="text" label="Libéllé de la Série" disabled={isSubmitting} />
										<SygexInput name="seriesCode" type="text" label="Code de la Série" disabled={isSubmitting} />

									</InputGroup>
									<ButtonStyled>
										<StyledButton type="submit">Valid{isSubmitting ? 'ation en cours' : 'er'}</StyledButton>
									</ButtonStyled>
								</AllControls>
							</Form>
						</StyledForm>
					</MinimStyledPage>

				)
			}}
		</Formik>


	);
}
export default CreateNewSeriesHook;